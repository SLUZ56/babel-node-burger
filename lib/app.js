"use strict"

const _createClass = (function () {
  function defineProperties(target, props) {
    for (let i = 0; i < props.length; i++) {
      const descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ("value" in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

const _express = require("express")

const _express2 = _interopRequireDefault(_express)

const _routes2 = require("./routes")

const _routes3 = _interopRequireDefault(_routes2)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
}

const App = (function () {
  function App() {
    _classCallCheck(this, App)

    this.app = (0, _express2.default)()

    this.middlewares()
    this.routes()
  }

  _createClass(App, [
    {
      key: "middlewares",
      value: function middlewares() {
        this.app.use(_express2.default.json())
      },
    },
    {
      key: "routes",
      value: function routes() {
        this.app.use(_routes3.default)
      },
    },
  ])

  return App
})()

module.exports = new App().app
