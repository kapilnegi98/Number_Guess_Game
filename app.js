let min_num=1,
    max_num=10,
    correctNumber=2;
    numberOfGuesses=3;

const game = document.querySelector('#game'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn');
      message = document.querySelector('.message');

guessBtn.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again')
         window.location.reload();
     console.log(e.target);
})

guessBtn.addEventListener('click', function(e){
    let num = Number(guessInput.value);
    if(isNaN(num) || num > max_num || num < min_num){
        showMessage(`Hey, Enter Number between ${min_num} and ${max_num}`, 'red');
    }
    else{
    
    if(num === correctNumber){
        
        gameOver(true, `${correctNumber} is correct, YOU WIN!`);
    }
    else{
        numberOfGuesses -= 1;
        if(numberOfGuesses === 0){
            gameOver(false, `Game Over, you lost. The correct number was ${correctNumber}`);
        }
        else{
            guessInput.style.borderColor = 'red';
            showMessage(`${num} is not correct, ${numberOfGuesses} guesses left`, 'red');
            guessInput.value = '';
        }
    }
   
    }
})

function showMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
}

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    showMessage(msg, color);
    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';


}