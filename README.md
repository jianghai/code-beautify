highlight is an module which parse your string to new "marked" string by the default or your custom rules.

### Basic usage

```js
var converted = highlight('var a = 1;', 'js');
console.log(converted); // "<span class="kwd">var</span> a <span class="opt">=</span> <span class="num">1</span>;"
```

### Custom rules

```js
// 'name' is the second parameter of highlight
highlight.rules['name'] = [{
    name: 'com', // tag className
    rule: '(<!--[\\s\\S]*?-->)',
    callback: function(str) {
        return str.replace(/</g, '&lt;');
    } // sometimes the result need to be parsed again
}]
```