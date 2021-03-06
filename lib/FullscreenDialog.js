'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = FullscreenDialog;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _close = require('material-ui/svg-icons/navigation/close');

var _close2 = _interopRequireDefault(_close);

var _FullscreenDialogFrame = require('./FullscreenDialogFrame');

var _FullscreenDialogFrame2 = _interopRequireDefault(_FullscreenDialogFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(props, theme) {
  var styles = {
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    appBar: {
      height: (props.appBarStyle ? props.appBarStyle.height : null) || theme.appBar.height
    },
    container: {
      flex: 1,
      overflow: 'auto'
    }
  };

  if (props.immersive) {
    styles.appBar.background = 'linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0.4)';
    styles.appBar.position = 'absolute';
  }

  return styles;
};

function FullscreenDialog(props, _ref) {
  var muiTheme = _ref.muiTheme;

  var styles = getStyles(props, muiTheme);

  var actionButton = props.actionButton,
      appBarStyle = props.appBarStyle,
      appBarZDepth = props.appBarZDepth,
      children = props.children,
      closeIcon = props.closeIcon,
      containerStyle = props.containerStyle,
      immersive = props.immersive,
      onRequestClose = props.onRequestClose,
      open = props.open,
      style = props.style,
      title = props.title,
      titleStyle = props.titleStyle;


  return _react2.default.createElement(
    _FullscreenDialogFrame2.default,
    {
      open: open,
      style: _extends({}, styles.root, style)
    },
    _react2.default.createElement(_AppBar2.default, {
      title: title,
      titleStyle: titleStyle,
      style: _extends({}, styles.appBar, appBarStyle),
      iconElementLeft: _react2.default.createElement(
        _IconButton2.default,
        { onClick: onRequestClose },
        closeIcon
      ),
      iconElementRight: actionButton,
      showMenuIconButton: onRequestClose != null,
      zDepth: immersive ? 0 : appBarZDepth
    }),
    _react2.default.createElement(
      'div',
      { style: _extends({}, styles.container, containerStyle) },
      children
    )
  );
}

FullscreenDialog.propTypes = {
  /**
   * A `FlatButton` or `IconButton` that is used as affirmative action button.
   */
  actionButton: _propTypes2.default.node,
  /**
   * Overrides the inline-styles of the app bar.
   */
  appBarStyle: _propTypes2.default.object,
  /**
   * Overrides the z-depth of the app bar, will affect its shadow. This is ignored if immersive is set to `true`.
   */
  appBarZDepth: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5]),
  /**
   * Children elements.
   */
  children: _propTypes2.default.node,
  /**
   * https://github.com/TeamWertarbyte/material-ui-fullscreen-dialog.gitThis is hidden if `onRequestClose` is not set.
   */
  containerStyle: _propTypes2.default.object,
  /**
   *  Toggles the immersive mode. If set to `true`, the app bar has a semi-transparent gradient and overlays the content.
   */
  immersive: _propTypes2.default.bool,
  /**
   * Callback that is invoked when the dismissive action button is touched.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * Controls whether the dialog is opened or not.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * Overrides the inline-styles of the dialog's root element.
   */
  style: _propTypes2.default.object,
  /**
   * The title of the dialog.
   */
  title: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the app bar's title element.
   */
  titleStyle: _propTypes2.default.object
};

FullscreenDialog.defaultProps = {
  appBarZDepth: 1,
  closeIcon: _react2.default.createElement(_close2.default, null),
  immersive: false
};

FullscreenDialog.contextTypes = {
  muiTheme: _propTypes2.default.object
};