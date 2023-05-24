window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;

    class Fire { 
        constructor(){
            this.image = document.getElementById('fire');
            this.spriteWidth = 72;
            this.spriteHeight = 120;
            this.width = this.spriteWidth;
            this.height = this.spriteHeight;
            this.x = 250 - 36;
            this.y = 250 - 55;
            this.minFrame = 0;
            this.maxFrame = 15;
            this.frame = 0;
            this.frameX = 0;
            this.frameY = 0;
        }
        draw(context){ 
            context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }
        update(){ 
            /*if(this.frameX < 5) this.frameX++
            else this.frameX = 0; */
            if (this.frame < this.maxFrame) this.frame++;
            else this.frame = this.minFrame;
            this.frameX = this.frame % 5;
            this.frameY = Math.floor(this.frame % 3);
        }
    }

    const fire = new Fire();

    function animate(){ 
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        fire.draw(ctx);
        fire.update();
        setTimeout(() => {
            requestAnimationFrame(animate);
          }, 1000 / 20);
    }
    animate();
})
