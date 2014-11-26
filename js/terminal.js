'use strict';

module.exports = function(){

	var terminal = document.getElementById('terminal');

	var suppr = 34;
	var baseText = '<br><span class="prompt">ants&gt;&nbsp;</span><span class="cursor">&nbsp;</span>';

	function preventEscape(event){

		var key = parseInt(event.keyCode);

		switch (key){
			case 8: // backspace
				event.preventDefault();
				keyHandler(event);
				break;
			case 32: // return
				event.preventDefault();
				keyHandler(event);
				break;
			default:
				break;
		}
		
	}

	function keyHandler(event){

		var key = parseInt(event.keyCode);

		console.log('key pressed ', key);

		switch (key){
			case 8: // backspace
				var text = event.target.innerHTML;
				event.target.innerHTML = text.slice(0, -1);
				break;
			case 13: // return
				var content = event.target.innerHTML;
				var length = content.length - suppr;

				var content = content.slice(0, length);

				console.log('Rcontent :', content + baseText);
				
				event.target.innerHTML = content + baseText;

				break;
			// case 13:
			// case 13:
			// case 32:
			// case 32: // spacebar

			default:
				var content = event.target.innerHTML;
				var length = content.length - suppr;
				
				var cursor = content.slice(-suppr);

				console.log('content :', content);
				
				var content = content.slice(0, length);

				console.log('cursor :', cursor);
				console.log('content :', content);

				event.target.innerHTML = content + String.fromCharCode(key) + cursor;
				break;
		}
	}

	function activateTerminal(event){
		event.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		event.target.style.color = 'white';
		event.target.focus();
		event.target.addEventListener('keypress', keyHandler);
		window.addEventListener('keydown', preventEscape);
	}

	function deactivateTerminal(event){
		event.target.style.backgroundColor = 'rgba(255, 255, 255, 0)';
		event.target.style.color = 'black';
		event.target.blur();
		event.target.removeEventListener('keypress', keyHandler);
		window.removeEventListener('keydown', preventEscape);
	}

	terminal.addEventListener('mouseover', activateTerminal);
	terminal.addEventListener('mouseout', deactivateTerminal);
};

