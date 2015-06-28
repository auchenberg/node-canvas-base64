# node-canvas-base64

base64 image methods for node-canvas

```
npm install canvas-base64
```

[![build status](http://img.shields.io/travis/auchenberg/node-canvas-base64.svg?style=flat)](http://travis-ci.org/auchenberg/node-canvas-base64)

## Usage

``` js

		var canvasBase64 = require('canvas-base64')

		var imageData = canvasBase64.toImageDataFromBase64('<base64string>')
		var base64 = canvasBase64.toBase64FromImageData('<imageData>')

```

## License

MIT

