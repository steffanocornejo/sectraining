// DOM - Document Object Model

const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);

const views = document.getElementsByClassName("view");
console.log(views);
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
    /* evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px"; */
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World!";
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right.`;
console.log(navbar);
navbar.style.justifyContent = "space-between";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
    view2. lastChild.remove();
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
};

// createDivs(view2,10);
for (let i = 1; i < 13; i++) {
    createDivs(view2, i);
}

// JavaScript Event Listeners VIEW 2
const view1 = document.querySelector("#view1");
view1.style.display = "none";
const view2 = document.querySelector("#view2");
view2.style.display = "flex";

// syntax: addEventListener(event, function, useCapture)

/*
const doSomething = () => {
    alert("doing something");
}

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked";
}, false);
*/

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = view.querySelector("h2");

    view.addEventListener("click", (event) => {
        //view.style.backgroundColor = "purple";

        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
        // same as
        //view.classList.add("purple");
        //view.classList.remove("darkblue");
    }, false);
    
    div.addEventListener("click", (event) => {
        //event.stopPropagation();

        //div.style.backgroundColor = "blue";
        div.classList.toggle("blue");
        div.classList.toggle("black");
    }, false);
    
    h2.addEventListener("click", (event) => {
        //event.target.textContent = "Clicked";

        const myText = event.target.textContent;
        myText === "My 2nd View"
            ? event.target.textContent = "Clicked"
            : event.target.textContent = "My 2nd View";
    }, false);

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    });
    nav.addEventListener("mouseout", (event) => {
        event.target.classList.remove("height100");
    })
};

// JavaScript Event Listeners VIEW 3

const view1 = document.querySelector("#view1");
view1.style.display = "none";
const view2 = document.querySelector("#view2");
view2.style.display = "none";
const view_3 = document.querySelector("#view3");
view_3.style.display = "flex";

// syntax: addEventListener(event, function, useCapture)

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit");
    })
};

// web storage API

const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Daniel",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
}

//sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
//const mySessionStore = JSON.parse(sessionStorage.getItem("mySessionStore"));
//console.log(mySessionStore);

// local (persistent data)
localStorage.setItem("myLocalStore", JSON.stringify(myObject));
const storeLength = localStorage.length;
const myLocalStore = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(storeLength);