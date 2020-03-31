// ---> slider
const VIEWPORT_SLIDE = document.getElementsByClassName('viewport')[0];
const BUTTON_SLIDE_LEFT = document.getElementById('left_area_pointer');
const BUTTON_SLIDE_RIGHT = document.getElementById('right_area_pointer');

function hidePhoneScreens() {
  const PHONE_SCREENS = document.querySelectorAll('.screen');
  for (let i = 0; i < PHONE_SCREENS.length; i++) {
    PHONE_SCREENS[i].addEventListener('click', function (eve) {
      (eve.target.classList.contains('screen_hidden')) ? eve.target.classList.remove('screen_hidden') : eve.target.classList.add('screen_hidden')
    });
  };
};
hidePhoneScreens();

let slidesMas = document.querySelectorAll('.slide');
let slideOffset = 1020;
let slideStep = 0;

for (let i = 0; i < slidesMas.length; i++) {
  slidesMas[i].style.left = slideOffset * i + 'px';  
}

BUTTON_SLIDE_RIGHT.addEventListener('click', function () { moveSlideR() });
function moveSlideR() {
  slidesMas = document.querySelectorAll('.slide');
  if (slideStep === slidesMas.length - 1) {
    slidesMas[0].style.left = slideOffset * 1 + 'px';
    slidesMas[0].classList.add('slide_res');
    VIEWPORT_SLIDE.appendChild(slidesMas[0]);    
  };
  setTimeout(function () {
    slidesMas[0].classList.remove('slide_res');
    for (let i = 0; i < slidesMas.length; i++) {
      slidesMas[i].style.left = parseInt(slidesMas[i].style.left) - slideOffset + 'px';  
    };
  }, 100);
  if (slideStep < slidesMas.length - 1) {slideStep++};
};

BUTTON_SLIDE_LEFT.addEventListener('click', function () { moveSlideL() });
function moveSlideL() {
  slidesMas = document.querySelectorAll('.slide');
  if (slideStep === 0) {
    slidesMas[slidesMas.length - 1].style.left = slideOffset * -1 + 'px';
    slidesMas[slidesMas.length - 1].style.left = '-1020px';
    slidesMas[slidesMas.length - 1].classList.add('slide_res');
    VIEWPORT_SLIDE.insertBefore(slidesMas[slidesMas.length - 1], slidesMas[0]);
  };
  setTimeout(function () {
    slidesMas[slidesMas.length - 1].classList.remove('slide_res');
    for (let i = 0; i < slidesMas.length; i++) {
      slidesMas[i].style.left = parseInt(slidesMas[i].style.left) + slideOffset + 'px';  
    };
  }, 100);
  if (slideStep > 0) {slideStep--};
};// slider <---

// ---> navigation menu
const BURGER_TOGGLE = document.getElementById('JS-burger-toggle');
const LOGO_VALUE = document.getElementById('JS-logo__value');
const NAV_BOX = document.getElementById('JS-nav-box');
const MENU = document.getElementById('menu');

function openBurger (eve) {
  BURGER_TOGGLE.classList.remove('burger-toggle__img_rotate');
  LOGO_VALUE.classList.remove('logo__value_shift');
  NAV_BOX.classList.remove('nav-box_hidden');
  MENU.classList.remove('navigation-list_hidden');

  BURGER_TOGGLE.removeEventListener ('click', openBurger);
  BURGER_TOGGLE.addEventListener ('click', closeBurger);
}

function closeBurger (eve) {
  BURGER_TOGGLE.classList.add('burger-toggle__img_rotate');
  LOGO_VALUE.classList.add('logo__value_shift');
  NAV_BOX.classList.add('nav-box_hidden');
  MENU.classList.add('navigation-list_hidden');

  BURGER_TOGGLE.removeEventListener ('click', closeBurger);
  BURGER_TOGGLE.addEventListener ('click', openBurger);
}

BURGER_TOGGLE.addEventListener ('click', openBurger);

MENU.addEventListener('click', function (eve) {
  eve.preventDefault()
  MENU.querySelectorAll('a').forEach(function (a) {
    a.classList.remove('active')
  });
  eve.target.classList.add('active');
  let id = eve.target.getAttribute('href').slice(1);
  let Y = document.getElementById(id).offsetTop - 95;
  if (window.innerWidth < 768) {
    Y = Y + 24; 
    closeBurger();
  };
  window.scroll(0, Y);
});

document.addEventListener('scroll', function (eve) {
  let curPos = window.scrollY;
  let sections = document.querySelectorAll('#JS-wrapper>section');
  let offsetAdd = 95;

  if (window.innerWidth < 768) {
    offsetAdd = 71;
  };
  
  sections.forEach(function (section) {
    if (section.offsetTop <= (curPos + offsetAdd) && (section.offsetTop + section.offsetHeight) > (curPos + offsetAdd)) {
      MENU.querySelectorAll('a').forEach(function (a) {
        a.classList.remove('active')
        if (section.getAttribute('id') === a.getAttribute('href').slice(1)) {
          a.classList.add('active');
        };
      });
    };
  });
}); // navigation menu <---

// ---> submit form
const BUTTON_SUBMIT = document.getElementById('button_submit');//submit form button
const BUTTON_CLOSE = document.getElementById('button_close');//close submit button

BUTTON_SUBMIT.addEventListener('click', function (eve) {
  const INPUT_NAME_VALIDATION = document.getElementsByClassName('input-name')[0].checkValidity();
  const INPUT_EMAIL_VALIDATION = document.getElementsByClassName('input-email')[0].checkValidity();
  if (INPUT_NAME_VALIDATION && INPUT_EMAIL_VALIDATION) {
    eve.preventDefault();
    const TEXT_SUBJECT = document.getElementById('subject').value.toString();
    const TEXT_SUBJECT_DEF = 'Without subject';
    const TEXT_DESCRIBE = document.getElementById('describe').value.toString();
    const TEXT_DESCRIBE_DEF = 'Without description';
    if (TEXT_SUBJECT) {
      document.getElementById('massage_subject').innerText = 'Subject: ' + TEXT_SUBJECT;
    } else {
      document.getElementById('massage_subject').innerText = TEXT_SUBJECT_DEF;
    };
    if (TEXT_DESCRIBE) {
      document.getElementById('massage_describe').innerText = 'Description: ' + TEXT_DESCRIBE;
    } else {
      document.getElementById('massage_describe').innerText = TEXT_DESCRIBE_DEF;
    };
    document.getElementById('block_massage_submit').classList.remove('hidden');
  };
});

BUTTON_CLOSE.addEventListener('click', function () {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('describe').value = '';
  document.getElementById('massage_subject').innerText = '';
  document.getElementById('massage_describe').innerText = '';
  document.getElementById('block_massage_submit').classList.add('hidden');  
});// submit form <---