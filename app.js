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
var mailButton = document.querySelector('#mail');
var townButton = document.querySelector('#town');
// var menu = querySelector('body');


function addHoverBehavior(element) {

	element.addEventListener('touchstart', function(){
		element.classList.toggle('hover');
	});

	element.addEventListener('mouseenter', function mouseenterListener(e){
		element.removeEventListener('mouseenter', mouseenterListener);
		element.classList.add('hover');

		element.addEventListener('mouseleave', function mouseleaveListener(){
			element.removeEventListener('mouseleave', mouseleaveListener);
			element.classList.remove('hover');

			element.addEventListener('mouseenter', mouseenterListener);
		})
	});
}

addHoverBehavior(mailButton);
addHoverBehavior(townButton);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL1JvbWFpbi9Eb2N1bWVudHMvUHJvZ3JhbW1hdGlvbi9hbnRzL3NpdGUvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0Jztcbi8vIHZhciBfYW50Q29sb255ID0gcmVxdWlyZSgnQW50Q29sb255Jyk7XG4vLyB2YXIgaXNDYW52YXNBdmFpbGFibGUgPSByZXF1aXJlKCcuL2NhbnZhcy1kZXRlY3QuanMnKTtcbi8vIHZhciB0ZXJtaW5hbCA9IHJlcXVpcmUoJy4vdGVybWluYWwuanMnKTtcblxuLy8gdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvbnknKTtcblxuLy8gaWYoaXNDYW52YXNBdmFpbGFibGUoKSl7XG4vLyBcdHRlcm1pbmFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4gaGVhZGVyJykpO1xuLy8gfVxuLy8gZWxzZXtcbi8vIFx0dmFyIGZhbGxiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbiBoZWFkZXIgaW1nW2hpZGRlbl0nKTtcbi8vIFx0ZmFsbGJhY2sucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbi8vIH1cblxuLy8gdmFyIHNwbGFzaFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGxhc2hTY3JlZW4nKTtcbi8vIHZhciBlbnRlckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbnRlcicpO1xuXG52YXIgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBoZWFkZXIgaW1nJyk7XG52YXIgbWVudSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbmF2Jyk7XG52YXIgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gaGVhZGVyIGgyJyk7XG52YXIgbWFpbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWlsJyk7XG52YXIgdG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3duJyk7XG4vLyB2YXIgbWVudSA9IHF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuXG5mdW5jdGlvbiBhZGRIb3ZlckJlaGF2aW9yKGVsZW1lbnQpIHtcblxuXHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbigpe1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaG92ZXInKTtcblx0fSk7XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gbW91c2VlbnRlckxpc3RlbmVyKGUpe1xuXHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIG1vdXNlZW50ZXJMaXN0ZW5lcik7XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gbW91c2VsZWF2ZUxpc3RlbmVyKCl7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBtb3VzZWxlYXZlTGlzdGVuZXIpO1xuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdob3ZlcicpO1xuXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBtb3VzZWVudGVyTGlzdGVuZXIpO1xuXHRcdH0pXG5cdH0pO1xufVxuXG5hZGRIb3ZlckJlaGF2aW9yKG1haWxCdXR0b24pO1xuYWRkSG92ZXJCZWhhdmlvcih0b3duQnV0dG9uKTtcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG59KTtcblxubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG59KTtcblxuZnVuY3Rpb24gZmluZFBhZ2UoKSB7XG5cdHZhciBjdXJyZW50WSA9IHdpbmRvdy5zY3JvbGxZO1xuXG5cdHZhciByYXRpb3MgPSBwYWdlcy5tYXAoZnVuY3Rpb24ocGFnZSwgaSl7XG5cdFx0aWYgKGN1cnJlbnRZIC0gcGFnZS5ib3R0b20gPj0gMCB8fCBjdXJyZW50WSArIHdpbmRvdy5pbm5lckhlaWdodCA8IHBhZ2UudG9wKVxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0ZWxzZSBpZiAoY3VycmVudFkgPCBwYWdlLmJvdHRvbSAmJiBjdXJyZW50WSA+IHBhZ2UudG9wKSAvLyBjdXJyZW50WSBpcyBpbiB0aGUgbWlkZGxlIG9mIHBhZ2Vcblx0XHRcdHJldHVybiBNYXRoLm1pbigocGFnZS5ib3R0b20gLSBjdXJyZW50WSkvd2luZG93LmlubmVySGVpZ2h0LCAxKTtcblx0XHRlbHNlIHsgLy8gY3VycmVudFkgaXMganVzdCBiZWZvcmUgcGFnZVxuXHRcdFx0cmV0dXJuIDEgLSAocGFnZS50b3AgLSBjdXJyZW50WSkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0fVxuXHRcdFx0XG5cdH0pO1xuXG5cdHZhciBpID0gcmF0aW9zLmluZGV4T2YoTWF0aC5tYXguYXBwbHkoTWF0aCwgcmF0aW9zKSk7XG5cblx0aWYgKGkgPT09IC0xKXtcblx0XHR0YWJzWzBdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzFdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzJdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzNdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzRdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzVdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0fVxuXHRlbHNlIGlmIChpID49IDAgJiYgdGFic1tpXS5jbGFzc05hbWUgIT0gJ3RhYiBhY3RpdmUnKSB7XG5cdFx0dGFic1swXS5jbGFzc05hbWUgPSAndGFiJzsgXG5cdFx0dGFic1sxXS5jbGFzc05hbWUgPSAndGFiJzsgXG5cdFx0dGFic1syXS5jbGFzc05hbWUgPSAndGFiJzsgXG5cdFx0dGFic1szXS5jbGFzc05hbWUgPSAndGFiJzsgXG5cdFx0dGFic1s0XS5jbGFzc05hbWUgPSAndGFiJzsgXG5cdFx0dGFic1s1XS5jbGFzc05hbWUgPSAndGFiJzsgXG5cdFx0dGFic1tpXS5jbGFzc05hbWUgKz0gJyBhY3RpdmUnO1xuXG5cdFx0Y3VycmVudFBhZ2UuaW5uZXJIVE1MID0gdGFic1tpXS5pbm5lckhUTUw7XG5cdH1cbn1cblxudmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xudmFyIGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG52YXIgYWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpO1xudmFyIHNwaXJpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Bpcml0XCIpO1xudmFyIHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcbnZhciB0ZWFtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWFtXCIpO1xudmFyIGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XG5cbnZhciBob21lUmVjdCA9IGhvbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG52YXIgYWJvdXRSZWN0ID0gYWJvdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG52YXIgc3Bpcml0UmVjdCA9IHNwaXJpdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbnZhciBwcm9qZWN0c1JlY3QgPSBwcm9qZWN0cy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbnZhciB0ZWFtUmVjdCA9IHRlYW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG52YXIgY29udGFjdFJlY3QgPSBjb250YWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG52YXIgcmVjdHMgPSBbaG9tZVJlY3QsIGFib3V0UmVjdCwgc3Bpcml0UmVjdCwgcHJvamVjdHNSZWN0LCB0ZWFtUmVjdCwgY29udGFjdFJlY3RdO1xudmFyIHRhYnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWInKTtcblxudmFyIHBhZ2VzID0gcmVjdHMubWFwKGZ1bmN0aW9uKHJlY3Qpe1xuXHRyZXR1cm4ge1xuXHRcdHRvcDogcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWSxcblx0XHRib3R0b206IHJlY3QuYm90dG9tICsgd2luZG93LnNjcm9sbFlcblx0fTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmaW5kUGFnZSk7XG4iXX0=
