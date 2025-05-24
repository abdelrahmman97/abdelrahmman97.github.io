// @ts-check
const prettierPlugin = require( 'eslint-plugin-prettier' );
const typescriptParser = require( '@typescript-eslint/parser' );
const tsPlugin = require( '@typescript-eslint/eslint-plugin' );
const angularPlugin = require( '@angular-eslint/eslint-plugin' );
const angularTemplateParser = require( '@angular-eslint/template-parser' );

module.exports = [
	{
		ignores: [ '.cache/', '.git/', '.github/', 'node_modules/', 'dist/' ],
	},
	{
		files: [ '**/*.ts' ],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				project: [ './tsconfig.json', './tsconfig.app.json', './tsconfig.spec.json' ],
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			'@angular-eslint': angularPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			...angularPlugin.configs.recommended.rules,
			'prettier/prettier': [
				'off',
				{
					bracketSpacing: true,
					nonEmpty: "after-props",
					selfClosing: "tag-aligned"
				},
			],
			'@angular-eslint/directive-selector': [
				'warn',
				{
					type: 'attribute',
					prefix: 'app',
					style: 'camelCase',
				},
			],
			'@angular-eslint/component-selector': [
				'warn',
				{
					type: 'element',
					prefix: 'app',
					style: 'kebab-case',
				},
			],
			'@typescript-eslint/no-explicit-any': [ 'off' ],
			'@typescript-eslint/member-ordering': [ 'warn', {
				"default":
					[
						// Fields
						"field",

						// Constructors
						"constructor",

						// Methods
						"method",

					]
			}, ],
			'@typescript-eslint/naming-convention': [
				"warn",
				{
					"selector": "default",
					"format": [ "camelCase" ]
				},
				{
					"selector": "class",
					"format": [ "PascalCase" ]
				},
				{
					"selector": "classProperty",
					"types": [ "boolean" ],
					"format": [ "PascalCase" ],
					"prefix": [ "is", "should", "has", "can", "did", "will", "show" ]
				},
				{
					"selector": "variable",
					"format": [ "camelCase", "UPPER_CASE" ]
				},
				{
					"selector": "classProperty",
					"modifiers": [ "private" ],
					"format": [ "camelCase" ],
					"leadingUnderscore": "require"
				},
				{
					"selector": "variable",
					"modifiers": [ "destructured" ],
					"format": null // ← disables naming rule for destructured vars
				},
			],
			'@angular-eslint/no-output-on-prefix': 'off',
			'@typescript-eslint/ban-types': 'off',
			'@typescript-eslint/no-inferrable-types': 'off',
			"@typescript-eslint/explicit-function-return-type": "warn",
			'no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			"indent": [ "warn", 'tab' ],
			'no-empty-function': [ "warn", { "allow": [ "constructors" ] } ],
			'prefer-const': 'warn',
			'prefer-object-spread': 'warn',
			'prefer-template': 'warn',
			"prefer-destructuring": [ "warn", { "object": true, "array": false } ],
			'default-param-last': 'warn',
			'no-duplicate-imports': 'warn',
			'no-new-wrappers': 'warn',
		},
	},
	{
		files: [ '**/models/**/*.ts', '**/dtos/**/*.ts' ],
		rules: {
			'@typescript-eslint/naming-convention': [
				'warn',
				{
					selector: 'default',
					format: [ 'PascalCase' ]
				},
				{
					selector: 'classProperty',
					format: [ 'PascalCase' ]
				},
				{
					selector: 'class',
					format: [ 'PascalCase' ]
				},
				{
					"selector": "classProperty",
					"types": [ "boolean" ],
					"format": [ "PascalCase" ],
					"prefix": [ "Is", "Should", "Has", "Can", "Did", "Will", "Show" ]
				},
			]
		}
	},
	{
		files: [ '**/*.html' ],
		languageOptions: {
			parser: angularTemplateParser,
		},
		plugins: {
			'@angular-eslint': angularPlugin,
			'@angular-eslint/template': angularPlugin,
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': [ 'warn', { parser: 'angular' } ],
		},
	},
	// eslintPluginPrettierRecommended,
];