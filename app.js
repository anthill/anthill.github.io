(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Romain/Documents/Programmation/ants/site/js/index.js":[function(require,module,exports){
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

},{}]},{},["/Users/Romain/Documents/Programmation/ants/site/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL1JvbWFpbi9Eb2N1bWVudHMvUHJvZ3JhbW1hdGlvbi9hbnRzL3NpdGUvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG4vLyB2YXIgX2FudENvbG9ueSA9IHJlcXVpcmUoJ0FudENvbG9ueScpO1xuLy8gdmFyIGlzQ2FudmFzQXZhaWxhYmxlID0gcmVxdWlyZSgnLi9jYW52YXMtZGV0ZWN0LmpzJyk7XG4vLyB2YXIgdGVybWluYWwgPSByZXF1aXJlKCcuL3Rlcm1pbmFsLmpzJyk7XG5cbi8vIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb255Jyk7XG5cbi8vIGlmKGlzQ2FudmFzQXZhaWxhYmxlKCkpe1xuLy8gXHR0ZXJtaW5hbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluIGhlYWRlcicpKTtcbi8vIH1cbi8vIGVsc2V7XG4vLyBcdHZhciBmYWxsYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gaGVhZGVyIGltZ1toaWRkZW5dJyk7XG4vLyBcdGZhbGxiYWNrLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4vLyB9XG5cbi8vIHZhciBzcGxhc2hTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BsYXNoU2NyZWVuJyk7XG4vLyB2YXIgZW50ZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW50ZXInKTtcblxudmFyIG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gaGVhZGVyIGltZycpO1xudmFyIG1lbnUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xudmFyIGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGhlYWRlciBoMicpO1xuLy8gdmFyIG1lbnUgPSBxdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbi8vIGVudGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbi8vIFx0Ym9keS5jbGFzc05hbWUgPSAnJzsgXG4vLyBcdHNwbGFzaFNjcmVlbi5zdHlsZS5vcGFjaXR5ID0gMDtcbi8vIFx0c3BsYXNoU2NyZWVuLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbigpe1xuLy8gXHQgICAgc3BsYXNoU2NyZWVuLnJlbW92ZSgpO1xuLy8gXHR9KTtcbi8vIH0pO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0bWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbn0pO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0bWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbn0pO1xuXG5mdW5jdGlvbiBmaW5kUGFnZSgpIHtcblx0dmFyIGN1cnJlbnRZID0gd2luZG93LnNjcm9sbFk7XG5cblx0dmFyIHJhdGlvcyA9IHBhZ2VzLm1hcChmdW5jdGlvbihwYWdlLCBpKXtcblx0XHRpZiAoY3VycmVudFkgLSBwYWdlLmJvdHRvbSA+PSAwIHx8IGN1cnJlbnRZICsgd2luZG93LmlubmVySGVpZ2h0IDwgcGFnZS50b3ApXG5cdFx0XHRyZXR1cm4gMDtcblx0XHRlbHNlIGlmIChjdXJyZW50WSA8IHBhZ2UuYm90dG9tICYmIGN1cnJlbnRZID4gcGFnZS50b3ApIC8vIGN1cnJlbnRZIGlzIGluIHRoZSBtaWRkbGUgb2YgcGFnZVxuXHRcdFx0cmV0dXJuIE1hdGgubWluKChwYWdlLmJvdHRvbSAtIGN1cnJlbnRZKS93aW5kb3cuaW5uZXJIZWlnaHQsIDEpO1xuXHRcdGVsc2UgeyAvLyBjdXJyZW50WSBpcyBqdXN0IGJlZm9yZSBwYWdlXG5cdFx0XHRyZXR1cm4gMSAtIChwYWdlLnRvcCAtIGN1cnJlbnRZKSAvIHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHR9XG5cdFx0XHRcblx0fSk7XG5cblx0dmFyIGkgPSByYXRpb3MuaW5kZXhPZihNYXRoLm1heC5hcHBseShNYXRoLCByYXRpb3MpKTtcblxuXHRpZiAoaSA9PT0gLTEpe1xuXHRcdHRhYnNbMF0uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHRcdHRhYnNbMV0uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHRcdHRhYnNbMl0uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHRcdHRhYnNbM10uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHRcdHRhYnNbNF0uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHR9XG5cdGVsc2UgaWYgKGkgPj0gMCAmJiB0YWJzW2ldLmNsYXNzTmFtZSAhPSAndGFiIGFjdGl2ZScpIHtcblx0XHR0YWJzWzBdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzFdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzJdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzNdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzRdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzW2ldLmNsYXNzTmFtZSArPSAnIGFjdGl2ZSc7XG5cblx0XHRjdXJyZW50UGFnZS5pbm5lckhUTUwgPSB0YWJzW2ldLmlubmVySFRNTDtcblx0fVxufVxuXG52YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4vLyB2YXIgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG52YXIgYWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpO1xudmFyIHNwaXJpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Bpcml0XCIpO1xudmFyIHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcbnZhciB0ZWFtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWFtXCIpO1xudmFyIGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XG5cbi8vIHZhciBoZWFkZXJSZWN0ID0gaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xudmFyIGFib3V0UmVjdCA9IGFib3V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xudmFyIHNwaXJpdFJlY3QgPSBzcGlyaXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG52YXIgcHJvamVjdHNSZWN0ID0gcHJvamVjdHMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG52YXIgdGVhbVJlY3QgPSB0ZWFtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xudmFyIGNvbnRhY3RSZWN0ID0gY29udGFjdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxudmFyIHJlY3RzID0gWy8qaGVhZGVyUmVjdCwqLyBhYm91dFJlY3QsIHNwaXJpdFJlY3QsIHByb2plY3RzUmVjdCwgdGVhbVJlY3QsIGNvbnRhY3RSZWN0XTtcbnZhciB0YWJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFiJyk7XG5cbnZhciBwYWdlcyA9IHJlY3RzLm1hcChmdW5jdGlvbihyZWN0KXtcblx0cmV0dXJuIHtcblx0XHR0b3A6IHJlY3QudG9wICsgd2luZG93LnNjcm9sbFksXG5cdFx0Ym90dG9tOiByZWN0LmJvdHRvbSArIHdpbmRvdy5zY3JvbGxZXG5cdH07XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZmluZFBhZ2UpO1xuIl19
