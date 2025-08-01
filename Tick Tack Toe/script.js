let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#resetgame");

let player1 = true;
let winmsg = document.querySelector("#msgg");
let wincontainer = document.querySelector(".winner");
let newgamebtn = document.querySelector("#new-game");
const win_pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

function initGame() {
    player1 = true;
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    wincontainer.classList.add("hide");
    winmsg.innerText = "Congratulation, Winner is ";
}

initGame();

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player1) {
            box.innerText = "O";
            player1 = false;
        } else {
            box.innerText = "X";
            player1 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

function showWinner(winner) {
    winmsg.innerText = `Congratulations! Winner is ${winner}`;
    wincontainer.classList.remove("hide");
}

function disablebtn() {
    for (let box of boxes) {
        box.disabled = true;
    }
}

function checkWinner() {
    for (let pattern of win_pattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                disablebtn();
                return;
            }
        }
    }
    // Check for draw
    let allFilled = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            allFilled = false;
            break;
        }
    }
    if (allFilled) {
        winmsg.innerText = "It's a Draw!";
        wincontainer.classList.remove("hide");
        disablebtn();
    }
}

rstbtn.addEventListener("click", initGame);
newgamebtn.addEventListener("click", initGame);