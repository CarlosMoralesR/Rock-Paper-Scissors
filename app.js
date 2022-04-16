const btnRules = document.querySelector('.rules-btn');
const btnClose = document.querySelector('.close-btn');
const modalRules = document.querySelector ('.modal');

const CHOICES = [
{
    name: "paper",
    beats: "rock"
},
{
    name: "scissors",
    beats: "paper"
},
{
    name: "rock",
    beats: "scissors"
}
]

const choiceButtons = document.querySelectorAll ('.choice-btn');
const gameDiv = document.querySelector ('.game');
const resultsDiv = document.querySelector ('.results');
const resultDivs = document.querySelectorAll ('.results_result');

btnRules.addEventListener("click", function(){
    modalRules.classList.toggle("show-modal");
});

btnClose.addEventListener("click", function(){
    modalRules.classList.remove("show-modal");
})