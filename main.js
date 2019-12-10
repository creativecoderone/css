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

module.exports = "<nav class=\"as-nav\">\n  <a href=\"#alert\" class=\"as-badge as-alert-primary\">Alert</a>\n  <a href=\"#align\" class=\"as-badge as-alert-primary\">Align</a>\n  <a href=\"#grids\" class=\"as-badge as-alert-primary\">Grid</a>\n  <a href=\"#badge\" class=\"as-badge as-alert-primary\">Badge</a>\n  <a href=\"#button\" class=\"as-badge as-alert-primary\">Buttons</a>\n  <a href=\"#cards\" class=\"as-badge as-alert-primary\">Cards</a>\n  <!--<a href=\"#drops\" class=\"as-badge as-alert-primary\">Dropdown</a>-->\n  <a href=\"#list\" class=\"as-badge as-alert-primary\">List</a>\n  <a href=\"#forms\" class=\"as-badge as-alert-primary\">Forms</a>\n</nav>\n<div class=\"container\">\n\n  <app-alert></app-alert>\n\n  <app-align></app-align>\n  <app-badge></app-badge>\n  <app-buttons></app-buttons>\n  <app-card></app-card>\n  <app-grid></app-grid>\n  <!--<app-dropdown></app-dropdown>-->\n  <app-list></app-list>\n  <app-forms></app-forms>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-badge {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  margin: 5px;\n  padding: 4px;\n  font-size: 12px;\n  display: inline-block;\n  border-radius: 5px;\n  border: 1px solid white;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  width: auto; }\n\n.as-alert-primary {\n  border: 1px solid #00b0ff;\n  border-right: 8px solid #00b0ff; }\n\n.as-nav {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  height: auto;\n  margin: 5px;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFxhc3BpLWNzcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixzQkFBcUI7RUFDckIsb0RBQTJDO0VBQTNDLDRDQUEyQztFQUUzQyxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSwwQkExQmtCO0VBMkJsQixnQ0EzQmtCLEVBNEJuQjs7QUFDRDtFQUNFLHlCQUFnQjtFQUFoQixpQkFBZ0I7RUFDaEIsT0FBTTtFQUNOLFFBQU87RUFDUCxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixZQUFXO0VBQ1gsd0JBQXVCLEVBRXhCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFzLWJhc2U6ICMwMDAwMDA7XHJcbiRhcy1wcmltYXJ5OiAjMDBiMGZmO1xyXG4kYXMtZGFuZ2VyOiAjZDUwMDAwO1xyXG4kYXMtc3VjY2VzczogI2FlZWEwMDtcclxuJGFzLWluZm86ICNiM2U1ZmM7XHJcbiRhcy13YXJuaW5nOiAjZmZhYjAwO1xyXG4kYXMtbGlnaHQ6ICNlMGUwZTA7XHJcbiRhcy1kYXJrOiAjNzg5MDljO1xyXG4kYXMtd2lubmVyOiAjMGQ0N2ExO1xyXG4kYXMtaGFwcHk6ICNkODFiNjA7XHJcblxyXG4uYXMtYmFkZ2Uge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcclxuICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuLmFzLWFsZXJ0LXByaW1hcnkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG59XHJcbi5hcy1uYXYge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuIl19 */"

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
/* harmony import */ var _comp_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comp/card/card.component */ "./src/app/comp/card/card.component.ts");
/* harmony import */ var _comp_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comp/buttons/buttons.component */ "./src/app/comp/buttons/buttons.component.ts");
/* harmony import */ var _comp_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comp/dropdown/dropdown.component */ "./src/app/comp/dropdown/dropdown.component.ts");
/* harmony import */ var _comp_list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comp/list/list.component */ "./src/app/comp/list/list.component.ts");
/* harmony import */ var _comp_forms_forms_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comp/forms/forms.component */ "./src/app/comp/forms/forms.component.ts");














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
                _comp_align_align_component__WEBPACK_IMPORTED_MODULE_8__["AlignComponent"],
                _comp_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
                _comp_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__["ButtonsComponent"],
                _comp_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_11__["DropdownComponent"],
                _comp_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"],
                _comp_forms_forms_component__WEBPACK_IMPORTED_MODULE_13__["FormsComponent"]
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

module.exports = "<h2 id=\"alert\">Alert</h2>\n<p>Alert messaging (or alert notification) is machine-to-person communication that is important or time sensitive. An alert\n  may be a calendar reminder or a notification of a new message. ... Alerting makes it possible for people to keep up with\n  the information that matters most to them.</p>\n\n<p>Conveying meaning to assistive technologies Using color to add meaning only provides a visual indication, which will not\n  be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is\n  either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional\n  text hidden with the .sr-only class.</p>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <h2>Alerts</h2>\n    <i>.as-alert .as-alert-</i> color\n    <div class=\"alert\">\n      <div class=\"as-alert as-alert-base\">Alert base</div>\n      <div class=\"as-alert as-alert-primary\">Alert primary</div>\n      <div class=\"as-alert as-alert-danger\">Alert danger</div>\n      <div class=\"as-alert as-alert-success\">Alert success</div>\n      <div class=\"as-alert as-alert-info\">Alert info</div>\n      <div class=\"as-alert as-alert-warning\">Alert warning</div>\n      <div class=\"as-alert as-alert-light\">Alert light</div>\n      <div class=\"as-alert as-alert-winner\">Alert winner</div>\n      <div class=\"as-alert as-alert-happy\">Alert happy</div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <h2>Alert Hover effects</h2>\n    <i>.as-alert-hover-</i> color\n    <div class=\"alert\">\n      <div class=\"as-alert as-alert-hover-base as-alert-base\">Alert base</div>\n      <div class=\"as-alert as-alert-hover-primary as-alert-primary\">Alert primary</div>\n      <div class=\"as-alert as-alert-hover-danger as-alert-danger\">Alert danger</div>\n      <div class=\"as-alert as-alert-hover-success as-alert-success\">Alert success</div>\n      <div class=\"as-alert as-alert-hover-info as-alert-info\">Alert info</div>\n      <div class=\"as-alert as-alert-hover-warning as-alert-warning\">Alert warning</div>\n      <div class=\"as-alert as-alert-hover-light as-alert-light\">Alert light</div>\n      <div class=\"as-alert as-alert-hover-winner as-alert-winner\">Alert winner</div>\n      <div class=\"as-alert as-alert-hover-happy as-alert-happy\">Alert happy</div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <h2>Alert Background color</h2>\n    <i>.as-bg-</i> color\n    <div class=\"alert\">\n      <div class=\"as-alert as-bg-base\">Alert base</div>\n      <div class=\"as-alert as-bg-primary\">Alert primary</div>\n      <div class=\"as-alert as-bg-danger\">Alert danger</div>\n      <div class=\"as-alert as-bg-success\">Alert success</div>\n      <div class=\"as-alert as-bg-info\">Alert info</div>\n      <div class=\"as-alert as-bg-warning\">Alert warning</div>\n      <div class=\"as-alert as-bg-light\">Alert light</div>\n      <div class=\"as-alert as-bg-winner\">Alert winner</div>\n      <div class=\"as-alert as-bg-happy\">Alert happy</div>\n    </div>\n  </div>\n</div>\n<br>\n "

/***/ }),

/***/ "./src/app/comp/alert/alert.component.scss":
/*!*************************************************!*\
  !*** ./src/app/comp/alert/alert.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-alert {\n  padding: 15px;\n  border-radius: 5px;\n  margin: 5px;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out; }\n\n.as-alert-base {\n  border: 1px solid #000000;\n  border-right: 8px solid #000000; }\n\n.as-alert-primary {\n  border: 1px solid #00b0ff;\n  border-right: 8px solid #00b0ff; }\n\n.as-alert-danger {\n  border: 1px solid #d50000;\n  border-right: 8px solid #d50000; }\n\n.as-alert-success {\n  border: 1px solid #aeea00;\n  border-right: 8px solid #aeea00; }\n\n.as-alert-info {\n  border: 1px solid #b3e5fc;\n  border-right: 8px solid #b3e5fc; }\n\n.as-alert-warning {\n  border: 1px solid #ffab00;\n  border-right: 8px solid #ffab00; }\n\n.as-alert-light {\n  border: 1px solid #e0e0e0;\n  border-right: 8px solid #e0e0e0; }\n\n.as-alert-dark {\n  border: 1px solid #78909c;\n  border-right: 8px solid #78909c; }\n\n.as-alert-winner {\n  border: 1px solid #0d47a1;\n  border-right: 8px solid #0d47a1; }\n\n.as-alert-happy {\n  border: 1px solid #d81b60;\n  border-right: 8px solid #d81b60; }\n\n.as-alert-hover-base:hover {\n  background-color: #000000;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-primary:hover {\n  background-color: #00b0ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-danger:hover {\n  background-color: #d50000;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-success:hover {\n  background-color: #aeea00;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-info:hover {\n  background-color: #b3e5fc;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-warning:hover {\n  background-color: #ffab00;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-light:hover {\n  background-color: #e0e0e0;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-dark:hover {\n  background-color: #78909c;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-winner:hover {\n  background-color: #0d47a1;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-happy:hover {\n  background-color: #d81b60;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #00b0ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #d50000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #aeea00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b3e5fc;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffab00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #78909c;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-4 {\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center; }\n\n.as-4:hover {\n  box-shadow: 0px 0px 6px 6px gainsboro; }\n\n.as-right-cornor {\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9hbGVydC9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxjb21wXFxhbGVydFxcYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxvREFBMkM7RUFBM0MsNENBQTJDLEVBQzVDOztBQUVEO0VBQ0UsMEJBbkJlO0VBb0JmLGdDQXBCZSxFQXFCaEI7O0FBQ0Q7RUFDRSwwQkF0QmtCO0VBdUJsQixnQ0F2QmtCLEVBd0JuQjs7QUFDRDtFQUNFLDBCQXpCaUI7RUEwQmpCLGdDQTFCaUIsRUEyQmxCOztBQUNEO0VBQ0UsMEJBNUJrQjtFQTZCbEIsZ0NBN0JrQixFQThCbkI7O0FBQ0Q7RUFDRSwwQkEvQmU7RUFnQ2YsZ0NBaENlLEVBaUNoQjs7QUFDRDtFQUNFLDBCQWxDa0I7RUFtQ2xCLGdDQW5Da0IsRUFvQ25COztBQUNEO0VBQ0UsMEJBckNnQjtFQXNDaEIsZ0NBdENnQixFQXVDakI7O0FBQ0Q7RUFDRSwwQkF4Q2U7RUF5Q2YsZ0NBekNlLEVBMENoQjs7QUFDRDtFQUNFLDBCQTNDaUI7RUE0Q2pCLGdDQTVDaUIsRUE2Q2xCOztBQUNEO0VBQ0UsMEJBOUNnQjtFQStDaEIsZ0NBL0NnQixFQWdEakI7O0FBRUQ7RUFDRSwwQkE1RGU7RUE2RGYsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0UsMEJBbEVrQjtFQW1FbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0UsMEJBeEVpQjtFQXlFakIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0UsMEJBOUVrQjtFQStFbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0UsMEJBcEZlO0VBcUZmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLDBCQTFGa0I7RUEyRmxCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLDBCQWhHZ0I7RUFpR2hCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLDBCQXRHZTtFQXVHZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0MsRUFDckM7O0FBQ0Q7RUFDRSwwQkEzR2lCO0VBNEdqQixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0MsRUFDckM7O0FBQ0Q7RUFDRSwwQkFoSGdCO0VBaUhoQixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0MsRUFDckM7O0FBRUQ7RUFDRSwwQkFoSWU7RUFpSWYsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXJJZTtFQXNJZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBeklrQjtFQTBJbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTdJaUI7RUE4SWpCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFqSmtCO0VBa0psQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBckplO0VBc0pmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF6SmtCO0VBMEpsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBN0pnQjtFQThKaEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWpLZTtFQWtLZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBcktpQjtFQXNLakIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWxMZTtFQW1MZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0Usc0NBQXFDLEVBQ3RDOztBQUNEO0VBQ0Usb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcC9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcy1iYXNlOiAjMDAwMDAwO1xyXG4kYXMtcHJpbWFyeTogIzAwYjBmZjtcclxuJGFzLWRhbmdlcjogI2Q1MDAwMDtcclxuJGFzLXN1Y2Nlc3M6ICNhZWVhMDA7XHJcbiRhcy1pbmZvOiAjYjNlNWZjO1xyXG4kYXMtd2FybmluZzogI2ZmYWIwMDtcclxuJGFzLWxpZ2h0OiAjZTBlMGUwO1xyXG4kYXMtZGFyazogIzc4OTA5YztcclxuJGFzLXdpbm5lcjogIzBkNDdhMTtcclxuJGFzLWhhcHB5OiAjZDgxYjYwO1xyXG5cclxuLmFzLWFsZXJ0IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDVweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYXMtYWxlcnQtYmFzZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWJhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJGFzLWJhc2U7XHJcbn1cclxuLmFzLWFsZXJ0LXByaW1hcnkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG59XHJcbi5hcy1hbGVydC1kYW5nZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1kYW5nZXI7XHJcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJGFzLWRhbmdlcjtcclxufVxyXG4uYXMtYWxlcnQtc3VjY2VzcyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbn1cclxuLmFzLWFsZXJ0LWluZm8ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1pbmZvO1xyXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkICRhcy1pbmZvO1xyXG59XHJcbi5hcy1hbGVydC13YXJuaW5nIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtd2FybmluZztcclxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAkYXMtd2FybmluZztcclxufVxyXG4uYXMtYWxlcnQtbGlnaHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1saWdodDtcclxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAkYXMtbGlnaHQ7XHJcbn1cclxuLmFzLWFsZXJ0LWRhcmsge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1kYXJrO1xyXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkICRhcy1kYXJrO1xyXG59XHJcbi5hcy1hbGVydC13aW5uZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy13aW5uZXI7XHJcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJGFzLXdpbm5lcjtcclxufVxyXG4uYXMtYWxlcnQtaGFwcHkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1oYXBweTtcclxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSG92ZXJcclxuLmFzLWFsZXJ0LWhvdmVyLWJhc2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5hcy1hbGVydC1ob3Zlci1wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtcHJpbWFyeTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG59XHJcblxyXG4uYXMtYWxlcnQtaG92ZXItZGFuZ2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFuZ2VyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5hcy1hbGVydC1ob3Zlci1zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG59XHJcblxyXG4uYXMtYWxlcnQtaG92ZXItaW5mbzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWluZm87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxufVxyXG5cclxuLmFzLWFsZXJ0LWhvdmVyLXdhcm5pbmc6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13YXJuaW5nO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5hcy1hbGVydC1ob3Zlci1saWdodDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5hcy1hbGVydC1ob3Zlci1kYXJrOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFyaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG59XHJcbi5hcy1hbGVydC1ob3Zlci13aW5uZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxufVxyXG4uYXMtYWxlcnQtaG92ZXItaGFwcHk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG59XHJcblxyXG4uYXMtYmctYmFzZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWJhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctYmFzZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWJhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXByaW1hcnk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFuZ2VyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1zdWNjZXNzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1pbmZvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXdhcm5pbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13YXJuaW5nO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtbGlnaHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhcms7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctd2lubmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2lubmVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWhhcHB5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy00IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcy00OmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCA2cHggZ2FpbnNib3JvO1xyXG59XHJcbi5hcy1yaWdodC1jb3Jub3Ige1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuIl19 */"

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

module.exports = "<h2 id=\"badge\">Badge</h2>\n<p>Badges can notify you that there are new or unread messages or notifications. Add the new class to the badge to give it the\n  background.\n</p>\n<p>The CSS :hover selector is one of many pseudo-classes that are used to style elements. The :hover selector is used to select\n  elements when you mouse over them. ... When a user hovers over the button with their mouse the rule with the :hover selector\n  will become active and the button's style will change.</p>\n<p>The background-color property sets the background color of an element. The background of an element is the total size of\n  the element, including padding and border (but not the margin). Tip: Use a background color and a text color that makes\n  the text easy to read. Default value: transparent.</p>\n<p>Rounded badges (with a larger border-radius and additional horizontal padding)</p>\n\n<div class=\"row\">\n  <div class=\"as-3\">\n    <h2>Badge </h2>\n    <i>.as-badge, .as-badge-</i> color\n    <div class=\"\">\n      <span class=\"as-badge as-badge-base\">Badge base</span>\n      <span class=\"as-badge as-badge-primary\">Badge primary</span>\n      <span class=\"as-badge as-badge-danger\">Badge danger</span>\n      <span class=\"as-badge as-badge-success\">Badge success</span>\n      <span class=\"as-badge as-badge-info\">Badge info</span>\n      <span class=\"as-badge as-badge-warning\">Badge warning</span>\n      <span class=\"as-badge as-badge-light\">Badge light</span>\n      <span class=\"as-badge as-badge-winner\">Badge winner</span>\n      <span class=\"as-badge as-badge-happy\">Badge happy</span>\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <h2>Badge Hover effects</h2>\n    <i>.as-bg-</i> color\n    <div class=\" \">\n      <span class=\"as-badge as-badge-hover-base as-badge-base\">Badge base</span>\n      <span class=\"as-badge as-badge-hover-primary as-badge-primary\">Badge primary</span>\n      <span class=\"as-badge as-badge-hover-danger as-badge-danger\">Badge danger</span>\n      <span class=\"as-badge as-badge-hover-success as-badge-success\">Badge success</span>\n      <span class=\"as-badge as-badge-hover-info as-badge-info\">Badge info</span>\n      <span class=\"as-badge as-badge-hover-warning as-badge-warning\">Badge warning</span>\n      <span class=\"as-badge as-badge-hover-light as-badge-light\">Badge light</span>\n      <span class=\"as-badge as-badge-hover-winner as-badge-winner\">Badge winner</span>\n      <span class=\"as-badge as-badge-hover-happy as-badge-happy\">Badge happy</span>\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <h2>Background color</h2>\n    <i>.as-badge-hover-</i> color\n    <div class=\"\">\n      <span class=\"as-badge as-bg-base \">Badge base</span>\n      <span class=\"as-badge as-bg-primary\">Badge primary</span>\n      <span class=\"as-badge as-bg-danger\">Badge danger</span>\n      <span class=\"as-badge as-bg-success\">Badge success</span>\n      <span class=\"as-badge as-bg-info\">Badge info</span>\n      <span class=\"as-badge as-bg-warning\">Badge warning</span>\n      <span class=\"as-badge as-bg-light\">Badge light</span>\n      <span class=\"as-badge as-bg-winner\">Badge winner</span>\n      <span class=\"as-badge as-bg-happy\">Badge happy</span>\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <h2>Badge circle color</h2>\n    <i>.as-circle-sm </i>\n    <div class=\" \">\n      <span class=\"as-badge as-circle-sm as-bg-base \">Badge base</span>\n      <span class=\"as-badge as-circle-sm as-bg-primary\">Badge primary</span>\n      <span class=\"as-badge as-circle-sm as-bg-danger\">Badge danger</span>\n      <span class=\"as-badge as-circle-sm as-bg-success\">Badge success</span>\n      <span class=\"as-badge as-circle-sm as-bg-info\">Badge info</span>\n      <span class=\"as-badge as-circle-sm as-bg-warning\">Badge warning</span>\n      <span class=\"as-badge as-circle-sm as-bg-light\">Badge light</span>\n      <span class=\"as-badge as-circle-sm as-bg-winner\">Badge winner</span>\n      <span class=\"as-badge as-circle-sm as-bg-happy\">Badge happy</span>\n    </div>\n  </div>\n</div>\n \n"

/***/ }),

/***/ "./src/app/comp/badge/badge.component.scss":
/*!*************************************************!*\
  !*** ./src/app/comp/badge/badge.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-badge {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  margin: 5px;\n  padding: 4px;\n  font-size: 12px;\n  display: inline-block;\n  border-radius: 5px;\n  border: 1px solid white;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  width: auto; }\n\n.as-badge-base {\n  border: 1px solid #000000;\n  border-right: 3px solid #000000; }\n\n.as-badge-primary {\n  border: 1px solid #00b0ff;\n  border-right: 3px solid #00b0ff; }\n\n.as-badge-danger {\n  border: 1px solid #d50000;\n  border-right: 3px solid #d50000; }\n\n.as-badge-success {\n  border: 1px solid #aeea00;\n  border-right: 3px solid #aeea00; }\n\n.as-badge-info {\n  border: 1px solid #b3e5fc;\n  border-right: 3px solid #b3e5fc; }\n\n.as-badge-warning {\n  border: 1px solid #ffab00;\n  border-right: 3px solid #ffab00; }\n\n.as-badge-light {\n  border: 1px solid #e0e0e0;\n  border-right: 3px solid #e0e0e0; }\n\n.as-badge-dark {\n  border: 1px solid #78909c;\n  border-right: 3px solid #78909c; }\n\n.as-badge-winner {\n  border: 1px solid #0d47a1;\n  border-right: 3px solid #0d47a1; }\n\n.as-badge-happy {\n  border: 1px solid #d81b60;\n  border-right: 3px solid #d81b60; }\n\n.as-badge-hover-base:hover {\n  background-color: #000000;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #000000; }\n\n.as-badge-hover-primary:hover {\n  background-color: #00b0ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #00b0ff; }\n\n.as-badge-hover-danger:hover {\n  background-color: #d50000;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #d50000; }\n\n.as-badge-hover-success:hover {\n  background-color: #aeea00;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #aeea00; }\n\n.as-badge-hover-info:hover {\n  background-color: #b3e5fc;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #b3e5fc; }\n\n.as-badge-hover-warning:hover {\n  background-color: #ffab00;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ffab00; }\n\n.as-badge-hover-light:hover {\n  background-color: #e0e0e0;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #e0e0e0; }\n\n.as-badge-hover-dark:hover {\n  background-color: #78909c;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #78909c; }\n\n.as-badge-hover-winner:hover {\n  background-color: #0d47a1;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #0d47a1; }\n\n.as-badge-hover-happy:hover {\n  background-color: #d81b60;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #d81b60; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #00b0ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #d50000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #aeea00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b3e5fc;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffab00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #78909c;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #d81b60;\n  color: white;\n  border-radius: 4px; }\n\n.as-circle-sm {\n  border-radius: 15px;\n  padding: 5px; }\n\n.as-3 {\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center; }\n\n.as-3:hover {\n  box-shadow: 0px 0px 6px 6px gainsboro; }\n\n.as-text-center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9iYWRnZS9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxjb21wXFxiYWRnZVxcYmFkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLHNCQUFxQjtFQUNyQixvREFBMkM7RUFBM0MsNENBQTJDO0VBRTNDLFlBQVcsRUFDWjs7QUFFRDtFQUNFLDBCQTVCZTtFQTZCZixnQ0E3QmUsRUE4QmhCOztBQUNEO0VBQ0UsMEJBL0JrQjtFQWdDbEIsZ0NBaENrQixFQWlDbkI7O0FBQ0Q7RUFDRSwwQkFsQ2lCO0VBbUNqQixnQ0FuQ2lCLEVBb0NsQjs7QUFDRDtFQUNFLDBCQXJDa0I7RUFzQ2xCLGdDQXRDa0IsRUF1Q25COztBQUNEO0VBQ0UsMEJBeENlO0VBeUNmLGdDQXpDZSxFQTBDaEI7O0FBQ0Q7RUFDRSwwQkEzQ2tCO0VBNENsQixnQ0E1Q2tCLEVBNkNuQjs7QUFDRDtFQUNFLDBCQTlDZ0I7RUErQ2hCLGdDQS9DZ0IsRUFnRGpCOztBQUNEO0VBQ0UsMEJBakRlO0VBa0RmLGdDQWxEZSxFQW1EaEI7O0FBQ0Q7RUFDRSwwQkFwRGlCO0VBcURqQixnQ0FyRGlCLEVBc0RsQjs7QUFDRDtFQUNFLDBCQXZEZ0I7RUF3RGhCLGdDQXhEZ0IsRUF5RGpCOztBQUVEO0VBQ0UsMEJBckVlO0VBc0VmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0F6RWUsRUEwRWhCOztBQUVEO0VBQ0UsMEJBNUVrQjtFQTZFbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQWhGa0IsRUFpRm5COztBQUVEO0VBQ0UsMEJBbkZpQjtFQW9GakIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQXZGaUIsRUF3RmxCOztBQUVEO0VBQ0UsMEJBMUZrQjtFQTJGbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQTlGa0IsRUErRm5COztBQUVEO0VBQ0UsMEJBakdlO0VBa0dmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FyR2UsRUFzR2hCOztBQUVEO0VBQ0UsMEJBeEdrQjtFQXlHbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQTVHa0IsRUE2R25COztBQUVEO0VBQ0UsMEJBL0dnQjtFQWdIaEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQW5IZ0IsRUFvSGpCOztBQUVEO0VBQ0UsMEJBdEhlO0VBdUhmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0ExSGUsRUEySGhCOztBQUNEO0VBQ0UsMEJBNUhpQjtFQTZIakIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQWhJaUIsRUFpSWxCOztBQUNEO0VBQ0UsMEJBbElnQjtFQW1JaEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQXRJZ0IsRUF1SWpCOztBQUdEO0VBQ0UsMEJBcEplO0VBcUpmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF6SmU7RUEwSmYsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTdKa0I7RUE4SmxCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFqS2lCO0VBa0tqQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBcktrQjtFQXNLbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXpLZTtFQTBLZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBN0trQjtFQThLbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWpMZ0I7RUFrTGhCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFyTGU7RUFzTGYsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXpMaUI7RUEwTGpCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkE3TGdCO0VBOExoQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0Usb0JBQW1CO0VBQ25CLGFBQVksRUFDYjs7QUFDRDtFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLHNDQUFxQyxFQUN0Qzs7QUFDRDtFQUNFLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvYmFkZ2UvYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXMtYmFzZTogIzAwMDAwMDtcclxuJGFzLXByaW1hcnk6ICMwMGIwZmY7XHJcbiRhcy1kYW5nZXI6ICNkNTAwMDA7XHJcbiRhcy1zdWNjZXNzOiAjYWVlYTAwO1xyXG4kYXMtaW5mbzogI2IzZTVmYztcclxuJGFzLXdhcm5pbmc6ICNmZmFiMDA7XHJcbiRhcy1saWdodDogI2UwZTBlMDtcclxuJGFzLWRhcms6ICM3ODkwOWM7XHJcbiRhcy13aW5uZXI6ICMwZDQ3YTE7XHJcbiRhcy1oYXBweTogI2Q4MWI2MDtcclxuXHJcbi5hcy1iYWRnZSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0O1xyXG4gIC8vICAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmFzLWJhZGdlLWJhc2Uge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1iYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1iYXNlO1xyXG59XHJcbi5hcy1iYWRnZS1wcmltYXJ5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtcHJpbWFyeTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtcHJpbWFyeTtcclxufVxyXG4uYXMtYmFkZ2UtZGFuZ2VyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtZGFuZ2VyO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1kYW5nZXI7XHJcbn1cclxuLmFzLWJhZGdlLXN1Y2Nlc3Mge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG59XHJcbi5hcy1iYWRnZS1pbmZvIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtaW5mbztcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtaW5mbztcclxufVxyXG4uYXMtYmFkZ2Utd2FybmluZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbn1cclxuLmFzLWJhZGdlLWxpZ2h0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtbGlnaHQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWxpZ2h0O1xyXG59XHJcbi5hcy1iYWRnZS1kYXJrIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtZGFyaztcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtZGFyaztcclxufVxyXG4uYXMtYmFkZ2Utd2lubmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtd2lubmVyO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy13aW5uZXI7XHJcbn1cclxuLmFzLWJhZGdlLWhhcHB5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtaGFwcHk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWhhcHB5O1xyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhvdmVyXHJcbi5hcy1iYWRnZS1ob3Zlci1iYXNlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1iYXNlO1xyXG59XHJcblxyXG4uYXMtYmFkZ2UtaG92ZXItcHJpbWFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXByaW1hcnk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtcHJpbWFyeTtcclxufVxyXG5cclxuLmFzLWJhZGdlLWhvdmVyLWRhbmdlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhbmdlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1kYW5nZXI7XHJcbn1cclxuXHJcbi5hcy1iYWRnZS1ob3Zlci1zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG59XHJcblxyXG4uYXMtYmFkZ2UtaG92ZXItaW5mbzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWluZm87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtaW5mbztcclxufVxyXG5cclxuLmFzLWJhZGdlLWhvdmVyLXdhcm5pbmc6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13YXJuaW5nO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbn1cclxuXHJcbi5hcy1iYWRnZS1ob3Zlci1saWdodDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWxpZ2h0O1xyXG59XHJcblxyXG4uYXMtYmFkZ2UtaG92ZXItZGFyazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhcms7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtZGFyaztcclxufVxyXG4uYXMtYmFkZ2UtaG92ZXItd2lubmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2lubmVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXdpbm5lcjtcclxufVxyXG4uYXMtYmFkZ2UtaG92ZXItaGFwcHk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1oYXBweTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jb2xvclxyXG5cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhbmdlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaW5mbztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2FybmluZztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYXJrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXdpbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdpbm5lcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1oYXBweSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWhhcHB5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWNpcmNsZS1zbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmFzLTMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFzLTM6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDZweCBnYWluc2Jvcm87XHJcbn1cclxuLmFzLXRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

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

/***/ "./src/app/comp/buttons/buttons.component.html":
/*!*****************************************************!*\
  !*** ./src/app/comp/buttons/buttons.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"button\">Buttons</h2>\n<p>In computing, the term button refers to any graphical control element that provides the user a simple way to trigger an event,\n  like searching for a query at a search engine, or to interact with dialog boxes, like confirming an action.</p>\n<div class=\"row\">\n  <div class=\"as-3\">\n    <h2>Button</h2>\n    <i>as-btn as-btn-border-</i>color\n    <button class=\"as-btn as-btn-border-base\">Base</button>\n    <button class=\"as-btn as-btn-border-primary\">primary</button>\n    <button class=\"as-btn as-btn-border-danger\">danger</button>\n    <button class=\"as-btn as-btn-border-success\">success</button>\n    <button class=\"as-btn as-btn-border-info\">info</button>\n    <button class=\"as-btn as-btn-border-warning\">warning</button>\n    <button class=\"as-btn as-btn-border-light\">light</button>\n    <button class=\"as-btn as-btn-border-dark\">dark</button>\n    <button class=\"as-btn as-btn-border-winner\">winner</button>\n    <button class=\"as-btn as-btn-border-happy\">happy</button>\n  </div>\n  <div class=\"as-3\">\n    <h2>Button Hover effects</h2>\n    <i>as-btn as-btn-border-</i>color <i>as-btn-hover-</i>color <br>\n    <button class=\"as-btn as-btn-border-base as-btn-hover-base\">Base</button>\n    <button class=\"as-btn as-btn-border-primary as-btn-hover-primary\">primary</button>\n    <button class=\"as-btn as-btn-border-danger as-btn-hover-danger\">danger</button>\n    <button class=\"as-btn as-btn-border-success as-btn-hover-success\">success</button>\n    <button class=\"as-btn as-btn-border-info as-btn-hover-info\">info</button>\n    <button class=\"as-btn as-btn-border-warning as-btn-hover-warning\">warning</button>\n    <button class=\"as-btn as-btn-border-light as-btn-hover-light\">light</button>\n    <button class=\"as-btn as-btn-border-dark as-btn-hover-dark\">dark</button>\n    <button class=\"as-btn as-btn-border-winner as-btn-hover-winner\">winner</button>\n    <button class=\"as-btn as-btn-border-happy as-btn-hover-happy\">happy</button>\n  </div>\n  <div class=\"as-3\">\n    <h2>Background color</h2>\n    <i>as-btn as-bg-</i>color <br>\n    <button class=\"as-btn as-bg-base\">Base</button>\n    <button class=\"as-btn as-bg-primary\">primary</button>\n    <button class=\"as-btn as-bg-danger\">danger</button>\n    <button class=\"as-btn as-bg-success\">success</button>\n    <button class=\"as-btn as-bg-info\">info</button>\n    <button class=\"as-btn as-bg-warning\">warning</button>\n    <button class=\"as-btn as-bg-light\">light</button>\n    <button class=\"as-btn as-bg-dark\">dark</button>\n    <button class=\"as-btn as-bg-winner\">winner</button>\n    <button class=\"as-btn as-bg-happy\">happy</button>\n  </div>\n  <div class=\"as-3\">\n    <h2>Button circle cornor</h2>\n    <i>as-btn as-bg-</i>color <br>\n    <button class=\"as-btn as-bg-base as-circle-sm\">Base</button>\n    <button class=\"as-btn as-bg-primary as-circle-sm\">primary</button>\n    <button class=\"as-btn as-bg-danger as-circle-sm\">danger</button>\n    <button class=\"as-btn as-bg-success as-circle-sm\">success</button>\n    <button class=\"as-btn as-bg-info as-circle-sm\">info</button>\n    <button class=\"as-btn as-bg-warning as-circle-sm\">warning</button>\n    <button class=\"as-btn as-bg-light as-circle-sm\">light</button>\n    <button class=\"as-btn as-bg-dark as-circle-sm\">dark</button>\n    <button class=\"as-btn as-bg-winner as-circle-sm\">winner</button>\n    <button class=\"as-btn as-bg-happy as-circle-sm\">happy</button></div>\n</div>\n<div class=\" \">\n  <div class=\"as-align-center\">\n    <button class=\"as-btn as-bg-primary as-btn-sm as-btn-blk\">Small</button>\n    <button class=\"as-btn as-bg-primary as-btn-md as-btn-blk\">Medium</button>\n    <button class=\"as-btn as-bg-primary as-btn-lg as-btn-blk\">Large</button>\n    <button class=\"as-btn as-bg-primary as-btn-blk\">Full width Block</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/buttons/buttons.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/comp/buttons/buttons.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-btn {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  margin: 5px;\n  padding: 4px;\n  font-size: 14px;\n  display: inline-block;\n  border-radius: 5px;\n  border: 1px solid white;\n  background-color: white;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  width: auto; }\n\n.as-btn-border-base {\n  border: 1px solid #000000;\n  border-right: 3px solid #000000; }\n\n.as-btn-border-primary {\n  border: 1px solid #00b0ff;\n  border-right: 3px solid #00b0ff; }\n\n.as-btn-border-danger {\n  border: 1px solid #d50000;\n  border-right: 3px solid #d50000; }\n\n.as-btn-border-success {\n  border: 1px solid #aeea00;\n  border-right: 3px solid #aeea00; }\n\n.as-btn-border-info {\n  border: 1px solid #b3e5fc;\n  border-right: 3px solid #b3e5fc; }\n\n.as-btn-border-warning {\n  border: 1px solid #ffab00;\n  border-right: 3px solid #ffab00; }\n\n.as-btn-border-light {\n  border: 1px solid #e0e0e0;\n  border-right: 3px solid #e0e0e0; }\n\n.as-btn-border-dark {\n  border: 1px solid #78909c;\n  border-right: 3px solid #78909c; }\n\n.as-btn-border-winner {\n  border: 1px solid #0d47a1;\n  border-right: 3px solid #0d47a1; }\n\n.as-btn-border-happy {\n  border: 1px solid #d81b60;\n  border-right: 3px solid #d81b60; }\n\n.as-btn-hover-base:hover {\n  background-color: #000000;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #000000; }\n\n.as-btn-hover-primary:hover {\n  background-color: #00b0ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #00b0ff; }\n\n.as-btn-hover-danger:hover {\n  background-color: #d50000;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #d50000; }\n\n.as-btn-hover-success:hover {\n  background-color: #aeea00;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #aeea00; }\n\n.as-btn-hover-info:hover {\n  background-color: #b3e5fc;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #b3e5fc; }\n\n.as-btn-hover-warning:hover {\n  background-color: #ffab00;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ffab00; }\n\n.as-btn-hover-light:hover {\n  background-color: #e0e0e0;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #e0e0e0; }\n\n.as-btn-hover-dark:hover {\n  background-color: #78909c;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #78909c; }\n\n.as-btn-hover-winner:hover {\n  background-color: #0d47a1;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #0d47a1; }\n\n.as-btn-hover-happy:hover {\n  background-color: #d81b60;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #d81b60; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #00b0ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #d50000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #aeea00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b3e5fc;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffab00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #78909c;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #d81b60;\n  color: white;\n  border-radius: 4px; }\n\n.as-circle-sm {\n  border-radius: 15px;\n  padding: 5px; }\n\n.as-3 {\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center; }\n\n.as-3:hover {\n  box-shadow: 0px 0px 6px 6px gainsboro; }\n\n.as-text-center {\n  text-align: center; }\n\n.as-align-center {\n  margin: 0;\n  text-align: center;\n  display: block; }\n\n.as-4 {\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center; }\n\n.as-4:hover {\n  box-shadow: 0px 0px 6px 6px gainsboro; }\n\n.as-btn-sm {\n  padding: 5px; }\n\n.as-btn-md {\n  padding: 10px; }\n\n.as-btn-lg {\n  padding: 15px; }\n\n.as-btn-blk {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9idXR0b25zL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcYXNwaS1jc3Mvc3JjXFxhcHBcXGNvbXBcXGJ1dHRvbnNcXGJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLHdCQUF1QjtFQUN2QixzQkFBcUI7RUFDckIsb0RBQTJDO0VBQTNDLDRDQUEyQztFQUUzQyxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSwwQkE3QmU7RUE4QmYsZ0NBOUJlLEVBK0JoQjs7QUFDRDtFQUNFLDBCQWhDa0I7RUFpQ2xCLGdDQWpDa0IsRUFrQ25COztBQUNEO0VBQ0UsMEJBbkNpQjtFQW9DakIsZ0NBcENpQixFQXFDbEI7O0FBQ0Q7RUFDRSwwQkF0Q2tCO0VBdUNsQixnQ0F2Q2tCLEVBd0NuQjs7QUFDRDtFQUNFLDBCQXpDZTtFQTBDZixnQ0ExQ2UsRUEyQ2hCOztBQUNEO0VBQ0UsMEJBNUNrQjtFQTZDbEIsZ0NBN0NrQixFQThDbkI7O0FBQ0Q7RUFDRSwwQkEvQ2dCO0VBZ0RoQixnQ0FoRGdCLEVBaURqQjs7QUFDRDtFQUNFLDBCQWxEZTtFQW1EZixnQ0FuRGUsRUFvRGhCOztBQUNEO0VBQ0UsMEJBckRpQjtFQXNEakIsZ0NBdERpQixFQXVEbEI7O0FBQ0Q7RUFDRSwwQkF4RGdCO0VBeURoQixnQ0F6RGdCLEVBMERqQjs7QUFFRDtFQUNFLDBCQXRFZTtFQXVFZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBMUVlLEVBMkVoQjs7QUFFRDtFQUNFLDBCQTdFa0I7RUE4RWxCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FqRmtCLEVBa0ZuQjs7QUFFRDtFQUNFLDBCQXBGaUI7RUFxRmpCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0F4RmlCLEVBeUZsQjs7QUFFRDtFQUNFLDBCQTNGa0I7RUE0RmxCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0EvRmtCLEVBZ0duQjs7QUFFRDtFQUNFLDBCQWxHZTtFQW1HZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBdEdlLEVBdUdoQjs7QUFFRDtFQUNFLDBCQXpHa0I7RUEwR2xCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0E3R2tCLEVBOEduQjs7QUFFRDtFQUNFLDBCQWhIZ0I7RUFpSGhCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FwSGdCLEVBcUhqQjs7QUFFRDtFQUNFLDBCQXZIZTtFQXdIZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBM0hlLEVBNEhoQjs7QUFDRDtFQUNFLDBCQTdIaUI7RUE4SGpCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FqSWlCLEVBa0lsQjs7QUFDRDtFQUNFLDBCQW5JZ0I7RUFvSWhCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0F2SWdCLEVBd0lqQjs7QUFHRDtFQUNFLDBCQXJKZTtFQXNKZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBekprQjtFQTBKbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTdKaUI7RUE4SmpCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFqS2tCO0VBa0tsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBcktlO0VBc0tmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF6S2tCO0VBMEtsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBN0tnQjtFQThLaEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWpMZTtFQWtMZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBckxpQjtFQXNMakIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXpMZ0I7RUEwTGhCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxvQkFBbUI7RUFDbkIsYUFBWSxFQUNiOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0Usc0NBQXFDLEVBQ3RDOztBQUNEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsVUFBUztFQUNULG1CQUFrQjtFQUNsQixlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxzQ0FBcUMsRUFDdEM7O0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcy1iYXNlOiAjMDAwMDAwO1xyXG4kYXMtcHJpbWFyeTogIzAwYjBmZjtcclxuJGFzLWRhbmdlcjogI2Q1MDAwMDtcclxuJGFzLXN1Y2Nlc3M6ICNhZWVhMDA7XHJcbiRhcy1pbmZvOiAjYjNlNWZjO1xyXG4kYXMtd2FybmluZzogI2ZmYWIwMDtcclxuJGFzLWxpZ2h0OiAjZTBlMGUwO1xyXG4kYXMtZGFyazogIzc4OTA5YztcclxuJGFzLXdpbm5lcjogIzBkNDdhMTtcclxuJGFzLWhhcHB5OiAjZDgxYjYwO1xyXG5cclxuLmFzLWJ0biB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0O1xyXG4gIC8vICAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmFzLWJ0bi1ib3JkZXItYmFzZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWJhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWJhc2U7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItcHJpbWFyeSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXByaW1hcnk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXByaW1hcnk7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItZGFuZ2VyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtZGFuZ2VyO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1kYW5nZXI7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItc3VjY2VzcyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItaW5mbyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWluZm87XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWluZm87XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItd2FybmluZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItbGlnaHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1saWdodDtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtbGlnaHQ7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItZGFyayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWRhcms7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItd2lubmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtd2lubmVyO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy13aW5uZXI7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItaGFwcHkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1oYXBweTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSG92ZXJcclxuLmFzLWJ0bi1ob3Zlci1iYXNlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1iYXNlO1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXByaW1hcnk7XHJcbn1cclxuXHJcbi5hcy1idG4taG92ZXItZGFuZ2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFuZ2VyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWRhbmdlcjtcclxufVxyXG5cclxuLmFzLWJ0bi1ob3Zlci1zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLWluZm86aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1pbmZvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWluZm87XHJcbn1cclxuXHJcbi5hcy1idG4taG92ZXItd2FybmluZzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdhcm5pbmc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtd2FybmluZztcclxufVxyXG5cclxuLmFzLWJ0bi1ob3Zlci1saWdodDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWxpZ2h0O1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLWRhcms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYXJrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWJ0bi1ob3Zlci13aW5uZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtd2lubmVyO1xyXG59XHJcbi5hcy1idG4taG92ZXItaGFwcHk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1oYXBweTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jb2xvclxyXG5cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhbmdlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaW5mbztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2FybmluZztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYXJrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXdpbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdpbm5lcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1oYXBweSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWhhcHB5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWNpcmNsZS1zbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmFzLTMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFzLTM6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDZweCBnYWluc2Jvcm87XHJcbn1cclxuLmFzLXRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFzLWFsaWduLWNlbnRlciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYXMtNCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYXMtNDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggNnB4IGdhaW5zYm9ybztcclxufVxyXG4uYXMtYnRuLXNtIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmFzLWJ0bi1tZCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uYXMtYnRuLWxnIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uYXMtYnRuLWJsayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/comp/buttons/buttons.component.ts":
/*!***************************************************!*\
  !*** ./src/app/comp/buttons/buttons.component.ts ***!
  \***************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/comp/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/comp/buttons/buttons.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/comp/card/card.component.html":
/*!***********************************************!*\
  !*** ./src/app/comp/card/card.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"cards\">Cards</h2>\n<p>Cards are a convenient means of displaying content composed of different types of objects. They’re also well-suited for presenting\n  similar objects whose size or supported actions can vary considerably, like photos with captions of variable length.</p>\n<div class=\"row\">\n  <div class=\"as-card as-4 as-align-center\">\n    <div class=\"as-card-header\">\n      Cards\n    </div>\n    <div class=\"as-card-body\">\n      Cards are a convenient means of displaying content composed of different types of objects.\n    </div>\n    <div class=\"as-card-footer\">\n      Footer\n      <span class=\"as-badge as-card-right\">Badge</span>\n    </div>\n  </div>\n</div>\n<br>\n<h3>:Different size of cards</h3>\n<div class=\"row\">\n  <div class=\"as-2\">\n    <div class=\"as-card\">\n      <div class=\"as-card-header\">\n        Time\n      </div>\n      <div class=\"as-card-body\">\n        <h5>10Mins</h5> <i>as-card</i>\n      </div>\n      <div class=\"as-card-footer\">\n        Data\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <div class=\"as-card\">\n      <div class=\"as-card-header\">\n        Time\n      </div>\n      <div class=\"as-card-body\">\n        <h5>10Mins</h5> <i>as-card-header</i>\n\n      </div>\n      <div class=\"as-card-footer\">\n        Data\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-card\">\n      <div class=\"as-card-header\">\n        Time\n      </div>\n      <div class=\"as-card-body\">\n        <h5>10Mins</h5> <i>as-card-body</i>\n      </div>\n      <div class=\"as-card-footer\">\n        Data\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <div class=\"as-card\">\n      <div class=\"as-card-header\">\n        Time\n      </div>\n      <div class=\"as-card-body\">\n        <h5>10Mins</h5> <i>as-card-footer</i>\n      </div>\n      <div class=\"as-card-footer\">\n        Data\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n</div>\n<h3> :Border effect</h3>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <div class=\"as-card as-card-base\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-card as-card-primary\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-card as-card-info\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n</div>\n<h3>:Background effect</h3>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <div class=\"as-card as-bg-winner\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-card  as-bg-happy\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-card as-bg-success\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n</div>\n<h3>:Hover effect</h3>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <div class=\"as-card as-bg-primary as-card-hover\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-card  as-bg-info as-card-hover\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-card as-bg-warning as-card-hover\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/card/card.component.scss":
/*!***********************************************!*\
  !*** ./src/app/comp/card/card.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-badge {\n  border-radius: 5px;\n  margin: 5px;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out; }\n\n.as-card-base {\n  border: 1px solid #000000;\n  border-right: 4px solid #000000; }\n\n.as-card-primary {\n  border: 1px solid #00b0ff;\n  border-right: 4px solid #00b0ff; }\n\n.as-card-danger {\n  border: 1px solid #d50000;\n  border-right: 4px solid #d50000; }\n\n.as-card-success {\n  border: 1px solid #aeea00;\n  border-right: 4px solid #aeea00; }\n\n.as-card-info {\n  border: 1px solid #b3e5fc;\n  border-right: 4px solid #b3e5fc; }\n\n.as-card-warning {\n  border: 1px solid #ffab00;\n  border-right: 4px solid #ffab00; }\n\n.as-card-light {\n  border: 1px solid #e0e0e0;\n  border-right: 4px solid #e0e0e0; }\n\n.as-card-dark {\n  border: 1px solid #78909c;\n  border-right: 4px solid #78909c; }\n\n.as-card-winner {\n  border: 1px solid #0d47a1;\n  border-right: 4px solid #0d47a1; }\n\n.as-card-happy {\n  border: 1px solid #d81b60;\n  border-right: 4px solid #d81b60; }\n\n.as-card {\n  border-radius: 10px;\n  box-shadow: 0px 0px 4px 4px gainsboro;\n  padding: 20px; }\n\n.as-card-header {\n  font-weight: bold;\n  font-size: 20px;\n  padding: 5px 0px 5px 0px;\n  border-bottom: 1px solid gainsboro; }\n\n.as-card-body {\n  padding: 5px 0px 5px 0px; }\n\n.as-card-footer {\n  font-weight: bold;\n  font-size: 16px;\n  padding: 5px 0px 5px 0px;\n  border-top: 1px solid gainsboro; }\n\n.as-align-center {\n  margin: auto;\n  display: block; }\n\n.as-card-footer > .as-card-right {\n  float: right;\n  text-align: right; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #00b0ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #d50000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #aeea00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b3e5fc;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffab00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #78909c;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #d81b60;\n  color: white;\n  border-radius: 4px; }\n\n.as-card-hover:hover {\n  cursor: pointer;\n  box-shadow: 0px 0px 8px 8px gainsboro; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9jYXJkL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcYXNwaS1jc3Mvc3JjXFxhcHBcXGNvbXBcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFFRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLG9EQUEyQztFQUEzQyw0Q0FBMkMsRUFDNUM7O0FBRUQ7RUFDRSwwQkFuQmU7RUFvQmYsZ0NBcEJlLEVBcUJoQjs7QUFDRDtFQUNFLDBCQXRCa0I7RUF1QmxCLGdDQXZCa0IsRUF3Qm5COztBQUNEO0VBQ0UsMEJBekJpQjtFQTBCakIsZ0NBMUJpQixFQTJCbEI7O0FBQ0Q7RUFDRSwwQkE1QmtCO0VBNkJsQixnQ0E3QmtCLEVBOEJuQjs7QUFDRDtFQUNFLDBCQS9CZTtFQWdDZixnQ0FoQ2UsRUFpQ2hCOztBQUNEO0VBQ0UsMEJBbENrQjtFQW1DbEIsZ0NBbkNrQixFQW9DbkI7O0FBQ0Q7RUFDRSwwQkFyQ2dCO0VBc0NoQixnQ0F0Q2dCLEVBdUNqQjs7QUFDRDtFQUNFLDBCQXhDZTtFQXlDZixnQ0F6Q2UsRUEwQ2hCOztBQUNEO0VBQ0UsMEJBM0NpQjtFQTRDakIsZ0NBNUNpQixFQTZDbEI7O0FBQ0Q7RUFDRSwwQkE5Q2dCO0VBK0NoQixnQ0EvQ2dCLEVBZ0RqQjs7QUFDRDtFQUNFLG9CQUFtQjtFQUNuQixzQ0FBcUM7RUFDckMsY0FBYSxFQUNkOztBQUNEO0VBQ0Usa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YseUJBQXdCO0VBQ3hCLG1DQUFrQyxFQUNuQzs7QUFDRDtFQUVFLHlCQUF3QixFQUN6Qjs7QUFDRDtFQUNFLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLHlCQUF3QjtFQUN4QixnQ0FBK0IsRUFDaEM7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osZUFBYyxFQUNmOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLDBCQXpGZTtFQTBGZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBOUZlO0VBK0ZmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFsR2tCO0VBbUdsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBdEdpQjtFQXVHakIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTFHa0I7RUEyR2xCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkE5R2U7RUErR2YsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWxIa0I7RUFtSGxCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF0SGdCO0VBdUhoQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBMUhlO0VBMkhmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkE5SGlCO0VBK0hqQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBbElnQjtFQW1JaEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2Ysc0NBQXFDLEVBQ3hDIiwiZmlsZSI6InNyYy9hcHAvY29tcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXMtYmFzZTogIzAwMDAwMDtcclxuJGFzLXByaW1hcnk6ICMwMGIwZmY7XHJcbiRhcy1kYW5nZXI6ICNkNTAwMDA7XHJcbiRhcy1zdWNjZXNzOiAjYWVlYTAwO1xyXG4kYXMtaW5mbzogI2IzZTVmYztcclxuJGFzLXdhcm5pbmc6ICNmZmFiMDA7XHJcbiRhcy1saWdodDogI2UwZTBlMDtcclxuJGFzLWRhcms6ICM3ODkwOWM7XHJcbiRhcy13aW5uZXI6ICMwZDQ3YTE7XHJcbiRhcy1oYXBweTogI2Q4MWI2MDtcclxuXHJcbi5hcy1iYWRnZSB7XHJcbi8vICAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmFzLWNhcmQtYmFzZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWJhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgJGFzLWJhc2U7XHJcbn1cclxuLmFzLWNhcmQtcHJpbWFyeSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXByaW1hcnk7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgJGFzLXByaW1hcnk7XHJcbn1cclxuLmFzLWNhcmQtZGFuZ2VyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtZGFuZ2VyO1xyXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICRhcy1kYW5nZXI7XHJcbn1cclxuLmFzLWNhcmQtc3VjY2VzcyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbn1cclxuLmFzLWNhcmQtaW5mbyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWluZm87XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgJGFzLWluZm87XHJcbn1cclxuLmFzLWNhcmQtd2FybmluZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgJGFzLXdhcm5pbmc7XHJcbn1cclxuLmFzLWNhcmQtbGlnaHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1saWdodDtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAkYXMtbGlnaHQ7XHJcbn1cclxuLmFzLWNhcmQtZGFyayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWRhcms7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWNhcmQtd2lubmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtd2lubmVyO1xyXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICRhcy13aW5uZXI7XHJcbn1cclxuLmFzLWNhcmQtaGFwcHkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1oYXBweTtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuLmFzLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggNHB4IGdhaW5zYm9ybztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5hcy1jYXJkLWhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG59XHJcbi5hcy1jYXJkLWJvZHkge1xyXG4gIC8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcclxufVxyXG4uYXMtY2FyZC1mb290ZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxufVxyXG4uYXMtYWxpZ24tY2VudGVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmFzLWNhcmQtZm9vdGVyID4gLmFzLWNhcmQtcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhbmdlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaW5mbztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2FybmluZztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYXJrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXdpbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdpbm5lcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1oYXBweSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWhhcHB5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWNhcmQtaG92ZXI6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCA4cHggZ2FpbnNib3JvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/comp/card/card.component.ts":
/*!*********************************************!*\
  !*** ./src/app/comp/card/card.component.ts ***!
  \*********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/comp/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/comp/card/card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/comp/dropdown/dropdown.component.html":
/*!*******************************************************!*\
  !*** ./src/app/comp/dropdown/dropdown.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"drops\">Drop down</h2>\n<p>A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list.\n  When a drop-down list is inactive, it displays a single value. When activated, it displays a list of values, from which\n  the user may select one.</p>\n\n\n<div class=\"as-anchor\">Anchor\n\n  <ol class=\"as-drops\">\n    <li>One</li>\n    <li>One</li>\n    <li>One</li>\n    <li>One</li>\n    <li>One</li>\n    <li>One</li>\n    <li>One</li>\n  </ol>\n\n</div>\n"

/***/ }),

/***/ "./src/app/comp/dropdown/dropdown.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/comp/dropdown/dropdown.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-drops {\n  display: none;\n  -webkit-transition: display 2s ease;\n  transition: display 2s ease; }\n\n.as-anchor:hover {\n  -webkit-transition: display 2s ease-in-out;\n  transition: display 2s ease-in-out; }\n\n.as-anchor:hover .as-drops {\n    display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9kcm9wZG93bi9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxjb21wXFxkcm9wZG93blxcZHJvcGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFhO0VBQ2Isb0NBQTJCO0VBQTNCLDRCQUEyQixFQUM1Qjs7QUFFRDtFQUNFLDJDQUFrQztFQUFsQyxtQ0FBa0MsRUFJbkM7O0FBTEQ7SUFHSSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzLWRyb3BzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHRyYW5zaXRpb246IGRpc3BsYXkgMnMgZWFzZTtcclxufVxyXG5cclxuLmFzLWFuY2hvcjpob3ZlciB7XHJcbiAgdHJhbnNpdGlvbjogZGlzcGxheSAycyBlYXNlLWluLW91dDtcclxuICAuYXMtZHJvcHMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/comp/dropdown/dropdown.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/comp/dropdown/dropdown.component.ts ***!
  \*****************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
    }
    DropdownComponent.prototype.ngOnInit = function () {
    };
    DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dropdown',
            template: __webpack_require__(/*! ./dropdown.component.html */ "./src/app/comp/dropdown/dropdown.component.html"),
            styles: [__webpack_require__(/*! ./dropdown.component.scss */ "./src/app/comp/dropdown/dropdown.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/comp/forms/forms.component.html":
/*!*************************************************!*\
  !*** ./src/app/comp/forms/forms.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"forms\">Forms</h2>\n<p>A form is a document with spaces in which to write or select, for a series of documents with similar contents. The documents\n  usually have the printed parts in common, except, possibly, for a serial number. Forms, when completed, may be a statement,\n  a request, an order, etc.; a check may be a form.</p>\n\n<div class=\"row\">\n  <div class=\"as-3\"></div>\n  <div class=\"as-5\">\n    <label for=\"as-input\"> Input box text <i>as-input</i> </label>\n    <input type=\"text\" placeholder=\"as-input\" class=\"as-input\">\n    <label for=\"as-input\"> Input box password <i>as-password</i> </label>\n    <input type=\"text\" placeholder=\"as-password\" class=\"as-password\">\n    <label for=\"as-input\"> Input box textarea <i>as-textarea</i> </label>\n    <textarea name=\"\" id=\"\" rows=\"5\" placeholder=\"as-textarea\" class=\"as-textarea\"></textarea>\n    <!--<label for=\"as-checkbox\">Check box <i>as-checkbox</i> </label>\n    <input type=\"checkbox\" class=\"as-checkbox\">-->\n  </div>\n  <div class=\"as-3\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/forms/forms.component.scss":
/*!*************************************************!*\
  !*** ./src/app/comp/forms/forms.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-input {\n  margin: 5px 0px;\n  padding: 5px;\n  width: 100%; }\n\n.as-password {\n  padding: 5px;\n  margin: 5px 0px;\n  width: 100%; }\n\n.as-textarea {\n  padding: 5px;\n  margin: 5px 0px;\n  width: 100%; }\n\n.as-input::-webkit-input-placeholder {\n  color: #d81b60; }\n\n.as-input::-moz-placeholder {\n  color: #d81b60; }\n\n.as-input::-ms-input-placeholder {\n  color: #d81b60; }\n\n.as-input::placeholder {\n  color: #d81b60; }\n\n.as-password::-webkit-input-placeholder {\n  color: #0d47a1; }\n\n.as-password::-moz-placeholder {\n  color: #0d47a1; }\n\n.as-password::-ms-input-placeholder {\n  color: #0d47a1; }\n\n.as-password::placeholder {\n  color: #0d47a1; }\n\ntextarea::-webkit-input-placeholder {\n  color: #aeea00; }\n\ntextarea::-moz-placeholder {\n  color: #aeea00; }\n\ntextarea::-ms-input-placeholder {\n  color: #aeea00; }\n\ntextarea::placeholder {\n  color: #aeea00; }\n\n.as-input:focus {\n  outline: none;\n  box-shadow: none;\n  border: 2px solid #d81b60; }\n\n.as-password:focus {\n  outline: none;\n  box-shadow: none;\n  border: 2px solid #0d47a1; }\n\ntextarea:focus {\n  outline: none;\n  box-shadow: none;\n  border: 1px solid #aeea00; }\n\n.as-checkbox {\n  background-color: white;\n  border: 1px solid black;\n  padding: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9mb3Jtcy9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxjb21wXFxmb3Jtc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxnQkFBZTtFQUNmLGFBQVk7RUFDWixZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxlQWpCZ0IsRUFrQmpCOztBQUZEO0VBQ0UsZUFqQmdCLEVBa0JqQjs7QUFGRDtFQUNFLGVBakJnQixFQWtCakI7O0FBRkQ7RUFDRSxlQWpCZ0IsRUFrQmpCOztBQUNEO0VBQ0UsZUFyQmlCLEVBc0JsQjs7QUFGRDtFQUNFLGVBckJpQixFQXNCbEI7O0FBRkQ7RUFDRSxlQXJCaUIsRUFzQmxCOztBQUZEO0VBQ0UsZUFyQmlCLEVBc0JsQjs7QUFDRDtFQUNFLGVBN0JrQixFQThCbkI7O0FBRkQ7RUFDRSxlQTdCa0IsRUE4Qm5COztBQUZEO0VBQ0UsZUE3QmtCLEVBOEJuQjs7QUFGRDtFQUNFLGVBN0JrQixFQThCbkI7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLDBCQTVCZ0IsRUE2QmpCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQiwwQkFuQ2lCLEVBb0NsQjs7QUFFRDtFQUNFLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsMEJBOUNrQixFQStDbkI7O0FBRUQ7RUFDRSx3QkFBdUI7RUFDdkIsd0JBQXVCO0VBQ3ZCLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXMtYmFzZTogIzAwMDAwMDtcclxuJGFzLXByaW1hcnk6ICMwMGIwZmY7XHJcbiRhcy1kYW5nZXI6ICNkNTAwMDA7XHJcbiRhcy1zdWNjZXNzOiAjYWVlYTAwO1xyXG4kYXMtaW5mbzogI2IzZTVmYztcclxuJGFzLXdhcm5pbmc6ICNmZmFiMDA7XHJcbiRhcy1saWdodDogI2UwZTBlMDtcclxuJGFzLWRhcms6ICM3ODkwOWM7XHJcbiRhcy13aW5uZXI6ICMwZDQ3YTE7XHJcbiRhcy1oYXBweTogI2Q4MWI2MDtcclxuLmFzLWlucHV0IHtcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hcy1wYXNzd29yZCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogNXB4IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYXMtdGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFzLWlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICRhcy1oYXBweTtcclxufVxyXG4uYXMtcGFzc3dvcmQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGFzLXdpbm5lcjtcclxufVxyXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkYXMtc3VjY2VzcztcclxufVxyXG4uYXMtaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuXHJcbi5hcy1wYXNzd29yZDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRhcy13aW5uZXI7XHJcbn1cclxuXHJcbnRleHRhcmVhOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbn1cclxuXHJcbi5hcy1jaGVja2JveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/comp/forms/forms.component.ts":
/*!***********************************************!*\
  !*** ./src/app/comp/forms/forms.component.ts ***!
  \***********************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/comp/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.scss */ "./src/app/comp/forms/forms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/comp/grid/grid.component.html":
/*!***********************************************!*\
  !*** ./src/app/comp/grid/grid.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"grids\">\n  Grid System</h2>\n<p>CSS grid layout or CSS grid is a technique in Cascading Style Sheets that allows web developers to create complex responsive\n  web design layouts more easily and consistently across browsers. There have been other methods for controlling web page\n  layout methods, such as tables, the box model, and CSS flex box.</p>\n<div class=\"row\">\n  <div class=\"as-1\"> <i>.as-1</i> </div>\n  <div class=\"as-1\"><i>.as-1</i></div>\n  <div class=\"as-1\"><i>.as-1</i></div>\n  <div class=\"as-1\"><i>.as-1</i></div>\n  <div class=\"as-1\"><i>.as-1</i></div>\n  <div class=\"as-1\"><i>.as-1</i></div>\n  <div class=\"as-1\"><i>.as-1</i></div>\n  <div class=\"as-1\"><i>.as-1</i></div>\n  <div class=\"as-1\"><i>.as-1</i></div>\n  <div class=\"as-1\"><i>.as-1</i></div>\n  <div class=\"as-1\"><i>.as-1</i></div>\n  <div class=\"as-1\"><i>.as-1</i></div>\n</div><br>\n<div class=\"row\">\n  <div class=\"as-2\"><i>.as-2</i></div>\n  <div class=\"as-2\"><i>.as-2</i></div>\n  <div class=\"as-2\"><i>.as-2</i></div>\n  <div class=\"as-2\"><i>.as-2</i></div>\n  <div class=\"as-2\"><i>.as-2</i></div>\n  <div class=\"as-2\"><i>.as-2</i></div>\n</div><br>\n<div class=\"row\">\n  <div class=\"as-3\"><i>.as-3</i></div>\n  <div class=\"as-3\"><i>.as-3</i></div>\n  <div class=\"as-3\"><i>.as-3</i></div>\n  <div class=\"as-3\"><i>.as-3</i></div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"as-4\"><i>.as-4</i></div>\n  <div class=\"as-4\"><i>.as-4</i></div>\n  <div class=\"as-4\"><i>.as-4</i></div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"as-1\"><i>.as-1</i></div>\n  <div class=\"as-2\"><i>.as-2</i></div>\n  <div class=\"as-3\"><i>.as-3</i></div>\n  <div class=\"as-4\"><i>.as-4</i></div>\n  <div class=\"as-2\"><i>.as-2</i></div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"as-5\"><i>.as-5</i></div>\n  <div class=\"as-5\"><i>.as-5</i></div>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"as-6\"><i>.as-6</i></div>\n  <div class=\"as-4\"><i>.as-4</i></div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/grid/grid.component.scss":
/*!***********************************************!*\
  !*** ./src/app/comp/grid/grid.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-1,\n.as-2,\n.as-3,\n.as-4,\n.as-5,\n.as-5,\n.as-6,\n.as-7,\n.as-8,\n.as-9 {\n  border: 1px solid black; }\n\n@media (max-width: 576px) {\n  .as-1 {\n    width: 100%; }\n  .as-2 {\n    width: 100%; }\n  .as-3 {\n    width: 100%; }\n  .as-4 {\n    width: 100%; }\n  .as-5 {\n    width: 100%; }\n  .as-6 {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9ncmlkL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcYXNwaS1jc3Mvc3JjXFxhcHBcXGNvbXBcXGdyaWRcXGdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7RUFVRSx3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRTtJQUNFLFlBQVcsRUFDWjtFQUNEO0lBQ0UsWUFBVyxFQUNaO0VBQ0Q7SUFDRSxZQUFXLEVBQ1o7RUFDRDtJQUNFLFlBQVcsRUFDWjtFQUNEO0lBQ0UsWUFBVyxFQUNaO0VBQ0Q7SUFDRSxZQUFXLEVBQ1osRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXAvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzLTEsXHJcbi5hcy0yLFxyXG4uYXMtMyxcclxuLmFzLTQsXHJcbi5hcy01LFxyXG4uYXMtNSxcclxuLmFzLTYsXHJcbi5hcy03LFxyXG4uYXMtOCxcclxuLmFzLTkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuYXMtMSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmFzLTIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5hcy0zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYXMtNCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmFzLTUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5hcy02IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbn1cclxuXHJcbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG59XHJcbiJdfQ== */"

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

/***/ "./src/app/comp/list/list.component.html":
/*!***********************************************!*\
  !*** ./src/app/comp/list/list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"list\">\n  List</h2>\n<p>\n  In computer science, a list or sequence is an abstract data type that represents a countable number of ordered values, where\n  the same value may occur more than once. An instance of a list is a computer representation of the mathematical concept\n  of a finite sequence; the infinite analog of a list is a stream. </p>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <ul class=\"as-list-ul\">\n      <li class=\"as-list-item\">\n        One\n      </li>\n      <li class=\"as-list-item\">\n        Two\n      </li>\n      <li class=\"as-list-item\">\n        Three\n      </li>\n      <li class=\"as-list-item\">\n        Four\n      </li>\n      <li class=\"as-list-item\">\n        Five\n      </li>\n    </ul>\n  </div>\n  <div class=\"as-4\">\n    <ol class=\"as-list-ul as-list-bordered\">\n      <li class=\"as-list-item\">\n        One\n      </li>\n      <li class=\"as-list-item\">\n        Two\n      </li>\n      <li class=\"as-list-item\">\n        Three\n      </li>\n      <li class=\"as-list-item\">\n        Four\n      </li>\n      <li class=\"as-list-item\">\n        Five\n      </li>\n    </ol>\n  </div>\n  <div class=\"as-4\">\n    <ol class=\"as-list-ul as-list-bordered\">\n      <li class=\"as-list-item\">\n        One\n      </li>\n      <li class=\"as-list-item\">\n        Two\n      </li>\n      <li class=\"as-list-item\">\n        Three\n      </li>\n      <li class=\"as-list-item\">\n        Four\n      </li>\n      <li class=\"as-list-item\">\n        Five\n      </li>\n    </ol>\n  </div>\n</div>\n<h3>:Nestted list & Badge list</h3>\n<div class=\"row\">\n  <div class=\"as-5\">\n    <ul class=\"as-list-ul as-list-bordered\">\n      <li class=\"as-list-item\">\n        One\n      </li>\n      <li class=\"as-list-item\">\n        Two\n        <ul>\n          <li>Item 1</li>\n          <li>Item 2</li>\n          <li>Item 3</li>\n          <li>Item 4\n            <ol>\n              <li>Item</li>\n              <li>Item</li>\n              <li>Item</li>\n              <li>Item</li>\n            </ol>\n          </li>\n        </ul>\n      </li>\n      <li class=\"as-list-item\">\n        Three\n      </li>\n      <li class=\"as-list-item\">\n        Four\n      </li>\n      <li class=\"as-list-item\">\n        Five\n      </li>\n    </ul>\n  </div>\n  <div class=\"as-5\">\n    <ul class=\"as-list-ul as-list-bordered\">\n      <li class=\"as-list-item\">\n        One <span class=\"as-badge-primary as-badge as-card-right\">Badge</span>\n\n      </li>\n      <li class=\"as-list-item\">\n        Two <span class=\"as-badge-warning as-badge as-card-right\">Badge</span>\n\n      </li>\n      <li class=\"as-list-item\">\n        Three <span class=\"as-badge-base as-badge as-card-right\">Badge</span>\n\n      </li>\n      <li class=\"as-list-item\">\n        Four <span class=\"as-badge-dark as-badge as-card-right\">Badge</span>\n\n      </li>\n      <li class=\"as-list-item\">\n        Five <span class=\"as-badge-happy as-badge as-card-right\">Badge</span>\n      </li>\n      <li class=\"as-list-item\">\n        One <span class=\"as-badge-info as-badge as-card-right\">Badge</span>\n\n      </li>\n      <li class=\"as-list-item\">\n        Two <span class=\"as-badge-warning as-badge as-card-right\">Badge</span>\n\n      </li>\n      <li class=\"as-list-item\">\n        Three <span class=\"as-badge-danger as-badge as-card-right\">Badge</span>\n      </li>\n      <li class=\"as-list-item\">\n        Five <span class=\"as-badge-success as-badge as-card-right\">Badge</span>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/list/list.component.scss":
/*!***********************************************!*\
  !*** ./src/app/comp/list/list.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-list-ul {\n  border-radius: 5px;\n  list-style-type: none;\n  border: 1px solid black; }\n\n.as-list-item {\n  padding: 10px 10px;\n  /* border: 0.5px solid black; */\n  border-bottom: 1px solid black;\n  margin-left: -40px;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out; }\n\n.as-list-bordered {\n  border-radius: 0px; }\n\n.as-list-item:hover {\n  background-color: whitesmoke;\n  color: black;\n  font-weight: bold;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out; }\n\n.as-list-ol {\n  list-style-type: decimal;\n  border-radius: 5px;\n  border: 1px solid black; }\n\n.as-list-item > .as-card-right {\n  float: right;\n  text-align: right; }\n\n.as-badge {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  padding: 4px;\n  font-size: 12px;\n  display: inline-block;\n  border-radius: 5px;\n  border: 1px solid white;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  width: auto; }\n\n.as-badge-primary {\n  border: 1px solid #00b0ff;\n  border-right: 3px solid #00b0ff;\n  background-color: #00b0ff;\n  color: white; }\n\n.as-badge-base {\n  border: 1px solid #000000;\n  border-right: 3px solid #000000;\n  background-color: #000000;\n  color: white; }\n\n.as-badge-success {\n  border: 1px solid #aeea00;\n  border-right: 3px solid #aeea00;\n  background-color: #aeea00;\n  color: white; }\n\n.as-badge-warning {\n  border: 1px solid #ffab00;\n  border-right: 3px solid #ffab00;\n  background-color: #ffab00;\n  color: white; }\n\n.as-badge-info {\n  border: 1px solid #b3e5fc;\n  border-right: 3px solid #b3e5fc;\n  background-color: #b3e5fc;\n  color: white; }\n\n.as-badge-dark {\n  border: 1px solid #78909c;\n  border-right: 3px solid #78909c;\n  background-color: #78909c;\n  color: white; }\n\n.as-badge-happy {\n  border: 1px solid #d81b60;\n  border-right: 3px solid #d81b60;\n  background-color: #d81b60;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9saXN0L0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcYXNwaS1jc3Mvc3JjXFxhcHBcXGNvbXBcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFFRSxtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsK0JBQThCO0VBQzlCLG1CQUFrQjtFQUNsQixvREFBMkM7RUFBM0MsNENBQTJDLEVBQzVDOztBQUNEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUlEO0VBQ0UsNkJBQTRCO0VBQzVCLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsb0RBQTJDO0VBQTNDLDRDQUEyQyxFQUM1Qzs7QUFDRDtFQUNFLHlCQUF3QjtFQUN4QixtQkFBa0I7RUFDbEIsd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLGFBQVk7RUFDWixnQkFBZTtFQUNmLG1CQUFrQjtFQUVsQixhQUFZO0VBQ1osZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixzQkFBcUI7RUFDckIsb0RBQTJDO0VBQTNDLDRDQUEyQztFQUUzQyxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSwwQkE1RGtCO0VBNkRsQixnQ0E3RGtCO0VBOERsQiwwQkE5RGtCO0VBK0RsQixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSwwQkFuRWU7RUFvRWYsZ0NBcEVlO0VBcUVmLDBCQXJFZTtFQXNFZixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSwwQkF0RWtCO0VBdUVsQixnQ0F2RWtCO0VBd0VsQiwwQkF4RWtCO0VBeUVsQixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSwwQkExRWtCO0VBMkVsQixnQ0EzRWtCO0VBNEVsQiwwQkE1RWtCO0VBNkVsQixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSwwQkFqRmU7RUFrRmYsZ0NBbEZlO0VBbUZmLDBCQW5GZTtFQW9GZixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSwwQkFwRmU7RUFxRmYsZ0NBckZlO0VBc0ZmLDBCQXRGZTtFQXVGZixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSwwQkF4RmdCO0VBeUZoQixnQ0F6RmdCO0VBMEZoQiwwQkExRmdCO0VBMkZoQixhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcy1iYXNlOiAjMDAwMDAwO1xyXG4kYXMtcHJpbWFyeTogIzAwYjBmZjtcclxuJGFzLWRhbmdlcjogI2Q1MDAwMDtcclxuJGFzLXN1Y2Nlc3M6ICNhZWVhMDA7XHJcbiRhcy1pbmZvOiAjYjNlNWZjO1xyXG4kYXMtd2FybmluZzogI2ZmYWIwMDtcclxuJGFzLWxpZ2h0OiAjZTBlMGUwO1xyXG4kYXMtZGFyazogIzc4OTA5YztcclxuJGFzLXdpbm5lcjogIzBkNDdhMTtcclxuJGFzLWhhcHB5OiAjZDgxYjYwO1xyXG4uYXMtbGlzdC11bCB7XHJcbiAgLy8gICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5hcy1saXN0LWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAvKiBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICBtYXJnaW4tbGVmdDogLTQwcHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcclxufVxyXG4uYXMtbGlzdC1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbi5hcy1saXN0LWJvcmRlcmVkID4gLmFzLWxpc3QtaXRlbSB7XHJcbiAgLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLmFzLWxpc3QtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcclxufVxyXG4uYXMtbGlzdC1vbCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4uYXMtbGlzdC1pdGVtID4gLmFzLWNhcmQtcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYXMtYmFkZ2Uge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC8vICAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0O1xyXG4gIC8vICAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmFzLWJhZGdlLXByaW1hcnkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYXMtYmFkZ2UtYmFzZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWJhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWJhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWJhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hcy1iYWRnZS1zdWNjZXNzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtc3VjY2VzcztcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtc3VjY2VzcztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmFzLWJhZGdlLXdhcm5pbmcge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy13YXJuaW5nO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy13YXJuaW5nO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13YXJuaW5nO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYXMtYmFkZ2UtaW5mbyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWluZm87XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWluZm87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWluZm87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hcy1iYWRnZS1kYXJrIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtZGFyaztcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtZGFyaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFyaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmFzLWJhZGdlLWhhcHB5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtaGFwcHk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWhhcHB5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/comp/list/list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/comp/list/list.component.ts ***!
  \*********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/comp/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/comp/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
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