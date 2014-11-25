'use strict';


module.exports = function(){

	var terminal = document.getElementById('terminal');

	function keyHandler(event){
		var key = event.keyCode;
		// console.log('key ', String.fromCharCode(parseInt(key)));
		event.target.innerHTML += String.fromCharCode(parseInt(key));
	}

	function activateTerminal(event){
		event.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		event.target.style.color = 'white';
		event.target.focus();
		event.target.addEventListener('keypress', keyHandler);
	}

	function deactivateTerminal(event){
		event.target.style.backgroundColor = 'rgba(255, 255, 255, 0)';
		event.target.style.color = 'black';
		event.target.blur();
		event.target.removeEventListener('keypress', keyHandler);
	}

	terminal.addEventListener('mouseover', activateTerminal);
	terminal.addEventListener('mouseout', deactivateTerminal);
};

