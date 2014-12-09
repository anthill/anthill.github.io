'use strict';

var _antColony = require('AntColony');

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

var helpText = "Hereunder are listed the main functions you can use in this terminal:\
	<br/>'help': display help message\
	<br/>'speed #': change ants speed to # \
	<br/>'nbAnts #': change ants number to # \
	<br/>'repSize #': change repulsion size to # \
	<br/>'repSpeed #': change repulsion speed to # \
	<br/>'nbRand #': change random points number to # \
	<br/>'nbStart #': change start points number to # \
	<br/>'reset': reset with default options \
	"

module.exports = function(string, options, antColony){
	var input = string.split(' ');

	switch (input[0]){

		case 'speed':
			if (!checkLength(input, 1))
				return 'This function needs ' + 1 + ' argument';
			if (!checkFloat(input[1], 0.0005, 0.005))
				return 'This function needs a number between ' + 0.0005 + ' and ' + 0.005;

			Object.assign(options, {velocity: parseFloat(input[1])});
			console.log("options :", options);
			antColony.changeOptions(options);

			break;

		case 'nbAnts':
			if (!checkLength(input, 1))
				return 'This function needs ' + 1 + ' argument';
			if (!checkInt(parseFloat(input[1]), 1, 10000))
				return 'This function needs an integer between ' + 1 + ' and ' + 10000;

			Object.assign(options, {nbAnts: parseInt(input[1])});
			console.log("options :", options);
			antColony.changeOptions(options);

			break;

		case 'nbStart':
			if (!checkLength(input, 1))
				return 'This function needs ' + 1 + ' argument';
			if (!checkInt(parseFloat(input[1]), 1, 500))
				return 'This function needs an integer between ' + 1 + ' and ' + 500;

			Object.assign(options, {nbStart: parseInt(input[1])});
			console.log("options :", options);
			antColony.reset(options);

			break;

		case 'nbRand':
			if (!checkLength(input, 1))
				return 'This function needs ' + 1 + ' argument';
			if (!checkInt(parseFloat(input[1]), 0, 10000))
				return 'This function needs an integer between ' + 0 + ' and ' + 10000;

			Object.assign(options, {nbRand: parseInt(input[1])});
			console.log("options :", options);
			antColony.reset(options);

			break;

		case 'repSize':
			if (!checkLength(input, 1))
				return 'This function needs ' + 1 + ' argument';
			if (!checkFloat(input[1], 0.01, 0.1))
				return 'This function needs a number between ' + 0.01 + ' and ' + 0.1;

			Object.assign(options, {repSize: parseFloat(input[1])});
			console.log("options :", options);
			antColony.changeOptions(options);

			break;

		case 'repSpeed':
			if (!checkLength(input, 1))
				return 'This function needs ' + 1 + ' argument';
			if (!checkFloat(input[1], 0.001, 0.01))
				return 'This function needs a number between ' + 0.001 + ' and ' + 0.01;

			Object.assign(options, {repSpeed: parseFloat(input[1])});
			console.log("options :", options);
			antColony.changeOptions(options);

			break;
		
		case 'weight':
			if (!checkLength(input, 1))
				return 'This function needs ' + 1 + ' argument';
			if (!checkInt(parseFloat(input[1]), 1, 1000))
				return 'This function needs an integer between ' + 1 + ' and ' + 1000;

			Object.assign(options, {repSpeed: parseInt(input[1])});
			console.log("options :", options);
			antColony.changeOptions(options);

			break;

		case 'reset':
			antColony.reset(defaultOptions);
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
};