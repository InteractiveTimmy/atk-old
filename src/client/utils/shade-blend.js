function convertToArray(value) {
  const output = [];

  if (value.length === 7) {
    for (let i = 0; i < value.length; i += 1) {
      if (i !== 0) {
        output.push(value.charAt(i));
        output[output.length - 1] = parseInt(output[output.length - 1], 16);
      }
    }

    output[0] *= output[1];
    output[1] = output[2] * output[3];
    output[2] = output[4] * output[5];

    output.splice(0, -3);
  } else if (value.length === 4) {
    for (let i = 0; i < value.length; i += 1) {
      if (i !== 0) {
        output.push(parseInt(value.charAt(i) + value.charAt(i), 16));
      }
    }
  }

  return output;
}

function createRGBString(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

export default (value, colorA = '#000', colorB = '#fff') => {
  const parsedColorA = convertToArray(colorA);
  const parsedColorB = convertToArray(colorB);
  const outputColor = [];

  for (let i = 0; i < 3; i += 1) {
    parsedColorA[i] *= (1.0 - value);
    parsedColorB[i] *= value;
    outputColor.push(parsedColorA[i] + parsedColorB[i]);
  }

  return createRGBString(...outputColor);
};
