module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: 
                    '/**\n' +
                    ' * <%= pkg.name %>.min.js v<%= pkg.version%>\n' +
                    ' * Available via the MIT or new BSD license.\n' +
                    ' * see: http://github.com/jianghai/<%= pkg.name %> for details.\n' +
                    ' */\n'
            },
            build: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }
        },
        copy: {
            main: {
                src: '<%= pkg.name %>.min.js',
                dest: '../jianghai.github.io/lib/'
            }
        }
    });

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, {
        scope: 'devDependencies'
    });

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'copy']);

};