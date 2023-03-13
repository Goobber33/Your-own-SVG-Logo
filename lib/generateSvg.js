const generateSvg = (shape) => {
  // Define the viewBox attribute to set the coordinate system used by the SVG
  const viewBox = '0 0 100 100';

  // Define the SVG element with the viewBox attribute and XML namespace
  const svgElement = `<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;

  // Render the SVG path or polygon for the shape object and add it to the SVG element
  const shapeSvg = shape.render();
  const shapeSvgElement = `${svgElement}${shapeSvg}`;

  // Define the text element to display the logo name
  let logoNameText;
  if (shape.logoShape === 'triangle') {
    logoNameText = `<text
      x="50%"
      y="60%"
      text-anchor="middle"
      fill="${shape.textColor}"
      font-size="1.4rem"
      letter-spacing="2"
      dy=".3em"
      font-family="monospace">${shape.logoName}
    </text>`;
  } else {
    logoNameText = `<text
      x="50%"
      y="50%"
      text-anchor="middle"
      fill="${shape.textColor}"
      font-size="2.3rem"
      letter-spacing="2"
      dy=".3em"
      font-family="monospace">${shape.logoName}
    </text>`;
  }

  // Add the logo name text element to the SVG element and close the SVG element
  const finalSvgElement = `${shapeSvgElement}${logoNameText}</svg>`;

  // Return the SVG element as a string
  return finalSvgElement;
};

// Export the generateSvg function for use in other modules
module.exports = generateSvg;
