const holes = [...document.querySelectorAll('.hole')];
const mice = [...document.querySelectorAll('.mouse')];
const scoreBoard = document.querySelector('.score');
const countdownBoard = document.querySelector('.countdown');

const startBtnLight = document.querySelector('.light');
const startBtnMiddle = document.querySelector('.middle');
const startBtnPro = document.querySelector('.pro');
let min;
let max;

const gameOver = document.querySelector('.game-over');
const scoreGameOver = document.querySelector('.score-game-over');
const backBtn = document.querySelector('.back');

const musicItem = document.querySelector('.music');
const ratingItem = document.querySelector('.rating-item');
const statsItem = document.querySelector('.stats-item');
const statsBackBtn = document.querySelector('.stats-back');
const statsScore = [...document.querySelectorAll('.stats-score')];



let lastHoleIdx;
let countdown;
let timeUp = false;
let score = 0;
let timeLimit = 30000;
let isPlay = false;

let upAudio = new Audio('assets/audio/up.mp3');
let catchAudio = new Audio('assets/audio/catch.mp3');
let openStatsAudio = new Audio('assets/audio/openstats.mp3');
let gameOverAudio = new Audio('assets/audio/gameover.mp3');
let gameAudio = new Audio('assets/audio/audio.mp3');
gameAudio.loop = true;

let scores;
let scoresStringify;
let scoresParse;
scores = localStorage.getItem('gamesScore') ? (JSON.parse(localStorage.getItem('gamesScore'))) : [];
scoresParse = JSON.parse(localStorage.getItem('gamesScore'));


function setLocalStorage() {
scoresStringify = JSON.stringify(scores);
localStorage.setItem('gamesScore', scoresStringify);
}
window.addEventListener('beforeunload', setLocalStorage);


function randomHoleFunc(holes) {
    const randomHole = Math.floor(Math.random() * holes.length);
    const holeIdx = holes[randomHole];
    if (holeIdx === lastHoleIdx) {
        return randomHoleFunc(holes);
    }
    lastHoleIdx = holeIdx;
    return holeIdx;
}

function animationMouse(min, max) {
    const time = Math.random() * max + min;
    const hole = randomHoleFunc(holes);
    hole.classList.add('up');    
    upAudio.play();
    setTimeout(function () {
        hole.classList.remove('up');
        if (!timeUp) animationMouse(min, max);
    }, time);
}

function startGame(min, max) {
    countdown = timeLimit / 1000;
    scoreBoard.textContent = ': 0';
    countdownBoard.textContent = `Time: ${countdown}`;
    timeUp = false;
    score = 0;
    animationMouse(min, max);
    setTimeout(function () {
        timeUp = true;
    }, timeLimit);
    let startCountdown = setInterval(() => {
        countdown -= 1;
        countdownBoard.textContent = `Time: ${countdown}`;
        if (countdown < 0) {
            countdown = 0;
            clearInterval(startCountdown);
            countdownBoard.textContent = 'Time: 0';
            scoreBoard.textContent = ': 0';
            gameResults();

            scores.unshift(score);
            if (scores.length > 10) scores.pop();           
        }
    }, 1000);
}

startBtnLight.addEventListener('click', () => startGame(1500, 2000));
startBtnMiddle.addEventListener('click', () => startGame(1000, 1400));
startBtnPro.addEventListener('click', () => startGame(700, 1100));

function catchMouse() {
    score++;
    this.classList.add('seed');
    catchAudio.play();
    setTimeout(() => {
        this.classList.remove('seed');
    }, 1400);
    scoreBoard.textContent = `: ${score}`;
    scoreGameOver.textContent = `Your score: ${score}`;
}

mice.forEach(el => el.addEventListener('click', catchMouse));

function gameResults() {
    gameOver.classList.toggle('active');
    document.body.classList.toggle('lock');
    if (gameOver.classList.contains('active')) gameOverAudio.play();
}
backBtn.addEventListener('click', gameResults);

function addStats() {
    statsScore.forEach((el, i) => {
        el.textContent = scoresParse[i] ? `${i + 1}. Score: ${scoresParse[i]}` : `${i + 1}. Score: 0`;
})
}
if (localStorage.getItem('gamesScore')) addStats();

ratingItem.addEventListener('click', () => {
    statsItem.classList.add('active');
    document.body.classList.add('lock');
    openStatsAudio.play();
});
statsBackBtn.addEventListener('click', () => {
    statsItem.classList.remove('active'); 
    document.body.classList.remove('lock');
    openStatsAudio.play();
})

function gamePlayAudio() {
    musicItem.classList.toggle('active');
    if (!isPlay) {
        gameAudio.play();
        isPlay = true;
    }
    else {
        gameAudio.pause();
        isPlay = false;
    }
}
musicItem.addEventListener('click', gamePlayAudio);

