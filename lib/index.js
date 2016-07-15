'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (component, matchMediaQueries) {
  return function (_React$Component) {
    _inherits(ResponsiveProps, _React$Component);

    _createClass(ResponsiveProps, [{
      key: '_onResize',
      value: function _onResize() {
        this.forceUpdate();
      }
    }]);

    function ResponsiveProps(props) {
      _classCallCheck(this, ResponsiveProps);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ResponsiveProps).call(this));

      _this._onResize = _this._onResize.bind(_this);
      return _this;
    }

    _createClass(ResponsiveProps, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener("resize", this._onResize);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener("resize", this._onResize);
      }
    }, {
      key: 'render',
      value: function render() {
        var resposiveProps = _lodash2.default.mapValues(matchMediaQueries, function (query) {
          return window.matchMedia(query).matches;
        });
        var props = _lodash2.default.defaults(resposiveProps, this.props);
        return _react2.default.createElement(component, props);
      }
    }]);

    return ResponsiveProps;
  }(_react2.default.Component);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }