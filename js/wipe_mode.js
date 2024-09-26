const WIPE_MODE_GAME_MESSAGE = 'Wipe it!Clean it!';
let isPointDown = false;

function toWipe(){
    
  
        hideTitleAndModeList();   
        if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT)backHomepage.style.display='inline';
            
        

        setTimeout(function(){
    
            let chosenLyrics='';
            axios.get('../php/get_lyrics.php').then(res=>{
                chosenLyrics=res.data.lyrics;
                gameBGM.src=res.data['song_source'];
                gameBGM.currentTime=BGM_START_TIME;
                
                let L = Math.ceil(Math.random()*80+1);  
                let T = Math.ceil(Math.random()*70+1);  
        
                rag.style.left= L+'%';
                rag.style.top= T+'%';
                rag.style.display='block';
              
                
                lyrics.innerHTML=chosenLyrics;  
                lyrics.style.display='block';  
                gameMessage.innerHTML= WIPE_MODE_GAME_MESSAGE; 
                gameMessage.style.display='block'; 
                bgmControl.style.display='inline';  
                singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
                singerAndSongname.style.display='block';
                
                
                rag.addEventListener('mousedown',function(e){
                     if (event.cancelable) event.preventDefault();
                    rag.style.scale = '1.5';
                    isPointDown=true;
                })
                rag.addEventListener('touchstart',function(e){
                     if (event.cancelable) event.preventDefault();
                     rag.style.scale = '1.5';
                    isPointDown=true;
                })
                rag.addEventListener('mousemove',function(e){
                     if (event.cancelable) event.preventDefault();
                    rag.style.scale='1.3';
                    if(isPointDown){
                        if(filterArgument<=0){
                            isPointDown=false;       
                            lyrics.style.filter='none';
                            lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                            rag.style.top = '70%';
                            rag.style.left = '5%';
                            rag.style.transition='1s';
                            lyrics.style.transition='1s';
                            setTimeout(function(){
                                rag.style.opacity='0';
                                lyrics.style.animation='none';
                                lyrics.style.opacity='0';
                                lyrics.style.transform='translatey(10%)';   
                            },1000);
                            setTimeout(readyForNextRound('wipe'),3000);   
                        }else if(rag.getBoundingClientRect().x>=lyrics.getBoundingClientRect().x&&rag.getBoundingClientRect().x+rag.getBoundingClientRect().width<=lyrics.getBoundingClientRect().x+lyrics.getBoundingClientRect().x+lyrics.getBoundingClientRect().width&&rag.getBoundingClientRect().y>=lyrics.getBoundingClientRect().y&&rag.getBoundingClientRect().y+rag.getBoundingClientRect().height<=lyrics.getBoundingClientRect().y+lyrics.getBoundingClientRect().height){
                             rag.style.left = e.clientX-rag.getBoundingClientRect().width/2+'px';
                            rag.style.top = e.clientY-rag.getBoundingClientRect().height/2+'px';
                            rag.style.filter='brightness(120%) contrast(120%)';
                            filterArgument-=0.03;
                            lyrics.style.filter='blur('+filterArgument+'px) grayscale('+filterArgument+'%)';
                        }else{
                             rag.style.left = e.clientX-rag.getBoundingClientRect().width/2+'px';
                            rag.style.top = e.clientY-rag.getBoundingClientRect().height/2+'px';
                            rag.style.filter='none';
                        }
                    }else{
                        return;
                    }
                        
                })
                rag.addEventListener('touchmove',function(e){
                     if (event.cancelable) event.preventDefault();
                    rag.style.scale='1.3';
                    if(isPointDown){
                        if(filterArgument<=0){
                            isPointDown=false;
                            lyrics.style.filter='none';
                            lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                            rag.style.top = '70%';
                            rag.style.left = '5%';
                            rag.style.transition='1s';
                            lyrics.style.transition='1s';
                            setTimeout(function(){
                                rag.style.opacity='0';
                                lyrics.style.animation='none';
                                lyrics.style.opacity='0';
                                lyrics.style.transform='translatey(10%)';   
                            },1000);
                            setTimeout(readyForNextRound('wipe'),3000);   
                        }else if(rag.getBoundingClientRect().x>=lyrics.getBoundingClientRect().x&&rag.getBoundingClientRect().x+rag.getBoundingClientRect().width<=lyrics.getBoundingClientRect().x+lyrics.getBoundingClientRect().x+lyrics.getBoundingClientRect().width&&rag.getBoundingClientRect().y>=lyrics.getBoundingClientRect().y&&rag.getBoundingClientRect().y+rag.getBoundingClientRect().height<=lyrics.getBoundingClientRect().y+lyrics.getBoundingClientRect().height){
                             rag.style.left = e.changedTouches[0].pageX-rag.getBoundingClientRect().width/2+'px';
                            rag.style.top = e.changedTouches[0].pageY-rag.getBoundingClientRect().height/2+'px';
                             rag.style.filter='brightness(120%) contrast(120%)';
                            filterArgument-=0.03;
                            lyrics.style.filter='blur('+filterArgument+'px) grayscale('+filterArgument+'%)';
                        }else{
                           rag.style.left = e.changedTouches[0].pageX-rag.getBoundingClientRect().width/2+'px';
                            rag.style.top = e.changedTouches[0].pageY-rag.getBoundingClientRect().height/2+'px';
                            rag.style.filter='none';
                        }
                    }else{
                        return;
                    }
                        
                })
                rag.addEventListener('mouseup',function(e){
                     if (event.cancelable) event.preventDefault();
                    rag.style.scale='1';
                    isPointDown=false;
                })
                rag.addEventListener('touchend',function(e){
                     if (event.cancelable) event.preventDefault();
                    rag.style.scale='1';
                    isPointDown=false;
                })   
                     
                    
                    
                      
                
                setTimeout(function(){
                    rag.style.opacity='1';
                    lyrics.style.filter='blur('+filterArgument+'px) grayscale('+filterArgument+'%)';
                    lyrics.style.opacity='1';
                    lyrics.style.color='black';
                    bgmControl.style.opacity='1';
                    gameMessage.style.opacity='1';
                    singerAndSongname.style.opacity='1';
                   
                    setTimeout(function(){
                        rag.style.transition='none';
                        lyrics.style.transition='none';
                    },1000);  
                    if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT)backHomepage.style.opacity='1';
                },1000);
            }).catch(err=>console.log(err));
            
        
    
    
        },2000);
    
}