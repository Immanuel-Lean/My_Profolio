let secretNumber = Math.floor(Math.random() * 10) + 1;
const button = document.getElementById('checkBtn');
const message = document.getElementById('message');
const input = document.getElementById('Guess');

button.addEventListener('click', function() {
    const guess = Number(input.value);


    if(!guess) {
        message.innerHTML = '<i class="fa-solid fa-exclamation-circle" style="color: red;"></i> Please enter a number!';

    }else if (guess === secretNumber) {
        message.innerHTML = '<i class="fa-solid fa-trophy" style="color: gold;"></i> You got it!';

    }else if(guess > secretNumber) {
        message.innerHTML = '<i class="fa-solid  fa-arrow-up" style="color: orange;"></i> Too high!';

    }else if (guess < secretNumber) {
        message.innerHTML = '<i class="fa-solid fa-arrow-down" style="color:blue;"></i> Too low!';
    }
    


});
