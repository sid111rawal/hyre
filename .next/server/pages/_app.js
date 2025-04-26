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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* pages/_app.js */ \n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [currentRole, setCurrentRole] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (router.pathname.startsWith(\"/employer\")) {\n            setCurrentRole(\"employer\");\n        } else if (router.pathname.startsWith(\"/worker\")) {\n            setCurrentRole(\"worker\");\n        } else if (router.pathname === \"/\") {\n            setCurrentRole(null);\n        }\n    }, [\n        router.pathname\n    ]);\n    const handleRoleChange = (newRole)=>{\n        if (newRole) {\n            setCurrentRole(newRole);\n        } else {\n            router.push(\"/login\");\n            return;\n        }\n    };\n    const enhancedPageProps = {\n        ...pageProps,\n        currentRole,\n        onRoleChange: handleRoleChange\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n        session: pageProps.session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black min-h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...enhancedPageProps\n                    }, void 0, false, {\n                        fileName: \"/home/user/hyre/pages/_app.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/user/hyre/pages/_app.js\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/user/hyre/pages/_app.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/user/hyre/pages/_app.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/user/hyre/pages/_app.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBQWlCO0FBQ2M7QUFDYTtBQUNNO0FBQ1Y7QUFHekIsU0FBU0ksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVMsU0FBU04sc0RBQVNBO0lBRXhCRixnREFBU0EsQ0FBQztRQUNSLElBQUlRLE9BQU9DLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGNBQWM7WUFDM0NILGVBQWU7UUFDakIsT0FBTyxJQUFJQyxPQUFPQyxRQUFRLENBQUNDLFVBQVUsQ0FBQyxZQUFZO1lBQ2hESCxlQUFlO1FBQ2pCLE9BQU8sSUFBSUMsT0FBT0MsUUFBUSxLQUFLLEtBQUs7WUFDbENGLGVBQWU7UUFDakI7SUFDRixHQUFHO1FBQUNDLE9BQU9DLFFBQVE7S0FBQztJQUVwQixNQUFNRSxtQkFBbUIsQ0FBQ0M7UUFDeEIsSUFBSUEsU0FBUztZQUNYTCxlQUFlSztRQUNqQixPQUFPO1lBQ0xKLE9BQU9LLElBQUksQ0FBQztZQUNaO1FBQ0Y7SUFFRjtJQUdBLE1BQU1DLG9CQUFvQjtRQUN4QixHQUFHVCxTQUFTO1FBQ1pDO1FBQ0FTLGNBQWNKO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUNWLDREQUFlQTtRQUFDZSxTQUFTWCxVQUFVVyxPQUFPO2tCQUN6Qyw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDOzhCQUNDLDRFQUFDZjt3QkFBVyxHQUFHVSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcG9yYXJ5LXdvcmstcGxhdGZvcm0vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogcGFnZXMvX2FwcC5qcyAqL1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbY3VycmVudFJvbGUsIHNldEN1cnJlbnRSb2xlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJvdXRlci5wYXRobmFtZS5zdGFydHNXaXRoKCcvZW1wbG95ZXInKSkge1xuICAgICAgc2V0Q3VycmVudFJvbGUoJ2VtcGxveWVyJyk7XG4gICAgfSBlbHNlIGlmIChyb3V0ZXIucGF0aG5hbWUuc3RhcnRzV2l0aCgnL3dvcmtlcicpKSB7XG4gICAgICBzZXRDdXJyZW50Um9sZSgnd29ya2VyJyk7XG4gICAgfSBlbHNlIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJykge1xuICAgICAgc2V0Q3VycmVudFJvbGUobnVsbCk7XG4gICAgfVxuICB9LCBbcm91dGVyLnBhdGhuYW1lXSk7XG5cbiAgY29uc3QgaGFuZGxlUm9sZUNoYW5nZSA9IChuZXdSb2xlKSA9PiB7XG4gICAgaWYgKG5ld1JvbGUpIHtcbiAgICAgIHNldEN1cnJlbnRSb2xlKG5ld1JvbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gIH07XG5cblxuICBjb25zdCBlbmhhbmNlZFBhZ2VQcm9wcyA9IHtcbiAgICAuLi5wYWdlUHJvcHMsXG4gICAgY3VycmVudFJvbGUsXG4gICAgb25Sb2xlQ2hhbmdlOiBoYW5kbGVSb2xlQ2hhbmdlLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIG1pbi1oLXNjcmVlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNFwiPlxuICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4uZW5oYW5jZWRQYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlc3Npb25Qcm92aWRlciIsInVzZVJvdXRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImN1cnJlbnRSb2xlIiwic2V0Q3VycmVudFJvbGUiLCJyb3V0ZXIiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJoYW5kbGVSb2xlQ2hhbmdlIiwibmV3Um9sZSIsInB1c2giLCJlbmhhbmNlZFBhZ2VQcm9wcyIsIm9uUm9sZUNoYW5nZSIsInNlc3Npb24iLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

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