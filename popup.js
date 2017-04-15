window.addEventListener('load', function(evt) {
    function addStream(){
        var inputValue = document.getElementById("stream-to-add").value;
        chrome.tabs.executeScript(null, {
            code: "var name = " + JSON.stringify(inputValue)}, function() {
                chrome.tabs.executeScript(null, {file: "addStream.js"});
        });
    }

    document.getElementById('stream-to-add').onkeypress = function(e){
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == 13) {
            addStream(e);
      } 
    };
});
