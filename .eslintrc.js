module.exports = {
	"env": {
		"node"    : true,
		"browser" : true,
		"es2021"  : true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion" : 12,
		"sourceType"  : "module"
	},
	"plugins": [
		"react",
		"align-import",
		"align-assignments"
	],
	"settings": {
		"react": {
			"version": "detect" // React version. "detect" automatically picks the version you have installed.
		}
	},
	"rules": {
		"indent": [
			"error",
			"tab",
			{ "SwitchCase": 1 }
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"key-spacing": [ "error", {
			"singleLine": {
				"beforeColon" : false,
				"afterColon"  : true
			},
			"multiLine": {
				"beforeColon" : false,
				"afterColon"  : true
			},
			"align": {
				"beforeColon" : true,
				"afterColon"  : true,
				"on"          : "colon"
			}
		} ],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: "return" },
			{ blankLine: "always", prev: [ "case", "default" ], next: "*" },
			{ blankLine: "always", prev: "directive", next: "*" },
			{ blankLine: "any", prev: "directive", next: "directive" },
			{ blankLine: "always", prev: [ "const", "let", "var" ], next: "*" },
			{ blankLine: "any", prev: [ "const", "let", "var" ], next: [ "const", "let", "var" ] }
		],
		"no-multiple-empty-lines"             : [ "error", { "max": 1 } ],
		"spaced-comment"                      : [ "error", "always" ],
		"no-unused-vars"                      : [ 1 ],
		"arrow-parens"                        : [ "error", "as-needed" ],
		"max-len"                             : [ "off", { code: 160 } ],
		// "no-console"                          : [ 1 ],
		"block-spacing"                       : "error",
		"brace-style"                         : [ "error", "1tbs", { "allowSingleLine": false } ],
		"comma-dangle"                        : [ "error", "never" ],
		"comma-spacing"                       : [ "error", { "before": false, "after": true } ],
		"semi-spacing"                        : [ "error", { "before": false, "after": true } ],
		"semi-style"                          : [ "error", "last" ],
		"space-before-blocks"                 : "error",
		"space-before-function-paren"         : [ "error", "always" ],
		"space-in-parens"                     : [ "error", "always" ],
		"func-call-spacing"                   : [ "error", "always" ],
		"switch-colon-spacing"                : [ "error", { "before": false, "after": true } ],
		"align-import/align-import"           : [ 2 ],
		"align-import/trim-import"            : [ 2 ],
		"align-assignments/align-assignments" : [ 2, { "requiresOnly": false } ],
		"template-curly-spacing"              : [ "error", "always" ],
		"no-trailing-spaces"                  : [ 2 ],
		"no-whitespace-before-property"       : "error",
		"no-multi-spaces"                     : [ "error", {
			"exceptions": {
				"ImportDeclaration": true, "VariableDeclarator": true, "AssignmentExpression": true, "JSXAttribute": true
			}
		} ],
		"no-mixed-spaces-and-tabs"           : [ 2, "smart-tabs" ],
		"no-tabs"                            : [ 2, { allowIndentationTabs: true } ],
		"object-property-newline"            : [ "error", { "allowAllPropertiesOnSameLine": true } ],
		"object-curly-newline"               : [ "error", { "consistent": true } ],
		"object-curly-spacing"               : [ "error", "always" ],
		"array-bracket-spacing"              : [ "error", "always" ],
		"arrow-spacing"                      : [ "error", { "before": true, "after": true } ],
		"keyword-spacing"                    : [ "error", { "before": true, "after": true } ],
		"jsx-quotes"                         : [ "error", "prefer-double" ],
		"react/prop-types"                   : "off",
		"react/react-in-jsx-scope"           : "off",
		"react/jsx-filename-extension"       : [ 1, { "extensions": [ ".js", ".jsx" ] } ],
		"react/no-unescaped-entities"        : "off",
		"react/jsx-closing-tag-location"     : 2,
		"react/jsx-curly-newline"            : [ 2, { multiline: "consistent", singleline: "consistent" } ],
		"react/jsx-closing-bracket-location" : [ 2, "tag-aligned" ],
		"react/jsx-equals-spacing"           : [ 2, "always" ],
		"react/jsx-curly-spacing"            : [ 2, { "when": "always" } ],
		"react/jsx-indent-props"             : [ 2, "tab" ],
		"react/jsx-indent"                   : [ 2, "tab" ],
		"react/jsx-key"                      : [ 2, { "checkFragmentShorthand": true } ],
		"react/jsx-tag-spacing"              : [ 2, { "beforeSelfClosing": "always", "afterOpening": "never", "beforeClosing": "never" } ],
		"react/jsx-wrap-multilines"          : [ 2, {
			declaration : "parens-new-line",
			assignment  : "parens-new-line",
			return      : "parens-new-line",
			arrow       : "parens-new-line",
			condition   : "parens-new-line",
			logical     : "parens-new-line",
			prop        : "parens-new-line"
		} ],
		"react/jsx-sort-props": [ 2, {
			"shorthandFirst" : true,
			"ignoreCase"     : true,
			"reservedFirst"  : true
		} ],
		"react/jsx-max-props-per-line"      : [ 1, { "maximum": 1, "when": "always" } ],
		"react/jsx-no-duplicate-props"      : [ 2, { "ignoreCase": false } ],
		"react/jsx-no-useless-fragment"     : [ 2, { "allowExpressions": true } ],
		"react/jsx-one-expression-per-line" : [ 2, { "allow": "literal" } ],
		"react/jsx-props-no-multi-spaces"   : [ 2 ],
		"react/jsx-newline"                 : [ 2 ],
		"@next/next/no-img-element"         : "off",
		"@next/next/no-sync-scripts"        : "off"
	}
};