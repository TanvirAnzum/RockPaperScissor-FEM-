///for modal section
const btn = document.querySelector('.rules');
const modal = document.querySelector('.modal');
const close_btn = document.querySelector('#close-icon');

btn.addEventListener('click', ()=>{
    modal.style.display = 'flex';
})

close_btn.addEventListener('click', ()=>{
    modal.style.display = 'none';
})

//for gameplay visual section

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const wrapper = document.querySelector('.wrapper');
let house = document.querySelector('.house');

///object for mapping

let obj = {
    'rock': rock,
    'paper': paper,
    'scissor': scissor
}


let selected;
rock.addEventListener('click', ()=> {
    hide(paper,scissor);
    common(rock);
})
paper.addEventListener('click', ()=> {
    hide(rock,scissor);
    common(paper);
})
scissor.addEventListener('click', ()=> {
    hide(paper,rock);
    common(scissor);
})


function hide(...elm) {
    for(i in elm) {
        elm[i].style.display = 'none';
    }
}

function common(elm) {
    selected = elm;
    wrapper.style.backgroundImage = "url('')";
    elm.classList.add('selected');
    house.style.display = 'flex'; 
    let cp = obj[ComputerPlay()];
    element(cp);
}

///compute play random number generator

function ComputerPlay() 
{
    let Random_number = Math.floor(Math.random() * 9 + 1);
    if(Random_number%3 == 0) return "rock";
    else if(Random_number%3 == 1) return "paper";
    else return "scissor";
}



function element(elm) {
    house.classList.replace('compute',elm.classList[0]);
    house.classList.add('cp');
}