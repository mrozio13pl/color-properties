declare global {
  interface String {
    reset: string;
    bright: string;
    dim: string;
    italic: string;
    underline: string;
    inverse: string;
    hidden: string;
    strike: string;
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
    gray: string;
    bgBlack: string;
    bgRed: string;
    bgGreen: string;
    bgYellow: string;
    bgBlue: string;
    bgMagenta: string;
    bgCyan: string;
    bgWhite: string;
    /** @deprecated `bold` has been deprecated in favor of `bright`. */
    bold: string;
  }
}

/**
 * Extends the String prototype with color and text decoration attributes
 * for styling console output using ANSI escape codes.
 *
 * Example usage:
 * ```
 * const { colorize } = require('color-properties');
 * colorize();
 * 
 * console.log('Hello World! 👋'.green.bright);
 * ```
 *
 * @returns {void}
 */
declare function colorize(): void;

export { colorize };