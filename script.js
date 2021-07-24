window.addEventListener('load',init);

//global
const levels = {
    easy: 5,
    medium: 3,
    hard: 1,
}

const currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'namaste',
    'revolver',
    'javascript',
    'hello',
    'honest',
    'developer',
    'alphabets',
    'solarSystem',
    'pneumonia',
    'amoeba',
    'horrendous',
    'establishment',
    'python',
    'synonyms',
    'ruby',
    'diamond',
    'love',
    'hate',
    'suspicious',
    'twothreefour',
    'seventyseven',
    'pseudo',
    'onomatopoeia',
    'yanish',
    'elephant',
    'lion',
    'virus',
    'bug',
    'date',
    'time',
    'nice',
    'good',
    'food',
    'noodles',
    'eyesight',
    'naughty',
    

];

function init() {
    seconds.innerHTML = currentLevel;
    // load word from array
    showWord(words);
    wordInput.addEventListener('input',startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}

function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value ='';
        score++;
        }
        if(score === -1) {
            scoreDisplay.innerHTML = 0;

        } else {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords()
{
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }

} 
//pick and show random word
function showWord(words) {
    //generate array
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];

}

function countdown() {
    if(time > 0) {
        time--;
    } else if(time === 0) {
        isPlaying = false;

    }

    timeDisplay.innerHTML = time;
}
function checkStatus(){
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}