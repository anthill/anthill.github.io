// 'use strict'; // This wouldn't allow js to be run in Safari :/

var body = document.querySelector('body');
var main = document.querySelector('main');

var navigation = require('./navigation.js')();

var currentPage = document.querySelector('body > header h2');

var colonyButton = document.querySelector('body > header img');
var colonySection = document.querySelector('#colony');

var isDesktop = true;


// body.style.overflow = 'hidden';

// check if the device is mobile
var ua = window.navigator.userAgent;
if (ua.match(/Mobi/))
	isDesktop = false;

// don't run colony on mobiles
if (isDesktop){

	// when clicking on menu tab, back to normal view if colony was on top
	NodeList.prototype.forEach = Array.prototype.forEach;

	document.querySelectorAll('nav a').forEach(function(element){
	    element.addEventListener('click', function(){
	    	if (main.classList.contains('hidden')){
	    		main.classList.remove('hidden');
	    	}	
		});
	});

	var isCanvasAvailable = require('./canvas-detect.js');
	var terminal = require('./terminal.js');
	var antColony;

	if(isCanvasAvailable()){
		antColony = terminal(document.querySelector('#colony'));
		// antColony.togglePlayPause();
	}
	else {
		var fallback = document.querySelector('#colony img[hidden]');
		fallback.removeAttribute('hidden');
	}

	function toggleAnimation(){
		main.classList.toggle('hidden');
		// antColony.togglePlayPause();
	}

	main.addEventListener('transitionend', function(event){
		if (event.propertyName === 'opacity')
			colonySection.classList.toggle('over');
	});

	// put colony on top
	colonyButton.addEventListener('click', function(){
		toggleAnimation();
	});
}


// function addHoverBehavior(element) {
// 	element.addEventListener('touchstart', function(){
// 		element.classList.toggle('hover');
// 	});
// }

// addHoverBehavior(mailButton);
// addHoverBehavior(townButton);

// // displaying menu
// colonyButton.addEventListener('click', function(){
// 	menu.classList.toggle('active');
// 	colonyButton.classList.toggle('active');
// });

// menu.addEventListener('click', function(){
// 	menu.classList.toggle('active');
// 	colonyButton.classList.toggle('active');
// });

// function findPage() {
// 	var currentY = window.scrollY;

// 	var ratios = pages.map(function(page, i){
// 		if (currentY - page.bottom >= 0 || currentY + window.innerHeight < page.top)
// 			return 0;
// 		else if (currentY < page.bottom && currentY > page.top) // currentY is in the middle of page
// 			return Math.min((page.bottom - currentY)/window.innerHeight, 1);
// 		else { // currentY is just before page
// 			return 1 - (page.top - currentY) / window.innerHeight;
// 		}
			
// 	});

// 	var i = ratios.indexOf(Math.max.apply(Math, ratios));

// 	if (i === -1){
// 		tabs[0].className = 'tab'; 
// 		tabs[1].className = 'tab'; 
// 		tabs[2].className = 'tab'; 
// 		tabs[3].className = 'tab'; 
// 		tabs[4].className = 'tab'; 
// 		tabs[5].className = 'tab'; 
// 		tabs[6].className = 'tab';
// 		tabs[7].className = 'tab';
// 	}
// 	else if (i >= 0 && tabs[i].className != 'tab active') {
// 		tabs[0].className = 'tab'; 
// 		tabs[1].className = 'tab'; 
// 		tabs[2].className = 'tab'; 
// 		tabs[3].className = 'tab'; 
// 		tabs[4].className = 'tab'; 
// 		tabs[5].className = 'tab'; 
// 		tabs[6].className = 'tab';
// 		tabs[7].className = 'tab';
// 		tabs[i].className += ' active';

// 		currentPage.innerHTML = tabs[i].innerHTML;
// 	}
// }

// var body = document.body;
// var home = document.getElementById("home");
// var about = document.getElementById("about");
// var spirit = document.getElementById("spirit");
// var projects = document.getElementById("projects");
// var team = document.getElementById("team");
// var contact = document.getElementById("contact");
// var references = document.getElementById("references");
// var blog = document.getElementById("blog");

// var homeRect = home.getBoundingClientRect();
// var aboutRect = about.getBoundingClientRect();
// var spiritRect = spirit.getBoundingClientRect();
// var projectsRect = projects.getBoundingClientRect();
// var teamRect = team.getBoundingClientRect();
// var contactRect = contact.getBoundingClientRect();
// var referencesRect = references.getBoundingClientRect();
// var blogRect = blog.getBoundingClientRect();

// var rects = [homeRect, aboutRect, spiritRect, projectsRect, teamRect, contactRect, referencesRect, blogRect];
// var tabs = document.getElementsByClassName('tab');

// var pages = rects.map(function(rect){
// 	return {
// 		top: rect.top + window.scrollY,
// 		bottom: rect.bottom + window.scrollY
// 	};
// });

// window.addEventListener("scroll", findPage);
