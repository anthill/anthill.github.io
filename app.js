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

var isDesktop = true;

// check if the device is mobile
var ua = window.navigator.userAgent;
if (ua.match(/Mobi/))
	isDesktop = false;

function addHoverBehavior(element) {
	element.addEventListener('touchstart', function(){
		element.classList.toggle('hover');
	});
}

addHoverBehavior(mailButton);
addHoverBehavior(townButton);

// displaying menu
menuButton.addEventListener('click', function(){
	console.log('yeah');
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


// // don't run colony on mobiles
// if (isDesktop){
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



},{}]},{},["/Users/Romain/Documents/Programmation/ants/site/js/index.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL1JvbWFpbi9Eb2N1bWVudHMvUHJvZ3JhbW1hdGlvbi9hbnRzL3NpdGUvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG52YXIgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbnZhciBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGhlYWRlciBpbWcnKTtcbnZhciBtZW51ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCduYXYnKTtcbnZhciBjdXJyZW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgPiBoZWFkZXIgaDInKTtcbnZhciBtYWlsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haWwnKTtcbnZhciB0b3duQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rvd24nKTtcbnZhciBjb2xvbnlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbG9ueScpO1xuXG52YXIgaXNEZXNrdG9wID0gdHJ1ZTtcblxuLy8gY2hlY2sgaWYgdGhlIGRldmljZSBpcyBtb2JpbGVcbnZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuaWYgKHVhLm1hdGNoKC9Nb2JpLykpXG5cdGlzRGVza3RvcCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBhZGRIb3ZlckJlaGF2aW9yKGVsZW1lbnQpIHtcblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oKXtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hvdmVyJyk7XG5cdH0pO1xufVxuXG5hZGRIb3ZlckJlaGF2aW9yKG1haWxCdXR0b24pO1xuYWRkSG92ZXJCZWhhdmlvcih0b3duQnV0dG9uKTtcblxuLy8gZGlzcGxheWluZyBtZW51XG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0Y29uc29sZS5sb2coJ3llYWgnKTtcblx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0bWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbn0pO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0bWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblx0bWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbn0pO1xuXG5mdW5jdGlvbiBmaW5kUGFnZSgpIHtcblx0dmFyIGN1cnJlbnRZID0gd2luZG93LnNjcm9sbFk7XG5cblx0dmFyIHJhdGlvcyA9IHBhZ2VzLm1hcChmdW5jdGlvbihwYWdlLCBpKXtcblx0XHRpZiAoY3VycmVudFkgLSBwYWdlLmJvdHRvbSA+PSAwIHx8IGN1cnJlbnRZICsgd2luZG93LmlubmVySGVpZ2h0IDwgcGFnZS50b3ApXG5cdFx0XHRyZXR1cm4gMDtcblx0XHRlbHNlIGlmIChjdXJyZW50WSA8IHBhZ2UuYm90dG9tICYmIGN1cnJlbnRZID4gcGFnZS50b3ApIC8vIGN1cnJlbnRZIGlzIGluIHRoZSBtaWRkbGUgb2YgcGFnZVxuXHRcdFx0cmV0dXJuIE1hdGgubWluKChwYWdlLmJvdHRvbSAtIGN1cnJlbnRZKS93aW5kb3cuaW5uZXJIZWlnaHQsIDEpO1xuXHRcdGVsc2UgeyAvLyBjdXJyZW50WSBpcyBqdXN0IGJlZm9yZSBwYWdlXG5cdFx0XHRyZXR1cm4gMSAtIChwYWdlLnRvcCAtIGN1cnJlbnRZKSAvIHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHR9XG5cdFx0XHRcblx0fSk7XG5cblx0dmFyIGkgPSByYXRpb3MuaW5kZXhPZihNYXRoLm1heC5hcHBseShNYXRoLCByYXRpb3MpKTtcblxuXHRpZiAoaSA9PT0gLTEpe1xuXHRcdHRhYnNbMF0uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHRcdHRhYnNbMV0uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHRcdHRhYnNbMl0uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHRcdHRhYnNbM10uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHRcdHRhYnNbNF0uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHRcdHRhYnNbNV0uY2xhc3NOYW1lID0gJ3RhYic7IFxuXHR9XG5cdGVsc2UgaWYgKGkgPj0gMCAmJiB0YWJzW2ldLmNsYXNzTmFtZSAhPSAndGFiIGFjdGl2ZScpIHtcblx0XHR0YWJzWzBdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzFdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzJdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzNdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzRdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzWzVdLmNsYXNzTmFtZSA9ICd0YWInOyBcblx0XHR0YWJzW2ldLmNsYXNzTmFtZSArPSAnIGFjdGl2ZSc7XG5cblx0XHRjdXJyZW50UGFnZS5pbm5lckhUTUwgPSB0YWJzW2ldLmlubmVySFRNTDtcblx0fVxufVxuXG52YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG52YXIgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbnZhciBhYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XG52YXIgc3Bpcml0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGlyaXRcIik7XG52YXIgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xudmFyIHRlYW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlYW1cIik7XG52YXIgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcblxudmFyIGhvbWVSZWN0ID0gaG9tZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbnZhciBhYm91dFJlY3QgPSBhYm91dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbnZhciBzcGlyaXRSZWN0ID0gc3Bpcml0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xudmFyIHByb2plY3RzUmVjdCA9IHByb2plY3RzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xudmFyIHRlYW1SZWN0ID0gdGVhbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbnZhciBjb250YWN0UmVjdCA9IGNvbnRhY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbnZhciByZWN0cyA9IFtob21lUmVjdCwgYWJvdXRSZWN0LCBzcGlyaXRSZWN0LCBwcm9qZWN0c1JlY3QsIHRlYW1SZWN0LCBjb250YWN0UmVjdF07XG52YXIgdGFicyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYicpO1xuXG52YXIgcGFnZXMgPSByZWN0cy5tYXAoZnVuY3Rpb24ocmVjdCl7XG5cdHJldHVybiB7XG5cdFx0dG9wOiByZWN0LnRvcCArIHdpbmRvdy5zY3JvbGxZLFxuXHRcdGJvdHRvbTogcmVjdC5ib3R0b20gKyB3aW5kb3cuc2Nyb2xsWVxuXHR9O1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZpbmRQYWdlKTtcblxuXG4vLyAvLyBkb24ndCBydW4gY29sb255IG9uIG1vYmlsZXNcbi8vIGlmIChpc0Rlc2t0b3Ape1xuLy8gXHQvLyB3aGVuIGNsaWNraW5nIG9uIG1lbnUgdGFiLCBiYWNrIHRvIG5vcm1hbCB2aWV3IGlmIGNvbG9ueSB3YXMgb24gdG9wXG4vLyBcdE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cbi8vIFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IGEnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xuLy8gXHQgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4vLyBcdCAgICBcdGlmIChtYWluLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpe1xuLy8gXHQgICAgXHRcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9zY3JvbGwnKTtcbi8vIFx0ICAgIFx0XHRtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuLy8gXHQgICAgXHR9XHRcbi8vIFx0XHR9KTtcbi8vIFx0fSk7XG5cbi8vIFx0dmFyIGlzQ2FudmFzQXZhaWxhYmxlID0gcmVxdWlyZSgnLi9jYW52YXMtZGV0ZWN0LmpzJyk7XG4vLyBcdHZhciB0ZXJtaW5hbCA9IHJlcXVpcmUoJy4vdGVybWluYWwuanMnKTtcbi8vIFx0dmFyIGFudENvbG9ueTtcblxuLy8gXHRpZihpc0NhbnZhc0F2YWlsYWJsZSgpKXtcbi8vIFx0XHRhbnRDb2xvbnkgPSB0ZXJtaW5hbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29sb255JykpO1xuLy8gXHRcdC8vIGFudENvbG9ueS50b2dnbGVQbGF5UGF1c2UoKTtcbi8vIFx0fVxuLy8gXHRlbHNlIHtcbi8vIFx0XHR2YXIgZmFsbGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29sb255IGltZ1toaWRkZW5dJyk7XG4vLyBcdFx0ZmFsbGJhY2sucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbi8vIFx0fVxuXG4vLyBcdGZ1bmN0aW9uIHRvZ2dsZUFuaW1hdGlvbigpe1xuLy8gXHRcdGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm9zY3JvbGwnKTtcbi8vIFx0XHRtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuLy8gXHRcdC8vIGFudENvbG9ueS50b2dnbGVQbGF5UGF1c2UoKTtcbi8vIFx0fVxuXG4vLyBcdG1haW4uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCl7XG4vLyBcdFx0Y29sb255U2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdvdmVyJyk7XG4vLyBcdH0pO1xuXG4vLyBcdC8vIHB1dCBjb2xvbnkgb24gdG9wXG4vLyBcdG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuLy8gXHRcdHRvZ2dsZUFuaW1hdGlvbigpO1xuLy8gXHR9KTtcbi8vIH1cblxuXG4iXX0=
