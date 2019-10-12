# rollup-plugin-stringify-jsx
[Stringify-jsx](https://github.com/TargetTaiga/stringify-jsx) plugin for rollup.

## Quick start
```
npm i --save-dev rollup-plugin-stringify-jsx
```
```js
import stringifyJsx from 'rollup-plugin-stringify-jsx';

export default {
    input: ['src/index.js'],
    output: {
        file: 'build/index.js'
    },
    plugins: [
        stringifyJsx( /* stringify-jsx options */ ),
    ]
};
```

## TODO
- [x] Source maps
- [ ] Tests
