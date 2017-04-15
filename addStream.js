function addStream(){
    var stream = "<div id='twitch2-go-stream-wrapper' class='twitch2-go-stream-center'><button id='twitch2-go-close-button' class='mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored'><i class='material-icons' style='font-size: 12px;'>clear</i></button><iframe id='twitch2-go-stream' src='https://player.twitch.tv/?channel=" + name + "' frameborder='0' scrolling='no' allowfullscreen='true'></iframe>";
    document.body.innerHTML += stream;
    adjustStream();
    closeStream();
}

HIDDEN = false;

function adjustStream(){
    document.onkeypress = function(e){
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        var streamWrapper = document.getElementById('twitch2-go-stream-wrapper');
        console.log(keyCode);
        if (keyCode == 44) {
            streamWrapper.style.width = (streamWrapper.offsetWidth - 4) + 'px';
            streamWrapper.style.height = (streamWrapper.offsetHeight - 3) + 'px';
        } else if (keyCode == 46) {
            streamWrapper.style.width = (streamWrapper.offsetWidth + 4) + 'px';
            streamWrapper.style.height = (streamWrapper.offsetHeight + 3) + 'px';
        } else if (keyCode == 59) {
            if (HIDDEN) {
                streamWrapper.style.display = "block";
            } else {
                streamWrapper.style.display = "none";
            }
            HIDDEN = !HIDDEN;
        }
    };  
}

function closeStream(){
    var button = document.getElementById("twitch2-go-close-button");
    button.onclick = function(){
        deleteDiv();
    }
}

function deleteDiv(){
      if(document.getElementById("twitch2-go-stream-wrapper")){
            var wrapper = document.getElementById("twitch2-go-stream-wrapper");
        wrapper.parentNode.removeChild(wrapper);
      }
}

function start(){
    deleteDiv();
    addStream();
}

start();
