function addStream(e){
	var inputValue = document.getElementById("input").value;
	chrome.tabs.insertCSS(null, {file: "material.indigo-pink.min.css"});
	chrome.tabs.executeScript(null, {
		code: "var name = " + JSON.stringify(inputValue)}, function(){
			chrome.tabs.executeScript(null, {file: "material.min.js"});
			chrome.tabs.executeScript(null, {file: "addStream.js"});
	});
}

document.addEventListener('DOMContentLoaded', function (){
	document.onkeydown = function (evt) {
	  var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
	  if (keyCode == 13) {
	    addStream(evt);
	  }
	};
});
