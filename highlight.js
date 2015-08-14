/*
highlight.js v1.0.0
Available via the MIT or new BSD license.
see: http://github.com/jianghai/highlight for details
*/

(function() {

  /**
   * Parse normal code string new "marked" string by all kinds of
   * syntax rules.
   */
  var parse = function(source, lang) {

    // Remove \n in the start
    source = source.replace(/^\n/g, '');

    // Replace whitespace with entity
    // '\s' contains '\n', so just use ' '
    // source = source.replace(/ /g, '\u00a0');

    var reg = getReg(lang);
    if (reg) {
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
    }
    
    return source.replace(/\n/g, '<br>');
  };


  /**
   * Get all regexp rules of this lang.
   */
  var getReg = function(lang) {
    if (getReg[lang]) return getReg[lang];
    var reg = [];
    var rules = highlight.rules[lang];
    if (rules) {
      for (var i = 0; i < rules.length; i++) {
        reg.push(rules[i].rule);
      }
    }
    reg = reg.join('|');

    getReg[lang] = reg;

    return reg;
  };


  /**
   * Outer interface
   */
  var highlight = function(source, lang) {
    return parse(source, lang);
  };


  /**
   * Language syntax highlight rules.
   * Just wrap the matched or the return of callback with span element, the span
   * element has a className which is value of key name for custom your css style.
   * You can add or edit by yourself.
   */
  highlight.rules = {

    markup: [{
      name: 'com',
      rule: '(<!--[\\s\\S]*?-->)',
      callback: function(str) {
        return str.replace(/</g, '&lt;');
      }
    }, {
      name: 'tag',
      rule: '(<[\\/!]?[\\w-]+|>)',
      callback: function(str) {
        return str.replace('<', '&lt;');
      }
    }, {
      name: 'attr',
      rule: '\\b([\\w-:]+[=>])'
    }, {
      name: 'str', // attribute value
      rule: '(\"[\\s\\S]*?\")'
    }],

    css: [{
      name: 'tag',
      rule: '(<[\\/!]?[\\w\\d]+|>)',
      callback: function(str) {
        return str.replace('<', '&lt;');
      }
    }, {
      name: 'str', // attribute value
      rule: '(\"[\\s\\S]*?\")'
    }],

    js: [{
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
      rule: '\\b(function|break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|this|throw|try|typeof|var|void|while|with)\\b'
    }, {
      name: 'kc', // key constant
      rule: '\\b(true|false|undefined|null|Infinity)\\b'
    }, {
      name: 'nb', // built-in object
      rule: '\\b(Array|console|Date|document|Function|isFinite|isNaN|Math|Object|parseInt|parseFloat|RegExp|string|window)\\b'
    }, {
      name: 'opt', // operator
      rule: '(\\+|-|\\*|\\/|%|<|>|=|==|===|!=|!==|!|&&|\\|\\||&|\\|)'
    }, {
      name: 'num', // number
      rule: '(\\d+)'
    }]

    // Another language
  };


  /**
   * Environment check
   */
  if (typeof module !== 'undefined' && module.exports) {
    // CMD
    module.exports = highlight;
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define('highlight', [], function() {
      return highlight;
    });
  } else {
    // Tranditional
    this.highlight = highlight;
  }

}).call(this);