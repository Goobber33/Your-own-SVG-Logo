// Import the LogoShape classes with new names for each one.
const { LogoShape: LShape, CircleShape: CShape, SquareShape: SShape, TriangleShape: TShape, DiamondShape: DShape } = require('./shapes');

// Import the generateSvg function.
const generateSvg = require('./generateSvg');

// Begin tests for the LogoShape class.
describe('LogoShape', () => {
  // Test that an error is thrown when logo text is more than 3 characters.
  test('should throw an error when logo text is more than 3 characters', () => {
    expect(() => {
      new LShape({ logoText: 'abcd', textColor: 'red', bgColor: 'white' });
    }).toThrow('Logo text cannot be more than 3 characters');
  });

  // Test that an error is thrown when text color is invalid.
  test('should throw an error when text color is invalid', () => {
    expect(() => {
      new LShape({ logoText: 'ABC', textColor: 'invalid', bgColor: 'white' });
    }).toThrow('Please enter a valid CSS color keyword or hexadecimal color code');
  });

  // Test that an error is thrown when background color is invalid.
  test('should throw an error when background color is invalid', () => {
    expect(() => {
      new LShape({ logoText: 'ABC', textColor: 'red', bgColor: 'invalid' });
    }).toThrow('Please enter a valid CSS color keyword or hexadecimal color code');
  });
});

// Begin tests for the generateSvg function.
describe('generateSvg', () => {
  // Test that a circle logo SVG is generated correctly.
  test('should generate a circle logo svg', () => {
    const circleShape = new CShape({ logoText: 'ABC', textColor: 'red', bgColor: 'white' });
    const svg = generateSvg(circleShape);
    expect(svg).toMatch('<circle');
    expect(svg).toMatch('cx="50" cy="50" r="40"');
    expect(svg).toMatch(`fill="${circleShape.bgColor}"`);
    expect(svg).toMatch(`stroke="${circleShape.textColor}"`);
  });

  // Test that a square logo SVG is generated correctly.
  test('should generate a square logo svg', () => {
    const squareShape = new SShape({ logoText: 'ABC', textColor: 'red', bgColor: 'white' });
    const svg = generateSvg(squareShape);
    expect(svg).toMatch('<rect');
    expect(svg).toMatch('x="20" y="20" width="60" height="60"');
    expect(svg).toMatch(`fill="${squareShape.bgColor}"`);
    expect(svg).toMatch(`stroke="${squareShape.textColor}"`);
  });

  // Test that a triangle logo SVG is generated correctly.
  test('should generate a triangle logo svg', () => {
    const triangleShape = new TShape({ logoText: 'ABC', textColor: 'red', bgColor: 'white' });
    const svg = generateSvg(triangleShape);
    expect(svg).toMatch('<polygon');
    expect(svg).toMatch('points="50,10 90,90 10,90"');
    expect(svg).toMatch(`fill="${triangleShape.bgColor}"`);
    expect(svg).toMatch(`stroke="${triangleShape.textColor}"`);
  });

// Test that a diamond logo SVG is generated correctly.
test('should generate a diamond logo svg', () => {
  const diamondShape = new DShape({ logoText: 'ABC', textColor: 'red', bgColor: 'white' });
  const svg = generateSvg(diamondShape);
  expect(svg).toMatch('<polygon');
  expect(svg).toMatch('points="50,5 95,50 50,95 5,50"');
  expect(svg).toMatch(`fill="${diamondShape.bgColor}"`); // Modified line
  expect(svg).toMatch(`stroke="${diamondShape.textColor}"`);
});
});