Highlight is an module which make your web pages text(mainly the language code) highlight by the default or your custom rules.

![highlight](https://raw.githubusercontent.com/jianghai/highlight/master/screenshot.png)

### Features

- Any text
- Easy to use with module, such as requirejs, seajs
- Lightweight, core code just less than 100 lines, you can extend it according to your requirements
- Backward compatibility, IE6+, Chrome, FF, Safari.

### Basic usage

html
```html
<!--javascript is default, you need not to set attribute lang-->
<textarea class="highlight" lang="javascript">
(function(){
    var x = y = 1;
})();
console.log(y);
console.log(x);
</textarea>
```

javascript
```js
var el = document.querySelector('highlight');
highlight.init(el);
```

The css was defined by yourself, here is my theme.
```css
.highlight {
    font: 0.9em/1.6 Menlo, Consolas, "Courier New", Courier, "Liberation Mono", monospace;
    border: 10px solid #dadada;
    border-radius: 5px;
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