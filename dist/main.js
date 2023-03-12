/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game/gameViews.js":
/*!*******************************!*\
  !*** ./src/game/gameViews.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameOverView\": () => (/* binding */ gameOverView),\n/* harmony export */   \"incresePoints\": () => (/* binding */ incresePoints),\n/* harmony export */   \"pointsCounterView\": () => (/* binding */ pointsCounterView),\n/* harmony export */   \"pressButtonToStart\": () => (/* binding */ pressButtonToStart),\n/* harmony export */   \"resetPoints\": () => (/* binding */ resetPoints)\n/* harmony export */ });\n/* harmony import */ var _utils_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/canvas */ \"./src/utils/canvas.js\");\n\n\nvar actualScore = 0;\nvar incresePoints = function incresePoints() {\n  (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_0__.clearCanvasView)();\n  actualScore += 1;\n  pointsCounterView();\n};\nvar pointsCounterView = function pointsCounterView() {\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.font = \"bolder 80px Arial\";\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = \"yellow\";\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(actualScore, _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.canvas.width - 100, 100);\n};\nvar resetPoints = function resetPoints() {\n  (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_0__.clearCanvasView)();\n  actualScore = 0;\n  pointsCounterView();\n};\nvar pressButtonToStart = function pressButtonToStart() {\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx1.font = \"bolder 40px Arial\";\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = \"yellow\";\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(\"To play, press and hold down your mouse button,\", _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.canvas.width / 2 - 490, 300);\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(\"then release it to launch the ball.\", _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.canvas.width / 2 - 330, 350);\n};\nvar addGameOverText = function addGameOverText() {\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx1.font = \"bolder 100px Arial\";\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = \"yellow\";\n  _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(\"GAME OVER\", _utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx.canvas.width / 2 - 340, 200);\n};\nvar gameOverView = function gameOverView() {\n  addGameOverText();\n  pressButtonToStart();\n};\n\n\n//# sourceURL=webpack://one-tap-golf/./src/game/gameViews.js?");

/***/ }),

/***/ "./src/game/initGame.js":
/*!******************************!*\
  !*** ./src/game/initGame.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parabola/parabolaCreation */ \"./src/parabola/parabolaCreation.js\");\n/* harmony import */ var _gameViews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameViews */ \"./src/game/gameViews.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/game/player.js\");\n\n\n\nvar drawPathAndFlightBall = function drawPathAndFlightBall() {\n  if (_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ballIsFlyingNow) return;\n  _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].drawFlightPath();\n};\nvar initEvents = function initEvents() {\n  var keyDownHandler = function keyDownHandler() {\n    if (_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ballIsFlyingNow) return;\n    var interval = setInterval(function () {\n      drawPathAndFlightBall();\n      if (_parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y > 7697000) {\n        clearInterval(interval);\n        _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"].flyBall();\n        (0,_gameViews__WEBPACK_IMPORTED_MODULE_1__.gameOverView)();\n        document.removeEventListener(\"mouseup\", handleMouseUp);\n      }\n    }, 50);\n    var handleMouseUp = function handleMouseUp() {\n      clearInterval(interval);\n      _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"].flyBall();\n      document.removeEventListener(\"mouseup\", handleMouseUp);\n    };\n    document.addEventListener(\"mouseup\", handleMouseUp, {\n      once: true\n    });\n  };\n  document.addEventListener(\"mousedown\", keyDownHandler);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initEvents);\n\n//# sourceURL=webpack://one-tap-golf/./src/game/initGame.js?");

/***/ }),

/***/ "./src/game/player.js":
/*!****************************!*\
  !*** ./src/game/player.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parabola/parabolaCreation */ \"./src/parabola/parabolaCreation.js\");\n/* harmony import */ var _parabola_parabolaCollision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parabola/parabolaCollision */ \"./src/parabola/parabolaCollision.js\");\n/* harmony import */ var _utils_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/canvas */ \"./src/utils/canvas.js\");\n/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/images */ \"./src/utils/images.js\");\n/* harmony import */ var _gameViews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameViews */ \"./src/game/gameViews.js\");\n\n\n\n\n\nvar Player = function Player() {\n  var player = {\n    animationFlyBall: null,\n    ballIsFlyingNow: false,\n    setVelocityBallFlight: function setVelocityBallFlight() {\n      return _setVelocityBallFlight();\n    },\n    getBallFinalFlight: function getBallFinalFlight() {\n      _getBallFinalFlight(player);\n    },\n    flyBall: function flyBall() {\n      return _flyBall();\n    }\n  };\n  return player;\n};\nvar player = Player();\nvar _setVelocityBallFlight = function _setVelocityBallFlight() {\n  _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x += 10;\n  _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y += 10;\n};\nvar _getBallFinalFlight = function _getBallFinalFlight() {\n  player.animationFlyBall = requestAnimationFrame(_getBallFinalFlight);\n  _setVelocityBallFlight();\n  (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_2__.clearCanvasView)();\n  (0,_gameViews__WEBPACK_IMPORTED_MODULE_4__.pointsCounterView)();\n  _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].calculateFlightPoints();\n  (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_2__.drawImage)(_utils_canvas__WEBPACK_IMPORTED_MODULE_2__.ctx, _utils_images__WEBPACK_IMPORTED_MODULE_3__.ball, _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x, _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y);\n  player.ballIsFlyingNow = true;\n  (0,_parabola_parabolaCollision__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\nvar _flyBall = function _flyBall() {\n  _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFinalDistance();\n  _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setInitialConditions();\n  _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].recalculateParabola();\n  _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].increaseSpeed();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n\n//# sourceURL=webpack://one-tap-golf/./src/game/player.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./scss/main.scss\");\n/* harmony import */ var _utils_hole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/hole */ \"./src/utils/hole.js\");\n/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/images */ \"./src/utils/images.js\");\n/* harmony import */ var _utils_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/canvas */ \"./src/utils/canvas.js\");\n/* harmony import */ var _game_gameViews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/gameViews */ \"./src/game/gameViews.js\");\n/* harmony import */ var _game_initGame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/initGame */ \"./src/game/initGame.js\");\n/* harmony import */ var _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parabola/parabolaCreation */ \"./src/parabola/parabolaCreation.js\");\n\n\n\n\n\n\n\n(0,_utils_hole__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_utils_canvas__WEBPACK_IMPORTED_MODULE_3__.createCanvas)();\n(0,_game_gameViews__WEBPACK_IMPORTED_MODULE_4__.pressButtonToStart)();\nsetTimeout(function () {\n  (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_3__.drawImage)(_utils_canvas__WEBPACK_IMPORTED_MODULE_3__.ctx, _utils_images__WEBPACK_IMPORTED_MODULE_2__.ball, _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_6__[\"default\"].ballPosition, _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_6__[\"default\"].groundLevel);\n  (0,_game_initGame__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n}, 500);\n\n//# sourceURL=webpack://one-tap-golf/./src/index.js?");

/***/ }),

/***/ "./src/parabola/parabolaCollision.js":
/*!*******************************************!*\
  !*** ./src/parabola/parabolaCollision.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _parabolaCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parabolaCreation */ \"./src/parabola/parabolaCreation.js\");\n/* harmony import */ var _utils_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/canvas */ \"./src/utils/canvas.js\");\n/* harmony import */ var _utils_hole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hole */ \"./src/utils/hole.js\");\n/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/images */ \"./src/utils/images.js\");\n/* harmony import */ var _game_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/player */ \"./src/game/player.js\");\n/* harmony import */ var _game_gameViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game/gameViews */ \"./src/game/gameViews.js\");\n\n\n\n\n\n\nvar endGame = function endGame() {\n  cancelAnimationFrame(_game_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"].animationFlyBall);\n  (0,_game_gameViews__WEBPACK_IMPORTED_MODULE_5__.resetPoints)();\n  (0,_game_gameViews__WEBPACK_IMPORTED_MODULE_5__.gameOverView)();\n  _parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resetSpeed();\n  _game_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ballIsFlyingNow = false;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var holePosition = document.querySelector(\".hole\").offsetLeft;\n  if (_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y < 0) {\n    endGame();\n  }\n  if (450 < _parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y && _parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y < 720 && _parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x > holePosition - 30 && _parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].x < holePosition + 80) {\n    cancelAnimationFrame(_game_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"].animationFlyBall);\n    (0,_game_gameViews__WEBPACK_IMPORTED_MODULE_5__.incresePoints)();\n    (0,_utils_hole__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_1__.drawImage)(_utils_canvas__WEBPACK_IMPORTED_MODULE_1__.ctx, _utils_images__WEBPACK_IMPORTED_MODULE_3__.ball, _parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ballPosition, _parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].groundLevel);\n    _game_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ballIsFlyingNow = false;\n  }\n  if (_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].y > 720) {\n    endGame();\n  }\n});\n\n//# sourceURL=webpack://one-tap-golf/./src/parabola/parabolaCollision.js?");

/***/ }),

/***/ "./src/parabola/parabolaCreation.js":
/*!******************************************!*\
  !*** ./src/parabola/parabolaCreation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/canvas */ \"./src/utils/canvas.js\");\n/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/images */ \"./src/utils/images.js\");\n/* harmony import */ var _game_gameViews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/gameViews */ \"./src/game/gameViews.js\");\n/* harmony import */ var _game_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/player */ \"./src/game/player.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\nvar Parabola = /*#__PURE__*/function () {\n  function Parabola() {\n    _classCallCheck(this, Parabola);\n    this.groundLevel = window.innerHeight - 225;\n    this.speed = 5;\n    this.a = 0.005;\n    this.y = 0;\n    this.x = 0;\n    this.isMobileWidth = window.innerWidth < 1000;\n    this.ballPosition = this.isMobileWidth ? 100 : 300;\n    this.parabolaCurve = this.isMobileWidth ? 100 : 300;\n    this.parabolaFinalDistance = 200;\n  }\n  _createClass(Parabola, [{\n    key: \"setInitialConditions\",\n    value: function setInitialConditions() {\n      this.b = 1;\n      this.c = 1;\n      this.parabolaCurve = this.isMobileWidth ? 100 : 300;\n    }\n  }, {\n    key: \"increaseDistance\",\n    value: function increaseDistance() {\n      this.parabolaCurve += this.speed;\n    }\n  }, {\n    key: \"increaseSpeed\",\n    value: function increaseSpeed() {\n      this.speed += 1.5;\n    }\n  }, {\n    key: \"recalculateParabola\",\n    value: function recalculateParabola() {\n      this.calculateShotPath(this.parabolaFinalDistance);\n      _game_player__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getBallFinalFlight();\n    }\n  }, {\n    key: \"resetSpeed\",\n    value: function resetSpeed() {\n      this.speed = 5;\n    }\n  }, {\n    key: \"getFinalDistance\",\n    value: function getFinalDistance() {\n      this.parabolaFinalDistance = this.parabolaCurve;\n    }\n  }, {\n    key: \"calculateShotPath\",\n    value: function calculateShotPath(x2) {\n      this.b = (this.groundLevel - this.groundLevel - this.a * (this.ballPosition * this.ballPosition - x2 * x2)) / (this.ballPosition - x2);\n      this.c = this.groundLevel - this.a * this.ballPosition * this.ballPosition - this.b * this.ballPosition;\n      this.x = this.ballPosition;\n      (0,_game_gameViews__WEBPACK_IMPORTED_MODULE_2__.pointsCounterView)();\n    }\n  }, {\n    key: \"calculateFlightPoints\",\n    value: function calculateFlightPoints() {\n      this.y = Math.round(this.a * this.x * this.x + this.b * this.x + this.c);\n      this.x++;\n    }\n  }, {\n    key: \"drawFlightPath\",\n    value: function drawFlightPath() {\n      (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_0__.clearCanvasView)();\n      this.calculateShotPath(this.parabolaCurve);\n      var pointX = this.ballPosition;\n      while (pointX < this.parabolaCurve) {\n        pointX++;\n        this.x += 50;\n        this.calculateFlightPoints();\n        (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_0__.drawImage)(_utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx, _utils_images__WEBPACK_IMPORTED_MODULE_1__.dot, this.x, this.y);\n      }\n      (0,_utils_canvas__WEBPACK_IMPORTED_MODULE_0__.drawImage)(_utils_canvas__WEBPACK_IMPORTED_MODULE_0__.ctx, _utils_images__WEBPACK_IMPORTED_MODULE_1__.ball, this.ballPosition, this.groundLevel);\n      this.increaseDistance();\n    }\n  }]);\n  return Parabola;\n}();\nvar parabola = new Parabola();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parabola);\n\n//# sourceURL=webpack://one-tap-golf/./src/parabola/parabolaCreation.js?");

/***/ }),

/***/ "./src/utils/canvas.js":
/*!*****************************!*\
  !*** ./src/utils/canvas.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearCanvasView\": () => (/* binding */ clearCanvasView),\n/* harmony export */   \"createCanvas\": () => (/* binding */ createCanvas),\n/* harmony export */   \"ctx\": () => (/* binding */ ctx),\n/* harmony export */   \"ctx1\": () => (/* binding */ ctx1),\n/* harmony export */   \"drawImage\": () => (/* binding */ drawImage)\n/* harmony export */ });\nvar canvas = document.getElementById(\"canvas\");\nvar ctx = canvas.getContext(\"2d\");\nvar ctx1 = canvas.getContext(\"2d\");\nvar createCanvas = function createCanvas() {\n  ctx.fillStyle = \"rgba(0, 0, 0, 1)\";\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight - 168;\n};\nvar clearCanvasView = function clearCanvasView() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n};\nvar drawImage = function drawImage(context, image, valueX, valueY) {\n  context.drawImage(image, valueX, valueY);\n};\n\n\n//# sourceURL=webpack://one-tap-golf/./src/utils/canvas.js?");

/***/ }),

/***/ "./src/utils/hole.js":
/*!***************************!*\
  !*** ./src/utils/hole.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parabola/parabolaCreation */ \"./src/parabola/parabolaCreation.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var hole = document.querySelector(\".hole\");\n  var generateLeftPositionForHole = Math.floor(Math.random() * (window.innerWidth - _parabola_parabolaCreation__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isMobileWidth ? 500 : 1200)) + 400;\n  hole.style.left = generateLeftPositionForHole + \"px\";\n});\n\n//# sourceURL=webpack://one-tap-golf/./src/utils/hole.js?");

/***/ }),

/***/ "./src/utils/images.js":
/*!*****************************!*\
  !*** ./src/utils/images.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ball\": () => (/* binding */ ball),\n/* harmony export */   \"dot\": () => (/* binding */ dot)\n/* harmony export */ });\nvar loadImage = function loadImage(path) {\n  var image = new Image();\n  image.src = path;\n  return image;\n};\nvar ball = loadImage(\"./images/object_ball.png\");\nvar dot = loadImage(\"./images/object_dot.png\");\n\n\n//# sourceURL=webpack://one-tap-golf/./src/utils/images.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://one-tap-golf/./scss/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;