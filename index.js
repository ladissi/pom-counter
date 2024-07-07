let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

const greetingElement = document.getElementById('greeting');
const currentHour = new Date().getHours();

if (currentHour < 12) {
  greetingElement.innerText = 'Good Morning!';
} else if (currentHour < 18) {
  greetingElement.innerText = 'Good Afternoon!';
} else {
  greetingElement.innerText = 'Good Evening!';
}