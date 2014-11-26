'use strict';
var antColony = require('AntColony');
var isCanvasAvailable = require('./canvas-detect.js');


if(isCanvasAvailable()){
	antColony(document.querySelector('main header'));
}
else{
	var fallback = document.querySelector('main header img[hidden]');
	fallback.removeAttribute('hidden');
}

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

	var i = ratios.indexOf(Math.max.apply(Math, ratios)) - 1;

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
	}
}

var body = document.body;
var header = document.getElementById("header");
var about = document.getElementById("about");
var spirit = document.getElementById("spirit");
var projects = document.getElementById("projects");
var team = document.getElementById("team");

var headerRect = header.getBoundingClientRect();
var aboutRect = about.getBoundingClientRect();
var spiritRect = spirit.getBoundingClientRect();
var projectsRect = projects.getBoundingClientRect();
var teamRect = team.getBoundingClientRect();

var rects = [headerRect, aboutRect, spiritRect, projectsRect, teamRect];
var tabs = document.getElementsByClassName('tab');

var pages = rects.map(function(rect){
	return {
		top: rect.top + window.scrollY,
		bottom: rect.bottom + window.scrollY
	};
});



window.addEventListener("scroll", findPage);
