import { parseDMY } from './formatting';

export const calculate_age = (dob) => {
  let date = parseDMY(dob);
  var diff_ms = Date.now() - date.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
};

export const isLightColor = (color) => {
  // Variables for red, green, blue values
  var r, g, b, hsp;

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );

    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  return hsp > 127.5;
};

export const clearAllLocalStorage = () => {
  localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE_KEY);
};

export const setLocalStorage = (key, value) => {
  const ls = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY)
  );

  if (value !== undefined) {
    localStorage.setItem(
      process.env.REACT_APP_LOCAL_STORAGE_KEY,
      JSON.stringify({
        ...ls,
        [key]: value.toString(),
      })
    );
  }
};
