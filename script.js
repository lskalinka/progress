'use strict';

const progressBar = document.querySelector('.progress-bar');
const button = document.querySelector('.btn');
const h1 = document.querySelector('.h1');
let currentValue = 0;
const maxValue = 100;

const updateBar = function() {
  const percent = (currentValue / maxValue) * 100;
  progressBar.style.width = percent + '%';
}

const addValue = function() {
  if (currentValue >= maxValue) endProgress();
  else {const random = Math.floor(Math.random() * 6) + 1;
  currentValue += random;
  if (currentValue > maxValue) currentValue = maxValue;
  updateBar()};
}

const getRandomColor = function() {
  const randomN = () => Math.floor(Math.random() * 256) + 1;
  const r = randomN();
  const g = randomN();
  const b = randomN();
  let randomColor = `rgb(${r},${g},${b})`;
  progressBar.style.background = randomColor;
  button.style.borderColor = randomColor;
  return;
}

const endProgress = function() {
  progressBar.classList.add('full');
  button.disabled = true;
  h1.textContent = 'Done!';
}

const timer = setInterval(() => {
  if (currentValue >= maxValue) {
    endProgress();
    return;
  }
  addValue();
}, 500);


getRandomColor();


button.addEventListener('click', addValue);


