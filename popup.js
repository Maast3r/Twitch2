/*
	on document load action
	assigns the button to do the thing
*/

function click3(e){
	console.log("add dat stream doe");
	chrome.tabs.executeScript(null, {file: "custom.js"});
}

document.addEventListener('DOMContentLoaded', function (){
    var submit = document.getElementById("submit");

    submit.addEventListener('click', click3);
});
