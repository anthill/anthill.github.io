'use strict';
// var $ = require('jQuery');

module.exports = function(){

	var terminal = document.getElementById('terminal');

	function preventEscape(event){
		if (event.keyCode === 8)
			event.preventDefault();
	}

	function keyHandler(event){
		var key = parseInt(event.keyCode);

		console.log('key pressed ', key);

		if( key === 8 ){ // 8 == backspace
			var text = event.target.innerHTML;
			console.log('text ', text.splice(text.length, -1));
			event.target.innerHTML = text.splice(text.length, -1);
		}

		if( key === 13 ){ // 13 == return
			event.preventDefault();
			var text = event.target.innerHTML;
			console.log('text ', text.splice(text.length, -1));
			event.target.innerHTML = text.splice(text.length, -1);
		}
		
		if( key === 32 ) // 32 == spacebar
			event.preventDefault();
		// if( key === 32 ) // 32 == spacebar
		// 	event.preventDefault();

		event.target.innerHTML += String.fromCharCode(key);
	}

	function activateTerminal(event){
		event.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		event.target.style.color = 'white';
		event.target.focus();
		event.target.addEventListener('keypress', keyHandler);
		window.addEventListener('keydown', preventEscape);

		// $(document).bind("keypress", escapeBehaviour);
	}

	function deactivateTerminal(event){
		event.target.style.backgroundColor = 'rgba(255, 255, 255, 0)';
		event.target.style.color = 'black';
		event.target.blur();
		event.target.removeEventListener('keypress', keyHandler);
		window.removeEventListener('keydown', preventEscape);

		// $(document).unbind("keypress", escapeBehaviour);
	}

	terminal.addEventListener('mouseover', activateTerminal);
	terminal.addEventListener('mouseout', deactivateTerminal);
};

