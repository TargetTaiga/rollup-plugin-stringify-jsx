import stringifyJsx from 'rollup-plugin-stringify-jsx';

export default [{
    input: 'index.js',
    output: {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true
    },
    plugins: [
        stringifyJsx()
    ]
}];