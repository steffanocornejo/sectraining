const anyName = "Daniel";

console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));

// conditionals

let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} & crackers.`;
} else if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = `Sorry, we're out of soup.`;
}
console.log(reply);


//      new ex
let testScore = 59;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else {
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F";
    }
}

console.log(grade);


//      new ex
let playerOne = "scissors";
let computer = "paper";
let message;

if (playerOne === computer) {
    message = "Tie game!"
} else if (playerOne === "rock") {
    if (computer === "paper") {
        message = "Computer wins";
    } else {
        message = "Player 1 wins!";
    }
} else if (playerOne === "paper") {
    if (computer === "scissors") {
        message = "Computer wins";
    } else {
        message = "Player 1 wins!";
    }
} else {
    if (computer === "rock") {
        message = "Computer wins";
    } else {
        message = "Player 1 wins!";
    }
}
console.log(message);

// switch statements

switch (Math.floor(Math.random() * 5) + 1) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("No match");
}


//      new ex
let playerOne = "scissors";
let computer = "rock";
switch (playerOne) {
    case computer:
        console.log("Tie game!");
        break;
    case "rock":
        if (computer === "paper") {
            console.log("Computer wins!");
        } else {
            console.log("playerOne wins!");
        }
        break;
    case "paper":
        if (computer === "scissors") {
            console.log("Computer wins!");
        } else {
            console.log("playerOne wins!");
        }
        break;
    default:
        if (computer === "rock") {
            console.log("Computer wins!");
        } else {
            console.log("playerOne wins!");
        }
}

// ternary
// condition ? ifTrue : ifFalse;

let soup = "Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you!" : soup ? `Yes, we have ${soup} today.` : "Sorry, no soup today.";

console.log(soupAccess);

let testScore = 99;
let myGrade = testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F";
console.log(`My test grade is a ${myGrade}. `);


// new

let playerOne = "rock";
let computer = "scissors";
let result = 
    playerOne === computer
        ? "Tie game!"
        : playerOne === "rock" && computer === "paper"
        ? "Computer wins!"
        : playerOne === "paper" && computer === "scissors"
        ? "Computer wins!"
        : playerOne === "scissors" && computer === "rock"
        ? "Computer wins!"
        : "playerOne wins!";
console.log(result);