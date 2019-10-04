import resolve from 'rollup-plugin-node-resolve';

export default [{
    input: 'src/index.js',
    output: {
        file: 'dist/stringify-jsx.es6.js',
        format: 'esm'
    },
    plugins: [
        resolve()
    ]
}, {
    input: 'src/index.js',
    output: {
        file: 'dist/stringify-jsx.js',
        format: 'cjs'
    },
    plugins: [
        resolve()
    ]
}];