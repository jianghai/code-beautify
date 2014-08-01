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
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};