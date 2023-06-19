function playAudio(url) {
    new Audio(url).play();
}

document.addEventListener('keypress', (event) => {
    var name = event.key;
    if(name === 'w' || name === 'W'){
        playAudio('sound/W.mp3');
    }
    if(name === 's' || name === 'S'){
        playAudio('sound/S.mp3');
    }
    if(name === 'd' || name === 'D'){
        playAudio('sound/D.mp3');
    }
    if(name === 'f' || name === 'F'){
        playAudio('sound/F.mp3');
    }
    if(name === 'g' || name === 'G'){
        playAudio('sound/G.mp3');
    }
    if(name === 'h' || name === 'H'){
        playAudio('sound/H.mp3');
    }
    if(name === 'j' || name === 'J'){
        playAudio('sound/J.mp3');
    }
    if(name === 'k' || name === 'K'){
        playAudio('sound/K.mp3');
    }
    if(name === 'l' || name === 'L'){
        playAudio('sound/L.mp3');
    }
  }, false);