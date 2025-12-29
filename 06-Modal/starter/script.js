'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');


const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let n = 0; n < btnOpenModal.length; n++) {
    btnOpenModal[n].addEventListener('click', openModal);

    btnCloseModal.addEventListener('click', closeModal)
    overlay.addEventListener('click', closeModal);

} 

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
})



