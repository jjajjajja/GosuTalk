module.exports = {
    env: {
        browser: false,
        es2021: true,
    },
    extends: ['airbnb-base'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {},
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};
