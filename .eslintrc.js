module.exports = {
	root: true,
	env: {
		// this section will be used to determine which APIs are available to us
		// (i.e are we running in a browser environment or a node.js env)
		node: true,
		browser: true
	},
	parserOptions: {
		parser: "babel-eslint",
		// specifying a module sourcetype prevent eslint from marking import statements as errors
		sourceType: "module"
	},
	extends: [
		// use the recommended rule set for both plain javascript and vue
		"eslint:recommended",
		"plugin:vue/recommended"
	],
	rules: {
		'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    "vue/max-attributes-per-line": ["error", {
    "singleline": 10,
    "multiline": {
      "max": 10,
      "allowFirstLine": false
    }
  }],
		// we should always disable console logs and debugging in production
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
	}
};
