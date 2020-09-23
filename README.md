# highlights-eta

Add syntax highlighting to the [Eta template engine](https://eta.js.org) (EJS will probably work too)

## Usage

### Browser

Load the module after Highlight.js

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script
  type="text/javascript"
  src="/path/to/highlightjs-eta/dist/eta.min.js"
></script>
<script type="text/javascript">
  hljs.initHighlightingOnLoad()
</script>
```

You can also load from a CDN:

```html
<script
  type="text/javascript"
  src="https://unpkg.com/highlightjs-eta/dist/eta.min.js"
></script>
```

### Node

```js
var hljs = require("highlightjs")
var hljsRobotsTxt = require("highlightjs-robots-txt")

hljs.registerLanguage("robots-txt", hljsRobotsTxt)
hljs.initHighlightingOnLoad()
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
