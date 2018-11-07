/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connect-mongo */ \"connect-mongo\");\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(connect_mongo__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bluebird */ \"bluebird\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/logger */ \"./src/util/logger.ts\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/user */ \"./src/models/user.ts\");\n/* harmony import */ var _controllers_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controllers/video */ \"./src/controllers/video.ts\");\n\n\n\n\n\n\n\n\nvar mongoStore = connect_mongo__WEBPACK_IMPORTED_MODULE_4__(express_session__WEBPACK_IMPORTED_MODULE_2__);\nvar mongoUrl = 'mongodb://mongodb/buzztondb';\nmongoose__WEBPACK_IMPORTED_MODULE_6__[\"Promise\"] = bluebird__WEBPACK_IMPORTED_MODULE_5__;\nmongoose__WEBPACK_IMPORTED_MODULE_6__[\"connect\"](mongoUrl, {\n    useNewUrlParser: true,\n    autoReconnect: true,\n    reconnectTries: 10,\n    reconnectInterval: 10,\n}).then(function () { }).catch(function (err) {\n    console.log(\"MongoDB connection error. Please make sure MongoDB is running. \" + err);\n});\nvar app = express__WEBPACK_IMPORTED_MODULE_0__();\napp.set('port', process.env.PORT || 8888);\napp.use(compression__WEBPACK_IMPORTED_MODULE_1__());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3__[\"json\"]());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3__[\"urlencoded\"]({ limit: '5mb', extended: true, parameterLimit: 100000 }));\napp.use(express_session__WEBPACK_IMPORTED_MODULE_2__({\n    resave: true,\n    saveUninitialized: true,\n    secret: 'buzztonoton',\n    store: new mongoStore({\n        url: mongoUrl,\n        autoReconnect: true,\n    }),\n}));\n\napp.use(function (req, res, next) {\n    if (req.headers.authorization) {\n        var base64Credentials = req.headers.authorization.split(' ')[1];\n        var credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');\n        var userid = credentials.split(':')[0];\n        _util_logger__WEBPACK_IMPORTED_MODULE_7__[\"default\"].debug(userid);\n        _models_user__WEBPACK_IMPORTED_MODULE_8__[\"default\"].findOne({ id: userid }, function (err, user) {\n            req.session['user'] = user;\n        });\n    }\n    next();\n});\n\napp.use('/videos', _controllers_video__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.get('/version', function (req, res) {\n    return res.json({\n        type: 'server_version',\n        data: {\n            version: 1.01,\n            description: 'buzzton server',\n        },\n    });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz9lYjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgKiBhcyBleHByZXNzU2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgKiBhcyBjb25uZWN0TW9uZ28gZnJvbSAnY29ubmVjdC1tb25nbyc7XG5pbXBvcnQgKiBhcyBibHVlYmlyZCBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmltcG9ydCBsb2dnZXIgZnJvbSAnLi91dGlsL2xvZ2dlcic7XG5cbi8vIGNvbnN0IG1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcblxuY29uc3QgbW9uZ29TdG9yZSA9IGNvbm5lY3RNb25nbyhleHByZXNzU2Vzc2lvbik7XG4vLyBDb25uZWN0IHRvIE1vbmdvREIgLy8gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHxcbmNvbnN0IG1vbmdvVXJsID0gJ21vbmdvZGI6Ly9tb25nb2RiL2J1enp0b25kYic7XG4oPGFueT5tb25nb29zZSkuUHJvbWlzZSA9IGJsdWViaXJkO1xubW9uZ29vc2UuY29ubmVjdChtb25nb1VybCwge1xuICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gIGF1dG9SZWNvbm5lY3Q6IHRydWUsXG4gIHJlY29ubmVjdFRyaWVzOiAxMCxcbiAgcmVjb25uZWN0SW50ZXJ2YWw6IDEwLFxufSkudGhlbihcbiAgKCkgPT4geyAvKiogcmVhZHkgdG8gdXNlLiBUaGUgYG1vbmdvb3NlLmNvbm5lY3QoKWAgcHJvbWlzZSByZXNvbHZlcyB0byB1bmRlZmluZWQuICovIH0sXG4pLmNhdGNoKChlcnI6YW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKGBNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3IuIFBsZWFzZSBtYWtlIHN1cmUgTW9uZ29EQiBpcyBydW5uaW5nLiAke2Vycn1gKTtcbiAgLy8gcHJvY2Vzcy5leGl0KCk7XG59KTtcblxuY29uc3QgYXBwID0gRXhwcmVzcygpO1xuYXBwLnNldCgncG9ydCcsIHByb2Nlc3MuZW52LlBPUlQgfHwgODg4OCk7XG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGxpbWl0Oic1bWInLCBleHRlbmRlZDogdHJ1ZSwgcGFyYW1ldGVyTGltaXQ6IDEwMDAwMCB9KSk7XG5hcHAudXNlKGV4cHJlc3NTZXNzaW9uKHtcbiAgcmVzYXZlOiB0cnVlLFxuICBzYXZlVW5pbml0aWFsaXplZDogdHJ1ZSxcbiAgc2VjcmV0OiAnYnV6enRvbm90b24nLFxuICBzdG9yZTogbmV3IG1vbmdvU3RvcmUoe1xuICAgIHVybDogbW9uZ29VcmwsXG4gICAgYXV0b1JlY29ubmVjdDogdHJ1ZSxcbiAgfSksXG59KSk7XG5cbi8vIGF1dGggbWlkZGxld2FyZVxuaW1wb3J0IHsgZGVmYXVsdCBhcyB1c2VyTW9kZWwsIHVzZXJUeXBlIH0gZnJvbSAnLi9tb2RlbHMvdXNlcic7XG5hcHAudXNlKChcbiAgcmVxOiBFeHByZXNzLlJlcXVlc3QsXG4gIHJlczogRXhwcmVzcy5SZXNwb25zZSxcbiAgbmV4dDogRXhwcmVzcy5OZXh0RnVuY3Rpb24sXG4gICkgPT4ge1xuICAvLyB2ZXJpZnkgYXV0aCBjcmVkZW50aWFsc1xuICBpZiAocmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbikge1xuICAgIGNvbnN0IGJhc2U2NENyZWRlbnRpYWxzID0gIHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24hLnNwbGl0KCcgJylbMV07XG4gICAgY29uc3QgY3JlZGVudGlhbHMgPSBCdWZmZXIuZnJvbShiYXNlNjRDcmVkZW50aWFscywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCdhc2NpaScpO1xuICAgIGNvbnN0IFt1c2VyaWRdID0gY3JlZGVudGlhbHMuc3BsaXQoJzonKTtcblxuICAgIGxvZ2dlci5kZWJ1Zyh1c2VyaWQpO1xuICAgIHVzZXJNb2RlbC5maW5kT25lKHsgaWQ6IHVzZXJpZCB9LCAoZXJyOiBhbnksIHVzZXI6IHVzZXJUeXBlKSA9PiB7XG4gICAgICByZXEuc2Vzc2lvbiFbJ3VzZXInXSA9IHVzZXI7XG4gICAgfSk7XG4gIH1cblxuICBuZXh0KCk7XG59KTtcblxuLyoqXG4gKiByb3V0ZXNcbiAqL1xuaW1wb3J0ICogYXMgdmlkZW9Sb3V0ZSBmcm9tICcuL2NvbnRyb2xsZXJzL3ZpZGVvJztcblxuLy8gYWRkIHJvdXRlc1xuYXBwLnVzZSgnL3ZpZGVvcycsIHZpZGVvUm91dGUuZGVmYXVsdCk7XG5cbmFwcC5nZXQoXG4gICcvdmVyc2lvbicsXG4gIChyZXE6IEV4cHJlc3MuUmVxdWVzdCwgcmVzOiBFeHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgIHR5cGU6ICdzZXJ2ZXJfdmVyc2lvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHZlcnNpb246IDEuMDEsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnYnV6enRvbiBzZXJ2ZXInLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUdBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/controllers/video.ts":
/*!**********************************!*\
  !*** ./src/controllers/video.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v1 */ \"uuid/v1\");\n/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fluent-ffmpeg */ \"fluent-ffmpeg\");\n/* harmony import */ var fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/logger */ \"./src/util/logger.ts\");\n/* harmony import */ var _models_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/video */ \"./src/models/video.ts\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/user */ \"./src/models/user.ts\");\n\n\n\n\n\n\n\n\n\nvar uploaddir = path__WEBPACK_IMPORTED_MODULE_1__[\"join\"]('upload');\nvar router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nvar upload = multer__WEBPACK_IMPORTED_MODULE_3__({ dest: uploaddir });\nvar videourlroot = '/videos';\nvar outdir = 'out';\nrouter.get('/', function (req, res) {\n    _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].debug(req.session['user']);\n    _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].find()\n        .populate('user')\n        .exec(function (err, docs) {\n        return res.json({\n            videos: docs,\n        });\n    });\n});\nrouter.get('/:id', function (req, res) {\n    var videoId = req.params.id;\n    _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({ vaild: true, id: videoId })\n        .populate('user')\n        .populate({ path: 'comments', populate: {\n            path: 'user',\n            model: _models_user__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        } })\n        .exec(function (err, doc) {\n        return res.json(doc);\n    });\n});\nrouter.post('/', upload.single('video'), function (req, res) {\n    var uuid = uuid_v1__WEBPACK_IMPORTED_MODULE_4__();\n    if (req.file) {\n        if (req.file.path) {\n            if (/\\.mp4/i.test(req.file.originalname)) {\n                var messageTags = [];\n                var messageText = '';\n                if (req.body.message) {\n                    messageText = req.body.message;\n                    messageTags = findTags(messageText);\n                }\n                var video_1 = new _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n                    id: uuid,\n                    user: req.session['user'],\n                    url: videourlroot + \"/\" + uuid + \"/video.m3u8\",\n                    vaild: true,\n                    rank: 1,\n                    comments: [],\n                    tags: messageTags,\n                    message: messageText,\n                    reactions: {\n                        like: 0,\n                    },\n                });\n                fs__WEBPACK_IMPORTED_MODULE_2__[\"mkdirSync\"](outdir + \"/\" + uuid);\n                var output = outdir + \"/\" + uuid + \"/video.m3u8\";\n                fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_5__(fs__WEBPACK_IMPORTED_MODULE_2__[\"createReadStream\"](req.file.path))\n                    .outputOptions([\n                    '-c:v copy',\n                    '-c:a copy',\n                ])\n                    .on('progress', function (progress, stdout, stderr) {\n                    _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].debug(\"progress: \" + progress.percent + \"%\");\n                })\n                    .on('stderr', function (stderr) {\n                    _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"stderr: \" + stderr);\n                })\n                    .on('error', function (err, stdout, stderr) {\n                    _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"Cannot process video: \" + err.message);\n                    fs__WEBPACK_IMPORTED_MODULE_2__[\"unlink\"](req.file.path, function (err) {\n                        if (err) {\n                            _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error('error. unlink file');\n                        }\n                    });\n                })\n                    .on('end', function (stdout, stderr) {\n                    _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].info(\"Transcoding succeeded! video-id:\" + uuid + \",\" +\n                        (\" uploaded by \" + req.session['user'].name));\n                    video_1.save(function (err) {\n                        if (err) {\n                            _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(err);\n                        }\n                    });\n                    fs__WEBPACK_IMPORTED_MODULE_2__[\"unlink\"](req.file.path, function (err) {\n                        if (err) {\n                            _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error('error. unlink file');\n                        }\n                    });\n                })\n                    .output(output)\n                    .run();\n                return res.json(video_1);\n            }\n        }\n    }\n    else {\n        _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error('No file found in uploaded request body.');\n        return res.status(400).json({ message: 'No file found in uploaded request body.' });\n    }\n    return res.send(400);\n});\nrouter.put('/:id', function (req, res) {\n    var videoId = req.params.id;\n    var message = req.body.message;\n    if (message) {\n        var messageTags_1 = findTags(message);\n        _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({ vaild: true, id: videoId })\n            .populate('user')\n            .populate({ path: 'comments', populate: {\n                path: 'user',\n                model: _models_user__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            } })\n            .exec(function (err, doc) {\n            doc.message = message;\n            doc.tags = messageTags_1;\n            doc.save();\n            return res.json(doc);\n        });\n    }\n    return res.send(400);\n});\nrouter.patch('/:id', function (req, res) {\n    var videoId = req.params.id;\n    var valid = req.body.valid;\n    if (valid != null) {\n        _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({ id: videoId })\n            .exec(function (err, doc) {\n            doc.vaild = valid;\n            doc.save();\n        });\n    }\n    return res.send(200);\n});\nrouter.delete('/:id', function (req, res) {\n    var videoId = req.params.id;\n    _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].deleteOne({ vaild: false, id: videoId })\n        .exec(function (err) {\n        return res.send(200);\n    });\n});\nrouter.post('/:id/comments', function (req, res) {\n    if (req.body && req.body.message) {\n        var videoId = req.params.id;\n        var message = req.body.message;\n        var comment_1 = new _models_user__WEBPACK_IMPORTED_MODULE_8__[\"commentModel\"]({ text: message, user: req.session['user'], like: 0 });\n        _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({ vaild: true, id: videoId })\n            .exec(function (err, doc) {\n            if (doc) {\n                comment_1.save();\n                doc.comments.push(comment_1._id);\n                doc.save();\n            }\n        });\n        return res.send(200);\n    }\n    return res.send(400);\n});\nrouter.delete('/:id/comments/:commentid', function (req, res) {\n    var videoId = req.params.id;\n    var commentId = req.params.commentid;\n    _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({ vaild: true, id: videoId })\n        .exec(function (err, doc) {\n        if (doc) {\n            var comments_1 = doc.comments;\n            comments_1.forEach(function (c, i) {\n                if (c.id === commentId) {\n                    comments_1.splice(i, 1);\n                }\n            });\n            doc.comments = comments_1;\n            _models_user__WEBPACK_IMPORTED_MODULE_8__[\"commentModel\"].deleteOne({ _id: commentId }).exec();\n            doc.save();\n        }\n    });\n    return res.send(200);\n});\nrouter.post('/:id/reactions/like', function (req, res) {\n    if (req.body && req.body.message) {\n        var videoId = req.params.id;\n        _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({ vaild: true, id: videoId })\n            .exec(function (err, doc) {\n            if (doc) {\n                doc.reactions.like = doc.reactions.like + 1;\n                doc.save();\n            }\n        });\n        return res.send(200);\n    }\n    return res.send(400);\n});\nrouter.delete('/:id/reactions/like', function (req, res) {\n    if (req.body && req.body.message) {\n        var videoId = req.params.id;\n        _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({ vaild: true, id: videoId })\n            .exec(function (err, doc) {\n            if (doc) {\n                doc.reactions.like = doc.reactions.like - 1;\n                if (doc.reactions.like < 0)\n                    doc.reactions.like = 0;\n                doc.save();\n            }\n        });\n        return res.send(200);\n    }\n    return res.send(400);\n});\nfunction findTags(message) {\n    var tags = [];\n    if (message) {\n        tags = message.match(/\\#[^\\s]+/g);\n    }\n    return tags || [];\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlcnMvdmlkZW8udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdmlkZW8udHM/ZjNiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIG11bHRlciBmcm9tICdtdWx0ZXInO1xuaW1wb3J0ICogYXMgdXVpZHYxIGZyb20gJ3V1aWQvdjEnO1xuaW1wb3J0ICogYXMgZmZtcGVnIGZyb20gJ2ZsdWVudC1mZm1wZWcnO1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuaW1wb3J0IHZpZGVvLCB7IGRlZmF1bHQgYXMgVmlkZW8sIHZpZGVvVHlwZSB9IGZyb20gJy4uL21vZGVscy92aWRlbyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHVzZXJNb2RlbCwgY29tbWVudFR5cGUsIGNvbW1lbnRNb2RlbCB9IGZyb20gJy4uL21vZGVscy91c2VyJztcblxuY29uc3QgdXBsb2FkZGlyID0gcGF0aC5qb2luKCd1cGxvYWQnKTtcbmNvbnN0IHJvdXRlciA9IEV4cHJlc3MuUm91dGVyKCk7XG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoeyBkZXN0OiB1cGxvYWRkaXIgfSk7XG5cbi8vIGxldCBkZWZhdWx0VXNlcjp1c2VyVHlwZTtcbmNvbnN0IHZpZGVvdXJscm9vdCA9ICcvdmlkZW9zJztcbmNvbnN0IG91dGRpciA9ICdvdXQnO1xuXG4vKipcbiAqIFJlc3BvbnNlIHZpZGVvIGxpc3RzXG4gKi9cbnJvdXRlci5nZXQoXG4gICcvJyxcbiAgKHJlcTogRXhwcmVzcy5SZXF1ZXN0LCByZXM6IEV4cHJlc3MuUmVzcG9uc2UpID0+IHtcbiAgICBsb2dnZXIuZGVidWcocmVxLnNlc3Npb24hWyd1c2VyJ10pO1xuICAgIHZpZGVvLmZpbmQoKVxuICAgIC5wb3B1bGF0ZSgndXNlcicpXG4gICAgLmV4ZWMoKGVycjogYW55LCBkb2NzOiB2aWRlb1R5cGVbXSkgPT4ge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKHtcbiAgICAgICAgdmlkZW9zOiBkb2NzLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4pO1xuXG4vKipcbiAqIGdldCB2aWRlb1xuICovXG5yb3V0ZXIuZ2V0KFxuICAnLzppZCcsXG4gIChyZXE6IEV4cHJlc3MuUmVxdWVzdCwgcmVzOiBFeHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgdmlkZW9JZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgdmlkZW8uZmluZE9uZSh7IHZhaWxkOnRydWUsIGlkOiB2aWRlb0lkIH0pXG4gICAgLnBvcHVsYXRlKCd1c2VyJylcbiAgICAucG9wdWxhdGUoeyBwYXRoOiAnY29tbWVudHMnLCBwb3B1bGF0ZToge1xuICAgICAgcGF0aDogJ3VzZXInLFxuICAgICAgbW9kZWw6IHVzZXJNb2RlbCxcbiAgICB9fSlcbiAgICAuZXhlYygoZXJyOiBhbnksIGRvYzogdmlkZW9UeXBlKSA9PiB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oZG9jKTtcbiAgICB9KTtcbiAgfSxcbik7XG5cbi8qKlxuICogdXBsb2FkIHZpZGVvXG4gKi9cbnJvdXRlci5wb3N0KFxuICAnLycsXG4gIHVwbG9hZC5zaW5nbGUoJ3ZpZGVvJyksXG4gIChyZXE6IEV4cHJlc3MuUmVxdWVzdCwgcmVzOiBFeHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgdXVpZCA9IHV1aWR2MSgpO1xuICAgIGlmIChyZXEuZmlsZSkge1xuICAgICAgaWYgKHJlcS5maWxlLnBhdGgpIHsgLy8gZmlsZSBmb3VuZFxuICAgICAgICAvLyBjaGVjayBmaWxlIGZvcm1hdFxuICAgICAgICBpZiAoL1xcLm1wNC9pLnRlc3QocmVxLmZpbGUub3JpZ2luYWxuYW1lKSkge1xuICAgICAgICAgIGxldCBtZXNzYWdlVGFnczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgICBsZXQgbWVzc2FnZVRleHQ6IHN0cmluZyA9ICcnO1xuICAgICAgICAgIGlmIChyZXEuYm9keS5tZXNzYWdlKSB7XG4gICAgICAgICAgICBtZXNzYWdlVGV4dCA9IHJlcS5ib2R5Lm1lc3NhZ2U7XG4gICAgICAgICAgICBtZXNzYWdlVGFncyA9IGZpbmRUYWdzKG1lc3NhZ2VUZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB2aWRlbyA9IG5ldyBWaWRlbyh7XG4gICAgICAgICAgICBpZDogdXVpZCxcbiAgICAgICAgICAgIHVzZXI6IHJlcS5zZXNzaW9uIVsndXNlciddLFxuICAgICAgICAgICAgdXJsOiBgJHt2aWRlb3VybHJvb3R9LyR7dXVpZH0vdmlkZW8ubTN1OGAsXG4gICAgICAgICAgICB2YWlsZDogdHJ1ZSxcbiAgICAgICAgICAgIHJhbms6IDEsXG4gICAgICAgICAgICBjb21tZW50czogW10sXG4gICAgICAgICAgICB0YWdzOiBtZXNzYWdlVGFncyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VUZXh0LFxuICAgICAgICAgICAgcmVhY3Rpb25zOiB7XG4gICAgICAgICAgICAgIGxpa2U6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gY3JlYXRlIGRpcmVjdG9yeSBpbiBvdXRwdXQgZGlyZWN0b3J5XG4gICAgICAgICAgZnMubWtkaXJTeW5jKGAke291dGRpcn0vJHt1dWlkfWApO1xuICAgICAgICAgIGNvbnN0IG91dHB1dCA9IGAke291dGRpcn0vJHt1dWlkfS92aWRlby5tM3U4YDtcbiAgICAgICAgICAvLyBkbyBmZm1wZWcgKGNvbnZlciBtcDQgdG8gbTN1OClcbiAgICAgICAgICBmZm1wZWcoZnMuY3JlYXRlUmVhZFN0cmVhbShyZXEuZmlsZS5wYXRoKSlcbiAgICAgICAgICAub3V0cHV0T3B0aW9ucyhbXG4gICAgICAgICAgICAnLWM6diBjb3B5JyxcbiAgICAgICAgICAgICctYzphIGNvcHknLFxuICAgICAgICAgIF0pXG4gICAgICAgICAgLm9uKCdwcm9ncmVzcycsIChwcm9ncmVzcywgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgcHJvZ3Jlc3M6ICR7cHJvZ3Jlc3MucGVyY2VudH0lYCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAub24oJ3N0ZGVycicsIChzdGRlcnIpID0+IHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgc3RkZXJyOiAke3N0ZGVycn1gKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vbignZXJyb3InLCAoZXJyLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBDYW5ub3QgcHJvY2VzcyB2aWRlbzogJHtlcnIubWVzc2FnZX1gKTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRlbXBvcmFyeSBmaWxlXG4gICAgICAgICAgICBmcy51bmxpbmsocmVxLmZpbGUucGF0aCwgKGVycikgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdlcnJvci4gdW5saW5rIGZpbGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAub24oJ2VuZCcsIChzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgbG9nZ2VyLmluZm8oYFRyYW5zY29kaW5nIHN1Y2NlZWRlZCEgdmlkZW8taWQ6JHt1dWlkfSxgICtcbiAgICAgICAgICAgIGAgdXBsb2FkZWQgYnkgJHtyZXEuc2Vzc2lvbiFbJ3VzZXInXS5uYW1lfWApO1xuXG4gICAgICAgICAgICAvLyBzYXZlXG4gICAgICAgICAgICB2aWRlby5zYXZlKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgdGVtcG9yYXJ5IGZpbGVcbiAgICAgICAgICAgIGZzLnVubGluayhyZXEuZmlsZS5wYXRoLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ2Vycm9yLiB1bmxpbmsgZmlsZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vdXRwdXQob3V0cHV0KVxuICAgICAgICAgIC5ydW4oKTtcblxuICAgICAgICAgIC8vIHdoZW4gc3VjY2Vzc1xuICAgICAgICAgIHJldHVybiByZXMuanNvbih2aWRlbyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9nZ2VyLmVycm9yKCdObyBmaWxlIGZvdW5kIGluIHVwbG9hZGVkIHJlcXVlc3QgYm9keS4nKTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdObyBmaWxlIGZvdW5kIGluIHVwbG9hZGVkIHJlcXVlc3QgYm9keS4nIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXMuc2VuZCg0MDApO1xuICB9LFxuKTtcblxuLyoqXG4gKiB1cGRhdGUgdmlkZW9cbiAqL1xucm91dGVyLnB1dChcbiAgJy86aWQnLFxuICAocmVxOiBFeHByZXNzLlJlcXVlc3QsIHJlczogRXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHZpZGVvSWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSByZXEuYm9keS5tZXNzYWdlO1xuICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlVGFnczogc3RyaW5nW10gPSBmaW5kVGFncyhtZXNzYWdlKTtcbiAgICAgIHZpZGVvLmZpbmRPbmUoeyB2YWlsZDp0cnVlLCBpZDogdmlkZW9JZCB9KVxuICAgICAgLnBvcHVsYXRlKCd1c2VyJylcbiAgICAgIC5wb3B1bGF0ZSh7IHBhdGg6ICdjb21tZW50cycsIHBvcHVsYXRlOiB7XG4gICAgICAgIHBhdGg6ICd1c2VyJyxcbiAgICAgICAgbW9kZWw6IHVzZXJNb2RlbCxcbiAgICAgIH19KVxuICAgICAgLmV4ZWMoKGVycjogYW55LCBkb2M6IHZpZGVvVHlwZSkgPT4ge1xuICAgICAgICBkb2MubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIGRvYy50YWdzID0gbWVzc2FnZVRhZ3M7XG4gICAgICAgIGRvYy5zYXZlKCk7XG4gICAgICAgIHJldHVybiByZXMuanNvbihkb2MpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5zZW5kKDQwMCk7XG4gIH0sXG4pO1xuXG4vKipcbiAqIG1vZGlmeSB2YWxpZC9pbnZhbGlkIHZpZGVvXG4gKi9cbnJvdXRlci5wYXRjaChcbiAgJy86aWQnLFxuICAocmVxOiBFeHByZXNzLlJlcXVlc3QsIHJlczogRXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHZpZGVvSWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGNvbnN0IHZhbGlkID0gcmVxLmJvZHkudmFsaWQ7XG4gICAgaWYgKHZhbGlkICE9IG51bGwpIHtcbiAgICAgIHZpZGVvLmZpbmRPbmUoeyBpZDogdmlkZW9JZCB9KVxuICAgICAgLmV4ZWMoKGVycjogYW55LCBkb2M6IHZpZGVvVHlwZSkgPT4ge1xuICAgICAgICBkb2MudmFpbGQgPSB2YWxpZDtcbiAgICAgICAgZG9jLnNhdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLnNlbmQoMjAwKTtcbiAgfSxcbik7XG5cbi8qKlxuICogZGVsZXRlIHZpZGVvXG4gKi9cbnJvdXRlci5kZWxldGUoXG4gICcvOmlkJyxcbiAgKHJlcTogRXhwcmVzcy5SZXF1ZXN0LCByZXM6IEV4cHJlc3MuUmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCB2aWRlb0lkID0gcmVxLnBhcmFtcy5pZDtcbiAgICB2aWRlby5kZWxldGVPbmUoeyB2YWlsZDpmYWxzZSwgaWQ6IHZpZGVvSWQgfSlcbiAgICAuZXhlYygoZXJyOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiByZXMuc2VuZCgyMDApO1xuICAgIH0pO1xuICB9LFxuKTtcblxuLyoqXG4gKiBjb21tZW50IHRvIHZpZGVvXG4gKi9cbnJvdXRlci5wb3N0KFxuICAnLzppZC9jb21tZW50cycsXG4gIChyZXE6IEV4cHJlc3MuUmVxdWVzdCwgcmVzOiBFeHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKHJlcS5ib2R5ICYmIHJlcS5ib2R5Lm1lc3NhZ2UpIHtcbiAgICAgIGNvbnN0IHZpZGVvSWQgPSByZXEucGFyYW1zLmlkO1xuICAgICAgY29uc3QgbWVzc2FnZSA9IHJlcS5ib2R5Lm1lc3NhZ2U7XG4gICAgICBjb25zdCBjb21tZW50OiBjb21tZW50VHlwZSA9IDxjb21tZW50VHlwZT5uZXcgY29tbWVudE1vZGVsKFxuICAgICAgICB7IHRleHQ6IG1lc3NhZ2UsIHVzZXI6IHJlcS5zZXNzaW9uIVsndXNlciddLCBsaWtlOiAwIH0pO1xuICAgICAgdmlkZW8uZmluZE9uZSh7IHZhaWxkOnRydWUsIGlkOiB2aWRlb0lkIH0pXG4gICAgICAuZXhlYygoZXJyOiBhbnksIGRvYzogdmlkZW9UeXBlKSA9PiB7XG4gICAgICAgIGlmIChkb2MpIHtcbiAgICAgICAgICBjb21tZW50LnNhdmUoKTtcbiAgICAgICAgICBkb2MuY29tbWVudHMucHVzaChjb21tZW50Ll9pZCk7XG4gICAgICAgICAgZG9jLnNhdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzLnNlbmQoMjAwKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5zZW5kKDQwMCk7XG4gIH0sXG4pO1xuXG4vKipcbiAqIGRlbGV0ZSBjb21tZW50IG9mIHZpZGVvXG4gKi9cbnJvdXRlci5kZWxldGUoXG4gICcvOmlkL2NvbW1lbnRzLzpjb21tZW50aWQnLFxuICAocmVxOiBFeHByZXNzLlJlcXVlc3QsIHJlczogRXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHZpZGVvSWQgPSByZXEucGFyYW1zLmlkO1xuICAgIGNvbnN0IGNvbW1lbnRJZDogc3RyaW5nID0gcmVxLnBhcmFtcy5jb21tZW50aWQ7XG4gICAgdmlkZW8uZmluZE9uZSh7IHZhaWxkOnRydWUsIGlkOiB2aWRlb0lkIH0pXG4gICAgLmV4ZWMoKGVycjogYW55LCBkb2M6IHZpZGVvVHlwZSkgPT4ge1xuICAgICAgaWYgKGRvYykge1xuICAgICAgICBjb25zdCBjb21tZW50cyA9IGRvYy5jb21tZW50cztcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCgoYywgaSkgPT4ge1xuICAgICAgICAgIGlmIChjLmlkID09PSBjb21tZW50SWQpIHtcbiAgICAgICAgICAgIGNvbW1lbnRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBkb2MuY29tbWVudHMgPSBjb21tZW50cztcbiAgICAgICAgY29tbWVudE1vZGVsLmRlbGV0ZU9uZSh7IF9pZDogY29tbWVudElkIH0pLmV4ZWMoKTtcbiAgICAgICAgZG9jLnNhdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzLnNlbmQoMjAwKTtcbiAgfSxcbik7XG5cbiAvKipcbiAgKiByZWFjdGlvbiBsaWtlXG4gICovXG5yb3V0ZXIucG9zdChcbiAgJy86aWQvcmVhY3Rpb25zL2xpa2UnLFxuICAocmVxOiBFeHByZXNzLlJlcXVlc3QsIHJlczogRXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGlmIChyZXEuYm9keSAmJiByZXEuYm9keS5tZXNzYWdlKSB7XG4gICAgICBjb25zdCB2aWRlb0lkID0gcmVxLnBhcmFtcy5pZDtcbiAgICAgIHZpZGVvLmZpbmRPbmUoeyB2YWlsZDp0cnVlLCBpZDogdmlkZW9JZCB9KVxuICAgICAgLmV4ZWMoKGVycjogYW55LCBkb2M6IHZpZGVvVHlwZSkgPT4ge1xuICAgICAgICBpZiAoZG9jKSB7XG4gICAgICAgICAgZG9jLnJlYWN0aW9ucy5saWtlID0gZG9jLnJlYWN0aW9ucy5saWtlICsgMTtcbiAgICAgICAgICBkb2Muc2F2ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXMuc2VuZCgyMDApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLnNlbmQoNDAwKTtcbiAgfSxcbik7XG5cbi8qKlxuICAqIHJlYWN0aW9uIHVubGlrZVxuICAqL1xucm91dGVyLmRlbGV0ZShcbiAgJy86aWQvcmVhY3Rpb25zL2xpa2UnLFxuICAocmVxOiBFeHByZXNzLlJlcXVlc3QsIHJlczogRXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGlmIChyZXEuYm9keSAmJiByZXEuYm9keS5tZXNzYWdlKSB7XG4gICAgICBjb25zdCB2aWRlb0lkID0gcmVxLnBhcmFtcy5pZDtcbiAgICAgIHZpZGVvLmZpbmRPbmUoeyB2YWlsZDp0cnVlLCBpZDogdmlkZW9JZCB9KVxuICAgICAgLmV4ZWMoKGVycjogYW55LCBkb2M6IHZpZGVvVHlwZSkgPT4ge1xuICAgICAgICBpZiAoZG9jKSB7XG4gICAgICAgICAgZG9jLnJlYWN0aW9ucy5saWtlID0gZG9jLnJlYWN0aW9ucy5saWtlIC0gMTtcbiAgICAgICAgICBpZiAoZG9jLnJlYWN0aW9ucy5saWtlIDwgMCkgZG9jLnJlYWN0aW9ucy5saWtlID0gMDtcbiAgICAgICAgICBkb2Muc2F2ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXMuc2VuZCgyMDApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLnNlbmQoNDAwKTtcbiAgfSxcbik7XG5cbmZ1bmN0aW9uIGZpbmRUYWdzKG1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgbGV0IHRhZ3M6IHN0cmluZ1tdfG51bGwgPSBbXTtcbiAgaWYgKG1lc3NhZ2UpIHtcbiAgICB0YWdzID0gbWVzc2FnZS5tYXRjaCgvXFwjW15cXHNdKy9nKTtcbiAgfVxuICByZXR1cm4gdGFncyB8fCBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/controllers/video.ts\n");

/***/ }),

/***/ "./src/models/user.ts":
/*!****************************!*\
  !*** ./src/models/user.ts ***!
  \****************************/
/*! exports provided: userModel, commentModel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userModel\", function() { return userModel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"commentModel\", function() { return commentModel; });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"];\nvar userSchema = new Schema({\n    name: String,\n    id: String,\n});\nvar commentSchema = new Schema({\n    user: { type: Schema.Types.ObjectId, ref: 'User' },\n    like: Number,\n    text: String,\n});\nvar userModel = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"]('User', userSchema);\nvar commentModel = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"]('Comment', commentSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL3VzZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3VzZXIudHM/NmI4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5cbmV4cG9ydCB0eXBlIHVzZXJUeXBlID0gbW9uZ29vc2UuRG9jdW1lbnQgJiB7XG4gIG5hbWU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyxcbn07XG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIG5hbWU6IFN0cmluZyxcbiAgaWQ6IFN0cmluZyxcbn0pO1xuXG5leHBvcnQgdHlwZSBjb21tZW50VHlwZSA9IG1vbmdvb3NlLkRvY3VtZW50ICYge1xuICB1c2VyOiB1c2VyVHlwZSxcbiAgbGlrZTogbnVtYmVyLFxuICB0ZXh0OiBzdHJpbmcsXG59O1xuY29uc3QgY29tbWVudFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICB1c2VyOiB7IHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnVXNlcicgfSxcbiAgbGlrZTogTnVtYmVyLFxuICB0ZXh0OiBTdHJpbmcsXG59KTtcblxuY29uc3QgdXNlck1vZGVsID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcbmNvbnN0IGNvbW1lbnRNb2RlbCA9IG1vbmdvb3NlLm1vZGVsKCdDb21tZW50JywgY29tbWVudFNjaGVtYSk7XG5cbmV4cG9ydCB7IHVzZXJNb2RlbCwgY29tbWVudE1vZGVsIH07XG5leHBvcnQgZGVmYXVsdCB1c2VyTW9kZWw7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/models/user.ts\n");

/***/ }),

/***/ "./src/models/video.ts":
/*!*****************************!*\
  !*** ./src/models/video.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"];\nvar videoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n    id: String,\n    user: { type: Schema.Types.ObjectId, ref: 'User' },\n    url: String,\n    vaild: Boolean,\n    rank: Number,\n    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],\n    tags: [String],\n    message: String,\n    reactions: {\n        like: Number,\n    },\n}, { timestamps: true });\nvar videoModel = mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"]('Video', videoSchema);\n/* harmony default export */ __webpack_exports__[\"default\"] = (videoModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL3ZpZGVvLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy92aWRlby50cz84M2VkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IHVzZXJUeXBlLCBjb21tZW50VHlwZSB9IGZyb20gJy4vdXNlcic7XG5cbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcblxuZXhwb3J0IHR5cGUgdmlkZW9UeXBlID0gbW9uZ29vc2UuRG9jdW1lbnQgJiB7XG4gIGlkOiBzdHJpbmcsXG4gIHVzZXI6IHVzZXJUeXBlLFxuICB1cmw6IHN0cmluZyxcbiAgdmFpbGQ6IGJvb2xlYW4sXG4gIHJhbms6IG51bWJlcixcbiAgY29tbWVudHM6IGNvbW1lbnRUeXBlW10sXG4gIHRhZ3M6IHN0cmluZ1tdLFxuICBtZXNzYWdlOiBzdHJpbmcsXG4gIHJlYWN0aW9uczoge1xuICAgIGxpa2UgOiBudW1iZXIsXG4gIH0sXG59O1xuXG5jb25zdCB2aWRlb1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBpZDogU3RyaW5nLFxuICAgIHVzZXI6IHsgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJyB9LFxuICAgIHVybDogU3RyaW5nLFxuICAgIHZhaWxkOiBCb29sZWFuLFxuICAgIHJhbms6IE51bWJlcixcbiAgICBjb21tZW50czogW3sgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdDb21tZW50JyB9XSxcbiAgICB0YWdzOiBbU3RyaW5nXSxcbiAgICBtZXNzYWdlOiBTdHJpbmcsXG4gICAgcmVhY3Rpb25zOiB7XG4gICAgICBsaWtlOiBOdW1iZXIsXG4gICAgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH0sXG4pO1xuXG5jb25zdCB2aWRlb01vZGVsID0gbW9uZ29vc2UubW9kZWwoJ1ZpZGVvJywgdmlkZW9TY2hlbWEpO1xuZXhwb3J0IGRlZmF1bHQgdmlkZW9Nb2RlbDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQWdCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/models/video.ts\n");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n\nvar server = _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen(_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('port'), function () {\n    console.log('  App is running at http://localhost:%d in %s mode', _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('port'), _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('env'));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (server);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cz8zNTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xuXG5jb25zdCBzZXJ2ZXIgPSBhcHAubGlzdGVuKGFwcC5nZXQoJ3BvcnQnKSwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcbiAgICAnICBBcHAgaXMgcnVubmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiVkIGluICVzIG1vZGUnLFxuICAgIGFwcC5nZXQoJ3BvcnQnKSxcbiAgICBhcHAuZ2V0KCdlbnYnKSxcbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFLQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server.ts\n");

/***/ }),

/***/ "./src/util/logger.ts":
/*!****************************!*\
  !*** ./src/util/logger.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);\n\nvar logger = winston__WEBPACK_IMPORTED_MODULE_0__[\"createLogger\"]({\n    format: winston__WEBPACK_IMPORTED_MODULE_0__[\"format\"].json(),\n    transports: [\n        new (winston__WEBPACK_IMPORTED_MODULE_0__[\"transports\"].Console)({\n            level:  false ? undefined : 'debug',\n        }),\n        new (winston__WEBPACK_IMPORTED_MODULE_0__[\"transports\"].File)({ filename: 'debug.log', level: 'debug' }),\n    ],\n});\nif (true) {\n    logger.debug('Logging initialized at debug level');\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (logger);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9sb2dnZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIudHM/MTM0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3aW5zdG9uIGZyb20gJ3dpbnN0b24nO1xuXG5jb25zdCBsb2dnZXIgPSB3aW5zdG9uLmNyZWF0ZUxvZ2dlcih7XG4gIGZvcm1hdDogd2luc3Rvbi5mb3JtYXQuanNvbigpLFxuICB0cmFuc3BvcnRzOiBbXG4gICAgbmV3ICh3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSkoe1xuICAgICAgbGV2ZWw6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnZXJyb3InIDogJ2RlYnVnJyxcbiAgICB9KSxcbiAgICBuZXcgKHdpbnN0b24udHJhbnNwb3J0cy5GaWxlKSh7IGZpbGVuYW1lOiAnZGVidWcubG9nJywgbGV2ZWw6ICdkZWJ1ZycgfSksXG4gIF0sXG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgbG9nZ2VyLmRlYnVnKCdMb2dnaW5nIGluaXRpYWxpemVkIGF0IGRlYnVnIGxldmVsJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util/logger.ts\n");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmx1ZWJpcmQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJibHVlYmlyZFwiPzJjNmIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmx1ZWJpcmRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///bluebird\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHJlc3Npb24uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiP2Y3OTEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///compression\n");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-mongo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC1tb25nby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImNvbm5lY3QtbW9uZ29cIj9iZGQ3Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3QtbW9uZ29cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///connect-mongo\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy1zZXNzaW9uLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzcy1zZXNzaW9uXCI/NjM0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express-session\n");

/***/ }),

/***/ "fluent-ffmpeg":
/*!********************************!*\
  !*** external "fluent-ffmpeg" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fluent-ffmpeg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmx1ZW50LWZmbXBlZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImZsdWVudC1mZm1wZWdcIj85M2Q4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZsdWVudC1mZm1wZWdcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///fluent-ffmpeg\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXVsdGVyXCI/YTcwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtdWx0ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///multer\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj83NGJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v1\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXVpZC92MS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInV1aWQvdjFcIj8xZDhhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWQvdjFcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///uuid/v1\n");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luc3Rvbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIndpbnN0b25cIj83OTdjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndpbnN0b25cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///winston\n");

/***/ })

/******/ });