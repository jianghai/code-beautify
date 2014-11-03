Highlight is an module which parse your string to new "marked" string by the default or your custom rules.

### Basic usage

javascript
```js
var converted = highlight('var a = 1;', 'js');
console.log(converted); // "<span class="kwd">var</span> a <span class="opt">=</span> <span class="num">1</span>;"
```