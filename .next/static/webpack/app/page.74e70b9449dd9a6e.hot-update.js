"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Left/InpuBox.tsx":
/*!*************************************!*\
  !*** ./components/Left/InpuBox.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_FormDataContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/FormDataContext */ \"(app-pages-browser)/./context/FormDataContext.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nvar Sizes = /*#__PURE__*/ function(Sizes) {\n    Sizes[\"lg\"] = \"lg\";\n    Sizes[\"md\"] = \"md\";\n    Sizes[\"sm\"] = \"sm\";\n    return Sizes;\n}(Sizes || {});\nconst text = [\n    ...Object.values(Sizes).map((size)=>({\n            name: \"text-input\",\n            size: size\n        })),\n    ...Object.values(Sizes).map((size)=>({\n            name: \"number-input\",\n            size: size\n        }))\n];\nfunction InputBox() {\n    _s();\n    const [activeItem, setActiveItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { setFormData } = (0,_context_FormDataContext__WEBPACK_IMPORTED_MODULE_2__.useFormData)();\n    const handleApply = ()=>{\n        if (!activeItem) return; // Prevent applying if no item is selected\n        const [name, size] = activeItem.split(\"-\");\n        setFormData((prev)=>({\n                ...prev,\n                components: [\n                    ...prev.components,\n                    {\n                        no: prev.components.length + 1,\n                        label: \"\",\n                        type: \"button\",\n                        placeholder: \"\",\n                        option: [],\n                        style: [\n                            {\n                                name: color,\n                                size: size\n                            }\n                        ],\n                        other: {}\n                    }\n                ]\n            }));\n    };\n    const handleClick = (item)=>{\n        setActiveItem(\"\".concat(item.name, \"-\").concat(item.size));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: text.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-red-400 m-3 p-3 hover:scale-95 \".concat(activeItem === \"\".concat(item.name, \"-\").concat(item.size) ? \"bg-green-400 scale-105\" : \"\"),\n                onClick: ()=>handleClick(item),\n                children: [\n                    item.name,\n                    \" - \",\n                    item.size\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\InpuBox.tsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sudhi\\\\OneDrive\\\\Desktop\\\\Next\\\\D_FORM\\\\components\\\\Left\\\\InpuBox.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(InputBox, \"kkDk7FdNoVGliuwSPUqIBS5Z7AM=\", false, function() {\n    return [\n        _context_FormDataContext__WEBPACK_IMPORTED_MODULE_2__.useFormData\n    ];\n});\n_c = InputBox;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputBox);\nvar _c;\n$RefreshReg$(_c, \"InputBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGVmdC9JbnB1Qm94LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ2lDO0FBQ3VCO0FBRXhELG1DQUFLRTs7OztXQUFBQTtFQUFBQTtBQVdMLE1BQU1DLE9BQWU7T0FDaEJDLE9BQU9DLE1BQU0sQ0FBQ0gsT0FBT0ksR0FBRyxDQUFDLENBQUNDLE9BQVU7WUFDckNDLE1BQU07WUFDTkQsTUFBTUE7UUFDUjtPQUNHSCxPQUFPQyxNQUFNLENBQUNILE9BQU9JLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO1lBQ3JDQyxNQUFNO1lBQ05ELE1BQU1BO1FBQ1I7Q0FDRDtBQUVELFNBQVNFOztJQUNQLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBUztJQUNyRCxNQUFNLEVBQUVZLFdBQVcsRUFBRSxHQUFHWCxxRUFBV0E7SUFDbkMsTUFBTVksY0FBYztRQUNsQixJQUFJLENBQUNILFlBQVksUUFBUSwwQ0FBMEM7UUFFbkUsTUFBTSxDQUFDRixNQUFNRCxLQUFLLEdBQUdHLFdBQVdJLEtBQUssQ0FBQztRQUN0Q0YsWUFBWSxDQUFDRyxPQUF5QjtnQkFDcEMsR0FBR0EsSUFBSTtnQkFDUEMsWUFBWTt1QkFDUEQsS0FBS0MsVUFBVTtvQkFDbEI7d0JBQ0VDLElBQUlGLEtBQUtDLFVBQVUsQ0FBQ0UsTUFBTSxHQUFHO3dCQUM3QkMsT0FBTzt3QkFDUEMsTUFBTTt3QkFDTkMsYUFBYTt3QkFDYkMsUUFBUSxFQUFFO3dCQUNWQyxPQUFPOzRCQUFDO2dDQUFFZixNQUFNZ0I7Z0NBQU9qQixNQUFNQTs0QkFBSzt5QkFBRTt3QkFDcENrQixPQUFPLENBQUM7b0JBQ1Y7aUJBQ0Q7WUFDSDtJQUNGO0lBR0EsTUFBTUMsY0FBYyxDQUFDQztRQUNuQmhCLGNBQWMsR0FBZ0JnQixPQUFiQSxLQUFLbkIsSUFBSSxFQUFDLEtBQWEsT0FBVm1CLEtBQUtwQixJQUFJO0lBQ3pDO0lBRUEscUJBQ0UsOERBQUNxQjtrQkFDRXpCLEtBQUtHLEdBQUcsQ0FBQyxDQUFDcUIsTUFBTUUsc0JBQ2YsOERBQUNDO2dCQUVDQyxXQUFXLHFDQUNSLE9BRDZDckIsZUFBZSxHQUFnQmlCLE9BQWJBLEtBQUtuQixJQUFJLEVBQUMsS0FBYSxPQUFWbUIsS0FBS3BCLElBQUksSUFBSywyQkFBMkI7Z0JBRXhIeUIsU0FBUyxJQUFNTixZQUFZQzs7b0JBRTFCQSxLQUFLbkIsSUFBSTtvQkFBQztvQkFBSW1CLEtBQUtwQixJQUFJOztlQUxuQnNCOzs7Ozs7Ozs7O0FBVWY7R0EzQ1NwQjs7UUFFaUJSLGlFQUFXQTs7O0tBRjVCUTtBQTZDVCxpRUFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxzdWRoaVxcT25lRHJpdmVcXERlc2t0b3BcXE5leHRcXERfRk9STVxcY29tcG9uZW50c1xcTGVmdFxcSW5wdUJveC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUZvcm1EYXRhIH0gZnJvbSBcIkAvY29udGV4dC9Gb3JtRGF0YUNvbnRleHRcIjtcclxuaW1wb3J0IEZvcm1pbnRlcmZhY2UgZnJvbSBcIkAvZGF0YS9Gb3JtaW50ZXJmYWNlXCI7XHJcbmVudW0gU2l6ZXMge1xyXG4gIGxnID0gXCJsZ1wiLFxyXG4gIG1kID0gXCJtZFwiLFxyXG4gIHNtID0gXCJzbVwiLFxyXG59XHJcblxyXG5pbnRlcmZhY2UgRm9ybSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHNpemU6IFNpemVzO1xyXG59XHJcblxyXG5jb25zdCB0ZXh0OiBGb3JtW10gPSBbXHJcbiAgLi4uT2JqZWN0LnZhbHVlcyhTaXplcykubWFwKChzaXplKSA9PiAoe1xyXG4gICAgbmFtZTogXCJ0ZXh0LWlucHV0XCIsXHJcbiAgICBzaXplOiBzaXplLFxyXG4gIH0pKSxcclxuICAuLi5PYmplY3QudmFsdWVzKFNpemVzKS5tYXAoKHNpemUpID0+ICh7XHJcbiAgICBuYW1lOiBcIm51bWJlci1pbnB1dFwiLFxyXG4gICAgc2l6ZTogc2l6ZSxcclxuICB9KSksXHJcbl07XHJcblxyXG5mdW5jdGlvbiBJbnB1dEJveCgpIHtcclxuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IHsgc2V0Rm9ybURhdGEgfSA9IHVzZUZvcm1EYXRhKCk7XHJcbiAgY29uc3QgaGFuZGxlQXBwbHkgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWFjdGl2ZUl0ZW0pIHJldHVybjsgLy8gUHJldmVudCBhcHBseWluZyBpZiBubyBpdGVtIGlzIHNlbGVjdGVkXHJcblxyXG4gICAgY29uc3QgW25hbWUsIHNpemVdID0gYWN0aXZlSXRlbS5zcGxpdChcIi1cIik7XHJcbiAgICBzZXRGb3JtRGF0YSgocHJldjogRm9ybWludGVyZmFjZSkgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgY29tcG9uZW50czogW1xyXG4gICAgICAgIC4uLnByZXYuY29tcG9uZW50cyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBubzogcHJldi5jb21wb25lbnRzLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICBsYWJlbDogXCJcIixcclxuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIixcclxuICAgICAgICAgIG9wdGlvbjogW10sXHJcbiAgICAgICAgICBzdHlsZTogW3sgbmFtZTogY29sb3IsIHNpemU6IHNpemUgfV0sXHJcbiAgICAgICAgICBvdGhlcjoge30sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaXRlbTogRm9ybSkgPT4ge1xyXG4gICAgc2V0QWN0aXZlSXRlbShgJHtpdGVtLm5hbWV9LSR7aXRlbS5zaXplfWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7dGV4dC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YGJnLXJlZC00MDAgbS0zIHAtMyBob3ZlcjpzY2FsZS05NSAke2FjdGl2ZUl0ZW0gPT09IGAke2l0ZW0ubmFtZX0tJHtpdGVtLnNpemV9YCA/IFwiYmctZ3JlZW4tNDAwIHNjYWxlLTEwNVwiIDogXCJcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGl0ZW0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpdGVtLm5hbWV9IC0ge2l0ZW0uc2l6ZX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEJveDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRm9ybURhdGEiLCJTaXplcyIsInRleHQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJzaXplIiwibmFtZSIsIklucHV0Qm94IiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJzZXRGb3JtRGF0YSIsImhhbmRsZUFwcGx5Iiwic3BsaXQiLCJwcmV2IiwiY29tcG9uZW50cyIsIm5vIiwibGVuZ3RoIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvcHRpb24iLCJzdHlsZSIsImNvbG9yIiwib3RoZXIiLCJoYW5kbGVDbGljayIsIml0ZW0iLCJkaXYiLCJpbmRleCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Left/InpuBox.tsx\n"));

/***/ })

});