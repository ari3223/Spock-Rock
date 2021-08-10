
class UI_anime {
  selectanime(e){
    ui.write_choiceU(Number(e.target.id), 'user');
    startBtn.disabled = false;
    const choosenID = e.target.id;
    if (e.target.classList.contains('borclick')) {
        e.target.classList.remove('borclick');
        userchoose = undefined;
        user_choice.textContent = '';
        
    }
    else{
        e.target.classList.add('borclick');
        userchoose = e.target.id;
        
    }
    
    options.forEach((el) => {
        if (el.classList.length === 2 && el.id !== choosenID) {
            el.classList.remove('borclick');
        }
    })
  }
    startAnime(){
        const animpromis = new Promise((resolve) =>{
            const CPchoose = Math.floor(Math.random()*4);
            let   secends; 
            switch (CPchoose) {
                case 0:
                    secends = 2350;
                    break;
                case 1:
                    secends = 2750;
                    break;
                case 2:
                    secends = 3150;
                    break;
                case 3:
                    secends = 3650;
                    break;
                case 4:
                    secends = 3950;
                    break;
            }
            optionPC.forEach(element => {
                element.classList.remove('anim')
            });
             let number = 0;
             
             const sanim = setInterval(() => {
                 if (number > 4) {
                     number = 0;
                     optionPC[4].classList.remove('anim')
                 }
                 if (number !== 0) {
                     optionPC[number-1].classList.remove('anim')
                 }
                 
                 optionPC[number].classList.add('anim');
                 ++number
                 
             }, 350);
             setTimeout(() => {
                 clearInterval(sanim);
                 ui.write_choiceU(CPchoose, 'cp');
                 optionPC.forEach(element => {
                     if (element.classList.contains('anim')) {
                         resolve(element.id);
                     }
                     
                 });
             }, secends)
        })
        return animpromis 
    }
    
    loseAnime(){
      showmeme.classList.add('shoecry');
       const crying = document.querySelector('#los')
       crying.play()
       setTimeout(() => {
        ui.endanime(0, 0, 1);
       }, 1450);
    }

    winAnime(){
        hapsong.currentTime = 0;
        hapsong.play();
        const canvasEl = document.querySelector('#canvas');
        const w = canvasEl.width = window.innerWidth;
        const h = canvasEl.height = window.innerHeight * 2;
        
        function loop() {
          requestAnimationFrame(loop);
          ctx.clearRect(0,0,w,h);
          
          confs.forEach((conf) => {
            conf.update();
            conf.draw();
          })
        }
        
        function Confetti () {
          //construct confetti
          const colours = ['#fde132', '#009bde', '#ff6b00'];
          
          this.x = Math.round(Math.random() * w);
          this.y = Math.round(Math.random() * h)-(h/2);
          this.rotation = Math.random()*360;
        
          const size = Math.random()*(w/60);
          this.size = size < 15 ? 15 : size;
        
          this.color = colours[Math.floor(colours.length * Math.random())];
        
          this.speed = this.size/3.2;
          
          this.opacity = Math.random();
        
          this.shiftDirection = Math.random() > 0.5 ? 1 : -1;
        }
        
        Confetti.prototype.border = function() {
          if (this.y >= h) {
            this.y = h;
          }
        }
        
        Confetti.prototype.update = function() {
          this.y += this.speed;
          
          if (this.y <= h) {
            this.x += this.shiftDirection/3;
            this.rotation += this.shiftDirection*this.speed/100;
          }
        
          if (this.y > h) this.border();
        };
        
        Confetti.prototype.draw = function() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, this.rotation, this.rotation+(Math.PI/2));
          ctx.lineTo(this.x, this.y);
          ctx.closePath();
          ctx.globalAlpha = this.opacity;
          ctx.fillStyle = this.color;
          ctx.fill();
        };
        
        const ctx = canvasEl.getContext('2d');
        const confNum = Math.floor(w / 4);
        const confs = new Array(confNum).fill().map(_ => new Confetti());
        
        loop();
        setTimeout(() => {
            ui.endanime(1, 0, 0);
        }, 3200);
    }

    equalAnime(){
        equalh1p.style.display = 'flex';
        setTimeout(() => {
          ui.endanime(0, 1, 0);
        }, 2000);
    }
    write_choiceU(id, who){
        let choiceName;
              
              switch (id) {
                  case 0:
                    choiceName = 'Rock';
                      break;
                  case 1:
                    choiceName = 'Paper';
                        break;
                  case 2:
                    choiceName = 'Scissors';
                      break;
                  case 3:
                    choiceName = 'Lizard';
                      break;
                  case 4:
                    choiceName = 'Spock';
                      break;
              }
              if (who === 'user') {
                user_choice.innerHTML = `--${choiceName}`;
              }
              else if (who === 'cp') {
                cp_choice.innerHTML = `--${choiceName}`;
              }
              
    }

    endanime(win, eq, los) {
      document.querySelector('.borclick').classList.remove('borclick');
      document.querySelector('.anim').classList.remove('anim');
      startBtn.disabled = false;

      if (win != 0) {
        hapsong.pause();
        document.querySelector('.hp').style.display = 'none';
        document.querySelector('.hph').style.display = 'none';
      }
      if (eq != 0) {
        equalh1p.style.display = 'none';
      }
      if (los != 0) {
        showmeme.classList.remove('shoecry');
        showmeme.style.display = 'none';
      }
      
    }
  }
