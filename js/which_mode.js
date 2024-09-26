const WHICH_MODE_GAME_MESSAGE = 'Touch the correct one!';
let randNum;

function toWhich(){
    
        if(window.innerWidth<=MOBILE_SCREEN_RANGE||window.innerHeight<=MOBILE_SCREEN_HEIGHT){
            hideTitleAndModeList();
            backHomepage.style.display='inline';
            gameMessage.innerHTML=WHICH_MODE_GAME_MESSAGE;  
            gameMessage.style.display='block';
            bgmControl.style.display='inline';
            whichModeLyrics.style.display='flex';
            
            setTimeout(function(){
 
                let chosenLyrics = '';
                let wrongLyrics='';
                axios.get('../php/get_lyrics.php').then(res=>{
                    chosenLyrics=res.data.lyrics;
                    gameBGM.src=res.data['song_source'];
                    gameBGM.currentTime=BGM_START_TIME;
                    let chosenSongIndex = res.data['key_of_songs'];
                      
                    singerAndSongname.innerHTML='Which belongs to '+res.data.title+' '+res.data.singer+'?';
                    singerAndSongname.style.display='block';    
                    whichModeCorrect.innerHTML=chosenLyrics;
                    whichModeCorrect.style.display='block';
                    whichModeCorrect.addEventListener('touchend',function(){
                        this.style.animation=ANSWER_RIGHT_ANIMATION;
                        setTimeout(function(){
                            whichModeCorrect.style.animation='none';
                            whichModeCorrect.style.opacity='0';
                            whichModeWrong.style.opacity='0';
                        },1000);
                        setTimeout(readyForNextRound('which'),2000);
                    })
                    axios.post('../php/get_wrong_lyrics.php',{
                        chosenIndex:chosenSongIndex
                    }).then(res=>{
                        wrongLyrics=res.data.lyrics;
                        whichModeWrong.innerHTML=wrongLyrics;
                        whichModeWrong.style.display='block';
                        whichModeWrong.addEventListener('touchend',function(){
                        this.style.animation=ANSWER_WRONG_ANIMATION;
                        setTimeout(function(){
                            whichModeWrong.style.animation='none';
                        },1000);
                    })
                        setTimeout(function(){
                        
                        randNum=swapOrder();
                        window.addEventListener('resize',function(randNum){
                            if(randNum<0.5)window.innerWidth<=MOBILE_SCREEN_RANGE?whichModeLyrics.style.flexDirection='column-reverse':whichModeLyrics.style.flexDirection='row-reverse'; 
    else window.innerWidth<=MOBILE_SCREEN_RANGE?whichModeLyrics.style.flexDirection='column':whichModeLyrics.style.flexDirection='row';
                            
                        })    
                        whichModeCorrect.style.opacity='1';
                        whichModeWrong.style.opacity='1';
                        whichModeCorrect.style.color='black';
                        whichModeWrong.style.color='black';  
                        bgmControl.style.opacity='1';
                        gameMessage.style.opacity='1'; 
                        singerAndSongname.style.opacity='1'; 
                        backHomepage.style.opacity='1';
                    },1000);
                    }).catch(err=>console.log(err));
                    
                }).catch(err=>console.log(err));
   
            },2000); 
        }else{
            hideTitleAndModeList();
            gameMessage.innerHTML=WHICH_MODE_GAME_MESSAGE;  
            gameMessage.style.display='block';
            bgmControl.style.display='inline';
            whichModeLyrics.style.display='flex';
            
            setTimeout(function(){
        
            let chosenLyrics = '';
            let wrongLyrics='';
            axios.get('../php/get_lyrics.php').then(res=>{
                chosenLyrics=res.data.lyrics;
                gameBGM.src=res.data['song_source'];
                gameBGM.currentTime=BGM_START_TIME;
                let chosenSongIndex = res.data['key_of_songs'];
                      
                singerAndSongname.innerHTML='Which belongs to '+res.data.title+' '+res.data.singer+'?';
                singerAndSongname.style.display='block';    
                whichModeCorrect.innerHTML=chosenLyrics;
                whichModeCorrect.style.display='block';
                whichModeCorrect.addEventListener('click',function(){
                        this.style.animation=ANSWER_RIGHT_ANIMATION;
                        setTimeout(function(){
                            whichModeCorrect.style.animation='none';
                            whichModeCorrect.style.opacity='0';
                            whichModeWrong.style.opacity='0';
                        },1000);
                        setTimeout(readyForNextRound('which'),2000);
                    })
                axios.post('../php/get_wrong_lyrics.php',{
                    chosenIndex:chosenSongIndex
                }).then(res=>{
                        wrongLyrics=res.data.lyrics;
                        whichModeWrong.innerHTML=wrongLyrics;
                        whichModeWrong.style.display='block';
                        whichModeWrong.addEventListener('click',function(){
                        this.style.animation=ANSWER_WRONG_ANIMATION;
                        setTimeout(function(){
                            whichModeWrong.style.animation='none';
                        },1000);
                    })
    
                setTimeout(function(){
                  
                    randNum=swapOrder();
                     window.addEventListener('resize',function(randNum){
                            if(randNum<0.5)window.innerWidth<=MOBILE_SCREEN_RANGE?whichModeLyrics.style.flexDirection='column-reverse':whichModeLyrics.style.flexDirection='row-reverse'; 
    else window.innerWidth<=MOBILE_SCREEN_RANGE?whichModeLyrics.style.flexDirection='column':whichModeLyrics.style.flexDirection='row';
                            
                        }) 
                    whichModeCorrect.style.opacity='1';
                    whichModeWrong.style.opacity='1';  
                    whichModeCorrect.style.color='black';
                    whichModeWrong.style.color='black';
                    bgmControl.style.opacity='1';
                    gameMessage.style.opacity='1'; 
                    singerAndSongname.style.opacity='1'; 
                       
                },1000);
                }).catch(err=>console.log(err));
 
            }).catch(err=>console.log(err));
     
            },2000); 
        
        }    
}     
