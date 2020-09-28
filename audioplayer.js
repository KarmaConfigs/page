function playAudio(url) {
  var song = new Audio(url);
  song.play();
}

function playMusic(url) {
  var song = new Audio(url);
  song.play();
  song.onended = function() {
    var a = Math.random()*100;
    if (a < 55) {
      chooseRandom();
      alert("The song has ended, picking one for you");
    } else {
      showButton();
      alert("Congratulations, you can choose if the song player will keep playing a random song")
    }
  }
}

function hideBoton() {
  var x = document.getElementById("boton");
  x.style.display = "none";
}

function showButton() {
  var x = document.getElementById("boton");
  x.style.display = "block";
}

function chooseRandom() {
  var a = Math.random()*7;
  var random = Math.random()*100;
  a=Math.floor(a);

  if (random < 99) {
    if(a==0)
    {
      playMusic('./sound/M.mp3');
    }
    if(a==1)
    {
      playMusic('./sound/I.mp3');
    }
    if (a==2) {
     playMusic('./sound/N.mp3');
    }
    if (a==4) {
      playMusic('./sound/E.mp3');
    }
    if (a==5) {
      playMusic('./sound/C.mp3');
    }
    if (a==6) {
      playMusic('./sound/R.mp3');
    }
    if (a==7) {
      playMusic(./sound/T.mp3');
    }
  } else {
    var final = Math.random();
    if (a == 0) {
      playMusic('./sound/A.mp3');
    }
    if (a == 1) {
      playMusic('./sound/F.mp3');
    }
  }
  hideBoton();
}
