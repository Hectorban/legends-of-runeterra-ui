'use strict'

const nodecg = require("./utils/nodecg-api-context").get()
const path = require("svg-path-properties");

const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync();
 
const attributes = {fill: 'red', stroke: 'black'};
const options = {x: 0, y: 0, fontSize: 170, anchor: 'top', attributes: attributes};
 
const svg = textToSVG.getD('Alysanne', options);
const properties = new path.svgPathProperties(svg);

console.log(properties.getTotalLength());