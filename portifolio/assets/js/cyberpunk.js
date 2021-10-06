
var Hinicial = [200, 450, 550]

function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className = ele.className.trim()+" "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,'');
  }
}

// function drawLines(){
//   const lines = document.getElementsByClassName('line');
//   if(lines.length) {
//     for (let i = 0; i < lines.length; i++) {
//       document.getElementById('grain').removeChild(lines[i]);
//     }
//   }
  
//   for(i = 0; i < document.getElementById('hologram').offsetHeight/10; i++){
//     const line = document.createElement("div");  
//     line.className = `line line-${i}`;
//     line.style.top = `${i * 10}px`;
//     const time = Math.random() * 5;
//     line.style.animation = `lines ${time}s infinite`;
//     document.getElementById('grain').appendChild(line) ;
//   }
// }


document.body.addEventListener("click", function(event) { 
  const music = new Audio('assets/audio/cyberpunk.mp3');
  music.loop =true;
  music.volume = 0.3;
  music.play();
},{
  once: true // This will fire the event once and remove it afterwards
})

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validaH(hposi){
  var h = document.body.offsetHeight - 100;
  if(hposi < 0 ){
    return 0;
  }else if( hposi > h){
    return document.body.offsetHeight;
  }else{
    return hposi;
  }
}

function validaW(wposi){
  var w = document.body.offsetWidth;
  if(wposi < 0 ){
    return 0;
  }else if( wposi > w +100){
    return -100;
  }else{
    return wposi;
  }
}

function movimentarCarroX(element,speed){
  element.style.left =  validaW(Number(element.style.left.replace('px',''))+speed) + 'px';
  setTimeout(() => {
    movimentarCarroX(element,speed);  
  }, );
};
function movimentarCarroY(element,start,angle,speedY){
  if(element.style.left.replace('px','') > document.body.offsetWidth){
    start = Hinicial[getRandomIntInclusive(0, 2)]
    element.style.top = start + 'px';
  }else{
    element.style.top = validaH(start + Math.sin(angle) * 70) + 'px';
  }
  angle += speedY;
  setTimeout(() => {
    movimentarCarroY(element,start,angle,speedY);  
  }, 10);
};


document.addEventListener("DOMContentLoaded", function(event) { 
  const width = document.getElementById('hologram').offsetWidth;
  const heigth = document.getElementById('hologram').offsetHeight;
  document.getElementById('grain').style.width = width+'px';
  document.getElementById('grain').style.height = heigth+'px';
  document.getElementById('borderCorner').style.width = width+'px';
  document.getElementById('borderCorner').style.height = heigth+'px';
  // drawLines();
  

  setInterval(() => {

    const glitchs = document.getElementsByClassName('glitch');
    for (let index = 0; index < glitchs.length; index++) {
      const text = glitchs[index];
      addClass(text,'glitchClass');
      setTimeout(() => {
        removeClass(text,'glitchClass');
      }, 1000);
    }
    const texts = document.getElementsByTagName('p');
    for (let index = 0; index < texts.length; index++) {
      const text = texts[index];
      addClass(text,'glitchClass');
      setTimeout(() => {
        removeClass(text,'glitchClass');
      }, 1000);
    }
    const images = document.getElementsByClassName('imageText');
    for (let index = 0; index < images.length; index++) {
      const text = images[index];
      addClass(text,'glitchImgClass');
      setTimeout(() => {
        removeClass(text,'glitchImgClass');
      }, 1000);
    }
  }, 15000);

  setInterval(() => {
    const footer = document.getElementById('footer');
    addClass(footer,'glitchClass');
    setTimeout(() => {
      removeClass(footer,'glitchClass');
    }, 1500);
  }, 7000);

  setInterval(() => {
    const backgroundLigthing = document.getElementsByClassName('backgroundLigthing')[0];
    const motherShip = document.getElementsByClassName('motherShip');
    addClass(backgroundLigthing,'animated');
    addClass(motherShip[0],'animated');
    setTimeout(() => {
      removeClass(backgroundLigthing,'animated');
      removeClass(motherShip[0],'animated');
    }, getRandomIntInclusive(700, 1000));
  }, 3500);

  const moviments = document.getElementsByClassName('moviment');
  for (let index2 = 0; index2 < moviments.length; index2++) {
    setTimeout(() => {
      moviments[index2].style.left = '0px';
      const start = Hinicial[getRandomIntInclusive(0, 2)];
      moviments[index2].style.top = start+'px';
      movimentarCarroX(moviments[index2],3);   
      movimentarCarroY(moviments[index2],start,0,0.01);   
    }, 1000*index2);
  }
  const movimentsLine = document.getElementsByClassName('movimentRow');
  for (let index2 = 0; index2 < movimentsLine.length; index2++) {
    setTimeout(() => {
      movimentsLine[index2].style.left = '0px';
      const start = getRandomIntInclusive(500, 600);
      movimentsLine[index2].style.top = start+'px';
      movimentarCarroX(movimentsLine[index2],index2+1);   
    }, 2000*index2);
  }
  const pixelMoviment = document.getElementsByClassName('pixelMoviment');
  for (let index2 = 0; index2 < pixelMoviment.length; index2++) {
    setTimeout(() => {
      pixelMoviment[index2].style.left = '0px';
      const start = getRandomIntInclusive(400, 450);
      pixelMoviment[index2].style.top = start+'px';
      movimentarCarroX(pixelMoviment[index2],.2);   
    }, 4000*index2);
  }

});


window.onresize = function(event) {
  const width = document.getElementById('hologram').offsetWidth;
  const heigth = document.getElementById('hologram').offsetHeight;
  document.getElementById('grain').style.width = width+'px';
  document.getElementById('grain').style.height = heigth+'px';
  document.getElementById('borderCorner').style.width = width+'px';
  document.getElementById('borderCorner').style.height = heigth+'px';
  // drawLines();
};


window.countFPS = (function () {
  var lastLoop = (new Date()).getMilliseconds();
  var count = 1;
  var fps = 0;
  return function () {
    var currentLoop = (new Date()).getMilliseconds();
    if (lastLoop > currentLoop) {
      fps = count;
      count = 1;
    } else {
      count += 1;
    }
    lastLoop = currentLoop;
    return fps;
  };
}());

var $out = $('#out');
(function loop() {
    requestAnimationFrame(function () {
      $out.html(countFPS());
      loop();
    });
}());