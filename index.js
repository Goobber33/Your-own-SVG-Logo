const inquirer = require('inquirer');
const fs = require('fs');
const { LogoShape, CircleShape, SquareShape, TriangleShape, DiamondShape } = require('./lib/shapes');
const generateSvg = require('./lib/generateSvg');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'logoText',
      message: 'Please enter up to three characters for your logo text:',
      validate: (input) => {
        if (input.length > 3) {
          return 'Please enter no more than three characters.';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: `Please enter a color keyword or a hexadecimal number for the text color:`
    },
    {
      type: 'input',
      name: 'bgColor',
      message: `Please enter a color keyword or a hexadecimal number for the background color:`
    },
    {
      type: 'list',
      name: 'logoShape',
      message: `Please choose a shape for your logo:`,
      choices: [
        'circle',
        'square',
        'triangle',
        'diamond'
      ]
    }
  ])
