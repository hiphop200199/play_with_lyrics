const BGM_START_TIME = 60;



let gameMessage = document.getElementById("game-message");
let singerAndSongname = document.getElementById("singer-and-songname");
let gameBGM = new Audio();
let breakCount = 0;
let page = document.getElementById("page"); 
let whichModeLyrics = document.getElementById("which-mode-lyrics");
let whichModeCorrect = document.getElementById("which-mode-correct");
let whichModeWrong = document.getElementById("which-mode-wrong");
let rag = document.getElementById('rag');
let filterArgument = 30;
let onionPeelOrder = 1;
let onionLeaf1 = document.getElementById('onion-leaf-1st');
let onionLeaf2 = document.getElementById('onion-leaf-2nd');
let onionLeaf3 = document.getElementById('onion-leaf-3rd');
let onionLeaf4 = document.getElementById('onion-leaf-4th');
let onionLeaf5 = document.getElementById('onion-leaf-5th');

function readyForNextRound(mode){
      gameMessage.style.opacity='0';  
      singerAndSongname.style.opacity='0';  
      gameBGM.pause();
     if(mode =='move'){
    

    
    setTimeout(function(){

    lyrics.innerHTML='';
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
    singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
    singerAndSongname.style.display='block';
    
    
    
    
    setTimeout(function(){
    lyrics.style.opacity='1';
    lyrics.style.transform='none';
    document.getElementById("blank").style.color='black';
    answer.style.opacity='1';
    bgmControl.style.opacity='1';
    gameMessage.style.opacity='1';
    singerAndSongname.style.opacity='1';  
    lyrics.style.color='black';
    setTimeout(function(){
    answer.style.transition='none';
    },1000);  
    wavesChangeColor();  
    },1000);
    }).catch(err=>console.log(err));  
    
    
    
    
    },2000);  
    }
     
    else if(mode =='throw'){
        if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){
           
           
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
                        wavesChangeColor();
                        },1000);
            


                }).catch(err=>console.log(err));
            },2000);
        }else{
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
                        wavesChangeColor();
                        },1000);
            


                }).catch(err=>console.log(err));
            },2000);
        }    
    } 
    else if(mode =='egg'){
        
        let answer = document.getElementById("answer");
        answer.style.opacity='0';
        setTimeout(function(){
           
            page.removeChild(document.getElementById('answer'));
            breakCount = 0;
            let chosenLyrics='';
            axios.get('../php/get_lyrics.php').then(res=>{
                chosenLyrics=res.data.lyrics;
                 gameBGM.src=res.data['song_source'];
                gameBGM.currentTime=BGM_START_TIME;
                let indexFrom = Math.round(Math.random()*(chosenLyrics.length-11));
                let str = chosenLyrics.slice(indexFrom,indexFrom+12); 
                let ans = document.createElement("span");

                ans.id='answer';
                ans.style.left='calc(50% - 80px)'; ans.style.top='calc(70% - 22px)';
                ans.innerHTML=str;
                page.appendChild(ans);  
                let final = chosenLyrics.replace(str,`<span id="blank" data-answer="${str}" >&nbsp;&nbsp;?&nbsp;&nbsp;</span>`);
                lyrics.innerHTML=final;
                window.addEventListener("keydown",shakeTheEgg);
                singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
                singerAndSongname.style.display='block';
                eggPicture.style.display='inline';

                setTimeout(function(){
                    eggPicture.style.opacity='1';
                    bgmControl.style.opacity='1';
                    gameMessage.style.opacity='1';  
                    singerAndSongname.style.opacity='1';
                    lyrics.style.opacity='1';
                    document.getElementById('blank').style.color='black';
                    wavesChangeColor();
                    },1000);  

                setTimeout(function(){
                    eggPicture.style.transition='none';
                    },2000);
            }).catch(err=>console.log(err));  
      
        },2000);
    }
    else if(mode =='which'){
        if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){

            whichModeLyrics.style.display='flex';
            
            setTimeout(function(){
 
                let chosenLyrics = '';
                let wrongLyrics='';
                axios.get('../php/get_lyrics.php').then(res=>{
                    chosenLyrics=res.data.lyrics;
                    gameBGM.src=res.data['song_source'];
                    gameBGM.currentTime=BGM_START_TIME;
                    let chosenSongIndex = res.data['key_of_songs'];    
                    singerAndSongname.innerHTML='Which belongs to '+res.data.singer+' '+res.data.title+'?';   
                    whichModeCorrect.innerHTML=chosenLyrics;

                    axios.post('../php/get_wrong_lyrics.php',{
                        chosenIndex:chosenSongIndex
                    }).then(res=>{
                        wrongLyrics=res.data.lyrics;
                        whichModeWrong.innerHTML=wrongLyrics;
                        
                       
                        setTimeout(function(){
                        
                        swapOrder();    
                        whichModeCorrect.style.opacity='1';
                        whichModeWrong.style.opacity='1';  
                        whichModeCorrect.style.color='black';
                        whichModeWrong.style.color='black';
                        bgmControl.style.opacity='1';
                        gameMessage.style.opacity='1'; 
                        singerAndSongname.style.opacity='1'; 
                        wavesChangeColor();
                    },1000);
                    }).catch(err=>console.log(err));
                    
                }).catch(err=>console.log(err));
   
            },2000); 
        }else{
            
           
            whichModeLyrics.style.display='flex';
            
            setTimeout(function(){
        
            let chosenLyrics = '';
            let wrongLyrics='';
            axios.get('../php/get_lyrics.php').then(res=>{
                chosenLyrics=res.data.lyrics;
                gameBGM.src=res.data['song_source'];
                gameBGM.currentTime=BGM_START_TIME;
                let chosenSongIndex = res.data['key_of_songs'];
                      
                singerAndSongname.innerHTML='Which belongs to '+res.data.singer+' '+res.data.title+'?';
               
                whichModeCorrect.innerHTML=chosenLyrics;
                
                axios.post('../php/get_wrong_lyrics.php',{
                    chosenIndex:chosenSongIndex
                }).then(res=>{
                        wrongLyrics=res.data.lyrics;
                        whichModeWrong.innerHTML=wrongLyrics;
                        
                
    
                setTimeout(function(){
                  
                    swapOrder();
                    whichModeCorrect.style.opacity='1';
                    whichModeWrong.style.opacity='1';  
                    whichModeCorrect.style.color='black';
                    whichModeWrong.style.color='black';
                    bgmControl.style.opacity='1';
                    gameMessage.style.opacity='1'; 
                    singerAndSongname.style.opacity='1'; 
                    wavesChangeColor();
                    
                },1000);
                }).catch(err=>console.log(err));
 
            }).catch(err=>console.log(err));
     
            },2000); 
        
        }         
    }else if(mode =='wipe'){
        
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
                rag.style.filter='none';
                
                lyrics.innerHTML=chosenLyrics;  
                lyrics.style.display='block';  
                gameMessage.innerHTML= WIPE_MODE_GAME_MESSAGE; 
                gameMessage.style.display='block';   
                singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
                singerAndSongname.style.display='block';
                rag.style.transition='1s';
                lyrics.style.transition='1s';
                filterArgument=30;
                
         
                setTimeout(function(){
                    rag.style.opacity='1';
                    lyrics.style.filter='blur('+filterArgument+'px) grayscale('+filterArgument+'%)';
                    lyrics.style.opacity='1';
                    lyrics.style.color='black';
                    bgmControl.style.opacity='1';
                    gameMessage.style.opacity='1';
                    singerAndSongname.style.opacity='1';
                    wavesChangeColor();

                    setTimeout(function(){
                        rag.style.transition='none';
                        lyrics.style.transition='none';
                    },1000);  
                   
                },1000);
            }).catch(err=>console.log(err));
            
        
    
    
        },2000);
    

    }else if(mode =='puzzle'){
      
  
        setTimeout(function(){
    
            let chosenLyrics='';
            axios.get('../php/get_lyrics.php').then(res=>{
                chosenLyrics=res.data.lyrics;
                gameBGM.src=res.data['song_source'];
                gameBGM.currentTime=BGM_START_TIME;
                
                
                for(let i=0;i<3;i++){
                    let L = Math.ceil(Math.random()*80+1);  
                    let T = Math.ceil(Math.random()*70+1);
                    let answer = document.createElement("span");
                    answer.classList.add('answers');
                    
                    answer.style.left= L+'%';
                    answer.style.top= T+'%';
                    switch(i){
                        case 0:
                        let ansIndexFrom = Math.floor(Math.random()*5);
                        let ansStr = chosenLyrics.slice(ansIndexFrom,ansIndexFrom+5); 
                        answer.id='ans1';
                        answer.innerHTML=ansStr;
                        answer.style.backgroundColor='rgba(255, 65, 65, 0.3)';
                        answer.addEventListener('mousedown',function(e){
                             if (event.cancelable) event.preventDefault();
                            isPointerDownPuzzleMode = true;
                        })
                        answer.addEventListener('touchstart',function(e){
                             if (event.cancelable) event.preventDefault();
                            isPointerDownPuzzleMode = true;
                        })
                        answer.addEventListener('mousemove',function(e){
                             if (event.cancelable) event.preventDefault();
                            let ans = document.getElementById('ans1');
                                    let ansW = document.getElementById('ans1').getBoundingClientRect().width;
                                    let ansH = document.getElementById('ans1').getBoundingClientRect().height;
                                    if(isPointerDownPuzzleMode){
                                        ans.style.left = e.pageX-ansW/2+'px';
                                        ans.style.top = e.pageY-ansH/2+'px';
                                    } 
                                
                        })
                        answer.addEventListener('touchmove',function(e){
                             if (event.cancelable) event.preventDefault();
                            let ans = document.getElementById('ans1');
                                    let ansW = document.getElementById('ans1').getBoundingClientRect().width;
                                    let ansH = document.getElementById('ans1').getBoundingClientRect().height;
                                    if(isPointerDownPuzzleMode){
                                        ans.style.left = e.changedTouches[0].pageX-ansW/2+'px';
                                        ans.style.top = e.changedTouches[0].pageY-ansH/2+'px';
                                    } 
                                
                        })
                        answer.addEventListener('mouseup',function(e){
                             if (event.cancelable) event.preventDefault();
                            let ans = document.getElementById('ans1');
                                    let ansX = document.getElementById('ans1').getBoundingClientRect().x;
                                    let ansY = document.getElementById('ans1').getBoundingClientRect().y;
                                    let ansW = document.getElementById('ans1').getBoundingClientRect().width;
                                    let ansH = document.getElementById('ans1').getBoundingClientRect().height;
                                    let blank = document.getElementById('blank1');
                                    let blankX = document.getElementById('blank1').getBoundingClientRect().x;
                                    let blankY = document.getElementById('blank1').getBoundingClientRect().y;
                                    
                                        if(Math.abs(blankX - ansX)<=30&&Math.abs(blankY-ansY)<=30){
                                            if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)blank.style.fontSize='clamp(16px,4dvh,24px)';
                                            else  blank.style.fontSize='clamp(16px,4vw,24px)';
                                            blank.innerHTML=answer.innerHTML; 
                                            page.removeChild(ans);
                                            let ansAmount = document.querySelectorAll('.answers').length;
                                            if(ansAmount==0){
                                            
                                                lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                                                setTimeout(function(){
                                                
                                                lyrics.style.animation='none';
                                                lyrics.style.opacity='0';
                                                lyrics.style.transform='translatey(10%)';   
                                                },1000);
                                                setTimeout(readyForNextRound('puzzle'),2000);  
                                            }
                                        }
                                    isPointerDownPuzzleMode = false;
                        })
                        answer.addEventListener('touchend',function(e){
                             if (event.cancelable) event.preventDefault();
                            let ans = document.getElementById('ans1');
                                    let ansX = document.getElementById('ans1').getBoundingClientRect().x;
                                    let ansY = document.getElementById('ans1').getBoundingClientRect().y;
                                    let ansW = document.getElementById('ans1').getBoundingClientRect().width;
                                    let ansH = document.getElementById('ans1').getBoundingClientRect().height;
                                    let blank = document.getElementById('blank1');
                                    let blankX = document.getElementById('blank1').getBoundingClientRect().x;
                                    let blankY = document.getElementById('blank1').getBoundingClientRect().y;
                                    
                                        if(Math.abs(blankX - ansX)<=30&&Math.abs(blankY-ansY)<=30){
                                            if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)blank.style.fontSize='clamp(16px,4dvh,24px)';
                                            else  blank.style.fontSize='clamp(16px,4vw,24px)';
                                            
                                            blank.innerHTML=answer.innerHTML; 
                                            page.removeChild(ans);
                                            let ansAmount = document.querySelectorAll('.answers').length;
                                            if(ansAmount==0){
                                            
                                                lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                                                setTimeout(function(){
                                                
                                                lyrics.style.animation='none';
                                                lyrics.style.opacity='0';
                                                lyrics.style.transform='translatey(10%)';   
                                                },1000);
                                                setTimeout(readyForNextRound('puzzle'),2000);  
                                            }
                                        }
                                    isPointerDownPuzzleMode = false;
                        })
                        page.appendChild(answer);
                        var final = chosenLyrics.replace(ansStr,`<span class="blanks" id="blank1" style="background-color:rgba(255, 65, 65, 0.3);" data-answer="${ansStr}" >&nbsp;&nbsp;?&nbsp;&nbsp;</span>`);
                        
                        break;
                        case 1:
                        let ansIndexFrom2 = Math.floor(Math.random()*5+25);
                        let ansStr2 = chosenLyrics.slice(ansIndexFrom2,ansIndexFrom2+5);
                        answer.id='ans2';
                        answer.innerHTML=ansStr2;
                        answer.style.backgroundColor='#00e6e6';
                        answer.addEventListener('mousedown',function(e){
                             if (event.cancelable) event.preventDefault();
                            isPointerDownPuzzleMode = true;
                        })
                        answer.addEventListener('touchstart',function(e){
                             if (event.cancelable) event.preventDefault();
                            isPointerDownPuzzleMode = true;
                        })
                        answer.addEventListener('mousemove',function(e){
                             if (event.cancelable) event.preventDefault();
                            let ans = document.getElementById('ans2');
                                    let ansW = document.getElementById('ans2').getBoundingClientRect().width;
                                    let ansH = document.getElementById('ans2').getBoundingClientRect().height;
                                    if(isPointerDownPuzzleMode){
                                        ans.style.left = e.pageX-ansW/2+'px';
                                        ans.style.top = e.pageY-ansH/2+'px';
                                    } 
                                
                        })
                        answer.addEventListener('touchmove',function(e){
                             if (event.cancelable) event.preventDefault();
                            let ans = document.getElementById('ans2');
                                    let ansW = document.getElementById('ans2').getBoundingClientRect().width;
                                    let ansH = document.getElementById('ans2').getBoundingClientRect().height;
                                    if(isPointerDownPuzzleMode){
                                        ans.style.left = e.changedTouches[0].pageX-ansW/2+'px';
                                        ans.style.top = e.changedTouches[0].pageY-ansH/2+'px';
                                    } 
                                
                        })
                        answer.addEventListener('mouseup',function(e){
                             if (event.cancelable) event.preventDefault();
                            let ans = document.getElementById('ans2');
                                    let ansX = document.getElementById('ans2').getBoundingClientRect().x;
                                    let ansY = document.getElementById('ans2').getBoundingClientRect().y;
                                    let ansW = document.getElementById('ans2').getBoundingClientRect().width;
                                    let ansH = document.getElementById('ans2').getBoundingClientRect().height;
                                    let blank = document.getElementById('blank2');
                                    let blankX = document.getElementById('blank2').getBoundingClientRect().x;
                                    let blankY = document.getElementById('blank2').getBoundingClientRect().y;
                                    
                                        if(Math.abs(blankX - ansX)<=30&&Math.abs(blankY-ansY)<=30){
                                            if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)blank.style.fontSize='clamp(16px,4dvh,24px)';
                                            else  blank.style.fontSize='clamp(16px,4vw,24px)';
                                            
                                            blank.innerHTML=answer.innerHTML; 
                                            page.removeChild(ans);
                                            let ansAmount = document.querySelectorAll('.answers').length;
                                            if(ansAmount==0){
                                            
                                                lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                                                setTimeout(function(){
                                                
                                                lyrics.style.animation='none';
                                                lyrics.style.opacity='0';
                                                lyrics.style.transform='translatey(10%)';   
                                                },1000);
                                                setTimeout(readyForNextRound('puzzle'),2000);  
                                            }
                                        }
                                    isPointerDownPuzzleMode = false;
                        })
                        answer.addEventListener('touchend',function(e){
                             if (event.cancelable) event.preventDefault();
                            let ans = document.getElementById('ans2');
                                    let ansX = document.getElementById('ans2').getBoundingClientRect().x;
                                    let ansY = document.getElementById('ans2').getBoundingClientRect().y;
                                    let ansW = document.getElementById('ans2').getBoundingClientRect().width;
                                    let ansH = document.getElementById('ans2').getBoundingClientRect().height;
                                    let blank = document.getElementById('blank2');
                                    let blankX = document.getElementById('blank2').getBoundingClientRect().x;
                                    let blankY = document.getElementById('blank2').getBoundingClientRect().y;
                                    
                                        if(Math.abs(blankX - ansX)<=30&&Math.abs(blankY-ansY)<=30){
                                            if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)blank.style.fontSize='clamp(16px,4dvh,24px)';
                                            else  blank.style.fontSize='clamp(16px,4vw,24px)';
                                            blank.innerHTML=answer.innerHTML; 
                                            page.removeChild(ans);
                                            let ansAmount = document.querySelectorAll('.answers').length;
                                            if(ansAmount==0){
                                            
                                                lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                                                setTimeout(function(){
                                                
                                                lyrics.style.animation='none';
                                                lyrics.style.opacity='0';
                                                lyrics.style.transform='translatey(10%)';   
                                                },1000);
                                                setTimeout(readyForNextRound('puzzle'),2000);  
                                            }
                                        }
                                    isPointerDownPuzzleMode = false;
                        }) 
                        page.appendChild(answer);
                        var final2 = final.replace(ansStr2,`<span class="blanks" id="blank2" style="background-color:#00e6e6;" data-answer="${ansStr2}" >&nbsp;&nbsp;?&nbsp;&nbsp;</span>`);
                        
                        break;
                        case 2:
                        let ansIndexFrom3 = Math.floor(Math.random()*5+chosenLyrics.length-20);
                        let ansStr3 = chosenLyrics.slice(ansIndexFrom3,ansIndexFrom3+5); 
                        answer.id='ans3';
                        answer.innerHTML=ansStr3;
                        answer.style.backgroundColor='rgba(255, 242, 102,0.8)';
                        answer.addEventListener('mousedown',function(e){
                             if (event.cancelable) event.preventDefault();
                            isPointerDownPuzzleMode = true;
                        })
                        answer.addEventListener('touchstart',function(e){
                             if (event.cancelable) event.preventDefault();
                            isPointerDownPuzzleMode = true;
                        })
                        answer.addEventListener('mousemove',function(e){
                             if (event.cancelable) event.preventDefault();
                            let ans = document.getElementById('ans3');
                                    let ansW = document.getElementById('ans3').getBoundingClientRect().width;
                                    let ansH = document.getElementById('ans3').getBoundingClientRect().height;
                                    if(isPointerDownPuzzleMode){
                                        ans.style.left = e.pageX-ansW/2+'px';
                                        ans.style.top = e.pageY-ansH/2+'px';
                                    } 
                                
                        })
                        answer.addEventListener('touchmove',function(e){
                             if (event.cancelable) event.preventDefault();
                            let ans = document.getElementById('ans3');
                                    let ansW = document.getElementById('ans3').getBoundingClientRect().width;
                                    let ansH = document.getElementById('ans3').getBoundingClientRect().height;
                                    if(isPointerDownPuzzleMode){
                                        ans.style.left = e.changedTouches[0].pageX-ansW/2+'px';
                                        ans.style.top = e.changedTouches[0].pageY-ansH/2+'px';
                                    } 
                                
                        })
                        answer.addEventListener('mouseup',function(e){
                             if (event.cancelable) event.preventDefault();
                            let ans = document.getElementById('ans3');
                                    let ansX = document.getElementById('ans3').getBoundingClientRect().x;
                                    let ansY = document.getElementById('ans3').getBoundingClientRect().y;
                                    let ansW = document.getElementById('ans3').getBoundingClientRect().width;
                                    let ansH = document.getElementById('ans3').getBoundingClientRect().height;
                                    let blank = document.getElementById('blank3');
                                    let blankX = document.getElementById('blank3').getBoundingClientRect().x;
                                    let blankY = document.getElementById('blank3').getBoundingClientRect().y;
                                    
                                        if(Math.abs(blankX - ansX)<=30&&Math.abs(blankY-ansY)<=30){
                                            if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)blank.style.fontSize='clamp(16px,4dvh,24px)';
                                            else  blank.style.fontSize='clamp(16px,4vw,24px)';
                                            blank.innerHTML=answer.innerHTML; 
                                            page.removeChild(ans);
                                            let ansAmount = document.querySelectorAll('.answers').length;
                                            if(ansAmount==0){
                                            
                                                lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                                                setTimeout(function(){
                                                
                                                lyrics.style.animation='none';
                                                lyrics.style.opacity='0';
                                                lyrics.style.transform='translatey(10%)';   
                                                },1000);
                                                setTimeout(readyForNextRound('puzzle'),2000);  
                                            }
                                        }
                                    isPointerDownPuzzleMode = false;
                        })
                        answer.addEventListener('touchend',function(e){
                             if (event.cancelable) event.preventDefault();
                            let ans = document.getElementById('ans3');
                                    let ansX = document.getElementById('ans3').getBoundingClientRect().x;
                                    let ansY = document.getElementById('ans3').getBoundingClientRect().y;
                                    let ansW = document.getElementById('ans3').getBoundingClientRect().width;
                                    let ansH = document.getElementById('ans3').getBoundingClientRect().height;
                                    let blank = document.getElementById('blank3');
                                    let blankX = document.getElementById('blank3').getBoundingClientRect().x;
                                    let blankY = document.getElementById('blank3').getBoundingClientRect().y;
                                    
                                        if(Math.abs(blankX - ansX)<=30&&Math.abs(blankY-ansY)<=30){
                                            if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)blank.style.fontSize='clamp(16px,4dvh,24px)';
                                            else  blank.style.fontSize='clamp(16px,4vw,24px)';
                                            blank.innerHTML=answer.innerHTML; 
                                            page.removeChild(ans);
                                            let ansAmount = document.querySelectorAll('.answers').length;
                                            if(ansAmount==0){
                                            
                                                lyrics.style.animation=ANSWER_RIGHT_ANIMATION;
                                                setTimeout(function(){
                                                
                                                lyrics.style.animation='none';
                                                lyrics.style.opacity='0';
                                                lyrics.style.transform='translatey(10%)';   
                                                },1000);
                                                setTimeout(readyForNextRound('puzzle'),2000);  
                                            }
                                        }
                                    isPointerDownPuzzleMode = false;
                        })
                        page.appendChild(answer);
                        var final3 = final2.replace(ansStr3,`<span class="blanks" id="blank3" style="background-color:rgba(255, 242, 102,0.8);" data-answer="${ansStr3}" >&nbsp;&nbsp;?&nbsp;&nbsp;</span>`);
                        lyrics.innerHTML=final3;
                        break;
                        default:
                        break;
                    }
                }
                
                
                
                    
                lyrics.style.display='block';  
                gameMessage.innerHTML= PUZZLE_MODE_GAME_MESSAGE; 
                gameMessage.style.display='block';   
                singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
                singerAndSongname.style.display='block';
                
                
               
                
            
                setTimeout(function(){
                    let answers = document.querySelectorAll('.answers');
                    let blanks = document.querySelectorAll(".blanks");
                    for(let i=0;i<answers.length;i++){
                        answers[i].style.opacity='1';
                    }
                    lyrics.style.opacity='1';
                    lyrics.style.color='black';
                    bgmControl.style.opacity='1';
                    gameMessage.style.opacity='1';
                    singerAndSongname.style.opacity='1';
                    wavesChangeColor();
                    for(let i=0;i<blanks.length;i++){
                        blanks[i].style.color='black';
                    }

                    setTimeout(function(){
                         for(let i=0;i<answers.length;i++){
                            answers[i].style.transition='none';
                        }
                    },1000);  
                   
                },1000);
            }).catch(err=>console.log(err));
            
        
    
    
        },2000);
    }else if(mode=='input'){
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
                    wavesChangeColor();
                    setTimeout(function(){
                        answer.style.transition='none';
                    },1000);  
                    if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){
                        backHomepage.style.opacity='1';  
                    }
                },1000);
            }).catch(err=>console.log(err));
            
        
    
    
        },2000);
    }else if(mode=='onion'){
        onionPeelOrder=1;
       if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){
            onionLeaf1.style.opacity='0';      
            onionLeaf2.style.opacity='0';       
            onionLeaf3.style.opacity='0';  
            onionLeaf4.style.opacity='0';
            onionLeaf5.style.opacity='0';
            onionLeaf1.style.animation='none';      
            onionLeaf2.style.animation='none';       
            onionLeaf3.style.animation='none';  
            onionLeaf4.style.animation='none';
            onionLeaf5.style.animation='none';
            
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
                        wavesChangeColor();
                    },1000);
                }).catch(err=>console.log(err));
 
 
     
 
 
     
   
   
 
   
   
   
   
   
            },3000); 
        }else{

           
            onionLeaf1.style.opacity='0';      
            onionLeaf2.style.opacity='0';       
            onionLeaf3.style.opacity='0';  
            onionLeaf4.style.opacity='0';
            onionLeaf5.style.opacity='0';
            onionLeaf1.style.animation='none';      
            onionLeaf2.style.animation='none';       
            onionLeaf3.style.animation='none';  
            onionLeaf4.style.animation='none';
            onionLeaf5.style.animation='none';
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
                        wavesChangeColor();
                    },1000);
                }).catch(err=>console.log(err));
 
 
     
 
 
     
   
   
 
   
   
   
   
   
            },3000);

            
            
           
           
            
           
 
 
     
 
 
     
   
   
 
   
   
   
   
   
           
        } 
    }else if(mode=='scale'){
        
        if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){
           
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
                        wavesChangeColor();
                    },1000);
                }).catch(err=>console.log(err));
 
 
     
 
 
     
   
   
 
   
   
   
   
   
            },2000); 
        }else{

            
            setTimeout(function(){
 
                let chosenLyrics = '';
                axios.get('../php/get_lyrics.php').then(res=>{
                    chosenLyrics=res.data.lyrics;
                    gameBGM.src=res.data['song_source'];
                    gameBGM.currentTime=BGM_START_TIME;
                    
                    let randomSize = Math.round(Math.random()*40)
                    let ansIndexFrom = Math.floor(Math.random()*(chosenLyrics.length-21));  
                    let ansStr = chosenLyrics.slice(ansIndexFrom,ansIndexFrom+8);
                    let final = chosenLyrics.replace(ansStr,`<span id="blank" style="background-color:rgba(255, 65, 65, 0.3);font-size:${randomSize}px">${ansStr}</span>`);
                    
                    lyrics.innerHTML=final;  
                    lyrics.style.display='block';  
                    
                   

                    singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
                    singerAndSongname.style.display='block';    
    
                    setTimeout(function(){
                        
                       
                        lyrics.style.opacity='1';
                        lyrics.style.color='black';
                        document.getElementById('blank').style.color='black'; 
                        bgmControl.style.opacity='1';
                        gameMessage.style.opacity='1'; 
                        singerAndSongname.style.opacity='1'; 
                        wavesChangeColor();
                    },1000);
                }).catch(err=>console.log(err));
 
 
     
 
 
     
   
   
 
   
   
   
   
   
            },2000);

            
            
           
           
            
           
 
 
     
 
 
     
   
   
 
   
   
   
   
   
           
        }
 
    }


    
} 

//Which模式的對錯歌詞以css flexbox flex-direction隨機排序
function swapOrder(){
    let random = Math.random();
    if(random<0.5)window.innerWidth<=MOBILE_SCREEN_RANGE?whichModeLyrics.style.flexDirection='column-reverse':whichModeLyrics.style.flexDirection='row-reverse'; 
    else window.innerWidth<=MOBILE_SCREEN_RANGE?whichModeLyrics.style.flexDirection='column':whichModeLyrics.style.flexDirection='row';    
    return random;  
}

//用按鈕讓使用者控制音樂播放
function toggleBGM(event){
    if (event.cancelable) event.preventDefault();
    gameBGM.paused?gameBGM.play():gameBGM.pause();
}