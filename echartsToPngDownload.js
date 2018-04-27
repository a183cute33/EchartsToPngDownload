let fileName = "";
var imageType = 'image/png';
var dataURI = this.myChart.getDataURL({
	backgroundColor: '#fff'
});

var ua = window.navigator.userAgent;

if (ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0 || ua.indexOf('Edge') > 0) {
	var dataURItoBlob = function (dataURI) {
		var binary = atob(dataURI.split(',')[1]);
		var array = [];
		for (var i = 0; i < binary.length; i++) {
			array.push(binary.charCodeAt(i));
		}
		return new Blob([new Uint8Array(array)], { type: imageType });
	}

	var blob = dataURItoBlob(dataURI);
	window.navigator.msSaveOrOpenBlob(blob, fileName);
} else {
	var link = document.createElement("a");
	link.setAttribute("href", dataURI);
	link.setAttribute("download", fileName);
	document.body.appendChild(link);
	link.click();
}