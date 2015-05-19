(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Romain/Documents/Programmation/ants/site/js/index.js":[function(require,module,exports){
'use strict';

var body = document.querySelector('body');
var main = document.querySelector('main');
var menuButton = document.querySelector('body > header img');
var menu = document.body.querySelector('nav');
var currentPage = document.querySelector('body > header h2');
var mailButton = document.querySelector('#mail');
var townButton = document.querySelector('#town');
var colonySection = document.querySelector('#colony');

var isMobile = false;

// // check if the device is mobile
// var ua = window.navigator.userAgent;
// if (ua.match(/Mobi/))
// 	isMobile = true;

// // don't run colony on mobiles
// if (!isMobile){
// 	// when clicking on menu tab, back to normal view if colony was on top
// 	NodeList.prototype.forEach = Array.prototype.forEach;

// 	document.querySelectorAll('nav a').forEach(function(element){
// 	    element.addEventListener('click', function(){
// 	    	if (main.classList.contains('hidden')){
// 	    		body.classList.remove('noscroll');
// 	    		main.classList.remove('hidden');
// 	    	}	
// 		});
// 	});

// 	var isCanvasAvailable = require('./canvas-detect.js');
// 	var terminal = require('./terminal.js');
// 	var antColony;

// 	if(isCanvasAvailable()){
// 		antColony = terminal(document.querySelector('#colony'));
// 		// antColony.togglePlayPause();
// 	}
// 	else {
// 		var fallback = document.querySelector('#colony img[hidden]');
// 		fallback.removeAttribute('hidden');
// 	}

// 	function toggleAnimation(){
// 		body.classList.toggle('noscroll');
// 		main.classList.toggle('hidden');
// 		// antColony.togglePlayPause();
// 	}

// 	main.addEventListener('transitionend', function(){
// 		colonySection.classList.toggle('over');
// 	});

// 	// put colony on top
// 	menuButton.addEventListener('click', function(){
// 		toggleAnimation();
// 	});
// }

function addHoverBehavior(element) {
	element.addEventListener('touchstart', function(){
		element.classList.toggle('hover');
	});
}

addHoverBehavior(mailButton);
addHoverBehavior(townButton);

// displaying menu
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
		tabs[5].className = 'tab'; 
	}
	else if (i >= 0 && tabs[i].className != 'tab active') {
		tabs[0].className = 'tab'; 
		tabs[1].className = 'tab'; 
		tabs[2].className = 'tab'; 
		tabs[3].className = 'tab'; 
		tabs[4].className = 'tab'; 
		tabs[5].className = 'tab'; 
		tabs[i].className += ' active';

		currentPage.innerHTML = tabs[i].innerHTML;
	}
}

var body = document.body;
var home = document.getElementById("home");
var about = document.getElementById("about");
var spirit = document.getElementById("spirit");
var projects = document.getElementById("projects");
var team = document.getElementById("team");
var contact = document.getElementById("contact");

var homeRect = home.getBoundingClientRect();
var aboutRect = about.getBoundingClientRect();
var spiritRect = spirit.getBoundingClientRect();
var projectsRect = projects.getBoundingClientRect();
var teamRect = team.getBoundingClientRect();
var contactRect = contact.getBoundingClientRect();

var rects = [homeRect, aboutRect, spiritRect, projectsRect, teamRect, contactRect];
var tabs = document.getElementsByClassName('tab');

var pages = rects.map(function(rect){
	return {
		top: rect.top + window.scrollY,
		bottom: rect.bottom + window.scrollY
	};
});

window.addEventListener("scroll", findPage);

},{}]},{},["/Users/Romain/Documents/Programmation/ants/site/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL1JvbWFpbi9Eb2N1bWVudHMvUHJvZ3JhbW1hdGlvbi9hbnRzL3NpdGUvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xudmFyIG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG52YXIgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBoZWFkZXIgaW1nJyk7XG52YXIgbWVudSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbmF2Jyk7XG52YXIgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gaGVhZGVyIGgyJyk7XG52YXIgbWFpbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWlsJyk7XG52YXIgdG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3duJyk7XG52YXIgY29sb255U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xvbnknKTtcblxudmFyIGlzTW9iaWxlID0gZmFsc2U7XG5cbi8vIC8vIGNoZWNrIGlmIHRoZSBkZXZpY2UgaXMgbW9iaWxlXG4vLyB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbi8vIGlmICh1YS5tYXRjaCgvTW9iaS8pKVxuLy8gXHRpc01vYmlsZSA9IHRydWU7XG5cbi8vIC8vIGRvbid0IHJ1biBjb2xvbnkgb24gbW9iaWxlc1xuLy8gaWYgKCFpc01vYmlsZSl7XG4vLyBcdC8vIHdoZW4gY2xpY2tpbmcgb24gbWVudSB0YWIsIGJhY2sgdG8gbm9ybWFsIHZpZXcgaWYgY29sb255IHdhcyBvbiB0b3Bcbi8vIFx0Tm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcblxuLy8gXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgYScpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCl7XG4vLyBcdCAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbi8vIFx0ICAgIFx0aWYgKG1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSl7XG4vLyBcdCAgICBcdFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3Njcm9sbCcpO1xuLy8gXHQgICAgXHRcdG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4vLyBcdCAgICBcdH1cdFxuLy8gXHRcdH0pO1xuLy8gXHR9KTtcblxuLy8gXHR2YXIgaXNDYW52YXNBdmFpbGFibGUgPSByZXF1aXJlKCcuL2NhbnZhcy1kZXRlY3QuanMnKTtcbi8vIFx0dmFyIHRlcm1pbmFsID0gcmVxdWlyZSgnLi90ZXJtaW5hbC5qcycpO1xuLy8gXHR2YXIgYW50Q29sb255O1xuXG4vLyBcdGlmKGlzQ2FudmFzQXZhaWxhYmxlKCkpe1xuLy8gXHRcdGFudENvbG9ueSA9IHRlcm1pbmFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xvbnknKSk7XG4vLyBcdFx0Ly8gYW50Q29sb255LnRvZ2dsZVBsYXlQYXVzZSgpO1xuLy8gXHR9XG4vLyBcdGVsc2Uge1xuLy8gXHRcdHZhciBmYWxsYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xvbnkgaW1nW2hpZGRlbl0nKTtcbi8vIFx0XHRmYWxsYmFjay5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuLy8gXHR9XG5cbi8vIFx0ZnVuY3Rpb24gdG9nZ2xlQW5pbWF0aW9uKCl7XG4vLyBcdFx0Ym9keS5jbGFzc0xpc3QudG9nZ2xlKCdub3Njcm9sbCcpO1xuLy8gXHRcdG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4vLyBcdFx0Ly8gYW50Q29sb255LnRvZ2dsZVBsYXlQYXVzZSgpO1xuLy8gXHR9XG5cbi8vIFx0bWFpbi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24oKXtcbi8vIFx0XHRjb2xvbnlTZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ292ZXInKTtcbi8vIFx0fSk7XG5cbi8vIFx0Ly8gcHV0IGNvbG9ueSBvbiB0b3Bcbi8vIFx0bWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4vLyBcdFx0dG9nZ2xlQW5pbWF0aW9uKCk7XG4vLyBcdH0pO1xuLy8gfVxuXG5mdW5jdGlvbiBhZGRIb3ZlckJlaGF2aW9yKGVsZW1lbnQpIHtcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oKXtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hvdmVyJyk7XG5cdH0pO1xufVxuXG5hZGRIb3ZlckJlaGF2aW9yKG1haWxCdXR0b24pO1xuYWRkSG92ZXJCZWhhdmlvcih0b3duQnV0dG9uKTtcblxuLy8gZGlzcGxheWluZyBtZW51XG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0bWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbn0pO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0bWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbn0pO1xuXG5mdW5jdGlvbiBmaW5kUGFnZSgpIHtcblx0dmFyIGN1cnJlbnRZID0gd2luZG93LnNjcm9sbFk7XG5cblx0dmFyIHJhdGlvcyA9IHBhZ2VzLm1hcChmdW5jdGlvbihwYWdlLCBpKXtcblx0XHRpZiAoY3VycmVudFkgLSBwYWdlLmJvdHRvbSA+PSAwIHx8IGN1cnJlbnRZICsgd2luZG93LmlubmVySGVpZ2h0IDwgcGFnZS50b3ApXG5cdFx0XHRyZXR1cm4gMDtcblx0XHRlbHNlIGlmIChjdXJyZW50WSA8IHBhZ2UuYm90dG9tICYmIGN1cnJlbnRZID4gcGFnZS50b3ApIC8vIGN1cnJlbnRZIGlzIGluIHRoZSBtaWRkbGUgb2YgcGFnZVxuXHRcdFx0cmV0dXJuIE1hdGgubWluKChwYWdlLmJvdHRvbSAtIGN1cnJlbnRZKS93aW5kb3cuaW5uZXJIZWlnaHQsIDEpO1xuXHRcdGVsc2UgeyAvLyBjdXJyZW50WSBpcyBqdXN0IGJlZm9yZSBwYWdlXG5cdFx0XHRyZXR1cm4gMSAtIChwYWdlLnRvcCAtIGN1cnJlbnRZKSAvIHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHR9XG5cdFx0XHRcblx0fSk7XG5cblx0dmFyIGkgPSByYXRpb3MuaW5kZXhPZihNYXRoLm1heC5hcHBseShNYXRoLCByYXRpb3MpKTtcblxuXHRpZiAoaSA9PT0gLTEpe1xuXHRcdHRhYnNbMF0uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHRcdHRhYnNbMV0uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHRcdHRhYnNbMl0uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHRcdHRhYnNbM10uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHRcdHRhYnNbNF0uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHRcdHRhYnNbNV0uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHR9XG5cdGVsc2UgaWYgKGkgPj0gMCAmJiB0YWJzW2ldLmNsYXNzTmFtZSAhPSAndGFiIGFjdGl2ZScpIHtcblx0XHR0YWJzWzBdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzFdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzJdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzNdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzRdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzVdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzW2ldLmNsYXNzTmFtZSArPSAnIGFjdGl2ZSc7XG5cblx0XHRjdXJyZW50UGFnZS5pbm5lckhUTUwgPSB0YWJzW2ldLmlubmVySFRNTDtcblx0fVxufVxuXG52YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG52YXIgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbnZhciBhYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XG52YXIgc3Bpcml0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGlyaXRcIik7XG52YXIgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xudmFyIHRlYW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlYW1cIik7XG52YXIgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcblxudmFyIGhvbWVSZWN0ID0gaG9tZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbnZhciBhYm91dFJlY3QgPSBhYm91dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbnZhciBzcGlyaXRSZWN0ID0gc3Bpcml0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xudmFyIHByb2plY3RzUmVjdCA9IHByb2plY3RzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xudmFyIHRlYW1SZWN0ID0gdGVhbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbnZhciBjb250YWN0UmVjdCA9IGNvbnRhY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbnZhciByZWN0cyA9IFtob21lUmVjdCwgYWJvdXRSZWN0LCBzcGlyaXRSZWN0LCBwcm9qZWN0c1JlY3QsIHRlYW1SZWN0LCBjb250YWN0UmVjdF07XG52YXIgdGFicyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYicpO1xuXG52YXIgcGFnZXMgPSByZWN0cy5tYXAoZnVuY3Rpb24ocmVjdCl7XG5cdHJldHVybiB7XG5cdFx0dG9wOiByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZLFxuXHRcdGJvdHRvbTogcmVjdC5ib3R0b20gKyB3aW5kb3cuc2Nyb2xsWVxuXHR9O1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZpbmRQYWdlKTtcbiJdfQ==
