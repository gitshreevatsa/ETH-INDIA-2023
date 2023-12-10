"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! zod */ \"./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/form */ \"./components/ui/form.tsx\");\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/use-toast */ \"./components/ui/use-toast.ts\");\n/* harmony import */ var _components_ui_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/select */ \"./components/ui/select.tsx\");\n/* harmony import */ var _components_ui_CardCS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/CardCS */ \"./components/ui/CardCS.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst FormSchema = zod__WEBPACK_IMPORTED_MODULE_8__.object({\n    username: zod__WEBPACK_IMPORTED_MODULE_8__.string().min(2, {\n        message: \"Id must be at least 2 characters.\"\n    })\n});\nconst dataMap = new Map([\n    [\n        137,\n        \"polygon\"\n    ],\n    [\n        8453,\n        \"base\"\n    ],\n    [\n        42161,\n        \"arbitrum\"\n    ],\n    [\n        1101,\n        \"polygon_zkevm\"\n    ],\n    [\n        59144,\n        \"linea\"\n    ],\n    [\n        42220,\n        \"celo\"\n    ],\n    [\n        245022934,\n        \"neon\"\n    ],\n    [\n        534352,\n        \"scroll\"\n    ],\n    [\n        5000,\n        \"mantle\"\n    ]\n]);\nconst dataMap2 = new Map([\n    [\n        \"polygon\",\n        137\n    ],\n    [\n        \"base\",\n        8453\n    ],\n    [\n        \"arbitrum\",\n        42161\n    ],\n    [\n        \"polygon_zkevm\",\n        1101\n    ],\n    [\n        \"linea\",\n        59144\n    ],\n    [\n        \"celo\",\n        42220\n    ],\n    [\n        \"neon\",\n        245022934\n    ],\n    [\n        \"scroll\",\n        534352\n    ],\n    [\n        \"mantle\",\n        5000\n    ]\n]);\nfunction Home() {\n    _s();\n    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_1__.zodResolver)(FormSchema),\n        defaultValues: {\n            username: \"\"\n        }\n    });\n    function onSubmit(data) {\n        (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_4__.toast)({\n            title: \"You submitted the following values:\",\n            description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                className: \"mt-2 w-[340px] rounded-md bg-slate-950 p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                    className: \"text-white\",\n                    children: JSON.stringify(data, null, 2)\n                }, void 0, false, {\n                    fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this)\n        });\n    }\n    const handleSubmit = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].get(\"http://localhost:5005/\".concat(value, \"/\").concat(dataMap2.get(chain)));\n        setRes(res);\n        console.log();\n    };\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [chain, setchain] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [res, setRes] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col bg-gradient-to-r from-orange-300 to-rose-300 items-center pt-10 background-animate \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-extrabold text-4xl flex items-start flex-col w-screen md:pl-[16rem] text-gray-200 mb-10\",\n                children: [\n                    \"CoinRadar\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-1 text-base\",\n                        children: \"Get Token overview and in depth  analysis for safe asset holding.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-1 mb-2 text-base\",\n                        children: \"Get a report of the token and take a step towards being an intelligent\\xa0holder.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.Form, {\n                ...form,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: (e)=>{\n                        e.preventDefault();\n                    },\n                    className: \"w-2/3 space-y-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormField, {\n                            control: form.control,\n                            name: \"username\",\n                            render: (param)=>{\n                                let { field } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex gap-y-4 flex-col md:flex-row md:gap-x-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        className: \"text-black flex h-10 md:w-full w-[17.5rem] rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 focus:outline-4 focus:outline-offset-2 focus:outline focus:outline-yellow-200\",\n                                                        placeholder: \"Enter Id\",\n                                                        onChange: (e)=>{\n                                                            setValue(e.target.value);\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                                                        lineNumber: 108,\n                                                        columnNumber: 21\n                                                    }, void 0)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 19\n                                                }, void 0),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.Select, {\n                                                    onValueChange: (value)=>setchain(value),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectTrigger, {\n                                                            className: \"w-[280px] text-black\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectValue, {\n                                                                placeholder: \"Select Chain\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                                                                lineNumber: 113,\n                                                                columnNumber: 23\n                                                            }, void 0)\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                                                            lineNumber: 112,\n                                                            columnNumber: 21\n                                                        }, void 0),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectContent, {\n                                                            children: Array.from(dataMap).map((param)=>{\n                                                                let [key, Value] = param;\n                                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_select__WEBPACK_IMPORTED_MODULE_5__.SelectItem, {\n                                                                    value: Value,\n                                                                    children: Value\n                                                                }, void 0, false, {\n                                                                    fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                                                                    lineNumber: 117,\n                                                                    columnNumber: 25\n                                                                }, void 0);\n                                                            })\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                                                            lineNumber: 115,\n                                                            columnNumber: 21\n                                                        }, void 0)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 111,\n                                                    columnNumber: 19\n                                                }, void 0)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 17\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_3__.FormMessage, {}, void 0, false, {\n                                            fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 17\n                                        }, void 0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, void 0);\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            type: \"submit\",\n                            onClick: handleSubmit,\n                            className: \"bg-gradient-to-br from-yellow-200 to-yellow-400 text-black font-semibold hover:outline-4 hover:outline-offset-2 hover:outline hover:outline-rose-200\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" \".concat(res ? \"flex\" : \"hidden\", \" flex-col gap-y-2 mt-4 mb-8\"),\n                children: res && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_CardCS__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    data: res.data\n                }, void 0, false, {\n                    fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\ETH-INDIA 23\\\\frontend\\\\pages\\\\index.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"y5xCRlPcJc9GuT+7z/cZg8/5KFQ=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ2xCLFFBQVFNLFNBQVNOOztzRUFDdkMsOERBQUM5QixnRUFBYUE7NERBQUN1QixXQUFVO3NFQUN2Qiw0RUFBQ3RCLDhEQUFXQTtnRUFBQzRDLGFBQVk7Ozs7Ozs7Ozs7O3NFQUUzQiw4REFBQy9DLGdFQUFhQTtzRUFDWG1ELE1BQU1DLElBQUksQ0FBQ3ZDLFNBQVN3QyxHQUFHLENBQUM7b0VBQUMsQ0FBQ0MsS0FBS0MsTUFBTTtxRkFDcEMsOERBQUN0RCw2REFBVUE7b0VBQUMrQixPQUFPdUI7OEVBQ2hCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQU1YLDhEQUFDMUQsNERBQVdBOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJbEIsOERBQUNMLHlEQUFNQTs0QkFBQ2dFLE1BQUs7NEJBQVNDLFNBQVM1Qjs0QkFBY0osV0FBVTtzQ0FBdUo7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdsTiw4REFBQ2M7Z0JBQUlkLFdBQVcsSUFBNEIsT0FBeEJLLE1BQU0sU0FBUyxVQUFTOzBCQUN6Q0EscUJBQU8sOERBQUMxQiw2REFBTUE7b0JBQUNpQixNQUFNUyxJQUFJVCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QztHQTVFd0JMOztRQUNUMUIsb0RBQU9BOzs7S0FERTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHpvZFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMvem9kXCJcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIlxyXG5pbXBvcnQgKiBhcyB6IGZyb20gXCJ6b2RcIlxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBGb3JtQ29udHJvbCxcclxuICBGb3JtRGVzY3JpcHRpb24sXHJcbiAgRm9ybUZpZWxkLFxyXG4gIEZvcm1JdGVtLFxyXG4gIEZvcm1MYWJlbCxcclxuICBGb3JtTWVzc2FnZSxcclxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2Zvcm1cIlxyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdXNlLXRvYXN0XCJcclxuaW1wb3J0IHtcclxuICBTZWxlY3QsXHJcbiAgU2VsZWN0Q29udGVudCxcclxuICBTZWxlY3RHcm91cCxcclxuICBTZWxlY3RJdGVtLFxyXG4gIFNlbGVjdExhYmVsLFxyXG4gIFNlbGVjdFRyaWdnZXIsXHJcbiAgU2VsZWN0VmFsdWUsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZWxlY3RcIlxyXG5pbXBvcnQgQ2FyZENTIGZyb20gXCJAL2NvbXBvbmVudHMvdWkvQ2FyZENTXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBGb3JtU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gIHVzZXJuYW1lOiB6LnN0cmluZygpLm1pbigyLCB7XHJcbiAgICBtZXNzYWdlOiBcIklkIG11c3QgYmUgYXQgbGVhc3QgMiBjaGFyYWN0ZXJzLlwiLFxyXG4gIH0pLFxyXG59KVxyXG5cclxuXHJcbmNvbnN0IGRhdGFNYXAgPSBuZXcgTWFwKFtcclxuICBbMTM3LCBcInBvbHlnb25cIl0sXHJcbiAgWzg0NTMsIFwiYmFzZVwiXSxcclxuICBbNDIxNjEsIFwiYXJiaXRydW1cIl0sXHJcbiAgWzExMDEsIFwicG9seWdvbl96a2V2bVwiXSxcclxuICBbNTkxNDQsIFwibGluZWFcIl0sXHJcbiAgWzQyMjIwLCBcImNlbG9cIl0sXHJcbiAgWzI0NTAyMjkzNCwgXCJuZW9uXCJdLFxyXG4gIFs1MzQzNTIsIFwic2Nyb2xsXCJdLFxyXG4gIFs1MDAwLCBcIm1hbnRsZVwiXSxcclxuXSk7XHJcblxyXG5jb25zdCBkYXRhTWFwMiA9IG5ldyBNYXAoW1xyXG4gIFtcInBvbHlnb25cIiwgMTM3XSxcclxuICBbXCJiYXNlXCIsIDg0NTNdLFxyXG4gIFtcImFyYml0cnVtXCIsIDQyMTYxXSxcclxuICBbXCJwb2x5Z29uX3prZXZtXCIsIDExMDFdLFxyXG4gIFtcImxpbmVhXCIsIDU5MTQ0XSxcclxuICBbXCJjZWxvXCIsIDQyMjIwXSxcclxuICBbXCJuZW9uXCIsIDI0NTAyMjkzNF0sXHJcbiAgW1wic2Nyb2xsXCIsIDUzNDM1Ml0sXHJcbiAgW1wibWFudGxlXCIsIDUwMDBdLFxyXG5dKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgZm9ybSA9IHVzZUZvcm08ei5pbmZlcjx0eXBlb2YgRm9ybVNjaGVtYT4+KHtcclxuICAgIHJlc29sdmVyOiB6b2RSZXNvbHZlcihGb3JtU2NoZW1hKSxcclxuICAgIGRlZmF1bHRWYWx1ZXM6IHtcclxuICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICB9LFxyXG4gIH0pXHJcblxyXG4gIGZ1bmN0aW9uIG9uU3VibWl0KGRhdGE6IHouaW5mZXI8dHlwZW9mIEZvcm1TY2hlbWE+KSB7XHJcbiAgICB0b2FzdCh7XHJcbiAgICAgIHRpdGxlOiBcIllvdSBzdWJtaXR0ZWQgdGhlIGZvbGxvd2luZyB2YWx1ZXM6XCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAgICAgPHByZSBjbGFzc05hbWU9XCJtdC0yIHctWzM0MHB4XSByb3VuZGVkLW1kIGJnLXNsYXRlLTk1MCBwLTRcIj5cclxuICAgICAgICAgIDxjb2RlIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57SlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMil9PC9jb2RlPlxyXG4gICAgICAgIDwvcHJlPlxyXG4gICAgICApLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDA1LyR7dmFsdWV9LyR7ZGF0YU1hcDIuZ2V0KGNoYWluKX1gKTtcclxuICAgIHNldFJlcyhyZXMpXHJcbiAgICBjb25zb2xlLmxvZygpXHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtjaGFpbiwgc2V0Y2hhaW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Jlcywgc2V0UmVzXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1vcmFuZ2UtMzAwIHRvLXJvc2UtMzAwIGl0ZW1zLWNlbnRlciBwdC0xMCBiYWNrZ3JvdW5kLWFuaW1hdGUgYH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LTR4bCBmbGV4IGl0ZW1zLXN0YXJ0IGZsZXgtY29sIHctc2NyZWVuIG1kOnBsLVsxNnJlbV0gdGV4dC1ncmF5LTIwMCBtYi0xMFwiPkNvaW5SYWRhclxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgIEdldCBUb2tlbiBvdmVydmlldyBhbmQgaW4gZGVwdGggIGFuYWx5c2lzIGZvciBzYWZlIGFzc2V0IGhvbGRpbmcuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIG1iLTIgdGV4dC1iYXNlXCI+R2V0IGEgcmVwb3J0IG9mIHRoZSB0b2tlbiBhbmQgdGFrZSBhIHN0ZXAgdG93YXJkcyBiZWluZyBhbiBpbnRlbGxpZ2VudMKgaG9sZGVyLjwvZGl2PjwvZGl2PlxyXG4gICAgICA8Rm9ybSB7Li4uZm9ybX0+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+e2UucHJldmVudERlZmF1bHQoKX19IGNsYXNzTmFtZT1cInctMi8zIHNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgPEZvcm1GaWVsZFxyXG4gICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxGb3JtSXRlbT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAteS00IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOmdhcC14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e1widGV4dC1ibGFjayBmbGV4IGgtMTAgbWQ6dy1mdWxsIHctWzE3LjVyZW1dIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCBiZy13aGl0ZSBweC0zIHB5LTIgdGV4dC1zbSByaW5nLW9mZnNldC13aGl0ZSBmaWxlOmJvcmRlci0wIGZpbGU6YmctdHJhbnNwYXJlbnQgZmlsZTp0ZXh0LXNtIGZpbGU6Zm9udC1tZWRpdW0gcGxhY2Vob2xkZXI6dGV4dC1uZXV0cmFsLTUwMCBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MCBkYXJrOmJvcmRlci1uZXV0cmFsLTgwMCBkYXJrOmJnLW5ldXRyYWwtOTUwIGRhcms6cmluZy1vZmZzZXQtbmV1dHJhbC05NTAgZGFyazpwbGFjZWhvbGRlcjp0ZXh0LW5ldXRyYWwtNDAwIGZvY3VzOm91dGxpbmUtNCBmb2N1czpvdXRsaW5lLW9mZnNldC0yIGZvY3VzOm91dGxpbmUgZm9jdXM6b3V0bGluZS15ZWxsb3ctMjAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBJZFwiIG9uQ2hhbmdlPXsoZSk9PntzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0IG9uVmFsdWVDaGFuZ2U9eyh2YWx1ZSk9PnNldGNoYWluKHZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFRyaWdnZXIgY2xhc3NOYW1lPVwidy1bMjgwcHhdIHRleHQtYmxhY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBwbGFjZWhvbGRlcj1cIlNlbGVjdCBDaGFpblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAge0FycmF5LmZyb20oZGF0YU1hcCkubWFwKChba2V5LCBWYWx1ZV0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9e1ZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Q29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLXllbGxvdy0yMDAgdG8teWVsbG93LTQwMCB0ZXh0LWJsYWNrIGZvbnQtc2VtaWJvbGQgaG92ZXI6b3V0bGluZS00IGhvdmVyOm91dGxpbmUtb2Zmc2V0LTIgaG92ZXI6b3V0bGluZSBob3ZlcjpvdXRsaW5lLXJvc2UtMjAwXCI+U3VibWl0PC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgICR7cmVzID8gXCJmbGV4XCIgOiBcImhpZGRlblwifSBmbGV4LWNvbCBnYXAteS0yIG10LTQgbWItOGB9PlxyXG4gICAgICAgIHtyZXMgJiYgPENhcmRDUyBkYXRhPXtyZXMuZGF0YX0vPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInpvZFJlc29sdmVyIiwidXNlRm9ybSIsInoiLCJCdXR0b24iLCJGb3JtIiwiRm9ybUNvbnRyb2wiLCJGb3JtRmllbGQiLCJGb3JtSXRlbSIsIkZvcm1NZXNzYWdlIiwidG9hc3QiLCJTZWxlY3QiLCJTZWxlY3RDb250ZW50IiwiU2VsZWN0SXRlbSIsIlNlbGVjdFRyaWdnZXIiLCJTZWxlY3RWYWx1ZSIsIkNhcmRDUyIsInVzZVN0YXRlIiwiYXhpb3MiLCJGb3JtU2NoZW1hIiwib2JqZWN0IiwidXNlcm5hbWUiLCJzdHJpbmciLCJtaW4iLCJtZXNzYWdlIiwiZGF0YU1hcCIsIk1hcCIsImRhdGFNYXAyIiwiSG9tZSIsImZvcm0iLCJyZXNvbHZlciIsImRlZmF1bHRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlIiwiY2xhc3NOYW1lIiwiY29kZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVTdWJtaXQiLCJyZXMiLCJnZXQiLCJ2YWx1ZSIsImNoYWluIiwic2V0UmVzIiwiY29uc29sZSIsImxvZyIsInNldFZhbHVlIiwic2V0Y2hhaW4iLCJkaXYiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb250cm9sIiwibmFtZSIsInJlbmRlciIsImZpZWxkIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0Iiwib25WYWx1ZUNoYW5nZSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImtleSIsIlZhbHVlIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});