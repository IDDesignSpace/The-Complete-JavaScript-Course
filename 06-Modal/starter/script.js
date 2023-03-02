'use strict';

// Modal project

const modal = document.querySelector('.modal');
const showModalButton = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log('I am working');
  closeModalButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModalButton.length; i++) {
  showModalButton[i].addEventListener('click', showModal);
}

document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
