window.addEventListener('load', function(evt) {
	function addStream(e){
		var inputValue = document.getElementById("streamToAdd").value;
		chrome.tabs.insertCSS(null, {file: "material.indigo-pink.min.css"});
		chrome.tabs.executeScript(null, {
			code: "var name = " + JSON.stringify(inputValue)}, function(){
				chrome.tabs.executeScript(null, {file: "material.min.js"});
				chrome.tabs.executeScript(null, {file: "addStream.js"});
		});
	}

	document.getElementById('streamToAdd').onkeypress = function(e){
		if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
		if (keyCode == 13) {
	    addStream(e);
	  }
	};
});
