const formButtonOpen = document.getElementById('footer-comment-form');
const formPlace = document.getElementById('form-place');

formButtonOpen.addEventListener('click', (e) => {
  formPlace.classList.add('open');
});

const formButtonClose = document.getElementById('form-close');

formButtonClose.addEventListener('click', (e) => {
  formPlace.classList.remove('open');
});
