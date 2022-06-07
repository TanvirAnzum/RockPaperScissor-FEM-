///for modal section
const btn = document.querySelector(".rules");
const modal = document.querySelector(".modal");
const close_btn = document.querySelector("#close-icon");

btn.addEventListener("click", () => {
  modal.style.display = "flex";
});

close_btn.addEventListener("click", () => {
  modal.style.display = "none";
});

//for gameplay visual section

const clr = document.querySelector(":root");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const wrapper = document.querySelector(".wrapper");
let house = document.querySelector(".house");
let hpicked = document.querySelector(".house-picked");
let upicked = document.querySelector(".user-picked");
let verdict = document.querySelector(".verdict");
let main_content = document.querySelector(".main__content");
let text = document.querySelector(".verdict-title");
let replay = document.querySelector(".replay");
let points = document.querySelector(".points");

points.innerHTML = getScore();
// console.log(hpicked + upicked);

//global variable for elm
let player_elm;
let computer_elm;

///object for mapping

let obj = {
  rock: rock,
  paper: paper,
  scissor: scissor,
};

let selected, playerSelection, computerSelection;
rock.addEventListener(
  "click",
  () => {
    playerSelection = "rock";
    hide(paper, scissor);
    common(rock);
  },
  { once: true }
);
paper.addEventListener(
  "click",
  () => {
    playerSelection = "paper";
    hide(rock, scissor);
    common(paper);
  },
  { once: true }
);
scissor.addEventListener(
  "click",
  () => {
    playerSelection = "scissor";
    hide(paper, rock);
    common(scissor);
  },
  { once: true }
);

function hide(...elm) {
  for (i in elm) {
    elm[i].style.display = "none";
  }
}

function common(elm) {
  selected = elm;
  wrapper.style.backgroundImage = "url('')";
  elm.classList.add("selected");
  house.style.display = "flex";
  hpicked.style.display = "block";
  upicked.style.display = "block";
  computerSelection = ComputerPlay();
  let cp = obj[computerSelection];
  element(cp);
  console.log(selected + cp);
}

///compute play random number generator

function ComputerPlay() {
  let Random_number = Math.floor(Math.random() * 9 + 1);
  if (Random_number % 3 == 0) return "rock";
  else if (Random_number % 3 == 1) return "paper";
  else return "scissor";
}

function element(elm) {
  setTimeout(() => {
    house.classList.replace("compute", elm.classList[0]);
    let child = elm.childNodes[1];
    let clone = child.cloneNode(true);
    house.appendChild(clone);
    house.classList.add("cp");
    let ver = playRound(playerSelection, computerSelection);
    text.innerHTML = ver;
    verdict.style.display = "block";
    let score;
    let div = getCircle();
    if (ver == "You Win") {
      score = getScore();
      writeScore(++score);
      selected.appendChild(div);
      clr.style.setProperty("--hovercolor", "green");
    } else if (ver == "You Lose") {
      score = getScore();
      writeScore(--score);
      house.appendChild(div);
      clr.style.setProperty("--hovercolor", "red");
    } else {
      score = getScore();
      clr.style.setProperty("--hovercolor", "tomato");
    }
    points.innerHTML = score;
  }, 1500);
}

///verdict

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "No winner";
  else if (playerSelection === "rock") {
    if (computerSelection === "scissor") return "You Win";
    else return "You Lose";
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissor") return "You Lose";
    else return "You Win";
  } else if (playerSelection === "scissor") {
    if (computerSelection === "paper") return "You Win";
    else return "You Lose";
  }
}

replay.addEventListener(
  "click",
  () => {
    location.reload();
  },
  { once: true }
);

///score card management

function getScore() {
  let val = localStorage.getItem("score");
  if (val == undefined) val = 0;
  return val;
}

function writeScore(value) {
  var score = value;
  localStorage.setItem("score", score);
}

///circling design

function getCircle() {
  let div = document.createElement("div");
  div.classList.add("circle-area");
  let div1 = document.createElement("div");
  div1.classList.add("circle-1");
  let div2 = document.createElement("div");
  div2.classList.add("circle-2");
  let div3 = document.createElement("div");
  div3.classList.add("circle-3");
  div.appendChild(div1);
  div.appendChild(div2);
  div.appendChild(div3);
  return div;
}
