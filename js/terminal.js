'use strict';

module.exports = function(){

	var terminal = document.getElementById('terminal');

	var suppr = 34;
	var baseText = '<br><span class="prompt">ants&gt;&nbsp;</span>';
	var cursor = '<span class="cursor">&nbsp;</span>';

	function preventEscape(event){

		var key = event.keyCode;
		console.log('key :', key);

		switch (key){
			case 8: // backspace
				event.preventDefault();
				keyHandler(event);
				break;
			case 32: // spacebar
				event.preventDefault();
				keyHandler(event);
				break;
			case 37: // left
				event.preventDefault();
				break;
			case 38: // up
				event.preventDefault();
				terminal.scrollTop -= 19; // 19 should be the actual computed font-size
				break;
			case 39: // right
				event.preventDefault();
				break;
			case 40: // bottom
				event.preventDefault();
				terminal.scrollTop += 19; // 19 should be the actual computed font-size
				break;

			default:
				break;
		}
		
	}

	function keyHandler(event){

		var key = (event.which) ? event.which : 
					((event.charCode) ? event.charCode : 
						((event.keyCode) ? event.keyCode : 0));

		console.log('key pressed ', key);

		switch (key){
			case 8: // backspace
				var text = event.target.innerHTML.slice(0, -suppr);
				event.target.innerHTML = text.slice(0, -1) + cursor;
				// console.log('cursor :', cursor);
				// console.log('baseText :', baseText);
				break;
			case 13: // return
				var content = event.target.innerHTML;
				var length = content.length - suppr;

				var content = content.slice(0, length);

				// console.log('Rcontent :', content + baseText);
				
				event.target.innerHTML = content + baseText + cursor;
				terminal.scrollTop = terminal.scrollHeight;

				break;
			
			default:
				var content = event.target.innerHTML;
				var length = content.length - suppr;
				// console.log('content :', content);
				var content = content.slice(0, length);
				// console.log('cursor :', cursor);
				// console.log('content :', content);

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

