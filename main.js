var red = document.querySelector('.red');
var blue = document.querySelector('.blue');
var green = document.querySelector('.green');
var main = document.querySelector('.main');
console.dir('.red');

red.addEventListener('click', function () {
  main.textContent = 'This is red';
});

blue.addEventListener('click', function () {
  main.textContent = 'This is blue';
});

green.addEventListener('click', function () {
  main.textContent = 'This is green';
});
