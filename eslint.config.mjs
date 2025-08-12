import js from "@eslint/js";
import reactHooks from 'eslint-plugin-react-hooks';
import { FlatCompat } from '@eslint/eslintrc'


//Workaround for lack of support for flat configs - issue: https://github.com/vercel/next.js/issues/64114
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended
})

export default [
    ...compat.config({
        extends: [
            'eslint:recommended', 
            'next', 
            'prettier', 
            "plugin:jest/recommended",
            "plugin:react/recommended",
            "plugin:react-hooks/recommended",
        ],
        overrides: [
            {
                files: [
                    "**/*.test.ts",
                    "**/*.test.tsx"
                ],
                
                env: {
                    "jest": true
                }
            }
        ],
        rules: {
            "no-unused-vars": [
            "warn", // or "error"
            {
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "caughtErrorsIgnorePattern": "^_"
            }
            ]
        },
        ignorePatterns: [
            '**/TestDataFactory.js'
            
        ]
    })
]