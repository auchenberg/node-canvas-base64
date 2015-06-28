var Canvas = require('canvas');

function toBase64FromImageData(data) {

  var canvas = new Canvas();
  var context = canvas.getContext('2d');
  canvas.height = data.height;
  canvas.width = data.width;

  context = canvas.getContext('2d');
  context.putImageData(data, 0, 0);

  base64Data = canvas.toDataURL()
  return base64Data;
};

function toImageDataFromBase64(string) {
  var image = new Canvas.Image();
	image.src = string;

	var canvas = new Canvas();
	var context = canvas.getContext('2d');
  var height = image.height;
  var width = image.width;

  canvas.width = width;
  canvas.height = height;
  context.clearRect(0, 0, width, height);
  context.drawImage(image, 0, 0);

	return context.getImageData(0, 0, width, height);
};

module.exports = {
  toBase64FromImageData : toBase64FromImageData,
  toImageDataFromBase64 : toImageDataFromBase64
}
