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

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction App({ Component, pageProps: { session, ...pageProps } }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/user/hyre/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/user/hyre/pages/_app.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/user/hyre/pages/_app.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/user/hyre/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\nfunction Auth({ children }) {\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const isUser = !!session?.user;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)({\n        \"Auth.useEffect\": ()=>{\n            if (status === \"loading\") return;\n            if (!isUser) router.push(\"/login\");\n            if (!session.user.approved) router.push(\"/pending-approval\");\n            if (session.user.role === \"Employer\") router.push(\"/employer\");\n            if (session.user.role === \"Worker\") router.push(\"/worker\");\n        }\n    }[\"Auth.useEffect\"], [\n        isUser,\n        status\n    ]);\n    return children;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQytCO0FBQ3RCO0FBQ047QUFFbkIsU0FBU0ksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFLEdBQUdELFdBQVcsRUFBRTtJQUM3RSxxQkFDRSw4REFBQ04sNERBQWVBO1FBQUNPLFNBQVNBO2tCQUN2QkYsVUFBVUcsSUFBSSxpQkFDYiw4REFBQ0M7c0JBQ0MsNEVBQUNKO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7aUNBRzFCLDhEQUFDRDtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsU0FBU0csS0FBSyxFQUFFQyxRQUFRLEVBQUU7SUFDeEIsTUFBTSxFQUFFQyxNQUFNSixPQUFPLEVBQUVLLE1BQU0sRUFBRSxHQUFHWCwyREFBVUE7SUFDNUMsTUFBTVksU0FBU1gsc0RBQVNBO0lBQ3hCLE1BQU1ZLFNBQVMsQ0FBQyxDQUFDUCxTQUFTUTtJQUMxQlosZ0RBQVNBOzBCQUFDO1lBQ1IsSUFBSVMsV0FBVyxXQUFXO1lBQzFCLElBQUksQ0FBQ0UsUUFBUUQsT0FBT0csSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQ1QsUUFBUVEsSUFBSSxDQUFDRSxRQUFRLEVBQUVKLE9BQU9HLElBQUksQ0FBQztZQUN4QyxJQUFJVCxRQUFRUSxJQUFJLENBQUNHLElBQUksS0FBSyxZQUFZTCxPQUFPRyxJQUFJLENBQUM7WUFDbEQsSUFBSVQsUUFBUVEsSUFBSSxDQUFDRyxJQUFJLEtBQUssVUFBVUwsT0FBT0csSUFBSSxDQUFDO1FBQ2xEO3lCQUFHO1FBQUNGO1FBQVFGO0tBQU87SUFDbkIsT0FBT0Y7QUFDVCIsInNvdXJjZXMiOlsiL2hvbWUvdXNlci9oeXJlL3BhZ2VzL19hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyLCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfSkge1xuICByZXR1cm4gKFxuICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17c2Vzc2lvbn0+XG4gICAgICB7Q29tcG9uZW50LmF1dGggPyAoXG4gICAgICAgIDxBdXRoPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9BdXRoPlxuICAgICAgKSA6IChcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgKX1cbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQXV0aCh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGlzVXNlciA9ICEhc2Vzc2lvbj8udXNlcjtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSBcImxvYWRpbmdcIikgcmV0dXJuO1xuICAgIGlmICghaXNVc2VyKSByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICBpZiAoIXNlc3Npb24udXNlci5hcHByb3ZlZCkgcm91dGVyLnB1c2goXCIvcGVuZGluZy1hcHByb3ZhbFwiKTtcbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiRW1wbG95ZXJcIikgcm91dGVyLnB1c2goXCIvZW1wbG95ZXJcIik7XG4gICAgaWYgKHNlc3Npb24udXNlci5yb2xlID09PSBcIldvcmtlclwiKSByb3V0ZXIucHVzaChcIi93b3JrZXJcIik7XG4gIH0sIFtpc1VzZXIsIHN0YXR1c10pO1xuICByZXR1cm4gY2hpbGRyZW47XG59Il0sIm5hbWVzIjpbIlNlc3Npb25Qcm92aWRlciIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwiYXV0aCIsIkF1dGgiLCJjaGlsZHJlbiIsImRhdGEiLCJzdGF0dXMiLCJyb3V0ZXIiLCJpc1VzZXIiLCJ1c2VyIiwicHVzaCIsImFwcHJvdmVkIiwicm9sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();