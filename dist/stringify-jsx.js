'use strict';

const stringify = require('stringify-jsx');

module.exports = function stringifyJsx(customOptions) {
    const options = Object.assign({}, {
        generatorOptions: {
            sourceMaps: true
        }
    }, customOptions);
    return {
        name: 'stringify-jsx',
        transform(code, id) {
            if (!id.includes('/node_modules/')) {
                options.generatorOptions.sourceFileName = id;
                const result = stringify(code, options);
                return {
                    code: result.code,
                    map: result.map
                };
            }
            return null;
        }
    };
};
