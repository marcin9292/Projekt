function playAudio(url) {
    new Audio(url).play();
}

function playW(){
    playAudio('sound/W.mp3');
}

function playS(){
    playAudio('sound/S.mp3');
}

function playD(){
    playAudio('sound/D.mp3');
}

function playF(){
    playAudio('sound/F.mp3');
}

function playG(){
    playAudio('sound/G.mp3');
}

function playH(){
    playAudio('sound/H.mp3');
}

function playJ(){
    playAudio('sound/J.mp3');
}

function playK(){
    playAudio('sound/K.mp3');
}

function playL(){
    playAudio('sound/L.mp3');
}

document.addEventListener('keypress', (event) => {
    var name = event.key;
    if(name === 'w' || name === 'W'){
        playW();
    }
    if(name === 's' || name === 'S'){
        playS();
    }
    if(name === 'd' || name === 'D'){
        playD();
    }
    if(name === 'f' || name === 'F'){
        playF();
    }
    if(name === 'g' || name === 'G'){
        playG();
    }
    if(name === 'h' || name === 'H'){
        playH();
    }
    if(name === 'j' || name === 'J'){
        playJ();
    }
    if(name === 'k' || name === 'K'){
        playK();
    }
    if(name === 'l' || name === 'L'){
        playL();
    }
  }, false);