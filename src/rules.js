module.exports = {
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
    // jsx
    name: 'tag',
    rule: '(<[\\/!]?[\\w-\\.]+|>)',
    callback: function(str) {
      return str.replace('<', '&lt;');
    }
  }, {
    name: 'attr',
    rule: '\\b([\\w-:]+[=>])'
  }, {
    name: 'str', // string
    rule: '(\'[\\s\\S]*?\'|\"[\\s\\S]*?\")',
    callback: function(str) {
      // Some js string has html tags
      return str.replace(/</g, '&lt;');
    }
  }, {
    name: 'kwd', // keyword
    rule: '\\b(import|from|export|function|break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|this|throw|try|typeof|var|let|const|void|while|with)\\b'
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
  }],

  sh: [{
    name: 'com', // comment
    rule: '(#.*)'
  }],

  java: [{
    name: 'com', // comment
    rule: '(\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/)'
  }, {
    name: 'kwd', // keyword
    rule: '\\b(public|class|extends|protected|void|throws)\\b'
  }]
}