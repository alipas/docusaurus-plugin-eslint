# docusaurus-plugin-eslint
A plugin for enabling [EslintWebpackPlugin](https://webpack.js.org/plugins/eslint-webpack-plugin/) in [Docusaurus](https://github.com/facebook/docusaurus).

## Installation
* Run `yarn install docusaurus-plugin-eslint`.
* Set the `eslintPath` option to the desired ESLint instance (not ESLint configuration).

## Usage
`docusaurus.config.js`
```js
module.exports = {
    plugins: [
    	[require.resolve('docusaurus-plugin-eslint'), {
    	    eslintPath: require.resolve('eslint'),
    	    // EslintWebpackPlugin options
    	}]
    ],
};
```
