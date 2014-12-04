'use strict';
var _antColony = require('AntColony');

module.exports = function(container){

	var defaultOptions = {
		velocity: 0.001,
		nbAnts: 4000,
		weight: 10,
		repSize: 0.05,
		repSpeed: 0.002,
		nbStart: 20,
		nbRand: 500
		// obj par defaut
	};

	var options = defaultOptions;

	// launch animation
	var antColony = _antColony(container, defaultOptions);


	var terminal = document.getElementById('terminal');

	var baseText = '<span class="prompt">ants&gt;&nbsp;</span>';
	var cursor = '<span class="cursor">&nbsp;</span>';
	// var baseTextLength = baseText.length; // 5 is for the <br/>
	var cursorLength = cursor.length;

	var helpText = "Hereunder are listed the main functions you can use in this terminal:<br/>'help': display help message<br/>'romain': describe who is romain";

	var history = [''];
	var currentLine = 0;
	var letterCount = 0;

	function preventEscape(event){

		var key = event.keyCode;
		// console.log('key :', key);

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
		console.log("1 :", !isNaN(parseInt(nb)));
		console.log("2 :", nb === parseInt(nb));
		console.log("3 :", (nb >= value1));
		console.log("4 :", (nb <= value2));
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
				if (!checkFloat(input[1], 0.0005, 0.005))
					return '<br/>This function needs a float between ' + 0.0005 + ' and ' + 0.005;

				Object.assign(options, {velocity: parseFloat(input[1])});
				options.nbStart = undefined;
				options.nbRand = undefined;
				console.log("options :", options);
				antColony.changeOptions(options);

				break;

			case 'nbAnts':
				if (!checkLength(input, 1))
					return 'This function needs ' + 1 + ' argument';
				if (!checkInt(parseFloat(input[1]), 1, 10000))
					return 'This function needs an integer between ' + 1 + ' and ' + 10000;

				Object.assign(options, {nbAnts: parseInt(input[1])});
				options.nbStart = undefined;
				options.nbRand = undefined;
				console.log("options :", options);
				antColony.changeOptions(options);

				break;

			case 'nbStart':
				if (!checkLength(input, 1))
					return 'This function needs ' + 1 + ' argument';
				if (!checkInt(parseFloat(input[1]), 1, 500))
					return 'This function needs an integer between ' + 1 + ' and ' + 500;

				Object.assign(options, {nbStart: parseInt(input[1])});
				if (options.nbRand === undefined)
					options.nbRand = defaultOptions.nbRand;
				console.log("options :", options);
				antColony.changeOptions(options);

				break;

			case 'nbRand':
				if (!checkLength(input, 1))
					return 'This function needs ' + 1 + ' argument';
				if (!checkInt(parseFloat(input[1]), 0, 10000))
					return 'This function needs an integer between ' + 0 + ' and ' + 10000;

				Object.assign(options, {nbRand: parseInt(input[1])});
				if (options.nbStart === undefined)
					options.nbStart = defaultOptions.nbRand;
				console.log("options :", options);
				antColony.changeOptions(options);

				break;

			case 'repSize':
				if (!checkLength(input, 1))
					return 'This function needs ' + 1 + ' argument';
				if (!checkFloat(input[1], 0.01, 0.1))
					return 'This function needs an integer between ' + 0.01 + ' and ' + 0.1;

				Object.assign(options, {repSize: parseFloat(input[1])});
				options.nbStart = undefined;
				options.nbRand = undefined;
				console.log("options :", options);
				antColony.changeOptions(options);

				break;

			case 'repSpeed':
				if (!checkLength(input, 1))
					return 'This function needs ' + 1 + ' argument';
				if (!checkFloat(input[1], 0.001, 0.01))
					return 'This function needs an integer between ' + 0.001 + ' and ' + 0.01;

				Object.assign(options, {repSpeed: parseFloat(input[1])});
				options.nbStart = undefined;
				options.nbRand = undefined;
				console.log("options :", options);
				antColony.changeOptions(options);

				break;
			
			case 'weight':
				if (!checkLength(input, 1))
					return 'This function needs ' + 1 + ' argument';
				if (!checkInt(parseFloat(input[1]), 1, 1000))
					return 'This function needs an integer between ' + 1 + ' and ' + 1000;

				Object.assign(options, {repSpeed: parseInt(input[1])});
				options.nbStart = undefined;
				options.nbRand = undefined;
				console.log("options :", options);
				antColony.changeOptions(options);

				break;

			case 'set':
				break;

			case 'help':
				return helpText;
				break;

			case 'romain':
				return "That's a great guy !" ;
				break;

			case 'defaults':
				return defaultText;
				break;

			default:
				return "I don't understand... Type 'help' for infos";
				break;
		}
	}

	function keyHandler(event){

		var key = (event.which) ? event.which : 
					((event.charCode) ? event.charCode : 
						((event.keyCode) ? event.keyCode : 0));

		// console.log('key pressed ', key);

		var line = document.getElementById('currentLine');

		switch (key){
			case 8: // backspace
				if (letterCount > 0) { // check if there are letters to delete
					var text = line.innerHTML.slice(0, - cursorLength);
					line.innerHTML = text.slice(0, -1) + cursor;

					letterCount --;
					// console.log('letter Count :', letterCount);
					// console.log('cursor :', cursor);
					// console.log('baseText :', baseText);
				}
				
				break;
			case 13: // return
				var content = line.innerHTML;
				var length = content.length - cursorLength;

				line.innerHTML = content.slice(0, length);

				// var previousContent = content.slice(0, length);

				var input = content.slice(baseText.length, length); // hit 'enter' seems to add 1 to string
				console.log('input :', input);
				
				history.push(input);
				currentLine = history.length;
				letterCount = 0;
				// console.log('letter Count :', letterCount);
				// console.log('raw :', content.slice(baseTextLength+1, length));
				// console.log('Rcontent :', content + baseText);

				// Check for keywords and launch appropriate function
				var answer = inputAnalysis(input);
				
				var newLine = document.createElement('div');
				newLine.id = 'currentLine';
				newLine.innerHTML = baseText + cursor;
				line.id = '';
			
				if (answer){
					var answerLine = document.createElement('div');
					answerLine.innerHTML = answer;
					terminal.appendChild(answerLine);
				}

				terminal.appendChild(newLine);
				// console.log('newline :', newLine.innerHTML);
				terminal.scrollTop = terminal.scrollHeight;

				break;
			case 38: // up
				var content = line.innerHTML;

				currentLine -= 1;

				if (currentLine < 0)
					currentLine = 0;

				letterCount = history[currentLine].length;
				// console.log('letter Count :', letterCount);

				line.innerHTML = baseText + history[currentLine] + cursor;
				break;

			case 40: // down
				var content = line.innerHTML;

				currentLine += 1;

				// console.log('current ', currentLine);
				// console.log('history length ', history.length);

				if (currentLine >= history.length)
					currentLine = history.length - 1;

				letterCount = history[currentLine].length;
				// console.log('letter Count :', letterCount);

				line.innerHTML = baseText + history[currentLine] + cursor;
				break;
			
			default:
				var content = line.innerHTML;
				var length = content.length - cursorLength;
				// console.log('content :', content);
				var content = content.slice(0, length);
				// console.log('cursor :', cursor);
				// console.log('content :', content);
				letterCount ++;

				line.innerHTML = content + String.fromCharCode(key) + cursor;

				break;
		}
	}

	function activateTerminal(event){
		event.target.focus();
		
		event.target.addEventListener('keypress', keyHandler);
		window.addEventListener('keydown', preventEscape);
		event.stopPropagation();
	}

	function deactivateTerminal(event){
		event.target.blur();

		event.target.removeEventListener('keypress', keyHandler);
		window.removeEventListener('keydown', preventEscape);
		event.stopPropagation();
	}

	terminal.addEventListener('mouseover', activateTerminal);
	terminal.addEventListener('mouseout', deactivateTerminal);
};

