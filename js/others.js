//變數宣告
let move = document.getElementById("move");  
let egg = document.getElementById("egg");
let which = document.getElementById("which"); 
let wipe = document.getElementById("wipe");
let puzzle = document.getElementById("puzzle");
let input = document.getElementById('input');
let onion = document.getElementById('onion');
let scale = document.getElementById('scale');
let logoImage = document.getElementById("logo-image");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let logoAnimation;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
  
//背景音樂循環播放
gameBGM.loop=true;




//mylogo
//用來生成一個個粒子
class Particle{
    constructor(effect,x,y,color) {
        this.effect=effect;
        this.x=Math.random()*this.effect.width;
        this.y=Math.random()*this.effect.height;
        this.originX =x;
        this.originY=y;
        this.color=color;
        this.size=this.effect.gap;
        this.vx=0;
        this.vy=0;
        this.ease=0.055;
    }
    draw(ctx){
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.size,this.size);
    }
    update(){
        this.x+=(this.originX - this.x)*this.ease;
        this.y+=(this.originY - this.y)*this.ease;
    }
}
//用來一次同時操作所有粒子而形成效果
class Effect{
    constructor(width,height) {
        this.width=width;
        this.height=height;
        this.image = logoImage;
        this.particleArray=[];
        this.centerX = this.width * 0.5;
        this.centerY = this.height * 0.5;
        this.gap = 1;
        this.x = this.centerX - this.image.width*0.25;
        this.y = this.centerY - this.image.height*0.25;
    }
    init(ctx){
        ctx.drawImage(this.image,this.x,this.y,this.image.width*0.5,this.image.height*0.5);
        const pixels = ctx.getImageData(0,0,this.width,this.height).data;
        for(let y=0;y<this.height;y+=this.gap){
            for(let x=0;x<this.width;x+=this.gap){
                const index = (y*this.width+x)*4;
                const red = pixels[index];
                const green = pixels[index+1];
                const blue = pixels[index+2];
                const alpha = pixels[index+3];
                const color = 'rgb('+red+','+green+','+blue+')';
                if(alpha>0)this.particleArray.push(new Particle(effect,x,y,color));      
            }
        }
    }
    draw(ctx){
        this.particleArray.forEach(particle => particle.draw(ctx));
       
    }
    update(){
        this.particleArray.forEach(particle => particle.update());
    }
}


function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    effect.draw(ctx);
    effect.update();
    logoAnimation = requestAnimationFrame(animate);
}




const effect = new Effect(canvas.width,canvas.height);
effect.init(ctx);
animate();
setTimeout(function(){
    cancelAnimationFrame(logoAnimation);
    canvas.style.display='none';
},4000);
setTimeout(function(){   
    page.style.display='block';
    for(let i=0;i<waves.length;i++){
        waves[i].style.display='inline';
    }
    graduallyShowTitle();
    showModeList();
},5000);





//監聽事件
previous.addEventListener("click",toPrevious); 
next.addEventListener("click",toNext);
move.addEventListener("click",toMove);
throwModeButton.addEventListener("click",toThrow);
egg.addEventListener("click",toEgg);
which.addEventListener("click",toWhich);
wipe.addEventListener('click',toWipe);    
puzzle.addEventListener("click",toPuzzle);
input.addEventListener('click',toInput);
onion.addEventListener('click',toOnion);
scale.addEventListener('click',toScale);
bgmControl.addEventListener("click",toggleBGM);
bgmControl.addEventListener("touchend",toggleBGM);
window.addEventListener('keydown',function(e){
    if(e.key=='m')toggleBGM(e);
    else return;
})

    
    
    
    
  
    
    
   
   
   
 

   




  


























