document.getElementById('footer__comment-form').onclick = function() {
  document.getElementById('form-place').classList.add('form-place_condition_open');
  document.getElementById('page').classList.add('page_overflow-hidden');
};

document.querySelector('.form__close').onclick = function () {
  document.getElementById('form-place').classList.remove('form-place_condition_open');
  document.getElementById('page').classList.remove('page_overflow-hidden');
};

document.querySelector('.form-place__substrate').onclick = function () {
  document.getElementById('form-place').classList.remove('form-place_condition_open');
  document.getElementById('page').classList.remove('page_overflow-hidden');
};


