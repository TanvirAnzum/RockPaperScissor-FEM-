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
let hpicked = document.querySelector('.house-picked');
let upicked = document.querySelector('.user-picked');
let verdict = document.querySelector('.verdict');
let main_content = document.querySelector('.main__content');
let text = document.querySelector('.verdict-title');
let replay = document.querySelector('.replay');
// console.log(hpicked + upicked);


///object for mapping

let obj = {
    'rock': rock,
    'paper': paper,
    'scissor': scissor
}


let selected, playerSelection,computerSelection;
rock.addEventListener('click', ()=> {
    playerSelection = 'rock';
    hide(paper,scissor);
    common(rock);
},{once : true})
paper.addEventListener('click', ()=> {
    playerSelection = 'paper';
    hide(rock,scissor);
    common(paper);
},{once : true})
scissor.addEventListener('click', ()=> {
    playerSelection = 'scissor';
    hide(paper,rock);
    common(scissor);
},{once : true})


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
    hpicked.style.display = 'block';
    upicked.style.display = 'block';
    computerSelection = ComputerPlay();
    let cp = obj[computerSelection];
    element(cp);
    console.log(selected + cp);
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

    setTimeout(() => {
       
        house.classList.replace('compute',elm.classList[0]);
        let child = elm.childNodes[1];
        let clone = child.cloneNode(true);
        house.appendChild(clone);
        house.classList.add('cp');
        text.innerHTML = playRound(playerSelection,computerSelection);
        verdict.style.display ='block';

    }, 1500);
    
}


///verdict

function playRound(playerSelection,computerSelection)
{
    if(playerSelection === computerSelection) return "No winner";
    else if(playerSelection === 'rock') {
        if(computerSelection === 'scissor') return "You Win";
        else return "You Lose";
    }
    else if(playerSelection === 'paper') {
        if(computerSelection === 'scissor') return "You Lose";
        else return "You Win";
    }
    else if(playerSelection === 'scissor') {
        if(computerSelection === 'paper') return "You Win";
        else return "You Lose";
    }
}

replay.addEventListener('click', ()=> {
   location.reload(); 
},{once:true});