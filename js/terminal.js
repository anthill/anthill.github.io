'use strict';

module.exports = function(){

	var terminal = document.getElementById('terminal');

	var baseText = '<br/><span class="prompt">ants&gt;&nbsp;</span>';
	var cursor = '<span class="cursor">&nbsp;</span>';
	var baseTextLength = baseText.length;
	var cursorLength = cursor.length;

	var helpText = "<br/>Hereunder are listed the main functions you can use in this terminal:<br/>'help': display help message<br/>'romain': describe who is romain";

	var history = [];
	var current = 0;

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
				keyHandler(event);
				// terminal.scrollTop -= 19; // 19 should be the actual computed font-size
				break;
			case 39: // right
				event.preventDefault();
				break;
			case 40: // bottom
				event.preventDefault();
				keyHandler(event);
				// terminal.scrollTop += 19; // 19 should be the actual computed font-size
				break;

			default:
				break;
		}
		
	}

	function checkLength(array, nb){
		return (array.length != nb);
	}

	function checkInt(nb, value1, value2){
		return (!isNaN(parseInt(nb)) && nb === parseInt(nb) && (nb >= value1) && (nb <= value2));
	}

	function checkFloat(nb, value1, value2){
		nb = parseFloat(nb);
		return ((!isNaN(nb)) && (nb >= value1) && (nb <= value2));
	}

	function inputAnalysis(string){
		var input = string.split(' ');

		switch (input[0]){

			case 'speed':
				if (!checkLength(input, 1))
					return '<br/>This function needs ' + 1 + ' argument';
				if (!checkFloat(input[1], 1.0, 10.0))
					return '<br/>This function needs a float between ' + 1.0 + ' and ' + 10.0;
				
				// setVariables(input[1], 0, 0, 0, 0, 0);
				return '<br/>OK';

			case 'nbAnts':
				if (!checkLength(input, 1))
					return '<br/>This function needs ' + 1 + ' argument';
				if (!checkInt(input[1], 1, 4000))
					return '<br/>This function needs an integer between ' + 1 + ' and ' + 4000;
				
				// setVariables(0, input[1], 0, 0, 0, 0);
				return '<br/>OK';

			case 'nbStarts':
				break;

			case 'nbRand':
				break;

			case 'repSize':
				break;

			case 'repSpeed':
				break;
			
			case 'weight':
				break;

			case 'set':
				break;

			case 'help':
				return helpText;
				break;

			case 'romain':
				return "<br/>That's a great guy !" ;
				break;

			case 'defaults':
				return defaultText;
				break;

			default:
				return "<br/>I don't understand... Type 'help' for infos";
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
				var text = event.target.innerHTML.slice(0, - cursorLength);
				event.target.innerHTML = text.slice(0, -1) + cursor;
				// console.log('cursor :', cursor);
				// console.log('baseText :', baseText);
				break;
			case 13: // return
				var content = event.target.innerHTML;
				var length = content.length - cursorLength;

				var previousContent = content.slice(0, length);

				var input = content.slice(baseTextLength+1, length); // hit 'enter' seems to add 1 to string
				
				history.push(input);
				current = history.length;
				// console.log('raw :', content.slice(baseTextLength+1, length));
				// console.log('Rcontent :', content + baseText);

				// Check for keywords and launch appropriate function
				var answer = inputAnalysis(input);
				
				event.target.innerHTML = previousContent + answer + baseText + cursor;
				baseTextLength = previousContent.length + answer.length + baseText.length - 3; // -3 is a hack used to compensate count malfunction
				terminal.scrollTop = terminal.scrollHeight;
				break;
			case 38: // up
				var content = event.target.innerHTML;
				var previousContent = content.slice(0, baseTextLength + 1);

				current -= 1;

				if (current < 0)
					current = 0;

				event.target.innerHTML = previousContent + history[current] + cursor;
				break;

			case 40: // down
				var content = event.target.innerHTML;
				var previousContent = content.slice(0, baseTextLength + 1);

				current += 1;

				console.log('current ', current);
				console.log('history length ', history.length);

				if (current >= history.length)
					current = history.length - 1;

				event.target.innerHTML = previousContent + history[current] + cursor;
				break;
			
			default:
				var content = event.target.innerHTML;
				var length = content.length - cursorLength;
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

