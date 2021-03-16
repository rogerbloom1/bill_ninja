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

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nvar envFound = dotenv.config();\nif (!envFound) {\n    throw new Error(\"Can't read .env file!\");\n}\nexports.default = {\n    mysql: {\n        host: process.env.HOST,\n        user: process.env.DB_USER,\n        password: process.env.DB_PASS,\n        database: process.env.DB_SCHEMA,\n    },\n    port: parseInt(process.env.PORT, 10),\n};\n\n\n//# sourceURL=webpack://template2/./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/db/models/index.ts":
/*!***************************************!*\
  !*** ./src/server/db/models/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar config_1 = __webpack_require__(/*! ../../config */ \"./src/server/config/index.ts\");\nvar connection = mysql.createPool(config_1.default.mysql);\nvar Query = function (query, values) {\n    return new Promise(function (resolve, reject) {\n        connection.query(query, values, function (err, results) {\n            if (err) {\n                reject(err);\n            }\n            resolve(results);\n        });\n    });\n};\nexports.default = Query;\n\n\n//# sourceURL=webpack://template2/./src/server/db/models/index.ts?");

/***/ }),

/***/ "./src/server/db/queries/categories.ts":
/*!*********************************************!*\
  !*** ./src/server/db/queries/categories.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar models_1 = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.ts\");\nvar getOneCategory = function (id) {\n    return models_1.default(\"SELECT CategoryID, Name FROM categories WHERE CategoryID = ?\", [id]);\n};\nvar getAllCategories = function () {\n    return models_1.default(\"SELECT CategoryID, Name FROM categories\");\n};\nvar insertCategory = function (body) {\n    return models_1.default(\"INSERT INTO categories SET ?\", [body]);\n};\nexports.default = {\n    getOneCategory: getOneCategory,\n    getAllCategories: getAllCategories,\n    insertCategory: insertCategory\n};\n\n\n//# sourceURL=webpack://template2/./src/server/db/queries/categories.ts?");

/***/ }),

/***/ "./src/server/db/queries/products.ts":
/*!*******************************************!*\
  !*** ./src/server/db/queries/products.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar models_1 = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.ts\");\nvar getOneProduct = function (id) {\n    return models_1.default(\"SELECT * FROM products WHERE ProductID = ?\", [id]);\n};\nvar getAllProducts = function () {\n    return models_1.default(\"SELECT * FROM products\");\n};\nvar insertProduct = function (product) {\n    return models_1.default(\"INSERT INTO products SET ?\", [product]);\n};\nvar updateProduct = function (product, id) {\n    return models_1.default(\"UPDATE products SET ? WHERE ProductID = ?\", [product, id]);\n};\nvar removeProduct = function (id) {\n    return models_1.default(\"DELETE FROM products WHERE ProductID = ?\", [id]);\n};\nexports.default = {\n    getOneProduct: getOneProduct,\n    getAllProducts: getAllProducts,\n    insertProduct: insertProduct,\n    updateProduct: updateProduct,\n    removeProduct: removeProduct\n};\n\n\n//# sourceURL=webpack://template2/./src/server/db/queries/products.ts?");

/***/ }),

/***/ "./src/server/routes/categoryRouter.ts":
/*!*********************************************!*\
  !*** ./src/server/routes/categoryRouter.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar categories_1 = __webpack_require__(/*! ../db/queries/categories */ \"./src/server/db/queries/categories.ts\");\nvar router = express.Router();\nrouter.get(\"/:id?\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, data, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                id = parseInt(req.params.id);\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 6, , 7]);\n                if (!id) return [3 /*break*/, 3];\n                return [4 /*yield*/, categories_1.default.getOneCategory(id)];\n            case 2:\n                data = _a.sent();\n                return [3 /*break*/, 5];\n            case 3: return [4 /*yield*/, categories_1.default.getAllCategories()];\n            case 4:\n                data = _a.sent();\n                _a.label = 5;\n            case 5:\n                res.status(200).json(data);\n                return [3 /*break*/, 7];\n            case 6:\n                error_1 = _a.sent();\n                next(error_1);\n                return [3 /*break*/, 7];\n            case 7: return [2 /*return*/];\n        }\n    });\n}); });\n/*\nrouter.post(\"/\", async (\n    req: express.Request,\n    res: express.Response,\n    next: express.NextFunction\n) => {\n    try {\n        let { body } = req;\n        let data = await db.insertProduct(body);\n        res.status(200).json(data);\n\n    } catch (error) {\n        next (error);\n    }\n}\n \n\n\n})*/\nexports.default = router;\n\n\n//# sourceURL=webpack://template2/./src/server/routes/categoryRouter.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar productRouter_1 = __webpack_require__(/*! ./productRouter */ \"./src/server/routes/productRouter.ts\");\nvar categoryRouter_1 = __webpack_require__(/*! ./categoryRouter */ \"./src/server/routes/categoryRouter.ts\");\nvar router = express.Router();\nrouter.get(\"/test\", function (req, res, next) {\n    try {\n        res.status(200).json({ mst: \"Hello World!\" });\n    }\n    catch (error) {\n        next(error);\n    }\n});\nrouter.use(\"/products\", productRouter_1.default);\nrouter.use(\"/categories\", categoryRouter_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack://template2/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/routes/productRouter.ts":
/*!********************************************!*\
  !*** ./src/server/routes/productRouter.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar products_1 = __webpack_require__(/*! ../db/queries/products */ \"./src/server/db/queries/products.ts\");\nvar router = express.Router();\nrouter.get(\"/:id?\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, data, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                console.log(\"api/products\");\n                id = parseInt(req.params.id);\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 6, , 7]);\n                if (!id) return [3 /*break*/, 3];\n                console.log(id);\n                return [4 /*yield*/, products_1.default.getOneProduct(id)];\n            case 2:\n                data = _a.sent();\n                return [3 /*break*/, 5];\n            case 3: return [4 /*yield*/, products_1.default.getAllProducts()];\n            case 4:\n                data = _a.sent();\n                _a.label = 5;\n            case 5:\n                res.status(200).json(data);\n                return [3 /*break*/, 7];\n            case 6:\n                error_1 = _a.sent();\n                next(error_1);\n                return [3 /*break*/, 7];\n            case 7: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.put(\"/:id\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, body, data, error_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                id = parseInt(req.params.id);\n                body = req.body;\n                return [4 /*yield*/, products_1.default.updateProduct(body, id)];\n            case 1:\n                data = _a.sent();\n                res.status(200).json(data);\n                return [3 /*break*/, 3];\n            case 2:\n                error_2 = _a.sent();\n                next(error_2);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.delete(\"/:id\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, data, error_3;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                id = parseInt(req.params.id);\n                return [4 /*yield*/, products_1.default.removeProduct(id)];\n            case 1:\n                data = _a.sent();\n                res.status(200).json(data);\n                return [3 /*break*/, 3];\n            case 2:\n                error_3 = _a.sent();\n                next(error_3);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack://template2/./src/server/routes/productRouter.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar config_1 = __webpack_require__(/*! ./config */ \"./src/server/config/index.ts\");\nvar app = express();\napp.use(express.static(\"public\"));\napp.use(express.json());\napp.use(morgan(\"dev\"));\napp.use(\"/api\", routes_1.default);\napp.use(\"*\", function (req, res, next) {\n    try {\n        res.sendFile(path.join(__dirname, \"../public/index.html\"));\n    }\n    catch (error) {\n        next(error);\n    }\n});\napp.use(function (err, req, res, next) {\n    console.log(err);\n    res.status(500).json({ name: err.name, msg: err.message });\n});\napp.listen(config_1.default.port, function () {\n    return console.log(\"Server listening on port \" + config_1.default.port);\n});\n\n\n//# sourceURL=webpack://template2/./src/server/server.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");;

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;