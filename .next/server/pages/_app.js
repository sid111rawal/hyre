/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* pages/_app.js */ \n\n\n\nfunction App({ Component, pageProps }) {\n    const [currentRole, setCurrentRole] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (router.pathname.startsWith(\"/employer\")) {\n            setCurrentRole(\"employer\");\n        } else if (router.pathname.startsWith(\"/worker\")) {\n            setCurrentRole(\"worker\");\n        } else if (router.pathname === \"/\") {\n            setCurrentRole(null);\n        }\n    }, [\n        router.pathname\n    ]);\n    const handleRoleChange = (newRole)=>{\n        if (newRole) {\n            setCurrentRole(newRole);\n        } else {\n            router.push(\"/login\");\n            return;\n        }\n    };\n    const enhancedPageProps = {\n        ...pageProps,\n        currentRole,\n        onRoleChange: handleRoleChange\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto p-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...enhancedPageProps\n                }, void 0, false, {\n                    fileName: \"/home/user/hyre/pages/_app.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/user/hyre/pages/_app.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/user/hyre/pages/_app.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/user/hyre/pages/_app.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQjtBQUNjO0FBQ2E7QUFDSjtBQUd6QixTQUFTRyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNUSxTQUFTTixzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8sT0FBT0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsY0FBYztZQUMzQ0gsZUFBZTtRQUNqQixPQUFPLElBQUlDLE9BQU9DLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLFlBQVk7WUFDaERILGVBQWU7UUFDakIsT0FBTyxJQUFJQyxPQUFPQyxRQUFRLEtBQUssS0FBSztZQUNsQ0YsZUFBZTtRQUNqQjtJQUNGLEdBQUc7UUFBQ0MsT0FBT0MsUUFBUTtLQUFDO0lBRXBCLE1BQU1FLG1CQUFtQixDQUFDQztRQUN4QixJQUFJQSxTQUFTO1lBQ1hMLGVBQWVLO1FBQ2pCLE9BQU87WUFDTEosT0FBT0ssSUFBSSxDQUFDO1lBQ1o7UUFDRjtJQUVGO0lBR0EsTUFBTUMsb0JBQW9CO1FBQ3hCLEdBQUdULFNBQVM7UUFDWkM7UUFDQVMsY0FBY0o7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0M7MEJBQ0MsNEVBQUNkO29CQUFXLEdBQUdVLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcG9yYXJ5LXdvcmstcGxhdGZvcm0vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogcGFnZXMvX2FwcC5qcyAqL1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtjdXJyZW50Um9sZSwgc2V0Q3VycmVudFJvbGVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy9lbXBsb3llcicpKSB7XG4gICAgICBzZXRDdXJyZW50Um9sZSgnZW1wbG95ZXInKTtcbiAgICB9IGVsc2UgaWYgKHJvdXRlci5wYXRobmFtZS5zdGFydHNXaXRoKCcvd29ya2VyJykpIHtcbiAgICAgIHNldEN1cnJlbnRSb2xlKCd3b3JrZXInKTtcbiAgICB9IGVsc2UgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nKSB7XG4gICAgICBzZXRDdXJyZW50Um9sZShudWxsKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcblxuICBjb25zdCBoYW5kbGVSb2xlQ2hhbmdlID0gKG5ld1JvbGUpID0+IHtcbiAgICBpZiAobmV3Um9sZSkge1xuICAgICAgc2V0Q3VycmVudFJvbGUobmV3Um9sZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgfTtcblxuXG4gIGNvbnN0IGVuaGFuY2VkUGFnZVByb3BzID0ge1xuICAgIC4uLnBhZ2VQcm9wcyxcbiAgICBjdXJyZW50Um9sZSxcbiAgICBvblJvbGVDaGFuZ2U6IGhhbmRsZVJvbGVDaGFuZ2UsXG4gIH07XG5cbiAgcmV0dXJuICggICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC00XCI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLmVuaGFuY2VkUGFnZVByb3BzfSAvPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXJyZW50Um9sZSIsInNldEN1cnJlbnRSb2xlIiwicm91dGVyIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiaGFuZGxlUm9sZUNoYW5nZSIsIm5ld1JvbGUiLCJwdXNoIiwiZW5oYW5jZWRQYWdlUHJvcHMiLCJvblJvbGVDaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();