if (!window.Promise) {
	require('es6-promise')
}

require('requestAnimationFrame')
require('json2')
require('es5-shim')
require('es5-shim/es5-sham')

module.exports = {
	jQuery: require('jquery'),
	$: require('jquery'),
	React: require('react'),
	ReactDOM: require('react-dom')
}
