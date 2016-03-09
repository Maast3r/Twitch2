function addStream(e){
	var inputValue = document.getElementById("input").value;
	chrome.tabs.insertCSS(null, {file: "player.css"});
	chrome.tabs.executeScript(null, {
		code: "var name = " + JSON.stringify(inputValue)}, function(){
		chrome.tabs.executeScript(null, {file: "addStream.js"});
	});
}

document.addEventListener('DOMContentLoaded', function (){
  var submit = document.getElementById("submit");
  submit.addEventListener('click', addStream);
});
