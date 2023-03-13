// Import a list of CSS named colors
const namedColors = require('color-name');

// The LogoShape class represents a logo shape with a name, text color, and background color
class LogoShape {
  constructor({ logoText, textColor, bgColor, logoShape }) {

    // Set the shape type (circle, square, triangle, or diamond)

    this.logoShape = logoShape;
    this.validateTextInput(logoText);
    this.logoName = logoText.trim(); // Trim the logoText input before assigning it to this.logoName
    this.validateColorInput(textColor);
    this.textColor = textColor;
    this.validateColorInput(bgColor);
    this.bgColor = bgColor;
  }

  validateInputNotEmpty(input) {
    if (!input) throw new Error('Input cannot be empty');
  }

  // Validate that a logo name is not empty and does not exceed 3 characters
  validateTextInput(input) {
    this.validateInputNotEmpty(input);

    if (input.length > 3) {
      throw new Error('Logo text cannot be more than 3 characters');
    }
  }

  // Validate that a color is not empty and is a valid CSS named color or hexadecimal color code
  validateColorInput(input) {
    this.validateInputNotEmpty(input);

    input = input.toLowerCase();

    if (LogoShape.isValidNamedColor(input)) {
      return;
    }

    if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(input)) {
      return;
    }

    throw new Error('Please enter a valid CSS color keyword or hexadecimal color code');
  }

  // Render the logo shape as an SVG element

  render() {
    throw new Error('Child shapes must implement a render() method');
  }

  // Check if a string is a valid CSS named color

  static isValidNamedColor(color) {
    return namedColors[color.toLowerCase()] !== undefined;
  }
}

class CircleShape extends LogoShape {
  // The constructor function initializes properties for the logo text, text color, background color, and logo shape.
  // It sets the logo shape to 'circle' and passes the other properties to the parent constructor.
  constructor({ logoText, textColor, bgColor }) {
    super({ logoText, textColor, bgColor, logoShape: 'circle' });
  }

  // The render function returns an SVG string representation of a circle shape.
  render() {
    return `<circle cx="50" cy="50" r="40" fill="${this.bgColor}" stroke="${this.textColor}" stroke-width="5" />`;
  }
}

class SquareShape extends LogoShape {
  // The constructor function initializes properties for the logo text, text color, background color, and logo shape.
  // It sets the logo shape to 'square' and passes the other properties to the parent constructor.
  constructor({ logoText, textColor, bgColor }) {
    super({ logoText, textColor, bgColor, logoShape: 'square' });
  }

  // The render function returns an SVG string representation of a square shape.
  render() {
    return `<rect x="20" y="20" width="60" height="60" fill="${this.bgColor}" stroke="${this.textColor}" stroke-width="5" />`;
  }
}

class TriangleShape extends LogoShape {
  // The constructor function initializes properties for the logo text, text color, background color, and logo shape.
  // It sets the logo shape to 'triangle' and passes the other properties to the parent constructor.
  constructor({ logoText, textColor, bgColor }) {
    super({ logoText, textColor, bgColor, logoShape: 'triangle' });
  }

  // The render function returns an SVG string representation of a triangle shape.
  render() {
    return `<polygon points="50,10 90,90 10,90" fill="${this.bgColor}" stroke="${this.textColor}" stroke-width="5" />`;
  }
}

// This exports all the classes as an object. 

module.exports = { LogoShape, CircleShape, SquareShape, TriangleShape };
