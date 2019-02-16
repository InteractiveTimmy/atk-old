function convertToArray(value)
{
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
        output.push(parseInt(output[i] * output[i], 16));
      }
    }
  }

  return output;
}

export default (value, colorA = '#000', colorB = '#fff') => {

  let output = '#';

  const parsedColorA = convertToArray(colorA);
  const parsedColorB = convertToArray(colorB);

  for (let a = 0; a < colorA.length; a += 1) {
    parsedColorA.push(colorA.charAt(a));
  }

  for (let b = 0; b < colorB.length; b += 1) {
    parsedColorB.push(colorB.charAt(b));
  }

  return output;
};