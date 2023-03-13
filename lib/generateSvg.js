// This function generates an SVG element with a given shape, logo name, and text color

const generateSvg = (shape) => {

  // The viewBox attribute defines the coordinate system used by the SVG element

  return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.render()} // This calls the render() method of the shape object to generate the SVG for the shape
      <text
        x="50%" // This centers the text horizontally in the SVG
        y="${shape.logoShape !== 'triangle' ? '50%' : '40%'}" //
        text-anchor="middle"
        fill="${shape.textColor}"
        font-size="2.3rem" letter-spacing="2" dy=".3em"
        font-family="monospace">${shape.logoName} //
      </text>
    </svg>
  `;
};

module.exports = generateSvg;

// Export the generateSvg function for use in other modules
