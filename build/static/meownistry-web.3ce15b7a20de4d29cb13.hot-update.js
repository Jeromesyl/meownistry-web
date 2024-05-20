webpackHotUpdate("meownistry-web",{

/***/ "./packages/mars-theme/src/components/nav.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/nav.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Navigation Component\n *\n * It renders the navigation links\n */const Nav=({state})=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavContainer,{children:state.theme.menu.map(([name,link])=>{// Check if the link matched the current page url\nconst data=state.source.get(state.router.link);const isCurrentPage=data.route===link;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavItem,{children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:link,\"aria-current\":isCurrentPage?\"page\":undefined,children:name})},name);})});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Nav));const NavContainer=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"])(\"nav\", false?undefined:{target:\"e1bkzu9n1\",label:\"NavContainer\"})( false?undefined:{name:\"nhmchl\",styles:\"list-style:none;display:flex;width:auto;\\xA0 max-width:100%;box-sizing:border-box;padding:0;margin:0 24px;overflow-x:auto;@media screen and (max-width: 560px){display:none;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJvbWVzb2gvRG9jdW1lbnRzL1JlYWN0IEFwcHMvbWVvd25pc3RyeS13ZWIvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkIrQiIsImZpbGUiOiIvVXNlcnMvamVyb21lc29oL0RvY3VtZW50cy9SZWFjdCBBcHBzL21lb3duaXN0cnktd2ViL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XG5cbi8qKlxuICogTmF2aWdhdGlvbiBDb21wb25lbnRcbiAqXG4gKiBJdCByZW5kZXJzIHRoZSBuYXZpZ2F0aW9uIGxpbmtzXG4gKi9cbmNvbnN0IE5hdiA9ICh7IHN0YXRlIH0pID0+IChcbiAgPE5hdkNvbnRhaW5lcj5cbiAgICB7c3RhdGUudGhlbWUubWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxpbmsgbWF0Y2hlZCB0aGUgY3VycmVudCBwYWdlIHVybFxuICAgICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IGRhdGEucm91dGUgPT09IGxpbms7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOYXZJdGVtIGtleT17bmFtZX0+XG4gICAgICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgICAgICA8TGluayBsaW5rPXtsaW5rfSBhcmlhLWN1cnJlbnQ9e2lzQ3VycmVudFBhZ2UgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICk7XG4gICAgfSl9XG4gIDwvTmF2Q29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXYpO1xuXG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQubmF2YFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogYXV0bzvCoFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAyNHB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LWZhbWlseTogb3Blbi1zYW5zLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIC8qIFVzZSBmb3Igc2VtYW50aWMgYXBwcm9hY2ggdG8gc3R5bGUgdGhlIGN1cnJlbnQgbGluayAqL1xuICAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuICB9XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const NavItem=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"styled\"])(\"div\", false?undefined:{target:\"e1bkzu9n0\",label:\"NavItem\"})( false?undefined:{name:\"kxfmor\",styles:\"padding:0;margin:0 12px;color:#fff;font-size:0.8em;box-sizing:border-box;flex-shrink:0;&>a{display:inline-block;line-height:2em;border-bottom:2px solid;border-bottom-color:transparent;font-family:open-sans,sans-serif;font-weight:lighter;&[aria-current=\\\"page\\\"]{border-bottom-color:#fff;}}&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;&:after{content:\\\"\\\";display:inline-block;width:24px;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJvbWVzb2gvRG9jdW1lbnRzL1JlYWN0IEFwcHMvbWVvd25pc3RyeS13ZWIvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEMwQiIsImZpbGUiOiIvVXNlcnMvamVyb21lc29oL0RvY3VtZW50cy9SZWFjdCBBcHBzL21lb3duaXN0cnktd2ViL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XG5cbi8qKlxuICogTmF2aWdhdGlvbiBDb21wb25lbnRcbiAqXG4gKiBJdCByZW5kZXJzIHRoZSBuYXZpZ2F0aW9uIGxpbmtzXG4gKi9cbmNvbnN0IE5hdiA9ICh7IHN0YXRlIH0pID0+IChcbiAgPE5hdkNvbnRhaW5lcj5cbiAgICB7c3RhdGUudGhlbWUubWVudS5tYXAoKFtuYW1lLCBsaW5rXSkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxpbmsgbWF0Y2hlZCB0aGUgY3VycmVudCBwYWdlIHVybFxuICAgICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IGRhdGEucm91dGUgPT09IGxpbms7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOYXZJdGVtIGtleT17bmFtZX0+XG4gICAgICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgICAgICA8TGluayBsaW5rPXtsaW5rfSBhcmlhLWN1cnJlbnQ9e2lzQ3VycmVudFBhZ2UgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICk7XG4gICAgfSl9XG4gIDwvTmF2Q29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXYpO1xuXG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQubmF2YFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogYXV0bzvCoFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAyNHB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LWZhbWlseTogb3Blbi1zYW5zLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIC8qIFVzZSBmb3Igc2VtYW50aWMgYXBwcm9hY2ggdG8gc3R5bGUgdGhlIGN1cnJlbnQgbGluayAqL1xuICAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuICB9XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcz8zZjM3Il0sIm5hbWVzIjpbIk5hdiIsInN0YXRlIiwiX2pzeCIsIk5hdkNvbnRhaW5lciIsImNoaWxkcmVuIiwidGhlbWUiLCJtZW51IiwibWFwIiwibmFtZSIsImxpbmsiLCJkYXRhIiwic291cmNlIiwiZ2V0Iiwicm91dGVyIiwiaXNDdXJyZW50UGFnZSIsInJvdXRlIiwiTmF2SXRlbSIsIkxpbmsiLCJ1bmRlZmluZWQiLCJjb25uZWN0Iiwic3R5bGVkIiwicHJvY2VzcyIsInRhcmdldCIsImxhYmVsIiwic3R5bGVzIiwidG9TdHJpbmciLCJfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3FSQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxLQUFNLENBQUFBLEdBQUcsQ0FBR0EsQ0FBQyxDQUFFQyxLQUFNLENBQUMsR0FDcEJDLHNFQUFBLENBQUNDLFlBQVksRUFBQUMsUUFBQSxDQUNWSCxLQUFLLENBQUNJLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUVDLElBQUksQ0FBQyxHQUFLLENBQ3RDO0FBQ0EsS0FBTSxDQUFBQyxJQUFJLENBQUdULEtBQUssQ0FBQ1UsTUFBTSxDQUFDQyxHQUFHLENBQUNYLEtBQUssQ0FBQ1ksTUFBTSxDQUFDSixJQUFJLENBQUMsQ0FDaEQsS0FBTSxDQUFBSyxhQUFhLENBQUdKLElBQUksQ0FBQ0ssS0FBSyxHQUFLTixJQUFJLENBRXpDLE1BQ0UsQ0FBQVAsc0VBQUEsQ0FBQ2MsT0FBTyxFQUFBWixRQUFBLENBRU5GLHNFQUFBLENBQUNlLDZDQUFJLEVBQUNSLElBQUksQ0FBRUEsSUFBSyxDQUFDLGVBQWNLLGFBQWEsQ0FBRyxNQUFNLENBQUdJLFNBQVUsQ0FBQWQsUUFBQSxDQUNoRUksSUFBSSxDQUNELENBQUMsRUFKS0EsSUFLTCxDQUFDLENBRWQsQ0FBQyxDQUFDLENBQ1UsQ0FDZixDQUVjVyx1SEFBTyxDQUFDbkIsR0FBRyxDQUFDLEVBRTNCLEtBQU0sQ0FBQUcsWUFBWSxjQUFHaUIsdURBQU0sT0FBQUMsTUFBQSxZQUFBQyxNQUFBLGFBQUFDLEtBQUEsa0JBQUFGLE1BQUEsWUFBQWIsSUFBQSxVQUFBZ0IsTUFBQSxpTEFBQWpCLEdBQUEsdXFGQUFBa0IsUUFBQSxDQUFBQyxnQ0FBQSxFQWExQixDQUVELEtBQU0sQ0FBQVYsT0FBTyxjQUFHSSx1REFBTSxPQUFBQyxNQUFBLFlBQUFDLE1BQUEsYUFBQUMsS0FBQSxhQUFBRixNQUFBLFlBQUFiLElBQUEsVUFBQWdCLE1BQUEseVpBQUFqQixHQUFBLHVxRkFBQWtCLFFBQUEsQ0FBQUMsZ0NBQUEsRUFrQ3JCIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4gKFxuICA8TmF2Q29udGFpbmVyPlxuICAgIHtzdGF0ZS50aGVtZS5tZW51Lm1hcCgoW25hbWUsIGxpbmtdKSA9PiB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgbGluayBtYXRjaGVkIHRoZSBjdXJyZW50IHBhZ2UgdXJsXG4gICAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gICAgICBjb25zdCBpc0N1cnJlbnRQYWdlID0gZGF0YS5yb3V0ZSA9PT0gbGluaztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5hdkl0ZW0ga2V5PXtuYW1lfT5cbiAgICAgICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxuICAgICAgICAgIDxMaW5rIGxpbms9e2xpbmt9IGFyaWEtY3VycmVudD17aXNDdXJyZW50UGFnZSA/IFwicGFnZVwiIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgKTtcbiAgICB9KX1cbiAgPC9OYXZDb250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE5hdik7XG5cbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBhdXRvO8KgXG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDI0cHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXNocmluazogMDtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtZmFtaWx5OiBvcGVuLXNhbnMsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgLyogVXNlIGZvciBzZW1hbnRpYyBhcHByb2FjaCB0byBzdHlsZSB0aGUgY3VycmVudCBsaW5rICovXG4gICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/nav.js\n");

/***/ })

})