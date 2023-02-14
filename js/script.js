let dark = document.querySelector('.dark');
let main = document.querySelector('.wrapper');
let sectionLogo = document.querySelector('.main-box-section-logo');
let input1 = document.querySelector('.input-1');
let input2 = document.querySelector('.input-2');
let main2 = document.querySelector('.main-box-section');
let main3 = document.querySelector('.main-box-2');
let btn1 = document.querySelector('.btn-1');
let mainBox2P = document.querySelector('.main-box-2 p');
let mainBox3P = document.querySelector('.main-box-3 p');

dark.addEventListener('click', function() {
  sectionLogo.classList.toggle('active');
  main.classList.toggle('active');
  main2.classList.toggle('active');
  main3.classList.toggle('active');
  input1.classList.toggle('active');
  input2.classList.toggle('active');
  btn1.classList.toggle('active');
  mainBox2P.classList.toggle('active');
  mainBox3P.classList.toggle('active');
})