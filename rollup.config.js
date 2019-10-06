import resolve from 'rollup-plugin-node-resolve';

export default [{
    input: 'src/index.js',
    output: {
        file: 'dist/stringify-jsx.js',
        format: 'cjs'
    },
    plugins: [
        resolve()
    ]
}];