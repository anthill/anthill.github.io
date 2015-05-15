'use strict';
// var _antColony = require('AntColony');
// var isCanvasAvailable = require('./canvas-detect.js');
// var terminal = require('./terminal.js');

// var container = document.querySelector('.colony');

// if(isCanvasAvailable()){
// 	terminal(document.querySelector('main header'));
// }
// else{
// 	var fallback = document.querySelector('main header img[hidden]');
// 	fallback.removeAttribute('hidden');
// }

// var splashScreen = document.getElementById('splashScreen');
// var enterButton = document.getElementById('enter');

var menuButton = document.querySelector('body > header img');
var menu = document.body.querySelector('nav');
var currentPage = document.querySelector('body > header h2');
// var menu = querySelector('body');

// enterButton.addEventListener('click', function(){
// 	body.className = ''; 
// 	splashScreen.style.opacity = 0;
// 	splashScreen.addEventListener('transitionend', function(){
// 	    splashScreen.remove();
// 	});
// });

menuButton.addEventListener('click', function(){
	menu.classList.toggle('active');
	menuButton.classList.toggle('active');
});

menu.addEventListener('click', function(){
	menu.classList.toggle('active');
	menuButton.classList.toggle('active');
});

function findPage() {
	var currentY = window.scrollY;

	var ratios = pages.map(function(page, i){
		if (currentY - page.bottom >= 0 || currentY + window.innerHeight < page.top)
			return 0;
		else if (currentY < page.bottom && currentY > page.top) // currentY is in the middle of page
			return Math.min((page.bottom - currentY)/window.innerHeight, 1);
		else { // currentY is just before page
			return 1 - (page.top - currentY) / window.innerHeight;
		}
			
	});

	var i = ratios.indexOf(Math.max.apply(Math, ratios));

	if (i === -1){
		tabs[0].className = 'tab'; 
		tabs[1].className = 'tab'; 
		tabs[2].className = 'tab'; 
		tabs[3].className = 'tab'; 
		tabs[4].className = 'tab'; 
	}
	else if (i >= 0 && tabs[i].className != 'tab active') {
		tabs[0].className = 'tab'; 
		tabs[1].className = 'tab'; 
		tabs[2].className = 'tab'; 
		tabs[3].className = 'tab'; 
		tabs[4].className = 'tab'; 
		tabs[i].className += ' active';

		currentPage.innerHTML = tabs[i].innerHTML;
	}
}

var body = document.body;
// var header = document.getElementById("header");
var about = document.getElementById("about");
var spirit = document.getElementById("spirit");
var projects = document.getElementById("projects");
var team = document.getElementById("team");
var contact = document.getElementById("contact");

// var headerRect = header.getBoundingClientRect();
var aboutRect = about.getBoundingClientRect();
var spiritRect = spirit.getBoundingClientRect();
var projectsRect = projects.getBoundingClientRect();
var teamRect = team.getBoundingClientRect();
var contactRect = contact.getBoundingClientRect();

var rects = [/*headerRect,*/ aboutRect, spiritRect, projectsRect, teamRect, contactRect];
var tabs = document.getElementsByClassName('tab');

var pages = rects.map(function(rect){
	return {
		top: rect.top + window.scrollY,
		bottom: rect.bottom + window.scrollY
	};
});

window.addEventListener("scroll", findPage);
