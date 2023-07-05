const colors = {
  reset: 0,
  bold: 1,
  dim: 2,
  italic: 3,
  underline: 4,
  inverse: 7,
  hidden: 8,
  strikethrough: 9,
  black: 30,
  red: 31,
  green: 32,
  yellow: 33,
  blue: 34,
  magenta: 35,
  cyan: 36,
  white: 37,
  gray: 90,
  bgBlack: 40,
  bgRed: 41,
  bgGreen: 42,
  bgYellow: 43,
  bgBlue: 44,
  bgMagenta: 45,
  bgCyan: 46,
  bgWhite: 47,
};

function colorize() {
  for (const color in colors) {
    if (Object.prototype.hasOwnProperty.call(colors, color)) {
      Object.defineProperty(String.prototype, color, {
        get() {
          return '\x1b[' + colors[color] + 'm' + this + '\x1b[' + colors.reset + 'm';
        },
        configurable: true,
      });
    }
  }
}

module['exports'] = { colorize };