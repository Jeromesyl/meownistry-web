webpackHotUpdate("meownistry-web",{

/***/ "./packages/mars-theme/src/components/cat-widget/PawCursor.tsx":
/*!*********************************************************************!*\
  !*** ./packages/mars-theme/src/components/cat-widget/PawCursor.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/jeromesoh/Documents/React Apps/meownistry-web/packages/mars-theme/src/components/cat-widget/PawCursor.tsx: Missing initializer in destructuring declaration. (37:15)\\n\\n\\u001b[0m \\u001b[90m 35 |\\u001b[39m \\u001b[36mfunction\\u001b[39m \\u001b[33mPawCursor\\u001b[39m () {\\n \\u001b[90m 36 |\\u001b[39m     \\u001b[36mconst\\u001b[39m [mousePos\\u001b[33m,\\u001b[39m _setMousePos] \\u001b[33m=\\u001b[39m useState({x\\u001b[33m:\\u001b[39m \\u001b[35m0\\u001b[39m\\u001b[33m,\\u001b[39m y\\u001b[33m:\\u001b[39m \\u001b[35m0\\u001b[39m})\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 37 |\\u001b[39m     \\u001b[36mconst\\u001b[39m [paw]\\n \\u001b[90m    |\\u001b[39m                \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 38 |\\u001b[39m     \\u001b[36mconst\\u001b[39m mousePosRef \\u001b[33m=\\u001b[39m useRef(mousePos)\\n \\u001b[90m 39 |\\u001b[39m\\n \\u001b[90m 40 |\\u001b[39m     \\u001b[36mconst\\u001b[39m setMousePos \\u001b[33m=\\u001b[39m (data\\u001b[33m:\\u001b[39m \\u001b[33mPoint\\u001b[39m) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n    at toParseError (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parse-error.ts:74:19)\\n    at TypeScriptParserMixin.raise (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/tokenizer/index.ts:1487:19)\\n    at TypeScriptParserMixin.parseVar (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:1536:16)\\n    at TypeScriptParserMixin.parseVarStatement (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:1193:10)\\n    at TypeScriptParserMixin.parseVarStatement (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/plugins/typescript/index.ts:2842:33)\\n    at TypeScriptParserMixin.parseStatementContent (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:546:21)\\n    at TypeScriptParserMixin.parseStatementContent (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/plugins/typescript/index.ts:2891:20)\\n    at TypeScriptParserMixin.parseStatementLike (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:417:17)\\n    at TypeScriptParserMixin.parseStatementListItem (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:366:17)\\n    at TypeScriptParserMixin.parseBlockOrModuleBlockBody (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:1386:16)\\n    at TypeScriptParserMixin.parseBlockBody (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:1359:10)\\n    at TypeScriptParserMixin.parseBlock (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:1327:10)\\n    at TypeScriptParserMixin.parseFunctionBody (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/expression.ts:2572:24)\\n    at TypeScriptParserMixin.parseFunctionBodyAndFinish (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/expression.ts:2541:10)\\n    at TypeScriptParserMixin.parseFunctionBodyAndFinish (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/plugins/typescript/index.ts:2399:20)\\n    at callback (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:1629:12)\\n    at TypeScriptParserMixin.withSmartMixTopicForbiddingContext (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/expression.ts:3086:14)\\n    at TypeScriptParserMixin.parseFunction (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:1627:10)\\n    at TypeScriptParserMixin.parseFunctionStatement (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:1023:17)\\n    at TypeScriptParserMixin.parseStatementContent (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:460:21)\\n    at TypeScriptParserMixin.parseStatementContent (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/plugins/typescript/index.ts:2891:20)\\n    at TypeScriptParserMixin.parseStatementLike (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:417:17)\\n    at TypeScriptParserMixin.parseModuleItem (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:354:17)\\n    at TypeScriptParserMixin.parseBlockOrModuleBlockBody (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:1385:16)\\n    at TypeScriptParserMixin.parseBlockBody (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:1359:10)\\n    at TypeScriptParserMixin.parseProgram (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:213:10)\\n    at TypeScriptParserMixin.parseTopLevel (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/statement.ts:195:25)\\n    at TypeScriptParserMixin.parse (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/parser/index.ts:45:10)\\n    at TypeScriptParserMixin.parse (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/plugins/typescript/index.ts:4001:20)\\n    at parse (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/parser/src/index.ts:34:26)\\n    at parser (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/core/src/parser/index.ts:28:19)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/core/src/transformation/normalize-file.ts:50:24)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/core/src/transformation/index.ts:39:36)\\n    at run.next (<anonymous>)\\n    at transform (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/@babel/core/src/transform.ts:29:20)\\n    at transform.next (<anonymous>)\\n    at step (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/gensync/index.js:261:32)\\n    at /Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/gensync/index.js:273:13\\n    at async.call.result.err.err (/Users/jeromesoh/Documents/React Apps/meownistry-web/node_modules/gensync/index.js:223:11)\\n    at eval (webpack-internal:///./node_modules/@frontity/react-easy-state/dist/bundle.js:58:245)\\n    at batchedUpdates$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3767:145)\\n    at batch (webpack-internal:///./node_modules/@frontity/react-easy-state/dist/bundle.js:58:237)\\n    at Object.apply (webpack-internal:///./node_modules/@frontity/react-easy-state/dist/bundle.js:61:179)\\n    at eval (webpack-internal:///./node_modules/@frontity/react-easy-state/dist/bundle.js:58:245)\\n    at batchedUpdates$1 (webpack-internal:///./node_modules/react-dom/cjs/react-dom.development.js:3767:145)\\n    at batch (webpack-internal:///./node_modules/@frontity/react-easy-state/dist/bundle.js:58:237)\\n    at Object.apply (webpack-internal:///./node_modules/@frontity/react-easy-state/dist/bundle.js:61:179)\\n    at eval (webpack-internal:///./node_modules/@frontity/react-easy-state/dist/bundle.js:58:245)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvY2F0LXdpZGdldC9QYXdDdXJzb3IudHN4LmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/cat-widget/PawCursor.tsx\n");

/***/ })

})