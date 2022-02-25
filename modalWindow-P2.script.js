'use strict';
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');


const openModal =  function() {
    modal.classList.remove('hidden'); // No Need of DOT notation in classList
    overLay.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden'); 
    overLay.classList.add('hidden');
}

for(let i = 0; i < btnOpenModal.length; i++)
btnOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal); //  dont call the function here,  just declare/define it in this case.

document.addEventListener('keydown', function(e) {
//console.log(e.key);

if (e.key === 'Escape' && !modal.classList.contains('hidden')) 
    {
        closeModal();
    }
});
