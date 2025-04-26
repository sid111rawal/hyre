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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* pages/_app.js */ \n\n\n\nfunction App({ Component, pageProps }) {\n    const [currentRole, setCurrentRole] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"employer\"); // Default role\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // Update role based on current page path whenever the route changes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (router.pathname.startsWith(\"/employer\")) {\n            setCurrentRole(\"employer\");\n        } else if (router.pathname.startsWith(\"/worker\")) {\n            setCurrentRole(\"worker\");\n        } else if (router.pathname === \"/\") {\n        // Optional: Set a default or neutral role for the index page if needed\n        // setCurrentRole(null); // Or keep the last known role\n        }\n    }, [\n        router.pathname\n    ]);\n    // Function to handle role change, passed down to components\n    const handleRoleChange = (newRole)=>{\n        setCurrentRole(newRole);\n    // Note: Navigation is handled within the RoleSwitcher component itself\n    };\n    // Enhance page props with role state and handler\n    const enhancedPageProps = {\n        ...pageProps,\n        currentRole,\n        onRoleChange: handleRoleChange\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...enhancedPageProps\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sid\\\\Desktop\\\\Website\\\\HYR\\\\pages\\\\_app.js\",\n        lineNumber: 35,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQjtBQUNjO0FBQ2E7QUFDSjtBQUV6QixTQUFTRyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQyxhQUFhLGVBQWU7SUFDM0UsTUFBTVEsU0FBU04sc0RBQVNBO0lBRXhCLG9FQUFvRTtJQUNwRUQsZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxPQUFPQyxRQUFRLENBQUNDLFVBQVUsQ0FBQyxjQUFjO1lBQzNDSCxlQUFlO1FBQ2pCLE9BQU8sSUFBSUMsT0FBT0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsWUFBWTtZQUNoREgsZUFBZTtRQUNqQixPQUFPLElBQUlDLE9BQU9DLFFBQVEsS0FBSyxLQUFLO1FBQ2xDLHVFQUF1RTtRQUN2RSx1REFBdUQ7UUFDekQ7SUFDRixHQUFHO1FBQUNELE9BQU9DLFFBQVE7S0FBQztJQUVwQiw0REFBNEQ7SUFDNUQsTUFBTUUsbUJBQW1CLENBQUNDO1FBQ3hCTCxlQUFlSztJQUNmLHVFQUF1RTtJQUN6RTtJQUVBLGlEQUFpRDtJQUNqRCxNQUFNQyxvQkFBb0I7UUFDeEIsR0FBR1IsU0FBUztRQUNaQztRQUNBUSxjQUFjSDtJQUNoQjtJQUVBLHFCQUFPLDhEQUFDUDtRQUFXLEdBQUdTLGlCQUFpQjs7Ozs7O0FBQ3pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcG9yYXJ5LXdvcmstcGxhdGZvcm0vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogcGFnZXMvX2FwcC5qcyAqL1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCBbY3VycmVudFJvbGUsIHNldEN1cnJlbnRSb2xlXSA9IHVzZVN0YXRlKCdlbXBsb3llcicpOyAvLyBEZWZhdWx0IHJvbGVcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gVXBkYXRlIHJvbGUgYmFzZWQgb24gY3VycmVudCBwYWdlIHBhdGggd2hlbmV2ZXIgdGhlIHJvdXRlIGNoYW5nZXNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlci5wYXRobmFtZS5zdGFydHNXaXRoKCcvZW1wbG95ZXInKSkge1xyXG4gICAgICBzZXRDdXJyZW50Um9sZSgnZW1wbG95ZXInKTtcclxuICAgIH0gZWxzZSBpZiAocm91dGVyLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy93b3JrZXInKSkge1xyXG4gICAgICBzZXRDdXJyZW50Um9sZSgnd29ya2VyJyk7XHJcbiAgICB9IGVsc2UgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nKSB7XHJcbiAgICAgIC8vIE9wdGlvbmFsOiBTZXQgYSBkZWZhdWx0IG9yIG5ldXRyYWwgcm9sZSBmb3IgdGhlIGluZGV4IHBhZ2UgaWYgbmVlZGVkXHJcbiAgICAgIC8vIHNldEN1cnJlbnRSb2xlKG51bGwpOyAvLyBPciBrZWVwIHRoZSBsYXN0IGtub3duIHJvbGVcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnBhdGhuYW1lXSk7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSByb2xlIGNoYW5nZSwgcGFzc2VkIGRvd24gdG8gY29tcG9uZW50c1xyXG4gIGNvbnN0IGhhbmRsZVJvbGVDaGFuZ2UgPSAobmV3Um9sZSkgPT4ge1xyXG4gICAgc2V0Q3VycmVudFJvbGUobmV3Um9sZSk7XHJcbiAgICAvLyBOb3RlOiBOYXZpZ2F0aW9uIGlzIGhhbmRsZWQgd2l0aGluIHRoZSBSb2xlU3dpdGNoZXIgY29tcG9uZW50IGl0c2VsZlxyXG4gIH07XHJcblxyXG4gIC8vIEVuaGFuY2UgcGFnZSBwcm9wcyB3aXRoIHJvbGUgc3RhdGUgYW5kIGhhbmRsZXJcclxuICBjb25zdCBlbmhhbmNlZFBhZ2VQcm9wcyA9IHtcclxuICAgIC4uLnBhZ2VQcm9wcyxcclxuICAgIGN1cnJlbnRSb2xlLFxyXG4gICAgb25Sb2xlQ2hhbmdlOiBoYW5kbGVSb2xlQ2hhbmdlLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5lbmhhbmNlZFBhZ2VQcm9wc30gLz47XHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXJyZW50Um9sZSIsInNldEN1cnJlbnRSb2xlIiwicm91dGVyIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiaGFuZGxlUm9sZUNoYW5nZSIsIm5ld1JvbGUiLCJlbmhhbmNlZFBhZ2VQcm9wcyIsIm9uUm9sZUNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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