const ONION_TO_RIGHT_ANIMATION = 'tiltToRight 1s 1 forwards';
const ONION_TO_LEFT_ANIMATION = 'tiltToLeft 1s 1 forwards';
const ONION_MODE_GAME_MESSAGE = 'Swipe left and right to peel it!';

const ONION_TOUCH_THRESHOLD = 200;  
const ONION_MOUSE_THRESHOLD = 400;
let onionTouchPosition = {
      x:undefined,
      y:undefined
  }
  let onionTouchKeys = [];
let onionMousePosition = {
      x:undefined,
      y:undefined
  }
  let onionMouseKeys = [];


let isOnionMouseDown = false;
let isOnionTouchDown = false;




 function toOnion(){
        if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){
            hideTitleAndModeList();
            onionLeaf1.style.display='inline';
            onionLeaf2.style.display='inline';
            onionLeaf3.style.display='inline';
            onionLeaf4.style.display='inline';
            onionLeaf5.style.display='inline';
            backHomepage.style.display='inline';
            gameMessage.innerHTML=ONION_MODE_GAME_MESSAGE;  
            gameMessage.style.display='block';
            bgmControl.style.display='inline';
            setTimeout(function(){
 
                let chosenLyrics = '';
                axios.get('../php/get_lyrics.php').then(res=>{
                    chosenLyrics=res.data.lyrics;
                    gameBGM.src=res.data['song_source'];
                    gameBGM.currentTime=BGM_START_TIME;
                    
                    let ansIndexFrom = Math.floor(Math.random()*(chosenLyrics.length-21));  
                    let ansStr = chosenLyrics.slice(ansIndexFrom,ansIndexFrom+8);
                    let final = chosenLyrics.replace(ansStr,`<span id="blank" data-answer="${ansStr}" >&nbsp;&nbsp;?&nbsp;&nbsp;</span>`);
                    let answer = document.createElement("span");
                    let L = 44;
                    let T = 78;
                    answer.id='answer';
                    answer.style.left= L+'%';
                    answer.style.top= T+'%';
                    answer.innerHTML=ansStr;     
                    page.appendChild(answer);   
                    lyrics.innerHTML=final;  
                    lyrics.style.display='block';  
                    window.addEventListener("touchstart",function(e){
                
                        onionTouchPosition.x=e.changedTouches[0].pageX;
                        onionTouchPosition.y=e.changedTouches[0].pageY;
                        isOnionTouchDown = true;
                    })
                    window.addEventListener("touchmove",function(e){
                
                        if(isOnionTouchDown){
                            const   slideDistance = e.changedTouches[0].pageX - onionTouchPosition.x;
                        if(slideDistance<=-ONION_TOUCH_THRESHOLD&&onionTouchKeys.indexOf('swipe left')===-1){
                            onionTouchKeys.push('swipe left');
                            if(onionTouchKeys.indexOf('swipe left')>-1&&onionPeelOrder==1){
                                onionLeaf1.style.animation=ONION_TO_LEFT_ANIMATION;
                                onionPeelOrder++;
                            }else if(onionTouchKeys.indexOf('swipe left')>-1&&onionPeelOrder==3){
                                onionLeaf3.style.animation=ONION_TO_LEFT_ANIMATION;
                                onionPeelOrder++;
                            }else if(onionTouchKeys.indexOf('swipe left')>-1&&onionPeelOrder==5){
                                onionLeaf5.style.animation=ONION_TO_LEFT_ANIMATION;
                                setTimeout(function(){
                                   
                                    answer.style.opacity='1';
                                    if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)document.getElementById('blank').style.fontSize='clamp(16px,4dvh,24px)';
                                    else  document.getElementById("blank").style.fontSize='clamp(16px,4vw,24px)';

                                    document.getElementById("blank").innerHTML=document.getElementById('answer').innerHTML;  
                                    
                                    lyrics.style.animation=ANSWER_RIGHT_ANIMATION;

                                    setTimeout(function(){
                                        lyrics.style.animation='none';
                                        lyrics.style.opacity='0';
                                        lyrics.style.transform='translatey(10%)'; 
                                    },1000);
                                },1000);
                                setTimeout(function(){
                                    
                                    document.getElementById('answer').style.opacity='1';
                                },500); 
                                setTimeout(function(){
                                    page.removeChild(document.getElementById('answer'));
                                },1900); 
                                setTimeout(readyForNextRound('onion'),2000);
                            }
                        }else if(slideDistance>=ONION_TOUCH_THRESHOLD&&onionTouchKeys.indexOf('swipe right')===-1){
                            onionTouchKeys.push('swipe right');
                            if(onionTouchKeys.indexOf('swipe right')>-1&&onionPeelOrder==2){
                                onionLeaf2.style.animation=ONION_TO_RIGHT_ANIMATION;
                                onionPeelOrder++;
                            }else if(onionTouchKeys.indexOf('swipe right')>-1&&onionPeelOrder==4){
                                onionLeaf4.style.animation=ONION_TO_RIGHT_ANIMATION;
                                onionPeelOrder++;
                            }
                        }
                        }
                        
                    })   
                    window.addEventListener("touchend",function(){
                
                        onionTouchPosition.x=undefined;
                        onionTouchPosition.y=undefined;
                        if(onionTouchKeys.indexOf('swipe left')>-1)onionTouchKeys.splice(onionTouchKeys.indexOf('swipe left'),1);
                        else if(onionTouchKeys.indexOf('swipe right')>-1)onionTouchKeys.splice(onionTouchKeys.indexOf('swipe right'),1);
                        isOnionTouchDown = false;
                    }) 
                    singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
                    singerAndSongname.style.display='block';    
    
                    setTimeout(function(){
                        
                        answer.style.opacity='0';
                        onionLeaf1.style.opacity='1';
                        onionLeaf2.style.opacity='1';
                        onionLeaf3.style.opacity='1';
                        onionLeaf4.style.opacity='1';
                        onionLeaf5.style.opacity='1';
                        lyrics.style.opacity='1';
                        lyrics.style.color='black';
                        document.getElementById('blank').style.color='black'; 
                        bgmControl.style.opacity='1';
                        gameMessage.style.opacity='1'; 
                        singerAndSongname.style.opacity='1'; 
                        backHomepage.style.opacity='1';
                    },1000);
                }).catch(err=>console.log(err));
 
 
     
 
 
     
   
   
 
   
   
   
   
   
            },2000); 
        }else{

            hideTitleAndModeList();
            onionLeaf1.style.display='inline';
            onionLeaf2.style.display='inline';
            onionLeaf3.style.display='inline';
            onionLeaf4.style.display='inline';
            onionLeaf5.style.display='inline';
            gameMessage.innerHTML=ONION_MODE_GAME_MESSAGE;  
            gameMessage.style.display='block';
            bgmControl.style.display='inline';
            setTimeout(function(){
 
                let chosenLyrics = '';
                axios.get('../php/get_lyrics.php').then(res=>{
                    chosenLyrics=res.data.lyrics;
                    gameBGM.src=res.data['song_source'];
                    gameBGM.currentTime=BGM_START_TIME;
                    
                    let ansIndexFrom = Math.floor(Math.random()*(chosenLyrics.length-21));  
                    let ansStr = chosenLyrics.slice(ansIndexFrom,ansIndexFrom+8);
                    let final = chosenLyrics.replace(ansStr,`<span id="blank" data-answer="${ansStr}" >&nbsp;&nbsp;?&nbsp;&nbsp;</span>`);
                    let answer = document.createElement("span");
                    let L = 44;
                    let T = 78;
                    answer.id='answer';
                    answer.style.left= L+'%';
                    answer.style.top= T+'%';
                    answer.innerHTML=ansStr;     
                    page.appendChild(answer);   
                    lyrics.innerHTML=final;  
                    lyrics.style.display='block';  
                    window.addEventListener("mousedown",function(e){
                
                        onionMousePosition.x=e.pageX;
                        onionMousePosition.y=e.pageY;
                        isOnionMouseDown = true;
                        console.log(onionMousePosition.x,onionMousePosition.y,isOnionMouseDown);
                        e.preventDefault();
                    })
                    window.addEventListener("mousemove",function(e){
                        if(isOnionMouseDown){
                            console.log(onionPeelOrder,onionMouseKeys);
                            const   slideDistance = e.pageX - onionMousePosition.x;
                            if(slideDistance<=-ONION_MOUSE_THRESHOLD&&onionMouseKeys.indexOf('swipe left')===-1){
                            onionMouseKeys.push('swipe left');
                            if(onionMouseKeys.indexOf('swipe left')>-1&&onionPeelOrder==1){
                                onionLeaf1.style.animation=ONION_TO_LEFT_ANIMATION;
                                onionPeelOrder++;
                            }else if(onionMouseKeys.indexOf('swipe left')>-1&&onionPeelOrder==3){
                                onionLeaf3.style.animation=ONION_TO_LEFT_ANIMATION;
                                onionPeelOrder++;
                            }else if(onionMouseKeys.indexOf('swipe left')>-1&&onionPeelOrder==5){
                                onionLeaf5.style.animation=ONION_TO_LEFT_ANIMATION;
                                setTimeout(function(){
                                    
                                    answer.style.opacity='1';
                                    if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)document.getElementById('blank').style.fontSize='clamp(16px,4dvh,24px)';
                                    else  document.getElementById("blank").style.fontSize='clamp(16px,4vw,24px)';

                                    document.getElementById("blank").innerHTML=document.getElementById('answer').innerHTML;  
                                    
                                    lyrics.style.animation=ANSWER_RIGHT_ANIMATION;

                                    setTimeout(function(){
                                        lyrics.style.animation='none';
                                        lyrics.style.opacity='0';
                                        lyrics.style.transform='translatey(10%)'; 
                                    },1000);
                                },1000);
                                setTimeout(function(){
                                    
                                    document.getElementById('answer').style.opacity='1';
                                },500); 
                                setTimeout(function(){
                                    page.removeChild(document.getElementById('answer'));
                                },1900);
                                setTimeout(readyForNextRound('onion'),2000);
                            }
                            }else if(slideDistance>=ONION_MOUSE_THRESHOLD&&onionMouseKeys.indexOf('swipe right')===-1){
                            onionMouseKeys.push('swipe right');
                            if(onionMouseKeys.indexOf('swipe right')>-1&&onionPeelOrder==2){
                                onionLeaf2.style.animation=ONION_TO_RIGHT_ANIMATION;
                                onionPeelOrder++;
                            }else if(onionMouseKeys.indexOf('swipe right')>-1&&onionPeelOrder==4){
                                onionLeaf4.style.animation=ONION_TO_RIGHT_ANIMATION;
                                onionPeelOrder++;
                            }
                        }
                            console.log(onionPeelOrder,onionMouseKeys,isOnionMouseDown);
                        }else{
                            return;
                        }
                        
                    })   
                    window.addEventListener("mouseup",function(){
                        isOnionMouseDown = false;
                        onionMousePosition.x=undefined;
                        onionMousePosition.y=undefined;
                        if(onionMouseKeys.indexOf('swipe left')>-1&&!isOnionMouseDown)onionMouseKeys.splice(onionMouseKeys.indexOf('swipe left'),1);
                        else if(onionMouseKeys.indexOf('swipe right')>-1&&!isOnionMouseDown)onionMouseKeys.splice(onionMouseKeys.indexOf('swipe right'),1);
                        
                        console.log(isOnionMouseDown,onionMouseKeys);
                    }) 
                    singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
                    singerAndSongname.style.display='block';    
    
                    setTimeout(function(){
                        
                        answer.style.opacity='0';
                        onionLeaf1.style.opacity='1';
                        onionLeaf2.style.opacity='1';
                        onionLeaf3.style.opacity='1';
                        onionLeaf4.style.opacity='1';
                        onionLeaf5.style.opacity='1';
                        lyrics.style.opacity='1';
                        lyrics.style.color='black';
                        document.getElementById('blank').style.color='black'; 
                        bgmControl.style.opacity='1';
                        gameMessage.style.opacity='1'; 
                        singerAndSongname.style.opacity='1'; 
                    },1000);
                }).catch(err=>console.log(err));
 
 
     
 
 
     
   
   
 
   
   
   
   
   
            },2000);

            
            
           
           
            
           
 
 
     
 
 
     
   
   
 
   
   
   
   
   
           
        }
} 






























