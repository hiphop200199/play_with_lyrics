const TITLE_SHOWING_SPEED = 200;
const MOBILE_SCREEN_RANGE = 700;
const MOBILE_SCREEN_HEIGHT = 500;
const COLOR_CHANGE_SPEED = 12;

let letters = document.querySelectorAll(".letter");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let bgmControl = document.getElementById("BGM-control");
let modes = document.querySelectorAll(".mode");
let modeIndex = 0;
let titles = document.getElementById("titles"); 
let lyrics = document.getElementById("lyrics");
let throwModeButton = document.getElementById("throw");
let hueRotateAngle = 0;
let waves = document.querySelectorAll("[id*='wave']");













//標題字母按順序顯示
function graduallyShowTitle(){
  setTimeout(function(){
   for(i=0;i<letters.length;i++){
    letters[i].style.opacity='1';
  }
 },TITLE_SHOWING_SPEED);
}



//隱藏標題和按鈕模式組
function hideTitleAndModeList(){
    titles.style.opacity='0';
    for(i=0;i<letters.length;i++){
        letters[i].style.opacity='0';
    }
    modes[modeIndex].style.opacity='0';
    previous.style.opacity='0';
    next.style.opacity='0';
    
    setTimeout(function(){
    titles.style.display='none';
    lyrics.style.opacity='1';
    lyrics.style.transform='none';
    modes[modeIndex].style.display='none';
    previous.style.display='none';
    next.style.display='none';   
    },1000); 
}




//顯示標題和按鈕模式組
function showModeList(){
    setTimeout(function(){
        lyrics.style.display='none';
        previous.style.display='inline';
        modes[modeIndex].style.display='inline';
        next.style.display='inline';   
    },2000); 
    setTimeout(function(){  
        previous.style.opacity='1';
        modes[modeIndex].style.opacity='1'; 
        next.style.opacity='1';     
    },2100);
}



//切換全螢幕/視窗模式，由於IPhone不支援fullscreen API且不支援自動播放，因此原位置改為播放背景音樂按鈕
/*function toggleFullScreen(){
    if(document.fullscreenElement===null){
        document.documentElement.requestFullscreen();
        fullscreen.innerHTML='Window';
    }else{
        document.exitFullscreen();
        fullscreen.innerHTML='Fullscreen';
    }
 }*/  


//下一個模式(往右淡出)
function toNext(){
        modes[modeIndex].style.transform='translatex(10%)';
        modes[modeIndex].style.opacity='0';  
        oldModeFadeout('right');
} 

//上一個模式(往左淡出)
function toPrevious(){
 
        modes[modeIndex].style.transform='translatex(-10%)';
        modes[modeIndex].style.opacity='0';  
        oldModeFadeout('left');


}
//舊模式淡出
function oldModeFadeout(direction){
    let dir = direction == 'left'?'translatex(10%)':'translatex(-10%)';
    setTimeout(function(){
            modes[modeIndex].style.display='none';
            if(direction=='left') modeIndex==0?modeIndex=modes.length-1:modeIndex--;
            else modeIndex==modes.length-1?modeIndex=0:modeIndex++;
            modes[modeIndex].style.display='inline';
            modes[modeIndex].style.transform=dir;
            modes[modeIndex].style.opacity='0';
            newModeShowup();
        },700);
}
//新模式顯示
function newModeShowup(){
    setTimeout(function(){
                modes[modeIndex].style.transform='none';
                modes[modeIndex].style.opacity='1'; 
            },300); 
}

//波浪每一輪變色
function wavesChangeColor(){
    hueRotateAngle==360?hueRotateAngle=0:hueRotateAngle+=COLOR_CHANGE_SPEED;  
    for(i=0;i<waves.length;i++){
    waves[i].style.filter='hue-rotate('+hueRotateAngle+'deg)';
    }
}