// Question 1

myFunctionExpression = function() {
    console.log("Tonje Eira")
};
myFunctionExpression();


// Question 2

const button = document.querySelector(".btn");

function callBack() {
    console.log("I was clicked");
};

button.addEventListener("click", callBack);


// Question 3

const theName = document.querySelector("#firstName");

function checkKeyValue(event) {
    console.dir(event);
};

theName.addEventListener("keydown", checkKeyValue);


// Question 4

hoverButton = document.querySelector("button");

function addHoverClass() {
    hoverButton.classList.add("Hover");
    console.log(hoverButton.className);
};
hoverButton.addEventListener("mouseover", addHoverClass);


// Question 5

const animalButton = document.querySelector("[data-animal='dog']");

function removeHoverClass() {
    animalButton.classList.remove("Hover");
    console.log(animalButton.className)
};

animalButton.addEventListener("mouseout", removeHoverClass);


// Question 6

const listAnimals = document.querySelectorAll("li");

function animalMouseover(event) {
    console.log(event.target.dataset.animal);
}

for (var i = 0; i < listAnimals.length; i++) {
    listAnimals[i].addEventListener("mouseover", animalMouseover);
}


// Question 7

const animal ="cow";


switch (animal) {
    case "cat":
        console.log("Meow");
    break;

    case "cow":
        console.log("Moo");
    break;

    case "bird":
        console.log("Tweet");
    break;

    default:
        console.log("Harrumph");
}


// question 8

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheepName) {
    console.log(sheepName);
});


// Question 9

function logWord() {
    console.log("hello");

if(counter === 5) {
    clearInterval(stopHello);
}

counter++;

}

let counter = 0;

const stopHello = setInterval(logWord, 500);


// Question 10

const myContainer = document.querySelector(".container");

function updatePlaceholderText() {
    myContainer.innerText = "Text updated";

}

setTimeout(updatePlaceholderText, 2000);

