# rollup-absolute-alias
### Tiny plugin to replace imports after rollup bundle packages
![npm](https://img.shields.io/npm/v/rollup-absolute-alias?style=plastic)
![npm bundle size](https://img.shields.io/bundlephobia/min/rollup-absolute-alias?label=size&style=plastic)
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