const counter = document.querySelector("#counter");
let number = 0;
const interval = setInterval(() => {
    number++;
    counter.textContent = number;
    if (number === 100) {
        clearInterval(interval);
    }
}, 1);