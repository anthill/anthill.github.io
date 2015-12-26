'use strict';

var main = document.querySelector('main');

var menu = document.body.querySelector('nav');
var homeButton = document.querySelector('#home-button');
var offersButton = document.querySelector('#offers-button');
var openButton = document.querySelector('#open-button');
var teamButton = document.querySelector('#team-button');
var contactButton = document.querySelector('#contact-button');

var marginMap = new Map();

marginMap.set(homeButton, 0);
marginMap.set(offersButton, -80);
marginMap.set(openButton, -174);
marginMap.set(teamButton, -264);
marginMap.set(contactButton, -354);

// offersButton.addEventListener('click', function(){
// 			console.log('Click on menu');
// 			main.style.marginTop = -80 + 'px';
// 		});

module.exports = function(){
	marginMap.forEach(function(margin, button){
		button.addEventListener('click', function(){
			console.log('Click on menu');
			main.style.marginTop = margin + 'vh';
		});
	});
};
