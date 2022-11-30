const idInput = document.querySelector('.id-input');
const pwInput = document.querySelector('.pw-input');
const idErrorMg = document.querySelector('.id-error');
const pwErrorMg = document.querySelector('.pw-error');
const loginBtn = document.querySelector('.login-btn');

// 아이디값이 빈 값일 때, 에러메세지 띄움
idInput.addEventListener('click', function () {
  if (idInput.value == '') {
    idErrorMg.style.display = 'block';
  }
});
// 아이디값에 값이 있을 때, 에러메세지 지움
idInput.addEventListener('keydown', function () {
  idErrorMg.style.display = 'none';
});
// 비밀번호값에 값이 있을 때, 에러메세지 띄움
pwInput.addEventListener('click', function () {
  if (pwInput.value == '') {
    pwErrorMg.style.display = 'block';
  }
});
// 비밀번호값에 값이 있을 때, 에러메세지 지움
pwInput.addEventListener('keydown', function () {
  pwErrorMg.style.display = 'none';
});

// 로그인 버튼 누를 시, 조건에 맞으면 알림창 띄움
loginBtn.addEventListener('click', function () {
  if (idInput.value.length > 0 && pwInput.value.length > 0) {
    alert('Stardabang에 오신걸 환영합니다!');
  }
});
