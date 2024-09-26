const THROW_MODE_GAME_MESSAGE = 'Swipe up to throw!';
const THROW_MODE_ANIMATION ='throwPiece 2s linear forwards';
const TOUCH_THRESHOLD = 200;  
const MOUSE_THRESHOLD = 400;
let touchPosition = {
      x:undefined,
      y:undefined
  }
  let touchKeys = [];
let mousePosition = {
      x:undefined,
      y:undefined
  }
  let mouseKeys = [];







 function toThrow(){
        if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){
            hideTitleAndModeList();
            backHomepage.style.display='inline';
            gameMessage.innerHTML=THROW_MODE_GAME_MESSAGE;  
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
                    let L = Math.round(Math.random()*65+15);
                    let T = Math.round(Math.random()*25+65);
                    answer.id='answer';
                    answer.style.left= L+'%';
                    answer.style.top= T+'%';
                    answer.innerHTML=ansStr;     
                    page.appendChild(answer);   
                    lyrics.innerHTML=final;  
                    lyrics.style.display='block';  
                    window.addEventListener("touchstart",function(e){
                
                        touchPosition.x=e.changedTouches[0].pageX;
                        touchPosition.y=e.changedTouches[0].pageY;
               
                    })
                    window.addEventListener("touchmove",function(e){
                
                        const   slideDistance = e.changedTouches[0].pageY - touchPosition.y;
                        if(slideDistance<=-TOUCH_THRESHOLD&&touchKeys.indexOf('swipe up')===-1){
                            touchKeys.push('swipe up');
                            if(touchKeys.indexOf('swipe up')>-1){
                                throwAPiece();
                            }
                        }
                    })   
                    window.addEventListener("touchend",function(){
                
                        touchPosition.x=undefined;
                        touchPosition.y=undefined;
                        touchKeys.splice(touchKeys.indexOf('swipe up'),1);
                    }) 
                    singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
                    singerAndSongname.style.display='block';    
    
                    setTimeout(function(){
                        
                        answer.style.opacity='1';
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
            gameMessage.innerHTML=THROW_MODE_GAME_MESSAGE;  
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
                    let L = Math.round(Math.random()*65+15);
                    let T = Math.round(Math.random()*25+65);
                    answer.id='answer';
                    answer.style.left= L+'%';
                    answer.style.top= T+'%';
                    answer.innerHTML=ansStr;     
                    page.appendChild(answer);   
                    lyrics.innerHTML=final;  
                    lyrics.style.display='block';  
                    window.addEventListener("mousedown",function(e){
                
                        mousePosition.x=e.pageX;
                        mousePosition.y=e.pageY;
               
                    })
                    window.addEventListener("mousemove",function(e){
                
                        const   slideDistance = e.pageY - mousePosition.y;
                        if(slideDistance<=-MOUSE_THRESHOLD&&mouseKeys.indexOf('swipe up')===-1){
                            mouseKeys.push('swipe up');
                            if(mouseKeys.indexOf('swipe up')>-1){
                                throwAPiece();
                            }
                        }
                    })   
                    window.addEventListener("mouseup",function(){
                
                        mousePosition.x=undefined;
                        mousePosition.y=undefined;
                        mouseKeys.splice(mouseKeys.indexOf('swipe up'),1);
                    }) 
                    singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
                    singerAndSongname.style.display='block';    
    
                    setTimeout(function(){
                        
                        answer.style.opacity='1';
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













 




function throwAPiece(){
    let ans = document.getElementById('answer');              
    let str = ans.innerText;
    ans.style.animation=THROW_MODE_ANIMATION;            
    
    setTimeout(function(){
                        
         if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)document.getElementById('blank').style.fontSize='clamp(16px,4dvh,24px)';
                else  document.getElementById("blank").style.fontSize='clamp(16px,4vw,24px)';
        document.getElementById("blank").innerHTML=answer.innerHTML;   
        page.removeChild(ans);     
        lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
        setTimeout(function(){
                    
            lyrics.style.animation='none';
            lyrics.style.opacity='0';
            lyrics.style.transform='translatey(10%)';   
        },1000);
        setTimeout(readyForNextRound('throw'),2000);   
                        
    },2000);
    
    
}