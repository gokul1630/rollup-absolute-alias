# rollup-absolute-alias
### Tiny plugin to replace imports after rollup bundle packages

## Installation
```
npm install rollup-absolute-alias
```

## Usage
```
// rollup.config.js
const absoluteAlias = require('rollup-absolute-alias');
 
export default {
  input: './src/index.js',
  plugins: [
      absoluteAlias({
        path: 'dist', // by default, it will look for the 'dist' folder but you can also give a custom output folder
        entries: [{ from: /@\//g, to: './' }], // you can give regular expressions to find imports
        extension: ['.tsx', '.ts'], // by default it will look for .js & .jsx files
      })
  ],
};
```