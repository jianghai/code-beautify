Highlight is an module which make your web pages text(mainly the language code) highlight by the default or your custom rules.

### Features

- Any text
- Easy to use with module, such as requirejs, seajs
- Lightweight, core code just less than 100 lines, you can extend it according to your requirements
- Backward compatibility, IE6+, Chrome, FF, Safari.

### Basic usage

html
```html
<!--javascript is default, you need not to set attribute lang-->
<script type="text" class="highlight">
(function(){
    var x = y = 1;
})();
console.log(y);
console.log(x);
</script>
```

javascript
```js
var el = document.querySelector('highlight');
highlight(el);
```

The css was defined by yourself, here is github theme.
```css
.highlight {
    padding: 5px 10px;
    font: 12px/18px Consolas, "Liberation Mono", Menlo, Courier, monospace;
    overflow: auto;
}
.highlight .str {
    color: #dd1144;
}
.highlight .com {
    color: #999988;
     font-style: italic; 
}
.highlight .kwd {
    font-weight: bold;
}
.highlight .kc {
    font-weight: bold;
}
.highlight .nb {
    color: #0086b3;
}
.highlight .opt {
    color: #B38100;
}
.highlight .num {
    color: #009999;
}
.highlight .reg {
    color: #009926;
}
.highlight .lit {
    color: #B90000;
}
.highlight .tag {
    color: navy;
}
.highlight .atn {
    color: #E2A70E;
}
.highlight .atv {
    color: #333;
}
```