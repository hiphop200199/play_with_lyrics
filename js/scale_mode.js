const SCALE_MODE_GAME_MESSAGE = 'Scale it properly!';


const scaleTouchPosition = {
    x:undefined,
    y:undefined
}





 function toScale(){
        if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){
            hideTitleAndModeList();
            backHomepage.style.display='inline';
            gameMessage.innerHTML=SCALE_MODE_GAME_MESSAGE;  
            gameMessage.style.display='block';
            bgmControl.style.display='inline';
            setTimeout(function(){
 
                let chosenLyrics = '';
                axios.get('../php/get_lyrics.php').then(res=>{
                    chosenLyrics=res.data.lyrics;
                    gameBGM.src=res.data['song_source'];
                    gameBGM.currentTime=BGM_START_TIME;
                    
                    let randomSize = Math.round(Math.random()*40)
                    let ansIndexFrom = Math.floor(Math.random()*(chosenLyrics.length-21));  
                    let ansStr = chosenLyrics.slice(ansIndexFrom,ansIndexFrom+8);
                    let final = chosenLyrics.replace(ansStr,`<span id="blank" style="background-color:rgba(255, 65, 65, 0.3);font-size:${randomSize}px;transition:none;">${ansStr}</span>`);
                    
                    lyrics.innerHTML=final;  
                    lyrics.style.display='block';  
                    window.addEventListener("touchstart",function(e){
                       scaleTouchPosition.y = e.changedTouches[0].pageY
                    })
                    window.addEventListener("touchmove",function(e){
                        
                        
                        if((e.changedTouches[0].pageY - scaleTouchPosition.y) < 0){
                            let word = document.getElementById('blank')
                            let wordSize = parseFloat(word.style.fontSize.substring(0,word.style.fontSize.length-2))
                            wordSize+=0.02
                            word.style.fontSize = wordSize+"px"
                            
                            if(wordSize>=16&&wordSize<=24){
                                word.style.transition='1s';
                                word.style.fontSize='clamp(16px,4vw,24px)'
                                lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                                setTimeout(function(){
                                
                                lyrics.style.animation='none';
                                lyrics.style.opacity='0';
                                lyrics.style.transform='translatey(10%)';   
                                },1000);
                                setTimeout(readyForNextRound('scale'),2000); 
                                
                            }}else if((e.changedTouches[0].pageY - scaleTouchPosition.y) > 0){
                            let word = document.getElementById('blank')
                            let wordSize = parseFloat(word.style.fontSize.substring(0,word.style.fontSize.length-2))
                            wordSize-=0.02
                            word.style.fontSize = wordSize+"px"
                            
                            if(wordSize>=16&&wordSize<=24){
                                word.style.transition='1s';
                                word.style.fontSize='clamp(16px,4vw,24px)'
                                lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                                setTimeout(function(){
                                
                                lyrics.style.animation='none';
                                lyrics.style.opacity='0';
                                lyrics.style.transform='translatey(10%)';   
                                },1000);
                                setTimeout(readyForNextRound('scale'),2000);    
                                
                            }
                        }else{
                            return
                        }
                    })   
                    window.addEventListener("touchend",function(){
                        scaleTouchPosition.y=undefined    
                    }) 
                    singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
                    singerAndSongname.style.display='block';    
    
                    setTimeout(function(){
                        
                       
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
            gameMessage.innerHTML=SCALE_MODE_GAME_MESSAGE;  
            gameMessage.style.display='block';
            bgmControl.style.display='inline';
            setTimeout(function(){
 
                let chosenLyrics = '';
                axios.get('../php/get_lyrics.php').then(res=>{
                    chosenLyrics=res.data.lyrics;
                    gameBGM.src=res.data['song_source'];
                    gameBGM.currentTime=BGM_START_TIME;
                    
                    let randomSize = Math.round(Math.random()*40)
                    let ansIndexFrom = Math.floor(Math.random()*(chosenLyrics.length-21));  
                    let ansStr = chosenLyrics.slice(ansIndexFrom,ansIndexFrom+8);
                    let final = chosenLyrics.replace(ansStr,`<span id="blank" style="background-color:rgba(255, 65, 65, 0.3);font-size:${randomSize}px;transition:none;">${ansStr}</span>`);
                    
                    lyrics.innerHTML=final;  
                    lyrics.style.display='block';  
                    
                    window.addEventListener('wheel',function(e){
                       
                        if(e.deltaY<0){
                            let word = document.getElementById('blank')
                            let wordSize = parseInt(word.style.fontSize.substring(0,word.style.fontSize.length-2))
                            wordSize-=1
                            word.style.fontSize = wordSize+'px'
                           
                            if(wordSize>=16&&wordSize<=24){
                                word.style.transition='1s';
                                word.style.fontSize='clamp(16px,4vw,24px)'
                                lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                                setTimeout(function(){
                                
                                lyrics.style.animation='none';
                                lyrics.style.opacity='0';
                                lyrics.style.transform='translatey(10%)';   
                                },1000);
                                setTimeout(readyForNextRound('scale'),2000);    
                            }
                        }else if(e.deltaY>0){
                            let word = document.getElementById('blank')
                            let wordSize = parseInt(word.style.fontSize.substring(0,word.style.fontSize.length-2))
                            wordSize+=1
                            word.style.fontSize = wordSize+'px'
                           
                           
                            if(wordSize>=16&&wordSize<=24){
                                word.style.transition='1s';
                                word.style.fontSize='clamp(16px,4vw,24px)'
                                lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                                setTimeout(function(){
                                
                                lyrics.style.animation='none';
                                lyrics.style.opacity='0';
                                lyrics.style.transform='translatey(10%)';   
                                },1000);
                                setTimeout(readyForNextRound('scale'),2000);  
                            }
                        }else{
                            return
                        }
                    })

                    singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
                    singerAndSongname.style.display='block';    
    
                    setTimeout(function(){
                        
                       
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













 




