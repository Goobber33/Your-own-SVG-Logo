const { LogoShape: LShape, CircleShape: CShape, SquareShape: SShape, TriangleShape: TShape, DiamondShape: DShape } = require('./lib/shapes');
const generateSvg = require('./lib/generateSvg');

describe('LogoShape', () => {
  test('should throw an error when logo text is more than 3 characters', () => {
    expect(() => {
      new LShape({ logoText: 'abcd', textColor: 'red', bgColor: 'white' });
    }).toThrow('Logo text cannot be more than 3 characters');
  });

  test('should throw an error when text color is invalid', () => {
    expect(() => {
      new LShape({ logoText: 'ABC', textColor: 'invalid', bgColor: 'white' });
    }).toThrow('Please enter a valid CSS color keyword or hexadecimal color code');
  });

  test('should throw an error when background color is invalid', () => {
    expect(() => {
      new LShape({ logoText: 'ABC', textColor: 'red', bgColor: 'invalid' });
    }).toThrow('Please enter a valid CSS color keyword or hexadecimal color code');
  });
});

describe('generateSvg', () => {
  test('should generate a circle logo svg', () => {
    const circleShape = new CShape({ logoText: 'ABC', textColor: 'red', bgColor: 'white' });
    const svg = generateSvg(circleShape);
    expect(svg).toMatch('<circle');
    expect(svg).toMatch('cx="50" cy="50" r="40"');
    expect(svg).toMatch(`fill="${circleShape.bgColor}"`);
    expect(svg).toMatch(`stroke="${circleShape.textColor}"`);
  });
});
