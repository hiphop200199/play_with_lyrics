const MOVE_MODE_GAME_MESSAGE = 'Move to correct position!';  
const PC_MOVE_MODE_MOVE_DISTANCE = 10;
const MOBILE_MOVE_MODE_MOVE_DISTANCE = 8;

let mobileMoveMode = document.querySelectorAll(".mobile-move-mode");
let up = document.getElementById("up");
let down = document.getElementById("down");
let left = document.getElementById("left");
let right = document.getElementById("right");
let checkPositionCorrect = document.getElementById("check-position-correct");








 function toMove(){
  
        hideTitleAndModeList();   
        if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){
            backHomepage.style.display='inline';
            for(let i=0;i<mobileMoveMode.length;i++){
                mobileMoveMode[i].style.display='inline';
            }
        } 

        setTimeout(function(){
    
            let chosenLyrics='';
            axios.get('../php/get_lyrics.php').then(res=>{
                chosenLyrics=res.data.lyrics;
                gameBGM.src=res.data['song_source'];
                gameBGM.currentTime=BGM_START_TIME;
                let L = Math.ceil(Math.random()*80+1);  
                let T = Math.ceil(Math.random()*70+1);  
                
                        
                let ansIndexFrom = Math.floor(Math.random()*(chosenLyrics.length-21));  
                
                
                let ansStr = chosenLyrics.slice(ansIndexFrom,ansIndexFrom+5); 

                
                let final = chosenLyrics.replace(ansStr,`<span id="blank" data-answer="${ansStr}" >&nbsp;&nbsp;?&nbsp;&nbsp;</span>`);
                
                
                
                let answer = document.createElement("span");
                answer.id='answer';
                answer.style.left= L+'%';
                answer.style.top= T+'%';
                
                answer.innerHTML=ansStr;

                    
                page.appendChild(answer);   
                
                lyrics.innerHTML=final;  
                lyrics.style.display='block';  
                gameMessage.innerHTML= MOVE_MODE_GAME_MESSAGE; 
                gameMessage.style.display='block'; 
                bgmControl.style.display='inline';  
                singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
                singerAndSongname.style.display='block';
                
                window.addEventListener("keydown",function(e){
                
                    let answer = document.getElementById("answer");  
                    let ansX = answer.getBoundingClientRect().x;  
                    let ansY = answer.getBoundingClientRect().y;
                    let endPointX= document.getElementById("blank").getBoundingClientRect().x;
                    let endPointY= document.getElementById("blank").getBoundingClientRect().y;
            
                    let blank = document.getElementById("blank").getAttribute("data-answer");
                    
                    if(modes[modeIndex].id=='move'){
                        if(answer.innerHTML==blank){ 
                        if(e.key=='ArrowUp'){
                    ansY-=PC_MOVE_MODE_MOVE_DISTANCE;
                    answer.style.top=ansY+'px';
                    } 
                        else if(e.key=='ArrowDown'){
                    ansY+=PC_MOVE_MODE_MOVE_DISTANCE;
                    answer.style.top=ansY+'px';
                    }  else if(e.key=='ArrowLeft'){
                    ansX-=PC_MOVE_MODE_MOVE_DISTANCE;
                    answer.style.left=ansX+'px';
                    }else if(e.key=='ArrowRight'){
                    ansX+=PC_MOVE_MODE_MOVE_DISTANCE;
                    answer.style.left=ansX+'px';
                    }
                        else if(e.key=='Enter'){
                    
                    if(Math.abs(endPointX - ansX)<=100&&Math.abs(endPointY-ansY)<=100){
                        
                     if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)document.getElementById('blank').style.fontSize='clamp(16px,4dvh,24px)';
                else  document.getElementById("blank").style.fontSize='clamp(16px,4vw,24px)';
                    document.getElementById("blank").innerHTML=answer.innerHTML;   

                    page.removeChild(answer);     
                        lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                    setTimeout(function(){
                    
                    lyrics.style.animation='none';
                    lyrics.style.opacity='0';
                    lyrics.style.transform='translatey(10%)';   
                    },1000);
                    setTimeout(readyForNextRound('move'),2000);    
                    }else{
                        lyrics.style.animation=ANSWER_WRONG_ANIMATION;
                    setTimeout(function(){
                    lyrics.style.animation='none';
                    },1000);
                    }   
                    }
                    }
                    }   
                });
                up.addEventListener("touchstart",function(){
                    let answer = document.getElementById("answer");  
                    let ansX = answer.getBoundingClientRect().x;  
                    let ansY = answer.getBoundingClientRect().y;
                    let endPointX= document.getElementById("blank").getBoundingClientRect().x;
                    let endPointY= document.getElementById("blank").getBoundingClientRect().y;
            
                    let blank = document.getElementById("blank").getAttribute("data-answer");
                    ansY-=MOBILE_MOVE_MODE_MOVE_DISTANCE;
                    answer.style.top=ansY+'px';
                })
                down.addEventListener("touchstart",function(){
                    let answer = document.getElementById("answer");  
                    let ansX = answer.getBoundingClientRect().x;  
                    let ansY = answer.getBoundingClientRect().y;
                    let endPointX= document.getElementById("blank").getBoundingClientRect().x;
                    let endPointY= document.getElementById("blank").getBoundingClientRect().y;
            
                    let blank = document.getElementById("blank").getAttribute("data-answer");
                    ansY+=MOBILE_MOVE_MODE_MOVE_DISTANCE;
                    answer.style.top=ansY+'px';
                })
                left.addEventListener("touchstart",function(){
                    let answer = document.getElementById("answer");  
                    let ansX = answer.getBoundingClientRect().x;  
                    let ansY = answer.getBoundingClientRect().y;
                    let endPointX= document.getElementById("blank").getBoundingClientRect().x;
                    let endPointY= document.getElementById("blank").getBoundingClientRect().y;
            
                    let blank = document.getElementById("blank").getAttribute("data-answer");
                    ansX-=MOBILE_MOVE_MODE_MOVE_DISTANCE;
                    answer.style.left=ansX+'px';
                })
                right.addEventListener("touchstart",function(){
                    let answer = document.getElementById("answer");  
                    let ansX = answer.getBoundingClientRect().x;  
                    let ansY = answer.getBoundingClientRect().y;
                    let endPointX= document.getElementById("blank").getBoundingClientRect().x;
                    let endPointY= document.getElementById("blank").getBoundingClientRect().y;
            
                    let blank = document.getElementById("blank").getAttribute("data-answer");
                    ansX+=MOBILE_MOVE_MODE_MOVE_DISTANCE;
                    answer.style.left=ansX+'px';
                })
                checkPositionCorrect.addEventListener("touchstart",function(){
                    let answer = document.getElementById("answer");  
                    let ansX = answer.getBoundingClientRect().x;  
                    let ansY = answer.getBoundingClientRect().y;
                    let endPointX= document.getElementById("blank").getBoundingClientRect().x;
                    let endPointY= document.getElementById("blank").getBoundingClientRect().y;
            
                    let blank = document.getElementById("blank").getAttribute("data-answer");
                    if(Math.abs(endPointX - ansX)<=50&&Math.abs(endPointY-ansY)<=50){
                        
                     if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)document.getElementById('blank').style.fontSize='clamp(16px,4dvh,24px)';
                else  document.getElementById("blank").style.fontSize='clamp(16px,4vw,24px)';
                    document.getElementById("blank").innerHTML=answer.innerHTML;   

                    page.removeChild(answer);     
                        lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                    setTimeout(function(){
                    
                    lyrics.style.animation='none';
                    lyrics.style.opacity='0';
                    lyrics.style.transform='translatey(10%)';   
                    },1000);
                    setTimeout(readyForNextRound('move'),2000);    
                    }else{
                        lyrics.style.animation=ANSWER_WRONG_ANIMATION;
                    setTimeout(function(){
                    lyrics.style.animation='none';
                    },1000);
                    }   
                })
                setTimeout(function(){
                    answer.style.opacity='1';
                    lyrics.style.opacity='1';
                    lyrics.style.color='black';
                    bgmControl.style.opacity='1';
                    gameMessage.style.opacity='1';
                    singerAndSongname.style.opacity='1';
                    document.getElementById("blank").style.color='black';
                   
                    setTimeout(function(){
                        answer.style.transition='none';
                    },1000);  
                    if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){
                        backHomepage.style.opacity='1';
                    for(let i=0;i<mobileMoveMode.length;i++){
                        mobileMoveMode[i].style.opacity='1';
                    }
                    }
                },1000);
            }).catch(err=>console.log(err));
            
        
    
    
        },2000);
    }