export default {
    'env': {
        'browser': true,
        'es2021': true,
        "jest": true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        "plugin:prettier/recommended",
        "airbnb-typescript/base",
        "plugin:react-hooks/recommended"
    ],
    'overrides': [
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'import',
        'prettier',
        'react',
        '@typescript-eslint'
    ],
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        "react/react-in-jsx-scope": "off"
    }
};
