const PUZZLE_MODE_GAME_MESSAGE = 'Drag to boxes and complete it!';  
let isPointerDownPuzzleMode = false;




 function toPuzzle(){
  
        hideTitleAndModeList();   
        if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT)backHomepage.style.display='inline';       
        

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
                bgmControl.style.display='inline';  
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
                    for(let i=0;i<blanks.length;i++){
                        blanks[i].style.color='black';
                    }
                    
                    setTimeout(function(){
                         for(let i=0;i<answers.length;i++){
                            answers[i].style.transition='none';
                        }
                    },1000);  
                    if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT)backHomepage.style.opacity='1';                 
                    
                },1000);
            }).catch(err=>console.log(err));
            
        
    
    
        },2000);
    }

