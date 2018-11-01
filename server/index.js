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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connect-mongo */ \"connect-mongo\");\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(connect_mongo__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bluebird */ \"bluebird\");\n/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/logger */ \"./src/util/logger.ts\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/user */ \"./src/models/user.ts\");\n/* harmony import */ var _controllers_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controllers/video */ \"./src/controllers/video.ts\");\n\n\n\n\n\n\n\n\nvar mongoStore = connect_mongo__WEBPACK_IMPORTED_MODULE_4__(express_session__WEBPACK_IMPORTED_MODULE_2__);\nvar mongoUrl = 'mongodb://mongodb/buzztondb';\nmongoose__WEBPACK_IMPORTED_MODULE_6__[\"Promise\"] = bluebird__WEBPACK_IMPORTED_MODULE_5__;\nmongoose__WEBPACK_IMPORTED_MODULE_6__[\"connect\"](mongoUrl, {\n    useNewUrlParser: true,\n    autoReconnect: true,\n    reconnectTries: 10,\n    reconnectInterval: 10,\n}).then(function () { }).catch(function (err) {\n    console.log(\"MongoDB connection error. Please make sure MongoDB is running. \" + err);\n});\nvar app = express__WEBPACK_IMPORTED_MODULE_0__();\napp.set('port', process.env.PORT || 8888);\napp.use(compression__WEBPACK_IMPORTED_MODULE_1__());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3__[\"json\"]());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3__[\"urlencoded\"]({ limit: '5mb', extended: true, parameterLimit: 100000 }));\napp.use(express_session__WEBPACK_IMPORTED_MODULE_2__({\n    resave: true,\n    saveUninitialized: true,\n    secret: 'buzztonoton',\n    store: new mongoStore({\n        url: mongoUrl,\n        autoReconnect: true,\n    }),\n}));\n\napp.use(function (req, res, next) {\n    var base64Credentials = req.headers.authorization.split(' ')[1];\n    var credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');\n    var userid = credentials.split(':')[0];\n    _util_logger__WEBPACK_IMPORTED_MODULE_7__[\"default\"].debug(userid);\n    _models_user__WEBPACK_IMPORTED_MODULE_8__[\"default\"].findOne({ id: userid }, function (err, user) {\n        req.session['user'] = user;\n    });\n    next();\n});\n\napp.use('/videos', _controllers_video__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.get('/version', function (req, res) {\n    return res.json({\n        type: 'server_version',\n        data: {\n            version: 1.01,\n            description: 'buzzton server',\n        },\n    });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz9lYjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgKiBhcyBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgKiBhcyBleHByZXNzU2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgKiBhcyBjb25uZWN0TW9uZ28gZnJvbSAnY29ubmVjdC1tb25nbyc7XG5pbXBvcnQgKiBhcyBibHVlYmlyZCBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmltcG9ydCBsb2dnZXIgZnJvbSAnLi91dGlsL2xvZ2dlcic7XG5cbi8vIGNvbnN0IG1vZGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcblxuY29uc3QgbW9uZ29TdG9yZSA9IGNvbm5lY3RNb25nbyhleHByZXNzU2Vzc2lvbik7XG4vLyBDb25uZWN0IHRvIE1vbmdvREIgLy8gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHxcbmNvbnN0IG1vbmdvVXJsID0gJ21vbmdvZGI6Ly9tb25nb2RiL2J1enp0b25kYic7XG4oPGFueT5tb25nb29zZSkuUHJvbWlzZSA9IGJsdWViaXJkO1xubW9uZ29vc2UuY29ubmVjdChtb25nb1VybCwge1xuICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gIGF1dG9SZWNvbm5lY3Q6IHRydWUsXG4gIHJlY29ubmVjdFRyaWVzOiAxMCxcbiAgcmVjb25uZWN0SW50ZXJ2YWw6IDEwLFxufSkudGhlbihcbiAgKCkgPT4geyAvKiogcmVhZHkgdG8gdXNlLiBUaGUgYG1vbmdvb3NlLmNvbm5lY3QoKWAgcHJvbWlzZSByZXNvbHZlcyB0byB1bmRlZmluZWQuICovIH0sXG4pLmNhdGNoKChlcnI6YW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKGBNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3IuIFBsZWFzZSBtYWtlIHN1cmUgTW9uZ29EQiBpcyBydW5uaW5nLiAke2Vycn1gKTtcbiAgLy8gcHJvY2Vzcy5leGl0KCk7XG59KTtcblxuY29uc3QgYXBwID0gRXhwcmVzcygpO1xuYXBwLnNldCgncG9ydCcsIHByb2Nlc3MuZW52LlBPUlQgfHwgODg4OCk7XG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGxpbWl0Oic1bWInLCBleHRlbmRlZDogdHJ1ZSwgcGFyYW1ldGVyTGltaXQ6IDEwMDAwMCB9KSk7XG5hcHAudXNlKGV4cHJlc3NTZXNzaW9uKHtcbiAgcmVzYXZlOiB0cnVlLFxuICBzYXZlVW5pbml0aWFsaXplZDogdHJ1ZSxcbiAgc2VjcmV0OiAnYnV6enRvbm90b24nLFxuICBzdG9yZTogbmV3IG1vbmdvU3RvcmUoe1xuICAgIHVybDogbW9uZ29VcmwsXG4gICAgYXV0b1JlY29ubmVjdDogdHJ1ZSxcbiAgfSksXG59KSk7XG5cbi8vIGF1dGggbWlkZGxld2FyZVxuaW1wb3J0IHsgZGVmYXVsdCBhcyB1c2VyTW9kZWwsIHVzZXJUeXBlIH0gZnJvbSAnLi9tb2RlbHMvdXNlcic7XG5hcHAudXNlKChcbiAgcmVxOiBFeHByZXNzLlJlcXVlc3QsXG4gIHJlczogRXhwcmVzcy5SZXNwb25zZSxcbiAgbmV4dDogRXhwcmVzcy5OZXh0RnVuY3Rpb24sXG4gICkgPT4ge1xuICAvLyB2ZXJpZnkgYXV0aCBjcmVkZW50aWFsc1xuICBjb25zdCBiYXNlNjRDcmVkZW50aWFscyA9ICByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uIS5zcGxpdCgnICcpWzFdO1xuICBjb25zdCBjcmVkZW50aWFscyA9IEJ1ZmZlci5mcm9tKGJhc2U2NENyZWRlbnRpYWxzLCAnYmFzZTY0JykudG9TdHJpbmcoJ2FzY2lpJyk7XG4gIGNvbnN0IFt1c2VyaWRdID0gY3JlZGVudGlhbHMuc3BsaXQoJzonKTtcblxuICBsb2dnZXIuZGVidWcodXNlcmlkKTtcbiAgdXNlck1vZGVsLmZpbmRPbmUoeyBpZDogdXNlcmlkIH0sIChlcnI6IGFueSwgdXNlcjogdXNlclR5cGUpID0+IHtcbiAgICByZXEuc2Vzc2lvbiFbJ3VzZXInXSA9IHVzZXI7XG4gIH0pO1xuXG4gIG5leHQoKTtcbn0pO1xuXG4vKipcbiAqIHJvdXRlc1xuICovXG5pbXBvcnQgKiBhcyB2aWRlb1JvdXRlIGZyb20gJy4vY29udHJvbGxlcnMvdmlkZW8nO1xuXG4vLyBhZGQgcm91dGVzXG5hcHAudXNlKCcvdmlkZW9zJywgdmlkZW9Sb3V0ZS5kZWZhdWx0KTtcblxuYXBwLmdldChcbiAgJy92ZXJzaW9uJyxcbiAgKHJlcTogRXhwcmVzcy5SZXF1ZXN0LCByZXM6IEV4cHJlc3MuUmVzcG9uc2UpID0+IHtcbiAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgdHlwZTogJ3NlcnZlcl92ZXJzaW9uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdmVyc2lvbjogMS4wMSxcbiAgICAgICAgZGVzY3JpcHRpb246ICdidXp6dG9uIHNlcnZlcicsXG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFHQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/controllers/video.ts":
/*!**********************************!*\
  !*** ./src/controllers/video.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v1 */ \"uuid/v1\");\n/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fluent-ffmpeg */ \"fluent-ffmpeg\");\n/* harmony import */ var fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/logger */ \"./src/util/logger.ts\");\n/* harmony import */ var _models_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/video */ \"./src/models/video.ts\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/user */ \"./src/models/user.ts\");\n\n\n\n\n\n\n\n\n\nvar uploaddir = path__WEBPACK_IMPORTED_MODULE_1__[\"join\"]('upload');\nvar router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nvar upload = multer__WEBPACK_IMPORTED_MODULE_3__({ dest: uploaddir });\nvar videourlroot = '/videos';\nvar outdir = 'out';\nrouter.get('/', function (req, res) {\n    _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].debug(req.session['user']);\n    _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].find()\n        .populate('user')\n        .exec(function (err, docs) {\n        return res.json({\n            videos: docs,\n        });\n    });\n});\nrouter.get('/:id', function (req, res) {\n    var videoId = req.params.id;\n    _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({ vaild: true, id: videoId })\n        .populate('user')\n        .populate({ path: 'comments', populate: {\n            path: 'user',\n            model: _models_user__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        } })\n        .exec(function (err, doc) {\n        return res.json(doc);\n    });\n});\nrouter.post('/', upload.single('video'), function (req, res) {\n    var uuid = uuid_v1__WEBPACK_IMPORTED_MODULE_4__();\n    if (req.file) {\n        if (req.file.path) {\n            if (/\\.mp4/i.test(req.file.originalname)) {\n                var messageTags = [];\n                var messageText = '';\n                if (req.body.message) {\n                    messageText = req.body.message;\n                    messageTags = findTags(messageText);\n                }\n                var video_1 = new _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n                    id: uuid,\n                    user: req.session['user'],\n                    url: videourlroot + \"/\" + uuid + \"/video.m3u8\",\n                    vaild: true,\n                    rank: 1,\n                    comments: [],\n                    tags: messageTags,\n                    message: messageText,\n                    reactions: {\n                        like: 0,\n                    },\n                });\n                fs__WEBPACK_IMPORTED_MODULE_2__[\"mkdirSync\"](outdir + \"/\" + uuid);\n                var output = outdir + \"/\" + uuid + \"/video.m3u8\";\n                fluent_ffmpeg__WEBPACK_IMPORTED_MODULE_5__(fs__WEBPACK_IMPORTED_MODULE_2__[\"createReadStream\"](req.file.path))\n                    .outputOptions([\n                    '-c:v copy',\n                    '-c:a copy',\n                ])\n                    .on('progress', function (progress, stdout, stderr) {\n                    _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].debug(\"progress: \" + progress.percent + \"%\");\n                })\n                    .on('stderr', function (stderr) {\n                    _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"stderr: \" + stderr);\n                })\n                    .on('error', function (err, stdout, stderr) {\n                    _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"Cannot process video: \" + err.message);\n                    fs__WEBPACK_IMPORTED_MODULE_2__[\"unlink\"](req.file.path, function (err) {\n                        if (err) {\n                            _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error('error. unlink file');\n                        }\n                    });\n                })\n                    .on('end', function (stdout, stderr) {\n                    _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].info(\"Transcoding succeeded! video-id:\" + uuid + \",\" +\n                        (\" uploaded by \" + req.session['user'].name));\n                    video_1.save(function (err) {\n                        if (err) {\n                            _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(err);\n                        }\n                    });\n                    fs__WEBPACK_IMPORTED_MODULE_2__[\"unlink\"](req.file.path, function (err) {\n                        if (err) {\n                            _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error('error. unlink file');\n                        }\n                    });\n                })\n                    .output(output)\n                    .run();\n                return res.json(video_1);\n            }\n        }\n    }\n    else {\n        _util_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error('No file found in uploaded request body.');\n        return res.status(400).json({ message: 'No file found in uploaded request body.' });\n    }\n    return res.send(400);\n});\nrouter.put('/:id', function (req, res) {\n    var videoId = req.params.id;\n    var message = req.body.message;\n    if (message) {\n        var messageTags_1 = findTags(message);\n        _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({ vaild: true, id: videoId })\n            .populate('user')\n            .populate({ path: 'comments', populate: {\n                path: 'user',\n                model: _models_user__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            } })\n            .exec(function (err, doc) {\n            doc.message = message;\n            doc.tags = messageTags_1;\n            doc.save();\n            return res.json(doc);\n        });\n    }\n    return res.send(400);\n});\nrouter.patch('/:id', function (req, res) {\n    var videoId = req.params.id;\n    var valid = req.body.valid;\n    if (valid != null) {\n        _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({ id: videoId })\n            .exec(function (err, doc) {\n            doc.vaild = valid;\n            doc.save();\n        });\n    }\n    return res.send(200);\n});\nrouter.delete('/:id', function (req, res) {\n    var videoId = req.params.id;\n    _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].deleteOne({ vaild: false, id: videoId })\n        .exec(function (err) {\n        return res.send(200);\n    });\n});\nrouter.post('/:id/comments', function (req, res) {\n    if (req.body && req.body.message) {\n        var videoId = req.params.id;\n        var message = req.body.message;\n        var comment_1 = new _models_user__WEBPACK_IMPORTED_MODULE_8__[\"commentModel\"]({ text: message, user: req.session['user'], like: 0 });\n        _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({ vaild: true, id: videoId })\n            .exec(function (err, doc) {\n            if (doc) {\n                comment_1.save();\n                doc.comments.push(comment_1._id);\n                doc.save();\n            }\n        });\n        return res.send(200);\n    }\n    return res.send(400);\n});\nrouter.delete('/:id/comments/:commentid', function (req, res) {\n    var videoId = req.params.id;\n    var commentId = req.params.commentid;\n    _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({ vaild: true, id: videoId })\n        .exec(function (err, doc) {\n        if (doc) {\n            var comments_1 = doc.comments;\n            comments_1.forEach(function (c, i) {\n                if (c.id === commentId) {\n                    comments_1.splice(i, 1);\n                }\n            });\n            doc.comments = comments_1;\n            _models_user__WEBPACK_IMPORTED_MODULE_8__[\"commentModel\"].deleteOne({ _id: commentId }).exec();\n            doc.save();\n        }\n    });\n    return res.send(200);\n});\nrouter.post('/:id/reactions/like', function (req, res) {\n    if (req.body && req.body.message) {\n        var videoId = req.params.id;\n        _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({ vaild: true, id: videoId })\n            .exec(function (err, doc) {\n            if (doc) {\n                doc.reactions.like = doc.reactions.like + 1;\n                doc.save();\n            }\n        });\n        return res.send(200);\n    }\n    return res.send(400);\n});\nrouter.delete('/:id/reactions/like', function (req, res) {\n    if (req.body && req.body.message) {\n        var videoId = req.params.id;\n        _models_video__WEBPACK_IMPORTED_MODULE_7__[\"default\"].findOne({ vaild: true, id: videoId })\n            .exec(function (err, doc) {\n            if (doc) {\n                doc.reactions.like = doc.reactions.like - 1;\n                if (doc.reactions.like < 0)\n                    doc.reactions.like = 0;\n                doc.save();\n            }\n        });\n        return res.send(200);\n    }\n    return res.send(400);\n});\nfunction findTags(message) {\n    var tags = [];\n    if (message) {\n        tags = message.match(/\\#[^\\s]+/g);\n    }\n    return tags || [];\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlcnMvdmlkZW8udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdmlkZW8udHM/ZjNiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIG11bHRlciBmcm9tICdtdWx0ZXInO1xuaW1wb3J0ICogYXMgdXVpZHYxIGZyb20gJ3V1aWQvdjEnO1xuaW1wb3J0ICogYXMgZmZtcGVnIGZyb20gJ2ZsdWVudC1mZm1wZWcnO1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuaW1wb3J0IHZpZGVvLCB7IGRlZmF1bHQgYXMgVmlkZW8sIHZpZGVvVHlwZSB9IGZyb20gJy4uL21vZGVscy92aWRlbyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHVzZXJNb2RlbCwgY29tbWVudFR5cGUsIGNvbW1lbnRNb2RlbCB9IGZyb20gJy4uL21vZGVscy91c2VyJztcblxuY29uc3QgdXBsb2FkZGlyID0gcGF0aC5qb2luKCd1cGxvYWQnKTtcbmNvbnN0IHJvdXRlciA9IEV4cHJlc3MuUm91dGVyKCk7XG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoeyBkZXN0OiB1cGxvYWRkaXIgfSk7XG5cbi8vIGxldCBkZWZhdWx0VXNlcjp1c2VyVHlwZTtcbmNvbnN0IHZpZGVvdXJscm9vdCA9ICcvdmlkZW9zJztcbmNvbnN0IG91dGRpciA9ICdvdXQnO1xuXG4vLyB1c2VyTW9kZWwuZmluZE9uZSh7IGlkOiAndXNlcjEnIH0sIChlcnI6IGFueSwgdXNlcjogdXNlclR5cGUpID0+IHtcbi8vICAgZGVmYXVsdFVzZXIgPSB1c2VyO1xuLy8gfSk7XG5cbi8qKlxuICogUmVzcG9uc2UgdmlkZW8gbGlzdHNcbiAqL1xucm91dGVyLmdldChcbiAgJy8nLFxuICAocmVxOiBFeHByZXNzLlJlcXVlc3QsIHJlczogRXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGxvZ2dlci5kZWJ1ZyhyZXEuc2Vzc2lvbiFbJ3VzZXInXSk7XG4gICAgdmlkZW8uZmluZCgpXG4gICAgLnBvcHVsYXRlKCd1c2VyJylcbiAgICAuZXhlYygoZXJyOiBhbnksIGRvY3M6IHZpZGVvVHlwZVtdKSA9PiB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICB2aWRlb3M6IGRvY3MsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbik7XG5cbi8qKlxuICogZ2V0IHZpZGVvXG4gKi9cbnJvdXRlci5nZXQoXG4gICcvOmlkJyxcbiAgKHJlcTogRXhwcmVzcy5SZXF1ZXN0LCByZXM6IEV4cHJlc3MuUmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCB2aWRlb0lkID0gcmVxLnBhcmFtcy5pZDtcbiAgICB2aWRlby5maW5kT25lKHsgdmFpbGQ6dHJ1ZSwgaWQ6IHZpZGVvSWQgfSlcbiAgICAucG9wdWxhdGUoJ3VzZXInKVxuICAgIC5wb3B1bGF0ZSh7IHBhdGg6ICdjb21tZW50cycsIHBvcHVsYXRlOiB7XG4gICAgICBwYXRoOiAndXNlcicsXG4gICAgICBtb2RlbDogdXNlck1vZGVsLFxuICAgIH19KVxuICAgIC5leGVjKChlcnI6IGFueSwgZG9jOiB2aWRlb1R5cGUpID0+IHtcbiAgICAgIHJldHVybiByZXMuanNvbihkb2MpO1xuICAgIH0pO1xuICB9LFxuKTtcblxuLyoqXG4gKiB1cGxvYWQgdmlkZW9cbiAqL1xucm91dGVyLnBvc3QoXG4gICcvJyxcbiAgdXBsb2FkLnNpbmdsZSgndmlkZW8nKSxcbiAgKHJlcTogRXhwcmVzcy5SZXF1ZXN0LCByZXM6IEV4cHJlc3MuUmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCB1dWlkID0gdXVpZHYxKCk7XG4gICAgaWYgKHJlcS5maWxlKSB7XG4gICAgICBpZiAocmVxLmZpbGUucGF0aCkgeyAvLyBmaWxlIGZvdW5kXG4gICAgICAgIC8vIGNoZWNrIGZpbGUgZm9ybWF0XG4gICAgICAgIGlmICgvXFwubXA0L2kudGVzdChyZXEuZmlsZS5vcmlnaW5hbG5hbWUpKSB7XG4gICAgICAgICAgbGV0IG1lc3NhZ2VUYWdzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICAgIGxldCBtZXNzYWdlVGV4dDogc3RyaW5nID0gJyc7XG4gICAgICAgICAgaWYgKHJlcS5ib2R5Lm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIG1lc3NhZ2VUZXh0ID0gcmVxLmJvZHkubWVzc2FnZTtcbiAgICAgICAgICAgIG1lc3NhZ2VUYWdzID0gZmluZFRhZ3MobWVzc2FnZVRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHZpZGVvID0gbmV3IFZpZGVvKHtcbiAgICAgICAgICAgIGlkOiB1dWlkLFxuICAgICAgICAgICAgdXNlcjogcmVxLnNlc3Npb24hWyd1c2VyJ10sXG4gICAgICAgICAgICB1cmw6IGAke3ZpZGVvdXJscm9vdH0vJHt1dWlkfS92aWRlby5tM3U4YCxcbiAgICAgICAgICAgIHZhaWxkOiB0cnVlLFxuICAgICAgICAgICAgcmFuazogMSxcbiAgICAgICAgICAgIGNvbW1lbnRzOiBbXSxcbiAgICAgICAgICAgIHRhZ3M6IG1lc3NhZ2VUYWdzLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVRleHQsXG4gICAgICAgICAgICByZWFjdGlvbnM6IHtcbiAgICAgICAgICAgICAgbGlrZTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBjcmVhdGUgZGlyZWN0b3J5IGluIG91dHB1dCBkaXJlY3RvcnlcbiAgICAgICAgICBmcy5ta2RpclN5bmMoYCR7b3V0ZGlyfS8ke3V1aWR9YCk7XG4gICAgICAgICAgY29uc3Qgb3V0cHV0ID0gYCR7b3V0ZGlyfS8ke3V1aWR9L3ZpZGVvLm0zdThgO1xuICAgICAgICAgIC8vIGRvIGZmbXBlZyAoY29udmVyIG1wNCB0byBtM3U4KVxuICAgICAgICAgIGZmbXBlZyhmcy5jcmVhdGVSZWFkU3RyZWFtKHJlcS5maWxlLnBhdGgpKVxuICAgICAgICAgIC5vdXRwdXRPcHRpb25zKFtcbiAgICAgICAgICAgICctYzp2IGNvcHknLFxuICAgICAgICAgICAgJy1jOmEgY29weScsXG4gICAgICAgICAgXSlcbiAgICAgICAgICAub24oJ3Byb2dyZXNzJywgKHByb2dyZXNzLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBwcm9ncmVzczogJHtwcm9ncmVzcy5wZXJjZW50fSVgKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vbignc3RkZXJyJywgKHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9uKCdlcnJvcicsIChlcnIsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoYENhbm5vdCBwcm9jZXNzIHZpZGVvOiAke2Vyci5tZXNzYWdlfWApO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgdGVtcG9yYXJ5IGZpbGVcbiAgICAgICAgICAgIGZzLnVubGluayhyZXEuZmlsZS5wYXRoLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ2Vycm9yLiB1bmxpbmsgZmlsZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vbignZW5kJywgKHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICBsb2dnZXIuaW5mbyhgVHJhbnNjb2Rpbmcgc3VjY2VlZGVkISB2aWRlby1pZDoke3V1aWR9LGAgK1xuICAgICAgICAgICAgYCB1cGxvYWRlZCBieSAke3JlcS5zZXNzaW9uIVsndXNlciddLm5hbWV9YCk7XG5cbiAgICAgICAgICAgIC8vIHNhdmVcbiAgICAgICAgICAgIHZpZGVvLnNhdmUoKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSB0ZW1wb3JhcnkgZmlsZVxuICAgICAgICAgICAgZnMudW5saW5rKHJlcS5maWxlLnBhdGgsIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcignZXJyb3IuIHVubGluayBmaWxlJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm91dHB1dChvdXRwdXQpXG4gICAgICAgICAgLnJ1bigpO1xuXG4gICAgICAgICAgLy8gd2hlbiBzdWNjZXNzXG4gICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHZpZGVvKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIuZXJyb3IoJ05vIGZpbGUgZm91bmQgaW4gdXBsb2FkZWQgcmVxdWVzdCBib2R5LicpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ05vIGZpbGUgZm91bmQgaW4gdXBsb2FkZWQgcmVxdWVzdCBib2R5LicgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5zZW5kKDQwMCk7XG4gIH0sXG4pO1xuXG4vKipcbiAqIHVwZGF0ZSB2aWRlb1xuICovXG5yb3V0ZXIucHV0KFxuICAnLzppZCcsXG4gIChyZXE6IEV4cHJlc3MuUmVxdWVzdCwgcmVzOiBFeHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgdmlkZW9JZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgY29uc3QgbWVzc2FnZSA9IHJlcS5ib2R5Lm1lc3NhZ2U7XG4gICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VUYWdzOiBzdHJpbmdbXSA9IGZpbmRUYWdzKG1lc3NhZ2UpO1xuICAgICAgdmlkZW8uZmluZE9uZSh7IHZhaWxkOnRydWUsIGlkOiB2aWRlb0lkIH0pXG4gICAgICAucG9wdWxhdGUoJ3VzZXInKVxuICAgICAgLnBvcHVsYXRlKHsgcGF0aDogJ2NvbW1lbnRzJywgcG9wdWxhdGU6IHtcbiAgICAgICAgcGF0aDogJ3VzZXInLFxuICAgICAgICBtb2RlbDogdXNlck1vZGVsLFxuICAgICAgfX0pXG4gICAgICAuZXhlYygoZXJyOiBhbnksIGRvYzogdmlkZW9UeXBlKSA9PiB7XG4gICAgICAgIGRvYy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgZG9jLnRhZ3MgPSBtZXNzYWdlVGFncztcbiAgICAgICAgZG9jLnNhdmUoKTtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKGRvYyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLnNlbmQoNDAwKTtcbiAgfSxcbik7XG5cbi8qKlxuICogbW9kaWZ5IHZhbGlkL2ludmFsaWQgdmlkZW9cbiAqL1xucm91dGVyLnBhdGNoKFxuICAnLzppZCcsXG4gIChyZXE6IEV4cHJlc3MuUmVxdWVzdCwgcmVzOiBFeHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgdmlkZW9JZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgY29uc3QgdmFsaWQgPSByZXEuYm9keS52YWxpZDtcbiAgICBpZiAodmFsaWQgIT0gbnVsbCkge1xuICAgICAgdmlkZW8uZmluZE9uZSh7IGlkOiB2aWRlb0lkIH0pXG4gICAgICAuZXhlYygoZXJyOiBhbnksIGRvYzogdmlkZW9UeXBlKSA9PiB7XG4gICAgICAgIGRvYy52YWlsZCA9IHZhbGlkO1xuICAgICAgICBkb2Muc2F2ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXMuc2VuZCgyMDApO1xuICB9LFxuKTtcblxuLyoqXG4gKiBkZWxldGUgdmlkZW9cbiAqL1xucm91dGVyLmRlbGV0ZShcbiAgJy86aWQnLFxuICAocmVxOiBFeHByZXNzLlJlcXVlc3QsIHJlczogRXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHZpZGVvSWQgPSByZXEucGFyYW1zLmlkO1xuICAgIHZpZGVvLmRlbGV0ZU9uZSh7IHZhaWxkOmZhbHNlLCBpZDogdmlkZW9JZCB9KVxuICAgIC5leGVjKChlcnI6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHJlcy5zZW5kKDIwMCk7XG4gICAgfSk7XG4gIH0sXG4pO1xuXG4vKipcbiAqIGNvbW1lbnQgdG8gdmlkZW9cbiAqL1xucm91dGVyLnBvc3QoXG4gICcvOmlkL2NvbW1lbnRzJyxcbiAgKHJlcTogRXhwcmVzcy5SZXF1ZXN0LCByZXM6IEV4cHJlc3MuUmVzcG9uc2UpID0+IHtcbiAgICBpZiAocmVxLmJvZHkgJiYgcmVxLmJvZHkubWVzc2FnZSkge1xuICAgICAgY29uc3QgdmlkZW9JZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgICBjb25zdCBtZXNzYWdlID0gcmVxLmJvZHkubWVzc2FnZTtcbiAgICAgIGNvbnN0IGNvbW1lbnQ6IGNvbW1lbnRUeXBlID0gPGNvbW1lbnRUeXBlPm5ldyBjb21tZW50TW9kZWwoXG4gICAgICAgIHsgdGV4dDogbWVzc2FnZSwgdXNlcjogcmVxLnNlc3Npb24hWyd1c2VyJ10sIGxpa2U6IDAgfSk7XG4gICAgICB2aWRlby5maW5kT25lKHsgdmFpbGQ6dHJ1ZSwgaWQ6IHZpZGVvSWQgfSlcbiAgICAgIC5leGVjKChlcnI6IGFueSwgZG9jOiB2aWRlb1R5cGUpID0+IHtcbiAgICAgICAgaWYgKGRvYykge1xuICAgICAgICAgIGNvbW1lbnQuc2F2ZSgpO1xuICAgICAgICAgIGRvYy5jb21tZW50cy5wdXNoKGNvbW1lbnQuX2lkKTtcbiAgICAgICAgICBkb2Muc2F2ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXMuc2VuZCgyMDApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzLnNlbmQoNDAwKTtcbiAgfSxcbik7XG5cbi8qKlxuICogZGVsZXRlIGNvbW1lbnQgb2YgdmlkZW9cbiAqL1xucm91dGVyLmRlbGV0ZShcbiAgJy86aWQvY29tbWVudHMvOmNvbW1lbnRpZCcsXG4gIChyZXE6IEV4cHJlc3MuUmVxdWVzdCwgcmVzOiBFeHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgdmlkZW9JZCA9IHJlcS5wYXJhbXMuaWQ7XG4gICAgY29uc3QgY29tbWVudElkOiBzdHJpbmcgPSByZXEucGFyYW1zLmNvbW1lbnRpZDtcbiAgICB2aWRlby5maW5kT25lKHsgdmFpbGQ6dHJ1ZSwgaWQ6IHZpZGVvSWQgfSlcbiAgICAuZXhlYygoZXJyOiBhbnksIGRvYzogdmlkZW9UeXBlKSA9PiB7XG4gICAgICBpZiAoZG9jKSB7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jLmNvbW1lbnRzO1xuICAgICAgICBjb21tZW50cy5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKGMuaWQgPT09IGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgY29tbWVudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRvYy5jb21tZW50cyA9IGNvbW1lbnRzO1xuICAgICAgICBjb21tZW50TW9kZWwuZGVsZXRlT25lKHsgX2lkOiBjb21tZW50SWQgfSkuZXhlYygpO1xuICAgICAgICBkb2Muc2F2ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXMuc2VuZCgyMDApO1xuICB9LFxuKTtcblxuIC8qKlxuICAqIHJlYWN0aW9uIGxpa2VcbiAgKi9cbnJvdXRlci5wb3N0KFxuICAnLzppZC9yZWFjdGlvbnMvbGlrZScsXG4gIChyZXE6IEV4cHJlc3MuUmVxdWVzdCwgcmVzOiBFeHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKHJlcS5ib2R5ICYmIHJlcS5ib2R5Lm1lc3NhZ2UpIHtcbiAgICAgIGNvbnN0IHZpZGVvSWQgPSByZXEucGFyYW1zLmlkO1xuICAgICAgdmlkZW8uZmluZE9uZSh7IHZhaWxkOnRydWUsIGlkOiB2aWRlb0lkIH0pXG4gICAgICAuZXhlYygoZXJyOiBhbnksIGRvYzogdmlkZW9UeXBlKSA9PiB7XG4gICAgICAgIGlmIChkb2MpIHtcbiAgICAgICAgICBkb2MucmVhY3Rpb25zLmxpa2UgPSBkb2MucmVhY3Rpb25zLmxpa2UgKyAxO1xuICAgICAgICAgIGRvYy5zYXZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcy5zZW5kKDIwMCk7XG4gICAgfVxuICAgIHJldHVybiByZXMuc2VuZCg0MDApO1xuICB9LFxuKTtcblxuLyoqXG4gICogcmVhY3Rpb24gdW5saWtlXG4gICovXG5yb3V0ZXIuZGVsZXRlKFxuICAnLzppZC9yZWFjdGlvbnMvbGlrZScsXG4gIChyZXE6IEV4cHJlc3MuUmVxdWVzdCwgcmVzOiBFeHByZXNzLlJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKHJlcS5ib2R5ICYmIHJlcS5ib2R5Lm1lc3NhZ2UpIHtcbiAgICAgIGNvbnN0IHZpZGVvSWQgPSByZXEucGFyYW1zLmlkO1xuICAgICAgdmlkZW8uZmluZE9uZSh7IHZhaWxkOnRydWUsIGlkOiB2aWRlb0lkIH0pXG4gICAgICAuZXhlYygoZXJyOiBhbnksIGRvYzogdmlkZW9UeXBlKSA9PiB7XG4gICAgICAgIGlmIChkb2MpIHtcbiAgICAgICAgICBkb2MucmVhY3Rpb25zLmxpa2UgPSBkb2MucmVhY3Rpb25zLmxpa2UgLSAxO1xuICAgICAgICAgIGlmIChkb2MucmVhY3Rpb25zLmxpa2UgPCAwKSBkb2MucmVhY3Rpb25zLmxpa2UgPSAwO1xuICAgICAgICAgIGRvYy5zYXZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcy5zZW5kKDIwMCk7XG4gICAgfVxuICAgIHJldHVybiByZXMuc2VuZCg0MDApO1xuICB9LFxuKTtcblxuZnVuY3Rpb24gZmluZFRhZ3MobWVzc2FnZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICBsZXQgdGFnczogc3RyaW5nW118bnVsbCA9IFtdO1xuICBpZiAobWVzc2FnZSkge1xuICAgIHRhZ3MgPSBtZXNzYWdlLm1hdGNoKC9cXCNbXlxcc10rL2cpO1xuICB9XG4gIHJldHVybiB0YWdzIHx8IFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/controllers/video.ts\n");

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