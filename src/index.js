const stringify = require('stringify-jsx');

module.exports = function stringifyJsx(customOptions = {}, babelTransformOptions = {}) {
    return {
        name: 'stringify-jsx',
        transform(code, id) {
            if (!id.includes('/node_modules/')) {
                babelTransformOptions.sourceFileName = id;
                const result = stringify(code, customOptions, babelTransformOptions);
                return {
                    code: result.code,
                    map: result.map
                };
            }
            return null;
        }
    };
};