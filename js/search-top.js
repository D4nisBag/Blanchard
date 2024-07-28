document.querySelector('.header__tablet-close-btn').addEventListener('click', function(){
    document.querySelector('.header__tablet-input').classList.remove('show');
    document.querySelector('.header__tablet-input').classList.add('hide');
    document.querySelector('.header__tablet-close-btn').classList.remove('show');
    document.querySelector('.header__tablet-close-btn').classList.add('hide');
    document.querySelector('.header__find-search-value').classList.remove('show');
    document.querySelector('.header__find-search-value').classList.add('hide');
    document.querySelector('.header__tablet-search-btn').classList.remove('hide');
    document.querySelector('.header__tablet-search-btn').classList.add('show');
  });
  document.querySelector('.header__tablet-search-btn').addEventListener('click', function(){
    document.querySelector('.header__tablet-input').classList.remove('hide');
    document.querySelector('.header__tablet-input').classList.add('show');
    document.querySelector('.header__tablet-close-btn').classList.remove('hide');
    document.querySelector('.header__tablet-close-btn').classList.add('show');
    document.querySelector('.header__find-search-value').classList.remove('hide');
    document.querySelector('.header__find-search-value').classList.add('show');
    document.querySelector('.header__tablet-search-btn').classList.remove('show');
    document.querySelector('.header__tablet-search-btn').classList.add('hide');
  });


  document.querySelector('.header__768-search-btn').addEventListener('click', function(){
    document.querySelector('.header__tablet-input').classList.remove('hide');
    document.querySelector('.header__tablet-input').classList.add('show');
    document.querySelector('.header__768-close-btn').classList.remove('hide');
    document.querySelector('.header__768-close-btn').classList.add('show');
    document.querySelector('.header__find-search-value').classList.remove('hide');
    document.querySelector('.header__find-search-value').classList.add('show');
    document.querySelector('.header__768-search-btn').classList.remove('show');
    document.querySelector('.header__768-search-btn').classList.add('hide');
    document.querySelector('.header__burger-btn').classList.remove('show');
    document.querySelector('.header__burger-btn').classList.add('hide');
    document.querySelector('.header__logo-link').classList.remove('show');
    document.querySelector('.header__logo-link').classList.add('hide');
    document.querySelector('.header__upper').classList.remove('minus-height');
    document.querySelector('.header__upper').classList.add('plus-height');
    document.querySelector('.header__tablet-search-block').classList.remove('shrink');
    document.querySelector('.header__tablet-search-block').classList.add('grow');
  });
  document.querySelector('.header__768-close-btn').addEventListener('click', function(){
    document.querySelector('.header__tablet-input').classList.remove('show');
    document.querySelector('.header__tablet-input').classList.add('hide');
    document.querySelector('.header__768-close-btn').classList.remove('show');
    document.querySelector('.header__768-close-btn').classList.add('hide');
    document.querySelector('.header__find-search-value').classList.remove('show');
    document.querySelector('.header__find-search-value').classList.add('hide');
    document.querySelector('.header__768-search-btn').classList.remove('hide');
    document.querySelector('.header__768-search-btn').classList.add('show');
    document.querySelector('.header__burger-btn').classList.remove('hide');
    document.querySelector('.header__burger-btn').classList.add('show');
    document.querySelector('.header__logo-link').classList.remove('hide');
    document.querySelector('.header__logo-link').classList.add('show');
    document.querySelector('.header__upper').classList.remove('plus-height');
    document.querySelector('.header__upper').classList.add('minus-height');
    document.querySelector('.header__tablet-search-block').classList.remove('grow');
    document.querySelector('.header__tablet-search-block').classList.add('shrink');
  });