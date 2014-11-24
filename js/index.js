'use strict';
var antColony = require('AntColony');
var isCanvasAvailable = require('./canvas-detect.js');


if(isCanvasAvailable()){
    antColony(document.querySelector('main header'));
}
else{
    var fallback = document.querySelector('main header img[hidden]');
    fallback.removeAttribute('hidden');
}
