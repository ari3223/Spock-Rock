//classe's + variable's
const ui = new UI_anime();
const cul = new CUL();
const lc = new LC();

let options = document.querySelectorAll('.option'),
    optionPC = document.querySelectorAll('.optionPC'),
    cp_choice = document.querySelector('#cpchoice'),
    user_choice = document.querySelector('#usrchoice'),
    startBtn = document.querySelector('#go'),
    equalh1p = document.querySelector('.eq'),
    hapsong = document.querySelector('#hap'),
    showmeme = document.querySelector('.cryP'),
    userScore = document.querySelector('#users'),
    pcScore = document.querySelector('#pcs'),
    restart = document.querySelector('#go div'),
    userchoose;
    

//eventLisener's
eventListener()
function eventListener() {
    options.forEach(el => { el.addEventListener('click', (e) => {
         ui.selectanime(e); 
         startBtn.addEventListener('click', StartGame); 
        })
    });
    startBtn.addEventListener('touchstart', Reset);
    startBtn.addEventListener('touchend', (e) => { restart.style.display = 'none' });
    startBtn.addEventListener('mousedown', Reset);
    startBtn.addEventListener('mouseup', (e) => { restart.style.display = 'none' });
    document.addEventListener('DOMContentLoaded', lc.WriteandShow());
}
//function's
async function StartGame() {
    
    if (choosORnot() === 1) {
        startBtn.disabled = true;
        const computer = await ui.startAnime();
        const winer = await cul.winer(computer);
        cul.basedOnResult(winer);
    }
}
function choosORnot() {
    let choooos = 0;
    options.forEach(element => {
        if (element.classList.contains('borclick')) {
            choooos = 1;
        }
    });
    return choooos;
}

function Reset() {
    if (choosORnot() !== 1){
        restart.style.display = 'block';
        setTimeout(() => {
            if (restart.style.display === 'block') {
                window.navigator.vibrate(300);
                lc.removeAllLc();
                ui.endanime(1, 1, 1);
                
            }
        }, 1300);
    }
}


