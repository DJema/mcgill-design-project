webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/Snackbar/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_TableComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TableComponent */ "./components/TableComponent.js");
/* harmony import */ var _components_SnackbarComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SnackbarComponent */ "./components/SnackbarComponent.js");
/* harmony import */ var _components_AppbarComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/AppbarComponent */ "./components/AppbarComponent.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");

var _jsxFileName = "/Users/alexisgj/GitHub/mcgill-design-project/frontend/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var API_URL =  false ? undefined : "http://localhost:1234";

var styles = function styles(theme) {
  return {
    root: {
      padding: 20
    },
    snackbarContainer: {
      minWidth: 500
    },
    snackbarMargin: {
      margin: theme.spacing.unit
    }
  };
};

var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#455a64'
    },
    secondary: {
      main: '#ffffff'
    }
  },
  typography: {
    useNextVariants: true
  }
});

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function stableSort(array, cmp) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

function getSorting(order, orderBy) {
  return order === 'desc' ? function (a, b) {
    return desc(a, b, orderBy);
  } : function (a, b) {
    return -desc(a, b, orderBy);
  };
}

var rows = [{
  id: 'name',
  numeric: false,
  disablePadding: false,
  label: 'Nom',
  enableSorting: true
}, {
  id: 'historique',
  numeric: false,
  disablePadding: false,
  label: 'Historique',
  enableSorting: false
}, {
  id: 'mmol',
  numeric: true,
  disablePadding: true,
  label: 'Niveau de glucose (mmol/L)',
  enableSorting: true
}, {
  id: 'uploaderBattery',
  numeric: true,
  disablePadding: true,
  label: 'Batterie',
  enableSorting: true
}, {
  id: 'dateFromNowMinutes',
  numeric: true,
  disablePadding: false,
  label: 'Dernière valeur',
  enableSorting: true
}];

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "convertData", function (data) {
      moment__WEBPACK_IMPORTED_MODULE_7___default.a.locale('fr-CA');

      for (var i = 0; i < data.length; i++) {
        if (data[i]['readings'] && data[i]['readings'].length > 0) {
          data[i]['readingsLastHour'] = [];

          for (var j = 0; j < data[i]['readings'].length; j++) {
            var now = moment__WEBPACK_IMPORTED_MODULE_7___default()(new Date());
            var measurementDate = moment__WEBPACK_IMPORTED_MODULE_7___default()(data[i]['readings'][j]['dateString']);
            var diffMinutes = Math.round(moment__WEBPACK_IMPORTED_MODULE_7___default.a.duration(now.diff(measurementDate)).asMinutes());
            data[i]['readings'][j]['mmol'] = Math.round(data[i]['readings'][j]['sgv'] / 18 * 100) / 100; // convert from mg/dl to mmol/L

            data[i]['readings'][j]['dateFromNow'] = measurementDate.fromNow();
            data[i]['readings'][j]['dateFromNowMinutes'] = -diffMinutes;
            data[i]['readings'][j]['dateTime'] = measurementDate.format('HH:mm');
            data[i]['readings'][j]['epoch'] = measurementDate.unix() * 1000;

            if (diffMinutes < 12 * 60) {
              var summaryReading = {};
              summaryReading['mmol'] = data[i]['readings'][j]['mmol'];
              summaryReading['dateFromNowMinutes'] = data[i]['readings'][j]['dateFromNowMinutes'];
              data[i]['readingsLastHour'].push(summaryReading);
            }
          }

          data[i]['latestReading'] = data[i]['readings'][0];
          data[i]['mmol'] = data[i]['readings'][0]['mmol'];
          data[i]['dateFromNowMinutes'] = -data[i]['readings'][0]['dateFromNowMinutes'];
          var directionArrows = null;

          switch (data[i]['latestReading']['direction']) {
            case 'Flat':
              directionArrows = "&rarr;";
              break;

            case 'SingleUp':
              directionArrows = "&uarr;";
              break;

            case 'SingleDown':
              directionArrows = "&darr;";
              break;

            case 'DoubleUp':
              directionArrows = "&uarr;&uarr;";
              break;

            case 'DoubleDown':
              directionArrows = "&darr;&darr;";
              break;

            case 'FortyFiveUp':
              directionArrows = "&nearr;";
              break;

            case 'FortyFiveDown':
              directionArrows = "&searr;";
              break;

            default:
              directionArrows = "";
          }

          data[i]['latestReading']['directionArrow'] = directionArrows;

          if (data[i]['battery']) {
            data[i]['battery']['dateFromNow'] = moment__WEBPACK_IMPORTED_MODULE_7___default()(data[i]['battery']['created_at']).fromNow();
            data[i]['uploaderBattery'] = data[i]['battery']['uploaderBattery'];
          }
        } else {
          data[i]['latestReading'] = "err_no_data";
        }
      }

      return data;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showSnackbarMessage", function (message, variant) {
      _this.setState({
        snackbarOpen: true,
        snackbarMessage: message,
        snackbarVariant: variant
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "snackbarClose", function (event, reason) {
      if (reason === 'clickaway') {
        return;
      }

      _this.setState({
        snackbarOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRequestSort", function (event, property) {
      var orderBy = property;
      var order = 'desc';

      if (_this.state.orderBy === property && _this.state.order === 'desc') {
        order = 'asc';
      }

      var sortedData = stableSort(_this.state.data, getSorting(order, orderBy));

      _this.setState({
        order: order,
        orderBy: orderBy,
        dataFirstHalf: sortedData.splice(0, Math.ceil(sortedData.length / 2)),
        dataSecondHalf: sortedData
      });

      setTimeout(_this.forceUpdate(), 1000);
    });

    _this.state = {
      error: null,
      isLoaded: false,
      loadingData: false,
      data: [],
      dataFirstHalf: [],
      dataSecondHalf: [],
      lastSuccessfulUpdate: moment__WEBPACK_IMPORTED_MODULE_7___default()(),
      snackbarOpen: false,
      snackbarMessage: "",
      snackbarVariant: "info",
      order: 'asc',
      orderBy: 'name'
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getData();
      this.timer = setInterval(function () {
        return _this2.getData();
      }, 0.5 * 60 * 1000);
    }
  }, {
    key: "getData",
    value: function () {
      var _getData = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("getData started!");
                this.setState({
                  loadingData: true
                });
                fetch(API_URL + "/api/reading/allActiveChildren").then(function (res) {
                  return res.json();
                }).then(function (result) {
                  if (result && result.length > 0) {
                    var convertedData = _this3.convertData(result);

                    var sortedData = stableSort(convertedData, getSorting(_this3.state.order, _this3.state.orderBy));

                    _this3.setState({
                      error: null,
                      isLoaded: true,
                      loadingData: false,
                      data: convertedData.slice(0),
                      dataFirstHalf: sortedData.splice(0, Math.ceil(sortedData.length / 2)),
                      dataSecondHalf: sortedData,
                      lastSuccessfulUpdate: moment__WEBPACK_IMPORTED_MODULE_7___default()()
                    });

                    setTimeout(function () {
                      _this3.showSnackbarMessage("Données mises à jour", "success");
                    }, 1000);
                  } else {
                    _this3.setState({
                      error: null,
                      isLoaded: true,
                      loadingData: false
                    });

                    setTimeout(function () {
                      _this3.showSnackbarMessage("Erreur: impossible d'obtenir les données", "error");
                    }, 1000);
                  }
                }, // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                function (error) {
                  _this3.setState({
                    error: error,
                    isLoaded: true
                  });

                  setTimeout(function () {
                    _this3.showSnackbarMessage("Erreur: impossible d'obtenir les données", "error");
                  }, 1000);
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _getData.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;

      if (this.state.error) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }, "Error: ", this.state.error.message);
      } else if (!this.state.isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          __self: this
        }, "Loading...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["MuiThemeProvider"], {
          theme: theme,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AppbarComponent__WEBPACK_IMPORTED_MODULE_10__["default"], {
          loading: this.state.loadingData,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          container: true,
          spacing: 8,
          className: classes.root,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 290
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 12,
          sm: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 291
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TableComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
          rows: this.state.dataFirstHalf,
          handleRequestSort: this.handleRequestSort,
          order: this.state.order,
          orderBy: this.state.orderBy,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 12,
          sm: 6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 302
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TableComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
          rows: this.state.dataSecondHalf,
          handleRequestSort: this.handleRequestSort,
          order: this.state.order,
          orderBy: this.state.orderBy,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 303
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 312
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Typography"], {
          style: {
            fontSize: '12px',
            textAlign: 'right'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313
          },
          __self: this
        }, "Derni\xE8re mise \xE0 jour ", moment__WEBPACK_IMPORTED_MODULE_7___default()(this.state.lastSuccessfulUpdate).fromNow()))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          open: this.state.snackbarOpen,
          autoHideDuration: 4000,
          onClose: this.snackbarClose,
          className: classes.snackbarContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SnackbarComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
          variant: this.state.snackbarVariant,
          className: classes.snackbarMargin,
          message: this.state.snackbarMessage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          },
          __self: this
        }))));
      }
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

Index.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
var IndexWrapped = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(Index);
/* harmony default export */ __webpack_exports__["default"] = (IndexWrapped);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.a12accb179c8dfb1820f.hot-update.js.map