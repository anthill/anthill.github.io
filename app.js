(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Romain/Documents/Programmation/ants/site/js/index.js":[function(require,module,exports){
'use strict';

var body = document.querySelector('body');
var main = document.querySelector('main');
var menuButton = document.querySelector('body > header img');
var menu = document.body.querySelector('nav');
var currentPage = document.querySelector('body > header h2');
var mailButton = document.querySelector('#mail');
var townButton = document.querySelector('#town');

// var isMobile = false;

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

// menuButton.addEventListener('touchstart', function(){
// 	menu.classList.toggle('active');
// 	menuButton.classList.toggle('active');
// });

// menu.addEventListener('touchstart', function(){
// 	menu.classList.toggle('active');
// 	menuButton.classList.toggle('active');
// });


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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL1JvbWFpbi9Eb2N1bWVudHMvUHJvZ3JhbW1hdGlvbi9hbnRzL3NpdGUvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xudmFyIG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG52YXIgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBoZWFkZXIgaW1nJyk7XG52YXIgbWVudSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignbmF2Jyk7XG52YXIgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gaGVhZGVyIGgyJyk7XG52YXIgbWFpbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWlsJyk7XG52YXIgdG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3duJyk7XG5cbi8vIHZhciBpc01vYmlsZSA9IGZhbHNlO1xuXG4vLyAvLyBjaGVjayBpZiB0aGUgZGV2aWNlIGlzIG1vYmlsZVxuLy8gdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG4vLyBpZiAodWEubWF0Y2goL01vYmkvKSlcbi8vIFx0aXNNb2JpbGUgPSB0cnVlO1xuXG4vLyAvLyBkb24ndCBydW4gY29sb255IG9uIG1vYmlsZXNcbi8vIGlmICghaXNNb2JpbGUpe1xuLy8gXHQvLyB3aGVuIGNsaWNraW5nIG9uIG1lbnUgdGFiLCBiYWNrIHRvIG5vcm1hbCB2aWV3IGlmIGNvbG9ueSB3YXMgb24gdG9wXG4vLyBcdE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cbi8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IGEnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xuLy8gXHQgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4vLyBcdCAgICBcdGlmIChtYWluLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpe1xuLy8gXHQgICAgXHRcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9zY3JvbGwnKTtcbi8vIFx0ICAgIFx0XHRtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuLy8gXHQgICAgXHR9XHRcbi8vIFx0XHR9KTtcbi8vIFx0fSk7XG5cbi8vIFx0dmFyIGlzQ2FudmFzQXZhaWxhYmxlID0gcmVxdWlyZSgnLi9jYW52YXMtZGV0ZWN0LmpzJyk7XG4vLyBcdHZhciB0ZXJtaW5hbCA9IHJlcXVpcmUoJy4vdGVybWluYWwuanMnKTtcbi8vIFx0dmFyIGFudENvbG9ueTtcblxuLy8gXHRpZihpc0NhbnZhc0F2YWlsYWJsZSgpKXtcbi8vIFx0XHRhbnRDb2xvbnkgPSB0ZXJtaW5hbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29sb255JykpO1xuLy8gXHRcdC8vIGFudENvbG9ueS50b2dnbGVQbGF5UGF1c2UoKTtcbi8vIFx0fVxuLy8gXHRlbHNlIHtcbi8vIFx0XHR2YXIgZmFsbGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29sb255IGltZ1toaWRkZW5dJyk7XG4vLyBcdFx0ZmFsbGJhY2sucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbi8vIFx0fVxuXG4vLyBcdGZ1bmN0aW9uIHRvZ2dsZUFuaW1hdGlvbigpe1xuLy8gXHRcdGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm9zY3JvbGwnKTtcbi8vIFx0XHRtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuLy8gXHRcdC8vIGFudENvbG9ueS50b2dnbGVQbGF5UGF1c2UoKTtcbi8vIFx0fVxuXG4vLyBcdC8vIHB1dCBjb2xvbnkgb24gdG9wXG4vLyBcdG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuLy8gXHRcdHRvZ2dsZUFuaW1hdGlvbigpO1xuLy8gXHR9KTtcbi8vIH1cblxuZnVuY3Rpb24gYWRkSG92ZXJCZWhhdmlvcihlbGVtZW50KSB7XG5cdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKCl7XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdob3ZlcicpO1xuXHR9KTtcbn1cblxuYWRkSG92ZXJCZWhhdmlvcihtYWlsQnV0dG9uKTtcbmFkZEhvdmVyQmVoYXZpb3IodG93bkJ1dHRvbik7XG5cbi8vIGRpc3BsYXlpbmcgbWVudVxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG59KTtcblxubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG59KTtcblxuLy8gbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oKXtcbi8vIFx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbi8vIFx0bWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbi8vIH0pO1xuXG4vLyBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbigpe1xuLy8gXHRtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuLy8gXHRtZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuLy8gfSk7XG5cblxuZnVuY3Rpb24gZmluZFBhZ2UoKSB7XG5cdHZhciBjdXJyZW50WSA9IHdpbmRvdy5zY3JvbGxZO1xuXG5cdHZhciByYXRpb3MgPSBwYWdlcy5tYXAoZnVuY3Rpb24ocGFnZSwgaSl7XG5cdFx0aWYgKGN1cnJlbnRZIC0gcGFnZS5ib3R0b20gPj0gMCB8fCBjdXJyZW50WSArIHdpbmRvdy5pbm5lckhlaWdodCA8IHBhZ2UudG9wKVxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0ZWxzZSBpZiAoY3VycmVudFkgPCBwYWdlLmJvdHRvbSAmJiBjdXJyZW50WSA+IHBhZ2UudG9wKSAvLyBjdXJyZW50WSBpcyBpbiB0aGUgbWlkZGxlIG9mIHBhZ2Vcblx0XHRcdHJldHVybiBNYXRoLm1pbigocGFnZS5ib3R0b20gLSBjdXJyZW50WSkvd2luZG93LmlubmVySGVpZ2h0LCAxKTtcblx0XHRlbHNlIHsgLy8gY3VycmVudFkgaXMganVzdCBiZWZvcmUgcGFnZVxuXHRcdFx0cmV0dXJuIDEgLSAocGFnZS50b3AgLSBjdXJyZW50WSkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0fVxuXHRcdFx0XG5cdH0pO1xuXG5cdHZhciBpID0gcmF0aW9zLmluZGV4T2YoTWF0aC5tYXguYXBwbHkoTWF0aCwgcmF0aW9zKSk7XG5cblx0aWYgKGkgPT09IC0xKXtcblx0XHR0YWJzWzBdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzFdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzJdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzNdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzRdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzVdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0fVxuXHRlbHNlIGlmIChpID49IDAgJiYgdGFic1tpXS5jbGFzc05hbWUgIT0gJ3RhYiBhY3RpdmUnKSB7XG5cdFx0dGFic1swXS5jbGFzc05hbWUgPSAndGFiJzsgXG5cdFx0dGFic1sxXS5jbGFzc05hbWUgPSAndGFiJzsgXG5cdFx0dGFic1syXS5jbGFzc05hbWUgPSAndGFiJzsgXG5cdFx0dGFic1szXS5jbGFzc05hbWUgPSAndGFiJzsgXG5cdFx0dGFic1s0XS5jbGFzc05hbWUgPSAndGFiJzsgXG5cdFx0dGFic1s1XS5jbGFzc05hbWUgPSAndGFiJzsgXG5cdFx0dGFic1tpXS5jbGFzc05hbWUgKz0gJyBhY3RpdmUnO1xuXG5cdFx0Y3VycmVudFBhZ2UuaW5uZXJIVE1MID0gdGFic1tpXS5pbm5lckhUTUw7XG5cdH1cbn1cblxudmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xudmFyIGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XG52YXIgYWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpO1xudmFyIHNwaXJpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Bpcml0XCIpO1xudmFyIHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcbnZhciB0ZWFtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWFtXCIpO1xudmFyIGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XG5cbnZhciBob21lUmVjdCA9IGhvbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG52YXIgYWJvdXRSZWN0ID0gYWJvdXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG52YXIgc3Bpcml0UmVjdCA9IHNwaXJpdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbnZhciBwcm9qZWN0c1JlY3QgPSBwcm9qZWN0cy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbnZhciB0ZWFtUmVjdCA9IHRlYW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG52YXIgY29udGFjdFJlY3QgPSBjb250YWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG52YXIgcmVjdHMgPSBbaG9tZVJlY3QsIGFib3V0UmVjdCwgc3Bpcml0UmVjdCwgcHJvamVjdHNSZWN0LCB0ZWFtUmVjdCwgY29udGFjdFJlY3RdO1xudmFyIHRhYnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWInKTtcblxudmFyIHBhZ2VzID0gcmVjdHMubWFwKGZ1bmN0aW9uKHJlY3Qpe1xuXHRyZXR1cm4ge1xuXHRcdHRvcDogcmVjdC50b3AgKyB3aW5kb3cuc2Nyb2xsWSxcblx0XHRib3R0b206IHJlY3QuYm90dG9tICsgd2luZG93LnNjcm9sbFlcblx0fTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmaW5kUGFnZSk7XG4iXX0=
