let signin_from = document.getElementById('signin-from');
let btn_login = document.getElementById('btn-login');
let darkmode_toggle = document.getElementById('darkmode-toggle');

// 화살표 함수(arrow function)
// 정규 함수 표현식 보다 훨씬 간결하게 함수를 만들 수 있다.

// let num = function(x,y) {
//   return x + y;
// } 는 정규함수식

// let num (x,y) => x + y; 는 화살표 함수식 위 아래 같은 식

document.querySelectorAll('.animate-input').forEach((e) => {
  // forEach를 써서 같은 클래스를 다 찾아오게 시킴
  // e : animate-input이라는 클래스를 뜻한다.
  let input = e.querySelector('input');
  let button = e.querySelector('button');

  input.onkeyup = () => {
  // onkeyup : 키보드에 관련된 이벤트
  // 사용자가 키보드의 키를 눌렀다가 떼었을 때 발생하는 이벤트(값이 입력되었을 때)
  if(input.value.trim().length > 0) {
    // input.value.length가 0보다 크다면(trim()은 공백을 제거하는 함수)
    e.classList.add('active');
    // e( = animate-input)에 active클래스를 추가시켜라
    } else {
    e.classList.remove('active');
    // e( = animate-input)에 active클래스를 제거시켜라
    }
    if(input.value.trim().length != 0) {
      // input.value.trim().length가 0이 아닐 경우에
      btn_login.removeAttribute('disabled');
      // btn_login에 disabled를 비활성화
    } else {
      btn_login.setAttribute('disabled', 'true');
      // btn_login에 disabled를 활성화
    }
  }

  if(button) {
    // 버튼일 경우에
    button.onclick = () => {
    // 버튼에 onclick 이벤트를 추가
    if(input.getAttribute('type') === 'text') {
      input.setAttribute('type', 'password');
      button.innerHTML = "비밀번호 표시";
    } else {
      input.setAttribute('type', 'text');
      button.innerHTML = "비밀번호 숨기기";
      }
    }
  }
})

// darkmode toggle
darkmode_toggle.onclick = (e) => {
  e.preventDefault();
  let body = document.querySelector('body');
  body.classList.toggle('dark');

  // 삼항연산자
  darkmode_toggle.innerHTML = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode';
  // contains -> 가지고 있는지 물어보는 함수
}