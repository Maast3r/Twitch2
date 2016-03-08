/*
	on document load action
	assigns the button to do the thing
*/

function addStream(e){
	console.log("add dat stream doe");
	chrome.tabs.executeScript(null, {file: "addStream.js"});
}

document.addEventListener('DOMContentLoaded', function (){
    var submit = document.getElementById("submit");

    submit.addEventListener('click', addStream);
});
