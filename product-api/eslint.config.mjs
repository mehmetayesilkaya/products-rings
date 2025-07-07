import jest from 'eslint-plugin-jest'
import jsonPlugin from 'eslint-plugin-json'
import preferArrow from 'eslint-plugin-prefer-arrow'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import js from '@eslint/js'

const globalIgnores = ['**/node_modules/**', '**/dist/**', '**/.cache/**', '**/tmp/**', '**/.DS_Store']
const commonRules = {
    'prettier/prettier': 'error',
    semi: [2, 'never'],
    'prefer-arrow/prefer-arrow-functions': [
        'warn',
        {
            disallowPrototype: true,
            singleReturnOnly: false,
            classPropertiesAllowed: false
        }
    ],
    camelcase: 0,
    curly: [2, 'all'],
    'no-trailing-spaces': 2,
    'no-unused-vars': 'off',
    'no-undef': 'error',
    'comma-dangle': ['error', 'never'],
    'no-console': 'error'
}

export default [
    {
        name: 'ts files',
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        ignores: globalIgnores,
        languageOptions: {
            ecmaVersion: 'latest',
            parser: tseslint.parser,
            sourceType: 'module',
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: '.',
                ecmaFeatures: {
                    legacyDecorators: true,
                    decorators: true
                },
                experimentalDecorators: true,
                emitDecoratorMetadata: true
            },
            globals: {
                ...globals.node,
                ...globals.jest,
                structuredClone: 'readonly'
            }
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            'prefer-arrow': preferArrow,
            prettier,
        },

        rules: commonRules
    },
    {
        ...js.configs.recommended,
        name: 'js files',
        files: ['src/**/*.js', '!src/**/*.test.js'],
        ignores: globalIgnores,
        languageOptions: {
            ecmaVersion: 'latest',
            globals: {
                ...globals.node,
                ...globals.jest,
                structuredClone: 'readonly'
            }
        },
        plugins: {
            'prefer-arrow': preferArrow,
            prettier,
        },
        rules: commonRules
    },
    {
        name: 'test files',
        files: ['src/**/*.test.{ts,tsx,js,jsx}'],
        ignores: globalIgnores,
        plugins: { jest },
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest
            }
        },
        rules: {
            'jest/no-commented-out-tests': 2,
            'jest/require-top-level-describe': 2,
            'jest/valid-describe-callback': 2,
            'jest/valid-title': 2,
            'jest/no-identical-title': 2,
            'jest/no-conditional-expect': 0,
            'jest/no-duplicate-hooks': 2,
            'jest/no-done-callback': 0,
            'jest/no-focused-tests': 2,
            'jest/consistent-test-it': [
                'error',
                {
                    fn: 'test',
                    withinDescribe: 'test'
                }
            ],
            'jest/no-disabled-tests': 'warn',
            'jest/expect-expect': 'warn'
        }
    },
    {
        name: 'json files',
        files: ['src/**/*.json'],
        ignores: globalIgnores,
        languageOptions: {
            parser: jsonPlugin.parser
        },
        plugins: {
            json: jsonPlugin
        },
        rules: {
            'json/*': ['error']
        }
    }
]