const Screen_1 = document.querySelector("#screen-1");
const Screen_2 = document.querySelector("#screen-2");
const playBtn = document.querySelector("#playBtn");
const scoreHead = document.querySelector("span");
const scoreDiv = document.querySelector(".score");
const resetBtn = document.querySelector(".reset");
const gameOver = document.querySelector(".game-over");
const boxContainer = document.querySelector("#box-container");
const boxesContainer = document.querySelector("#boxes");
let randomArray = [];


playBtn.onclick = () => {
    Screen_1.style.display = "none";
    Screen_2.style.display = "flex";
    scoreDiv.style.display = "flex"
}

document.addEventListener("load", gameStart());

let score = 0;
function gameStart() {
    for (let i = 0; i < 81; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.id = i
        boxesContainer.appendChild(box);
    }

    for (let j = 0; j < 10; j++) {
        let random = Math.floor(Math.random() * 81)
        console.log(random)
        randomArray.push(random)
    }
    console.log(randomArray);

    let Box = document.querySelectorAll(".box");
    Box.forEach((box) => {
        box.addEventListener("click", function () {

            if (randomArray.includes(Number(box.id.slice(0)))) {
                randomArray.forEach((bomb) => {
                    Box[bomb].classList.add('box-danger')
                })
                gameOver.classList.remove('hidden')
                gameOver.classList.add('shown')
            }
            else {
                if (box.classList.contains('box-open')) {
                    return false;
                }
                else {
                    box.classList.add('box-open')
                    scoreHead.innerHTML = ++score;
                }
            }
        })
    })
}

resetBtn.onclick = () => {
    boxesContainer.innerHTML = "";
    gameOver.classList.add('hidden')
    gameOver.classList.remove('shown')
    score = 0;
    randomArray.length = 0;
    scoreHead.innerHTML = score;
    gameStart();
}






