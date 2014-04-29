/*
highlight.js v1.0.0
Available via the MIT or new BSD license.
see: http://github.com/jianghai/highlight for details
*/

var Highlight;

(function() {


    /**
     * Pass an html element which you want to highlight.
     * Example:
     *     var el = document.getElementById('myCode');
     *     new Highlight(el);
     */
    Highlight = function(el) {
        this.el = el;
        this.source = el.text;
        this.lang = el.getAttribute('lang') || 'js';

        // '\s' contains '\n', so just use ' '
        this.source = this.source.replace(/ /g, '\u00a0');

        // remove start and end '\n'
        this.source = this.source.replace(/^\s+|\s+$/g, '');

        this.render();
    };


    /**
     * Language syntax highlight rules.
     * Just wrap the matched or the return of callback with span element, the span 
     * element has a className which is value of key name for custom your css style.
     * You can add or edit by yourself.
     */
    // html
    Highlight.html = [{
        name: 'tag', // markup tag
        rule: '(<[\\/!]?[\\w\\d]+|>)',
        callback: function(str) {
            return str.replace('<', '&lt;');
        }
    }, {
        name: 'str', // attribute value
        rule: '(\"[\\s\\S]*?\")'
    }];

    // javascript
    Highlight.js = [{
        name: 'com', // comment
        rule: '(\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/)',
        callback: function(str) {
            // Some js comment has html tags
            return str.replace(/</g, '&lt;');
        }
    }, {
        name: 'str', // string
        rule: '(\'[\\s\\S]*?\'|\"[\\s\\S]*?\")',
        callback: function(str) {
            // Some js string has html tags
            return str.replace(/</g, '&lt;');
        }
    }, {
        name: 'kwd', // keyword
        rule: '\\b(break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|this|throw|try|typeof|var|void|while|with)\\b'
    }, {
        name: 'opt', // operator
        rule: '(\\+|-|\\*|\\/|%|<|>|=|==|===|!=|!==|!|&&|\\|\\||&|\\|)'
    }];

    // Another language

    
    // Get all regexp rules of this lang. 
    var getReg = function(lang, rules) {
        if (getReg[lang]) return getReg[lang];
        var reg = [];
        for (var i = 0; i < rules.length; i++) {
            reg.push(rules[i].rule);
        }
        reg = reg.join('|');

        getReg[lang] = reg;

        return reg;
    };


    /**
     * This is the key action that convert normal code string with all kinds of
     * syntax rules.
     */
    Highlight.prototype.convert = function() {
        var lang = this.lang;
        var rules = Highlight[lang];
        var reg = new RegExp(getReg(lang, rules), 'g');
        this.source = this.source.replace(reg, function() {
            var args = arguments;
            var len = args.length - 1;
            var i = 1;
            for (; i < len; i++) {
                if (args[i] && rules[i - 1]) {
                    if (rules[i - 1].callback) {
                        args[i] = rules[i - 1].callback.call(null, args[i])
                    }
                    return '<span class="' + rules[i - 1].name + '">' + args[i] + '</span>';
                }
            }
        });
        return this.source.replace(/\n/g, '<br>');
    };


    /**
     * Here is the last step, show it in the page.
     */
    Highlight.prototype.render = function() {
        this.getBox().innerHTML = this.convert();
    };


    /**
     * Replace the script element with pre.
     */
    Highlight.prototype.getBox = function() {
        var pre = document.createElement('pre');
        pre.className = this.el.className;
        this.el.parentNode.insertBefore(pre, this.el);
        this.el.parentNode.removeChild(this.el);
        return pre;
    };

})();