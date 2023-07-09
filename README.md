# color-properties

Extends the String prototype with color and text decoration attributes, allowing for easy styling of console output using ANSI escape codes.

## Installation

```bash 
npm install color-properties
```

## Usage

First, import the `colorize` function:

```js
const { colorize } = require('color-properties');
```

Next, run the colorize function to extend the String prototype with color and decoration properties:

```js
colorize();
```

Alternatively you can also extend the string directly:

```js
require('color-properties/colorize');
```

Now, you can use the color and decoration properties directly on string instances. Here's an example:

```js
console.log('Hello World!'.green.bright); // prints "Hello World!" in green and bold style
```

## Styles

The following styles are avainable:

-   `reset`
-   `bright`
-   `dim`
-   `italic`
-   `underline`
-   `inverse`
-   `hidden`
-   `strikethrough`
-   `black`
-   `red`
-   `green`
-   `yellow`
-   `blue`
-   `magenta`
-   `cyan`
-   `white`
-   `gray`
-   `bgBlack`
-   `bgRed`
-   `bgGreen`
-   `bgYellow`
-   `bgBlue`
-   `bgMagenta`
-   `bgCyan`
-   `bgWhite`

Refer to the example for combining multiple properties.

## License
MIT