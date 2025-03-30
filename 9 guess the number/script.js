const input = document.getElementById('input');
let random = Math.floor(Math.random() * 100);
let hint = document.getElementById('hint');
let result = document.getElementById('result');

input.addEventListener('input', function () {
    let userInput = Number(input.value);
    if (userInput === random) {
        hint.textContent = "right guess";
        result.textContent = "Congrats! you won";
    } else if (userInput < random) {
        hint.textContent = "Your Guess is too low";
        result.textContent = "Try Again";
    } else {
        hint.textContent = "Your Guess is too high";
        result.textContent = "Try Again";
    }
});
