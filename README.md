Highlight is an module which make your web pages text(mainly the language code) highlight by the default or your custom rules.

![highlight](https://raw.githubusercontent.com/jianghai/highlight/master/screenshot.png)

### Features

- Any text
- Easy to use with module, such as requirejs, seajs
- lightweight, core code just less than 100 lines, you can extend it according to your requirements

### Basic usage

```html
<code class="highlight" lang="js">
(function(){
    var x = y = 1;
})();
console.log(y);
console.log(x);
</code>
```

```js
var el = document.querySelector('highlight');
new Highlight(el);
```

The css was defined by yourself, here is my theme.
```css
.highlight {
    line-height: 1.5;
    background-color: #FAF7ED;
    padding: 10px;
}
.highlight .str {
    color: #E56363;
}
.highlight .com {
    color: #ACACAC;
}
.highlight .kwd {
    color: #B38100;
}
.highlight .opt {
    color: #B38100;
}
.highlight .tag {
    color: #689C00;
}
```