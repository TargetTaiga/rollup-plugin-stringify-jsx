import stringify from "stringify-jsx";

export function stringifyJsx() {
    return {
        name: 'stringify-jsx',
        transform(code, id) {
            if (!id.includes('/node_modules/')) {
                return stringify(code);
            }
            return null;
        }
    };
}