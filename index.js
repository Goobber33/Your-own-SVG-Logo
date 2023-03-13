const inquirer = require('inquirer');
const fs = require('fs');
const { LogoShape, CircleShape, SquareShape, TriangleShape, DiamondShape } = require('./lib/shapes');
const generateSvg = require('./lib/generateSvg');

// Inquirer prompts to ask the user questions about their logo

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
  .then((answers) => {
    const outputFilePath = './examples/logo.svg';

    // Determine the shape class to use based on user selection
    let shapeClass;
    switch (answers.logoShape) {
      case 'circle':
        shapeClass = CircleShape;
        break;
      case 'square':
        shapeClass = SquareShape;
        break;
      case 'triangle':
        shapeClass = TriangleShape;
        break;
      case 'diamond':
        shapeClass = DiamondShape;
        break;
      default:
        throw new Error('Invalid shape selected');
    }

    // Create a new instance of the selected shape class
    const logoShape = new shapeClass({
      logoText: answers.logoText,
      textColor: answers.textColor,
      bgColor: answers.bgColor
    });

    // Generate the svg logo here.
    fs.mkdir('./examples', { recursive: true }, (err) => {
      if (err) throw err;
      fs.writeFile(outputFilePath, generateSvg(logoShape), (err) =>
        err ? console.error(err) : console.log(`Generated ${outputFilePath}`)
      );
    });
  })
  .catch((err) => console.error(err));