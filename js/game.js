import animate from './animate';
import { play, stop } from './audio';
import roundMessage from './message';

const userControls = document.querySelector('.user-controls');
const compControls = document.querySelector('.comp-controls');
const reset = document.querySelector('.reset');
const compButtons = compControls.querySelectorAll('.controls');
const controls = document.querySelectorAll('.controls');
const result = document.querySelector('.result');
const animation = document.querySelector('.animation');
const message = document.querySelector('.message');
const rules = document.querySelector('.rules');
const card = document.querySelector('.card');

let userChoise;
let compChoise;
let userCount = 0;
let compCount = 0;
let count = '';
let round = 0;
let blocked = false;
let isWon;
let toPlay = false;

rules.addEventListener('click', checkRules);
userControls.addEventListener('click', choiseUser);
reset.addEventListener('click', resetGame);

function checkRules() {
    card.classList.toggle('flipped');
    toPlay = !toPlay;
    if (toPlay) play();
    if (!toPlay) stop();
}

function choiseUser(e) {
    if (blocked) {
        return;
    }

    let target = e.target;
    if (target.classList.contains('controls')) {
        userChoise = target.dataset.control;
        controls.forEach(item => item.classList.remove('active', 'error'));
        target.classList.add('active');
        choiseComp();
    }
}
const choiseComp = e => {
    blocked = true;
    let random = Math.floor(Math.random() * 3);
    compControls.classList.add('blink');
    let scissorsAnimation;
    switch (random) {
        case 0:
            scissorsAnimation = `./images-rsp/${userChoise}-rock.webp`;
            break;
        case 1:
            scissorsAnimation = `./images-rsp/${userChoise}-scissors.webp`;
            break;
        case 2:
            scissorsAnimation = `./images-rsp/${userChoise}-paper.webp`;
            break;
        default:
            scissorsAnimation = './images-rsp/start.webp';
    }

    animate(animation, scissorsAnimation);
    setTimeout(() => {
        compControls.classList.remove('blink');
        compChoise = compButtons[random].dataset.control;
        compButtons[random].classList.add('active');
        countResult();
    }, 1000);
};
const countResult = () => {
    round++;
    blocked = false;
    let comb = userChoise + compChoise;
    switch (comb) {
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            isWon = 'draw';
            break;

        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
            userCount++;
            isWon = 'won';
            compControls
                .querySelector('[data-control=' + compChoise + ']')
                .classList.add('error');
            break;

        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            compCount++;
            isWon = 'lose';
            userControls
                .querySelector('[data-control=' + userChoise + ']')
                .classList.add('error');
            break;
        default:
            return;
    }

    message.textContent = roundMessage(round, userChoise, compChoise, isWon);

    if (userCount === 3 || compCount === 3) {
        let isWinner;
        if (userCount > compCount) {
            isWinner = 'WON';
        } else isWinner = 'LOST';

        count = `FINAL RESULT: ${userCount} : ${compCount}. You've ${isWinner}!`;
        blocked = true;
        result.textContent = count;
    }
};

function resetGame() {
    blocked = false;
    userCount = 0;
    compCount = 0;
    count = '';
    round = 0;
    controls.forEach(item => item.classList.remove('active', 'error'));
    message.textContent = '';
    result.textContent = count;
}
