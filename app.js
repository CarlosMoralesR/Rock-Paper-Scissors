const btnRules = document.querySelector('.rules-btn');
const btnClose = document.querySelector('.close-btn');
const modalRules = document.querySelector ('.modal');

btnRules.addEventListener("click", function(){
    modalRules.classList.toggle("show-modal");
});

btnClose.addEventListener("click", function(){
    modalRules.classList.remove("show-modal");
})