const colors = {
  reset: d(0, 0),
  bright: d(1, 22),
  dim: d(2, 22),
  italic: d(3, 23),
  underline: d(4, 24),
  inverse: d(7, 27),
  hidden: d(8, 28),
  strikethrough: d(9, 29),
  black: d(30, 39),
  red: d(31, 39),
  green: d(32, 39),
  yellow: d(33, 39),
  blue: d(34, 39),
  magenta: d(35, 39),
  cyan: d(36, 39),
  white: d(37, 39),
  gray: d(90, 39),
  bgBlack: d(40, 49),
  bgRed: d(41, 49),
  bgGreen: d(42, 49),
  bgYellow: d(43, 49),
  bgBlue: d(44, 49),
  bgMagenta: d(45, 49),
  bgCyan: d(46, 49),
  bgWhite: d(47, 49),
  bgGray: d(100, 49),
  bold: d(1, 22),
};

function d(open, close) {
  open = '\x1b[' + open + 'm';
  close =  '\x1b[' + close + 'm';
  return { open, close };
}

function colorize() {
  for (const color in colors) {
    if (Object.prototype.hasOwnProperty.call(colors, color)) {
      Object.defineProperty(String.prototype, color, {
        get() {
          return colors[color].open + this + colors[color].close;
        },
        configurable: true,
      });
    }
  }
}

module['exports'] = { colorize };