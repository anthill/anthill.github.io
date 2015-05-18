'use strict';

var menuButton = document.querySelector('body > header img');
var menu = document.body.querySelector('nav');
menuButton.addEventListener('click', function(){
	menu.classList.toggle('active');
	menuButton.classList.toggle('active');
});

menu.addEventListener('click', function(){
	menu.classList.toggle('active');
	menuButton.classList.toggle('active');
});