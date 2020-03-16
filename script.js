const MENU = document.getElementById('menu');
const BUTTON_SUBMIT = document.getElementById('button_submit');//submit form button
const BUTTON_CLOSE = document.getElementById('button_close');//close submit button

// ---> navigation menu
MENU.addEventListener('click', function (eve) {
  eve.preventDefault()
  MENU.querySelectorAll('a').forEach(function (a) {
    a.classList.remove('active')
  });
  eve.target.classList.add('active');
  let id = eve.target.getAttribute('href').slice(1);
  let Y = document.getElementById(id).offsetTop - 95
  window.scroll(0, Y);
}) // navigation menu <---

// ---> submit form
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
    document.getElementById('block_massage_submit').classList.remove('hidden')
  }
})

BUTTON_CLOSE.addEventListener('click', function () {
  document.getElementById('massage_subject').innerText = '';
  document.getElementById('massage_describe').innerText = '';
  document.getElementById('block_massage_submit').classList.add('hidden')
})// submit form <---