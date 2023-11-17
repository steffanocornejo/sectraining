// arrays

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
// or
console.log(equipShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);

// refactored game

const initGame = () => {
    const startGame = confirm("Shall we play rock, paper, scissors?");
    startGame ? playGame() : alert("Ok, maybe next time.");
};

// game flow function
const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors.");
};

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const decidedNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.");
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
    const winner = 
    player === computer
        ? "Tie game!"
        : player === "rock" && computer === "paper"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "paper" && computer === "scissors"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : player === "scissors" && computer === "rock"
        ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
        : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;
    
    return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Play Again?");
};

const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
};

initGame();

// objects

const myObj = { name: "Daniel" };

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function() {
        return `Time for ${this.beverage.morning}`;
    }
};
console.log(anotherObj.action());

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`);
}

// destructuring objects
//const { guitar: myVariable, bass: myBass } = band;
const { vocals, guitar, bass, drums } = band;
console.log(guitar);
console.log(vocals);

function sings({ vocals }) {
    return `${vocals} sings!`
};

console.log(sings(band));

// classes

/*
class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
    }

    get pizzaCrust() {
        return this.crust;
    }
    
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }

    bake() {
        console.log(
            `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
        );
    }
}
const myPizza = new Pizza("pepperoni", "small");
myPizza.setCrust("thin");
myPizza.bake();
console.log(myPizza.getCrust());
*/
/*
class Pizza {
    constructor(pizzaSize) {
        this._size = pizzaSize;
        this._crust = "original";
    }
    getCrust() {
        return this._crust;
    }
    setCrust(pizzaCrust) {
        this._crust = pizzaCrust;
    }
}
class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The Works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}
const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();
*/

class Pizza {
    crust = "original";
    #sauce = "traditional";     // private field
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
}
const myPizza = new Pizza("large");
myPizza.hereYouGo();

console.log(myPizza.getCrust());

// JSON: JavaScript Object Notation

const myObj = {
    name: "Daniel",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello!");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);