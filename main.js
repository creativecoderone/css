(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a href=\"#alert\" class=\"as-badge as-alert-primary\">Alert</a>\n  <a href=\"#align\" class=\"as-badge as-alert-primary\">Align</a>\n  <a href=\"#grids\" class=\"as-badge as-alert-primary\">Grid</a>\n  <a href=\"#badge\" class=\"as-badge as-alert-primary\">Badge</a>\n\n  <app-alert></app-alert>\n  <app-align></app-align>\n  <app-badge></app-badge>\n  <app-grid></app-grid>\n\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-badge {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  margin: 5px;\n  padding: 4px;\n  font-size: 12px;\n  display: inline-block;\n  border-radius: 5px;\n  border: 1px solid white;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  width: auto; }\n\n.as-alert-primary {\n  border: 1px solid #00b0ff;\n  border-right: 8px solid #00b0ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFxhc3BpLWNzcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixzQkFBcUI7RUFDckIsb0RBQTJDO0VBQTNDLDRDQUEyQztFQUUzQyxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSwwQkExQmtCO0VBMkJsQixnQ0EzQmtCLEVBNEJuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcy1iYXNlOiAjMDAwMDAwO1xyXG4kYXMtcHJpbWFyeTogIzAwYjBmZjtcclxuJGFzLWRhbmdlcjogI2Q1MDAwMDtcclxuJGFzLXN1Y2Nlc3M6ICNhZWVhMDA7XHJcbiRhcy1pbmZvOiAjYjNlNWZjO1xyXG4kYXMtd2FybmluZzogI2ZmYWIwMDtcclxuJGFzLWxpZ2h0OiAjZTBlMGUwO1xyXG4kYXMtZGFyazogIzc4OTA5YztcclxuJGFzLXdpbm5lcjogIzBkNDdhMTtcclxuJGFzLWhhcHB5OiAjZDgxYjYwO1xyXG5cclxuLmFzLWJhZGdlIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5hcy1hbGVydC1wcmltYXJ5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtcHJpbWFyeTtcclxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAkYXMtcHJpbWFyeTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'auth';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comp_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp/alert/alert.component */ "./src/app/comp/alert/alert.component.ts");
/* harmony import */ var _comp_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp/grid/grid.component */ "./src/app/comp/grid/grid.component.ts");
/* harmony import */ var _comp_badge_badge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp/badge/badge.component */ "./src/app/comp/badge/badge.component.ts");
/* harmony import */ var _comp_align_align_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comp/align/align.component */ "./src/app/comp/align/align.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _comp_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"],
                _comp_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"],
                _comp_badge_badge_component__WEBPACK_IMPORTED_MODULE_7__["BadgeComponent"],
                _comp_align_align_component__WEBPACK_IMPORTED_MODULE_8__["AlignComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comp/alert/alert.component.html":
/*!*************************************************!*\
  !*** ./src/app/comp/alert/alert.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"alert\">Alert</h2>\n<p>Alert messaging (or alert notification) is machine-to-person communication that is important or time sensitive. An alert\n  may be a calendar reminder or a notification of a new message. ... Alerting makes it possible for people to keep up with\n  the information that matters most to them.</p>\n\n<p>Conveying meaning to assistive technologies Using color to add meaning only provides a visual indication, which will not\n  be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is\n  either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional\n  text hidden with the .sr-only class.</p>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <h2>Alerts</h2>\n    <i>.as-alert .as-alert-</i> color\n    <div class=\"alert\">\n      <div class=\"as-alert as-alert-base\">Alert base</div>\n      <div class=\"as-alert as-alert-primary\">Alert primary</div>\n      <div class=\"as-alert as-alert-danger\">Alert danger</div>\n      <div class=\"as-alert as-alert-success\">Alert success</div>\n      <div class=\"as-alert as-alert-info\">Alert info</div>\n      <div class=\"as-alert as-alert-warning\">Alert warning</div>\n      <div class=\"as-alert as-alert-light\">Alert light</div>\n      <div class=\"as-alert as-alert-winner\">Alert winner</div>\n      <div class=\"as-alert as-alert-happy\">Alert happy</div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <h2>Alert Hover effects</h2>\n    <i>.as-alert-hover-</i> color\n    <div class=\"alert\">\n      <div class=\"as-alert as-alert-hover-base as-alert-base\">Alert base</div>\n      <div class=\"as-alert as-alert-hover-primary as-alert-primary\">Alert primary</div>\n      <div class=\"as-alert as-alert-hover-danger as-alert-danger\">Alert danger</div>\n      <div class=\"as-alert as-alert-hover-success as-alert-success\">Alert success</div>\n      <div class=\"as-alert as-alert-hover-info as-alert-info\">Alert info</div>\n      <div class=\"as-alert as-alert-hover-warning as-alert-warning\">Alert warning</div>\n      <div class=\"as-alert as-alert-hover-light as-alert-light\">Alert light</div>\n      <div class=\"as-alert as-alert-hover-winner as-alert-winner\">Alert winner</div>\n      <div class=\"as-alert as-alert-hover-happy as-alert-happy\">Alert happy</div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <h2>Alert Background color</h2>\n    <i>.as-bg-</i> color\n    <div class=\"alert\">\n      <div class=\"as-alert as-bg-base\">Alert base</div>\n      <div class=\"as-alert as-bg-primary\">Alert primary</div>\n      <div class=\"as-alert as-bg-danger\">Alert danger</div>\n      <div class=\"as-alert as-bg-success\">Alert success</div>\n      <div class=\"as-alert as-bg-info\">Alert info</div>\n      <div class=\"as-alert as-bg-warning\">Alert warning</div>\n      <div class=\"as-alert as-bg-light\">Alert light</div>\n      <div class=\"as-alert as-bg-winner\">Alert winner</div>\n      <div class=\"as-alert as-bg-happy\">Alert happy</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/alert/alert.component.scss":
/*!*************************************************!*\
  !*** ./src/app/comp/alert/alert.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-alert {\n  padding: 15px;\n  border-radius: 5px;\n  margin: 5px;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out; }\n\n.as-alert-base {\n  border: 1px solid #000000;\n  border-right: 8px solid #000000; }\n\n.as-alert-primary {\n  border: 1px solid #00b0ff;\n  border-right: 8px solid #00b0ff; }\n\n.as-alert-danger {\n  border: 1px solid #d50000;\n  border-right: 8px solid #d50000; }\n\n.as-alert-success {\n  border: 1px solid #aeea00;\n  border-right: 8px solid #aeea00; }\n\n.as-alert-info {\n  border: 1px solid #b3e5fc;\n  border-right: 8px solid #b3e5fc; }\n\n.as-alert-warning {\n  border: 1px solid #ffab00;\n  border-right: 8px solid #ffab00; }\n\n.as-alert-light {\n  border: 1px solid #e0e0e0;\n  border-right: 8px solid #e0e0e0; }\n\n.as-alert-dark {\n  border: 1px solid #78909c;\n  border-right: 8px solid #78909c; }\n\n.as-alert-winner {\n  border: 1px solid #0d47a1;\n  border-right: 8px solid #0d47a1; }\n\n.as-alert-happy {\n  border: 1px solid #d81b60;\n  border-right: 8px solid #d81b60; }\n\n.as-alert-hover-base:hover {\n  background-color: #000000;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-primary:hover {\n  background-color: #00b0ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-danger:hover {\n  background-color: #d50000;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-success:hover {\n  background-color: #aeea00;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-info:hover {\n  background-color: #b3e5fc;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-warning:hover {\n  background-color: #ffab00;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-light:hover {\n  background-color: #e0e0e0;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-dark:hover {\n  background-color: #78909c;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-winner:hover {\n  background-color: #0d47a1;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-happy:hover {\n  background-color: #d81b60;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #00b0ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #d50000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #aeea00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b3e5fc;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffab00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #78909c;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-4 {\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center; }\n\n.as-4:hover {\n  box-shadow: 0px 0px 6px 6px gainsboro; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9hbGVydC9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxjb21wXFxhbGVydFxcYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxvREFBMkM7RUFBM0MsNENBQTJDLEVBQzVDOztBQUVEO0VBQ0UsMEJBbkJlO0VBb0JmLGdDQXBCZSxFQXFCaEI7O0FBQ0Q7RUFDRSwwQkF0QmtCO0VBdUJsQixnQ0F2QmtCLEVBd0JuQjs7QUFDRDtFQUNFLDBCQXpCaUI7RUEwQmpCLGdDQTFCaUIsRUEyQmxCOztBQUNEO0VBQ0UsMEJBNUJrQjtFQTZCbEIsZ0NBN0JrQixFQThCbkI7O0FBQ0Q7RUFDRSwwQkEvQmU7RUFnQ2YsZ0NBaENlLEVBaUNoQjs7QUFDRDtFQUNFLDBCQWxDa0I7RUFtQ2xCLGdDQW5Da0IsRUFvQ25COztBQUNEO0VBQ0UsMEJBckNnQjtFQXNDaEIsZ0NBdENnQixFQXVDakI7O0FBQ0Q7RUFDRSwwQkF4Q2U7RUF5Q2YsZ0NBekNlLEVBMENoQjs7QUFDRDtFQUNFLDBCQTNDaUI7RUE0Q2pCLGdDQTVDaUIsRUE2Q2xCOztBQUNEO0VBQ0UsMEJBOUNnQjtFQStDaEIsZ0NBL0NnQixFQWdEakI7O0FBRUQ7RUFDRSwwQkE1RGU7RUE2RGYsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0UsMEJBbEVrQjtFQW1FbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0UsMEJBeEVpQjtFQXlFakIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0UsMEJBOUVrQjtFQStFbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0UsMEJBcEZlO0VBcUZmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLDBCQTFGa0I7RUEyRmxCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLDBCQWhHZ0I7RUFpR2hCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLDBCQXRHZTtFQXVHZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0MsRUFDckM7O0FBQ0Q7RUFDRSwwQkEzR2lCO0VBNEdqQixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0MsRUFDckM7O0FBQ0Q7RUFDRSwwQkFoSGdCO0VBaUhoQixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0MsRUFDckM7O0FBRUQ7RUFDRSwwQkFoSWU7RUFpSWYsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXJJZTtFQXNJZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBeklrQjtFQTBJbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTdJaUI7RUE4SWpCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFqSmtCO0VBa0psQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBckplO0VBc0pmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF6SmtCO0VBMEpsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBN0pnQjtFQThKaEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWpLZTtFQWtLZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBcktpQjtFQXNLakIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWxMZTtFQW1MZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0Usc0NBQXFDLEVBQ3RDIiwiZmlsZSI6InNyYy9hcHAvY29tcC9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcy1iYXNlOiAjMDAwMDAwO1xyXG4kYXMtcHJpbWFyeTogIzAwYjBmZjtcclxuJGFzLWRhbmdlcjogI2Q1MDAwMDtcclxuJGFzLXN1Y2Nlc3M6ICNhZWVhMDA7XHJcbiRhcy1pbmZvOiAjYjNlNWZjO1xyXG4kYXMtd2FybmluZzogI2ZmYWIwMDtcclxuJGFzLWxpZ2h0OiAjZTBlMGUwO1xyXG4kYXMtZGFyazogIzc4OTA5YztcclxuJGFzLXdpbm5lcjogIzBkNDdhMTtcclxuJGFzLWhhcHB5OiAjZDgxYjYwO1xyXG5cclxuLmFzLWFsZXJ0IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDVweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYXMtYWxlcnQtYmFzZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWJhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJGFzLWJhc2U7XHJcbn1cclxuLmFzLWFsZXJ0LXByaW1hcnkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG59XHJcbi5hcy1hbGVydC1kYW5nZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1kYW5nZXI7XHJcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJGFzLWRhbmdlcjtcclxufVxyXG4uYXMtYWxlcnQtc3VjY2VzcyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbn1cclxuLmFzLWFsZXJ0LWluZm8ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1pbmZvO1xyXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkICRhcy1pbmZvO1xyXG59XHJcbi5hcy1hbGVydC13YXJuaW5nIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtd2FybmluZztcclxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAkYXMtd2FybmluZztcclxufVxyXG4uYXMtYWxlcnQtbGlnaHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1saWdodDtcclxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAkYXMtbGlnaHQ7XHJcbn1cclxuLmFzLWFsZXJ0LWRhcmsge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1kYXJrO1xyXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkICRhcy1kYXJrO1xyXG59XHJcbi5hcy1hbGVydC13aW5uZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy13aW5uZXI7XHJcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJGFzLXdpbm5lcjtcclxufVxyXG4uYXMtYWxlcnQtaGFwcHkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1oYXBweTtcclxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSG92ZXJcclxuLmFzLWFsZXJ0LWhvdmVyLWJhc2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5hcy1hbGVydC1ob3Zlci1wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtcHJpbWFyeTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG59XHJcblxyXG4uYXMtYWxlcnQtaG92ZXItZGFuZ2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFuZ2VyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5hcy1hbGVydC1ob3Zlci1zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG59XHJcblxyXG4uYXMtYWxlcnQtaG92ZXItaW5mbzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWluZm87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxufVxyXG5cclxuLmFzLWFsZXJ0LWhvdmVyLXdhcm5pbmc6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13YXJuaW5nO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5hcy1hbGVydC1ob3Zlci1saWdodDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5hcy1hbGVydC1ob3Zlci1kYXJrOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFyaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG59XHJcbi5hcy1hbGVydC1ob3Zlci13aW5uZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxufVxyXG4uYXMtYWxlcnQtaG92ZXItaGFwcHk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG59XHJcblxyXG4uYXMtYmctYmFzZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWJhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctYmFzZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWJhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXByaW1hcnk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFuZ2VyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1zdWNjZXNzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1pbmZvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXdhcm5pbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13YXJuaW5nO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtbGlnaHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhcms7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctd2lubmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2lubmVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWhhcHB5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy00IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcy00OmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCA2cHggZ2FpbnNib3JvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/comp/alert/alert.component.ts":
/*!***********************************************!*\
  !*** ./src/app/comp/alert/alert.component.ts ***!
  \***********************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/comp/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/comp/alert/alert.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/comp/align/align.component.html":
/*!*************************************************!*\
  !*** ./src/app/comp/align/align.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"align\">\n  Align\n</h2>\n<p>\n  Align or alignment is a term used to describe how text is placed on the screen. For example, left-aligned text creates a\n  straight line of text on the left side of the page (like this paragraph). Text can be aligned along the edge of a page,\n  cell, div, table, or another visible or non-visible line.</p>\n<div class=\"row\">\n  <div class=\"as-3 as-text-left\">\n    <h2>Left</h2>\n    <i>.as-text-left</i>\n    <hr>\n    <span class=\"\"> Hello world</span>\n  </div>\n\n  <div class=\"as-3 as-text-center\">\n    <h2>Center</h2>\n    <i>.as-text-center</i>\n    <hr>\n    <span class=\"\"> Hello world</span>\n  </div>\n  <div class=\"as-3 as-text-justify\">\n    <h2>Justify</h2>\n    <i>.as-text-justify</i>\n    <hr>\n    <span class=\"\">Poems awaken the dormant soul in us. We all come at place, where we feel dejected and disenfranchised with this materialistic world, once in our lives.</span>\n  </div>\n  <div class=\"as-3 as-text-right\">\n    <h2>Right</h2>\n    <i>.as-text-right</i>\n    <hr>\n    <span class=\"\"> Hello world</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/align/align.component.scss":
/*!*************************************************!*\
  !*** ./src/app/comp/align/align.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-3 {\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center; }\n\n.as-3:hover {\n  box-shadow: 0px 0px 6px 6px gainsboro; }\n\n.as-text-left {\n  text-align: left; }\n\n.as-text-right {\n  text-align: right; }\n\n.as-text-center {\n  text-align: center; }\n\n.as-text-justify {\n  text-align: justify; }\n\n.row h2 {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9hbGlnbi9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxjb21wXFxhbGlnblxcYWxpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxzQ0FBcUMsRUFDdEM7O0FBQ0Q7RUFDRSxpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFFSSxtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wL2FsaWduL2FsaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzLTMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFzLTM6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDZweCBnYWluc2Jvcm87XHJcbn1cclxuLmFzLXRleHQtbGVmdCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYXMtdGV4dC1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmFzLXRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFzLXRleHQtanVzdGlmeSB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4ucm93IHtcclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/comp/align/align.component.ts":
/*!***********************************************!*\
  !*** ./src/app/comp/align/align.component.ts ***!
  \***********************************************/
/*! exports provided: AlignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignComponent", function() { return AlignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlignComponent = /** @class */ (function () {
    function AlignComponent() {
    }
    AlignComponent.prototype.ngOnInit = function () {
    };
    AlignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-align',
            template: __webpack_require__(/*! ./align.component.html */ "./src/app/comp/align/align.component.html"),
            styles: [__webpack_require__(/*! ./align.component.scss */ "./src/app/comp/align/align.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlignComponent);
    return AlignComponent;
}());



/***/ }),

/***/ "./src/app/comp/badge/badge.component.html":
/*!*************************************************!*\
  !*** ./src/app/comp/badge/badge.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"badge\">Badge</h2>\n<p>Badges can notify you that there are new or unread messages or notifications. Add the new class to the badge to give it the\n  background.\n</p>\n<p>The CSS :hover selector is one of many pseudo-classes that are used to style elements. The :hover selector is used to select\n  elements when you mouse over them. ... When a user hovers over the button with their mouse the rule with the :hover selector\n  will become active and the button's style will change.</p>\n<p>The background-color property sets the background color of an element. The background of an element is the total size of\n  the element, including padding and border (but not the margin). Tip: Use a background color and a text color that makes\n  the text easy to read. Default value: transparent.</p>\n<p>Rounded badges (with a larger border-radius and additional horizontal padding)</p>\n\n<div class=\"row\">\n  <div class=\"as-3\">\n    <h2>Badge </h2>\n    <i>.as-badge, .as-badge-</i> color\n    <div class=\"\">\n      <span class=\"as-badge as-badge-base\">Badge base</span>\n      <span class=\"as-badge as-badge-primary\">Badge primary</span>\n      <span class=\"as-badge as-badge-danger\">Badge danger</span>\n      <span class=\"as-badge as-badge-success\">Badge success</span>\n      <span class=\"as-badge as-badge-info\">Badge info</span>\n      <span class=\"as-badge as-badge-warning\">Badge warning</span>\n      <span class=\"as-badge as-badge-light\">Badge light</span>\n      <span class=\"as-badge as-badge-winner\">Badge winner</span>\n      <span class=\"as-badge as-badge-happy\">Badge happy</span>\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <h2>Badge Hover effects</h2>\n    <i>.as-bg-</i> color\n    <div class=\" \">\n      <span class=\"as-badge as-badge-hover-base as-badge-base\">Badge base</span>\n      <span class=\"as-badge as-badge-hover-primary as-badge-primary\">Badge primary</span>\n      <span class=\"as-badge as-badge-hover-danger as-badge-danger\">Badge danger</span>\n      <span class=\"as-badge as-badge-hover-success as-badge-success\">Badge success</span>\n      <span class=\"as-badge as-badge-hover-info as-badge-info\">Badge info</span>\n      <span class=\"as-badge as-badge-hover-warning as-badge-warning\">Badge warning</span>\n      <span class=\"as-badge as-badge-hover-light as-badge-light\">Badge light</span>\n      <span class=\"as-badge as-badge-hover-winner as-badge-winner\">Badge winner</span>\n      <span class=\"as-badge as-badge-hover-happy as-badge-happy\">Badge happy</span>\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <h2>Background color</h2>\n    <i>.as-badge-hover-</i> color\n    <div class=\"\">\n      <span class=\"as-badge as-bg-base \">Badge base</span>\n      <span class=\"as-badge  as-bg-primary\">Badge primary</span>\n      <span class=\"as-badge  as-bg-danger\">Badge danger</span>\n      <span class=\"as-badge as-bg-success\">Badge success</span>\n      <span class=\"as-badge as-bg-info\">Badge info</span>\n      <span class=\"as-badge as-bg-warning\">Badge warning</span>\n      <span class=\"as-badge as-bg-light\">Badge light</span>\n      <span class=\"as-badge as-bg-winner\">Badge winner</span>\n      <span class=\"as-badge as-bg-happy\">Badge happy</span>\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <h2>Badge circle color</h2>\n    <i>.as-circle-sm </i>\n    <div class=\" \">\n      <span class=\"as-badge as-circle-sm as-bg-base \">Badge base</span>\n      <span class=\"as-badge  as-circle-sm  as-bg-primary\">Badge primary</span>\n      <span class=\"as-badge as-circle-sm   as-bg-danger\">Badge danger</span>\n      <span class=\"as-badge as-circle-sm  as-bg-success\">Badge success</span>\n      <span class=\"as-badge as-circle-sm  as-bg-info\">Badge info</span>\n      <span class=\"as-badge as-circle-sm  as-bg-warning\">Badge warning</span>\n      <span class=\"as-badge as-circle-sm  as-bg-light\">Badge light</span>\n      <span class=\"as-badge as-circle-sm  as-bg-winner\">Badge winner</span>\n      <span class=\"as-badge as-circle-sm  as-bg-happy\">Badge happy</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/badge/badge.component.scss":
/*!*************************************************!*\
  !*** ./src/app/comp/badge/badge.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-badge {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  margin: 5px;\n  padding: 4px;\n  font-size: 12px;\n  display: inline-block;\n  border-radius: 5px;\n  border: 1px solid white;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  width: auto; }\n\n.as-badge-base {\n  border: 1px solid #000000;\n  border-right: 3px solid #000000; }\n\n.as-badge-primary {\n  border: 1px solid #00b0ff;\n  border-right: 3px solid #00b0ff; }\n\n.as-badge-danger {\n  border: 1px solid #d50000;\n  border-right: 3px solid #d50000; }\n\n.as-badge-success {\n  border: 1px solid #aeea00;\n  border-right: 3px solid #aeea00; }\n\n.as-badge-info {\n  border: 1px solid #b3e5fc;\n  border-right: 3px solid #b3e5fc; }\n\n.as-badge-warning {\n  border: 1px solid #ffab00;\n  border-right: 3px solid #ffab00; }\n\n.as-badge-light {\n  border: 1px solid #e0e0e0;\n  border-right: 3px solid #e0e0e0; }\n\n.as-badge-dark {\n  border: 1px solid #78909c;\n  border-right: 3px solid #78909c; }\n\n.as-badge-winner {\n  border: 1px solid #0d47a1;\n  border-right: 3px solid #0d47a1; }\n\n.as-badge-happy {\n  border: 1px solid #d81b60;\n  border-right: 3px solid #d81b60; }\n\n.as-badge-hover-base:hover {\n  background-color: #000000;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #000000; }\n\n.as-badge-hover-primary:hover {\n  background-color: #00b0ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #00b0ff; }\n\n.as-badge-hover-danger:hover {\n  background-color: #d50000;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #d50000; }\n\n.as-badge-hover-success:hover {\n  background-color: #aeea00;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #aeea00; }\n\n.as-badge-hover-info:hover {\n  background-color: #b3e5fc;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #b3e5fc; }\n\n.as-badge-hover-warning:hover {\n  background-color: #ffab00;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ffab00; }\n\n.as-badge-hover-light:hover {\n  background-color: #e0e0e0;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #e0e0e0; }\n\n.as-badge-hover-dark:hover {\n  background-color: #78909c;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #78909c; }\n\n.as-badge-hover-winner:hover {\n  background-color: #0d47a1;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #0d47a1; }\n\n.as-badge-hover-happy:hover {\n  background-color: #d81b60;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #d81b60; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #00b0ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #d50000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #aeea00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b3e5fc;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffab00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #78909c;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-circle-sm {\n  border-radius: 15px;\n  padding: 5px; }\n\n.as-3 {\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center; }\n\n.as-3:hover {\n  box-shadow: 0px 0px 6px 6px gainsboro; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9iYWRnZS9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxjb21wXFxiYWRnZVxcYmFkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLHNCQUFxQjtFQUNyQixvREFBMkM7RUFBM0MsNENBQTJDO0VBRTNDLFlBQVcsRUFDWjs7QUFFRDtFQUNFLDBCQTVCZTtFQTZCZixnQ0E3QmUsRUE4QmhCOztBQUNEO0VBQ0UsMEJBL0JrQjtFQWdDbEIsZ0NBaENrQixFQWlDbkI7O0FBQ0Q7RUFDRSwwQkFsQ2lCO0VBbUNqQixnQ0FuQ2lCLEVBb0NsQjs7QUFDRDtFQUNFLDBCQXJDa0I7RUFzQ2xCLGdDQXRDa0IsRUF1Q25COztBQUNEO0VBQ0UsMEJBeENlO0VBeUNmLGdDQXpDZSxFQTBDaEI7O0FBQ0Q7RUFDRSwwQkEzQ2tCO0VBNENsQixnQ0E1Q2tCLEVBNkNuQjs7QUFDRDtFQUNFLDBCQTlDZ0I7RUErQ2hCLGdDQS9DZ0IsRUFnRGpCOztBQUNEO0VBQ0UsMEJBakRlO0VBa0RmLGdDQWxEZSxFQW1EaEI7O0FBQ0Q7RUFDRSwwQkFwRGlCO0VBcURqQixnQ0FyRGlCLEVBc0RsQjs7QUFDRDtFQUNFLDBCQXZEZ0I7RUF3RGhCLGdDQXhEZ0IsRUF5RGpCOztBQUVEO0VBQ0UsMEJBckVlO0VBc0VmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0F6RWUsRUEwRWhCOztBQUVEO0VBQ0UsMEJBNUVrQjtFQTZFbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQWhGa0IsRUFpRm5COztBQUVEO0VBQ0UsMEJBbkZpQjtFQW9GakIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQXZGaUIsRUF3RmxCOztBQUVEO0VBQ0UsMEJBMUZrQjtFQTJGbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQTlGa0IsRUErRm5COztBQUVEO0VBQ0UsMEJBakdlO0VBa0dmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FyR2UsRUFzR2hCOztBQUVEO0VBQ0UsMEJBeEdrQjtFQXlHbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQTVHa0IsRUE2R25COztBQUVEO0VBQ0UsMEJBL0dnQjtFQWdIaEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQW5IZ0IsRUFvSGpCOztBQUVEO0VBQ0UsMEJBdEhlO0VBdUhmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0ExSGUsRUEySGhCOztBQUNEO0VBQ0UsMEJBNUhpQjtFQTZIakIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQWhJaUIsRUFpSWxCOztBQUNEO0VBQ0UsMEJBbElnQjtFQW1JaEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQXRJZ0IsRUF1SWpCOztBQUdEO0VBQ0UsMEJBcEplO0VBcUpmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF6SmU7RUEwSmYsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTdKa0I7RUE4SmxCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFqS2lCO0VBa0tqQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBcktrQjtFQXNLbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXpLZTtFQTBLZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBN0trQjtFQThLbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWpMZ0I7RUFrTGhCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFyTGU7RUFzTGYsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXpMaUI7RUEwTGpCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF0TWU7RUF1TWYsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxzQ0FBcUMsRUFDdEMiLCJmaWxlIjoic3JjL2FwcC9jb21wL2JhZGdlL2JhZGdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFzLWJhc2U6ICMwMDAwMDA7XHJcbiRhcy1wcmltYXJ5OiAjMDBiMGZmO1xyXG4kYXMtZGFuZ2VyOiAjZDUwMDAwO1xyXG4kYXMtc3VjY2VzczogI2FlZWEwMDtcclxuJGFzLWluZm86ICNiM2U1ZmM7XHJcbiRhcy13YXJuaW5nOiAjZmZhYjAwO1xyXG4kYXMtbGlnaHQ6ICNlMGUwZTA7XHJcbiRhcy1kYXJrOiAjNzg5MDljO1xyXG4kYXMtd2lubmVyOiAjMGQ0N2ExO1xyXG4kYXMtaGFwcHk6ICNkODFiNjA7XHJcblxyXG4uYXMtYmFkZ2Uge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcclxuICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5hcy1iYWRnZS1iYXNlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtYmFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtYmFzZTtcclxufVxyXG4uYXMtYmFkZ2UtcHJpbWFyeSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXByaW1hcnk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXByaW1hcnk7XHJcbn1cclxuLmFzLWJhZGdlLWRhbmdlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWRhbmdlcjtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtZGFuZ2VyO1xyXG59XHJcbi5hcy1iYWRnZS1zdWNjZXNzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtc3VjY2VzcztcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtc3VjY2VzcztcclxufVxyXG4uYXMtYmFkZ2UtaW5mbyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWluZm87XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWluZm87XHJcbn1cclxuLmFzLWJhZGdlLXdhcm5pbmcge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy13YXJuaW5nO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy13YXJuaW5nO1xyXG59XHJcbi5hcy1iYWRnZS1saWdodCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWxpZ2h0O1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1saWdodDtcclxufVxyXG4uYXMtYmFkZ2UtZGFyayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWRhcms7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWJhZGdlLXdpbm5lciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXdpbm5lcjtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtd2lubmVyO1xyXG59XHJcbi5hcy1iYWRnZS1oYXBweSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWhhcHB5O1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1oYXBweTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Ib3ZlclxyXG4uYXMtYmFkZ2UtaG92ZXItYmFzZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWJhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtYmFzZTtcclxufVxyXG5cclxuLmFzLWJhZGdlLWhvdmVyLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXByaW1hcnk7XHJcbn1cclxuXHJcbi5hcy1iYWRnZS1ob3Zlci1kYW5nZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYW5nZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtZGFuZ2VyO1xyXG59XHJcblxyXG4uYXMtYmFkZ2UtaG92ZXItc3VjY2Vzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXN1Y2Nlc3M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtc3VjY2VzcztcclxufVxyXG5cclxuLmFzLWJhZGdlLWhvdmVyLWluZm86aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1pbmZvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWluZm87XHJcbn1cclxuXHJcbi5hcy1iYWRnZS1ob3Zlci13YXJuaW5nOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2FybmluZztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy13YXJuaW5nO1xyXG59XHJcblxyXG4uYXMtYmFkZ2UtaG92ZXItbGlnaHQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1saWdodDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1saWdodDtcclxufVxyXG5cclxuLmFzLWJhZGdlLWhvdmVyLWRhcms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYXJrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWJhZGdlLWhvdmVyLXdpbm5lcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdpbm5lcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy13aW5uZXI7XHJcbn1cclxuLmFzLWJhZGdlLWhvdmVyLWhhcHB5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaGFwcHk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY29sb3JcclxuXHJcbi5hcy1iZy1iYXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1iYXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtcHJpbWFyeTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYW5nZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXN1Y2Nlc3M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWluZm87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdhcm5pbmc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctbGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1saWdodDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFyaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy13aW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctaGFwcHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWNpcmNsZS1zbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmFzLTMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFzLTM6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDZweCBnYWluc2Jvcm87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/comp/badge/badge.component.ts":
/*!***********************************************!*\
  !*** ./src/app/comp/badge/badge.component.ts ***!
  \***********************************************/
/*! exports provided: BadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BadgeComponent = /** @class */ (function () {
    function BadgeComponent() {
    }
    BadgeComponent.prototype.ngOnInit = function () {
    };
    BadgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-badge',
            template: __webpack_require__(/*! ./badge.component.html */ "./src/app/comp/badge/badge.component.html"),
            styles: [__webpack_require__(/*! ./badge.component.scss */ "./src/app/comp/badge/badge.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BadgeComponent);
    return BadgeComponent;
}());



/***/ }),

/***/ "./src/app/comp/grid/grid.component.html":
/*!***********************************************!*\
  !*** ./src/app/comp/grid/grid.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"grids\">\n  Grid System</h2>\n<p>CSS grid layout or CSS grid is a technique in Cascading Style Sheets that allows web developers to create complex responsive\n  web design layouts more easily and consistently across browsers. There have been other methods for controlling web page\n  layout methods, such as tables, the box model, and CSS flex box.</p>\n<div class=\"row\">\n  <div class=\"as-1\"></div>\n  <div class=\"as-1\"></div>\n  <div class=\"as-1\"></div>\n  <div class=\"as-1\"></div>\n  <div class=\"as-1\"></div>\n  <div class=\"as-1\"></div>\n  <div class=\"as-1\"></div>\n  <div class=\"as-1\"></div>\n  <div class=\"as-1\"></div>\n  <div class=\"as-1\"></div>\n  <div class=\"as-1\"></div>\n  <div class=\"as-1\"></div>\n</div><br>\n<div class=\"row\">\n  <div class=\"as-2\"></div>\n  <div class=\"as-2\"></div>\n  <div class=\"as-2\"></div>\n  <div class=\"as-2\"></div>\n  <div class=\"as-2\"></div>\n  <div class=\"as-2\"></div>\n</div><br>\n<div class=\"row\">\n  <div class=\"as-3\"></div>\n  <div class=\"as-3\"></div>\n  <div class=\"as-3\"></div>\n  <div class=\"as-3\"></div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"as-4\"></div>\n  <div class=\"as-4\"></div>\n  <div class=\"as-4\"></div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"as-5\"></div>\n  <div class=\"as-5\"></div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"as-1\"></div>\n  <div class=\"as-2\"></div>\n  <div class=\"as-3\"></div>\n  <div class=\"as-4\"></div>\n  <div class=\"as-2\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/grid/grid.component.scss":
/*!***********************************************!*\
  !*** ./src/app/comp/grid/grid.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-1 {\n  width: 7.25%;\n  border: 1px solid black;\n  padding: 5px; }\n\n.as-2 {\n  width: 15.55%;\n  border: 1px solid black;\n  padding: 5px; }\n\n.as-3 {\n  width: 23.85%;\n  border: 1px solid black;\n  padding: 5px; }\n\n.as-4 {\n  width: 32.15%;\n  border: 1px solid black;\n  padding: 5px; }\n\n.as-5 {\n  width: 48.75%;\n  border: 1px solid black;\n  padding: 5px; }\n\n@media (max-width: 576px) {\n  .as-1 {\n    width: 100%; }\n  .as-2 {\n    width: 100%; }\n  .as-3 {\n    width: 100%; }\n  .as-4 {\n    width: 100%; }\n  .as-5 {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9ncmlkL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcYXNwaS1jc3Mvc3JjXFxhcHBcXGNvbXBcXGdyaWRcXGdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLGFBQVksRUFDYjs7QUFDRDtFQUNFLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsYUFBWSxFQUNiOztBQUNEO0VBQ0UsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLGFBQVksRUFDYjs7QUFDRDtFQUNFLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsYUFBWSxFQUNiOztBQUtEO0VBQ0U7SUFDRSxZQUFXLEVBQ1o7RUFDRDtJQUNFLFlBQVcsRUFDWjtFQUNEO0lBQ0UsWUFBVyxFQUNaO0VBQ0Q7SUFDRSxZQUFXLEVBQ1o7RUFDRDtJQUNFLFlBQVcsRUFDWixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcC9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXMtMSB7XHJcbiAgd2lkdGg6IDcuMjUlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uYXMtMiB7XHJcbiAgd2lkdGg6IDE1LjU1JTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmFzLTMge1xyXG4gIHdpZHRoOiAyMy44NSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5hcy00IHtcclxuICB3aWR0aDogMzIuMTUlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uYXMtNSB7XHJcbiAgd2lkdGg6IDQ4Ljc1JTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLy8gRXh0cmEgc21hbGwgZGV2aWNlcyAocG9ydHJhaXQgcGhvbmVzLCBsZXNzIHRoYW4gNTc2cHgpXHJcbi8vIE5vIG1lZGlhIHF1ZXJ5IGZvciBgeHNgIHNpbmNlIHRoaXMgaXMgdGhlIGRlZmF1bHQgaW4gQm9vdHN0cmFwXHJcblxyXG4vLyBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5hcy0xIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYXMtMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmFzLTMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5hcy00IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYXMtNSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG59XHJcblxyXG4vLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/comp/grid/grid.component.ts":
/*!*********************************************!*\
  !*** ./src/app/comp/grid/grid.component.ts ***!
  \*********************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/comp/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/comp/grid/grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\manomuth\Desktop\WorkFromHere\StartHere\application-workHere\aspi-css\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map