const colors = ["yellow", "green", "orange", "blue", "lightblue"];
const keysLeft = new Map();

keysLeft.set('yellow', "a");
keysLeft.set('green', "s");
keysLeft.set('orange', "d");
keysLeft.set('blue', "f");
keysLeft.set('lightblue', "g");

const keysRight = new Map();

keysRight.set('yellow', "ö");
keysRight.set('green', "l");
keysRight.set('orange', "k");
keysRight.set('blue', "j");
keysRight.set('lightblue', "h");

let currentColor
let currentSide
let punkte = 0
const punkteAnzeige  = document.getElementById('Punkte');
const anzeigeText  = document.getElementById('AnzeigeText');

document.addEventListener("DOMContentLoaded", setTask);

function setTask() {
  setRandomColor()
  currentSide = Math.floor(Math.random() * 2)
  anzeigeText.innerHTML = currentSide ? "linke Hand" : "rechte Hand"
}
// Funktion zum zufälligen Auswählen einer Farbe aus dem Array
function setRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  currentColor = colors[randomIndex]
  document.body.style.backgroundColor = currentColor
}


document.addEventListener("keydown", function(event) {
  if (event.key.length === 1 && event.key.match(/[a-zöäü]/i)) {
    checkInput(event.key);
  }
});

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function checkInput(input) {
  let testKey = currentSide? keysLeft.get(currentColor) : keysRight.get(currentColor)

  if (testKey === input) {
    punkte++
    punkteAnzeige.innerHTML = punkte.toString()
    setTask()
  } else {
    document.body.style.backgroundColor = "red"
    delay(1000).then(() => document.body.style.backgroundColor = currentColor);
  }
}

