// user input

let name = prompt("Please enter your name.");

if(name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
} else {
    console.log("You didn't enter your name.")
}
// interactive game

let playGame = confirm("Shall we play rock, paper, scissors?");

if (playGame) {
    // play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {

            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
                : computerChoice === 2 ? "paper"
                : "scissors";
            
                let result = 
                playerOne === computer
                    ? "Tie game!"
                    : playerOne === "rock" && computer === "paper"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : playerOne === "paper" && computer === "scissors"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : playerOne === "scissors" && computer === "rock"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
                    alert(result);
                    let playAgain = confirm("Play Again?");
                    playAgain ? location.reload() : alert("Ok, thanks for playing.");
        } else {
            alert("You didn't enter rock, paper, or scissors.");
        }
    } else {
        alert("I guess you changed your mind. Maybe next time.");
    }
} else {
    alert("Ok, maybe next time.");
}

// loops

let myNumber = 50;
while (myNumber < 50) {
    myNumber += 2;
    console.log(myNumber)
}

do {
    console.log(myNumber);
} while (myNumber < 50);

let name = "Daniel";
for (let i = 0; i <= name.length; i++) {
    console.log(name.charAt(i));
}

let counter = 0;
let myLetter;
while (true) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === "i") break;
    counter++;
}

// functions

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(3, 6));

const getUserNameFromEmail = function (email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("user@GitHub.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name. slice(1).toLowerCase();
};

console.log(toProperCase("dAniEl"));

// var, let, const

// global scope
var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

// local scope
function myFunc() {
    var x = 10;
    const z = 5;
    {
        var x = 11;     // function scoped
        const z = 6;    // block scoped
        console.log(`global: ${x}`);
        console.log(`global: ${y}`);
        console.log(`global: ${z}`);
    }
    console.log(`global: ${x}`);
    console.log(`global: ${y}`);
    console.log(`global: ${z}`);

}

myFunc();