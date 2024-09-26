const ANSWER_RIGHT_ANIMATION = 'isRight 1s 1';
const EGG_MODE_GAME_MESSAGE = 'Press and break the egg!';




let backHomepage = document.getElementById("back-homepage");
let eggPicture = document.getElementById("egg-picture");
let eggPicture2 = document.getElementById("egg-picture2");
let eggPicture3 = document.getElementById("egg-picture3");
let a = document.getElementById("a");
let d = document.getElementById("d");
let mobileEggMode = document.querySelectorAll(".mobile-egg-mode");




function toEgg(){
    hideTitleAndModeList();
    eggPicture.style.display='inline';
    gameMessage.innerHTML=EGG_MODE_GAME_MESSAGE;  
    gameMessage.style.display='block';
    bgmControl.style.display='inline';
    breakCount = 0;
    if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){
        backHomepage.style.display='inline';
     for(let i=0;i<mobileEggMode.length;i++){
            mobileEggMode[i].style.display='inline';
    }
    } 
    setTimeout(function(){
    
    let chosenLyrics = '';
    axios.get('../php/get_lyrics.php').then(res=>{
        chosenLyrics=res.data.lyrics;
        gameBGM.src=res.data['song_source'];
        gameBGM.currentTime=BGM_START_TIME;
        let indexFrom = Math.round(Math.random()*(chosenLyrics.length-11));
    
    let str = chosenLyrics.slice(indexFrom,indexFrom+12); 
    let final = chosenLyrics.replace(str,`<span id="blank" data-answer="${str}" >&nbsp;&nbsp;?&nbsp;&nbsp;</span>`);

    let ans = document.createElement("span");
    ans.id='answer';
    
    
        ans.style.left='calc(50% - 80px)'; ans.style.top='calc(70% - 22px)';

            
        
        ans.innerHTML=str;
        singerAndSongname.innerHTML=res.data.title+' '+res.data.singer;
        singerAndSongname.style.display='block';
        page.appendChild(ans);  
        lyrics.innerHTML=final;  
        lyrics.style.display='block'; 
        window.addEventListener("keydown",shakeTheEgg);
         a.addEventListener("touchstart",function(){
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
                if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)document.getElementById('blank').style.fontSize='clamp(16px,4dvh,24px)';
                else  document.getElementById("blank").style.fontSize='clamp(16px,4vw,24px)';

                    document.getElementById("blank").innerHTML=ans.innerHTML;   
                    setTimeout(function(){
                        eggPicture2.style.display='none';
                eggPicture3.style.display='none'; 
                        let ans = document.getElementById("answer");
                        ans.style.animation=ANSWER_RIGHT_ANIMATION;
                        setTimeout(function(){
                        ans.style.animation='none';
                        
                        },1000);
                        lyrics.style.opacity='0';
                        lyrics.style.transform='translatey(10%)'; 
                    },1000);
                setTimeout(function(){
                let ans = document.getElementById("answer");
                ans.style.opacity='1';
                },500);     
                    setTimeout(readyForNextRound('egg'),2000);
            }   
             })
         d.addEventListener("touchstart",function(){
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
                if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)document.getElementById('blank').style.fontSize='clamp(16px,4dvh,24px)';
                else document.getElementById("blank").style.fontSize='clamp(16px,4vw,24px)';
                    document.getElementById("blank").innerHTML=ans.innerHTML;
                    setTimeout(function(){
                        eggPicture2.style.display='none';
                eggPicture3.style.display='none';
                        let ans = document.getElementById("answer");
                        ans.style.animation=ANSWER_RIGHT_ANIMATION;
                        setTimeout(function(){
                        ans.style.animation='none';
                         
                        },1000);
                        lyrics.style.opacity='0';
                        lyrics.style.transform='translatey(10%)'; 
                    },1000);
                setTimeout(function(){
                let ans = document.getElementById("answer");
                ans.style.opacity='1';
                },500);     
                    setTimeout(readyForNextRound('egg'),2000);
            }
             }) 
        
        
       
    
    
    
    
        

    
        

    
        


    
    
        setTimeout(function(){
        eggPicture.style.opacity='1';
         lyrics.style.opacity='1';
        lyrics.style.color='black';
        document.getElementById('blank').style.color='black';
        bgmControl.style.opacity='1';
         gameMessage.style.opacity='1'; 
         singerAndSongname.style.opacity='1';  
        if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){
         backHomepage.style.opacity='1';
         for(let i=0;i<mobileEggMode.length;i++){
            mobileEggMode[i].style.opacity='1';
    }
  }
        
        
        },1000);  
        setTimeout(function(){
        eggPicture.style.transition='none';
        },2000); 

        }).catch(err=>console.log(err));
 
 
 
   
   
   
   
   
    },2000);
  
}




function shakeTheEgg(e){
    if(modes[modeIndex].id=='egg'){
        if(breakCount<79){
            if(e.key=='a'){
                eggPicture.style.transform='translatex(-3%)';
                breakCount++;
            }
            else if(e.key=='d'){
                eggPicture.style.transform='translatex(3%)';
                breakCount++;
            }
        }
        if(breakCount==79){
            if(e.key=='a'){
                eggPicture.style.transform='none';
                breakCount++;
            }
            else if(e.key=='d'){
                eggPicture.style.transform='none';
                breakCount++;
            }
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
            eggPicture.src='https://github.com/hiphop200199/etc/raw/main/egg-full.svg';
            eggPicture2.style.display='inline';
            eggPicture3.style.display='inline';
              if(window.innerHeight<=MOBILE_SCREEN_HEIGHT)document.getElementById('blank').style.fontSize='clamp(16px,4dvh,24px)';
                else  document.getElementById("blank").style.fontSize='clamp(16px,4vw,24px)';
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
    }
}