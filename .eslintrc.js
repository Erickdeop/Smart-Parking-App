module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:styled-components-a11y/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'plugin:storybook/recommended',
        'plugin:jest/recommended'
    ],
    overrides: [
        {
            extends: [],
            files: ['*.ts', '*.tsx']
        },
        {
            files: ['*.cy.ts', '*.cy.tsx'],
            rules: {
                'jest/expect-expect': 'off'
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        'jest',
        'styled-components-a11y',
        'jsx-a11y',
        'prettier'
    ],
    rules: {
        'prettier/prettier': ['error'],
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'react/prop-types': 'off',
        //https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/718#issuecomment-1160856159
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                assert: 'either'
            }
        ]
    },
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            typescript: {}
        }
    }
};
