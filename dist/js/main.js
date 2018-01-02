let leftSide = document.querySelector('.left-menu-box');
let leftText = document.querySelector('.left-vertical-txt');
leftSide.addEventListener('mouseover', function() {
    leftText.classList.add('active') });
leftSide.addEventListener('mouseout', function() {
    leftText.classList.remove('active') });
    
let rightSide = document.querySelector('.right-menu-box');
let rightText = document.querySelector('.right-vertical-txt');
rightSide.addEventListener('mouseover', function() {
    rightText.classList.add('active') });
rightSide.addEventListener('mouseout', function() {
    rightText.classList.remove('active') });