/*
highlight.js v1.0.0
Available via the MIT or new BSD license.
see: http://github.com/jianghai/highlight for details
*/

var highlight;

(function() {

    var el;
    var lang;
    var source;

    /**
     * Here is the last step, show it in the page.
     */
    var render = function() {
        getBox().innerHTML = convert(lang);
    };


    /**
     * Replace the script element with pre.
     */
    var getBox = function() {
        var pre = document.createElement('pre');
        pre.className = el.className;
        el.parentNode.insertBefore(pre, el);
        el.parentNode.removeChild(el);
        return pre;
    };


    /**
     * This is the key action that convert normal code string with all kinds of
     * syntax rules.
     */
    var convert = function(lang) {
        var rules = highlight.rules[lang];
        var reg = new RegExp(getReg(lang), 'g');

        source = source.replace(reg, function() {
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
        return source.replace(/\n/g, '<br>');
    };


    /**
     * Get all regexp rules of this lang.
     */
    var getReg = function(lang) {
        if (getReg[lang]) return getReg[lang];
        var reg = [];
        var rules = highlight.rules[lang];
        for (var i = 0; i < rules.length; i++) {
            reg.push(rules[i].rule);
        }
        reg = reg.join('|');

        getReg[lang] = reg;

        return reg;
    };


    /**
     * Pass an html element which you want to highlight.
     * Example:
     *     var el = document.getElementById('myCode');
     *     highlight.init(el);
     */
    highlight = function(node) {
        el = node;
        lang = el.getAttribute('lang') || 'javascript';
        source = el.value || el.innerText;

        // '\s' contains '\n', so just use ' '
        source = source.replace(/ /g, '\u00a0');

        render();
    };


    /**
     * Language syntax highlight rules.
     * Just wrap the matched or the return of callback with span element, the span
     * element has a className which is value of key name for custom your css style.
     * You can add or edit by yourself.
     */
    highlight.rules = {

        // markup
        markup: [{
            name: 'tag', // markup tag
            rule: '(<[\\/!]?[\\w\\d]+|>)',
            callback: function(str) {
                return str.replace('<', '&lt;');
            }
        }, {
            name: 'str', // attribute value
            rule: '(\"[\\s\\S]*?\")'
        }],

        // javascript
        javascript: [{
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
        }]

        // Another language
    };


    /**
     * AMD enabled
     */
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return highlight;
        });
    }
})();