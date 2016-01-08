/*! lastmodify: 2016-01-08 18:36:44 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _component = __webpack_require__(1);
	
	var _component2 = _interopRequireDefault(_component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var Root = function Root() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'hello world--test-change12123123'
			),
			React.createElement(_component2["default"], null)
		);
	};
	
	ReactDOM.render(React.createElement(Root, null), document.getElementById('root'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var List = function (_React$Component) {
		_inherits(List, _React$Component);
	
		function List(props, context) {
			_classCallCheck(this, List);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props, context));
	
			_this.handleClick = function (e) {
				console.log($(e.currentTarget).index);
			};
	
			_this.abc = 'abdsf';
			return _this;
		}
	
		_createClass(List, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				$(this.refs.list).find('li:eq(2)').css({
					background: '#f00'
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;
	
				var className = this.props.className;
	
				var list = new Array(10).join('@').split('@').map(function () {
					return Math.random().toString(36).substr(2);
				});
				return React.createElement(
					'ul',
					{ ref: 'list', className: className },
					list.map(function (str, index) {
						return React.createElement(
							'li',
							{ key: index, onClick: _this2.handleClick },
							str
						);
					})
				);
			}
		}]);
	
		return List;
	}(React.Component);
	
	List.defaultProps = {
		className: 'test'
	};
	exports["default"] = List;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map