rollDice();//Starting the game with rolling the dice//


document.getElementById('startBtn').addEventListener('click', rollDice);//Getting the Start button from the web app and chosing the input type(click)//


//Function which rolls the dice//
function rollDice() {
    document.querySelectorAll('.dice').forEach(dice => dice.classList.add('rolling'));

//Function which sets the time that the dices need to be rolled//
setTimeout(() => {
    document.querySelectorAll('.dice').forEach(dice => dice.classList.remove('rolling'));
    setDiceValue('dice1');
    setDiceValue('dice2');
    }, 3000);
}

//Function to place the dots equal to the random numer in the correct grid//
function setDiceValue(diceId) {
    var dots = document.querySelectorAll(`#${diceId} .dot`);
     dots.forEach(dot => dot.style.display = 'none');

    var value = Math.floor(Math.random() * 6) + 1;//Generating a random number//
    var visibleDots = [];

    switch (value) {
        case 1:
            visibleDots = ['dot5'];
            break;
        case 2:
            visibleDots = ['dot1', 'dot9'];
            break;
        case 3:
            visibleDots = ['dot1', 'dot5', 'dot9'];
            break;
        case 4:
            visibleDots = ['dot1', 'dot3', 'dot7', 'dot9'];
            break;
        case 5:
            visibleDots = ['dot1', 'dot3', 'dot5', 'dot7', 'dot9'];
            break;
        case 6:
            visibleDots = ['dot1', 'dot3', 'dot4', 'dot6', 'dot7', 'dot9'];
            break;
    }

    visibleDots.forEach(dotClass => document.querySelector(`#${diceId} .${dotClass}`).style.display = 'block');  //Displaying the each dots selected by switch-case logic (Screening the visileDots variable)//
}