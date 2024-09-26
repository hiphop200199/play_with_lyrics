const ANSWER_WRONG_ANIMATION = 'isWrong 1s 1';
const INPUT_MODE_GAME_MESSAGE = 'Input correct answer!';  







 function toInput(){
  
        hideTitleAndModeList();   
        if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){
            backHomepage.style.display='inline';
        } 

        setTimeout(function(){
    
            let chosenLyrics='';
            axios.get('../php/get_lyrics.php').then(res=>{
                chosenLyrics=res.data.lyrics;
                gameBGM.src=res.data['song_source'];
                gameBGM.currentTime=BGM_START_TIME;
                let L = 'calc(50% - 60px)'; 
                let T = 25;  
                
                        
                let ansIndexFrom = Math.floor(Math.random()*(chosenLyrics.length-21));  
                
                
                let ansStr = chosenLyrics.slice(ansIndexFrom,ansIndexFrom+5); 

                
                let final = chosenLyrics.replace(ansStr,`<input type="text" placeholder="&nbsp;&nbsp;?&nbsp;&nbsp;" data-answer="${ansStr}" id="blank"/>`);
                
                
                
                let answer = document.createElement("span");
                answer.id='answer';
                answer.style.left= L;
                answer.style.top= T+'%';
                
                answer.innerHTML=ansStr;

                    
                page.appendChild(answer);   
                
                lyrics.innerHTML=final;  
                lyrics.style.display='block';  
                gameMessage.innerHTML= INPUT_MODE_GAME_MESSAGE; 
                gameMessage.style.display='block'; 
                bgmControl.style.display='inline';  
                singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
                singerAndSongname.style.display='block';
                
                
                let blank = document.getElementById('blank');
                blank.addEventListener('change',function(){
                    if(blank.value===blank.dataset.answer){
                        if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)blank.style.fontSize='clamp(16px,4dvh,24px)';
                        else  blank.style.fontSize='clamp(16px,4vw,24px)';
                        page.removeChild(answer);     
                        lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                        setTimeout(function(){
                            lyrics.style.animation='none';
                            lyrics.style.opacity='0';
                            lyrics.style.transform='translatey(10%)';   
                        },1000);
                        setTimeout(readyForNextRound('input'),2000);    
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
                    blank.style.color='black';
                   
                    setTimeout(function(){
                        answer.style.transition='none';
                    },1000);  
                    if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){
                        backHomepage.style.opacity='1';  
                    }
                },1000);
            }).catch(err=>console.log(err));
            
        
    
    
        },2000);
    }