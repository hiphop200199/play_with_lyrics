









window.addEventListener("keydown",function(e){
        
        if(e.key==='Escape'){
            gameMessage.style.opacity='0';
            singerAndSongname.style.opacity='0';
            bgmControl.style.opacity='0';
            gameBGM.pause();
            if(modes[modeIndex].id=='move'){
                let answer = document.getElementById("answer");
                answer.style.transition='1s';
                answer.style.opacity='0';
                lyrics.style.opacity='0';
                lyrics.style.transform='translatey(10%)';
                setTimeout(function(){
                    page.removeChild(answer);
                    lyrics.style.color='transparent';  
                    lyrics.innerHTML='';
                    lyrics.style.display='none';
                    titles.style.display='block'; titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                    showModeList();  
                },1000);
            }else if(modes[modeIndex].id=='throw'){
               
                let answer = document.getElementById('answer');
            
                lyrics.style.opacity='0';
                answer.style.opacity='0';

               window.removeEventListener("mousedown",function(e){
                
                        mousePosition.x=e.pageX;
                        mousePosition.y=e.pageY;
               
                    })
                    window.removeEventListener("mousemove",function(e){
                
                        const   slideDistance = e.pageY - mousePosition.y;
                        if(slideDistance<=-MOUSE_THRESHOLD&&mouseKeys.indexOf('swipe up')===-1){
                            mouseKeys.push('swipe up');
                            if(mouseKeys.indexOf('swipe up')>-1){
                                throwAPiece();
                            }
                        }
                    })   
                    window.removeEventListener("mouseup",function(){
                
                        mousePosition.x=undefined;
                        mousePosition.y=undefined;
                        mouseKeys.splice(mouseKeys.indexOf('swipe up'),1);
                    }) 

                setTimeout(function(){
                    page.removeChild(answer);
                    lyrics.innerHTML='';
                    lyrics.style.display='none';    
                    titles.style.display='block';
                    titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                    showModeList();  
                },1000); 
               
               
                     
                
            }else if(modes[modeIndex].id=='egg'){
                window.removeEventListener('keydown',shakeTheEgg);
                let answer = document.getElementById("answer");       
                answer.style.opacity='0';    
                eggPicture.style.transition='1s';
                eggPicture.style.opacity='0';
                eggPicture3.style.display='none'; 
                eggPicture2.style.display='none'; 
                lyrics.style.opacity='0';
                lyrics.style.transform='translatey(10%)';
                setTimeout(function(){        
                    page.removeChild(answer);        
                    eggPicture.style.display='none';
                    lyrics.style.color='transparent';  
                    lyrics.innerHTML='';
                    lyrics.style.display='none';
                    titles.style.display='block';
                    titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                showModeList();  
            },1000); 
            }else if(modes[modeIndex].id=='which'){
                 window.removeEventListener('resize',function(randNum){
                            if(randNum<0.5)window.innerWidth<=MOBILE_SCREEN_RANGE?whichModeLyrics.style.flexDirection='column-reverse':whichModeLyrics.style.flexDirection='row-reverse'; 
    else window.innerWidth<=MOBILE_SCREEN_RANGE?whichModeLyrics.style.flexDirection='column':whichModeLyrics.style.flexDirection='row';
                            
                        }) 
                whichModeCorrect.removeEventListener('click',function(){
                        this.style.animation=ANSWER_RIGHT_ANIMATION;
                        setTimeout(function(){
                            whichModeCorrect.style.animation='none';
                            whichModeCorrect.style.opacity='0';
                            whichModeWrong.style.opacity='0';
                        },1000);
                        setTimeout(readyForNextRound('which'),2000);
                    })
                whichModeWrong.removeEventListener('click',function(){
                        this.style.animation=ANSWER_WRONG_ANIMATION;
                        setTimeout(function(){
                            whichModeWrong.style.animation='none';
                        },1000);
                    })
                whichModeCorrect.style.opacity='0';
                whichModeWrong.style.opacity='0';
                setTimeout(function(){        
                    whichModeLyrics.style.display='none'; 
                    whichModeCorrect.style.display='none';
                    whichModeWrong.style.display='none';
                    whichModeCorrect.innerHTML='';
                    whichModeWrong.innerHTML='';
                    whichModeCorrect.style.color='transparent';
                    whichModeWrong.style.color='transparent';
                    titles.style.display='block';
                    titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                showModeList();  
            },1000);
            }else if(modes[modeIndex].id=='wipe'){
                rag.removeEventListener('mousedown',function(e){
                    rag.style.scale = '1.5';
                    isPointDown=true;
                })
                rag.removeEventListener('touchstart',function(e){
                     rag.style.scale = '1.5';
                    isPointDown=true;
                })
                rag.removeEventListener('mousemove',function(e){
                    rag.style.scale='1.3';
                    if(isPointDown){
                        if(filterArgument<=2){
                            isPointDown=false;
                            singerAndSongname.innerHTML=res.data.singer+' '+res.data.title;
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
                rag.removeEventListener('touchmove',function(e){
                    rag.style.scale='1.3';
                    if(isPointDown){
                        if(filterArgument<=2){
                            isPointDown=false;
                            singerAndSongname.innerHTML=res.data.singer+' '+res.data.title;
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
                rag.removeEventListener('mouseup',function(e){
                    rag.style.scale='1';
                    isPointDown=false;
                })
                rag.removeEventListener('touchend',function(e){
                    rag.style.scale='1';
                    isPointDown=false;
                })   
                lyrics.style.transition='1s';
                rag.style.transition='1s';
                rag.style.opacity='0';
                lyrics.style.opacity='0';
                setTimeout(function(){
                    rag.style.display='none';
                    lyrics.style.color='transparent';  
                    lyrics.innerHTML='';
                    lyrics.style.filter='none';
                    lyrics.style.display='none';
                    titles.style.display='block'; titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                    showModeList();  
                },1000)
            }else if(modes[modeIndex].id=='puzzle'){
                let ans = document.querySelectorAll('.answers');
                for(let i=0;i<ans.length;i++){
                    ans[i].style.opacity='0';
                }
                lyrics.style.opacity='0';
                setTimeout(function(){        
                    let answers = document.querySelectorAll('.answers');
                    for(let i=0;i<answers.length;i++){
                        page.removeChild(document.querySelector('.answers'));
                    }    
                   
                    lyrics.style.color='transparent';  
                    lyrics.innerHTML='';
                    lyrics.style.display='none';
                    titles.style.display='block';
                    titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                showModeList();  
            },1000); 
            }else if(modes[modeIndex].id=='input'){
                let answer = document.getElementById("answer");
                answer.style.transition='1s';
                answer.style.opacity='0';
                lyrics.style.opacity='0';
                lyrics.style.transform='translatey(10%)';
                setTimeout(function(){
                    page.removeChild(answer);
                    lyrics.style.color='transparent';  
                    lyrics.innerHTML='';
                    lyrics.style.display='none';
                    titles.style.display='block'; titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                    showModeList();  
                },1000);
            }else if(modes[modeIndex].id=='onion'){
                
                let answer = document.getElementById("answer");       
                answer.style.opacity='0';    
                lyrics.style.opacity='0';
                lyrics.style.transform='translatey(10%)';
                onionLeaf1.style.transition='1s';
                onionLeaf2.style.transition='1s';
                onionLeaf3.style.transition='1s';
                onionLeaf4.style.transition='1s';
                onionLeaf5.style.transition='1s';
                onionLeaf1.style.opacity='0';
                onionLeaf2.style.opacity='0';
                onionLeaf3.style.opacity='0';
                onionLeaf4.style.opacity='0';
                onionLeaf5.style.opacity='0';
                setTimeout(function(){        
                    page.removeChild(answer);        
                    onionLeaf1.style.display='none';
                    onionLeaf1.style.animation='none';
                    
                    onionLeaf2.style.display='none';
                    onionLeaf2.style.animation='none';
                    
                    onionLeaf3.style.display='none';
                    onionLeaf3.style.animation='none';
                    
                    onionLeaf4.style.display='none';
                    onionLeaf4.style.animation='none';
                    
                    onionLeaf5.style.display='none';
                    onionLeaf5.style.animation='none';
                    
                    lyrics.style.color='transparent';  
                    lyrics.innerHTML='';
                    lyrics.style.display='none';
                    titles.style.display='block';
                    titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();
                    window.removeEventListener("mousedown",function(e){
                
                        onionMousePosition.x=e.pageX;
                        onionMousePosition.y=e.pageY;
                        isOnionMouseDown = true;
                        console.log(onionMousePosition.x,onionMousePosition.y,isOnionMouseDown);
                        e.preventDefault();
                    })
                    window.removeEventListener("mousemove",function(e){
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

                                    document.getElementById("blank").innerHTML=answer.innerHTML;  
                                    
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
                    window.removeEventListener("mouseup",function(){
                        isOnionMouseDown = false;
                        onionMousePosition.x=undefined;
                        onionMousePosition.y=undefined;
                        if(onionMouseKeys.indexOf('swipe left')>-1&&!isOnionMouseDown)onionMouseKeys.splice(onionMouseKeys.indexOf('swipe left'),1);
                        else if(onionMouseKeys.indexOf('swipe right')>-1&&!isOnionMouseDown)onionMouseKeys.splice(onionMouseKeys.indexOf('swipe right'),1);
                        
                        console.log(isOnionMouseDown,onionMouseKeys);
                    }) 
                showModeList();  
            },1000);
            }else if(modes[modeIndex].id=='scale'){
                window.removeEventListener('wheel',function(e){
                       
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
                
                lyrics.style.opacity='0';
                lyrics.style.transform='translatey(10%)';
                setTimeout(function(){
                    
                    lyrics.style.color='transparent';  
                    lyrics.innerHTML='';
                    lyrics.style.display='none';
                    titles.style.display='block'; titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                    showModeList();  
                },1000);
            }
            
        

        

        

        
    }
    }) 
    backHomepage.addEventListener("touchstart",function(){
        gameBGM.pause();
        bgmControl.style.opacity='0';
        gameMessage.style.opacity='0';
        singerAndSongname.style.opacity='0';
        this.style.opacity='0'; 
        if(modes[modeIndex].id=='move'){
            let answer = document.getElementById("answer");
            answer.style.transition='1s';
            answer.style.opacity='0';
            lyrics.style.opacity='0';
            lyrics.style.transform='translatey(10%)';
            for(let i =0;i<mobileMoveMode.length;i++){
                mobileMoveMode[i].style.opacity='0';
            }
            setTimeout(function(){
                page.removeChild(answer);
                lyrics.style.color='transparent';  
                lyrics.innerHTML=''; 
                lyrics.style.display='none';
                titles.style.display='block';
                titles.style.opacity='1';

                graduallyShowTitle();
                bgmControl.style.display='none';
                showModeList();

                up.style.display='none';  
                down.style.display='none';  
                left.style.display='none';  
                right.style.display='none';  
                checkPositionCorrect.style.display='none';  
                },1000);
                up.removeEventListener("touchstart",function(){
                    let answer = document.getElementById("answer");  
                    let ansX = answer.getBoundingClientRect().x;  
                    let ansY = answer.getBoundingClientRect().y;
                    let endPointX= document.getElementById("blank").getBoundingClientRect().x;
                    let endPointY= document.getElementById("blank").getBoundingClientRect().y;
            
                    let blank = document.getElementById("blank").getAttribute("data-answer");
                    ansY-=MOBILE_MOVE_MODE_MOVE_DISTANCE;
                    answer.style.top=ansY+'px';
                });
                down.removeEventListener("touchstart",function(){
                    let answer = document.getElementById("answer");  
                    let ansX = answer.getBoundingClientRect().x;  
                    let ansY = answer.getBoundingClientRect().y;
                    let endPointX= document.getElementById("blank").getBoundingClientRect().x;
                    let endPointY= document.getElementById("blank").getBoundingClientRect().y;
            
                    let blank = document.getElementById("blank").getAttribute("data-answer");
                    ansY+=MOBILE_MOVE_MODE_MOVE_DISTANCE;
                    answer.style.top=ansY+'px';
                })
                left.removeEventListener("touchstart",function(){
                    let answer = document.getElementById("answer");  
                    let ansX = answer.getBoundingClientRect().x;  
                    let ansY = answer.getBoundingClientRect().y;
                    let endPointX= document.getElementById("blank").getBoundingClientRect().x;
                    let endPointY= document.getElementById("blank").getBoundingClientRect().y;
            
                    let blank = document.getElementById("blank").getAttribute("data-answer");
                    ansX-=MOBILE_MOVE_MODE_MOVE_DISTANCE;
                    answer.style.left=ansX+'px';
                })
                right.removeEventListener("touchstart",function(){
                    let answer = document.getElementById("answer");  
                    let ansX = answer.getBoundingClientRect().x;  
                    let ansY = answer.getBoundingClientRect().y;
                    let endPointX= document.getElementById("blank").getBoundingClientRect().x;
                    let endPointY= document.getElementById("blank").getBoundingClientRect().y;
            
                    let blank = document.getElementById("blank").getAttribute("data-answer");
                    ansX+=MOBILE_MOVE_MODE_MOVE_DISTANCE;
                    answer.style.left=ansX+'px';
                })
                checkPositionCorrect.removeEventListener("touchstart",function(){
                    let answer = document.getElementById("answer");  
                    let ansX = answer.getBoundingClientRect().x;  
                    let ansY = answer.getBoundingClientRect().y;
                    let endPointX= document.getElementById("blank").getBoundingClientRect().x;
                    let endPointY= document.getElementById("blank").getBoundingClientRect().y;
            
                    let blank = document.getElementById("blank").getAttribute("data-answer");
                    if(Math.abs(endPointX - ansX)<=50&&Math.abs(endPointY-ansY)<=50){
                        
                        document.getElementById("blank").style.fontSize='clamp(16px,4vw,24px)';
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
            }
            else if(modes[modeIndex].id=='throw'){
                let answer = document.getElementById('answer');
            
                lyrics.style.opacity='0';
                answer.style.opacity='0';

                window.removeEventListener("touchstart",function(e){
                    
                    touchPosition.x=e.changedTouches[0].pageX;
                    touchPosition.y=e.changedTouches[0].pageY;
                
                })
                window.removeEventListener("touchmove",function(e){
                    
                    const   slideDistance = e.changedTouches[0].pageY - touchPosition.y;
                    if(slideDistance<=-TOUCH_THRESHOLD&&touchKeys.indexOf('swipe up')===-1){
                        touchKeys.push('swipe up');
                        if(touchKeys.indexOf('swipe up')>-1){
                            throwAPiece();
                        }
                    }
                })   
                window.removeEventListener("touchend",function(){
                    
                    touchPosition.x=undefined;
                    touchPosition.y=undefined;
                    touchKeys.splice(touchKeys.indexOf('swipe up'),1);
                })

                setTimeout(function(){
                    page.removeChild(answer);
                    lyrics.innerHTML='';
                    lyrics.style.display='none';    
                    titles.style.display='block';
                    titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                    showModeList();  
                },1000);   
            }else if(modes[modeIndex].id=='egg'){
                window.removeEventListener('keydown',shakeTheEgg);
                let answer = document.getElementById("answer");       
                for(let i =0;i<mobileEggMode.length;i++){
                    mobileEggMode[i].style.opacity='0';
                }
                answer.style.opacity='0';    
                eggPicture.style.transition='1s';
                eggPicture.style.opacity='0';
                eggPicture3.style.display='none'; 
                eggPicture2.style.display='none'; 
                lyrics.style.opacity='0';
                lyrics.style.transform='translatey(10%)';  
                setTimeout(function(){
                    page.removeChild(answer);        
                    eggPicture.style.display='none';
                    lyrics.style.color='transparent';  
                    lyrics.innerHTML='';
                    lyrics.style.display='none';
                    titles.style.display='block';
                    titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                    showModeList(); 
                    a.style.display='none';
                    d.style.display='none';
                    a.removeEventListener("touchstart",function(){
                        if(breakCount<79){
                            eggPicture.style.transform='translatex(-3%)';
                            breakCount++;
                        }
                        if(breakCount==79){
                            eggPicture.style.transform='none';
                            breakCount++;
                        }
                        if(breakCount==20){
                            eggPicture.src='https://github.com/hiphop200199/etc/raw/main/egg-break-1.svg';
                        }
                        if(breakCount==40){
                            eggPicture.src='https://github.com/hiphop200199/etc/raw/main/egg-break-2.svg'; 
                        }
                        if(breakCount==60){
                            eggPicture.src='https://github.com/hiphop200199/etc/raw/main/egg-break-3.svg'; 
                        }
                        if(breakCount==80){
                             let ans = document.getElementById("answer");
                    eggPicture.style.transform='none';
                eggPicture.style.display='none'; 
                eggPicture.style.opacity='0';
                eggPicture.style.transition='1s'; 
                eggPicture.src='https://github.com/hiphop200199/etc/raw/main/egg-full.svg';      eggPicture2.style.display='inline';
                eggPicture3.style.display='inline';
                  document.getElementById("blank").style.fontSize='clamp(16px,4vw,24px)';
                    document.getElementById("blank").innerHTML=ans.innerHTML;   
                    setTimeout(function(){
                        eggPicture2.style.display='none';
                eggPicture3.style.display='none'; 
                        let ans = document.getElementById("answer");
                        ans.style.animation=ANSWER_RIGHT_ANIMATION;
                        setTimeout(function(){
                        ans.style.animation='none';
                        lyrics.style.opacity='0';
                        lyrics.style.transform='translatey(10%)'; 
                        },1000);
                        
                    },1000);
                setTimeout(function(){
                let ans = document.getElementById("answer");
                ans.style.opacity='1';
                },500);     
                    setTimeout(readyForNextRound('egg'),2000);
                        } 
                    })
                    d.removeEventListener("touchstart",function(){
                        if(breakCount<79){
                            eggPicture.style.transform='translatex(3%)';
                            breakCount++;
                        }
                        if(breakCount==79){
                            eggPicture.style.transform='none';
                            breakCount++;
                        } 
                        if(breakCount==20){
                            eggPicture.src='https://github.com/hiphop200199/etc/raw/main/egg-break-1.svg';
                        }
                        if(breakCount==40){
                        eggPicture.src='https://github.com/hiphop200199/etc/raw/main/egg-break-2.svg'; 
                        }
                        if(breakCount==60){
                        eggPicture.src='https://github.com/hiphop200199/etc/raw/main/egg-break-3.svg'; 
                        }
                        if(breakCount==80){
                             let ans = document.getElementById("answer");
                    eggPicture.style.transform='none';
                eggPicture.style.display='none'; 
                eggPicture.style.opacity='0';
                eggPicture.style.transition='1s'; 
                eggPicture.src='https://github.com/hiphop200199/etc/raw/main/egg-full.svg';      eggPicture2.style.display='inline';
                eggPicture3.style.display='inline';
                  document.getElementById("blank").style.fontSize='clamp(16px,4vw,24px)';
                    document.getElementById("blank").innerHTML=ans.innerHTML;   
                    setTimeout(function(){
                        eggPicture2.style.display='none';
                eggPicture3.style.display='none'; 
                        let ans = document.getElementById("answer");
                        ans.style.animation=ANSWER_RIGHT_ANIMATION;
                        setTimeout(function(){
                        ans.style.animation='none';
                        lyrics.style.opacity='0';
                        lyrics.style.transform='translatey(10%)'; 
                        },1000);
                        
                    },1000);
                setTimeout(function(){
                let ans = document.getElementById("answer");
                ans.style.opacity='1';
                },500);     
                    setTimeout(readyForNextRound('egg'),2000);
                        }
                    })
            },1000); 
            }else if(modes[modeIndex].id=='which'){
                 window.removeEventListener('resize',function(randNum){
                            if(randNum<0.5)window.innerWidth<=MOBILE_SCREEN_RANGE?whichModeLyrics.style.flexDirection='column-reverse':whichModeLyrics.style.flexDirection='row-reverse'; 
    else window.innerWidth<=MOBILE_SCREEN_RANGE?whichModeLyrics.style.flexDirection='column':whichModeLyrics.style.flexDirection='row';
                            
                        }) 
                whichModeCorrect.removeEventListener('touchend',function(){
                        this.style.animation=ANSWER_RIGHT_ANIMATION;
                        setTimeout(function(){
                            whichModeCorrect.style.animation='none';
                            whichModeCorrect.style.opacity='0';
                            whichModeWrong.style.opacity='0';
                        },1000);
                        setTimeout(readyForNextRound('which'),2000);
                    })
                whichModeWrong.removeEventListener('touchend',function(){
                        this.style.animation=ANSWER_WRONG_ANIMATION;
                        setTimeout(function(){
                            whichModeWrong.style.animation='none';
                        },1000);
                    })
                whichModeCorrect.style.opacity='0';
                whichModeWrong.style.opacity='0';
                setTimeout(function(){        
                    whichModeLyrics.style.display='none'; 
                    whichModeCorrect.style.display='none';
                    whichModeWrong.style.display='none';
                    whichModeCorrect.innerHTML='';
                    whichModeWrong.innerHTML='';
                    whichModeCorrect.style.color='transparent';
                    whichModeWrong.style.color='transparent';
                    titles.style.display='block';
                    titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                showModeList();  
            },1000);
            }else if(modes[modeIndex].id=='wipe'){
                 rag.removeEventListener('mousedown',function(e){
                    rag.style.scale = '1.5';
                    isPointDown=true;
                })
                rag.removeEventListener('touchstart',function(e){
                     rag.style.scale = '1.5';
                    isPointDown=true;
                })
                rag.removeEventListener('mousemove',function(e){
                    rag.style.scale='1.3';
                    if(isPointDown){
                        if(filterArgument<=2){
                            isPointDown=false;
                            singerAndSongname.innerHTML=res.data.singer+' '+res.data.title;
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
                rag.removeEventListener('touchmove',function(e){
                    rag.style.scale='1.3';
                    if(isPointDown){
                        if(filterArgument<=2){
                            isPointDown=false;
                            singerAndSongname.innerHTML=res.data.singer+' '+res.data.title;
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
                rag.removeEventListener('mouseup',function(e){
                    rag.style.scale='1';
                    isPointDown=false;
                })
                rag.removeEventListener('touchend',function(e){
                    rag.style.scale='1';
                    isPointDown=false;
                })  
                lyrics.style.transition='1s';
                rag.style.transition='1s';
                rag.style.opacity='0';
                lyrics.style.opacity='0';
                setTimeout(function(){
                    rag.style.display='none';
                    lyrics.style.color='transparent';  
                    lyrics.innerHTML='';
                    lyrics.style.filter='none';
                    lyrics.style.display='none';
                    titles.style.display='block'; titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                    showModeList();  
                },1000);
            }else if(modes[modeIndex].id=='puzzle'){
                let ans = document.querySelectorAll('.answers');
                for(let i=0;i<ans.length;i++){
                    ans[i].style.opacity='0';
                }
                lyrics.style.opacity='0';
                setTimeout(function(){        
                    let answers = document.querySelectorAll('.answers');
                    for(let i=0;i<answers.length;i++){
                        page.removeChild(document.querySelector('.answers'));
                    }        
                   
                    lyrics.style.color='transparent';  
                    lyrics.innerHTML='';
                    lyrics.style.display='none';
                    titles.style.display='block';
                    titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                showModeList();  
            },1000); 
            }else if(modes[modeIndex].id=='input'){
                let answer = document.getElementById("answer");
                answer.style.transition='1s';
                answer.style.opacity='0';
                lyrics.style.opacity='0';
                lyrics.style.transform='translatey(10%)';
                setTimeout(function(){
                    page.removeChild(answer);
                    lyrics.style.color='transparent';  
                    lyrics.innerHTML='';
                    lyrics.style.display='none';
                    titles.style.display='block'; titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                    showModeList();  
                },1000);
            }else if(modes[modeIndex].id=='onion'){
                
                let answer = document.getElementById("answer");       
                
                answer.style.opacity='0';    
                lyrics.style.opacity='0';
                lyrics.style.transform='translatey(10%)'; 
                onionLeaf1.style.transition='1s';
                onionLeaf2.style.transition='1s';
                onionLeaf3.style.transition='1s';
                onionLeaf4.style.transition='1s';
                onionLeaf5.style.transition='1s';
                onionLeaf1.style.opacity='0';
                onionLeaf2.style.opacity='0';
                onionLeaf3.style.opacity='0';
                onionLeaf4.style.opacity='0';
                onionLeaf5.style.opacity='0';
                setTimeout(function(){
                    page.removeChild(answer);        
                    onionLeaf1.style.display='none';
                    onionLeaf1.style.animation='none';
                    
                    onionLeaf2.style.display='none';
                    onionLeaf2.style.animation='none';
                   
                    onionLeaf3.style.display='none';
                    onionLeaf3.style.animation='none';
                  
                    onionLeaf4.style.display='none';
                    onionLeaf4.style.animation='none';
                   
                    onionLeaf5.style.display='none';
                    onionLeaf5.style.animation='none';
                   
                    lyrics.style.color='transparent';  
                    lyrics.innerHTML='';
                    lyrics.style.display='none';
                    titles.style.display='block';
                    titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                    showModeList(); 
                    window.removeEventListener("touchstart",function(e){
                
                        onionTouchPosition.x=e.changedTouches[0].pageX;
                        onionTouchPosition.y=e.changedTouches[0].pageY;
                        isOnionTouchDown = true;
                    })
                    window.removeEventListener("touchmove",function(e){
                
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

                                    document.getElementById("blank").innerHTML=answer.innerHTML;  
                                    
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
                    window.removeEventListener("touchend",function(){
                
                        onionTouchPosition.x=undefined;
                        onionTouchPosition.y=undefined;
                        if(onionTouchKeys.indexOf('swipe left')>-1)onionTouchKeys.splice(onionTouchKeys.indexOf('swipe left'),1);
                        else if(onionTouchKeys.indexOf('swipe right')>-1)onionTouchKeys.splice(onionTouchKeys.indexOf('swipe right'),1);
                        isOnionTouchDown = false;
                    }) 
                    
                    
            },1000); 
            }else if(modes[modeIndex].id =='scale'){
                window.removeEventListener("touchstart",function(e){
                       scaleTouchPosition.y = e.changedTouches[0].pageY
                    })
                    window.removeEventListener("touchmove",function(e){
                        
                        
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
                    window.removeEventListener("touchend",function(){
                        scaleTouchPosition.y=undefined    
                    }) 
                lyrics.style.opacity='0';
                lyrics.style.transform='translatey(10%)';
                setTimeout(function(){
                    
                    lyrics.style.color='transparent';  
                    lyrics.innerHTML='';
                    lyrics.style.display='none';
                    titles.style.display='block'; titles.style.opacity='1';
                    bgmControl.style.display='none';
                    graduallyShowTitle();

                    showModeList();  
                },1000);
            }
                
            
        
            
        
            
        
            
        
     })