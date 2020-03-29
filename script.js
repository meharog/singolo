const VIEWPORT_SLIDE = document.getElementsByClassName('viewport')[0];
const BUTTON_SLIDE_LEFT = document.getElementById('left_area_pointer');
const BUTTON_SLIDE_RIGHT = document.getElementById('right_area_pointer');

// TODO: down
// ---> slider
// let PHONE_SCREENS = VIEWPORT_SLIDE.getElementsByClassName('screen');
function hidePhoneScreens(slide) {
  const PHONE_SCREENS = document.getElementsByClassName('screen');
  for (let i = 0; i < PHONE_SCREENS.length; i++) {
    PHONE_SCREENS[i].addEventListener('click', function (eve) {
      (eve.target.classList.contains('hidden')) ? eve.target.classList.remove('hidden') : eve.target.classList.add('hidden')
    });
  };
}

const SLIDES = document.querySelectorAll('.slide');
// let slider = [];
for (let i = 0; i < SLIDES.length; i++) {
  // const element = s[i];
  // slider[i] = SLIDES[i].cloneNode(true)
  SLIDES[i].remove();
}

SLIDES.step = 0;
SLIDES.offset = 1020;
let slideStep = 0;
// let slideOffset = 0;
// let slideWidth = 1020;//
// let Offset = 1020;


function drawM(viewport, slMass, step) {
  let slide = slMass[step];
  slide.style.left = 0 + 'px';//
  viewport.appendChild(slide.cloneNode(true));
  // hidePhoneScreens();
  
};

function drawR(viewport, slMass, step, offset) {
  (step === slMass.length - 1) ? step = 0 : step++;
  let slide = slMass[step];
  slide.style.left = slMass.offset + 'px';
  viewport.appendChild(slide.cloneNode(true));
  // hidePhoneScreens();
};

function drawL(viewport, slMass, step, offset) {
  (step === 0) ? step = slMass.length - 1 : step--;
  let slide = slMass[step];
  slide.style.left = -1 * slMass.offset + 'px';
  // viewport.appendChild(slide.cloneNode(true));
  viewport.insertBefore(slide.cloneNode(true), viewport.firstChild)
  // hidePhoneScreens();
};

drawL(VIEWPORT_SLIDE, SLIDES, SLIDES.step);
drawM(VIEWPORT_SLIDE, SLIDES, SLIDES.step);
drawR(VIEWPORT_SLIDE, SLIDES, SLIDES.step);
// slideStep
hidePhoneScreens();
// let stepX = 0;
BUTTON_SLIDE_RIGHT.addEventListener('click', function () { moveSlide(VIEWPORT_SLIDE, SLIDES, 'R') });
BUTTON_SLIDE_LEFT.addEventListener('click', function () { moveSlide(VIEWPORT_SLIDE, SLIDES, 'L') });
// function right(viewport, slMass, step, offset, direction)
function moveSlide(viewport, slMass, direction) {
  const VIEW_SLIDES = document.querySelectorAll('.slide');

  if (direction === 'R') {
    for (let i = 0; i < VIEW_SLIDES.length; i++) {
      VIEW_SLIDES[i].style.left = (i - 1) * slMass.offset - slMass.offset + 'px';
      // hidePhoneScreens(VIEW_SLIDES[i]);
    };
    (slMass.step === slMass.length - 1) ? slMass.step = 0 : slMass.step++;
    VIEW_SLIDES[0].remove();
    drawR(viewport, slMass, slMass.step);

  } else if (direction === 'L') {
    for (let i = 0; i < VIEW_SLIDES.length; i++) {
      VIEW_SLIDES[i].style.left = (i - 1) * slMass.offset + slMass.offset + 'px';
      // hidePhoneScreens(VIEW_SLIDES[i]);
    };
    (slMass.step === 0) ? slMass.step = slMass.length - 1 : slMass.step--;
    VIEW_SLIDES[2].remove();
    drawL(viewport, slMass, slMass.step);
  };
  hidePhoneScreens();
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
  }
  window.scroll(0, Y);
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
  document.getElementById('massage_subject').innerText = '';
  document.getElementById('massage_describe').innerText = '';
  document.getElementById('block_massage_submit').classList.add('hidden')
});// submit form <---