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

module.exports = "<!--<i style=\"text-align: right\" class=\"as-show-i fas fa-arrow-alt-circle-left\" uk-close></i>-->\n<img src=\"https://image.flaticon.com/icons/png/512/2089/2089793.png\" class=\"as-hide-i\" style=\"width: 50px;cursor:pointer;\"\n  href=\"#offcanvas-usage\" uk-toggle>\n\n\n<div class=\"container\" *ngIf=\"git\">\n  <h1> A scripting paper</h1>\n</div>\n<div class=\"container\" *ngIf=\"!git\">\n  <h1> A scripting paper</h1>\n  <app-alert *ngIf=\"appid=='alert'\"></app-alert>\n  <app-align *ngIf=\"appid=='align'\"></app-align>\n  <app-badge *ngIf=\"appid=='badge'\"></app-badge>\n  <app-buttons *ngIf=\"appid=='button'\"></app-buttons>\n  <app-card *ngIf=\"appid=='card'\"></app-card>\n  <app-dropdown *ngIf=\"appid=='dropdown'\"></app-dropdown>\n  <app-grid *ngIf=\"appid=='grids'\"></app-grid>\n  <app-list *ngIf=\"appid=='list'\"></app-list>\n  <app-forms *ngIf=\"appid=='forms'\"></app-forms>\n  <app-group *ngIf=\"appid=='group'\"></app-group>\n  <app-panel *ngIf=\"appid=='panel'\"></app-panel>\n  <app-dialog *ngIf=\"appid=='dialog'\"></app-dialog>\n  <app-nav *ngIf=\"appid=='nav'\"></app-nav>\n  <app-window *ngIf=\"appid=='window'\"></app-window>\n  <app-table *ngIf=\"appid=='table'\"></app-table>\n  <app-animate *ngIf=\"appid=='animate'\"></app-animate>\n</div>\n<app-editor *ngIf=\"appid=='editor'\"></app-editor>\n<app-vilot *ngIf=\"appid=='vilot'\"></app-vilot>\n<app-yellow *ngIf=\"appid=='yellow'\"></app-yellow>\n<app-sugar *ngIf=\"appid=='sugar'\"></app-sugar>\n<div>\n  <router-outlet></router-outlet>\n</div>\n<div id=\"offcanvas-usage\" uk-offcanvas>\n  <div class=\"uk-offcanvas-bar\">\n    <button class=\"uk-offcanvas-close\" type=\"button\" uk-close></button>\n    <h3>Components</h3>\n    <div class=\"\">\n      <a href=\"#alert\" (click)=\"appid='alert'\" class=\"as-badge as-alert-primary\">Alert</a>\n      <a href=\"#animate\" (click)=\"appid='animate'\" class=\"as-badge as-alert-primary\">Animate</a>\n      <a href=\"#align\" (click)=\"appid='align'\" class=\"as-badge as-alert-primary\">Align text</a>\n      <a href=\"#grids\" (click)=\"appid='grids'\" class=\"as-badge as-alert-primary\">Grid system</a>\n      <a href=\"#badge\" (click)=\"appid='badge'\" class=\"as-badge as-alert-primary\">Badge</a>\n      <a href=\"#button\" (click)=\"appid='button'\" class=\"as-badge as-alert-primary\">Buttons</a>\n      <a href=\"#card\" (click)=\"appid='card'\" class=\"as-badge as-alert-primary\">Cards</a>\n      <a href=\"#drops\" (click)=\"appid='dropdown'\" class=\"as-badge as-alert-primary\">Dropdown</a>\n      <a href=\"#list\" (click)=\"appid='list'\" class=\"as-badge as-alert-primary\">List group</a>\n      <a href=\"#forms\" (click)=\"appid='forms'\" class=\"as-badge as-alert-primary\">Forms</a>\n      <a href=\"#group\" (click)=\"appid='group'\" class=\"as-badge as-alert-primary\">Group input &amp; Buttons</a>\n      <a href=\"#panel\" (click)=\"appid='panel'\" class=\"as-badge as-alert-primary\">Panel</a>\n      <a href=\"#dialog\" (click)=\"appid='dialog'\" class=\"as-badge as-alert-primary\">Dialog box</a>\n      <a href=\"#nav\" (click)=\"appid='nav'\" class=\"as-badge as-alert-primary\">Navbar</a>\n      <a href=\"#table\" (click)=\"appid='table'\" class=\"as-badge as-alert-primary\">Table</a>\n      <a href=\"#window\" (click)=\"appid='window'\" class=\"as-badge as-alert-primary\">Window</a>\n      <a href=\"#sugar\" (click)=\"appid='sugar'\" class=\"as-badge as-alert-primary\">Note book</a>\n      <a href=\"#vilot\" (click)=\"appid='vilot'\" class=\"as-badge as-alert-primary\">Vilot</a>\n      <a href=\"#yellow\" (click)=\"appid='yellow'\" class=\"as-badge as-alert-primary\">Yellow</a>\n      <a href=\"#editor\" (click)=\"appid='editor'\" class=\"as-badge as-alert-primary\">Editor</a>\n    </div>\n\n  </div>\n</div>\n<a class=\"as-top\" href=\"#\" uk-totop uk-scroll></a>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-badge {\n  padding: 10px;\n  cursor: pointer;\n  border-radius: 3px;\n  margin: 5px;\n  font-size: 12px;\n  display: inline-block;\n  border-radius: 15px;\n  border: 1px solid white;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  width: 100%; }\n\n.container {\n  margin-top: 30px; }\n\n.as-top {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 15px; }\n\n.as-alert-primary {\n  border: 1px solid #00b0ff;\n  border-radius: 0;\n  border-right: 3px solid #00b0ff; }\n\n.as-alert-primary:hover {\n  border: 1px solid white;\n  color: white;\n  background-color: #00b0ff;\n  border-radius: 0;\n  border-right: 3px solid #00b0ff; }\n\n.as-nav {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  text-align: center;\n  height: auto;\n  overflow: auto;\n  background-color: white;\n  border-right: 2px solid lightgray; }\n\n.as-nav::-webkit-scrollbar {\n  width: 4px; }\n\n.as-nav::-webkit-scrollbar-thumb {\n  width: 4px;\n  background-color: #00b0ff; }\n\n.as-active {\n  display: block;\n  width: 9%;\n  -webkit-transition: width 1s ease-in;\n  transition: width 1s ease-in;\n  -webkit-animation: 1s viewWidth ease-in;\n          animation: 1s viewWidth ease-in; }\n\n.as-hide {\n  display: none;\n  width: 0%;\n  -webkit-transition: width 1s ease-in;\n  transition: width 1s ease-in; }\n\n.as-show-i {\n  padding: 5px;\n  position: fixed;\n  font-size: 22px;\n  color: #0d47a1;\n  top: 0;\n  right: 0;\n  margin: 10px;\n  text-align: right; }\n\n.as-hide-i {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 10px;\n  font-size: 22px;\n  color: #0d47a1;\n  text-align: right;\n  padding: 5px; }\n\n@media (max-width: 576px) {\n  .as-nav {\n    width: 50%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFxhc3BpLWNzcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsY0FBYTtFQUNiLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLFlBQVc7RUFFWCxnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLHNCQUFxQjtFQUNyQixvREFBMkM7RUFBM0MsNENBQTJDO0VBRTNDLFlBQVcsRUFDWjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsVUFBUztFQUNULFNBQVE7RUFDUixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSwwQkFuQ2tCO0VBb0NsQixpQkFBZ0I7RUFDaEIsZ0NBckNrQixFQXNDbkI7O0FBQ0Q7RUFDRSx3QkFBdUI7RUFDdkIsYUFBWTtFQUNaLDBCQTFDa0I7RUE0Q2xCLGlCQUFnQjtFQUNoQixnQ0E3Q2tCLEVBOENuQjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFVBQVM7RUFDVCxRQUFPO0VBQ1AsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osZUFBYztFQUVkLHdCQUF1QjtFQUN2QixrQ0FBaUMsRUFDbEM7O0FBQ0Q7RUFDRSxXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1YsMEJBQXlCLEVBQzFCOztBQUNEO0VBQ0UsZUFBYztFQUNkLFVBQVM7RUFDVCxxQ0FBNEI7RUFBNUIsNkJBQTRCO0VBQzVCLHdDQUErQjtVQUEvQixnQ0FBK0IsRUFDaEM7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsVUFBUztFQUNULHFDQUE0QjtFQUE1Qiw2QkFBNEIsRUFDN0I7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixnQkFBZTtFQUNmLGVBNUVpQjtFQTZFakIsT0FBTTtFQUNOLFNBQVE7RUFDUixhQUFZO0VBQ1osa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixPQUFNO0VBQ04sUUFBTztFQUNQLGFBQVk7RUFDWixnQkFBZTtFQUNmLGVBeEZpQjtFQXlGakIsa0JBQWlCO0VBQ2pCLGFBQVksRUFDYjs7QUFDRDtFQUNFO0lBQ0UsV0FBVSxFQUNYLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXMtYmFzZTogIzAwMDAwMDtcclxuJGFzLXByaW1hcnk6ICMwMGIwZmY7XHJcbiRhcy1kYW5nZXI6ICNkNTAwMDA7XHJcbiRhcy1zdWNjZXNzOiAjYWVlYTAwO1xyXG4kYXMtaW5mbzogI2IzZTVmYztcclxuJGFzLXdhcm5pbmc6ICNmZmFiMDA7XHJcbiRhcy1saWdodDogI2UwZTBlMDtcclxuJGFzLWRhcms6ICM3ODkwOWM7XHJcbiRhcy13aW5uZXI6ICMwZDQ3YTE7XHJcbiRhcy1oYXBweTogI2Q4MWI2MDtcclxuXHJcbi5hcy1iYWRnZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIC8vIHBhZGRpbmc6IDEycHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0O1xyXG4gIC8vICAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5hcy10b3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcbi5hcy1hbGVydC1wcmltYXJ5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtcHJpbWFyeTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG59XHJcbi5hcy1hbGVydC1wcmltYXJ5OmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXByaW1hcnk7XHJcbiAgLy8gcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXByaW1hcnk7XHJcbn1cclxuLmFzLW5hdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvdmVyZmxvdzogYXV0bztcclxuICAvLyBtYXJnaW46IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuLmFzLW5hdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA0cHg7XHJcbn1cclxuLmFzLW5hdjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjBmZjtcclxufVxyXG4uYXMtYWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogOSU7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZS1pbjtcclxuICBhbmltYXRpb246IDFzIHZpZXdXaWR0aCBlYXNlLWluO1xyXG59XHJcblxyXG4uYXMtaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMCU7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZS1pbjtcclxufVxyXG4uYXMtc2hvdy1pIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogJGFzLXdpbm5lcjtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5hcy1oaWRlLWkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAkYXMtd2lubmVyO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuYXMtbmF2IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
        this.showd = true;
        this.title = "auth";
        this.git = false;
        this.appid = "";
    }
    AppComponent.prototype.ngOnInit = function () {
        if (window.location.hash.split("#")[1] !== undefined) {
            this.appid = window.location.hash.split("#")[1];
        }
        else if (window.location.hash.split("#")[1] === "afol" ||
            window.location.hash.split("#")[1] === "ainfo" ||
            window.location.hash.split("#")[1] === "acur" ||
            window.location.hash.split("#")[1] === "preview") {
            this.appid = "editor";
        }
        else {
            this.appid = "alert";
        }
    };
    AppComponent.prototype.show = function () {
        this.showd = true;
        document.getElementById("as-nav-id").classList.add("as-active");
        document.getElementById("as-nav-id").classList.remove("as-hide");
    };
    AppComponent.prototype.hide = function () {
        this.showd = false;
        document.getElementById("as-nav-id").classList.add("as-hide");
        document.getElementById("as-nav-id").classList.add("as-active");
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comp_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comp/alert/alert.component */ "./src/app/comp/alert/alert.component.ts");
/* harmony import */ var _comp_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comp/grid/grid.component */ "./src/app/comp/grid/grid.component.ts");
/* harmony import */ var _comp_badge_badge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comp/badge/badge.component */ "./src/app/comp/badge/badge.component.ts");
/* harmony import */ var _comp_align_align_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comp/align/align.component */ "./src/app/comp/align/align.component.ts");
/* harmony import */ var _comp_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comp/card/card.component */ "./src/app/comp/card/card.component.ts");
/* harmony import */ var _comp_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comp/buttons/buttons.component */ "./src/app/comp/buttons/buttons.component.ts");
/* harmony import */ var _comp_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comp/dropdown/dropdown.component */ "./src/app/comp/dropdown/dropdown.component.ts");
/* harmony import */ var _comp_list_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comp/list/list.component */ "./src/app/comp/list/list.component.ts");
/* harmony import */ var _comp_forms_forms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comp/forms/forms.component */ "./src/app/comp/forms/forms.component.ts");
/* harmony import */ var _comp_group_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comp/group/group.component */ "./src/app/comp/group/group.component.ts");
/* harmony import */ var _comp_panel_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comp/panel/panel.component */ "./src/app/comp/panel/panel.component.ts");
/* harmony import */ var _comp_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comp/dialog/dialog.component */ "./src/app/comp/dialog/dialog.component.ts");
/* harmony import */ var _comp_nav_nav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comp/nav/nav.component */ "./src/app/comp/nav/nav.component.ts");
/* harmony import */ var _comp_window_window_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./comp/window/window.component */ "./src/app/comp/window/window.component.ts");
/* harmony import */ var _git_info_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./git/info/info.component */ "./src/app/git/info/info.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _git_folders_folders_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./git/folders/folders.component */ "./src/app/git/folders/folders.component.ts");
/* harmony import */ var _git_update_update_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./git/update/update.component */ "./src/app/git/update/update.component.ts");
/* harmony import */ var _comp_table_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./comp/table/table.component */ "./src/app/comp/table/table.component.ts");
/* harmony import */ var _comp_animate_animate_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./comp/animate/animate.component */ "./src/app/comp/animate/animate.component.ts");
/* harmony import */ var _theme_vilot_vilot_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./theme/vilot/vilot.component */ "./src/app/theme/vilot/vilot.component.ts");
/* harmony import */ var _theme_yellow_yellow_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./theme/yellow/yellow.component */ "./src/app/theme/yellow/yellow.component.ts");
/* harmony import */ var _theme_editor_editor_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./theme/editor/editor.component */ "./src/app/theme/editor/editor.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var src_app_sanitaizer_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/sanitaizer.pipe */ "./src/app/sanitaizer.pipe.ts");
/* harmony import */ var src_app_services_speech__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/services/speech */ "./src/app/services/speech.ts");
/* harmony import */ var _theme_sugar_sugar_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./theme/sugar/sugar.component */ "./src/app/theme/sugar/sugar.component.ts");



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _comp_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"],
                _comp_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"],
                src_app_sanitaizer_pipe__WEBPACK_IMPORTED_MODULE_32__["SanitaizerPipe"],
                _comp_badge_badge_component__WEBPACK_IMPORTED_MODULE_8__["BadgeComponent"],
                _comp_align_align_component__WEBPACK_IMPORTED_MODULE_9__["AlignComponent"],
                _comp_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
                _comp_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_11__["ButtonsComponent"],
                _comp_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["DropdownComponent"],
                _comp_list_list_component__WEBPACK_IMPORTED_MODULE_13__["ListComponent"],
                _comp_forms_forms_component__WEBPACK_IMPORTED_MODULE_14__["FormsComponent"],
                _comp_group_group_component__WEBPACK_IMPORTED_MODULE_15__["GroupComponent"],
                _comp_panel_panel_component__WEBPACK_IMPORTED_MODULE_16__["PanelComponent"],
                _comp_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__["DialogComponent"],
                _comp_nav_nav_component__WEBPACK_IMPORTED_MODULE_18__["NavComponent"],
                _comp_window_window_component__WEBPACK_IMPORTED_MODULE_19__["WindowComponent"],
                _git_info_info_component__WEBPACK_IMPORTED_MODULE_20__["InfoComponent"],
                _git_folders_folders_component__WEBPACK_IMPORTED_MODULE_23__["FoldersComponent"],
                _git_update_update_component__WEBPACK_IMPORTED_MODULE_24__["UpdateComponent"],
                _comp_table_table_component__WEBPACK_IMPORTED_MODULE_25__["TableComponent"],
                _comp_animate_animate_component__WEBPACK_IMPORTED_MODULE_26__["AnimateComponent"],
                _theme_vilot_vilot_component__WEBPACK_IMPORTED_MODULE_27__["VilotComponent"],
                _theme_yellow_yellow_component__WEBPACK_IMPORTED_MODULE_28__["YellowComponent"],
                _theme_editor_editor_component__WEBPACK_IMPORTED_MODULE_29__["EditorComponent"],
                _theme_sugar_sugar_component__WEBPACK_IMPORTED_MODULE_34__["SugarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_31__["FilterPipeModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_30__["Ng2SearchPipeModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_22__["ClipboardModule"]
            ],
            exports: [src_app_sanitaizer_pipe__WEBPACK_IMPORTED_MODULE_32__["SanitaizerPipe"]],
            providers: [src_app_services_speech__WEBPACK_IMPORTED_MODULE_33__["SpeechRecognitionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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

module.exports = "<h2 id=\"alert\" >Alert</h2>\n<p>Alert messaging (or alert notification) is machine-to-person communication that is important or time sensitive. An alert\n  may be a calendar reminder or a notification of a new message. ... Alerting makes it possible for people to keep up with\n  the information that matters most to them.</p>\n\n<p>Conveying meaning to assistive technologies Using color to add meaning only provides a visual indication, which will not\n  be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is\n  either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional\n  text hidden with the .sr-only class.</p>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <h2>Alerts</h2>\n    <i>.as-alert .as-alert-</i> color\n    <div class=\"alert\">\n      <div class=\"as-alert as-alert-base\">Alert base</div>\n      <div class=\"as-alert as-alert-primary\">Alert primary</div>\n      <div class=\"as-alert as-alert-danger\">Alert danger</div>\n      <div class=\"as-alert as-alert-success\">Alert success</div>\n      <div class=\"as-alert as-alert-info\">Alert info</div>\n      <div class=\"as-alert as-alert-warning\">Alert warning</div>\n      <div class=\"as-alert as-alert-light\">Alert light</div>\n      <div class=\"as-alert as-alert-winner\">Alert winner</div>\n      <div class=\"as-alert as-alert-happy\">Alert happy</div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <h2>Alert Hover effects</h2>\n    <i>.as-alert-hover-</i> color\n    <div class=\"alert\">\n      <div class=\"as-alert as-alert-hover-base as-alert-base\">Alert base</div>\n      <div class=\"as-alert as-alert-hover-primary as-alert-primary\">Alert primary</div>\n      <div class=\"as-alert as-alert-hover-danger as-alert-danger\">Alert danger</div>\n      <div class=\"as-alert as-alert-hover-success as-alert-success\">Alert success</div>\n      <div class=\"as-alert as-alert-hover-info as-alert-info\">Alert info</div>\n      <div class=\"as-alert as-alert-hover-warning as-alert-warning\">Alert warning</div>\n      <div class=\"as-alert as-alert-hover-light as-alert-light\">Alert light</div>\n      <div class=\"as-alert as-alert-hover-winner as-alert-winner\">Alert winner</div>\n      <div class=\"as-alert as-alert-hover-happy as-alert-happy\">Alert happy</div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <h2>Background color</h2>\n    <i>.as-bg-</i> color\n    <div class=\"alert\">\n      <div class=\"as-alert as-bg-base\">Alert base</div>\n      <div class=\"as-alert as-bg-primary\">Alert primary</div>\n      <div class=\"as-alert as-bg-danger\">Alert danger</div>\n      <div class=\"as-alert as-bg-success\">Alert success</div>\n      <div class=\"as-alert as-bg-info\">Alert info</div>\n      <div class=\"as-alert as-bg-warning\">Alert warning</div>\n      <div class=\"as-alert as-bg-light\">Alert light</div>\n      <div class=\"as-alert as-bg-winner\">Alert winner</div>\n      <div class=\"as-alert as-bg-happy \">Alert happy</div>\n    </div>\n  </div>\n</div>\n<br>\n "

/***/ }),

/***/ "./src/app/comp/alert/alert.component.scss":
/*!*************************************************!*\
  !*** ./src/app/comp/alert/alert.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-alert {\n  padding: 10px;\n  border-radius: 5px;\n  margin: 5px;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out; }\n\n.as-alert-base {\n  border: 1px solid #29b6f6;\n  border-right: 8px solid #29b6f6; }\n\n.as-alert-primary {\n  border: 1px solid #80d8ff;\n  border-right: 8px solid #80d8ff; }\n\n.as-alert-danger {\n  border: 1px solid #ff8a80;\n  border-right: 8px solid #ff8a80; }\n\n.as-alert-success {\n  border: 1px solid #69f0ae;\n  border-right: 8px solid #69f0ae; }\n\n.as-alert-info {\n  border: 1px solid #b388ff;\n  border-right: 8px solid #b388ff; }\n\n.as-alert-warning {\n  border: 1px solid #ffd180;\n  border-right: 8px solid #ffd180; }\n\n.as-alert-light {\n  border: 1px solid #e0e0e0;\n  border-right: 8px solid #e0e0e0; }\n\n.as-alert-dark {\n  border: 1px solid #9e9e9e;\n  border-right: 8px solid #9e9e9e; }\n\n.as-alert-winner {\n  border: 1px solid #0d47a1;\n  border-right: 8px solid #0d47a1; }\n\n.as-alert-happy {\n  border: 1px solid #d81b60;\n  border-right: 8px solid #d81b60; }\n\n.as-alert-hover-base:hover {\n  background-color: #29b6f6;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-primary:hover {\n  background-color: #80d8ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-danger:hover {\n  background-color: #ff8a80;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-success:hover {\n  background-color: #69f0ae;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-info:hover {\n  background-color: #b388ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-warning:hover {\n  background-color: #ffd180;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-light:hover {\n  background-color: #e0e0e0;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-dark:hover {\n  background-color: #9e9e9e;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-winner:hover {\n  background-color: #0d47a1;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-alert-hover-happy:hover {\n  background-color: #d81b60;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease; }\n\n.as-bg-base {\n  background-color: #29b6f6;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-base {\n  background-color: #29b6f6;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #80d8ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #ff8a80;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #69f0ae;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b388ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffd180;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #9e9e9e;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #d81b60;\n  color: white;\n  border-radius: 4px; }\n\n.as-4 {\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center; }\n\n.as-right-cornor {\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9hbGVydC9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxjb21wXFxhbGVydFxcYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxvREFBMkM7RUFBM0MsNENBQTJDLEVBQzVDOztBQUVEO0VBQ0UsMEJBbkJlO0VBb0JmLGdDQXBCZSxFQXFCaEI7O0FBQ0Q7RUFDRSwwQkF0QmtCO0VBdUJsQixnQ0F2QmtCLEVBd0JuQjs7QUFDRDtFQUNFLDBCQXpCaUI7RUEwQmpCLGdDQTFCaUIsRUEyQmxCOztBQUNEO0VBQ0UsMEJBNUJrQjtFQTZCbEIsZ0NBN0JrQixFQThCbkI7O0FBQ0Q7RUFDRSwwQkEvQmU7RUFnQ2YsZ0NBaENlLEVBaUNoQjs7QUFDRDtFQUNFLDBCQWxDa0I7RUFtQ2xCLGdDQW5Da0IsRUFvQ25COztBQUNEO0VBQ0UsMEJBckNnQjtFQXNDaEIsZ0NBdENnQixFQXVDakI7O0FBQ0Q7RUFDRSwwQkF4Q2U7RUF5Q2YsZ0NBekNlLEVBMENoQjs7QUFDRDtFQUNFLDBCQTNDaUI7RUE0Q2pCLGdDQTVDaUIsRUE2Q2xCOztBQUNEO0VBQ0UsMEJBOUNnQjtFQStDaEIsZ0NBL0NnQixFQWdEakI7O0FBRUQ7RUFDRSwwQkE1RGU7RUE2RGYsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0UsMEJBbEVrQjtFQW1FbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0UsMEJBeEVpQjtFQXlFakIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0UsMEJBOUVrQjtFQStFbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0UsMEJBcEZlO0VBcUZmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLDBCQTFGa0I7RUEyRmxCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLDBCQWhHZ0I7RUFpR2hCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLDBCQXRHZTtFQXVHZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0MsRUFDckM7O0FBQ0Q7RUFDRSwwQkEzR2lCO0VBNEdqQixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0MsRUFDckM7O0FBQ0Q7RUFDRSwwQkFoSGdCO0VBaUhoQixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0MsRUFDckM7O0FBRUQ7RUFDRSwwQkFoSWU7RUFpSWYsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXJJZTtFQXNJZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBeklrQjtFQTBJbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTdJaUI7RUE4SWpCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFqSmtCO0VBa0psQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBckplO0VBc0pmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF6SmtCO0VBMEpsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBN0pnQjtFQThKaEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWpLZTtFQWtLZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBcktpQjtFQXNLakIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXpLZ0I7RUEwS2hCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkI7O0FBSUQ7RUFDRSxvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFzLWJhc2U6ICMyOWI2ZjY7XHJcbiRhcy1wcmltYXJ5OiAjODBkOGZmO1xyXG4kYXMtZGFuZ2VyOiAjZmY4YTgwO1xyXG4kYXMtc3VjY2VzczogIzY5ZjBhZTtcclxuJGFzLWluZm86ICNiMzg4ZmY7XHJcbiRhcy13YXJuaW5nOiAjZmZkMTgwO1xyXG4kYXMtbGlnaHQ6ICNlMGUwZTA7XHJcbiRhcy1kYXJrOiAjOWU5ZTllO1xyXG4kYXMtd2lubmVyOiAjMGQ0N2ExO1xyXG4kYXMtaGFwcHk6ICNkODFiNjA7XHJcblxyXG4uYXMtYWxlcnQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5hcy1hbGVydC1iYXNlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtYmFzZTtcclxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAkYXMtYmFzZTtcclxufVxyXG4uYXMtYWxlcnQtcHJpbWFyeSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXByaW1hcnk7XHJcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJGFzLXByaW1hcnk7XHJcbn1cclxuLmFzLWFsZXJ0LWRhbmdlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWRhbmdlcjtcclxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAkYXMtZGFuZ2VyO1xyXG59XHJcbi5hcy1hbGVydC1zdWNjZXNzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtc3VjY2VzcztcclxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAkYXMtc3VjY2VzcztcclxufVxyXG4uYXMtYWxlcnQtaW5mbyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWluZm87XHJcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJGFzLWluZm87XHJcbn1cclxuLmFzLWFsZXJ0LXdhcm5pbmcge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy13YXJuaW5nO1xyXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkICRhcy13YXJuaW5nO1xyXG59XHJcbi5hcy1hbGVydC1saWdodCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWxpZ2h0O1xyXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkICRhcy1saWdodDtcclxufVxyXG4uYXMtYWxlcnQtZGFyayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWRhcms7XHJcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWFsZXJ0LXdpbm5lciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXdpbm5lcjtcclxuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAkYXMtd2lubmVyO1xyXG59XHJcbi5hcy1hbGVydC1oYXBweSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWhhcHB5O1xyXG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkICRhcy1oYXBweTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Ib3ZlclxyXG4uYXMtYWxlcnQtaG92ZXItYmFzZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWJhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxufVxyXG5cclxuLmFzLWFsZXJ0LWhvdmVyLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5hcy1hbGVydC1ob3Zlci1kYW5nZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYW5nZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxufVxyXG5cclxuLmFzLWFsZXJ0LWhvdmVyLXN1Y2Nlc3M6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1zdWNjZXNzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5hcy1hbGVydC1ob3Zlci1pbmZvOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaW5mbztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG59XHJcblxyXG4uYXMtYWxlcnQtaG92ZXItd2FybmluZzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdhcm5pbmc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxufVxyXG5cclxuLmFzLWFsZXJ0LWhvdmVyLWxpZ2h0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtbGlnaHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxufVxyXG5cclxuLmFzLWFsZXJ0LWhvdmVyLWRhcms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYXJrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbn1cclxuLmFzLWFsZXJ0LWhvdmVyLXdpbm5lcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdpbm5lcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG59XHJcbi5hcy1hbGVydC1ob3Zlci1oYXBweTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWhhcHB5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5hcy1iZy1iYXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1iYXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtcHJpbWFyeTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYW5nZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXN1Y2Nlc3M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWluZm87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdhcm5pbmc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctbGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1saWdodDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFyaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy13aW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctaGFwcHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy00IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcy00OmhvdmVyIHtcclxuICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDZweCA2cHggZ2FpbnNib3JvO1xyXG59XHJcbi5hcy1yaWdodC1jb3Jub3Ige1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuIl19 */"

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

/***/ "./src/app/comp/animate/animate.component.html":
/*!*****************************************************!*\
  !*** ./src/app/comp/animate/animate.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"animate\">Animate</h2>\n<h5>Hover position</h5>\n<div class=\"row\">\n  <div (mouseover)=\"hover=true\" class=\"as-hover-position\" [ngClass]=\"{'as-hover-position-change': hover}\">\n    <span class=\"text\">If you're using the API to access an organization that enforces SAML SSO for authentication, you'll need to create a personal access token (PAT) and whitelist the token for that organization. Visit the URL specified in X-GitHub-SSO to whitelist the token for the organization.</span>\n  </div>\n</div>\n<br>\n<h5>Rotate</h5>\n<div class=\"row\">\n  <div class=\"as-2\">\n    <p class=\"as-animate as-square as-rotate\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-circle as-rotate\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-line as-rotate\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-letter as-rotate\">|</p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-square-border as-rotate\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-circle-border as-rotate\"></p>\n  </div>\n</div>\n<br>\n<h5>Rotate-Opposite</h5>\n<div class=\"row\">\n  <div class=\"as-2\">\n    <p class=\"as-animate as-square as-rotate-alter\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-circle as-rotate-alter\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-line as-rotate-alter\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-letter as-rotate-alter\">|</p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-square-border as-rotate-alter\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-circle-border as-rotate-alter\"></p>\n  </div>\n</div>\n<br>\n<h5>Opacity</h5>\n<br>\n<div class=\"row\">\n  <div class=\"as-2\">\n    <p class=\"as-animate as-square as-opacity\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-circle as-opacity\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-line as-opacity\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-letter as-opacity\">Opacity</p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-square-border as-opacity\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-circle-border as-opacity\"></p>\n  </div>\n</div>\n<br>\n<h5>Fonts</h5>\n<br>\n<div class=\"row\">\n  <div class=\"as-2\">\n    <p class=\"as-animate as-fonts\">Fonts</p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-fonts\">Fonts</p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-fonts\">Fonts</p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-fonts\">Fonts</p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-fonts\">Fonts</p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-fonts\">Fonts</p>\n  </div>\n</div>\n<h5>Height Width </h5>\n<br>\n<div class=\"row\">\n  <div class=\"as-2\">\n    <p class=\"as-animate as-square as-steps\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-circle as-steps\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-line as-steps\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-letter as-steps\">Steps</p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-square-border as-steps\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-circle-border as-steps\"></p>\n  </div>\n</div>\n<br>\n\n<h5>Height Width Steps -5</h5>\n<br>\n<div class=\"row\">\n  <div class=\"as-2\">\n    <p class=\"as-animate as-square as-steps-5\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-circle as-steps-5\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-line as-steps-5\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-letter as-steps-5\">Step</p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-square-border as-steps-5\"></p>\n  </div>\n  <div class=\"as-2\">\n    <p class=\"as-animate as-circle-border as-steps-5\"></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/animate/animate.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/comp/animate/animate.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-animate {\n  height: 70px;\n  width: 70px; }\n\n.as-square {\n  width: 50px;\n  height: 50px;\n  margin: auto;\n  display: block;\n  background-color: #80d8ff;\n  border-radius: 10px; }\n\n.as-circle {\n  width: 50px;\n  margin: auto;\n  display: block;\n  height: 50px;\n  border-top: 2px solid #69f0ae;\n  border-bottom: 2px solid #69f0ae;\n  border-radius: 100%; }\n\n.as-line {\n  width: 50px;\n  margin: auto;\n  display: block;\n  height: 5px;\n  background-color: #0d47a1;\n  border-radius: 10px; }\n\n.as-letter {\n  font-size: 14px;\n  padding: 0px;\n  font-weight: bold;\n  text-align: center;\n  color: #ff8a80; }\n\n.as-circle-border {\n  width: 50px;\n  height: 50px;\n  margin: auto;\n  display: block;\n  border: 5px solid #80d8ff;\n  border-bottom: 5px solid #e0e0e0; }\n\n.as-square-border {\n  width: 50px;\n  height: 50px;\n  margin: auto;\n  display: block;\n  border-radius: 100%;\n  border: 5px solid #d81b60;\n  border-bottom: 5px solid #e0e0e0; }\n\n.as-rotate-alter {\n  -webkit-animation-name: as-rotate;\n          animation-name: as-rotate;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n  /* or: Xms */\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  animation-direction: alternate-reverse;\n  /* or: normal */\n  -webkit-animation-timing-function: ease-out;\n          animation-timing-function: ease-out;\n  /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */\n  -webkit-animation-fill-mode: backwards;\n          animation-fill-mode: backwards;\n  /* or: backwards, both, none */\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  /* or: Xms */ }\n\n.as-rotate {\n  -webkit-animation: as-rotate 2s infinite;\n          animation: as-rotate 2s infinite; }\n\n@-webkit-keyframes as-rotate {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359deg); } }\n\n@keyframes as-rotate {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359deg); } }\n\n.as-opacity {\n  -webkit-animation: as-opacity 2s infinite;\n          animation: as-opacity 2s infinite; }\n\n@-webkit-keyframes as-opacity {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes as-opacity {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.as-steps {\n  -webkit-animation: as-steps 10s infinite alternate;\n          animation: as-steps 10s infinite alternate; }\n\n@-webkit-keyframes as-steps {\n  from {\n    height: 0px;\n    width: 0px; }\n  to {\n    height: 100px;\n    width: 100px; } }\n\n@keyframes as-steps {\n  from {\n    height: 0px;\n    width: 0px; }\n  to {\n    height: 100px;\n    width: 100px; } }\n\n.as-steps-5 {\n  -webkit-animation: as-steps 5s steps(5) infinite alternate;\n          animation: as-steps 5s steps(5) infinite alternate; }\n\n@-webkit-keyframes as-steps-5 {\n  from {\n    height: 0px;\n    width: 0px; }\n  to {\n    height: 100px;\n    width: 100px; } }\n\n@keyframes as-steps-5 {\n  from {\n    height: 0px;\n    width: 0px; }\n  to {\n    height: 100px;\n    width: 100px; } }\n\n.as-fonts {\n  text-align: center;\n  -webkit-animation: as-fonts 2s infinite alternate;\n          animation: as-fonts 2s infinite alternate; }\n\n@-webkit-keyframes as-fonts {\n  from {\n    font-size: 0px; }\n  to {\n    font-size: 18px; } }\n\n@keyframes as-fonts {\n  from {\n    font-size: 0px; }\n  to {\n    font-size: 18px; } }\n\n.as-hover-position {\n  height: 100px;\n  width: 100px;\n  background-color: #d81b60;\n  border-radius: 10px; }\n\n.as-hover-position .text {\n    display: none; }\n\n.as-hover-position-change {\n  width: 100%;\n  background-color: #0d47a1;\n  -webkit-transition: width 2s ease-in, background-color 1s ease-out;\n  transition: width 2s ease-in, background-color 1s ease-out; }\n\n.as-hover-position-change .text {\n    display: block;\n    text-align: right;\n    color: white;\n    -webkit-animation: as-opa 8s linear;\n            animation: as-opa 8s linear; }\n\n/* Standard syntax */\n\n@-webkit-keyframes as-opa {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes as-opa {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9hbmltYXRlL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcYXNwaS1jc3Mvc3JjXFxhcHBcXGNvbXBcXGFuaW1hdGVcXGFuaW1hdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUE7RUFDRSxhQUFZO0VBQ1osWUFBVyxFQUNaOztBQUNEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixhQUFZO0VBQ1osZUFBYztFQUNkLDBCQXJCa0I7RUFzQmxCLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osZUFBYztFQUNkLGFBQVk7RUFDWiw4QkEzQmtCO0VBNEJsQixpQ0E1QmtCO0VBNkJsQixvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGVBQWM7RUFDZCxZQUFXO0VBQ1gsMEJBL0JpQjtFQWdDakIsb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixlQTdDaUIsRUE4Q2xCOztBQUNEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixhQUFZO0VBQ1osZUFBYztFQUNkLDBCQXJEa0I7RUFzRGxCLGlDQWpEZ0IsRUFrRGpCOztBQUNEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixhQUFZO0VBQ1osZUFBYztFQUNkLG9CQUFtQjtFQUNuQiwwQkF0RGdCO0VBdURoQixpQ0ExRGdCLEVBMkRqQjs7QUFDRDtFQUNFLGtDQUF5QjtVQUF6QiwwQkFBeUI7RUFDekIsK0JBQXNCO1VBQXRCLHVCQUFzQjtFQUFFLGFBQWE7RUFDckMsNENBQW1DO1VBQW5DLG9DQUFtQztFQUNuQyx1Q0FBc0M7RUFBRSxnQkFBZ0I7RUFDeEQsNENBQW1DO1VBQW5DLG9DQUFtQztFQUFFLDBFQUEwRTtFQUMvRyx1Q0FBOEI7VUFBOUIsK0JBQThCO0VBQUUsK0JBQStCO0VBQy9ELDRCQUFtQjtVQUFuQixvQkFBbUI7RUFBRSxhQUFhLEVBQ25DOztBQUNEO0VBQ0UseUNBQWdDO1VBQWhDLGlDQUFnQyxFQUNqQzs7QUFFRDtFQUNFO0lBQ0UsZ0NBQStCLEVBQUE7RUFFakM7SUFDRSxrQ0FBaUMsRUFBQSxFQUFBOztBQUxyQztFQUNFO0lBQ0UsZ0NBQStCLEVBQUE7RUFFakM7SUFDRSxrQ0FBaUMsRUFBQSxFQUFBOztBQUdyQztFQUNFLDBDQUFpQztVQUFqQyxrQ0FBaUMsRUFDbEM7O0FBQ0Q7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUVaO0lBQ0UsV0FBVSxFQUFBLEVBQUE7O0FBTGQ7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUVaO0lBQ0UsV0FBVSxFQUFBLEVBQUE7O0FBR2Q7RUFDRSxtREFBMEM7VUFBMUMsMkNBQTBDLEVBQzNDOztBQUNEO0VBQ0U7SUFDRSxZQUFXO0lBQ1gsV0FBVSxFQUFBO0VBRVo7SUFDRSxjQUFhO0lBQ2IsYUFBWSxFQUFBLEVBQUE7O0FBUGhCO0VBQ0U7SUFDRSxZQUFXO0lBQ1gsV0FBVSxFQUFBO0VBRVo7SUFDRSxjQUFhO0lBQ2IsYUFBWSxFQUFBLEVBQUE7O0FBSWhCO0VBQ0UsMkRBQWtEO1VBQWxELG1EQUFrRCxFQUNuRDs7QUFDRDtFQUNFO0lBQ0UsWUFBVztJQUNYLFdBQVUsRUFBQTtFQUVaO0lBQ0UsY0FBYTtJQUNiLGFBQVksRUFBQSxFQUFBOztBQVBoQjtFQUNFO0lBQ0UsWUFBVztJQUNYLFdBQVUsRUFBQTtFQUVaO0lBQ0UsY0FBYTtJQUNiLGFBQVksRUFBQSxFQUFBOztBQUdoQjtFQUNFLG1CQUFrQjtFQUNsQixrREFBeUM7VUFBekMsMENBQXlDLEVBQzFDOztBQUNEO0VBQ0U7SUFDRSxlQUFjLEVBQUE7RUFFaEI7SUFDRSxnQkFBZSxFQUFBLEVBQUE7O0FBTG5CO0VBQ0U7SUFDRSxlQUFjLEVBQUE7RUFFaEI7SUFDRSxnQkFBZSxFQUFBLEVBQUE7O0FBR25CO0VBQ0UsY0FBYTtFQUNiLGFBQVk7RUFDWiwwQkFuSWdCO0VBb0loQixvQkFBbUIsRUFJcEI7O0FBUkQ7SUFNSSxjQUFhLEVBQ2Q7O0FBRUg7RUFDRSxZQUFXO0VBQ1gsMEJBNUlpQjtFQTZJakIsbUVBQTBEO0VBQTFELDJEQUEwRCxFQU8zRDs7QUFWRDtJQUtJLGVBQWM7SUFDZCxrQkFBaUI7SUFDakIsYUFBWTtJQUNaLG9DQUEyQjtZQUEzQiw0QkFBMkIsRUFDNUI7O0FBRUgscUJBQXFCOztBQUNyQjtFQUNFO0lBQ0UsV0FBVSxFQUFBO0VBRVo7SUFDRSxXQUFVLEVBQUEsRUFBQTs7QUFMZDtFQUNFO0lBQ0UsV0FBVSxFQUFBO0VBRVo7SUFDRSxXQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXAvYW5pbWF0ZS9hbmltYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFzLWJhc2U6ICMyOWI2ZjY7XHJcbiRhcy1wcmltYXJ5OiAjODBkOGZmO1xyXG4kYXMtZGFuZ2VyOiAjZmY4YTgwO1xyXG4kYXMtc3VjY2VzczogIzY5ZjBhZTtcclxuJGFzLWluZm86ICNiMzg4ZmY7XHJcbiRhcy13YXJuaW5nOiAjZmZkMTgwO1xyXG4kYXMtbGlnaHQ6ICNlMGUwZTA7XHJcbiRhcy1kYXJrOiAjOWU5ZTllO1xyXG4kYXMtd2lubmVyOiAjMGQ0N2ExO1xyXG4kYXMtaGFwcHk6ICNkODFiNjA7XHJcbi5hcy00IHtcclxufVxyXG5cclxuLmFzLWFuaW1hdGUge1xyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogNzBweDtcclxufVxyXG4uYXMtc3F1YXJlIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmFzLWNpcmNsZSB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuLmFzLWxpbmUge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2lubmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmFzLWxldHRlciB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICRhcy1kYW5nZXI7XHJcbn1cclxuLmFzLWNpcmNsZS1ib3JkZXIge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgJGFzLXByaW1hcnk7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICRhcy1saWdodDtcclxufVxyXG4uYXMtc3F1YXJlLWJvcmRlciB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICRhcy1oYXBweTtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgJGFzLWxpZ2h0O1xyXG59XHJcbi5hcy1yb3RhdGUtYWx0ZXIge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhcy1yb3RhdGU7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0czsgLyogb3I6IFhtcyAqL1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZS1yZXZlcnNlOyAvKiBvcjogbm9ybWFsICovXHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7IC8qIG9yOiBlYXNlLCBlYXNlLWluLCBlYXNlLWluLW91dCwgbGluZWFyLCBjdWJpYy1iZXppZXIoeDEsIHkxLCB4MiwgeTIpICovXHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYmFja3dhcmRzOyAvKiBvcjogYmFja3dhcmRzLCBib3RoLCBub25lICovXHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyczsgLyogb3I6IFhtcyAqL1xyXG59XHJcbi5hcy1yb3RhdGUge1xyXG4gIGFuaW1hdGlvbjogYXMtcm90YXRlIDJzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFzLXJvdGF0ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XHJcbiAgfVxyXG59XHJcbi5hcy1vcGFjaXR5IHtcclxuICBhbmltYXRpb246IGFzLW9wYWNpdHkgMnMgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBhcy1vcGFjaXR5IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbi5hcy1zdGVwcyB7XHJcbiAgYW5pbWF0aW9uOiBhcy1zdGVwcyAxMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgYXMtc3RlcHMge1xyXG4gIGZyb20ge1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFzLXN0ZXBzLTUge1xyXG4gIGFuaW1hdGlvbjogYXMtc3RlcHMgNXMgc3RlcHMoNSkgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgYXMtc3RlcHMtNSB7XHJcbiAgZnJvbSB7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG59XHJcbi5hcy1mb250cyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFuaW1hdGlvbjogYXMtZm9udHMgMnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgYXMtZm9udHMge1xyXG4gIGZyb20ge1xyXG4gICAgZm9udC1zaXplOiAwcHg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuLmFzLWhvdmVyLXBvc2l0aW9uIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaGFwcHk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAudGV4dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4uYXMtaG92ZXItcG9zaXRpb24tY2hhbmdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2lubmVyO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDJzIGVhc2UtaW4sIGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1vdXQ7XHJcbiAgLnRleHQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFuaW1hdGlvbjogYXMtb3BhIDhzIGxpbmVhcjtcclxuICB9XHJcbn1cclxuLyogU3RhbmRhcmQgc3ludGF4ICovXHJcbkBrZXlmcmFtZXMgYXMtb3BhIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbi8vIEBrZXlmcmFtZXMgYXMtaG92ZXItcG9zaXRpb24ge1xyXG4vLyAgIGZyb20ge1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gICAgIC8vIGhlaWdodDogMTAwcHg7XHJcbi8vICAgfVxyXG4vLyAgIHRvIHtcclxuLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/comp/animate/animate.component.ts":
/*!***************************************************!*\
  !*** ./src/app/comp/animate/animate.component.ts ***!
  \***************************************************/
/*! exports provided: AnimateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateComponent", function() { return AnimateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnimateComponent = /** @class */ (function () {
    function AnimateComponent() {
        this.hover = false;
    }
    AnimateComponent.prototype.ngOnInit = function () { };
    AnimateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-animate",
            template: __webpack_require__(/*! ./animate.component.html */ "./src/app/comp/animate/animate.component.html"),
            styles: [__webpack_require__(/*! ./animate.component.scss */ "./src/app/comp/animate/animate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimateComponent);
    return AnimateComponent;
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

module.exports = ".as-badge {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  margin: 5px;\n  padding: 4px;\n  font-size: 12px;\n  display: inline-block;\n  border-radius: 5px;\n  border: 1px solid white;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  width: 100%;\n  text-align: center; }\n\n.as-badge-base {\n  border: 1px solid #29b6f6;\n  border-right: 3px solid #29b6f6; }\n\n.as-badge-primary {\n  border: 1px solid #80d8ff;\n  border-right: 3px solid #80d8ff; }\n\n.as-badge-danger {\n  border: 1px solid #ff8a80;\n  border-right: 3px solid #ff8a80; }\n\n.as-badge-success {\n  border: 1px solid #69f0ae;\n  border-right: 3px solid #69f0ae; }\n\n.as-badge-info {\n  border: 1px solid #b388ff;\n  border-right: 3px solid #b388ff; }\n\n.as-badge-warning {\n  border: 1px solid #ffd180;\n  border-right: 3px solid #ffd180; }\n\n.as-badge-light {\n  border: 1px solid #e0e0e0;\n  border-right: 3px solid #e0e0e0; }\n\n.as-badge-dark {\n  border: 1px solid #9e9e9e;\n  border-right: 3px solid #9e9e9e; }\n\n.as-badge-winner {\n  border: 1px solid #0d47a1;\n  border-right: 3px solid #0d47a1; }\n\n.as-badge-happy {\n  border: 1px solid #d81b60;\n  border-right: 3px solid #d81b60; }\n\n.as-badge-hover-base:hover {\n  background-color: #29b6f6;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #29b6f6; }\n\n.as-badge-hover-primary:hover {\n  background-color: #80d8ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #80d8ff; }\n\n.as-badge-hover-danger:hover {\n  background-color: #ff8a80;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ff8a80; }\n\n.as-badge-hover-success:hover {\n  background-color: #69f0ae;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #69f0ae; }\n\n.as-badge-hover-info:hover {\n  background-color: #b388ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #b388ff; }\n\n.as-badge-hover-warning:hover {\n  background-color: #ffd180;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ffd180; }\n\n.as-badge-hover-light:hover {\n  background-color: #e0e0e0;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #e0e0e0; }\n\n.as-badge-hover-dark:hover {\n  background-color: #9e9e9e;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #9e9e9e; }\n\n.as-badge-hover-winner:hover {\n  background-color: #0d47a1;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #0d47a1; }\n\n.as-badge-hover-happy:hover {\n  background-color: #d81b60;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #d81b60; }\n\n.as-bg-base {\n  background-color: #29b6f6;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-base {\n  background-color: #29b6f6;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #80d8ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #ff8a80;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #69f0ae;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b388ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffd180;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #9e9e9e;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #d81b60;\n  color: white;\n  border-radius: 4px; }\n\n.as-circle-sm {\n  border-radius: 15px;\n  padding: 5px; }\n\n.as-3 {\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center; }\n\n.as-3:hover {\n  box-shadow: 0px 0px 6px 6px gainsboro; }\n\n.as-text-center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9iYWRnZS9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxjb21wXFxiYWRnZVxcYmFkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLHNCQUFxQjtFQUNyQixvREFBMkM7RUFBM0MsNENBQTJDO0VBQzNDLFlBQVc7RUFDWCxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSwwQkEzQmU7RUE0QmYsZ0NBNUJlLEVBNkJoQjs7QUFDRDtFQUNFLDBCQTlCa0I7RUErQmxCLGdDQS9Ca0IsRUFnQ25COztBQUNEO0VBQ0UsMEJBakNpQjtFQWtDakIsZ0NBbENpQixFQW1DbEI7O0FBQ0Q7RUFDRSwwQkFwQ2tCO0VBcUNsQixnQ0FyQ2tCLEVBc0NuQjs7QUFDRDtFQUNFLDBCQXZDZTtFQXdDZixnQ0F4Q2UsRUF5Q2hCOztBQUNEO0VBQ0UsMEJBMUNrQjtFQTJDbEIsZ0NBM0NrQixFQTRDbkI7O0FBQ0Q7RUFDRSwwQkE3Q2dCO0VBOENoQixnQ0E5Q2dCLEVBK0NqQjs7QUFDRDtFQUNFLDBCQWhEZTtFQWlEZixnQ0FqRGUsRUFrRGhCOztBQUNEO0VBQ0UsMEJBbkRpQjtFQW9EakIsZ0NBcERpQixFQXFEbEI7O0FBQ0Q7RUFDRSwwQkF0RGdCO0VBdURoQixnQ0F2RGdCLEVBd0RqQjs7QUFFRDtFQUNFLDBCQXBFZTtFQXFFZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBeEVlLEVBeUVoQjs7QUFFRDtFQUNFLDBCQTNFa0I7RUE0RWxCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0EvRWtCLEVBZ0ZuQjs7QUFFRDtFQUNFLDBCQWxGaUI7RUFtRmpCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0F0RmlCLEVBdUZsQjs7QUFFRDtFQUNFLDBCQXpGa0I7RUEwRmxCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0E3RmtCLEVBOEZuQjs7QUFFRDtFQUNFLDBCQWhHZTtFQWlHZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBcEdlLEVBcUdoQjs7QUFFRDtFQUNFLDBCQXZHa0I7RUF3R2xCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0EzR2tCLEVBNEduQjs7QUFFRDtFQUNFLDBCQTlHZ0I7RUErR2hCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FsSGdCLEVBbUhqQjs7QUFFRDtFQUNFLDBCQXJIZTtFQXNIZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBekhlLEVBMEhoQjs7QUFDRDtFQUNFLDBCQTNIaUI7RUE0SGpCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0EvSGlCLEVBZ0lsQjs7QUFDRDtFQUNFLDBCQWpJZ0I7RUFrSWhCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FySWdCLEVBc0lqQjs7QUFHRDtFQUNFLDBCQW5KZTtFQW9KZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBeEplO0VBeUpmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkE1SmtCO0VBNkpsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBaEtpQjtFQWlLakIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXBLa0I7RUFxS2xCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF4S2U7RUF5S2YsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTVLa0I7RUE2S2xCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFoTGdCO0VBaUxoQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBcExlO0VBcUxmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF4TGlCO0VBeUxqQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBNUxnQjtFQTZMaEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLG9CQUFtQjtFQUNuQixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxzQ0FBcUMsRUFDdEM7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wL2JhZGdlL2JhZGdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFzLWJhc2U6ICMyOWI2ZjY7XHJcbiRhcy1wcmltYXJ5OiAjODBkOGZmO1xyXG4kYXMtZGFuZ2VyOiAjZmY4YTgwO1xyXG4kYXMtc3VjY2VzczogIzY5ZjBhZTtcclxuJGFzLWluZm86ICNiMzg4ZmY7XHJcbiRhcy13YXJuaW5nOiAjZmZkMTgwO1xyXG4kYXMtbGlnaHQ6ICNlMGUwZTA7XHJcbiRhcy1kYXJrOiAjOWU5ZTllO1xyXG4kYXMtd2lubmVyOiAjMGQ0N2ExO1xyXG4kYXMtaGFwcHk6ICNkODFiNjA7XHJcbi5hcy1iYWRnZSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFzLWJhZGdlLWJhc2Uge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1iYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1iYXNlO1xyXG59XHJcbi5hcy1iYWRnZS1wcmltYXJ5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtcHJpbWFyeTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtcHJpbWFyeTtcclxufVxyXG4uYXMtYmFkZ2UtZGFuZ2VyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtZGFuZ2VyO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1kYW5nZXI7XHJcbn1cclxuLmFzLWJhZGdlLXN1Y2Nlc3Mge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG59XHJcbi5hcy1iYWRnZS1pbmZvIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtaW5mbztcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtaW5mbztcclxufVxyXG4uYXMtYmFkZ2Utd2FybmluZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbn1cclxuLmFzLWJhZGdlLWxpZ2h0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtbGlnaHQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWxpZ2h0O1xyXG59XHJcbi5hcy1iYWRnZS1kYXJrIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtZGFyaztcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtZGFyaztcclxufVxyXG4uYXMtYmFkZ2Utd2lubmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtd2lubmVyO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy13aW5uZXI7XHJcbn1cclxuLmFzLWJhZGdlLWhhcHB5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtaGFwcHk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWhhcHB5O1xyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhvdmVyXHJcbi5hcy1iYWRnZS1ob3Zlci1iYXNlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1iYXNlO1xyXG59XHJcblxyXG4uYXMtYmFkZ2UtaG92ZXItcHJpbWFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXByaW1hcnk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtcHJpbWFyeTtcclxufVxyXG5cclxuLmFzLWJhZGdlLWhvdmVyLWRhbmdlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhbmdlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1kYW5nZXI7XHJcbn1cclxuXHJcbi5hcy1iYWRnZS1ob3Zlci1zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG59XHJcblxyXG4uYXMtYmFkZ2UtaG92ZXItaW5mbzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWluZm87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtaW5mbztcclxufVxyXG5cclxuLmFzLWJhZGdlLWhvdmVyLXdhcm5pbmc6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13YXJuaW5nO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbn1cclxuXHJcbi5hcy1iYWRnZS1ob3Zlci1saWdodDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWxpZ2h0O1xyXG59XHJcblxyXG4uYXMtYmFkZ2UtaG92ZXItZGFyazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhcms7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtZGFyaztcclxufVxyXG4uYXMtYmFkZ2UtaG92ZXItd2lubmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2lubmVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXdpbm5lcjtcclxufVxyXG4uYXMtYmFkZ2UtaG92ZXItaGFwcHk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1oYXBweTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jb2xvclxyXG5cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhbmdlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaW5mbztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2FybmluZztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYXJrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXdpbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdpbm5lcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1oYXBweSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWhhcHB5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWNpcmNsZS1zbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmFzLTMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFzLTM6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDZweCBnYWluc2Jvcm87XHJcbn1cclxuLmFzLXRleHQtY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

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

module.exports = "<h2 id=\"button\">Buttons</h2>\n<p>In computing, the term button refers to any graphical control element that provides the user a simple way to trigger an event,\n  like searching for a query at a search engine, or to interact with dialog boxes, like confirming an action.</p>\n<div class=\"row\">\n  <div class=\"as-3\">\n    <h2>Button</h2>\n    <i>as-btn as-btn-border-</i>color\n    <button class=\"as-btn as-btn-border-base\">Base</button>\n    <button class=\"as-btn as-btn-border-primary\">primary</button>\n    <button class=\"as-btn as-btn-border-danger\">danger</button>\n    <button class=\"as-btn as-btn-border-success\">success</button>\n    <button class=\"as-btn as-btn-border-info\">info</button>\n    <button class=\"as-btn as-btn-border-warning\">warning</button>\n    <button class=\"as-btn as-btn-border-light\">light</button>\n    <button class=\"as-btn as-btn-border-dark\">dark</button>\n    <button class=\"as-btn as-btn-border-winner\">winner</button>\n    <button class=\"as-btn as-btn-border-happy\">happy</button>\n  </div>\n  <div class=\"as-3\">\n    <h2>Button Hover effects</h2>\n    <i>as-btn as-btn-border-</i>color <i>as-btn-hover-</i>color <br>\n    <button class=\"as-btn as-btn-border-base as-btn-hover-base\">Base</button>\n    <button class=\"as-btn as-btn-border-primary as-btn-hover-primary\">primary</button>\n    <button class=\"as-btn as-btn-border-danger as-btn-hover-danger\">danger</button>\n    <button class=\"as-btn as-btn-border-success as-btn-hover-success\">success</button>\n    <button class=\"as-btn as-btn-border-info as-btn-hover-info\">info</button>\n    <button class=\"as-btn as-btn-border-warning as-btn-hover-warning\">warning</button>\n    <button class=\"as-btn as-btn-border-light as-btn-hover-light\">light</button>\n    <button class=\"as-btn as-btn-border-dark as-btn-hover-dark\">dark</button>\n    <button class=\"as-btn as-btn-border-winner as-btn-hover-winner\">winner</button>\n    <button class=\"as-btn as-btn-border-happy as-btn-hover-happy\">happy</button>\n  </div>\n  <div class=\"as-3\">\n    <h2>Background color</h2>\n    <i>as-btn as-bg-</i>color <br>\n    <button class=\"as-btn as-bg-base\">Base</button>\n    <button class=\"as-btn as-bg-primary\">primary</button>\n    <button class=\"as-btn as-bg-danger\">danger</button>\n    <button class=\"as-btn as-bg-success\">success</button>\n    <button class=\"as-btn as-bg-info\">info</button>\n    <button class=\"as-btn as-bg-warning\">warning</button>\n    <button class=\"as-btn as-bg-light\">light</button>\n    <button class=\"as-btn as-bg-dark\">dark</button>\n    <button class=\"as-btn as-bg-winner\">winner</button>\n    <button class=\"as-btn as-bg-happy\">happy</button>\n  </div>\n  <div class=\"as-3\">\n    <h2>Button circle cornor</h2>\n    <i>as-btn as-bg-</i>color <br>\n    <button class=\"as-btn as-bg-base as-circle-sm\">Base</button>\n    <button class=\"as-btn as-bg-primary as-circle-sm\">primary</button>\n    <button class=\"as-btn as-bg-danger as-circle-sm\">danger</button>\n    <button class=\"as-btn as-bg-success as-circle-sm\">success</button>\n    <button class=\"as-btn as-bg-info as-circle-sm\">info</button>\n    <button class=\"as-btn as-bg-warning as-circle-sm\">warning</button>\n    <button class=\"as-btn as-bg-light as-circle-sm\">light</button>\n    <button class=\"as-btn as-bg-dark as-circle-sm\">dark</button>\n    <button class=\"as-btn as-bg-winner as-circle-sm\">winner</button>\n    <button class=\"as-btn as-bg-happy as-circle-sm\">happy</button></div>\n</div>\n<div class=\" \">\n  <div class=\"as-align-center\">\n    <button class=\"as-btn as-bg-primary as-btn-sm as-btn-blk\">Small <i>as-btn-sm as-btn-blk</i> </button>\n    <button class=\"as-btn as-bg-primary as-btn-md as-btn-blk\">Medium <i>as-btn-md as-btn-blk</i> </button>\n    <button class=\"as-btn as-bg-primary as-btn-lg as-btn-blk\">Large <i>as-btn-lg as-btn-blk</i> </button>\n    <button class=\"as-btn as-bg-primary as-btn-blk\">Full width Block <i>as-btn-blk</i> </button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/comp/buttons/buttons.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/comp/buttons/buttons.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-btn {\n  padding: 6px;\n  cursor: pointer;\n  border-radius: 3px;\n  margin: 5px;\n  padding: 4px;\n  font-size: 14px;\n  display: inline-block;\n  border-radius: 0px;\n  border: 1px solid white;\n  background-color: white;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  width: auto; }\n\n.as-btn-border-base {\n  border: 1px solid #29b6f6;\n  border-right: 3px solid #29b6f6; }\n\n.as-btn-border-primary {\n  border: 1px solid #80d8ff;\n  border-right: 3px solid #80d8ff; }\n\n.as-btn-border-danger {\n  border: 1px solid #ff8a80;\n  border-right: 3px solid #ff8a80; }\n\n.as-btn-border-success {\n  border: 1px solid #69f0ae;\n  border-right: 3px solid #69f0ae; }\n\n.as-btn-border-info {\n  border: 1px solid #b388ff;\n  border-right: 3px solid #b388ff; }\n\n.as-btn-border-warning {\n  border: 1px solid #ffd180;\n  border-right: 3px solid #ffd180; }\n\n.as-btn-border-light {\n  border: 1px solid #e0e0e0;\n  border-right: 3px solid #e0e0e0; }\n\n.as-btn-border-dark {\n  border: 1px solid #9e9e9e;\n  border-right: 3px solid #9e9e9e; }\n\n.as-btn-border-winner {\n  border: 1px solid #0d47a1;\n  border-right: 3px solid #0d47a1; }\n\n.as-btn-border-happy {\n  border: 1px solid #d81b60;\n  border-right: 3px solid #d81b60; }\n\n.as-btn-hover-base:hover {\n  background-color: #29b6f6;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #29b6f6; }\n\n.as-btn-hover-primary:hover {\n  background-color: #80d8ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #80d8ff; }\n\n.as-btn-hover-danger:hover {\n  background-color: #ff8a80;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ff8a80; }\n\n.as-btn-hover-success:hover {\n  background-color: #69f0ae;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #69f0ae; }\n\n.as-btn-hover-info:hover {\n  background-color: #b388ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #b388ff; }\n\n.as-btn-hover-warning:hover {\n  background-color: #ffd180;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ffd180; }\n\n.as-btn-hover-light:hover {\n  background-color: #e0e0e0;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #e0e0e0; }\n\n.as-btn-hover-dark:hover {\n  background-color: #9e9e9e;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #9e9e9e; }\n\n.as-btn-hover-winner:hover {\n  background-color: #0d47a1;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #0d47a1; }\n\n.as-btn-hover-happy:hover {\n  background-color: #d81b60;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #d81b60; }\n\n.as-bg-base {\n  background-color: #29b6f6;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #80d8ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #ff8a80;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #69f0ae;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b388ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffd180;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #9e9e9e;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #d81b60;\n  color: white;\n  border-radius: 4px; }\n\n.as-circle-sm {\n  border-radius: 15px;\n  padding: 5px; }\n\n.as-3 {\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center; }\n\n.as-3:hover {\n  box-shadow: 0px 0px 6px 6px gainsboro; }\n\n.as-text-center {\n  text-align: center; }\n\n.as-align-center {\n  margin: 0;\n  text-align: center;\n  display: block; }\n\n.as-4 {\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center; }\n\n.as-4:hover {\n  box-shadow: 0px 0px 6px 6px gainsboro; }\n\n.as-btn-sm {\n  padding: 5px; }\n\n.as-btn-md {\n  padding: 10px; }\n\n.as-btn-lg {\n  padding: 15px; }\n\n.as-btn-blk {\n  width: 100%; }\n\n.as-btn:focus {\n  outline: none;\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9idXR0b25zL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcYXNwaS1jc3Mvc3JjXFxhcHBcXGNvbXBcXGJ1dHRvbnNcXGJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLHdCQUF1QjtFQUN2QixzQkFBcUI7RUFDckIsb0RBQTJDO0VBQTNDLDRDQUEyQztFQUUzQyxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSwwQkE3QmU7RUE4QmYsZ0NBOUJlLEVBK0JoQjs7QUFDRDtFQUNFLDBCQWhDa0I7RUFpQ2xCLGdDQWpDa0IsRUFrQ25COztBQUNEO0VBQ0UsMEJBbkNpQjtFQW9DakIsZ0NBcENpQixFQXFDbEI7O0FBQ0Q7RUFDRSwwQkF0Q2tCO0VBdUNsQixnQ0F2Q2tCLEVBd0NuQjs7QUFDRDtFQUNFLDBCQXpDZTtFQTBDZixnQ0ExQ2UsRUEyQ2hCOztBQUNEO0VBQ0UsMEJBNUNrQjtFQTZDbEIsZ0NBN0NrQixFQThDbkI7O0FBQ0Q7RUFDRSwwQkEvQ2dCO0VBZ0RoQixnQ0FoRGdCLEVBaURqQjs7QUFDRDtFQUNFLDBCQWxEZTtFQW1EZixnQ0FuRGUsRUFvRGhCOztBQUNEO0VBQ0UsMEJBckRpQjtFQXNEakIsZ0NBdERpQixFQXVEbEI7O0FBQ0Q7RUFDRSwwQkF4RGdCO0VBeURoQixnQ0F6RGdCLEVBMERqQjs7QUFFRDtFQUNFLDBCQXRFZTtFQXVFZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBMUVlLEVBMkVoQjs7QUFFRDtFQUNFLDBCQTdFa0I7RUE4RWxCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FqRmtCLEVBa0ZuQjs7QUFFRDtFQUNFLDBCQXBGaUI7RUFxRmpCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0F4RmlCLEVBeUZsQjs7QUFFRDtFQUNFLDBCQTNGa0I7RUE0RmxCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0EvRmtCLEVBZ0duQjs7QUFFRDtFQUNFLDBCQWxHZTtFQW1HZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBdEdlLEVBdUdoQjs7QUFFRDtFQUNFLDBCQXpHa0I7RUEwR2xCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0E3R2tCLEVBOEduQjs7QUFFRDtFQUNFLDBCQWhIZ0I7RUFpSGhCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FwSGdCLEVBcUhqQjs7QUFFRDtFQUNFLDBCQXZIZTtFQXdIZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBM0hlLEVBNEhoQjs7QUFDRDtFQUNFLDBCQTdIaUI7RUE4SGpCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FqSWlCLEVBa0lsQjs7QUFDRDtFQUNFLDBCQW5JZ0I7RUFvSWhCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0F2SWdCLEVBd0lqQjs7QUFHRDtFQUNFLDBCQXJKZTtFQXNKZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBekprQjtFQTBKbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTdKaUI7RUE4SmpCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFqS2tCO0VBa0tsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBcktlO0VBc0tmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF6S2tCO0VBMEtsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBN0tnQjtFQThLaEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWpMZTtFQWtMZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBckxpQjtFQXNMakIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXpMZ0I7RUEwTGhCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxvQkFBbUI7RUFDbkIsYUFBWSxFQUNiOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0Usc0NBQXFDLEVBQ3RDOztBQUNEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsVUFBUztFQUNULG1CQUFrQjtFQUNsQixlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxzQ0FBcUMsRUFDdEM7O0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcC9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXMtYmFzZTogIzI5YjZmNjtcclxuJGFzLXByaW1hcnk6ICM4MGQ4ZmY7XHJcbiRhcy1kYW5nZXI6ICNmZjhhODA7XHJcbiRhcy1zdWNjZXNzOiAjNjlmMGFlO1xyXG4kYXMtaW5mbzogI2IzODhmZjtcclxuJGFzLXdhcm5pbmc6ICNmZmQxODA7XHJcbiRhcy1saWdodDogI2UwZTBlMDtcclxuJGFzLWRhcms6ICM5ZTllOWU7XHJcbiRhcy13aW5uZXI6ICMwZDQ3YTE7XHJcbiRhcy1oYXBweTogI2Q4MWI2MDtcclxuXHJcbi5hcy1idG4ge1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcclxuICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5hcy1idG4tYm9yZGVyLWJhc2Uge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1iYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1iYXNlO1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLXByaW1hcnkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLWRhbmdlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWRhbmdlcjtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtZGFuZ2VyO1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLXN1Y2Nlc3Mge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLWluZm8ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1pbmZvO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1pbmZvO1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLXdhcm5pbmcge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy13YXJuaW5nO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy13YXJuaW5nO1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLWxpZ2h0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtbGlnaHQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWxpZ2h0O1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLWRhcmsge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1kYXJrO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1kYXJrO1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLXdpbm5lciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXdpbm5lcjtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtd2lubmVyO1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLWhhcHB5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtaGFwcHk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWhhcHB5O1xyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhvdmVyXHJcbi5hcy1idG4taG92ZXItYmFzZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWJhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtYmFzZTtcclxufVxyXG5cclxuLmFzLWJ0bi1ob3Zlci1wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtcHJpbWFyeTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLWRhbmdlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhbmdlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1kYW5nZXI7XHJcbn1cclxuXHJcbi5hcy1idG4taG92ZXItc3VjY2Vzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXN1Y2Nlc3M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtc3VjY2VzcztcclxufVxyXG5cclxuLmFzLWJ0bi1ob3Zlci1pbmZvOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaW5mbztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1pbmZvO1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLXdhcm5pbmc6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13YXJuaW5nO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbn1cclxuXHJcbi5hcy1idG4taG92ZXItbGlnaHQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1saWdodDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1saWdodDtcclxufVxyXG5cclxuLmFzLWJ0bi1ob3Zlci1kYXJrOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFyaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1kYXJrO1xyXG59XHJcbi5hcy1idG4taG92ZXItd2lubmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2lubmVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXdpbm5lcjtcclxufVxyXG4uYXMtYnRuLWhvdmVyLWhhcHB5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaGFwcHk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY29sb3JcclxuXHJcbi5hcy1iZy1iYXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtcHJpbWFyeTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYW5nZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXN1Y2Nlc3M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWluZm87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdhcm5pbmc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctbGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1saWdodDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFyaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy13aW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctaGFwcHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1jaXJjbGUtc20ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5hcy0zIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcy0zOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCA2cHggZ2FpbnNib3JvO1xyXG59XHJcbi5hcy10ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcy1hbGlnbi1jZW50ZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmFzLTQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFzLTQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDZweCBnYWluc2Jvcm87XHJcbn1cclxuLmFzLWJ0bi1zbSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5hcy1idG4tbWQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmFzLWJ0bi1sZyB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmFzLWJ0bi1ibGsge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hcy1idG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufSJdfQ== */"

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

module.exports = "<h2 id=\"cards\">Cards</h2>\n<p>Cards are a convenient means of displaying content composed of different types of objects. They’re also well-suited for presenting\n  similar objects whose size or supported actions can vary considerably, like photos with captions of variable length.</p>\n<div class=\"row\">\n  <div class=\"as-card as-4 as-align-center\">\n    <div class=\"as-card-header\">\n      Cards <i>.as-card-header</i>\n    </div>\n    <div class=\"as-card-body\">\n      <i>.as-card-body</i> <br>\n      Cards are a convenient means of displaying content composed of different types of objects.\n    </div>\n    <div class=\"as-card-footer\">\n      Footer <i>.as-card-footer</i>\n      <span class=\"as-badge as-card-right\">Badge</span>\n    </div>\n  </div>\n</div>\n<br>\n<h3>:Different size of cards</h3>\n<div class=\"row\">\n  <div class=\"as-2\">\n    <div class=\"as-card\">\n      <div class=\"as-card-header\">\n        Time\n      </div>\n      <div class=\"as-card-body\">\n        <h5>10Mins</h5> <i>as-card</i>\n      </div>\n      <div class=\"as-card-footer\">\n        Data\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <div class=\"as-card\">\n      <div class=\"as-card-header\">\n        Time\n      </div>\n      <div class=\"as-card-body\">\n        <h5>10Mins</h5> <i>as-card-header</i>\n\n      </div>\n      <div class=\"as-card-footer\">\n        Data\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-card\">\n      <div class=\"as-card-header\">\n        Time\n      </div>\n      <div class=\"as-card-body\">\n        <h5>10Mins</h5> <i>as-card-body</i>\n      </div>\n      <div class=\"as-card-footer\">\n        Data\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <div class=\"as-card\">\n      <div class=\"as-card-header\">\n        Time\n      </div>\n      <div class=\"as-card-body\">\n        <h5>10Mins</h5> <i>as-card-footer</i>\n      </div>\n      <div class=\"as-card-footer\">\n        Data\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n</div>\n<h3> :Border effect</h3>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <div class=\"as-card as-card-base\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-card as-card-primary\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-card as-card-info\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n</div>\n<h3>:Background effect</h3>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <div class=\"as-card as-bg-winner\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-card  as-bg-happy\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-card as-bg-success\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n</div>\n<h3>:Hover effect</h3>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <div class=\"as-card as-bg-primary as-card-hover\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-card  as-bg-info as-card-hover\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-card as-bg-warning as-card-hover\">\n      <div class=\"as-card-header\">\n        Cards\n      </div>\n      <div class=\"as-card-body\">\n        Cards are a convenient means of displaying content composed of different types of objects.\n      </div>\n      <div class=\"as-card-footer\">\n        Footer\n        <span class=\"as-card-right\">Badge</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/card/card.component.scss":
/*!***********************************************!*\
  !*** ./src/app/comp/card/card.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-badge {\n  border-radius: 5px;\n  margin: 5px;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out; }\n\n.as-card-base {\n  border: 1px solid #29b6f6;\n  border-right: 4px solid #29b6f6; }\n\n.as-card-primary {\n  border: 1px solid #80d8ff;\n  border-right: 4px solid #80d8ff; }\n\n.as-card-danger {\n  border: 1px solid #ff8a80;\n  border-right: 4px solid #ff8a80; }\n\n.as-card-success {\n  border: 1px solid #69f0ae;\n  border-right: 4px solid #69f0ae; }\n\n.as-card-info {\n  border: 1px solid #b388ff;\n  border-right: 4px solid #b388ff; }\n\n.as-card-warning {\n  border: 1px solid #ffd180;\n  border-right: 4px solid #ffd180; }\n\n.as-card-light {\n  border: 1px solid #e0e0e0;\n  border-right: 4px solid #e0e0e0; }\n\n.as-card-dark {\n  border: 1px solid #9e9e9e;\n  border-right: 4px solid #9e9e9e; }\n\n.as-card-winner {\n  border: 1px solid #0d47a1;\n  border-right: 4px solid #0d47a1; }\n\n.as-card-happy {\n  border: 1px solid #d81b60;\n  border-right: 4px solid #d81b60; }\n\n.as-card {\n  border-radius: 10px;\n  box-shadow: 0px 0px 4px 4px gainsboro;\n  padding: 20px; }\n\n.as-card-header {\n  font-weight: bold;\n  font-size: 20px;\n  padding: 5px 0px 5px 0px;\n  border-bottom: 1px solid gainsboro; }\n\n.as-card-body {\n  padding: 5px 0px 5px 0px; }\n\n.as-card-footer {\n  font-weight: bold;\n  font-size: 16px;\n  padding: 5px 0px 5px 0px;\n  border-top: 1px solid gainsboro; }\n\n.as-align-center {\n  margin: auto;\n  display: block; }\n\n.as-card-footer > .as-card-right {\n  float: right;\n  text-align: right; }\n\n.as-bg-base {\n  background-color: #29b6f6;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-base {\n  background-color: #29b6f6;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #80d8ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #ff8a80;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #69f0ae;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b388ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffd180;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #9e9e9e;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #d81b60;\n  color: white;\n  border-radius: 4px; }\n\n.as-card-hover:hover {\n  cursor: pointer;\n  box-shadow: 0px 0px 8px 8px gainsboro; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9jYXJkL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcYXNwaS1jc3Mvc3JjXFxhcHBcXGNvbXBcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFFRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLG9EQUEyQztFQUEzQyw0Q0FBMkMsRUFDNUM7O0FBRUQ7RUFDRSwwQkFuQmU7RUFvQmYsZ0NBcEJlLEVBcUJoQjs7QUFDRDtFQUNFLDBCQXRCa0I7RUF1QmxCLGdDQXZCa0IsRUF3Qm5COztBQUNEO0VBQ0UsMEJBekJpQjtFQTBCakIsZ0NBMUJpQixFQTJCbEI7O0FBQ0Q7RUFDRSwwQkE1QmtCO0VBNkJsQixnQ0E3QmtCLEVBOEJuQjs7QUFDRDtFQUNFLDBCQS9CZTtFQWdDZixnQ0FoQ2UsRUFpQ2hCOztBQUNEO0VBQ0UsMEJBbENrQjtFQW1DbEIsZ0NBbkNrQixFQW9DbkI7O0FBQ0Q7RUFDRSwwQkFyQ2dCO0VBc0NoQixnQ0F0Q2dCLEVBdUNqQjs7QUFDRDtFQUNFLDBCQXhDZTtFQXlDZixnQ0F6Q2UsRUEwQ2hCOztBQUNEO0VBQ0UsMEJBM0NpQjtFQTRDakIsZ0NBNUNpQixFQTZDbEI7O0FBQ0Q7RUFDRSwwQkE5Q2dCO0VBK0NoQixnQ0EvQ2dCLEVBZ0RqQjs7QUFDRDtFQUNFLG9CQUFtQjtFQUNuQixzQ0FBcUM7RUFDckMsY0FBYSxFQUNkOztBQUNEO0VBQ0Usa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YseUJBQXdCO0VBQ3hCLG1DQUFrQyxFQUNuQzs7QUFDRDtFQUVFLHlCQUF3QixFQUN6Qjs7QUFDRDtFQUNFLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLHlCQUF3QjtFQUN4QixnQ0FBK0IsRUFDaEM7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osZUFBYyxFQUNmOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLDBCQXpGZTtFQTBGZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBOUZlO0VBK0ZmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFsR2tCO0VBbUdsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBdEdpQjtFQXVHakIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTFHa0I7RUEyR2xCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkE5R2U7RUErR2YsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWxIa0I7RUFtSGxCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF0SGdCO0VBdUhoQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBMUhlO0VBMkhmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkE5SGlCO0VBK0hqQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBbElnQjtFQW1JaEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2Ysc0NBQXFDLEVBQ3hDIiwiZmlsZSI6InNyYy9hcHAvY29tcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXMtYmFzZTogIzI5YjZmNjtcclxuJGFzLXByaW1hcnk6ICM4MGQ4ZmY7XHJcbiRhcy1kYW5nZXI6ICNmZjhhODA7XHJcbiRhcy1zdWNjZXNzOiAjNjlmMGFlO1xyXG4kYXMtaW5mbzogI2IzODhmZjtcclxuJGFzLXdhcm5pbmc6ICNmZmQxODA7XHJcbiRhcy1saWdodDogI2UwZTBlMDtcclxuJGFzLWRhcms6ICM5ZTllOWU7XHJcbiRhcy13aW5uZXI6ICMwZDQ3YTE7XHJcbiRhcy1oYXBweTogI2Q4MWI2MDtcclxuXHJcbi5hcy1iYWRnZSB7XHJcbi8vICAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmFzLWNhcmQtYmFzZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWJhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgJGFzLWJhc2U7XHJcbn1cclxuLmFzLWNhcmQtcHJpbWFyeSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXByaW1hcnk7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgJGFzLXByaW1hcnk7XHJcbn1cclxuLmFzLWNhcmQtZGFuZ2VyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtZGFuZ2VyO1xyXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICRhcy1kYW5nZXI7XHJcbn1cclxuLmFzLWNhcmQtc3VjY2VzcyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbn1cclxuLmFzLWNhcmQtaW5mbyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWluZm87XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgJGFzLWluZm87XHJcbn1cclxuLmFzLWNhcmQtd2FybmluZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgJGFzLXdhcm5pbmc7XHJcbn1cclxuLmFzLWNhcmQtbGlnaHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1saWdodDtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAkYXMtbGlnaHQ7XHJcbn1cclxuLmFzLWNhcmQtZGFyayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWRhcms7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWNhcmQtd2lubmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtd2lubmVyO1xyXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICRhcy13aW5uZXI7XHJcbn1cclxuLmFzLWNhcmQtaGFwcHkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1oYXBweTtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuLmFzLWNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggNHB4IGdhaW5zYm9ybztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5hcy1jYXJkLWhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG59XHJcbi5hcy1jYXJkLWJvZHkge1xyXG4gIC8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcclxufVxyXG4uYXMtY2FyZC1mb290ZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxufVxyXG4uYXMtYWxpZ24tY2VudGVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmFzLWNhcmQtZm9vdGVyID4gLmFzLWNhcmQtcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhbmdlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaW5mbztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2FybmluZztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYXJrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXdpbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdpbm5lcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1oYXBweSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWhhcHB5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWNhcmQtaG92ZXI6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCA4cHggZ2FpbnNib3JvO1xyXG59Il19 */"

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

/***/ "./src/app/comp/dialog/dialog.component.html":
/*!***************************************************!*\
  !*** ./src/app/comp/dialog/dialog.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"dialog\">Dialog</h2>\n<p>A dialog element provides: An element that is easy to show and hide, including an open boolean attribute on the element itself.\n  Two versions: a standard popover or modal version. </p>\n"

/***/ }),

/***/ "./src/app/comp/dialog/dialog.component.scss":
/*!***************************************************!*\
  !*** ./src/app/comp/dialog/dialog.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/comp/dialog/dialog.component.ts":
/*!*************************************************!*\
  !*** ./src/app/comp/dialog/dialog.component.ts ***!
  \*************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/comp/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/comp/dialog/dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/comp/dropdown/dropdown.component.html":
/*!*******************************************************!*\
  !*** ./src/app/comp/dropdown/dropdown.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"drops\">Drop down</h2>\n<p>A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list.\n  When a drop-down list is inactive, it displays a single value. When activated, it displays a list of values, from which\n  the user may select one.</p>\n\n<h2>:Select </h2>\n<div class=\"row\">\n  <div class=\"as-3\">\n    <i>.as-select .as-select-winner</i>\n    <select class=\"as-select as-select-winner\">\n      <option>Select</option>\n      <option>Select</option>\n      <option>Select</option>\n    </select>\n  </div>\n  <div class=\"as-3\">\n    <i>.as-select .as-select-happy</i>\n    <select class=\"as-select as-select-happy\">\n      <option>Select</option>\n      <option>Select</option>\n      <option>Select</option>\n    </select>\n  </div>\n  <div class=\"as-3\">\n    <i>.as-select .as-select-sm</i>\n    <select class=\"as-select as-select-sm\">\n      <option>Select</option>\n      <option>Select</option>\n      <option>Select</option>\n    </select>\n  </div>\n  <div class=\"as-3\"> <i>.as-select .as-select-lg</i>\n    <select class=\"as-select as-select-lg\">\n      <option>Select</option>\n      <option>Select</option>\n      <option>Select</option>\n    </select>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/dropdown/dropdown.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/comp/dropdown/dropdown.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-select {\n  width: 100%;\n  padding: 10px;\n  background-color: white;\n  border-radius: 5px;\n  border: 1px solid #0d47a1; }\n\n.as-select:focus {\n  box-shadow: none;\n  outline: none; }\n\n.as-select-winner {\n  border: 1px solid #0d47a1; }\n\n.as-select-happy {\n  border: 1px solid #d81b60; }\n\n.as-select-sm {\n  padding: 5px; }\n\n.as-select-lg {\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9kcm9wZG93bi9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxjb21wXFxkcm9wZG93blxcZHJvcGRvd24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxZQUFXO0VBQ1gsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsMEJBUGlCLEVBUWxCOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLGNBQWEsRUFDZDs7QUFDRDtFQUNFLDBCQWRpQixFQWVsQjs7QUFDRDtFQUNFLDBCQWhCZ0IsRUFpQmpCOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBQ0UsY0FBYSxFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcC9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcy1iYXNlOiAjMjliNmY2O1xyXG4kYXMtcHJpbWFyeTogIzgwZDhmZjtcclxuJGFzLWRhbmdlcjogI2ZmOGE4MDtcclxuJGFzLXN1Y2Nlc3M6ICM2OWYwYWU7XHJcbiRhcy1pbmZvOiAjYjM4OGZmO1xyXG4kYXMtd2FybmluZzogI2ZmZDE4MDtcclxuJGFzLWxpZ2h0OiAjZTBlMGUwO1xyXG4kYXMtZGFyazogIzllOWU5ZTtcclxuJGFzLXdpbm5lcjogIzBkNDdhMTtcclxuJGFzLWhhcHB5OiAjZDgxYjYwO1xyXG4uYXMtc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtd2lubmVyO1xyXG59XHJcbi5hcy1zZWxlY3Q6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYXMtc2VsZWN0LXdpbm5lciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXdpbm5lcjtcclxufVxyXG4uYXMtc2VsZWN0LWhhcHB5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuXHJcbi5hcy1zZWxlY3Qtc20ge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uYXMtc2VsZWN0LWxnIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbiJdfQ== */"

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

module.exports = "<h2 id=\"forms\">Forms</h2>\n<p>A form is a document with spaces in which to write or select, for a series of documents with similar contents. The documents\n  usually have the printed parts in common, except, possibly, for a serial number. Forms, when completed, may be a statement,\n  a request, an order, etc.; a check may be a form.</p>\n\n<div class=\"row\">\n  <div class=\"as-3\"></div>\n  <div class=\"as-5\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box text <i>as-input</i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input\">\n    </div>\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box password <i>as-password</i> </label>\n      <input type=\"text\" placeholder=\"as-password\" class=\"as-password\">\n    </div>\n    <div class=\"as-textarea-group\">\n      <label for=\"as-input\"> Input box textarea <i>as-textarea</i> </label>\n      <textarea name=\"\" id=\"\" rows=\"5\" placeholder=\"as-textarea\" class=\"as-textarea\"></textarea>\n    </div>\n    <div class=\"as-checkbox-group\">\n      <label class=\"as-contain\">One   <i>as-checkbox-group, as-contain,  as-checkmark</i> \n      <input type=\"checkbox\" checked=\"checked\">\n      <span class=\"as-checkmark\"></span>\n    </label>\n    </div>\n    <div class=\"as-checkbox-group\">\n      <label class=\"as-contain\">Two <i>as-checkbox-group, as-contain,  as-checkmark</i> \n        <input type=\"checkbox\" checked=\"checked\">\n        <span class=\"as-checkmark\"></span>\n      </label>\n    </div>\n    <div class=\"as-radio-group\">\n      <label class=\"as-contain-radio\">One <i>as-radio-group, as-contain-radio,  as-checkmark-radio</i>\n        <input type=\"radio\" checked=\"checked\" name=\"radio\">\n        <span class=\"as-checkmark-radio\"></span>\n      </label>\n    </div>\n    <div class=\"as-radio-group\">\n      <label class=\"as-contain-radio \">One <i>as-radio-group, as-contain-radio,  as-checkmark-radio</i> \n        <input type=\"radio\" checked=\"checked\" name=\"radio\">\n        <span class=\"as-checkmark-radio\"></span>\n      </label>\n    </div>\n  </div>\n  <div class=\"as-3\"></div>\n</div>\n\n<div class=\"as-text-center\">\n  <i>as-btn as-btn-border-</i>color <i>as-btn-hover-</i>color <br>\n  <div class=\"  as-text-center\">\n    <button class=\"as-btn as-btn-border-base as-btn-hover-base\">Base</button>\n    <button class=\"as-btn as-btn-border-primary as-btn-hover-primary\">primary</button>\n    <button class=\"as-btn as-btn-border-danger as-btn-hover-danger\">danger</button>\n    <button class=\"as-btn as-btn-border-success as-btn-hover-success\">success</button>\n    <button class=\"as-btn as-btn-border-info as-btn-hover-info\">info</button>\n    <button class=\"as-btn as-btn-border-warning as-btn-hover-warning\">warning</button>\n    <button class=\"as-btn as-btn-border-light as-btn-hover-light\">light</button>\n    <button class=\"as-btn as-btn-border-dark as-btn-hover-dark\">dark</button>\n    <button class=\"as-btn as-btn-border-winner as-btn-hover-winner\">winner</button>\n    <button class=\"as-btn as-btn-border-happy as-btn-hover-happy\">happy</button>\n    <br>\n  </div>\n</div>\n<div class=\"as-text-center\">\n  <a class=\"as-btn as-btn-border-base as-btn-hover-base\" href=\"#button\">For more buttons</a>\n</div>\n<h2>:Placeholder</h2>\n<div class=\"row\">\n  <div class=\"as-3\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box text <i>as-input | as-inp-dark</i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input  as-inp-dark\">\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box text <i>as-input | as-inp-primary</i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input as-inp-primary\">\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box text <i>as-input | as-inp-winner</i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input as-inp-winner\">\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box text <i>as-input |  as-inp-warning</i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input  as-inp-warning\">\n    </div>\n  </div>\n</div>\n\n<h2>:Animation</h2>\n<div class=\"row\">\n  <div class=\"as-3\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box text <i>as-input |  as-inp-warning | as-inp-bottom |  as-border-effect </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input as-inp-bottom as-border-effect   as-inp-warning\">\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box text <i>as-input |  as-inp-warning | as-inp-bottom | as-bg-effect </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input as-inp-bottom   as-bg-effect as-inp-warning\">\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box text <i>as-input |  as-inp-warning | as-inp-bottom | as-width-effect </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input as-inp-bottom as-width-effect   as-inp-warning\">\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box text <i>as-input |  as-inp-warning | as-inp-bottom | as-border-bottom-effect  </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input as-inp-bottom  as-border-bottom-effect  as-inp-warning\">\n    </div>\n  </div>\n</div>\n<h2> :Input Types</h2>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box Text <i>as-input | as-inp-dark</i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input  as-inp-dark\">\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box Number <i>as-input | as-inp-dark</i> </label>\n      <input type=\"number\" placeholder=\"as-input\" class=\"as-input  as-inp-dark\">\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box Password <i>as-input | as-inp-dark</i> </label>\n      <input type=\"password\" placeholder=\"as-input\" class=\"as-input  as-inp-dark\">\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box File <i>as-input | as-inp-dark</i> </label>\n      <input type=\"file\" placeholder=\"as-input\" class=\"as-input  as-inp-dark\">\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box Email <i>as-input | as-inp-dark</i> </label>\n      <input type=\"email\" placeholder=\"as-input\" class=\"as-input  as-inp-dark\">\n    </div>\n  </div>\n  <!--<div class=\"as-4\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box image <i>as-input | as-inp-dark</i> </label>\n      <input type=\"image\" placeholder=\"as-input\" class=\"as-input  as-inp-dark\">\n    </div>\n  </div>-->\n  <div class=\"as-4\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box color <i>as-input | as-inp-dark</i> </label>\n      <input type=\"color\" placeholder=\"as-input\" class=\"as-input  as-inp-dark\">\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box date <i>as-input | as-inp-dark</i> </label>\n      <input type=\"date\" placeholder=\"as-input\" class=\"as-input  as-inp-dark\">\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box week <i>as-input | as-inp-dark</i> </label>\n      <input type=\"week\" placeholder=\"as-input\" class=\"as-input  as-inp-dark\">\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box month <i>as-input | as-inp-dark</i> </label>\n      <input type=\"month\" placeholder=\"as-input\" class=\"as-input  as-inp-dark\">\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box Range <i>as-input | as-inp-dark</i> </label>\n      <input type=\"range\" placeholder=\"as-input\" class=\"as-input  as-inp-dark\">\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box Tel <i>as-input | as-inp-dark</i> </label>\n      <input type=\"tel\" placeholder=\"as-input\" class=\"as-input  as-inp-dark\">\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box URL <i>as-input | as-inp-dark</i> </label>\n      <input type=\"url\" placeholder=\"as-input\" class=\"as-input  as-inp-dark\">\n    </div>\n  </div>\n</div>\n<h2>:Disabled &amp; readonly</h2>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box text <i>as-input | as-inp-dark | as-readonly</i> </label>\n      <input type=\"text\" readonly placeholder=\"as-input :Readonly\" class=\"as-input as-readonly as-inp-dark\">\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <i>.as-btn .as-btn-blk .as-btn-border-base .as-disabled</i>\n    <button class=\"as-btn as-btn-blk as-btn-border-base   as-disabled\" disabled>Button Disabled</button>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-checkbox-group\">\n      <label class=\"as-contain\">One   <i>as-checkbox-group, as-contain,  as-checkmark</i> \n      <input type=\"checkbox\" class=\"as-disabled\" disabled  >\n      <span class=\"as-checkmark as-disabled\"></span>\n    </label>\n    </div>\n    <div class=\"as-radio-group\">\n      <label class=\"as-contain-radio\">One <i>as-radio-group, as-contain-radio,  as-checkmark-radio</i>\n        <input type=\"radio\" class=\"as-disabled\"  disabled name=\"radio\">\n        <span class=\"as-checkmark-radio as-disabled\"></span>\n      </label>\n    </div>\n  </div>\n</div>\n\n<h2>:Border</h2>\n<div class=\"row\">\n  <div class=\"as-3\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box text <i>as-input | as-inp-dark | as-inp-right </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input as-inp-right  as-inp-dark\">\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box text <i>as-input | as-inp-primary | as-inp-top</i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input as-inp-top  as-inp-primary\">\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box text <i>as-input | as-inp-winner | as-inp-left </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input as-inp-left  as-inp-winner\">\n    </div>\n  </div>\n  <div class=\"as-3\">\n    <div class=\"as-input-group\">\n      <label for=\"as-input\"> Input box text <i>as-input |  as-inp-warning | as-inp-bottom </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input as-inp-bottom   as-inp-warning\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/comp/forms/forms.component.scss":
/*!*************************************************!*\
  !*** ./src/app/comp/forms/forms.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-input {\n  margin: 10px 0px;\n  padding: 5px;\n  width: 100%;\n  -webkit-transition: width 1s ease-in-out;\n  transition: width 1s ease-in-out;\n  -webkit-transition: background-color 1s ease-in;\n  transition: background-color 1s ease-in;\n  -webkit-transition: border-bottom 1s ease-in;\n  transition: border-bottom 1s ease-in;\n  -webkit-transition: border 1s ease-in;\n  transition: border 1s ease-in; }\n\n.as-password {\n  padding: 5px;\n  margin: 5px 0px;\n  width: 100%; }\n\n.as-textarea {\n  padding: 5px;\n  margin: 5px 0px;\n  width: 100%; }\n\n.as-input::-webkit-input-placeholder {\n  color: #d81b60; }\n\n.as-input::-moz-placeholder {\n  color: #d81b60; }\n\n.as-input::-ms-input-placeholder {\n  color: #d81b60; }\n\n.as-input::placeholder {\n  color: #d81b60; }\n\n.as-password::-webkit-input-placeholder {\n  color: #0d47a1; }\n\n.as-password::-moz-placeholder {\n  color: #0d47a1; }\n\n.as-password::-ms-input-placeholder {\n  color: #0d47a1; }\n\n.as-password::placeholder {\n  color: #0d47a1; }\n\ntextarea::-webkit-input-placeholder {\n  color: #69f0ae; }\n\ntextarea::-moz-placeholder {\n  color: #69f0ae; }\n\ntextarea::-ms-input-placeholder {\n  color: #69f0ae; }\n\ntextarea::placeholder {\n  color: #69f0ae; }\n\n.as-input:focus {\n  outline: none;\n  box-shadow: none;\n  border: 2px solid #d81b60; }\n\n.as-password:focus {\n  outline: none;\n  box-shadow: none;\n  border: 2px solid #0d47a1; }\n\ntextarea:focus {\n  outline: none;\n  box-shadow: none;\n  border: 1px solid #69f0ae; }\n\n.as-checkbox {\n  background-color: white;\n  border: 1px solid black;\n  padding: 4px; }\n\n.as-contain {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 0px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default checkbox */\n\n.as-contain input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n/* Create a custom checkbox */\n\n.as-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  border-radius: 8px;\n  box-shadow: 0px 0px 4px 4px gainsboro;\n  background-color: #eee; }\n\n/* On mouse-over, add a grey background color */\n\n.as-contain:hover input ~ .as-checkmark {\n  background-color: #ccc; }\n\n/* When the checkbox is checked, add a blue background */\n\n.as-contain input:checked ~ .as-checkmark {\n  background-color: #d81b60; }\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.as-checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the checkmark when checked */\n\n.as-contain input:checked ~ .as-checkmark:after {\n  display: block; }\n\n/* Style the checkmark/indicator */\n\n.as-contain .as-checkmark:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n/* Customize the label (the as-contain-radio) */\n\n.as-contain-radio {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default radio button */\n\n.as-contain-radio input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n/* Create a custom radio button */\n\n.as-checkmark-radio {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50%; }\n\n/* On mouse-over, add a grey background color */\n\n.as-contain-radio:hover input ~ .as-checkmark-radio {\n  background-color: #ccc; }\n\n/* When the radio button is checked, add a blue background */\n\n.as-contain-radio input:checked ~ .as-checkmark-radio {\n  background-color: #0d47a1; }\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n\n.as-checkmark-radio:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the indicator (dot/circle) when checked */\n\n.as-contain-radio input:checked ~ .as-checkmark-radio:after {\n  display: block; }\n\n/* Style the indicator (dot/circle) */\n\n.as-contain-radio .as-checkmark-radio:after {\n  top: 9px;\n  left: 9px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: white; }\n\n.as-radio-group {\n  margin: 15px 0px; }\n\n.as-checkbox-group {\n  margin: 15px 0px; }\n\n.as-bg-base {\n  background-color: #29b6f6;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-base {\n  background-color: #29b6f6;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #80d8ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #ff8a80;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #69f0ae;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b388ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffd180;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #9e9e9e;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #d81b60;\n  color: white;\n  border-radius: 4px; }\n\n.as-btn {\n  padding: 6px;\n  cursor: pointer;\n  border-radius: 3px;\n  margin: 5px;\n  padding: 4px;\n  font-size: 14px;\n  display: inline-block;\n  border-radius: 0px;\n  border: 1px solid white;\n  background-color: white;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  width: auto; }\n\n.as-text-center {\n  text-align: center; }\n\n.as-btn:focus {\n  outline: none;\n  box-shadow: none; }\n\n.as-btn-border-base {\n  border: 1px solid #29b6f6;\n  border-right: 3px solid #29b6f6; }\n\n.as-btn-border-primary {\n  border: 1px solid #80d8ff;\n  border-right: 3px solid #80d8ff; }\n\n.as-btn-border-danger {\n  border: 1px solid #ff8a80;\n  border-right: 3px solid #ff8a80; }\n\n.as-btn-border-success {\n  border: 1px solid #69f0ae;\n  border-right: 3px solid #69f0ae; }\n\n.as-btn-border-info {\n  border: 1px solid #b388ff;\n  border-right: 3px solid #b388ff; }\n\n.as-btn-border-warning {\n  border: 1px solid #ffd180;\n  border-right: 3px solid #ffd180; }\n\n.as-btn-border-light {\n  border: 1px solid #e0e0e0;\n  border-right: 3px solid #e0e0e0; }\n\n.as-btn-border-dark {\n  border: 1px solid #9e9e9e;\n  border-right: 3px solid #9e9e9e; }\n\n.as-btn-border-winner {\n  border: 1px solid #0d47a1;\n  border-right: 3px solid #0d47a1; }\n\n.as-btn-border-happy {\n  border: 1px solid #d81b60;\n  border-right: 3px solid #d81b60; }\n\n.as-btn-hover-base:hover {\n  background-color: #29b6f6;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #29b6f6; }\n\n.as-btn-hover-primary:hover {\n  background-color: #80d8ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #80d8ff; }\n\n.as-btn-hover-danger:hover {\n  background-color: #ff8a80;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ff8a80; }\n\n.as-btn-hover-success:hover {\n  background-color: #69f0ae;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #69f0ae; }\n\n.as-btn-hover-info:hover {\n  background-color: #b388ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #b388ff; }\n\n.as-btn-hover-warning:hover {\n  background-color: #ffd180;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ffd180; }\n\n.as-btn-hover-light:hover {\n  background-color: #e0e0e0;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #e0e0e0; }\n\n.as-btn-hover-dark:hover {\n  background-color: #9e9e9e;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #9e9e9e; }\n\n.as-btn-hover-winner:hover {\n  background-color: #0d47a1;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #0d47a1; }\n\n.as-btn-hover-happy:hover {\n  background-color: #d81b60;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #d81b60; }\n\n.as-inp-dark:focus {\n  border: 2px solid #9e9e9e; }\n\n.as-inp-dark::-webkit-input-placeholder {\n  color: #9e9e9e; }\n\n.as-inp-dark::-moz-placeholder {\n  color: #9e9e9e; }\n\n.as-inp-dark::-ms-input-placeholder {\n  color: #9e9e9e; }\n\n.as-inp-dark::placeholder {\n  color: #9e9e9e; }\n\n.as-inp-primary:focus {\n  border: 2px solid #80d8ff; }\n\n.as-inp-primary::-webkit-input-placeholder {\n  color: #80d8ff; }\n\n.as-inp-primary::-moz-placeholder {\n  color: #80d8ff; }\n\n.as-inp-primary::-ms-input-placeholder {\n  color: #80d8ff; }\n\n.as-inp-primary::placeholder {\n  color: #80d8ff; }\n\n.as-inp-winner:focus {\n  border: 2px solid #0d47a1; }\n\n.as-inp-winner::-webkit-input-placeholder {\n  color: #0d47a1; }\n\n.as-inp-winner::-moz-placeholder {\n  color: #0d47a1; }\n\n.as-inp-winner::-ms-input-placeholder {\n  color: #0d47a1; }\n\n.as-inp-winner::placeholder {\n  color: #0d47a1; }\n\n.as-inp-happy:focus {\n  border: 2px solid #d81b60; }\n\n.as-inp-happy::-webkit-input-placeholder {\n  color: #d81b60; }\n\n.as-inp-happy::-moz-placeholder {\n  color: #d81b60; }\n\n.as-inp-happy::-ms-input-placeholder {\n  color: #d81b60; }\n\n.as-inp-happy::placeholder {\n  color: #d81b60; }\n\n.as-inp-right {\n  border: none;\n  border-right: 1px solid #9e9e9e; }\n\n.as-inp-left {\n  border: none;\n  border-left: 1px solid #9e9e9e; }\n\n.as-inp-top {\n  border: none;\n  border-top: 1px solid #9e9e9e; }\n\n.as-inp-bottom {\n  border: none;\n  border-bottom: 1px solid #9e9e9e; }\n\n.as-inp-right:focus {\n  border: none;\n  border-right: 1px solid #9e9e9e; }\n\n.as-inp-left:focus {\n  border: none;\n  border-left: 1px solid #9e9e9e; }\n\n.as-inp-top:focus {\n  border: none;\n  border-top: 1px solid #9e9e9e; }\n\n.as-inp-bottom:focus {\n  border: none;\n  border-bottom: 1px solid #9e9e9e; }\n\n.as-width-effect:focus {\n  width: 70%;\n  -webkit-transition: width 1s ease-in;\n  transition: width 1s ease-in; }\n\n.as-bg-effect:focus {\n  background-color: gainsboro;\n  -webkit-transition: background-color 1s ease-in;\n  transition: background-color 1s ease-in; }\n\n.as-border-bottom-effect:focus {\n  border-bottom: 2px solid gainsboro;\n  -webkit-transition: border-bottom 1s ease-in;\n  transition: border-bottom 1s ease-in; }\n\n.as-border-effect:focus {\n  border: 0px solid cornflowerblue;\n  -webkit-transition: border 1s ease-in;\n  transition: border 1s ease-in; }\n\n.as-disabled {\n  border: 1px solid black;\n  cursor: not-allowed;\n  background-color: white; }\n\n.as-btn-blk {\n  width: 100%; }\n\n.as-readonly {\n  border: 1px solid black;\n  cursor: not-allowed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9mb3Jtcy9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxjb21wXFxmb3Jtc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLFlBQVc7RUFDWCx5Q0FBZ0M7RUFBaEMsaUNBQWdDO0VBQ2hDLGdEQUF1QztFQUF2Qyx3Q0FBdUM7RUFDdkMsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxzQ0FBNkI7RUFBN0IsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsWUFBVyxFQUNaOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsWUFBVyxFQUNaOztBQUNEO0VBQ0UsZUFyQmdCLEVBc0JqQjs7QUFGRDtFQUNFLGVBckJnQixFQXNCakI7O0FBRkQ7RUFDRSxlQXJCZ0IsRUFzQmpCOztBQUZEO0VBQ0UsZUFyQmdCLEVBc0JqQjs7QUFDRDtFQUNFLGVBekJpQixFQTBCbEI7O0FBRkQ7RUFDRSxlQXpCaUIsRUEwQmxCOztBQUZEO0VBQ0UsZUF6QmlCLEVBMEJsQjs7QUFGRDtFQUNFLGVBekJpQixFQTBCbEI7O0FBQ0Q7RUFDRSxlQWpDa0IsRUFrQ25COztBQUZEO0VBQ0UsZUFqQ2tCLEVBa0NuQjs7QUFGRDtFQUNFLGVBakNrQixFQWtDbkI7O0FBRkQ7RUFDRSxlQWpDa0IsRUFrQ25COztBQUNEO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQiwwQkFoQ2dCLEVBaUNqQjs7QUFFRDtFQUNFLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsMEJBdkNpQixFQXdDbEI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLDBCQWxEa0IsRUFtRG5COztBQUVEO0VBQ0Usd0JBQXVCO0VBQ3ZCLHdCQUF1QjtFQUN2QixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZiwwQkFBeUI7RUFDekIsdUJBQXNCO0VBQ3RCLHNCQUFxQjtFQUNyQixrQkFBaUIsRUFDbEI7O0FBRUQseUNBQXlDOztBQUN6QztFQUNFLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsZ0JBQWU7RUFDZixVQUFTO0VBQ1QsU0FBUSxFQUNUOztBQUVELDhCQUE4Qjs7QUFDOUI7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxhQUFZO0VBQ1osWUFBVztFQUNYLG1CQUFrQjtFQUNsQixzQ0FBcUM7RUFDckMsdUJBQXNCLEVBQ3ZCOztBQUVELGdEQUFnRDs7QUFDaEQ7RUFDRSx1QkFBc0IsRUFDdkI7O0FBRUQseURBQXlEOztBQUN6RDtFQUNFLDBCQTdGZ0IsRUE4RmpCOztBQUVELDhEQUE4RDs7QUFDOUQ7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGNBQWEsRUFDZDs7QUFFRCxxQ0FBcUM7O0FBQ3JDO0VBQ0UsZUFBYyxFQUNmOztBQUVELG1DQUFtQzs7QUFDbkM7RUFDRSxVQUFTO0VBQ1QsU0FBUTtFQUNSLFdBQVU7RUFDVixhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUN6QixpQ0FBZ0M7RUFFaEMseUJBQXdCLEVBQ3pCOztBQUNELGdEQUFnRDs7QUFDaEQ7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFFZiwwQkFBeUI7RUFDekIsdUJBQXNCO0VBQ3RCLHNCQUFxQjtFQUNyQixrQkFBaUIsRUFDbEI7O0FBRUQsNkNBQTZDOztBQUM3QztFQUNFLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsZ0JBQWU7RUFDZixVQUFTO0VBQ1QsU0FBUSxFQUNUOztBQUVELGtDQUFrQzs7QUFDbEM7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxhQUFZO0VBQ1osWUFBVztFQUNYLHVCQUFzQjtFQUN0QixtQkFBa0IsRUFDbkI7O0FBRUQsZ0RBQWdEOztBQUNoRDtFQUNFLHVCQUFzQixFQUN2Qjs7QUFFRCw2REFBNkQ7O0FBQzdEO0VBQ0UsMEJBbEtpQixFQW1LbEI7O0FBRUQscUVBQXFFOztBQUNyRTtFQUNFLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsY0FBYSxFQUNkOztBQUVELGtEQUFrRDs7QUFDbEQ7RUFDRSxlQUFjLEVBQ2Y7O0FBRUQsc0NBQXNDOztBQUN0QztFQUNFLFNBQVE7RUFDUixVQUFTO0VBQ1QsV0FBVTtFQUNWLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsMEJBMU1lO0VBMk1mLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkEvTWU7RUFnTmYsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQW5Oa0I7RUFvTmxCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF2TmlCO0VBd05qQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBM05rQjtFQTRObEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQS9OZTtFQWdPZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBbk9rQjtFQW9PbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXZPZ0I7RUF3T2hCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkEzT2U7RUE0T2YsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQS9PaUI7RUFnUGpCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFuUGdCO0VBb1BoQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2Qix3QkFBdUI7RUFDdkIsc0JBQXFCO0VBQ3JCLG9EQUEyQztFQUEzQyw0Q0FBMkM7RUFFM0MsWUFBVyxFQUNaOztBQUNEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLDBCQXhSZTtFQXlSZixnQ0F6UmUsRUEwUmhCOztBQUNEO0VBQ0UsMEJBM1JrQjtFQTRSbEIsZ0NBNVJrQixFQTZSbkI7O0FBQ0Q7RUFDRSwwQkE5UmlCO0VBK1JqQixnQ0EvUmlCLEVBZ1NsQjs7QUFDRDtFQUNFLDBCQWpTa0I7RUFrU2xCLGdDQWxTa0IsRUFtU25COztBQUNEO0VBQ0UsMEJBcFNlO0VBcVNmLGdDQXJTZSxFQXNTaEI7O0FBQ0Q7RUFDRSwwQkF2U2tCO0VBd1NsQixnQ0F4U2tCLEVBeVNuQjs7QUFDRDtFQUNFLDBCQTFTZ0I7RUEyU2hCLGdDQTNTZ0IsRUE0U2pCOztBQUNEO0VBQ0UsMEJBN1NlO0VBOFNmLGdDQTlTZSxFQStTaEI7O0FBQ0Q7RUFDRSwwQkFoVGlCO0VBaVRqQixnQ0FqVGlCLEVBa1RsQjs7QUFDRDtFQUNFLDBCQW5UZ0I7RUFvVGhCLGdDQXBUZ0IsRUFxVGpCOztBQUVEO0VBQ0UsMEJBalVlO0VBa1VmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FyVWUsRUFzVWhCOztBQUVEO0VBQ0UsMEJBeFVrQjtFQXlVbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQTVVa0IsRUE2VW5COztBQUVEO0VBQ0UsMEJBL1VpQjtFQWdWakIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQW5WaUIsRUFvVmxCOztBQUVEO0VBQ0UsMEJBdFZrQjtFQXVWbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQTFWa0IsRUEyVm5COztBQUVEO0VBQ0UsMEJBN1ZlO0VBOFZmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FqV2UsRUFrV2hCOztBQUVEO0VBQ0UsMEJBcFdrQjtFQXFXbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQXhXa0IsRUF5V25COztBQUVEO0VBQ0UsMEJBM1dnQjtFQTRXaEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQS9XZ0IsRUFnWGpCOztBQUVEO0VBQ0UsMEJBbFhlO0VBbVhmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0F0WGUsRUF1WGhCOztBQUNEO0VBQ0UsMEJBeFhpQjtFQXlYakIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQTVYaUIsRUE2WGxCOztBQUNEO0VBQ0UsMEJBOVhnQjtFQStYaEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQWxZZ0IsRUFtWWpCOztBQUNEO0VBQ0UsMEJBdlllLEVBd1loQjs7QUFDRDtFQUNFLGVBMVllLEVBMlloQjs7QUFGRDtFQUNFLGVBMVllLEVBMlloQjs7QUFGRDtFQUNFLGVBMVllLEVBMlloQjs7QUFGRDtFQUNFLGVBMVllLEVBMlloQjs7QUFFRDtFQUNFLDBCQXBaa0IsRUFxWm5COztBQUNEO0VBQ0UsZUF2WmtCLEVBd1puQjs7QUFGRDtFQUNFLGVBdlprQixFQXdabkI7O0FBRkQ7RUFDRSxlQXZaa0IsRUF3Wm5COztBQUZEO0VBQ0UsZUF2WmtCLEVBd1puQjs7QUFDRDtFQUNFLDBCQW5aaUIsRUFvWmxCOztBQUNEO0VBQ0UsZUF0WmlCLEVBdVpsQjs7QUFGRDtFQUNFLGVBdFppQixFQXVabEI7O0FBRkQ7RUFDRSxlQXRaaUIsRUF1WmxCOztBQUZEO0VBQ0UsZUF0WmlCLEVBdVpsQjs7QUFDRDtFQUNFLDBCQXhaZ0IsRUF5WmpCOztBQUNEO0VBQ0UsZUEzWmdCLEVBNFpqQjs7QUFGRDtFQUNFLGVBM1pnQixFQTRaakI7O0FBRkQ7RUFDRSxlQTNaZ0IsRUE0WmpCOztBQUZEO0VBQ0UsZUEzWmdCLEVBNFpqQjs7QUFDRDtFQUNFLGFBQVk7RUFDWixnQ0FqYWUsRUFrYWhCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLCtCQXJhZSxFQXNhaEI7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osOEJBemFlLEVBMGFoQjs7QUFDRDtFQUNFLGFBQVk7RUFDWixpQ0E3YWUsRUE4YWhCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGdDQWpiZSxFQWtiaEI7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osK0JBcmJlLEVBc2JoQjs7QUFDRDtFQUNFLGFBQVk7RUFDWiw4QkF6YmUsRUEwYmhCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGlDQTdiZSxFQThiaEI7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1YscUNBQTRCO0VBQTVCLDZCQUE0QixFQUM3Qjs7QUFDRDtFQUNFLDRCQUEyQjtFQUMzQixnREFBdUM7RUFBdkMsd0NBQXVDLEVBQ3hDOztBQUVEO0VBQ0UsbUNBQWtDO0VBQ2xDLDZDQUFvQztFQUFwQyxxQ0FBb0MsRUFDckM7O0FBRUQ7RUFDRSxpQ0FBZ0M7RUFDaEMsc0NBQTZCO0VBQTdCLDhCQUE2QixFQUM5Qjs7QUFDRDtFQUNFLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0Usd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXMtYmFzZTogIzI5YjZmNjtcclxuJGFzLXByaW1hcnk6ICM4MGQ4ZmY7XHJcbiRhcy1kYW5nZXI6ICNmZjhhODA7XHJcbiRhcy1zdWNjZXNzOiAjNjlmMGFlO1xyXG4kYXMtaW5mbzogI2IzODhmZjtcclxuJGFzLXdhcm5pbmc6ICNmZmQxODA7XHJcbiRhcy1saWdodDogI2UwZTBlMDtcclxuJGFzLWRhcms6ICM5ZTllOWU7XHJcbiRhcy13aW5uZXI6ICMwZDQ3YTE7XHJcbiRhcy1oYXBweTogI2Q4MWI2MDtcclxuLmFzLWlucHV0IHtcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAxcyBlYXNlLWluO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlciAxcyBlYXNlLWluO1xyXG59XHJcbi5hcy1wYXNzd29yZCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogNXB4IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYXMtdGV4dGFyZWEge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFzLWlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICRhcy1oYXBweTtcclxufVxyXG4uYXMtcGFzc3dvcmQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGFzLXdpbm5lcjtcclxufVxyXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkYXMtc3VjY2VzcztcclxufVxyXG4uYXMtaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuXHJcbi5hcy1wYXNzd29yZDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRhcy13aW5uZXI7XHJcbn1cclxuXHJcbnRleHRhcmVhOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbn1cclxuXHJcbi5hcy1jaGVja2JveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcbi8vIC8qIFRoZSBhcy1jb250YWluICovXHJcbi5hcy1jb250YWluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cclxuLmFzLWNvbnRhaW4gaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xyXG4uYXMtY2hlY2ttYXJrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCA0cHggZ2FpbnNib3JvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4uYXMtY29udGFpbjpob3ZlciBpbnB1dCB+IC5hcy1jaGVja21hcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xyXG4uYXMtY29udGFpbiBpbnB1dDpjaGVja2VkIH4gLmFzLWNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWhhcHB5O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xyXG4uYXMtY2hlY2ttYXJrOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXHJcbi5hcy1jb250YWluIGlucHV0OmNoZWNrZWQgfiAuYXMtY2hlY2ttYXJrOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cclxuLmFzLWNvbnRhaW4gLmFzLWNoZWNrbWFyazphZnRlciB7XHJcbiAgbGVmdDogOXB4O1xyXG4gIHRvcDogNXB4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG4vKiBDdXN0b21pemUgdGhlIGxhYmVsICh0aGUgYXMtY29udGFpbi1yYWRpbykgKi9cclxuLmFzLWNvbnRhaW4tcmFkaW8ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gICBmb250LXNpemU6IDIycHg7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgcmFkaW8gYnV0dG9uICovXHJcbi5hcy1jb250YWluLXJhZGlvIGlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXHJcbi5hcy1jaGVja21hcmstcmFkaW8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4uYXMtY29udGFpbi1yYWRpbzpob3ZlciBpbnB1dCB+IC5hcy1jaGVja21hcmstcmFkaW8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi8qIFdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cclxuLmFzLWNvbnRhaW4tcmFkaW8gaW5wdXQ6Y2hlY2tlZCB+IC5hcy1jaGVja21hcmstcmFkaW8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0aGUgaW5kaWNhdG9yICh0aGUgZG90L2NpcmNsZSAtIGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xyXG4uYXMtY2hlY2ttYXJrLXJhZGlvOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBTaG93IHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpIHdoZW4gY2hlY2tlZCAqL1xyXG4uYXMtY29udGFpbi1yYWRpbyBpbnB1dDpjaGVja2VkIH4gLmFzLWNoZWNrbWFyay1yYWRpbzphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpICovXHJcbi5hcy1jb250YWluLXJhZGlvIC5hcy1jaGVja21hcmstcmFkaW86YWZ0ZXIge1xyXG4gIHRvcDogOXB4O1xyXG4gIGxlZnQ6IDlweDtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uYXMtcmFkaW8tZ3JvdXAge1xyXG4gIG1hcmdpbjogMTVweCAwcHg7XHJcbn1cclxuLmFzLWNoZWNrYm94LWdyb3VwIHtcclxuICBtYXJnaW46IDE1cHggMHB4O1xyXG59XHJcblxyXG4uYXMtYmctYmFzZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWJhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctYmFzZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWJhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXByaW1hcnk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFuZ2VyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1zdWNjZXNzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1pbmZvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXdhcm5pbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13YXJuaW5nO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtbGlnaHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhcms7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctd2lubmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2lubmVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWhhcHB5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaGFwcHk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYnRuIHtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5hcy10ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcy1idG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYXMtYnRuLWJvcmRlci1iYXNlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtYmFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtYmFzZTtcclxufVxyXG4uYXMtYnRuLWJvcmRlci1wcmltYXJ5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtcHJpbWFyeTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtcHJpbWFyeTtcclxufVxyXG4uYXMtYnRuLWJvcmRlci1kYW5nZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1kYW5nZXI7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWRhbmdlcjtcclxufVxyXG4uYXMtYnRuLWJvcmRlci1zdWNjZXNzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtc3VjY2VzcztcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtc3VjY2VzcztcclxufVxyXG4uYXMtYnRuLWJvcmRlci1pbmZvIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtaW5mbztcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtaW5mbztcclxufVxyXG4uYXMtYnRuLWJvcmRlci13YXJuaW5nIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtd2FybmluZztcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtd2FybmluZztcclxufVxyXG4uYXMtYnRuLWJvcmRlci1saWdodCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWxpZ2h0O1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1saWdodDtcclxufVxyXG4uYXMtYnRuLWJvcmRlci1kYXJrIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtZGFyaztcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtZGFyaztcclxufVxyXG4uYXMtYnRuLWJvcmRlci13aW5uZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy13aW5uZXI7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXdpbm5lcjtcclxufVxyXG4uYXMtYnRuLWJvcmRlci1oYXBweSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWhhcHB5O1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1oYXBweTtcclxufVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Ib3ZlclxyXG4uYXMtYnRuLWhvdmVyLWJhc2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWJhc2U7XHJcbn1cclxuXHJcbi5hcy1idG4taG92ZXItcHJpbWFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXByaW1hcnk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtcHJpbWFyeTtcclxufVxyXG5cclxuLmFzLWJ0bi1ob3Zlci1kYW5nZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYW5nZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtZGFuZ2VyO1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLXN1Y2Nlc3M6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1zdWNjZXNzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbn1cclxuXHJcbi5hcy1idG4taG92ZXItaW5mbzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWluZm87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtaW5mbztcclxufVxyXG5cclxuLmFzLWJ0bi1ob3Zlci13YXJuaW5nOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2FybmluZztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy13YXJuaW5nO1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLWxpZ2h0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtbGlnaHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtbGlnaHQ7XHJcbn1cclxuXHJcbi5hcy1idG4taG92ZXItZGFyazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhcms7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtZGFyaztcclxufVxyXG4uYXMtYnRuLWhvdmVyLXdpbm5lcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdpbm5lcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy13aW5uZXI7XHJcbn1cclxuLmFzLWJ0bi1ob3Zlci1oYXBweTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWhhcHB5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWhhcHB5O1xyXG59XHJcbi5hcy1pbnAtZGFyazpmb2N1cyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWlucC1kYXJrOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICRhcy1kYXJrO1xyXG59XHJcblxyXG4uYXMtaW5wLXByaW1hcnk6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG59XHJcbi5hcy1pbnAtcHJpbWFyeTo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkYXMtcHJpbWFyeTtcclxufVxyXG4uYXMtaW5wLXdpbm5lcjpmb2N1cyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGFzLXdpbm5lcjtcclxufVxyXG4uYXMtaW5wLXdpbm5lcjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkYXMtd2lubmVyO1xyXG59XHJcbi5hcy1pbnAtaGFwcHk6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRhcy1oYXBweTtcclxufVxyXG4uYXMtaW5wLWhhcHB5OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICRhcy1oYXBweTtcclxufVxyXG4uYXMtaW5wLXJpZ2h0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWlucC1sZWZ0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkYXMtZGFyaztcclxufVxyXG4uYXMtaW5wLXRvcCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYXMtZGFyaztcclxufVxyXG4uYXMtaW5wLWJvdHRvbSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYXMtZGFyaztcclxufVxyXG4uYXMtaW5wLXJpZ2h0OmZvY3VzIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWlucC1sZWZ0OmZvY3VzIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAkYXMtZGFyaztcclxufVxyXG4uYXMtaW5wLXRvcDpmb2N1cyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYXMtZGFyaztcclxufVxyXG4uYXMtaW5wLWJvdHRvbTpmb2N1cyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYXMtZGFyaztcclxufVxyXG4uYXMtd2lkdGgtZWZmZWN0OmZvY3VzIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDFzIGVhc2UtaW47XHJcbn1cclxuLmFzLWJnLWVmZmVjdDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1pbjtcclxufVxyXG5cclxuLmFzLWJvcmRlci1ib3R0b20tZWZmZWN0OmZvY3VzIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ2FpbnNib3JvO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMXMgZWFzZS1pbjtcclxufVxyXG5cclxuLmFzLWJvcmRlci1lZmZlY3Q6Zm9jdXMge1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlciAxcyBlYXNlLWluO1xyXG59XHJcbi5hcy1kaXNhYmxlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYXMtYnRuLWJsayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFzLXJlYWRvbmx5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcbiJdfQ== */"

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

/***/ "./src/app/comp/group/group.component.html":
/*!*************************************************!*\
  !*** ./src/app/comp/group/group.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"group\">Groups</h2>\n<p>Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and\n  custom file inputs.</p>\n\n<div class=\"as-g\">\n  <div class=\"as-g-9\">\n    <div class=\"as-input-group as-g-full\">\n      <label for=\"as-input\"> Input box text <i>as-g-8 | as-g-2 | as-input | as-inp-danger | as-inp-right </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input as-inp-danger\">\n    </div>\n  </div>\n  <div class=\"as-g-1\">\n    <div class=\"\">\n      <br>\n      <button class=\"as-btn as-btn-border-danger as-btn-hover-danger as-btn-sm  as-btn-blk\">danger</button>\n    </div>\n  </div>\n</div>\n<div class=\"as-g\">\n  <div class=\"as-g-8\">\n    <div class=\"as-input-group as-g-full\">\n      <label for=\"as-input\"> Input box text <i>as-g-8 | as-g-2 | as-input | as-inp-happy | as-inp-right </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input as-inp-happy\">\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <br>\n      <button class=\"as-btn as-btn-border-happy as-btn-hover-happy as-btn-sm  as-btn-blk\">happy</button>\n    </div>\n  </div>\n</div>\n<div class=\"as-g\">\n  <div class=\"as-g-7\">\n    <div class=\"as-input-group as-g-full\">\n      <label for=\"as-input\"> Input box text <i>as-g-7 | as-g-3 | as-input | as-inp-dark | as-inp-right </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input   as-inp-winner\">\n    </div>\n  </div>\n  <div class=\"as-g-3\">\n    <div class=\"\">\n      <br>\n      <button class=\"as-btn as-btn-border-winner as-btn-hover-winner as-btn-sm  as-btn-blk\">winner</button>\n    </div>\n  </div>\n</div>\n<div class=\"as-g\">\n  <div class=\"as-g-6\">\n    <div class=\"as-input-group as-g-full\">\n      <label for=\"as-input\"> Input box text <i>as-g-6 | as-g-4 | as-input | as-inp-dark | as-inp-right </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input   as-inp-primary\">\n    </div>\n  </div>\n  <div class=\"as-g-4\">\n    <div class=\"\">\n      <br>\n      <button class=\"as-btn as-btn-border-primary as-btn-hover-primary as-btn-sm  as-btn-blk\">primary</button>\n    </div>\n  </div>\n</div>\n<div class=\"as-g\">\n  <div class=\"as-g-5\">\n    <div class=\"as-input-group as-g-full\">\n      <label for=\"as-input\"> Input box text <i>as-g-5 | as-g-5 | as-input | as-inp-dark | as-inp-right </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input   as-inp-success\">\n    </div>\n  </div>\n  <div class=\"as-g-5\">\n    <div class=\"\">\n      <br>\n      <button class=\"as-btn as-btn-border-success as-btn-hover-success as-btn-sm  as-btn-blk\">success</button>\n    </div>\n  </div>\n</div>\n<h2>:Input &amp; Button Groups</h2>\n<div class=\"as-g\">\n  <div class=\"as-g-4\">\n    <div class=\"as-input-group as-g-full\">\n      <label for=\"as-input\">  <i>as-g-4     </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input   as-inp-success\">\n    </div>\n  </div>\n  <div class=\"as-g-4\">\n    <div class=\"as-input-group as-g-full\">\n      <label for=\"as-input\"> <i>as-g-4    </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input   as-inp-success\">\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-success as-btn-hover-success as-btn-sm  as-btn-blk\">success</button>\n    </div>\n  </div>\n</div>\n<div class=\"as-g\">\n  <div class=\"as-g-5\">\n    <div class=\"as-input-group as-g-full\">\n      <label for=\"as-input\">  <i>as-g-5     </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input   as-inp-primary\">\n    </div>\n  </div>\n  <div class=\"as-g-4\">\n    <div class=\"as-input-group as-g-full\">\n      <label for=\"as-input\"> <i>as-g-4   </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input   as-inp-primary\">\n    </div>\n  </div>\n  <div class=\"as-g-1\">\n    <div class=\"\">\n      <i>as-g-1</i> <br>\n      <button class=\"as-btn as-btn-border-primary as-btn-hover-primary as-btn-sm  as-btn-blk\">primary</button>\n    </div>\n  </div>\n</div>\n<div class=\"as-g\">\n  <div class=\"as-g-3\">\n    <div class=\"as-input-group as-g-full\">\n      <label for=\"as-input\">  <i>as-g-3     </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input   as-inp-happy\">\n    </div>\n  </div>\n  <div class=\"as-g-3\">\n    <div class=\"as-input-group as-g-full\">\n      <label for=\"as-input\"> <i>as-g-3   </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input   as-inp-happy\">\n    </div>\n  </div>\n  <div class=\"as-g-3\">\n    <div class=\"as-input-group as-g-full\">\n      <label for=\"as-input\"> <i>as-g-3   </i> </label>\n      <input type=\"text\" placeholder=\"as-input\" class=\"as-input   as-inp-happy\">\n    </div>\n  </div>\n  <div class=\"as-g-1\">\n    <div class=\"\">\n      <i>as-g-1</i> <br>\n      <button class=\"as-btn as-btn-border-happy as-btn-hover-happy as-btn-sm  as-btn-blk\">happy</button>\n    </div>\n  </div>\n</div>\n<div class=\"as-g\">\n  <div class=\"as-g-3\">\n    <div class=\"\">\n      <i>as-g-3</i> <br>\n      <button class=\"as-btn as-btn-border-info as-btn-hover-info as-btn-sm  as-btn-blk\">info</button>\n    </div>\n  </div>\n  <div class=\"as-g-3\">\n    <div class=\"\">\n      <i>as-g-3</i> <br>\n      <button class=\"as-btn as-btn-border-warning as-btn-hover-warning as-btn-sm  as-btn-blk\">warning</button>\n    </div>\n  </div>\n  <div class=\"as-g-3\">\n    <div class=\"\">\n      <i>as-g-3</i> <br>\n      <button class=\"as-btn as-btn-border-danger as-btn-hover-danger as-btn-sm  as-btn-blk\">danger</button>\n    </div>\n  </div>\n  <div class=\"as-g-1\">\n    <div class=\"\">\n      <i>as-g-1</i> <br>\n      <button class=\"as-btn as-btn-border-success as-btn-hover-success as-btn-sm  as-btn-blk\">success</button>\n    </div>\n  </div>\n</div>\n<div class=\"as-g\">\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-info as-btn-hover-info as-btn-sm  as-btn-blk\">info</button>\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-warning as-btn-hover-warning as-btn-sm  as-btn-blk\">warning</button>\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-danger as-btn-hover-danger as-btn-sm  as-btn-blk\">danger</button>\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-success as-btn-hover-success as-btn-sm  as-btn-blk\">success</button>\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-winner as-btn-hover-winner as-btn-sm  as-btn-blk\">winner</button>\n    </div>\n  </div>\n</div>\n<h2>:Sympol Box</h2>\n\n<div class=\"as-g\">\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-warning as-btn-hover-warning as-btn-sm  as-btn-blk\">warning</button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      <b>&gt;</b>\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-success as-btn-hover-success as-btn-sm  as-btn-blk\">success</button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      <b>&gt;</b>\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-winner as-btn-hover-winner as-btn-sm  as-btn-blk\">winner</button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      &gt;\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-danger as-btn-hover-danger as-btn-sm  as-btn-blk\">danger</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"as-g\">\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-warning as-btn-hover-warning as-btn-sm  as-btn-blk\">warning</button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      <b>&lt;</b>\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-success as-btn-hover-success as-btn-sm  as-btn-blk\">success</button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      <b>&lt;</b>\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-winner as-btn-hover-winner as-btn-sm  as-btn-blk\">winner</button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      &lt;\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-danger as-btn-hover-danger as-btn-sm  as-btn-blk\">danger</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"as-g\">\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-warning as-btn-hover-warning as-btn-sm  as-btn-blk\">warning</button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      <b>-</b>\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-success as-btn-hover-success as-btn-sm  as-btn-blk\">success</button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      <b>-</b>\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-winner as-btn-hover-winner as-btn-sm  as-btn-blk\">winner</button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      -\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>as-g-2</i> <br>\n      <button class=\"as-btn as-btn-border-danger as-btn-hover-danger as-btn-sm  as-btn-blk\">danger</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/group/group.component.scss":
/*!*************************************************!*\
  !*** ./src/app/comp/group/group.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-input {\n  margin: 10px 0px;\n  padding: 5px;\n  width: 100%;\n  -webkit-transition: width 1s ease-in-out;\n  transition: width 1s ease-in-out;\n  -webkit-transition: background-color 1s ease-in;\n  transition: background-color 1s ease-in;\n  -webkit-transition: border-bottom 1s ease-in;\n  transition: border-bottom 1s ease-in;\n  -webkit-transition: border 1s ease-in;\n  transition: border 1s ease-in; }\n\n.as-password {\n  padding: 5px;\n  margin: 5px 0px;\n  width: 100%; }\n\n.as-textarea {\n  padding: 5px;\n  margin: 5px 0px;\n  width: 100%; }\n\n.as-input::-webkit-input-placeholder {\n  color: #d81b60; }\n\n.as-input::-moz-placeholder {\n  color: #d81b60; }\n\n.as-input::-ms-input-placeholder {\n  color: #d81b60; }\n\n.as-input::placeholder {\n  color: #d81b60; }\n\n.as-password::-webkit-input-placeholder {\n  color: #0d47a1; }\n\n.as-password::-moz-placeholder {\n  color: #0d47a1; }\n\n.as-password::-ms-input-placeholder {\n  color: #0d47a1; }\n\n.as-password::placeholder {\n  color: #0d47a1; }\n\ntextarea::-webkit-input-placeholder {\n  color: #69f0ae; }\n\ntextarea::-moz-placeholder {\n  color: #69f0ae; }\n\ntextarea::-ms-input-placeholder {\n  color: #69f0ae; }\n\ntextarea::placeholder {\n  color: #69f0ae; }\n\n.as-input:focus {\n  outline: none;\n  box-shadow: none;\n  border: 2px solid #d81b60; }\n\n.as-password:focus {\n  outline: none;\n  box-shadow: none;\n  border: 2px solid #0d47a1; }\n\ntextarea:focus {\n  outline: none;\n  box-shadow: none;\n  border: 2px solid #69f0ae; }\n\n.as-checkbox {\n  background-color: white;\n  border: 1px solid black;\n  padding: 4px; }\n\n.as-contain {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 0px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default checkbox */\n\n.as-contain input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n/* Create a custom checkbox */\n\n.as-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  border-radius: 8px;\n  box-shadow: 0px 0px 4px 4px gainsboro;\n  background-color: #eee; }\n\n/* On mouse-over, add a grey background color */\n\n.as-contain:hover input ~ .as-checkmark {\n  background-color: #ccc; }\n\n/* When the checkbox is checked, add a blue background */\n\n.as-contain input:checked ~ .as-checkmark {\n  background-color: #d81b60; }\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.as-checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the checkmark when checked */\n\n.as-contain input:checked ~ .as-checkmark:after {\n  display: block; }\n\n/* Style the checkmark/indicator */\n\n.as-contain .as-checkmark:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n/* Customize the label (the as-contain-radio) */\n\n.as-contain-radio {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default radio button */\n\n.as-contain-radio input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n/* Create a custom radio button */\n\n.as-checkmark-radio {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50%; }\n\n/* On mouse-over, add a grey background color */\n\n.as-contain-radio:hover input ~ .as-checkmark-radio {\n  background-color: #ccc; }\n\n/* When the radio button is checked, add a blue background */\n\n.as-contain-radio input:checked ~ .as-checkmark-radio {\n  background-color: #0d47a1; }\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n\n.as-checkmark-radio:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the indicator (dot/circle) when checked */\n\n.as-contain-radio input:checked ~ .as-checkmark-radio:after {\n  display: block; }\n\n/* Style the indicator (dot/circle) */\n\n.as-contain-radio .as-checkmark-radio:after {\n  top: 9px;\n  left: 9px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: white; }\n\n.as-radio-group {\n  margin: 15px 0px; }\n\n.as-checkbox-group {\n  margin: 15px 0px; }\n\n.as-bg-base {\n  background-color: #29b6f6;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-base {\n  background-color: #29b6f6;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #80d8ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #ff8a80;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #69f0ae;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b388ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffd180;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #9e9e9e;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #d81b60;\n  color: white;\n  border-radius: 4px; }\n\n.as-btn {\n  padding: 6px;\n  cursor: pointer;\n  border-radius: 3px;\n  margin: 5px;\n  padding: 4px;\n  font-size: 14px;\n  display: inline-block;\n  border-radius: 0px;\n  border: 1px solid white;\n  background-color: white;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  width: auto; }\n\n.as-text-center {\n  text-align: center; }\n\n.as-btn:focus {\n  outline: none;\n  box-shadow: none; }\n\n.as-btn-border-base {\n  border: 1px solid #29b6f6;\n  border-right: 3px solid #29b6f6; }\n\n.as-btn-border-primary {\n  border: 1px solid #80d8ff;\n  border-right: 3px solid #80d8ff; }\n\n.as-btn-border-danger {\n  border: 1px solid #ff8a80;\n  border-right: 3px solid #ff8a80; }\n\n.as-btn-border-success {\n  border: 1px solid #69f0ae;\n  border-right: 3px solid #69f0ae; }\n\n.as-btn-border-info {\n  border: 1px solid #b388ff;\n  border-right: 3px solid #b388ff; }\n\n.as-btn-border-warning {\n  border: 1px solid #ffd180;\n  border-right: 3px solid #ffd180; }\n\n.as-btn-border-light {\n  border: 1px solid #e0e0e0;\n  border-right: 3px solid #e0e0e0; }\n\n.as-btn-border-dark {\n  border: 1px solid #9e9e9e;\n  border-right: 3px solid #9e9e9e; }\n\n.as-btn-border-winner {\n  border: 1px solid #0d47a1;\n  border-right: 3px solid #0d47a1; }\n\n.as-btn-border-happy {\n  border: 1px solid #d81b60;\n  border-right: 3px solid #d81b60; }\n\n.as-btn-hover-base:hover {\n  background-color: #29b6f6;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #29b6f6; }\n\n.as-btn-hover-primary:hover {\n  background-color: #80d8ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #80d8ff; }\n\n.as-btn-hover-danger:hover {\n  background-color: #ff8a80;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ff8a80; }\n\n.as-btn-hover-success:hover {\n  background-color: #69f0ae;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #69f0ae; }\n\n.as-btn-hover-info:hover {\n  background-color: #b388ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #b388ff; }\n\n.as-btn-hover-warning:hover {\n  background-color: #ffd180;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ffd180; }\n\n.as-btn-hover-light:hover {\n  background-color: #e0e0e0;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #e0e0e0; }\n\n.as-btn-hover-dark:hover {\n  background-color: #9e9e9e;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #9e9e9e; }\n\n.as-btn-hover-winner:hover {\n  background-color: #0d47a1;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #0d47a1; }\n\n.as-btn-hover-happy:hover {\n  background-color: #d81b60;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #d81b60; }\n\n.as-inp-dark:focus {\n  border: 2px solid #9e9e9e; }\n\n.as-inp-dark::-webkit-input-placeholder {\n  color: #9e9e9e; }\n\n.as-inp-dark::-moz-placeholder {\n  color: #9e9e9e; }\n\n.as-inp-dark::-ms-input-placeholder {\n  color: #9e9e9e; }\n\n.as-inp-dark::placeholder {\n  color: #9e9e9e; }\n\n.as-inp-primary:focus {\n  border: 2px solid #80d8ff; }\n\n.as-inp-primary::-webkit-input-placeholder {\n  color: #80d8ff; }\n\n.as-inp-primary::-moz-placeholder {\n  color: #80d8ff; }\n\n.as-inp-primary::-ms-input-placeholder {\n  color: #80d8ff; }\n\n.as-inp-primary::placeholder {\n  color: #80d8ff; }\n\n.as-inp-winner:focus {\n  border: 2px solid #0d47a1; }\n\n.as-inp-success::-webkit-input-placeholder {\n  color: #69f0ae; }\n\n.as-inp-success::-moz-placeholder {\n  color: #69f0ae; }\n\n.as-inp-success::-ms-input-placeholder {\n  color: #69f0ae; }\n\n.as-inp-success::placeholder {\n  color: #69f0ae; }\n\n.as-inp-success:focus {\n  border: 2px solid #69f0ae; }\n\n.as-inp-winner::-webkit-input-placeholder {\n  color: #0d47a1; }\n\n.as-inp-winner::-moz-placeholder {\n  color: #0d47a1; }\n\n.as-inp-winner::-ms-input-placeholder {\n  color: #0d47a1; }\n\n.as-inp-winner::placeholder {\n  color: #0d47a1; }\n\n.as-inp-happy:focus {\n  border: 2px solid #d81b60; }\n\n.as-inp-happy::-webkit-input-placeholder {\n  color: #d81b60; }\n\n.as-inp-happy::-moz-placeholder {\n  color: #d81b60; }\n\n.as-inp-happy::-ms-input-placeholder {\n  color: #d81b60; }\n\n.as-inp-happy::placeholder {\n  color: #d81b60; }\n\n.as-inp-right {\n  border: none;\n  border-right: 1px solid #9e9e9e; }\n\n.as-inp-left {\n  border: none;\n  border-left: 1px solid #9e9e9e; }\n\n.as-inp-top {\n  border: none;\n  border-top: 1px solid #9e9e9e; }\n\n.as-inp-bottom {\n  border: none;\n  border-bottom: 1px solid #9e9e9e; }\n\n.as-inp-right:focus {\n  border: none;\n  border-right: 1px solid #9e9e9e; }\n\n.as-inp-left:focus {\n  border: none;\n  border-left: 1px solid #9e9e9e; }\n\n.as-inp-top:focus {\n  border: none;\n  border-top: 1px solid #9e9e9e; }\n\n.as-inp-bottom:focus {\n  border: none;\n  border-bottom: 1px solid #9e9e9e; }\n\n.as-width-effect:focus {\n  width: 70%;\n  -webkit-transition: width 1s ease-in;\n  transition: width 1s ease-in; }\n\n.as-bg-effect:focus {\n  background-color: gainsboro;\n  -webkit-transition: background-color 1s ease-in;\n  transition: background-color 1s ease-in; }\n\n.as-border-bottom-effect:focus {\n  border-bottom: 2px solid gainsboro;\n  -webkit-transition: border-bottom 1s ease-in;\n  transition: border-bottom 1s ease-in; }\n\n.as-border-effect:focus {\n  border: 0px solid cornflowerblue;\n  -webkit-transition: border 1s ease-in;\n  transition: border 1s ease-in; }\n\n.as-disabled {\n  border: 1px solid black;\n  cursor: not-allowed;\n  background-color: white; }\n\n.as-btn-blk {\n  width: 100%; }\n\n.as-readonly {\n  border: 1px solid black;\n  cursor: not-allowed; }\n\n.as-btn-sm {\n  padding: 6px; }\n\n.as-btn-md {\n  padding: 11px; }\n\n.as-btn-lg {\n  padding: 16px; }\n\n.as-btn-blk {\n  width: 100%; }\n\n.as-btn:focus {\n  outline: none;\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9ncm91cC9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxjb21wXFxncm91cFxcZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLFlBQVc7RUFDWCx5Q0FBZ0M7RUFBaEMsaUNBQWdDO0VBQ2hDLGdEQUF1QztFQUF2Qyx3Q0FBdUM7RUFDdkMsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxzQ0FBNkI7RUFBN0IsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsWUFBVyxFQUNaOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsWUFBVyxFQUNaOztBQUNEO0VBQ0UsZUFyQmdCLEVBc0JqQjs7QUFGRDtFQUNFLGVBckJnQixFQXNCakI7O0FBRkQ7RUFDRSxlQXJCZ0IsRUFzQmpCOztBQUZEO0VBQ0UsZUFyQmdCLEVBc0JqQjs7QUFDRDtFQUNFLGVBekJpQixFQTBCbEI7O0FBRkQ7RUFDRSxlQXpCaUIsRUEwQmxCOztBQUZEO0VBQ0UsZUF6QmlCLEVBMEJsQjs7QUFGRDtFQUNFLGVBekJpQixFQTBCbEI7O0FBQ0Q7RUFDRSxlQWpDa0IsRUFrQ25COztBQUZEO0VBQ0UsZUFqQ2tCLEVBa0NuQjs7QUFGRDtFQUNFLGVBakNrQixFQWtDbkI7O0FBRkQ7RUFDRSxlQWpDa0IsRUFrQ25COztBQUNEO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQiwwQkFoQ2dCLEVBaUNqQjs7QUFFRDtFQUNFLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsMEJBdkNpQixFQXdDbEI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLDBCQWxEa0IsRUFtRG5COztBQUVEO0VBQ0Usd0JBQXVCO0VBQ3ZCLHdCQUF1QjtFQUN2QixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZiwwQkFBeUI7RUFDekIsdUJBQXNCO0VBQ3RCLHNCQUFxQjtFQUNyQixrQkFBaUIsRUFDbEI7O0FBRUQseUNBQXlDOztBQUN6QztFQUNFLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsZ0JBQWU7RUFDZixVQUFTO0VBQ1QsU0FBUSxFQUNUOztBQUVELDhCQUE4Qjs7QUFDOUI7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxhQUFZO0VBQ1osWUFBVztFQUNYLG1CQUFrQjtFQUNsQixzQ0FBcUM7RUFDckMsdUJBQXNCLEVBQ3ZCOztBQUVELGdEQUFnRDs7QUFDaEQ7RUFDRSx1QkFBc0IsRUFDdkI7O0FBRUQseURBQXlEOztBQUN6RDtFQUNFLDBCQTdGZ0IsRUE4RmpCOztBQUVELDhEQUE4RDs7QUFDOUQ7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGNBQWEsRUFDZDs7QUFFRCxxQ0FBcUM7O0FBQ3JDO0VBQ0UsZUFBYyxFQUNmOztBQUVELG1DQUFtQzs7QUFDbkM7RUFDRSxVQUFTO0VBQ1QsU0FBUTtFQUNSLFdBQVU7RUFDVixhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUN6QixpQ0FBZ0M7RUFFaEMseUJBQXdCLEVBQ3pCOztBQUNELGdEQUFnRDs7QUFDaEQ7RUFDRSxlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFDbkIsZ0JBQWU7RUFFZiwwQkFBeUI7RUFDekIsdUJBQXNCO0VBQ3RCLHNCQUFxQjtFQUNyQixrQkFBaUIsRUFDbEI7O0FBRUQsNkNBQTZDOztBQUM3QztFQUNFLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsZ0JBQWU7RUFDZixVQUFTO0VBQ1QsU0FBUSxFQUNUOztBQUVELGtDQUFrQzs7QUFDbEM7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxhQUFZO0VBQ1osWUFBVztFQUNYLHVCQUFzQjtFQUN0QixtQkFBa0IsRUFDbkI7O0FBRUQsZ0RBQWdEOztBQUNoRDtFQUNFLHVCQUFzQixFQUN2Qjs7QUFFRCw2REFBNkQ7O0FBQzdEO0VBQ0UsMEJBbEtpQixFQW1LbEI7O0FBRUQscUVBQXFFOztBQUNyRTtFQUNFLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsY0FBYSxFQUNkOztBQUVELGtEQUFrRDs7QUFDbEQ7RUFDRSxlQUFjLEVBQ2Y7O0FBRUQsc0NBQXNDOztBQUN0QztFQUNFLFNBQVE7RUFDUixVQUFTO0VBQ1QsV0FBVTtFQUNWLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsMEJBMU1lO0VBMk1mLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkEvTWU7RUFnTmYsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQW5Oa0I7RUFvTmxCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF2TmlCO0VBd05qQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBM05rQjtFQTRObEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQS9OZTtFQWdPZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBbk9rQjtFQW9PbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXZPZ0I7RUF3T2hCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkEzT2U7RUE0T2YsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQS9PaUI7RUFnUGpCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFuUGdCO0VBb1BoQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2Qix3QkFBdUI7RUFDdkIsc0JBQXFCO0VBQ3JCLG9EQUEyQztFQUEzQyw0Q0FBMkM7RUFFM0MsWUFBVyxFQUNaOztBQUNEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLDBCQXhSZTtFQXlSZixnQ0F6UmUsRUEwUmhCOztBQUNEO0VBQ0UsMEJBM1JrQjtFQTRSbEIsZ0NBNVJrQixFQTZSbkI7O0FBQ0Q7RUFDRSwwQkE5UmlCO0VBK1JqQixnQ0EvUmlCLEVBZ1NsQjs7QUFDRDtFQUNFLDBCQWpTa0I7RUFrU2xCLGdDQWxTa0IsRUFtU25COztBQUNEO0VBQ0UsMEJBcFNlO0VBcVNmLGdDQXJTZSxFQXNTaEI7O0FBQ0Q7RUFDRSwwQkF2U2tCO0VBd1NsQixnQ0F4U2tCLEVBeVNuQjs7QUFDRDtFQUNFLDBCQTFTZ0I7RUEyU2hCLGdDQTNTZ0IsRUE0U2pCOztBQUNEO0VBQ0UsMEJBN1NlO0VBOFNmLGdDQTlTZSxFQStTaEI7O0FBQ0Q7RUFDRSwwQkFoVGlCO0VBaVRqQixnQ0FqVGlCLEVBa1RsQjs7QUFDRDtFQUNFLDBCQW5UZ0I7RUFvVGhCLGdDQXBUZ0IsRUFxVGpCOztBQUVEO0VBQ0UsMEJBalVlO0VBa1VmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FyVWUsRUFzVWhCOztBQUVEO0VBQ0UsMEJBeFVrQjtFQXlVbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQTVVa0IsRUE2VW5COztBQUVEO0VBQ0UsMEJBL1VpQjtFQWdWakIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQW5WaUIsRUFvVmxCOztBQUVEO0VBQ0UsMEJBdFZrQjtFQXVWbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQTFWa0IsRUEyVm5COztBQUVEO0VBQ0UsMEJBN1ZlO0VBOFZmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FqV2UsRUFrV2hCOztBQUVEO0VBQ0UsMEJBcFdrQjtFQXFXbEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQXhXa0IsRUF5V25COztBQUVEO0VBQ0UsMEJBM1dnQjtFQTRXaEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQS9XZ0IsRUFnWGpCOztBQUVEO0VBQ0UsMEJBbFhlO0VBbVhmLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0F0WGUsRUF1WGhCOztBQUNEO0VBQ0UsMEJBeFhpQjtFQXlYakIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQTVYaUIsRUE2WGxCOztBQUNEO0VBQ0UsMEJBOVhnQjtFQStYaEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2Qiw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQ3BDLGdDQWxZZ0IsRUFtWWpCOztBQUNEO0VBQ0UsMEJBdlllLEVBd1loQjs7QUFDRDtFQUNFLGVBMVllLEVBMlloQjs7QUFGRDtFQUNFLGVBMVllLEVBMlloQjs7QUFGRDtFQUNFLGVBMVllLEVBMlloQjs7QUFGRDtFQUNFLGVBMVllLEVBMlloQjs7QUFFRDtFQUNFLDBCQXBaa0IsRUFxWm5COztBQUNEO0VBQ0UsZUF2WmtCLEVBd1puQjs7QUFGRDtFQUNFLGVBdlprQixFQXdabkI7O0FBRkQ7RUFDRSxlQXZaa0IsRUF3Wm5COztBQUZEO0VBQ0UsZUF2WmtCLEVBd1puQjs7QUFDRDtFQUNFLDBCQW5aaUIsRUFvWmxCOztBQUNEO0VBQ0UsZUEzWmtCLEVBNFpuQjs7QUFGRDtFQUNFLGVBM1prQixFQTRabkI7O0FBRkQ7RUFDRSxlQTNaa0IsRUE0Wm5COztBQUZEO0VBQ0UsZUEzWmtCLEVBNFpuQjs7QUFDRDtFQUNFLDBCQTlaa0IsRUErWm5COztBQUNEO0VBQ0UsZUE1WmlCLEVBNlpsQjs7QUFGRDtFQUNFLGVBNVppQixFQTZabEI7O0FBRkQ7RUFDRSxlQTVaaUIsRUE2WmxCOztBQUZEO0VBQ0UsZUE1WmlCLEVBNlpsQjs7QUFDRDtFQUNFLDBCQTlaZ0IsRUErWmpCOztBQUNEO0VBQ0UsZUFqYWdCLEVBa2FqQjs7QUFGRDtFQUNFLGVBamFnQixFQWthakI7O0FBRkQ7RUFDRSxlQWphZ0IsRUFrYWpCOztBQUZEO0VBQ0UsZUFqYWdCLEVBa2FqQjs7QUFDRDtFQUNFLGFBQVk7RUFDWixnQ0F2YWUsRUF3YWhCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLCtCQTNhZSxFQTRhaEI7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osOEJBL2FlLEVBZ2JoQjs7QUFDRDtFQUNFLGFBQVk7RUFDWixpQ0FuYmUsRUFvYmhCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGdDQXZiZSxFQXdiaEI7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osK0JBM2JlLEVBNGJoQjs7QUFDRDtFQUNFLGFBQVk7RUFDWiw4QkEvYmUsRUFnY2hCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGlDQW5jZSxFQW9jaEI7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1YscUNBQTRCO0VBQTVCLDZCQUE0QixFQUM3Qjs7QUFDRDtFQUNFLDRCQUEyQjtFQUMzQixnREFBdUM7RUFBdkMsd0NBQXVDLEVBQ3hDOztBQUVEO0VBQ0UsbUNBQWtDO0VBQ2xDLDZDQUFvQztFQUFwQyxxQ0FBb0MsRUFDckM7O0FBRUQ7RUFDRSxpQ0FBZ0M7RUFDaEMsc0NBQTZCO0VBQTdCLDhCQUE2QixFQUM5Qjs7QUFDRDtFQUNFLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0Usd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUNwQjs7QUFDRDtFQUNFLGFBQVksRUFDYjs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFDRDtFQUNFLGNBQWE7RUFDYixpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wL2dyb3VwL2dyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFzLWJhc2U6ICMyOWI2ZjY7XHJcbiRhcy1wcmltYXJ5OiAjODBkOGZmO1xyXG4kYXMtZGFuZ2VyOiAjZmY4YTgwO1xyXG4kYXMtc3VjY2VzczogIzY5ZjBhZTtcclxuJGFzLWluZm86ICNiMzg4ZmY7XHJcbiRhcy13YXJuaW5nOiAjZmZkMTgwO1xyXG4kYXMtbGlnaHQ6ICNlMGUwZTA7XHJcbiRhcy1kYXJrOiAjOWU5ZTllO1xyXG4kYXMtd2lubmVyOiAjMGQ0N2ExO1xyXG4kYXMtaGFwcHk6ICNkODFiNjA7XHJcbi5hcy1pbnB1dCB7XHJcbiAgbWFyZ2luOiAxMHB4IDBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMXMgZWFzZS1pbjtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgMXMgZWFzZS1pbjtcclxufVxyXG4uYXMtcGFzc3dvcmQge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFzLXRleHRhcmVhIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiA1cHggMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hcy1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkYXMtaGFwcHk7XHJcbn1cclxuLmFzLXBhc3N3b3JkOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICRhcy13aW5uZXI7XHJcbn1cclxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGFzLXN1Y2Nlc3M7XHJcbn1cclxuLmFzLWlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGFzLWhhcHB5O1xyXG59XHJcblxyXG4uYXMtcGFzc3dvcmQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkYXMtd2lubmVyO1xyXG59XHJcblxyXG50ZXh0YXJlYTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG59XHJcblxyXG4uYXMtY2hlY2tib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG4vLyAvKiBUaGUgYXMtY29udGFpbiAqL1xyXG4uYXMtY29udGFpbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXHJcbi5hcy1jb250YWluIGlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cclxuLmFzLWNoZWNrbWFyayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggNHB4IGdhaW5zYm9ybztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcblxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuLmFzLWNvbnRhaW46aG92ZXIgaW5wdXQgfiAuYXMtY2hlY2ttYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cclxuLmFzLWNvbnRhaW4gaW5wdXQ6Y2hlY2tlZCB+IC5hcy1jaGVja21hcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmFzLWNoZWNrbWFyazphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xyXG4uYXMtY29udGFpbiBpbnB1dDpjaGVja2VkIH4gLmFzLWNoZWNrbWFyazphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXHJcbi5hcy1jb250YWluIC5hcy1jaGVja21hcms6YWZ0ZXIge1xyXG4gIGxlZnQ6IDlweDtcclxuICB0b3A6IDVweDtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuLyogQ3VzdG9taXplIHRoZSBsYWJlbCAodGhlIGFzLWNvbnRhaW4tcmFkaW8pICovXHJcbi5hcy1jb250YWluLXJhZGlvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHJhZGlvIGJ1dHRvbiAqL1xyXG4uYXMtY29udGFpbi1yYWRpbyBpbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgY3VzdG9tIHJhZGlvIGJ1dHRvbiAqL1xyXG4uYXMtY2hlY2ttYXJrLXJhZGlvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuLmFzLWNvbnRhaW4tcmFkaW86aG92ZXIgaW5wdXQgfiAuYXMtY2hlY2ttYXJrLXJhZGlvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4vKiBXaGVuIHRoZSByYWRpbyBidXR0b24gaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXHJcbi5hcy1jb250YWluLXJhZGlvIGlucHV0OmNoZWNrZWQgfiAuYXMtY2hlY2ttYXJrLXJhZGlvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2lubmVyO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGluZGljYXRvciAodGhlIGRvdC9jaXJjbGUgLSBoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmFzLWNoZWNrbWFyay1yYWRpbzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSB3aGVuIGNoZWNrZWQgKi9cclxuLmFzLWNvbnRhaW4tcmFkaW8gaW5wdXQ6Y2hlY2tlZCB+IC5hcy1jaGVja21hcmstcmFkaW86YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xyXG4uYXMtY29udGFpbi1yYWRpbyAuYXMtY2hlY2ttYXJrLXJhZGlvOmFmdGVyIHtcclxuICB0b3A6IDlweDtcclxuICBsZWZ0OiA5cHg7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLmFzLXJhZGlvLWdyb3VwIHtcclxuICBtYXJnaW46IDE1cHggMHB4O1xyXG59XHJcbi5hcy1jaGVja2JveC1ncm91cCB7XHJcbiAgbWFyZ2luOiAxNXB4IDBweDtcclxufVxyXG5cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhbmdlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaW5mbztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2FybmluZztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYXJrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXdpbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdpbm5lcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1oYXBweSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWhhcHB5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJ0biB7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0O1xyXG4gIC8vICAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4uYXMtdGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYXMtYnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItYmFzZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWJhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWJhc2U7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItcHJpbWFyeSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXByaW1hcnk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXByaW1hcnk7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItZGFuZ2VyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtZGFuZ2VyO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1kYW5nZXI7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItc3VjY2VzcyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItaW5mbyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWluZm87XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWluZm87XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItd2FybmluZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItbGlnaHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1saWdodDtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtbGlnaHQ7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItZGFyayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWRhcms7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItd2lubmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtd2lubmVyO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy13aW5uZXI7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItaGFwcHkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1oYXBweTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSG92ZXJcclxuLmFzLWJ0bi1ob3Zlci1iYXNlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1iYXNlO1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXByaW1hcnk7XHJcbn1cclxuXHJcbi5hcy1idG4taG92ZXItZGFuZ2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFuZ2VyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWRhbmdlcjtcclxufVxyXG5cclxuLmFzLWJ0bi1ob3Zlci1zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLWluZm86aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1pbmZvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWluZm87XHJcbn1cclxuXHJcbi5hcy1idG4taG92ZXItd2FybmluZzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdhcm5pbmc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtd2FybmluZztcclxufVxyXG5cclxuLmFzLWJ0bi1ob3Zlci1saWdodDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWxpZ2h0O1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLWRhcms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYXJrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWJ0bi1ob3Zlci13aW5uZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtd2lubmVyO1xyXG59XHJcbi5hcy1idG4taG92ZXItaGFwcHk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1oYXBweTtcclxufVxyXG4uYXMtaW5wLWRhcms6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRhcy1kYXJrO1xyXG59XHJcbi5hcy1pbnAtZGFyazo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkYXMtZGFyaztcclxufVxyXG5cclxuLmFzLWlucC1wcmltYXJ5OmZvY3VzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkYXMtcHJpbWFyeTtcclxufVxyXG4uYXMtaW5wLXByaW1hcnk6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGFzLXByaW1hcnk7XHJcbn1cclxuLmFzLWlucC13aW5uZXI6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRhcy13aW5uZXI7XHJcbn1cclxuLmFzLWlucC1zdWNjZXNzOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICRhcy1zdWNjZXNzO1xyXG59XHJcbi5hcy1pbnAtc3VjY2Vzczpmb2N1cyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbn1cclxuLmFzLWlucC13aW5uZXI6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGFzLXdpbm5lcjtcclxufVxyXG4uYXMtaW5wLWhhcHB5OmZvY3VzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuLmFzLWlucC1oYXBweTo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkYXMtaGFwcHk7XHJcbn1cclxuLmFzLWlucC1yaWdodCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRhcy1kYXJrO1xyXG59XHJcbi5hcy1pbnAtbGVmdCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWlucC10b3Age1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWlucC1ib3R0b20ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWlucC1yaWdodDpmb2N1cyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRhcy1kYXJrO1xyXG59XHJcbi5hcy1pbnAtbGVmdDpmb2N1cyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWlucC10b3A6Zm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWlucC1ib3R0b206Zm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLXdpZHRoLWVmZmVjdDpmb2N1cyB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLWluO1xyXG59XHJcbi5hcy1iZy1lZmZlY3Q6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5hcy1ib3JkZXItYm90dG9tLWVmZmVjdDpmb2N1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdhaW5zYm9ybztcclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDFzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5hcy1ib3JkZXItZWZmZWN0OmZvY3VzIHtcclxuICBib3JkZXI6IDBweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgMXMgZWFzZS1pbjtcclxufVxyXG4uYXMtZGlzYWJsZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmFzLWJ0bi1ibGsge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hcy1yZWFkb25seSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG4uYXMtYnRuLXNtIHtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuLmFzLWJ0bi1tZCB7XHJcbiAgcGFkZGluZzogMTFweDtcclxufVxyXG4uYXMtYnRuLWxnIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uYXMtYnRuLWJsayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFzLWJ0bjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/comp/group/group.component.ts":
/*!***********************************************!*\
  !*** ./src/app/comp/group/group.component.ts ***!
  \***********************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GroupComponent = /** @class */ (function () {
    function GroupComponent() {
    }
    GroupComponent.prototype.ngOnInit = function () {
    };
    GroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/comp/group/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.scss */ "./src/app/comp/group/group.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./src/app/comp/list/list.component.html":
/*!***********************************************!*\
  !*** ./src/app/comp/list/list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"list\">\n  List</h2>\n<p>\n  In computer science, a list or sequence is an abstract data type that represents a countable number of ordered values, where\n  the same value may occur more than once. An instance of a list is a computer representation of the mathematical concept\n  of a finite sequence; the infinite analog of a list is a stream. </p>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <i>as-list-ul | .as-list-item </i>\n    <ul class=\"as-list-ul\">\n      <li class=\"as-list-item\">\n        One\n      </li>\n      <li class=\"as-list-item\">\n        Two\n      </li>\n      <li class=\"as-list-item\">\n        Three\n      </li>\n      <li class=\"as-list-item\">\n        Four\n      </li>\n      <li class=\"as-list-item\">\n        Five\n      </li>\n    </ul>\n  </div>\n  <div class=\"as-4\">\n    <i>.as-list-ul | .as-list-bordered</i>\n    <ol class=\"as-list-ul as-list-bordered\">\n      <li class=\"as-list-item\">\n        One\n      </li>\n      <li class=\"as-list-item\">\n        Two\n      </li>\n      <li class=\"as-list-item\">\n        Three\n      </li>\n      <li class=\"as-list-item\">\n        Four\n      </li>\n      <li class=\"as-list-item\">\n        Five\n      </li>\n    </ol>\n  </div>\n  <div class=\"as-4\">\n    <i>.as-list-ul | .as-list-bordered</i>\n    <ol class=\"as-list-ul as-list-bordered\">\n      <li class=\"as-list-item\">\n        One\n      </li>\n      <li class=\"as-list-item\">\n        Two\n      </li>\n      <li class=\"as-list-item\">\n        Three\n      </li>\n      <li class=\"as-list-item\">\n        Four\n      </li>\n      <li class=\"as-list-item\">\n        Five\n      </li>\n    </ol>\n  </div>\n</div>\n<h3>:Nestted list & Badge list</h3>\n<div class=\"row\">\n  <div class=\"as-5\">\n    <i>.as-list-ul | .as-list-bordered</i>\n\n    <ul class=\"as-list-ul as-list-bordered\">\n      <li class=\"as-list-item\">\n        One\n      </li>\n      <li class=\"as-list-item\">\n        Two\n        <ul>\n          <li>Item 1</li>\n          <li>Item 2</li>\n          <li>Item 3</li>\n          <li>Item 4\n            <ol>\n              <li>Item</li>\n              <li>Item</li>\n              <li>Item</li>\n              <li>Item</li>\n            </ol>\n          </li>\n        </ul>\n      </li>\n      <li class=\"as-list-item\">\n        Three\n      </li>\n      <li class=\"as-list-item\">\n        Four\n      </li>\n      <li class=\"as-list-item\">\n        Five\n      </li>\n    </ul>\n  </div>\n  <div class=\"as-5\">\n    <i>.as-list-ul | .as-list-bordered</i>\n\n    <ul class=\"as-list-ul as-list-bordered\">\n      <li class=\"as-list-item\">\n        One <span class=\"as-badge-primary as-badge as-card-right\">Badge</span>\n\n      </li>\n      <li class=\"as-list-item\">\n        Two <span class=\"as-badge-warning as-badge as-card-right\">Badge</span>\n\n      </li>\n      <li class=\"as-list-item\">\n        Three <span class=\"as-badge-base as-badge as-card-right\">Badge</span>\n\n      </li>\n      <li class=\"as-list-item\">\n        Four <span class=\"as-badge-dark as-badge as-card-right\">Badge</span>\n\n      </li>\n      <li class=\"as-list-item\">\n        Five <span class=\"as-badge-happy as-badge as-card-right\">Badge</span>\n      </li>\n      <li class=\"as-list-item\">\n        One <span class=\"as-badge-info as-badge as-card-right\">Badge</span>\n\n      </li>\n      <li class=\"as-list-item\">\n        Two <span class=\"as-badge-warning as-badge as-card-right\">Badge</span>\n\n      </li>\n      <li class=\"as-list-item\">\n        Three <span class=\"as-badge-danger as-badge as-card-right\">Badge</span>\n      </li>\n      <li class=\"as-list-item\">\n        Five <span class=\"as-badge-success as-badge as-card-right\">Badge</span>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<h2>:Horizontal list</h2>\n\n<div class=\"as-list-horiz\">\n  <div class=\"as-h-item\">\n    Item 1\n  </div>\n  <div class=\"as-h-item\">\n    Item 2\n  </div>\n  <div class=\"as-h-item\">\n    Item 3\n  </div>\n  <div class=\"as-h-item\">\n    Item 4\n  </div>\n  <div class=\"as-h-item\">\n    Item 5\n  </div>\n  <div class=\"as-h-item\">\n    Item 6\n  </div>\n  <div class=\"as-h-item\">\n    Item 7\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/list/list.component.scss":
/*!***********************************************!*\
  !*** ./src/app/comp/list/list.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-list-ul {\n  border-radius: 5px;\n  list-style-type: none;\n  border: 1px solid black; }\n\n.as-list-item {\n  padding: 10px 10px;\n  /* border: 0.5px solid black; */\n  border-bottom: 1px solid black;\n  margin-left: -30px;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out; }\n\n.as-list-bordered {\n  border-radius: 0px; }\n\n.as-list-item:hover {\n  background-color: whitesmoke;\n  color: black;\n  font-weight: bold;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out; }\n\n.as-list-ol {\n  list-style-type: decimal;\n  border-radius: 5px;\n  border: 1px solid black; }\n\n.as-list-item > .as-card-right {\n  float: right;\n  text-align: right; }\n\n.as-badge {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  padding: 4px;\n  font-size: 12px;\n  display: inline-block;\n  border-radius: 5px;\n  border: 1px solid white;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  width: auto; }\n\n.as-badge-primary {\n  border: 1px solid #80d8ff;\n  border-right: 3px solid #80d8ff;\n  background-color: #80d8ff;\n  color: white; }\n\n.as-badge-base {\n  border: 1px solid #29b6f6;\n  border-right: 3px solid #29b6f6;\n  background-color: #29b6f6;\n  color: white; }\n\n.as-badge-success {\n  border: 1px solid #69f0ae;\n  border-right: 3px solid #69f0ae;\n  background-color: #69f0ae;\n  color: white; }\n\n.as-badge-warning {\n  border: 1px solid #ffd180;\n  border-right: 3px solid #ffd180;\n  background-color: #ffd180;\n  color: white; }\n\n.as-badge-info {\n  border: 1px solid #b388ff;\n  border-right: 3px solid #b388ff;\n  background-color: #b388ff;\n  color: white; }\n\n.as-badge-dark {\n  border: 1px solid #9e9e9e;\n  border-right: 3px solid #9e9e9e;\n  background-color: #9e9e9e;\n  color: white; }\n\n.as-badge-happy {\n  border: 1px solid #d81b60;\n  border-right: 3px solid #d81b60;\n  background-color: #d81b60;\n  color: white; }\n\n.as-list-horiz {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 100%;\n  flex-wrap: wrap; }\n\n.as-h-item {\n  padding: 5px 10px;\n  border: 1px solid black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9saXN0L0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcYXNwaS1jc3Mvc3JjXFxhcHBcXGNvbXBcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFFRSxtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsK0JBQThCO0VBQzlCLG1CQUFrQjtFQUNsQixvREFBMkM7RUFBM0MsNENBQTJDLEVBQzVDOztBQUNEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUlEO0VBQ0UsNkJBQTRCO0VBQzVCLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsb0RBQTJDO0VBQTNDLDRDQUEyQyxFQUM1Qzs7QUFDRDtFQUNFLHlCQUF3QjtFQUN4QixtQkFBa0I7RUFDbEIsd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLGFBQVk7RUFDWixnQkFBZTtFQUNmLG1CQUFrQjtFQUVsQixhQUFZO0VBQ1osZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixzQkFBcUI7RUFDckIsb0RBQTJDO0VBQTNDLDRDQUEyQztFQUUzQyxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSwwQkE1RGtCO0VBNkRsQixnQ0E3RGtCO0VBOERsQiwwQkE5RGtCO0VBK0RsQixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSwwQkFuRWU7RUFvRWYsZ0NBcEVlO0VBcUVmLDBCQXJFZTtFQXNFZixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSwwQkF0RWtCO0VBdUVsQixnQ0F2RWtCO0VBd0VsQiwwQkF4RWtCO0VBeUVsQixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSwwQkExRWtCO0VBMkVsQixnQ0EzRWtCO0VBNEVsQiwwQkE1RWtCO0VBNkVsQixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSwwQkFqRmU7RUFrRmYsZ0NBbEZlO0VBbUZmLDBCQW5GZTtFQW9GZixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSwwQkFwRmU7RUFxRmYsZ0NBckZlO0VBc0ZmLDBCQXRGZTtFQXVGZixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSwwQkF4RmdCO0VBeUZoQixnQ0F6RmdCO0VBMEZoQiwwQkExRmdCO0VBMkZoQixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSw0QkFBb0I7RUFBcEIscUJBQW9CO0VBQ3BCLFlBQVc7RUFDWCxnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLGtCQUFpQjtFQUNqQix3QkFBdUIsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcy1iYXNlOiAjMjliNmY2O1xyXG4kYXMtcHJpbWFyeTogIzgwZDhmZjtcclxuJGFzLWRhbmdlcjogI2ZmOGE4MDtcclxuJGFzLXN1Y2Nlc3M6ICM2OWYwYWU7XHJcbiRhcy1pbmZvOiAjYjM4OGZmO1xyXG4kYXMtd2FybmluZzogI2ZmZDE4MDtcclxuJGFzLWxpZ2h0OiAjZTBlMGUwO1xyXG4kYXMtZGFyazogIzllOWU5ZTtcclxuJGFzLXdpbm5lcjogIzBkNDdhMTtcclxuJGFzLWhhcHB5OiAjZDgxYjYwO1xyXG4uYXMtbGlzdC11bCB7XHJcbiAgLy8gICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5hcy1saXN0LWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAvKiBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICBtYXJnaW4tbGVmdDogLTMwcHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcclxufVxyXG4uYXMtbGlzdC1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbi5hcy1saXN0LWJvcmRlcmVkID4gLmFzLWxpc3QtaXRlbSB7XHJcbiAgLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLmFzLWxpc3QtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcclxufVxyXG4uYXMtbGlzdC1vbCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4uYXMtbGlzdC1pdGVtID4gLmFzLWNhcmQtcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYXMtYmFkZ2Uge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC8vICAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0O1xyXG4gIC8vICAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmFzLWJhZGdlLXByaW1hcnkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYXMtYmFkZ2UtYmFzZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWJhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWJhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWJhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hcy1iYWRnZS1zdWNjZXNzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtc3VjY2VzcztcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtc3VjY2VzcztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmFzLWJhZGdlLXdhcm5pbmcge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy13YXJuaW5nO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy13YXJuaW5nO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13YXJuaW5nO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYXMtYmFkZ2UtaW5mbyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWluZm87XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWluZm87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWluZm87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hcy1iYWRnZS1kYXJrIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtZGFyaztcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtZGFyaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFyaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmFzLWJhZGdlLWhhcHB5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtaGFwcHk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWhhcHB5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmFzLWxpc3QtaG9yaXoge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uYXMtaC1pdGVtIHtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4iXX0= */"

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

/***/ "./src/app/comp/nav/nav.component.html":
/*!*********************************************!*\
  !*** ./src/app/comp/nav/nav.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"nav\">NavBar</h2>\n<p>A navigation bar is a section of a graphical user interface intended to aid visitors in accessing information. Navigation\n  bars are implemented in file browsers, web browsers and as a design element of some web sites.</p>\n<div class=\"as-bg-frame\" *ngIf=\"side == true\">\n  <nav *ngIf=\"phase=='top' \" class=\"as-nav-top\"> <h3>Top NavBar</h3> </nav>\n  <nav *ngIf=\"phase=='bottom' \" class=\"as-nav-bottom\"><h3 >Bottom NavBar</h3></nav>\n  <nav *ngIf=\"phase=='right' \" class=\"as-nav-right\"><h3 class=\"as-rotate-right \">Right NavBar</h3></nav>\n  <nav *ngIf=\"phase=='left' \" class=\"as-nav-left\"><h3 class=\"as-rotate-left \">Left NavBar</h3></nav>\n</div>\n\n<div class=\"as-g\">\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>Top fixed</i> <br>\n      <button (click)=\"show('top')\" class=\"as-btn as-btn-border-success as-btn-hover-success as-btn-sm  as-btn-blk\">Top </button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      <b>&gt;</b>\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>Bottom fixed</i> <br>\n      <button (click)=\"show('bottom')\" class=\"as-btn as-btn-border-warning as-btn-hover-warning as-btn-sm  as-btn-blk\">Bottom</button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      <b>&gt;</b>\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>Left fixed</i> <br>\n      <button (click)=\"show('left')\" class=\"as-btn as-btn-border-winner as-btn-hover-winner as-btn-sm  as-btn-blk\">Left</button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      &gt;\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>Right</i> <br>\n      <button (click)=\"show('right')\" class=\"as-btn as-btn-border-danger as-btn-hover-danger as-btn-sm  as-btn-blk\">Right</button>\n    </div>\n  </div>\n</div>\n\n<h2>:Hover navbars</h2>\n<div class=\"as-g\">\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>Top fixed</i> <br>\n      <button (mouseover)=\"show('top')\" class=\"as-btn as-btn-border-success as-btn-hover-success as-btn-sm  as-btn-blk\">Top </button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      <b>&gt;</b>\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>Bottom fixed</i> <br>\n      <button (mouseover)=\"show('bottom')\" class=\"as-btn as-btn-border-warning as-btn-hover-warning as-btn-sm  as-btn-blk\">Bottom</button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      <b>&gt;</b>\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>Left fixed</i> <br>\n      <button (mouseover)=\"show('left')\" class=\"as-btn as-btn-border-winner as-btn-hover-winner as-btn-sm  as-btn-blk\">Left</button>\n    </div>\n  </div>\n  <div class=\"as-g-half\">\n    <div class=\"\">\n      &gt;\n    </div>\n  </div>\n  <div class=\"as-g-2\">\n    <div class=\"\">\n      <i>Right</i> <br>\n      <button (mouseover)=\"show('right')\" class=\"as-btn as-btn-border-danger as-btn-hover-danger as-btn-sm  as-btn-blk\">Right</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/nav/nav.component.scss":
/*!*********************************************!*\
  !*** ./src/app/comp/nav/nav.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-nav-top {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 60px;\n  padding: 10px;\n  margin: auto;\n  width: 100%;\n  text-align: center;\n  background-color: #69f0ae;\n  border-bottom: 2px solid white;\n  color: white; }\n\n.as-nav-bottom {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  text-align: center;\n  width: 100%;\n  height: 60px;\n  padding: 10px;\n  background-color: #ffd180;\n  border-top: 2px solid white;\n  color: white;\n  margin-top: 300px; }\n\n.as-bg-frame {\n  background: white; }\n\n.as-nav-right {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 200px;\n  height: 100%;\n  padding: 10px;\n  text-align: center;\n  border-left: 2px solid white;\n  background-color: #d81b60;\n  color: white; }\n\n.as-rotate-right {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  color: white;\n  margin-top: 200px; }\n\n.as-rotate-left {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  margin-top: 200px;\n  color: white; }\n\n.as-nav-left {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100%;\n  padding: 10px;\n  border-right: 2px solid white;\n  background-color: #0d47a1;\n  color: white; }\n\n.as-input {\n  margin: 10px 0px;\n  padding: 5px;\n  width: 100%;\n  -webkit-transition: width 1s ease-in-out;\n  transition: width 1s ease-in-out;\n  -webkit-transition: background-color 1s ease-in;\n  transition: background-color 1s ease-in;\n  -webkit-transition: border-bottom 1s ease-in;\n  transition: border-bottom 1s ease-in;\n  -webkit-transition: border 1s ease-in;\n  transition: border 1s ease-in; }\n\n.as-password {\n  padding: 5px;\n  margin: 5px 0px;\n  width: 100%; }\n\n.as-textarea {\n  padding: 5px;\n  margin: 5px 0px;\n  width: 100%; }\n\n.as-input::-webkit-input-placeholder {\n  color: #d81b60; }\n\n.as-input::-moz-placeholder {\n  color: #d81b60; }\n\n.as-input::-ms-input-placeholder {\n  color: #d81b60; }\n\n.as-input::placeholder {\n  color: #d81b60; }\n\n.as-password::-webkit-input-placeholder {\n  color: #0d47a1; }\n\n.as-password::-moz-placeholder {\n  color: #0d47a1; }\n\n.as-password::-ms-input-placeholder {\n  color: #0d47a1; }\n\n.as-password::placeholder {\n  color: #0d47a1; }\n\ntextarea::-webkit-input-placeholder {\n  color: #69f0ae; }\n\ntextarea::-moz-placeholder {\n  color: #69f0ae; }\n\ntextarea::-ms-input-placeholder {\n  color: #69f0ae; }\n\ntextarea::placeholder {\n  color: #69f0ae; }\n\n.as-input:focus {\n  outline: none;\n  box-shadow: none;\n  border: 2px solid #d81b60; }\n\n.as-password:focus {\n  outline: none;\n  box-shadow: none;\n  border: 2px solid #0d47a1; }\n\ntextarea:focus {\n  outline: none;\n  box-shadow: none;\n  border: 2px solid #69f0ae; }\n\n.as-checkbox {\n  background-color: white;\n  border: 1px solid black;\n  padding: 4px; }\n\n.as-contain {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 0px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default checkbox */\n\n.as-contain input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n/* Create a custom checkbox */\n\n.as-checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  border-radius: 8px;\n  box-shadow: 0px 0px 4px 4px gainsboro;\n  background-color: #eee; }\n\n/* On mouse-over, add a grey background color */\n\n.as-contain:hover input ~ .as-checkmark {\n  background-color: #ccc; }\n\n/* When the checkbox is checked, add a blue background */\n\n.as-contain input:checked ~ .as-checkmark {\n  background-color: #d81b60; }\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.as-checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the checkmark when checked */\n\n.as-contain input:checked ~ .as-checkmark:after {\n  display: block; }\n\n/* Style the checkmark/indicator */\n\n.as-contain .as-checkmark:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n/* Customize the label (the as-contain-radio) */\n\n.as-contain-radio {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default radio button */\n\n.as-contain-radio input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0; }\n\n/* Create a custom radio button */\n\n.as-checkmark-radio {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50%; }\n\n/* On mouse-over, add a grey background color */\n\n.as-contain-radio:hover input ~ .as-checkmark-radio {\n  background-color: #ccc; }\n\n/* When the radio button is checked, add a blue background */\n\n.as-contain-radio input:checked ~ .as-checkmark-radio {\n  background-color: #0d47a1; }\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n\n.as-checkmark-radio:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the indicator (dot/circle) when checked */\n\n.as-contain-radio input:checked ~ .as-checkmark-radio:after {\n  display: block; }\n\n/* Style the indicator (dot/circle) */\n\n.as-contain-radio .as-checkmark-radio:after {\n  top: 9px;\n  left: 9px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: white; }\n\n.as-radio-group {\n  margin: 15px 0px; }\n\n.as-checkbox-group {\n  margin: 15px 0px; }\n\n.as-bg-base {\n  background-color: #29b6f6;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-base {\n  background-color: #29b6f6;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #80d8ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #ff8a80;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #69f0ae;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b388ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffd180;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #9e9e9e;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #d81b60;\n  color: white;\n  border-radius: 4px; }\n\n.as-btn {\n  padding: 6px;\n  cursor: pointer;\n  border-radius: 3px;\n  margin: 5px;\n  padding: 4px;\n  font-size: 14px;\n  display: inline-block;\n  border-radius: 0px;\n  border: 1px solid white;\n  background-color: white;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  width: auto; }\n\n.as-text-center {\n  text-align: center; }\n\n.as-btn:focus {\n  outline: none;\n  box-shadow: none; }\n\n.as-btn-border-base {\n  border: 1px solid #29b6f6;\n  border-right: 3px solid #29b6f6; }\n\n.as-btn-border-primary {\n  border: 1px solid #80d8ff;\n  border-right: 3px solid #80d8ff; }\n\n.as-btn-border-danger {\n  border: 1px solid #ff8a80;\n  border-right: 3px solid #ff8a80; }\n\n.as-btn-border-success {\n  border: 1px solid #69f0ae;\n  border-right: 3px solid #69f0ae; }\n\n.as-btn-border-info {\n  border: 1px solid #b388ff;\n  border-right: 3px solid #b388ff; }\n\n.as-btn-border-warning {\n  border: 1px solid #ffd180;\n  border-right: 3px solid #ffd180; }\n\n.as-btn-border-light {\n  border: 1px solid #e0e0e0;\n  border-right: 3px solid #e0e0e0; }\n\n.as-btn-border-dark {\n  border: 1px solid #9e9e9e;\n  border-right: 3px solid #9e9e9e; }\n\n.as-btn-border-winner {\n  border: 1px solid #0d47a1;\n  border-right: 3px solid #0d47a1; }\n\n.as-btn-border-happy {\n  border: 1px solid #d81b60;\n  border-right: 3px solid #d81b60; }\n\n.as-btn-hover-base:hover {\n  background-color: #29b6f6;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #29b6f6; }\n\n.as-btn-hover-primary:hover {\n  background-color: #80d8ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #80d8ff; }\n\n.as-btn-hover-danger:hover {\n  background-color: #ff8a80;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ff8a80; }\n\n.as-btn-hover-success:hover {\n  background-color: #69f0ae;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #69f0ae; }\n\n.as-btn-hover-info:hover {\n  background-color: #b388ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #b388ff; }\n\n.as-btn-hover-warning:hover {\n  background-color: #ffd180;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ffd180; }\n\n.as-btn-hover-light:hover {\n  background-color: #e0e0e0;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #e0e0e0; }\n\n.as-btn-hover-dark:hover {\n  background-color: #9e9e9e;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #9e9e9e; }\n\n.as-btn-hover-winner:hover {\n  background-color: #0d47a1;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #0d47a1; }\n\n.as-btn-hover-happy:hover {\n  background-color: #d81b60;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #d81b60; }\n\n.as-inp-dark:focus {\n  border: 2px solid #9e9e9e; }\n\n.as-inp-dark::-webkit-input-placeholder {\n  color: #9e9e9e; }\n\n.as-inp-dark::-moz-placeholder {\n  color: #9e9e9e; }\n\n.as-inp-dark::-ms-input-placeholder {\n  color: #9e9e9e; }\n\n.as-inp-dark::placeholder {\n  color: #9e9e9e; }\n\n.as-inp-primary:focus {\n  border: 2px solid #80d8ff; }\n\n.as-inp-primary::-webkit-input-placeholder {\n  color: #80d8ff; }\n\n.as-inp-primary::-moz-placeholder {\n  color: #80d8ff; }\n\n.as-inp-primary::-ms-input-placeholder {\n  color: #80d8ff; }\n\n.as-inp-primary::placeholder {\n  color: #80d8ff; }\n\n.as-inp-winner:focus {\n  border: 2px solid #0d47a1; }\n\n.as-inp-success::-webkit-input-placeholder {\n  color: #69f0ae; }\n\n.as-inp-success::-moz-placeholder {\n  color: #69f0ae; }\n\n.as-inp-success::-ms-input-placeholder {\n  color: #69f0ae; }\n\n.as-inp-success::placeholder {\n  color: #69f0ae; }\n\n.as-inp-success:focus {\n  border: 2px solid #69f0ae; }\n\n.as-inp-winner::-webkit-input-placeholder {\n  color: #0d47a1; }\n\n.as-inp-winner::-moz-placeholder {\n  color: #0d47a1; }\n\n.as-inp-winner::-ms-input-placeholder {\n  color: #0d47a1; }\n\n.as-inp-winner::placeholder {\n  color: #0d47a1; }\n\n.as-inp-happy:focus {\n  border: 2px solid #d81b60; }\n\n.as-inp-happy::-webkit-input-placeholder {\n  color: #d81b60; }\n\n.as-inp-happy::-moz-placeholder {\n  color: #d81b60; }\n\n.as-inp-happy::-ms-input-placeholder {\n  color: #d81b60; }\n\n.as-inp-happy::placeholder {\n  color: #d81b60; }\n\n.as-inp-right {\n  border: none;\n  border-right: 1px solid #9e9e9e; }\n\n.as-inp-left {\n  border: none;\n  border-left: 1px solid #9e9e9e; }\n\n.as-inp-top {\n  border: none;\n  border-top: 1px solid #9e9e9e; }\n\n.as-inp-bottom {\n  border: none;\n  border-bottom: 1px solid #9e9e9e; }\n\n.as-inp-right:focus {\n  border: none;\n  border-right: 1px solid #9e9e9e; }\n\n.as-inp-left:focus {\n  border: none;\n  border-left: 1px solid #9e9e9e; }\n\n.as-inp-top:focus {\n  border: none;\n  border-top: 1px solid #9e9e9e; }\n\n.as-inp-bottom:focus {\n  border: none;\n  border-bottom: 1px solid #9e9e9e; }\n\n.as-width-effect:focus {\n  width: 70%;\n  -webkit-transition: width 1s ease-in;\n  transition: width 1s ease-in; }\n\n.as-bg-effect:focus {\n  background-color: gainsboro;\n  -webkit-transition: background-color 1s ease-in;\n  transition: background-color 1s ease-in; }\n\n.as-border-bottom-effect:focus {\n  border-bottom: 2px solid gainsboro;\n  -webkit-transition: border-bottom 1s ease-in;\n  transition: border-bottom 1s ease-in; }\n\n.as-border-effect:focus {\n  border: 0px solid cornflowerblue;\n  -webkit-transition: border 1s ease-in;\n  transition: border 1s ease-in; }\n\n.as-disabled {\n  border: 1px solid black;\n  cursor: not-allowed;\n  background-color: white; }\n\n.as-btn-blk {\n  width: 100%; }\n\n.as-readonly {\n  border: 1px solid black;\n  cursor: not-allowed; }\n\n.as-btn-sm {\n  padding: 6px; }\n\n.as-btn-md {\n  padding: 11px; }\n\n.as-btn-lg {\n  padding: 16px; }\n\n.as-btn-blk {\n  width: 100%; }\n\n.as-btn:focus {\n  outline: none;\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9uYXYvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFxhc3BpLWNzcy9zcmNcXGFwcFxcY29tcFxcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0E7RUFDRSxnQkFBZTtFQUNmLE9BQU07RUFDTixRQUFPO0VBQ1AsYUFBWTtFQUNaLGNBQWE7RUFDYixhQUFZO0VBQ1osWUFBVztFQUNYLG1CQUFrQjtFQUNsQiwwQkFqQmtCO0VBa0JsQiwrQkFBOEI7RUFDOUIsYUFBWSxFQUNiOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixVQUFTO0VBQ1QsUUFBTztFQUNQLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGNBQWE7RUFDYiwwQkEzQmtCO0VBNEJsQiw0QkFBMkI7RUFDM0IsYUFBWTtFQUNaLGtCQUFpQixFQUNsQjs7QUFDRDtFQUVFLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFNBQVE7RUFDUixhQUFZO0VBQ1osYUFBWTtFQUNaLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsNkJBQTRCO0VBQzVCLDBCQXpDZ0I7RUEwQ2hCLGFBQVksRUFDYjs7QUFDRDtFQUNFLGlDQUF3QjtVQUF4Qix5QkFBd0I7RUFDeEIsYUFBWTtFQUNaLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLGtDQUF5QjtVQUF6QiwwQkFBeUI7RUFDekIsa0JBQWlCO0VBQ2pCLGFBQVksRUFDYjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFFBQU87RUFDUCxhQUFZO0VBQ1osYUFBWTtFQUNaLGNBQWE7RUFDYiw4QkFBNkI7RUFDN0IsMEJBL0RpQjtFQWdFakIsYUFBWSxFQUNiOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixZQUFXO0VBQ1gseUNBQWdDO0VBQWhDLGlDQUFnQztFQUNoQyxnREFBdUM7RUFBdkMsd0NBQXVDO0VBQ3ZDLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsc0NBQTZCO0VBQTdCLDhCQUE2QixFQUM5Qjs7QUFDRDtFQUNFLGFBQVk7RUFDWixnQkFBZTtFQUNmLFlBQVcsRUFDWjs7QUFDRDtFQUNFLGFBQVk7RUFDWixnQkFBZTtFQUNmLFlBQVcsRUFDWjs7QUFDRDtFQUNFLGVBdEZnQixFQXVGakI7O0FBRkQ7RUFDRSxlQXRGZ0IsRUF1RmpCOztBQUZEO0VBQ0UsZUF0RmdCLEVBdUZqQjs7QUFGRDtFQUNFLGVBdEZnQixFQXVGakI7O0FBQ0Q7RUFDRSxlQTFGaUIsRUEyRmxCOztBQUZEO0VBQ0UsZUExRmlCLEVBMkZsQjs7QUFGRDtFQUNFLGVBMUZpQixFQTJGbEI7O0FBRkQ7RUFDRSxlQTFGaUIsRUEyRmxCOztBQUNEO0VBQ0UsZUFsR2tCLEVBbUduQjs7QUFGRDtFQUNFLGVBbEdrQixFQW1HbkI7O0FBRkQ7RUFDRSxlQWxHa0IsRUFtR25COztBQUZEO0VBQ0UsZUFsR2tCLEVBbUduQjs7QUFDRDtFQUNFLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsMEJBakdnQixFQWtHakI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLDBCQXhHaUIsRUF5R2xCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQiwwQkFuSGtCLEVBb0huQjs7QUFFRDtFQUNFLHdCQUF1QjtFQUN2Qix3QkFBdUI7RUFDdkIsYUFBWSxFQUNiOztBQUVEO0VBQ0UsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsMEJBQXlCO0VBQ3pCLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFDckIsa0JBQWlCLEVBQ2xCOztBQUVELHlDQUF5Qzs7QUFDekM7RUFDRSxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGdCQUFlO0VBQ2YsVUFBUztFQUNULFNBQVEsRUFDVDs7QUFFRCw4QkFBOEI7O0FBQzlCO0VBQ0UsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPO0VBQ1AsYUFBWTtFQUNaLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsc0NBQXFDO0VBQ3JDLHVCQUFzQixFQUN2Qjs7QUFFRCxnREFBZ0Q7O0FBQ2hEO0VBQ0UsdUJBQXNCLEVBQ3ZCOztBQUVELHlEQUF5RDs7QUFDekQ7RUFDRSwwQkE5SmdCLEVBK0pqQjs7QUFFRCw4REFBOEQ7O0FBQzlEO0VBQ0UsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixjQUFhLEVBQ2Q7O0FBRUQscUNBQXFDOztBQUNyQztFQUNFLGVBQWMsRUFDZjs7QUFFRCxtQ0FBbUM7O0FBQ25DO0VBQ0UsVUFBUztFQUNULFNBQVE7RUFDUixXQUFVO0VBQ1YsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQiwwQkFBeUI7RUFDekIsaUNBQWdDO0VBRWhDLHlCQUF3QixFQUN6Qjs7QUFDRCxnREFBZ0Q7O0FBQ2hEO0VBQ0UsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGdCQUFlO0VBRWYsMEJBQXlCO0VBQ3pCLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFDckIsa0JBQWlCLEVBQ2xCOztBQUVELDZDQUE2Qzs7QUFDN0M7RUFDRSxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLGdCQUFlO0VBQ2YsVUFBUztFQUNULFNBQVEsRUFDVDs7QUFFRCxrQ0FBa0M7O0FBQ2xDO0VBQ0UsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPO0VBQ1AsYUFBWTtFQUNaLFlBQVc7RUFDWCx1QkFBc0I7RUFDdEIsbUJBQWtCLEVBQ25COztBQUVELGdEQUFnRDs7QUFDaEQ7RUFDRSx1QkFBc0IsRUFDdkI7O0FBRUQsNkRBQTZEOztBQUM3RDtFQUNFLDBCQW5PaUIsRUFvT2xCOztBQUVELHFFQUFxRTs7QUFDckU7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGNBQWEsRUFDZDs7QUFFRCxrREFBa0Q7O0FBQ2xEO0VBQ0UsZUFBYyxFQUNmOztBQUVELHNDQUFzQzs7QUFDdEM7RUFDRSxTQUFRO0VBQ1IsVUFBUztFQUNULFdBQVU7RUFDVixZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLDBCQTNRZTtFQTRRZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBaFJlO0VBaVJmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFwUmtCO0VBcVJsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBeFJpQjtFQXlSakIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTVSa0I7RUE2UmxCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFoU2U7RUFpU2YsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXBTa0I7RUFxU2xCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF4U2dCO0VBeVNoQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBNVNlO0VBNlNmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFoVGlCO0VBaVRqQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBcFRnQjtFQXFUaEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLGFBQVk7RUFDWixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGdCQUFlO0VBQ2Ysc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQix3QkFBdUI7RUFDdkIsd0JBQXVCO0VBQ3ZCLHNCQUFxQjtFQUNyQixvREFBMkM7RUFBM0MsNENBQTJDO0VBRTNDLFlBQVcsRUFDWjs7QUFDRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLGNBQWE7RUFDYixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSwwQkF6VmU7RUEwVmYsZ0NBMVZlLEVBMlZoQjs7QUFDRDtFQUNFLDBCQTVWa0I7RUE2VmxCLGdDQTdWa0IsRUE4Vm5COztBQUNEO0VBQ0UsMEJBL1ZpQjtFQWdXakIsZ0NBaFdpQixFQWlXbEI7O0FBQ0Q7RUFDRSwwQkFsV2tCO0VBbVdsQixnQ0FuV2tCLEVBb1duQjs7QUFDRDtFQUNFLDBCQXJXZTtFQXNXZixnQ0F0V2UsRUF1V2hCOztBQUNEO0VBQ0UsMEJBeFdrQjtFQXlXbEIsZ0NBeldrQixFQTBXbkI7O0FBQ0Q7RUFDRSwwQkEzV2dCO0VBNFdoQixnQ0E1V2dCLEVBNldqQjs7QUFDRDtFQUNFLDBCQTlXZTtFQStXZixnQ0EvV2UsRUFnWGhCOztBQUNEO0VBQ0UsMEJBalhpQjtFQWtYakIsZ0NBbFhpQixFQW1YbEI7O0FBQ0Q7RUFDRSwwQkFwWGdCO0VBcVhoQixnQ0FyWGdCLEVBc1hqQjs7QUFFRDtFQUNFLDBCQWxZZTtFQW1ZZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBdFllLEVBdVloQjs7QUFFRDtFQUNFLDBCQXpZa0I7RUEwWWxCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0E3WWtCLEVBOFluQjs7QUFFRDtFQUNFLDBCQWhaaUI7RUFpWmpCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FwWmlCLEVBcVpsQjs7QUFFRDtFQUNFLDBCQXZaa0I7RUF3WmxCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0EzWmtCLEVBNFpuQjs7QUFFRDtFQUNFLDBCQTlaZTtFQStaZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBbGFlLEVBbWFoQjs7QUFFRDtFQUNFLDBCQXJha0I7RUFzYWxCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0F6YWtCLEVBMGFuQjs7QUFFRDtFQUNFLDBCQTVhZ0I7RUE2YWhCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FoYmdCLEVBaWJqQjs7QUFFRDtFQUNFLDBCQW5iZTtFQW9iZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBdmJlLEVBd2JoQjs7QUFDRDtFQUNFLDBCQXpiaUI7RUEwYmpCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0E3YmlCLEVBOGJsQjs7QUFDRDtFQUNFLDBCQS9iZ0I7RUFnY2hCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FuY2dCLEVBb2NqQjs7QUFDRDtFQUNFLDBCQXhjZSxFQXljaEI7O0FBQ0Q7RUFDRSxlQTNjZSxFQTRjaEI7O0FBRkQ7RUFDRSxlQTNjZSxFQTRjaEI7O0FBRkQ7RUFDRSxlQTNjZSxFQTRjaEI7O0FBRkQ7RUFDRSxlQTNjZSxFQTRjaEI7O0FBRUQ7RUFDRSwwQkFyZGtCLEVBc2RuQjs7QUFDRDtFQUNFLGVBeGRrQixFQXlkbkI7O0FBRkQ7RUFDRSxlQXhka0IsRUF5ZG5COztBQUZEO0VBQ0UsZUF4ZGtCLEVBeWRuQjs7QUFGRDtFQUNFLGVBeGRrQixFQXlkbkI7O0FBQ0Q7RUFDRSwwQkFwZGlCLEVBcWRsQjs7QUFDRDtFQUNFLGVBNWRrQixFQTZkbkI7O0FBRkQ7RUFDRSxlQTVka0IsRUE2ZG5COztBQUZEO0VBQ0UsZUE1ZGtCLEVBNmRuQjs7QUFGRDtFQUNFLGVBNWRrQixFQTZkbkI7O0FBQ0Q7RUFDRSwwQkEvZGtCLEVBZ2VuQjs7QUFDRDtFQUNFLGVBN2RpQixFQThkbEI7O0FBRkQ7RUFDRSxlQTdkaUIsRUE4ZGxCOztBQUZEO0VBQ0UsZUE3ZGlCLEVBOGRsQjs7QUFGRDtFQUNFLGVBN2RpQixFQThkbEI7O0FBQ0Q7RUFDRSwwQkEvZGdCLEVBZ2VqQjs7QUFDRDtFQUNFLGVBbGVnQixFQW1lakI7O0FBRkQ7RUFDRSxlQWxlZ0IsRUFtZWpCOztBQUZEO0VBQ0UsZUFsZWdCLEVBbWVqQjs7QUFGRDtFQUNFLGVBbGVnQixFQW1lakI7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osZ0NBeGVlLEVBeWVoQjs7QUFDRDtFQUNFLGFBQVk7RUFDWiwrQkE1ZWUsRUE2ZWhCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLDhCQWhmZSxFQWlmaEI7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osaUNBcGZlLEVBcWZoQjs7QUFDRDtFQUNFLGFBQVk7RUFDWixnQ0F4ZmUsRUF5ZmhCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLCtCQTVmZSxFQTZmaEI7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osOEJBaGdCZSxFQWlnQmhCOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGlDQXBnQmUsRUFxZ0JoQjs7QUFDRDtFQUNFLFdBQVU7RUFDVixxQ0FBNEI7RUFBNUIsNkJBQTRCLEVBQzdCOztBQUNEO0VBQ0UsNEJBQTJCO0VBQzNCLGdEQUF1QztFQUF2Qyx3Q0FBdUMsRUFDeEM7O0FBRUQ7RUFDRSxtQ0FBa0M7RUFDbEMsNkNBQW9DO0VBQXBDLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLGlDQUFnQztFQUNoQyxzQ0FBNkI7RUFBN0IsOEJBQTZCLEVBQzlCOztBQUNEO0VBQ0Usd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQix3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSx3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcy1iYXNlOiAjMjliNmY2O1xyXG4kYXMtcHJpbWFyeTogIzgwZDhmZjtcclxuJGFzLWRhbmdlcjogI2ZmOGE4MDtcclxuJGFzLXN1Y2Nlc3M6ICM2OWYwYWU7XHJcbiRhcy1pbmZvOiAjYjM4OGZmO1xyXG4kYXMtd2FybmluZzogI2ZmZDE4MDtcclxuJGFzLWxpZ2h0OiAjZTBlMGUwO1xyXG4kYXMtZGFyazogIzllOWU5ZTtcclxuJGFzLXdpbm5lcjogIzBkNDdhMTtcclxuJGFzLWhhcHB5OiAjZDgxYjYwO1xyXG5cclxuLmFzLW5hdi10b3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1zdWNjZXNzO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmFzLW5hdi1ib3R0b20ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdhcm5pbmc7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAzMDBweDtcclxufVxyXG4uYXMtYmctZnJhbWUge1xyXG4gIC8vICAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uYXMtbmF2LXJpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaGFwcHk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hcy1yb3RhdGUtcmlnaHQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbn1cclxuLmFzLXJvdGF0ZS1sZWZ0IHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYXMtbmF2LWxlZnQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdpbm5lcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hcy1pbnB1dCB7XHJcbiAgbWFyZ2luOiAxMHB4IDBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMXMgZWFzZS1pbjtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgMXMgZWFzZS1pbjtcclxufVxyXG4uYXMtcGFzc3dvcmQge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFzLXRleHRhcmVhIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiA1cHggMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hcy1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkYXMtaGFwcHk7XHJcbn1cclxuLmFzLXBhc3N3b3JkOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICRhcy13aW5uZXI7XHJcbn1cclxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGFzLXN1Y2Nlc3M7XHJcbn1cclxuLmFzLWlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGFzLWhhcHB5O1xyXG59XHJcblxyXG4uYXMtcGFzc3dvcmQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkYXMtd2lubmVyO1xyXG59XHJcblxyXG50ZXh0YXJlYTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG59XHJcblxyXG4uYXMtY2hlY2tib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG4vLyAvKiBUaGUgYXMtY29udGFpbiAqL1xyXG4uYXMtY29udGFpbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXHJcbi5hcy1jb250YWluIGlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cclxuLmFzLWNoZWNrbWFyayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggNHB4IGdhaW5zYm9ybztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcblxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuLmFzLWNvbnRhaW46aG92ZXIgaW5wdXQgfiAuYXMtY2hlY2ttYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cclxuLmFzLWNvbnRhaW4gaW5wdXQ6Y2hlY2tlZCB+IC5hcy1jaGVja21hcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmFzLWNoZWNrbWFyazphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xyXG4uYXMtY29udGFpbiBpbnB1dDpjaGVja2VkIH4gLmFzLWNoZWNrbWFyazphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXHJcbi5hcy1jb250YWluIC5hcy1jaGVja21hcms6YWZ0ZXIge1xyXG4gIGxlZnQ6IDlweDtcclxuICB0b3A6IDVweDtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuLyogQ3VzdG9taXplIHRoZSBsYWJlbCAodGhlIGFzLWNvbnRhaW4tcmFkaW8pICovXHJcbi5hcy1jb250YWluLXJhZGlvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8vICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHJhZGlvIGJ1dHRvbiAqL1xyXG4uYXMtY29udGFpbi1yYWRpbyBpbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgY3VzdG9tIHJhZGlvIGJ1dHRvbiAqL1xyXG4uYXMtY2hlY2ttYXJrLXJhZGlvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuLmFzLWNvbnRhaW4tcmFkaW86aG92ZXIgaW5wdXQgfiAuYXMtY2hlY2ttYXJrLXJhZGlvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4vKiBXaGVuIHRoZSByYWRpbyBidXR0b24gaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXHJcbi5hcy1jb250YWluLXJhZGlvIGlucHV0OmNoZWNrZWQgfiAuYXMtY2hlY2ttYXJrLXJhZGlvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2lubmVyO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhlIGluZGljYXRvciAodGhlIGRvdC9jaXJjbGUgLSBoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmFzLWNoZWNrbWFyay1yYWRpbzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSB3aGVuIGNoZWNrZWQgKi9cclxuLmFzLWNvbnRhaW4tcmFkaW8gaW5wdXQ6Y2hlY2tlZCB+IC5hcy1jaGVja21hcmstcmFkaW86YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSAqL1xyXG4uYXMtY29udGFpbi1yYWRpbyAuYXMtY2hlY2ttYXJrLXJhZGlvOmFmdGVyIHtcclxuICB0b3A6IDlweDtcclxuICBsZWZ0OiA5cHg7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLmFzLXJhZGlvLWdyb3VwIHtcclxuICBtYXJnaW46IDE1cHggMHB4O1xyXG59XHJcbi5hcy1jaGVja2JveC1ncm91cCB7XHJcbiAgbWFyZ2luOiAxNXB4IDBweDtcclxufVxyXG5cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhbmdlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaW5mbztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2FybmluZztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYXJrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXdpbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdpbm5lcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1oYXBweSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWhhcHB5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJ0biB7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0O1xyXG4gIC8vICAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4uYXMtdGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYXMtYnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItYmFzZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWJhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWJhc2U7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItcHJpbWFyeSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXByaW1hcnk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXByaW1hcnk7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItZGFuZ2VyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtZGFuZ2VyO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1kYW5nZXI7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItc3VjY2VzcyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItaW5mbyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWluZm87XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWluZm87XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItd2FybmluZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItbGlnaHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1saWdodDtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtbGlnaHQ7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItZGFyayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWRhcms7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItd2lubmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtd2lubmVyO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy13aW5uZXI7XHJcbn1cclxuLmFzLWJ0bi1ib3JkZXItaGFwcHkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1oYXBweTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSG92ZXJcclxuLmFzLWJ0bi1ob3Zlci1iYXNlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1iYXNlO1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXByaW1hcnk7XHJcbn1cclxuXHJcbi5hcy1idG4taG92ZXItZGFuZ2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFuZ2VyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWRhbmdlcjtcclxufVxyXG5cclxuLmFzLWJ0bi1ob3Zlci1zdWNjZXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLWluZm86aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1pbmZvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWluZm87XHJcbn1cclxuXHJcbi5hcy1idG4taG92ZXItd2FybmluZzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdhcm5pbmc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtd2FybmluZztcclxufVxyXG5cclxuLmFzLWJ0bi1ob3Zlci1saWdodDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWxpZ2h0O1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLWRhcms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYXJrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWJ0bi1ob3Zlci13aW5uZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtd2lubmVyO1xyXG59XHJcbi5hcy1idG4taG92ZXItaGFwcHk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1oYXBweTtcclxufVxyXG4uYXMtaW5wLWRhcms6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRhcy1kYXJrO1xyXG59XHJcbi5hcy1pbnAtZGFyazo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkYXMtZGFyaztcclxufVxyXG5cclxuLmFzLWlucC1wcmltYXJ5OmZvY3VzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkYXMtcHJpbWFyeTtcclxufVxyXG4uYXMtaW5wLXByaW1hcnk6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGFzLXByaW1hcnk7XHJcbn1cclxuLmFzLWlucC13aW5uZXI6Zm9jdXMge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRhcy13aW5uZXI7XHJcbn1cclxuLmFzLWlucC1zdWNjZXNzOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICRhcy1zdWNjZXNzO1xyXG59XHJcbi5hcy1pbnAtc3VjY2Vzczpmb2N1cyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGFzLXN1Y2Nlc3M7XHJcbn1cclxuLmFzLWlucC13aW5uZXI6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGFzLXdpbm5lcjtcclxufVxyXG4uYXMtaW5wLWhhcHB5OmZvY3VzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuLmFzLWlucC1oYXBweTo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkYXMtaGFwcHk7XHJcbn1cclxuLmFzLWlucC1yaWdodCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRhcy1kYXJrO1xyXG59XHJcbi5hcy1pbnAtbGVmdCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWlucC10b3Age1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWlucC1ib3R0b20ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWlucC1yaWdodDpmb2N1cyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRhcy1kYXJrO1xyXG59XHJcbi5hcy1pbnAtbGVmdDpmb2N1cyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWlucC10b3A6Zm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLWlucC1ib3R0b206Zm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGFzLWRhcms7XHJcbn1cclxuLmFzLXdpZHRoLWVmZmVjdDpmb2N1cyB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLWluO1xyXG59XHJcbi5hcy1iZy1lZmZlY3Q6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5hcy1ib3JkZXItYm90dG9tLWVmZmVjdDpmb2N1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdhaW5zYm9ybztcclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDFzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5hcy1ib3JkZXItZWZmZWN0OmZvY3VzIHtcclxuICBib3JkZXI6IDBweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgMXMgZWFzZS1pbjtcclxufVxyXG4uYXMtZGlzYWJsZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmFzLWJ0bi1ibGsge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hcy1yZWFkb25seSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG4uYXMtYnRuLXNtIHtcclxuICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuLmFzLWJ0bi1tZCB7XHJcbiAgcGFkZGluZzogMTFweDtcclxufVxyXG4uYXMtYnRuLWxnIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uYXMtYnRuLWJsayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFzLWJ0bjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/comp/nav/nav.component.ts":
/*!*******************************************!*\
  !*** ./src/app/comp/nav/nav.component.ts ***!
  \*******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent.prototype.show = function (side) {
        var _this = this;
        this.side = true;
        this.phase = side;
        var timer = setTimeout(function () {
            _this.side = false;
        }, 6000);
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-nav",
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/comp/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/comp/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/comp/panel/panel.component.html":
/*!*************************************************!*\
  !*** ./src/app/comp/panel/panel.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"panel\">Panel</h2>\n<p>Bordered box with some padding around its content</p>\n<br>\n<p>A panel indicates a big box for calling extra attention to some special content or information. A panel is displayed as a\n  grey box with rounded corners. It also enlarges the font sizes of the text inside it. </p>\n\n<div class=\"row\">\n  <div class=\"as-4\">\n    <div class=\"as-panel as-panel-light\">\n      <div class=\"as-panel-heading\">\n\n        Panel\n\n      </div>\n      <div class=\"as-panel-body\">\n        <p>A panel indicates a big box for calling extra attention to some special content or information. A panel is displayed\n          as a grey box with rounded corners. It also enlarges the font sizes of the text inside it. </p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <div class=\"as-panel as-panel-happy\">\n      <div class=\"as-panel-heading\">\n        Panel\n      </div>\n      <div class=\"as-panel-body\">\n        <p>A panel indicates a big box for calling extra attention to some special content or information. A panel is displayed\n          as a grey box with rounded corners. It also enlarges the font sizes of the text inside it. </p>\n      </div>\n      <div class=\"as-panel-footer\">\n        <button class=\"as-btn as-btn-sm as-bg-happy\">happy</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-panel as-panel-winner\">\n      <div class=\"as-panel-heading\">\n\n        Panel\n\n      </div>\n      <div class=\"as-panel-body\">\n        <p>A panel indicates a big box for calling extra attention to some special content or information. A panel is displayed\n          as a grey box with rounded corners. It also enlarges the font sizes of the text inside it. </p>\n      </div>\n      <div class=\"as-panel-footer\">\n        <button class=\"as-btn as-btn-sm as-bg-winner\">winner</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-panel as-panel-info\">\n      <div class=\"as-panel-heading\">\n\n        Panel\n\n      </div>\n      <div class=\"as-panel-body\">\n        <p>A panel indicates a big box for calling extra attention to some special content or information. A panel is displayed\n          as a grey box with rounded corners. It also enlarges the font sizes of the text inside it. </p>\n      </div>\n      <div class=\"as-panel-footer\">\n        <button class=\"as-btn as-btn-sm as-bg-info\">info</button>\n      </div>\n    </div>\n  </div>\n</div>\n<h2>:Background Effects</h2>\n<div class=\"row\">\n  <div class=\"as-4\">\n    <div class=\"as-panel as-panel-warning\">\n      <div class=\"as-panel-heading\">\n\n        Panel\n\n      </div>\n      <div class=\"as-panel-body\">\n        <p>A panel indicates a big box for calling extra attention to some special content or information. A panel is displayed\n          as a grey box with rounded corners. It also enlarges the font sizes of the text inside it. </p>\n      </div>\n      <div class=\"as-panel-footer\">\n        <button class=\"as-btn as-btn-sm as-bg-warning\">warning</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-panel as-panel-danger\">\n      <div class=\"as-panel-heading\">\n\n        Panel\n\n      </div>\n      <div class=\"as-panel-body\">\n        <p>A panel indicates a big box for calling extra attention to some special content or information. A panel is displayed\n          as a grey box with rounded corners. It also enlarges the font sizes of the text inside it. </p>\n      </div>\n      <div class=\"as-panel-footer\">\n        <button class=\"as-btn as-btn-sm as-bg-danger\">danger</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"as-4\">\n    <div class=\"as-panel as-panel-base\">\n      <div class=\"as-panel-heading\">\n\n        Panel\n\n      </div>\n      <div class=\"as-panel-body\">\n        <p>A panel indicates a big box for calling extra attention to some special content or information. A panel is displayed\n          as a grey box with rounded corners. It also enlarges the font sizes of the text inside it. </p>\n      </div>\n      <div class=\"as-panel-footer\">\n        <button class=\"as-btn as-btn-sm as-bg-base\">Base</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/panel/panel.component.scss":
/*!*************************************************!*\
  !*** ./src/app/comp/panel/panel.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-panel {\n  width: 88%;\n  border-radius: 5px;\n  padding: 20px;\n  border: 1px solid;\n  margin: auto;\n  margin: 10px 0px;\n  background-color: lightgray;\n  display: block; }\n\n.as-panel-body {\n  padding: 10px 0px; }\n\n.as-panel-footer {\n  padding: 15px 0px;\n  border-top: 1px solid white; }\n\n.as-panel-heading {\n  border-bottom: 1px solid white;\n  color: white;\n  font-size: 18px; }\n\n.as-btn {\n  padding: 6px;\n  cursor: pointer;\n  border-radius: 3px;\n  margin: 5px;\n  padding: 4px;\n  font-size: 14px;\n  display: inline-block;\n  border-radius: 0px;\n  border: 1px solid white;\n  background-color: white;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out;\n  width: auto; }\n\n.as-btn-border-base {\n  border: 1px solid #29b6f6;\n  border-right: 3px solid #29b6f6; }\n\n.as-btn-border-primary {\n  border: 1px solid #80d8ff;\n  border-right: 3px solid #80d8ff; }\n\n.as-btn-border-danger {\n  border: 1px solid #ff8a80;\n  border-right: 3px solid #ff8a80; }\n\n.as-btn-border-success {\n  border: 1px solid #69f0ae;\n  border-right: 3px solid #69f0ae; }\n\n.as-btn-border-info {\n  border: 1px solid #b388ff;\n  border-right: 3px solid #b388ff; }\n\n.as-btn-border-warning {\n  border: 1px solid #ffd180;\n  border-right: 3px solid #ffd180; }\n\n.as-btn-border-light {\n  border: 1px solid #e0e0e0;\n  border-right: 3px solid #e0e0e0; }\n\n.as-btn-border-dark {\n  border: 1px solid #9e9e9e;\n  border-right: 3px solid #9e9e9e; }\n\n.as-btn-border-winner {\n  border: 1px solid #0d47a1;\n  border-right: 3px solid #0d47a1; }\n\n.as-btn-border-happy {\n  border: 1px solid #d81b60;\n  border-right: 3px solid #d81b60; }\n\n.as-btn-hover-base:hover {\n  background-color: #29b6f6;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #29b6f6; }\n\n.as-btn-hover-primary:hover {\n  background-color: #80d8ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #80d8ff; }\n\n.as-btn-hover-danger:hover {\n  background-color: #ff8a80;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ff8a80; }\n\n.as-btn-hover-success:hover {\n  background-color: #69f0ae;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #69f0ae; }\n\n.as-btn-hover-info:hover {\n  background-color: #b388ff;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #b388ff; }\n\n.as-btn-hover-warning:hover {\n  background-color: #ffd180;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #ffd180; }\n\n.as-btn-hover-light:hover {\n  background-color: #e0e0e0;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #e0e0e0; }\n\n.as-btn-hover-dark:hover {\n  background-color: #9e9e9e;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #9e9e9e; }\n\n.as-btn-hover-winner:hover {\n  background-color: #0d47a1;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #0d47a1; }\n\n.as-btn-hover-happy:hover {\n  background-color: #d81b60;\n  color: white;\n  border: 1px solid white;\n  -webkit-transition: background-color 1s ease;\n  transition: background-color 1s ease;\n  border-right: 3px solid #d81b60; }\n\n.as-bg-base {\n  background-color: #29b6f6;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #80d8ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #ff8a80;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #69f0ae;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b388ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffd180;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #9e9e9e;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #d81b60;\n  color: white;\n  border-radius: 4px; }\n\n.as-circle-sm {\n  border-radius: 15px;\n  padding: 5px; }\n\n.as-3 {\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center; }\n\n.as-3:hover {\n  box-shadow: 0px 0px 6px 6px gainsboro; }\n\n.as-text-center {\n  text-align: center; }\n\n.as-align-center {\n  margin: 0;\n  text-align: center;\n  display: block; }\n\n.as-4 {\n  border: none;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center; }\n\n.as-btn-sm {\n  padding: 5px; }\n\n.as-btn-md {\n  padding: 10px; }\n\n.as-btn-lg {\n  padding: 15px; }\n\n.as-btn-blk {\n  width: 100%; }\n\n.as-btn:focus {\n  outline: none;\n  box-shadow: none; }\n\n.as-panel-danger {\n  background-color: #ff8a80;\n  color: white;\n  text-align: left; }\n\n.as-panel-primary {\n  background-color: #80d8ff;\n  color: white;\n  text-align: left; }\n\n.as-panel-warning {\n  background-color: #ffd180;\n  color: white;\n  text-align: left; }\n\n.as-panel-info {\n  background-color: #b388ff;\n  color: white;\n  text-align: left; }\n\n.as-panel-winner {\n  background-color: #0d47a1;\n  color: white;\n  text-align: left; }\n\n.as-panel-happy {\n  background-color: #d81b60;\n  color: white;\n  text-align: left; }\n\n.as-panel-success {\n  background-color: #69f0ae;\n  color: white;\n  text-align: left; }\n\n.as-panel-light {\n  background-color: #e0e0e0;\n  color: white;\n  text-align: left; }\n\n.as-panel-dark {\n  background-color: #9e9e9e;\n  color: white;\n  text-align: left; }\n\n.as-panel-base {\n  background-color: #29b6f6;\n  color: white;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9wYW5lbC9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxjb21wXFxwYW5lbFxccGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQiw0QkFBMkI7RUFDM0IsZUFBYyxFQUNmOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0Usa0JBQWlCO0VBQ2pCLDRCQUEyQixFQUM1Qjs7QUFDRDtFQUNFLCtCQUE4QjtFQUM5QixhQUFZO0VBQ1osZ0JBQWUsRUFDaEI7O0FBWUQ7RUFDRSxhQUFZO0VBQ1osZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZTtFQUNmLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLHdCQUF1QjtFQUN2QixzQkFBcUI7RUFDckIsb0RBQTJDO0VBQTNDLDRDQUEyQztFQUUzQyxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSwwQkE3QmU7RUE4QmYsZ0NBOUJlLEVBK0JoQjs7QUFDRDtFQUNFLDBCQWhDa0I7RUFpQ2xCLGdDQWpDa0IsRUFrQ25COztBQUNEO0VBQ0UsMEJBbkNpQjtFQW9DakIsZ0NBcENpQixFQXFDbEI7O0FBQ0Q7RUFDRSwwQkF0Q2tCO0VBdUNsQixnQ0F2Q2tCLEVBd0NuQjs7QUFDRDtFQUNFLDBCQXpDZTtFQTBDZixnQ0ExQ2UsRUEyQ2hCOztBQUNEO0VBQ0UsMEJBNUNrQjtFQTZDbEIsZ0NBN0NrQixFQThDbkI7O0FBQ0Q7RUFDRSwwQkEvQ2dCO0VBZ0RoQixnQ0FoRGdCLEVBaURqQjs7QUFDRDtFQUNFLDBCQWxEZTtFQW1EZixnQ0FuRGUsRUFvRGhCOztBQUNEO0VBQ0UsMEJBckRpQjtFQXNEakIsZ0NBdERpQixFQXVEbEI7O0FBQ0Q7RUFDRSwwQkF4RGdCO0VBeURoQixnQ0F6RGdCLEVBMERqQjs7QUFFRDtFQUNFLDBCQXRFZTtFQXVFZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBMUVlLEVBMkVoQjs7QUFFRDtFQUNFLDBCQTdFa0I7RUE4RWxCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FqRmtCLEVBa0ZuQjs7QUFFRDtFQUNFLDBCQXBGaUI7RUFxRmpCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0F4RmlCLEVBeUZsQjs7QUFFRDtFQUNFLDBCQTNGa0I7RUE0RmxCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0EvRmtCLEVBZ0duQjs7QUFFRDtFQUNFLDBCQWxHZTtFQW1HZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBdEdlLEVBdUdoQjs7QUFFRDtFQUNFLDBCQXpHa0I7RUEwR2xCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0E3R2tCLEVBOEduQjs7QUFFRDtFQUNFLDBCQWhIZ0I7RUFpSGhCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FwSGdCLEVBcUhqQjs7QUFFRDtFQUNFLDBCQXZIZTtFQXdIZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDZDQUFvQztFQUFwQyxxQ0FBb0M7RUFDcEMsZ0NBM0hlLEVBNEhoQjs7QUFDRDtFQUNFLDBCQTdIaUI7RUE4SGpCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0FqSWlCLEVBa0lsQjs7QUFDRDtFQUNFLDBCQW5JZ0I7RUFvSWhCLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUNwQyxnQ0F2SWdCLEVBd0lqQjs7QUFHRDtFQUNFLDBCQXJKZTtFQXNKZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBekprQjtFQTBKbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTdKaUI7RUE4SmpCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFqS2tCO0VBa0tsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBcktlO0VBc0tmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkF6S2tCO0VBMEtsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBN0tnQjtFQThLaEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWpMZTtFQWtMZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBckxpQjtFQXNMakIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXpMZ0I7RUEwTGhCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxvQkFBbUI7RUFDbkIsYUFBWSxFQUNiOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0Usc0NBQXFDLEVBQ3RDOztBQUNEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsVUFBUztFQUNULG1CQUFrQjtFQUNsQixlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkI7O0FBSUQ7RUFDRSxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxjQUFhO0VBQ2IsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsMEJBcFBpQjtFQXFQakIsYUFBWTtFQUNaLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLDBCQTFQa0I7RUEyUGxCLGFBQVk7RUFDWixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSwwQkEzUGtCO0VBNFBsQixhQUFZO0VBQ1osaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsMEJBalFlO0VBa1FmLGFBQVk7RUFDWixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSwwQkFsUWlCO0VBbVFqQixhQUFZO0VBQ1osaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsMEJBdFFnQjtFQXVRaEIsYUFBWTtFQUNaLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLDBCQWpSa0I7RUFrUmxCLGFBQVk7RUFDWixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSwwQkFuUmdCO0VBb1JoQixhQUFZO0VBQ1osaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsMEJBdlJlO0VBd1JmLGFBQVk7RUFDWixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSwwQkFuU2U7RUFvU2YsYUFBWTtFQUNaLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXMtcGFuZWwge1xyXG4gIHdpZHRoOiA4OCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYXMtcGFuZWwtYm9keSB7XHJcbiAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuLmFzLXBhbmVsLWZvb3RlciB7XHJcbiAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5hcy1wYW5lbC1oZWFkaW5nIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4kYXMtYmFzZTogIzI5YjZmNjtcclxuJGFzLXByaW1hcnk6ICM4MGQ4ZmY7XHJcbiRhcy1kYW5nZXI6ICNmZjhhODA7XHJcbiRhcy1zdWNjZXNzOiAjNjlmMGFlO1xyXG4kYXMtaW5mbzogI2IzODhmZjtcclxuJGFzLXdhcm5pbmc6ICNmZmQxODA7XHJcbiRhcy1saWdodDogI2UwZTBlMDtcclxuJGFzLWRhcms6ICM5ZTllOWU7XHJcbiRhcy13aW5uZXI6ICMwZDQ3YTE7XHJcbiRhcy1oYXBweTogI2Q4MWI2MDtcclxuXHJcbi5hcy1idG4ge1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcclxuICAvLyAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5hcy1idG4tYm9yZGVyLWJhc2Uge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1iYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1iYXNlO1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLXByaW1hcnkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLWRhbmdlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLWRhbmdlcjtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtZGFuZ2VyO1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLXN1Y2Nlc3Mge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1zdWNjZXNzO1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLWluZm8ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1pbmZvO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1pbmZvO1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLXdhcm5pbmcge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy13YXJuaW5nO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy13YXJuaW5nO1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLWxpZ2h0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtbGlnaHQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWxpZ2h0O1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLWRhcmsge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRhcy1kYXJrO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1kYXJrO1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLXdpbm5lciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGFzLXdpbm5lcjtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtd2lubmVyO1xyXG59XHJcbi5hcy1idG4tYm9yZGVyLWhhcHB5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYXMtaGFwcHk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLWhhcHB5O1xyXG59XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhvdmVyXHJcbi5hcy1idG4taG92ZXItYmFzZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWJhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtYmFzZTtcclxufVxyXG5cclxuLmFzLWJ0bi1ob3Zlci1wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtcHJpbWFyeTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1wcmltYXJ5O1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLWRhbmdlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhbmdlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1kYW5nZXI7XHJcbn1cclxuXHJcbi5hcy1idG4taG92ZXItc3VjY2Vzczpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXN1Y2Nlc3M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtc3VjY2VzcztcclxufVxyXG5cclxuLmFzLWJ0bi1ob3Zlci1pbmZvOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaW5mbztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1pbmZvO1xyXG59XHJcblxyXG4uYXMtYnRuLWhvdmVyLXdhcm5pbmc6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13YXJuaW5nO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXdhcm5pbmc7XHJcbn1cclxuXHJcbi5hcy1idG4taG92ZXItbGlnaHQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1saWdodDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1saWdodDtcclxufVxyXG5cclxuLmFzLWJ0bi1ob3Zlci1kYXJrOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFyaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xyXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICRhcy1kYXJrO1xyXG59XHJcbi5hcy1idG4taG92ZXItd2lubmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2lubmVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgJGFzLXdpbm5lcjtcclxufVxyXG4uYXMtYnRuLWhvdmVyLWhhcHB5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaGFwcHk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkYXMtaGFwcHk7XHJcbn1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY29sb3JcclxuXHJcbi5hcy1iZy1iYXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtcHJpbWFyeTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYW5nZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXN1Y2Nlc3M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWluZm87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdhcm5pbmc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctbGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1saWdodDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFyaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy13aW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctaGFwcHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1jaXJjbGUtc20ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5hcy0zIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcy0zOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCA2cHggZ2FpbnNib3JvO1xyXG59XHJcbi5hcy10ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcy1hbGlnbi1jZW50ZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmFzLTQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFzLTQ6aG92ZXIge1xyXG4gIC8vICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggNnB4IGdhaW5zYm9ybztcclxufVxyXG4uYXMtYnRuLXNtIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmFzLWJ0bi1tZCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uYXMtYnRuLWxnIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uYXMtYnRuLWJsayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFzLWJ0bjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5hcy1wYW5lbC1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYW5nZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmFzLXBhbmVsLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5hcy1wYW5lbC13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2FybmluZztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYXMtcGFuZWwtaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWluZm87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmFzLXBhbmVsLXdpbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdpbm5lcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYXMtcGFuZWwtaGFwcHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYXMtcGFuZWwtc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXN1Y2Nlc3M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmFzLXBhbmVsLWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtbGlnaHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmFzLXBhbmVsLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYXJrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5hcy1wYW5lbC1iYXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/comp/panel/panel.component.ts":
/*!***********************************************!*\
  !*** ./src/app/comp/panel/panel.component.ts ***!
  \***********************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    PanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/comp/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.scss */ "./src/app/comp/panel/panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/comp/table/table.component.html":
/*!*************************************************!*\
  !*** ./src/app/comp/table/table.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"table\">Tables</h2>\n<p>A table is an arrangement of data in rows and columns, or possibly in a more complex structure. Tables are widely used in\n  communication, research, and data analysis. Tables appear in print media, handwritten notes, computer software, architectural\n  ornamentation, traffic signs, and many other places.</p>\n<h5>:Classic</h5>\n<table class=\"as-table\">\n  <thead class=\"as-thead\">\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n  </thead>\n  <tbody class=\"as-tbody\">\n    <tr class=\"as-tr \">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr \">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr \">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr \">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr \">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr \">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr \">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr \">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n  </tbody>\n</table>\n<br>\n<h4>:Hover row</h4>\n<table class=\"as-table\">\n  <thead class=\"as-thead\">\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n  </thead>\n  <tbody class=\"as-tbody\">\n    <tr class=\"as-tr as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n  </tbody>\n</table>\n<br>\n<h4>:Bordered row</h4>\n<table class=\"as-table\">\n  <thead class=\"as-thead\">\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n    <th class=\"as-th\">as-data</th>\n  </thead>\n  <tbody class=\"as-tbody\">\n    <tr class=\"as-tr as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr-bordered as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr-bordered as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr-bordered as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr-bordered as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr-bordered as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr-bordered as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n    <tr class=\"as-tr-bordered as-tr-hover\">\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n      <td class=\"as-td\">as-data</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/comp/table/table.component.scss":
/*!*************************************************!*\
  !*** ./src/app/comp/table/table.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-table {\n  border: 1px solid black;\n  width: 100%;\n  border-radius: 15px;\n  padding: 10px; }\n\n.as-th {\n  font-weight: bold;\n  text-align: center;\n  padding: 10px; }\n\n.as-thead {\n  padding: 10px;\n  border-bottom: 1px solid black; }\n\n.as-td {\n  padding: 10px; }\n\n.as-tr-bordered {\n  border: 1px solid black; }\n\n.as-tr-hover:hover {\n  background-color: gainsboro;\n  cursor: pointer;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out; }\n\n.as-tr-hover {\n  -webkit-transition: background-color 1s ease-in;\n  transition: background-color 1s ease-in; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC90YWJsZS9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxjb21wXFx0YWJsZVxcdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBdUI7RUFDdkIsWUFBVztFQUNYLG9CQUFtQjtFQUNuQixjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGNBQWEsRUFDZDs7QUFFRDtFQUNFLGNBQWE7RUFDYiwrQkFBOEIsRUFDL0I7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSw0QkFBMkI7RUFDM0IsZ0JBQWU7RUFDZixvREFBMkM7RUFBM0MsNENBQTJDLEVBQzVDOztBQUVEO0VBQ0UsZ0RBQXVDO0VBQXZDLHdDQUF1QyxFQUN4QyIsImZpbGUiOiJzcmMvYXBwL2NvbXAvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXMtdGFibGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmFzLXRoIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmFzLXRoZWFkIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmFzLXRkIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5hcy10ci1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLmFzLXRyLWhvdmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5hcy10ci1ob3ZlciB7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/comp/table/table.component.ts":
/*!***********************************************!*\
  !*** ./src/app/comp/table/table.component.ts ***!
  \***********************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/comp/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/comp/table/table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/comp/window/window.component.html":
/*!***************************************************!*\
  !*** ./src/app/comp/window/window.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"window\">Window</h2>\n<p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n<div class=\"\">\n  Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n<br>\n<div class=\"as-window\">\n  <div class=\"as-links\">\n    <a class=\"as-win-link\" href=\"#as-one\">One</a>\n    <a class=\"as-win-link\" href=\"#as-two\">Two</a>\n    <a class=\"as-win-link\" href=\"#as-three\">Three</a>\n    <a class=\"as-win-link\" href=\"#as-four\">Four</a>\n  </div>\n  <div class=\"as-window-full\">\n    <div class=\"as-win-item\">\n      <h4 id=\"as-one\">One</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n    <div class=\"as-win-item\">\n      <h4 id=\"as-two\">Two</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n    <div class=\"as-win-item\">\n      <h4 id=\"as-three\">Three</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n    <div class=\"as-win-item\">\n      <h4 id=\"as-four\">Four</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n  </div>\n</div>\n<h2>:Right</h2>\n<div class=\"as-window\">\n  <div class=\"as-links as-right\">\n    <a class=\"as-win-link\" href=\"#as-oner\">One</a>\n    <a class=\"as-win-link\" href=\"#as-twor\">Two</a>\n    <a class=\"as-win-link\" href=\"#as-threer\">Three</a>\n    <a class=\"as-win-link\" href=\"#as-fourr\">Four</a>\n  </div> <br>\n  <div class=\"as-window-full\">\n    <div class=\"as-win-item\">\n      <h4 id=\"as-oner\">One</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n    <div class=\"as-win-item\">\n      <h4 id=\"as-twor\">Two</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n    <div class=\"as-win-item\">\n      <h4 id=\"as-threer\">Three</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n    <div class=\"as-win-item\">\n      <h4 id=\"as-fourr\">Four</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n  </div>\n</div>\n<h2>:Custom scrollbar</h2>\n<div class=\"as-window \">\n  <div class=\"as-links as-right\">\n    <a class=\"as-win-link\" href=\"#as-onerc\">One</a>\n    <a class=\"as-win-link\" href=\"#as-tworc\">Two</a>\n    <a class=\"as-win-link\" href=\"#as-threerc\">Three</a>\n    <a class=\"as-win-link\" href=\"#as-fourrc\">Four</a>\n  </div> <br>\n  <div class=\"as-window-full as-custom-scroll\">\n    <div class=\"as-win-item\">\n      <h4 id=\"as-onerc\">One</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n    <div class=\"as-win-item\">\n      <h4 id=\"as-tworc\">Two</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n    <div class=\"as-win-item\">\n      <h4 id=\"as-threerc\">Three</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n    <div class=\"as-win-item\">\n      <h4 id=\"as-fourrc\">Four</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n  </div>\n</div>\n<h2>:Theme</h2>\n<i>Dark | Base | Light | Winner | Happy | Warning | primary | Info</i>\n<br>\n<div class=\"as-window as-window-happy\">\n  <div class=\"as-links \">\n    <a class=\"as-win-link\" href=\"#as-onert\">One</a>\n    <a class=\"as-win-link\" href=\"#as-twort\">Two</a>\n    <a class=\"as-win-link\" href=\"#as-threert\">Three</a>\n    <a class=\"as-win-link\" href=\"#as-fourrt\">Four</a>\n  </div>  \n  <div class=\"as-window-full as-custom-scroll as-window-happy-scroll\">\n    <div class=\"as-win-item\">\n      <h4 id=\"as-onert\">One</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n    <div class=\"as-win-item\">\n      <h4 id=\"as-twort\">Two</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n    <div class=\"as-win-item\">\n      <h4 id=\"as-threert\">Three</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n    <div class=\"as-win-item\">\n      <h4 id=\"as-fourrt\">Four</h4>\n      <p>A navigatable window | section with <i>as-elements</i> like Cards, Jumptrons, Forms and so on. </p>\n\n      <div class=\"\">\n        Improve the Experience of end user to easily navigatable section | window with Horizontal list items.</div>\n      <br>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/comp/window/window.component.scss":
/*!***************************************************!*\
  !*** ./src/app/comp/window/window.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-win-link {\n  text-decoration: none;\n  padding: 10px;\n  background-color: white;\n  margin: 10px 0px 0px 5px; }\n\n.as-window {\n  margin: 10px;\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  padding: 15px; }\n\n.as-win-link:hover {\n  border: 1px solid black;\n  background-color: #0d47a1;\n  color: white; }\n\n.as-window-full {\n  height: 100px;\n  margin-top: 10px;\n  overflow: auto; }\n\n.as-right {\n  float: right;\n  display: table; }\n\n.as-custom-scroll::-webkit-scrollbar {\n  width: 4px; }\n\n.as-custom-scroll::-webkit-scrollbar-thumb {\n  background-color: #0d47a1; }\n\n.as-window-happy-scroll::-webkit-scrollbar-thumb {\n  background-color: #d81b60; }\n\n.as-window-happy > .as-links > .as-win-link {\n  color: #d81b60; }\n\n.as-window-happy > .as-links > .as-win-link:hover {\n  background-color: #d81b60;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC93aW5kb3cvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFxhc3BpLWNzcy9zcmNcXGFwcFxcY29tcFxcd2luZG93XFx3aW5kb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxzQkFBcUI7RUFDckIsY0FBYTtFQUNiLHdCQUF1QjtFQUV2Qix5QkFBd0IsRUFDekI7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLDRCQUEyQjtFQUMzQixjQUFhLEVBRWQ7O0FBQ0Q7RUFDRSx3QkFBdUI7RUFDdkIsMEJBbEJpQjtFQW1CakIsYUFBWSxFQUNiOztBQUNEO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osZUFBYyxFQUNmOztBQUNEO0VBQ0UsV0FBVSxFQUNYOztBQUNEO0VBQ0UsMEJBbENpQixFQW1DbEI7O0FBQ0Q7RUFDRSwwQkFwQ2dCLEVBcUNqQjs7QUFDRDtFQUNFLGVBdkNnQixFQXdDakI7O0FBQ0Q7RUFDRSwwQkExQ2dCO0VBMkNoQixhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wL3dpbmRvdy93aW5kb3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYXMtYmFzZTogIzI5YjZmNjtcclxuJGFzLXByaW1hcnk6ICM4MGQ4ZmY7XHJcbiRhcy1kYW5nZXI6ICNmZjhhODA7XHJcbiRhcy1zdWNjZXNzOiAjNjlmMGFlO1xyXG4kYXMtaW5mbzogI2IzODhmZjtcclxuJGFzLXdhcm5pbmc6ICNmZmQxODA7XHJcbiRhcy1saWdodDogI2UwZTBlMDtcclxuJGFzLWRhcms6ICM5ZTllOWU7XHJcbiRhcy13aW5uZXI6ICMwZDQ3YTE7XHJcbiRhcy1oYXBweTogI2Q4MWI2MDtcclxuLmFzLXdpbi1saW5rIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAvLyAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcclxuICBtYXJnaW46IDEwcHggMHB4IDBweCA1cHg7XHJcbn1cclxuLmFzLXdpbmRvdyB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBcclxufVxyXG4uYXMtd2luLWxpbms6aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hcy13aW5kb3ctZnVsbCB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5hcy1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbi5hcy1jdXN0b20tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDRweDtcclxufVxyXG4uYXMtY3VzdG9tLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbn1cclxuLmFzLXdpbmRvdy1oYXBweS1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaGFwcHk7XHJcbn1cclxuLmFzLXdpbmRvdy1oYXBweSA+IC5hcy1saW5rcyA+IC5hcy13aW4tbGluayB7XHJcbiAgY29sb3I6ICRhcy1oYXBweTtcclxufVxyXG4uYXMtd2luZG93LWhhcHB5ID4gLmFzLWxpbmtzID4gLmFzLXdpbi1saW5rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaGFwcHk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/comp/window/window.component.ts":
/*!*************************************************!*\
  !*** ./src/app/comp/window/window.component.ts ***!
  \*************************************************/
/*! exports provided: WindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowComponent", function() { return WindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WindowComponent = /** @class */ (function () {
    function WindowComponent() {
    }
    WindowComponent.prototype.ngOnInit = function () {
    };
    WindowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-window',
            template: __webpack_require__(/*! ./window.component.html */ "./src/app/comp/window/window.component.html"),
            styles: [__webpack_require__(/*! ./window.component.scss */ "./src/app/comp/window/window.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WindowComponent);
    return WindowComponent;
}());



/***/ }),

/***/ "./src/app/git/folders/folders.component.html":
/*!****************************************************!*\
  !*** ./src/app/git/folders/folders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"as-site\">\n  <h3>Folders info</h3>\n  <div class=\"card card-body\">\n    <table class=\"uk-table\">\n      <thead>\n        <th>\n          Name\n        </th>\n        <th>\n          Size\n        </th>\n        <th>\n          SHA\n        </th>\n        <th>\n          URL\n        </th>\n        <!--<th>\n        Encoding\n      </th>-->\n        <th>\n          HTML\n        </th>\n        <th>\n          GIT\n        </th>\n        <th>\n          Download\n        </th>\n        <th>\n          Self\n        </th>\n        <th>\n          GIT\n        </th>\n        <th>\n          HTML\n        </th>\n        <th>\n          Content\n        </th>\n        <th>\n          View more\n        </th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of readme\">\n          <td> <span ngxClipboard [cbContent]=\"item?.name\" class=\"as-badge as-bg-winner\"> {{item?.name}}</span> </td>\n          <td> <span ngxClipboard [cbContent]=\"item?.size\" class=\"as-badge as-bg-winner\">Copy</span></td>\n          <td> <span ngxClipboard [cbContent]=\"item?.sha\" class=\"as-badge as-bg-winner\">Copy</span> </td>\n          <td>\n            <a [href]=\"item?.url\">\n           <span class=\"as-badge as-bg-winner\">URL</span>\n        </a>\n          </td>\n          <!--<td>\n          <span ngxClipboard [cbContent]=\"item?.encoding\" class=\"as-badge as-bg-winner\">Copy</span>\n        </td>-->\n          <td>\n            <a [href]=\"item?.html_url\">\n                  <span class=\"as-badge as-bg-winner\">HTML</span>\n                </a>\n          </td>\n          <td> <a [href]=\"item?.git_url\">\n          <span class=\"as-badge as-bg-winner\">GIT</span>\n        </a></td>\n          <td> <a [href]=\"item?.download_url\" [download]=\"item?.download_url\">\n          <span class=\"as-badge as-bg-winner\">Download</span>\n        </a></td>\n          <td> <a [href]=\"item?._links?.self\">\n          <span class=\"as-badge as-bg-winner\">SELF</span>\n        </a></td>\n          <td> <a [href]=\"item?._links?.git\">\n          <span class=\"as-badge as-bg-winner\">GIT</span>\n        </a></td>\n          <td> <a [href]=\"item?._links?.html\">\n          <span class=\"as-badge as-bg-winner\">HTML</span>\n        </a></td>\n          <td> <a [href]=\"item?._links?.html\">\n          <span class=\"as-badge as-bg-winner\">HTML</span>\n        </a></td>\n          <td>\n            <a (click)=\"subs = item\" class=\"as-badge as-bg-winner\" href=\"#modal-container\" uk-toggle>Open</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n\n  <div id=\"modal-container\" class=\"uk-modal-container\" uk-modal>\n    <div class=\"uk-modal-dialog uk-modal-body\">\n      <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n      <h2 class=\"uk-modal-title\">{{subs?.name}} </h2>\n      <div class=\"card card-body\">\n        <table class=\"uk-table\">\n          <thead>\n            <tr>\n              <th class=\"uk-width-small\">Name</th>\n              <th>File/URL</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Name</td>\n              <td>{{subs?.name}} </td>\n            </tr>\n            <tr>\n              <td>Size</td>\n              <td>{{subs?.size}} </td>\n            </tr>\n            <tr>\n              <td>SHA</td>\n              <td>{{subs?.sha}} </td>\n            </tr>\n            <tr>\n              <td>URL</td>\n              <td>{{subs?.url}} </td>\n            </tr>\n            <!--<tr>\n            <td>Encoding</td>\n            <td>{{subs?.encoding}} </td>\n          </tr>-->\n            <tr>\n              <td>HTML URL</td>\n              <td>{{subs?.html_url}}</td>\n            </tr>\n            <tr>\n              <td>GIT URL</td>\n              <td>{{subs?.git_url}}</td>\n            </tr>\n            <tr>\n              <td>Download URL</td>\n              <td>{{subs?.download_url}}</td>\n            </tr>\n            <tr>\n              <td>Self</td>\n              <td>{{subs?._links?.self}}</td>\n            </tr>\n            <tr>\n              <td>GIT</td>\n              <td>{{subs?._links?.git}}</td>\n            </tr>\n            <tr>\n              <td>HTML</td>\n              <td>{{subs?._links?.html}}</td>\n            </tr>\n            <!--<tr>\n            <td>Content</td>\n            <td>{{subs?.content}}</td>\n          </tr>-->\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/git/folders/folders.component.scss":
/*!****************************************************!*\
  !*** ./src/app/git/folders/folders.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-site {\n  margin: 30px 0px; }\n\n.as-json {\n  word-wrap: break-word;\n  word-break: break-all; }\n\n.as-badge {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  width: 100%;\n  margin: 5px;\n  padding: 4px;\n  float: right;\n  font-size: 12px;\n  display: inline-block;\n  border-radius: 5px;\n  border: 1px solid white;\n  text-align: center;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #00b0ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #d50000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #aeea00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b3e5fc;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffab00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #78909c;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #d81b60;\n  color: white;\n  border-radius: 4px; }\n\n.as-circle-sm {\n  border-radius: 15px;\n  padding: 5px; }\n\ntable {\n  word-wrap: break-word;\n  word-break: normal; }\n\n.table-mob {\n  width: 100%;\n  overflow: auto; }\n\n.card {\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0L2ZvbGRlcnMvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFxhc3BpLWNzcy9zcmNcXGFwcFxcZ2l0XFxmb2xkZXJzXFxmb2xkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0Usc0JBQXFCO0VBQ3JCLHNCQUFxQixFQUN0Qjs7QUFXRDtFQUNFLGFBQVk7RUFDWixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsWUFBVztFQUNYLGFBQVk7RUFDWixhQUFZO0VBQ1osZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLG9EQUEyQztFQUEzQyw0Q0FBMkMsRUFDNUM7O0FBRUQ7RUFDRSwwQkE1QmU7RUE2QmYsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWpDZTtFQWtDZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBckNrQjtFQXNDbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXpDaUI7RUEwQ2pCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkE3Q2tCO0VBOENsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBakRlO0VBa0RmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFyRGtCO0VBc0RsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBekRnQjtFQTBEaEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTdEZTtFQThEZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBakVpQjtFQWtFakIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXJFZ0I7RUFzRWhCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxvQkFBbUI7RUFDbkIsYUFBWSxFQUNiOztBQUNEO0VBQ0Usc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9naXQvZm9sZGVycy9mb2xkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzLXNpdGUge1xyXG4gIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuLmFzLWpzb24ge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuJGFzLWJhc2U6ICMwMDAwMDA7XHJcbiRhcy1wcmltYXJ5OiAjMDBiMGZmO1xyXG4kYXMtZGFuZ2VyOiAjZDUwMDAwO1xyXG4kYXMtc3VjY2VzczogI2FlZWEwMDtcclxuJGFzLWluZm86ICNiM2U1ZmM7XHJcbiRhcy13YXJuaW5nOiAjZmZhYjAwO1xyXG4kYXMtbGlnaHQ6ICNlMGUwZTA7XHJcbiRhcy1kYXJrOiAjNzg5MDljO1xyXG4kYXMtd2lubmVyOiAjMGQ0N2ExO1xyXG4kYXMtaGFwcHk6ICNkODFiNjA7XHJcbi5hcy1iYWRnZSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5hcy1iZy1iYXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1iYXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtcHJpbWFyeTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYW5nZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXN1Y2Nlc3M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWluZm87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdhcm5pbmc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctbGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1saWdodDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFyaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy13aW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctaGFwcHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1jaXJjbGUtc20ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbnRhYmxlIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogbm9ybWFsO1xyXG59XHJcbi50YWJsZS1tb2Ige1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5jYXJkIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/git/folders/folders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/git/folders/folders.component.ts ***!
  \**************************************************/
/*! exports provided: FoldersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldersComponent", function() { return FoldersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FoldersComponent = /** @class */ (function () {
    function FoldersComponent(http) {
        this.http = http;
    }
    FoldersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get("https://api.github.com/repos/creativecoderone/poster/contents/")
            .subscribe(function (data) {
            _this.readme = data;
            _this.readme["content"] = atob(_this.readme["content"]);
        });
    };
    FoldersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-folders",
            template: __webpack_require__(/*! ./folders.component.html */ "./src/app/git/folders/folders.component.html"),
            styles: [__webpack_require__(/*! ./folders.component.scss */ "./src/app/git/folders/folders.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FoldersComponent);
    return FoldersComponent;
}());



/***/ }),

/***/ "./src/app/git/info/info.component.html":
/*!**********************************************!*\
  !*** ./src/app/git/info/info.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"as-site\">\n  <h3> {{readme?.name}}</h3>\n  <!--<div class=\"uk-card as-json uk-card-default uk-card-body uk-width-1-1@m\">\n    <h3 class=\"uk-card-title\">ReadMe</h3>\n    {{readme?.name}}\n    <br> {{readme?.size}}\n    <br>{{readme?.sha}}\n    <br>{{readme?.type}}\n    <br>{{readme?.encoding}}\n    <br>{{readme?.url}}\n    <br>{{readme?.html_url}}\n    <br>{{readme?.git_url}}\n    <br>{{readme?.download_url}}\n    <br> {{readme?.content}}\n    <br>{{readme?._links?.self}}\n    <br>{{readme?._links?.git}}\n    <br>{{readme?._links?.html}}\n    <br>\n  </div>-->\n</div>\n<div class=\"card card-body\">\n  <table class=\"uk-table uk-table-justify uk-table-divider\">\n    <thead>\n      <tr>\n        <th class=\"uk-width-small\">Name</th>\n        <th>File/URL</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Name</td>\n        <td>{{readme?.name}}</td>\n        <td> <span ngxClipboard [cbContent]=\"readme?.name\" class=\"as-badge as-bg-winner\">Copy</span>\n        </td>\n      </tr>\n      <tr>\n        <td>Size</td>\n        <td>{{readme?.size}}</td>\n        <td> <span ngxClipboard [cbContent]=\"readme?.size\" class=\"as-badge as-bg-winner\">Copy</span>\n        </td>\n      </tr>\n      <tr>\n        <td>SHA</td>\n        <td>{{readme?.sha}}</td>\n        <td> <span ngxClipboard [cbContent]=\"readme?.sha\" class=\"as-badge as-bg-winner\">Copy</span>\n        </td>\n      </tr>\n      <tr>\n        <td>URL</td>\n        <td>{{readme?.url}}</td>\n        <td>\n          <a [href]=\"readme?.url\">\n          <span class=\"as-badge as-bg-winner\">URL</span>\n        </a>\n        </td>\n      </tr>\n      <tr>\n        <td>Encoding</td>\n        <td>{{readme?.encoding}}</td>\n        <a>\n          <span  ngxClipboard [cbContent]=\"readme?.encoding\"  class=\"as-badge as-bg-winner\">Copy</span>\n        </a>\n      </tr>\n      <tr>\n        <td>HTML URL</td>\n        <td>{{readme?.html_url}}</td>\n        <a [href]=\"readme?.html_url\">\n          <span class=\"as-badge as-bg-winner\">HTML</span>\n        </a>\n      </tr>\n      <tr>\n        <td>GIT URL</td>\n        <td>{{readme?.git_url}}</td>\n        <a [href]=\"readme?.git_url\">\n          <span class=\"as-badge as-bg-winner\">GIT</span>\n        </a>\n      </tr>\n      <tr>\n        <td>Download URL</td>\n        <td>{{readme?.download_url}}</td>\n        <a [href]=\"readme?.download_url\">\n          <span class=\"as-badge as-bg-winner\">Download</span>\n        </a>\n      </tr>\n      <tr>\n        <td>Self</td>\n        <td>{{readme?._links?.self}}</td>\n        <a [href]=\"readme?._links?.self\">\n          <span class=\"as-badge as-bg-winner\">SELF</span>\n        </a>\n      </tr>\n      <tr>\n        <td>GIT</td>\n        <td>{{readme?._links?.git}}</td>\n        <a [href]=\"readme?._links?.git\">\n          <span class=\"as-badge as-bg-winner\">GIT</span>\n        </a>\n      </tr>\n      <tr>\n        <td>HTML</td>\n        <td>{{readme?._links?.html}}</td>\n        <a [href]=\"readme?._links?.html\">\n          <span class=\"as-badge as-bg-winner\">HTML</span>\n        </a>\n      </tr>\n      <tr>\n        <td>Content</td>\n        <td>{{readme?.content}}</td>\n        <a>\n          <span  ngxClipboard [cbContent]=\"readme?.content\"  class=\"as-badge as-bg-winner\">Copy</span>\n        </a>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/git/info/info.component.scss":
/*!**********************************************!*\
  !*** ./src/app/git/info/info.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-site {\n  margin: 30px 0px; }\n\n.as-json {\n  word-wrap: break-word;\n  word-break: break-all; }\n\n.as-badge {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  width: 100%;\n  margin: 5px;\n  padding: 4px;\n  float: right;\n  font-size: 12px;\n  display: inline-block;\n  border-radius: 5px;\n  border: 1px solid white;\n  text-align: center;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #00b0ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #d50000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #aeea00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b3e5fc;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffab00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #78909c;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #d81b60;\n  color: white;\n  border-radius: 4px; }\n\n.as-circle-sm {\n  border-radius: 15px;\n  padding: 5px; }\n\ntable {\n  word-wrap: break-word;\n  word-break: normal; }\n\n.table-mob {\n  width: 100%;\n  overflow: auto; }\n\n.card {\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0L2luZm8vQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFxhc3BpLWNzcy9zcmNcXGFwcFxcZ2l0XFxpbmZvXFxpbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0Usc0JBQXFCO0VBQ3JCLHNCQUFxQixFQUN0Qjs7QUFXRDtFQUNFLGFBQVk7RUFDWixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsWUFBVztFQUNYLGFBQVk7RUFDWixhQUFZO0VBQ1osZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLG9EQUEyQztFQUEzQyw0Q0FBMkMsRUFDNUM7O0FBRUQ7RUFDRSwwQkE1QmU7RUE2QmYsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWpDZTtFQWtDZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBckNrQjtFQXNDbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXpDaUI7RUEwQ2pCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkE3Q2tCO0VBOENsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBakRlO0VBa0RmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFyRGtCO0VBc0RsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBekRnQjtFQTBEaEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTdEZTtFQThEZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBakVpQjtFQWtFakIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXJFZ0I7RUFzRWhCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxvQkFBbUI7RUFDbkIsYUFBWSxFQUNiOztBQUVEO0VBQ0Usc0JBQXFCO0VBQ3JCLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9naXQvaW5mby9pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzLXNpdGUge1xyXG4gIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuLmFzLWpzb24ge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuJGFzLWJhc2U6ICMwMDAwMDA7XHJcbiRhcy1wcmltYXJ5OiAjMDBiMGZmO1xyXG4kYXMtZGFuZ2VyOiAjZDUwMDAwO1xyXG4kYXMtc3VjY2VzczogI2FlZWEwMDtcclxuJGFzLWluZm86ICNiM2U1ZmM7XHJcbiRhcy13YXJuaW5nOiAjZmZhYjAwO1xyXG4kYXMtbGlnaHQ6ICNlMGUwZTA7XHJcbiRhcy1kYXJrOiAjNzg5MDljO1xyXG4kYXMtd2lubmVyOiAjMGQ0N2ExO1xyXG4kYXMtaGFwcHk6ICNkODFiNjA7XHJcbi5hcy1iYWRnZSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5hcy1iZy1iYXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1iYXNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtYmFzZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtcHJpbWFyeTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYW5nZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXN1Y2Nlc3M7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWluZm87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdhcm5pbmc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctbGlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1saWdodDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1kYXJrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtZGFyaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy13aW5uZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYXMtYmctaGFwcHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1oYXBweTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1jaXJjbGUtc20ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcclxufVxyXG4udGFibGUtbW9iIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uY2FyZCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/git/info/info.component.ts":
/*!********************************************!*\
  !*** ./src/app/git/info/info.component.ts ***!
  \********************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var InfoComponent = /** @class */ (function () {
    function InfoComponent(http) {
        this.http = http;
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get("https://api.github.com/repos/creativecoderone/css/readme")
            .subscribe(function (data) {
            _this.readme = data;
            _this.readme["content"] = atob(_this.readme["content"]);
        });
    };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-info",
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/git/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.scss */ "./src/app/git/info/info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/git/update/update.component.html":
/*!**************************************************!*\
  !*** ./src/app/git/update/update.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"as-site\">\n  <h3>Update file</h3>\n</div>\n<button class=\"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom\" (click)=\"create()\">Create a file</button><br> {{readme|json}}\n"

/***/ }),

/***/ "./src/app/git/update/update.component.scss":
/*!**************************************************!*\
  !*** ./src/app/git/update/update.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-site {\n  margin: 30px 0px; }\n\n.as-json {\n  word-wrap: break-word;\n  word-break: break-all; }\n\n.as-badge {\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n  width: 100%;\n  margin: 5px;\n  padding: 4px;\n  float: right;\n  font-size: 12px;\n  display: inline-block;\n  border-radius: 5px;\n  border: 1px solid white;\n  text-align: center;\n  text-decoration: none;\n  -webkit-transition: background-color 1s ease-in-out;\n  transition: background-color 1s ease-in-out; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-base {\n  background-color: #000000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-primary {\n  background-color: #00b0ff;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-danger {\n  background-color: #d50000;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-success {\n  background-color: #aeea00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-info {\n  background-color: #b3e5fc;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-warning {\n  background-color: #ffab00;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-light {\n  background-color: #e0e0e0;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-dark {\n  background-color: #78909c;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-winner {\n  background-color: #0d47a1;\n  color: white;\n  border-radius: 4px; }\n\n.as-bg-happy {\n  background-color: #d81b60;\n  color: white;\n  border-radius: 4px; }\n\n.as-circle-sm {\n  border-radius: 15px;\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l0L3VwZGF0ZS9DOlxcVXNlcnNcXG1hbm9tdXRoXFxEZXNrdG9wXFxXb3JrRnJvbUhlcmVcXFN0YXJ0SGVyZVxcYXBwbGljYXRpb24td29ya0hlcmVcXGFzcGktY3NzL3NyY1xcYXBwXFxnaXRcXHVwZGF0ZVxcdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0Usc0JBQXFCO0VBQ3JCLHNCQUFxQixFQUN0Qjs7QUFXRDtFQUNFLGFBQVk7RUFDWixnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsWUFBVztFQUNYLGFBQVk7RUFDWixhQUFZO0VBQ1osZ0JBQWU7RUFDZixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLG9EQUEyQztFQUEzQyw0Q0FBMkMsRUFDNUM7O0FBRUQ7RUFDRSwwQkE1QmU7RUE2QmYsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQWpDZTtFQWtDZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBckNrQjtFQXNDbEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXpDaUI7RUEwQ2pCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkE3Q2tCO0VBOENsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBakRlO0VBa0RmLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSwwQkFyRGtCO0VBc0RsQixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBekRnQjtFQTBEaEIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQTdEZTtFQThEZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsMEJBakVpQjtFQWtFakIsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLDBCQXJFZ0I7RUFzRWhCLGFBQVk7RUFDWixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxvQkFBbUI7RUFDbkIsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvZ2l0L3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXMtc2l0ZSB7XHJcbiAgbWFyZ2luOiAzMHB4IDBweDtcclxufVxyXG4uYXMtanNvbiB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG4kYXMtYmFzZTogIzAwMDAwMDtcclxuJGFzLXByaW1hcnk6ICMwMGIwZmY7XHJcbiRhcy1kYW5nZXI6ICNkNTAwMDA7XHJcbiRhcy1zdWNjZXNzOiAjYWVlYTAwO1xyXG4kYXMtaW5mbzogI2IzZTVmYztcclxuJGFzLXdhcm5pbmc6ICNmZmFiMDA7XHJcbiRhcy1saWdodDogI2UwZTBlMDtcclxuJGFzLWRhcms6ICM3ODkwOWM7XHJcbiRhcy13aW5uZXI6ICMwZDQ3YTE7XHJcbiRhcy1oYXBweTogI2Q4MWI2MDtcclxuLmFzLWJhZGdlIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWJhc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1iYXNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWRhbmdlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtc3VjY2VzcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtaW5mbztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2FybmluZztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWxpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy1kYXJrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWJnLXdpbm5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLXdpbm5lcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5hcy1iZy1oYXBweSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFzLWhhcHB5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmFzLWNpcmNsZS1zbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/git/update/update.component.ts":
/*!************************************************!*\
  !*** ./src/app/git/update/update.component.ts ***!
  \************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        Authorization: "5ab0aa0c0f94f5a366b623ffbe6219dda950d462"
    })
};
var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(http) {
        this.http = http;
    }
    UpdateComponent.prototype.ngOnInit = function () { };
    UpdateComponent.prototype.create = function () {
        var _this = this;
        var data = {
            message: "my commit message",
            committer: {
                name: "Manojkumar Muthukumar",
                email: "creativecoderone@gmail.com"
            },
            content: btoa("Hello Baby Boy")
        };
        this.http
            .put("https://api.github.com/repos/creativecodeone/contents/poster/zl1k56.txt", data, httpOptions)
            .subscribe(function (da) {
            _this.readme = da;
            console.log(_this.readme);
        });
    };
    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-update",
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/git/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.scss */ "./src/app/git/update/update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/sanitaizer.pipe.ts":
/*!************************************!*\
  !*** ./src/app/sanitaizer.pipe.ts ***!
  \************************************/
/*! exports provided: SanitaizerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitaizerPipe", function() { return SanitaizerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SanitaizerPipe = /** @class */ (function () {
    function SanitaizerPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitaizerPipe.prototype.transform = function (value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    SanitaizerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "sanitaizer"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SanitaizerPipe);
    return SanitaizerPipe;
}());



/***/ }),

/***/ "./src/app/services/speech.ts":
/*!************************************!*\
  !*** ./src/app/services/speech.ts ***!
  \************************************/
/*! exports provided: SpeechRecognitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognitionService", function() { return SpeechRecognitionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SpeechRecognitionService = /** @class */ (function () {
    function SpeechRecognitionService(zone) {
        this.zone = zone;
    }
    SpeechRecognitionService.prototype.record = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            _this.speechRecognition = new webkitSpeechRecognition();
            _this.speechRecognition.continuous = true;
            _this.speechRecognition.lang = "en-us";
            _this.speechRecognition.maxAlternatives = 1;
            _this.speechRecognition.onresult = function (speech) {
                var term = "";
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log("Unrecognized result - Please try again");
                        }
                        else {
                            term = lodash__WEBPACK_IMPORTED_MODULE_2__["trim"](transcript);
                            console.log("Did you said? -> " +
                                term +
                                " , If not then say something else...");
                        }
                    }
                }
                _this.zone.run(function () {
                    observer.next(term);
                });
            };
            _this.speechRecognition.onerror = function (error) {
                observer.error(error);
            };
            _this.speechRecognition.onend = function () {
                observer.complete();
            };
            _this.speechRecognition.start();
            console.log("Say something - We are listening !!!");
        });
    };
    SpeechRecognitionService.prototype.DestroySpeechObject = function () {
        if (this.speechRecognition) {
            this.speechRecognition.stop();
        }
    };
    SpeechRecognitionService.prototype.compareTwoStrings = function (first1, second1) {
        var first = first1.replace(/\s+/g, "");
        var second = second1.replace(/\s+/g, "");
        if (!first.length && !second.length) {
            return 1;
        } // if both are empty strings
        if (!first.length || !second.length) {
            return 0;
        } // if only one is empty string
        if (first === second) {
            return 1;
        } // identical
        if (first.length === 1 && second.length === 1) {
            return 0;
        } // both are 1-letter strings
        if (first.length < 2 || second.length < 2) {
            return 0;
        } // if either is a 1-letter string
        var firstBigrams = new Map();
        for (var i = 0; i < first.length - 1; i++) {
            var bigram = first.substring(i, i + 2);
            var count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;
            firstBigrams.set(bigram, count);
        }
        var intersectionSize = 0;
        for (var i = 0; i < second.length - 1; i++) {
            var bigram = second.substring(i, i + 2);
            var count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;
            if (count > 0) {
                firstBigrams.set(bigram, count - 1);
                intersectionSize++;
            }
        }
        return 2.0 * intersectionSize / (first.length + second.length - 2);
    };
    SpeechRecognitionService.prototype.findBestMatch = function (mainString, targetStrings) {
        var ratings = [];
        var bestMatchIndex = 0;
        for (var i = 0; i < targetStrings.length; i++) {
            var currentTargetString = targetStrings[i];
            var currentRating = this.compareTwoStrings(mainString, currentTargetString);
            ratings.push({ target: currentTargetString, rating: currentRating });
            if (currentRating > ratings[bestMatchIndex].rating) {
                bestMatchIndex = i;
            }
        }
        var bestMatch = ratings[bestMatchIndex];
        return { ratings: ratings, bestMatch: bestMatch, bestMatchIndex: bestMatchIndex };
    };
    SpeechRecognitionService.prototype.areArgsValid = function (mainString, targetStrings) {
        if (typeof mainString !== "string") {
            return false;
        }
        if (!Array.isArray(targetStrings)) {
            return false;
        }
        if (!targetStrings.length) {
            return false;
        }
        if (targetStrings.find(function (s) { return typeof s !== "string"; })) {
            return false;
        }
        return true;
    };
    SpeechRecognitionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], SpeechRecognitionService);
    return SpeechRecognitionService;
}());



/***/ }),

/***/ "./src/app/theme/editor/FONT.ts":
/*!**************************************!*\
  !*** ./src/app/theme/editor/FONT.ts ***!
  \**************************************/
/*! exports provided: FONT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT", function() { return FONT; });
var FONT = [
    "fas fa-address-book",
    "fas fa-address-card",
    "fas fa-adjust",
    "fas fa-align-center",
    "fas fa-align-justify",
    "fas fa-align-left",
    "fas fa-align-right",
    "fas fa-allergies",
    "fas fa-ambulance",
    "fas fa-american-sign-language-interpreting",
    "fas fa-anchor",
    "fas fa-angle-double-down",
    "fas fa-angle-double-left",
    "fas fa-angle-double-right",
    "fas fa-angle-double-up",
    "fas fa-angle-down",
    "fas fa-angle-left",
    "fas fa-angle-right",
    "fas fa-angle-up",
    "fas fa-archive",
    "fas fa-arrow-alt-circle-down",
    "fas fa-arrow-alt-circle-left",
    "fas fa-arrow-alt-circle-right",
    "fas fa-arrow-alt-circle-up",
    "fas fa-arrow-circle-down",
    "fas fa-arrow-circle-left",
    "fas fa-arrow-circle-right",
    "fas fa-arrow-circle-up",
    "fas fa-arrow-down",
    "fas fa-arrow-left",
    "fas fa-arrow-right",
    "fas fa-arrow-up",
    "fas fa-arrows-alt",
    "fas fa-arrows-alt-h",
    "fas fa-arrows-alt-v",
    "fas fa-assistive-listening-systems",
    "fas fa-asterisk",
    "fas fa-at",
    "fas fa-audio-description",
    "fas fa-backward",
    "fas fa-balance-scale",
    "fas fa-ban",
    "fas fa-band-aid",
    "fas fa-barcode",
    "fas fa-bars",
    "fas fa-baseball-ball",
    "fas fa-basketball-ball",
    "fas fa-bath",
    "fas fa-battery-empty",
    "fas fa-battery-full",
    "fas fa-battery-half",
    "fas fa-battery-quarter",
    "fas fa-battery-three-quarters",
    "fas fa-bed",
    "fas fa-beer",
    "fas fa-bell",
    "fas fa-bell-slash",
    "fas fa-bicycle",
    "fas fa-binoculars",
    "fas fa-birthday-cake",
    "fas fa-blind",
    "fas fa-bold",
    "fas fa-bolt",
    "fas fa-bomb",
    "fas fa-book",
    "fas fa-bookmark",
    "fas fa-bowling-ball",
    "fas fa-box",
    "fas fa-box-open",
    "fas fa-boxes",
    "fas fa-braille",
    "fas fa-briefcase",
    "fas fa-briefcase-medical",
    "fas fa-bug",
    "fas fa-building",
    "fas fa-bullhorn",
    "fas fa-bullseye",
    "fas fa-burn",
    "fas fa-bus",
    "fas fa-calculator",
    "fas fa-calendar",
    "fas fa-calendar-alt",
    "fas fa-calendar-check",
    "fas fa-calendar-minus",
    "fas fa-calendar-plus",
    "fas fa-calendar-times",
    "fas fa-camera",
    "fas fa-camera-retro",
    "fas fa-capsules",
    "fas fa-car",
    "fas fa-caret-down",
    "fas fa-caret-left",
    "fas fa-caret-right",
    "fas fa-caret-square-down",
    "fas fa-caret-square-left",
    "fas fa-caret-square-right",
    "fas fa-caret-square-up",
    "fas fa-caret-up",
    "fas fa-cart-arrow-down",
    "fas fa-cart-plus",
    "fas fa-certificate",
    "fas fa-chart-area",
    "fas fa-chart-bar",
    "fas fa-chart-line",
    "fas fa-chart-pie",
    "fas fa-check",
    "fas fa-check-circle",
    "fas fa-check-square",
    "fas fa-chess",
    "fas fa-chess-bishop",
    "fas fa-chess-board",
    "fas fa-chess-king",
    "fas fa-chess-knight",
    "fas fa-chess-pawn",
    "fas fa-chess-queen",
    "fas fa-chess-rook",
    "fas fa-chevron-circle-down",
    "fas fa-chevron-circle-left",
    "fas fa-chevron-circle-right",
    "fas fa-chevron-circle-up",
    "fas fa-chevron-down",
    "fas fa-chevron-left",
    "fas fa-chevron-right",
    "fas fa-chevron-up",
    "fas fa-child",
    "fas fa-circle",
    "fas fa-circle-notch",
    "fas fa-clipboard",
    "fas fa-clipboard-check",
    "fas fa-clipboard-list",
    "fas fa-clock",
    "fas fa-clone",
    "fas fa-closed-captioning",
    "fas fa-cloud",
    "fas fa-cloud-download-alt",
    "fas fa-cloud-upload-alt",
    "fas fa-code",
    "fas fa-code-branch",
    "fas fa-coffee",
    "fas fa-cog",
    "fas fa-cogs",
    "fas fa-columns",
    "fas fa-comment",
    "fas fa-comment-alt",
    "fas fa-comment-dots",
    "fas fa-comment-slash",
    "fas fa-comments",
    "fas fa-compass",
    "fas fa-compress",
    "fas fa-copy",
    "fas fa-copyright",
    "fas fa-couch",
    "fas fa-credit-card",
    "fas fa-crop",
    "fas fa-crosshairs",
    "fas fa-cube",
    "fas fa-cubes",
    "fas fa-cut",
    "fas fa-database",
    "fas fa-deaf",
    "fas fa-desktop",
    "fas fa-diagnoses",
    "fas fa-dna",
    "fas fa-dollar-sign",
    "fas fa-dolly",
    "fas fa-dolly-flatbed",
    "fas fa-donate",
    "fas fa-dot-circle",
    "fas fa-dove",
    "fas fa-download",
    "fas fa-edit",
    "fas fa-eject",
    "fas fa-ellipsis-h",
    "fas fa-ellipsis-v",
    "fas fa-envelope",
    "fas fa-envelope-open",
    "fas fa-envelope-square",
    "fas fa-eraser",
    "fas fa-euro-sign",
    "fas fa-exchange-alt",
    "fas fa-exclamation",
    "fas fa-exclamation-circle",
    "fas fa-exclamation-triangle",
    "fas fa-expand",
    "fas fa-expand-arrows-alt",
    "fas fa-external-link-alt",
    "fas fa-external-link-square-alt",
    "fas fa-eye",
    "fas fa-eye-dropper",
    "fas fa-eye-slash",
    "fas fa-fast-backward",
    "fas fa-fast-forward",
    "fas fa-fax",
    "fas fa-female",
    "fas fa-fighter-jet",
    "fas fa-file",
    "fas fa-file-alt",
    "fas fa-file-archive",
    "fas fa-file-audio",
    "fas fa-file-code",
    "fas fa-file-excel",
    "fas fa-file-image",
    "fas fa-file-medical",
    "fas fa-file-medical-alt",
    "fas fa-file-pdf",
    "fas fa-file-powerpoint",
    "fas fa-file-video",
    "fas fa-file-word",
    "fas fa-film",
    "fas fa-filter",
    "fas fa-fire",
    "fas fa-fire-extinguisher",
    "fas fa-first-aid",
    "fas fa-flag",
    "fas fa-flag-checkered",
    "fas fa-flask",
    "fas fa-folder",
    "fas fa-folder-open",
    "fas fa-font",
    "fas fa-football-ball",
    "fas fa-forward",
    "fas fa-frown",
    "fas fa-futbol",
    "fas fa-gamepad",
    "fas fa-gavel",
    "fas fa-gem",
    "fas fa-genderless",
    "fas fa-gift",
    "fas fa-glass-martini",
    "fas fa-globe",
    "fas fa-golf-ball",
    "fas fa-graduation-cap",
    "fas fa-h-square",
    "fas fa-hand-holding",
    "fas fa-hand-holding-heart",
    "fas fa-hand-holding-usd",
    "fas fa-hand-lizard",
    "fas fa-hand-paper",
    "fas fa-hand-peace",
    "fas fa-hand-point-down",
    "fas fa-hand-point-left",
    "fas fa-hand-point-right",
    "fas fa-hand-point-up",
    "fas fa-hand-pointer",
    "fas fa-hand-rock",
    "fas fa-hand-scissors",
    "fas fa-hand-spock",
    "fas fa-hands",
    "fas fa-hands-helping",
    "fas fa-handshake",
    "fas fa-hashtag",
    "fas fa-hdd",
    "fas fa-heading",
    "fas fa-headphones",
    "fas fa-heart",
    "fas fa-heartbeat",
    "fas fa-history",
    "fas fa-hockey-puck",
    "fas fa-home",
    "fas fa-hospital",
    "fas fa-hospital-alt",
    "fas fa-hospital-symbol",
    "fas fa-hourglass",
    "fas fa-hourglass-end",
    "fas fa-hourglass-half",
    "fas fa-hourglass-start",
    "fas fa-i-cursor",
    "fas fa-id-badge",
    "fas fa-id-card",
    "fas fa-id-card-alt",
    "fas fa-image",
    "fas fa-images",
    "fas fa-inbox",
    "fas fa-indent",
    "fas fa-industry",
    "fas fa-info",
    "fas fa-info-circle",
    "fas fa-italic",
    "fas fa-key",
    "fas fa-keyboard",
    "fas fa-language",
    "fas fa-laptop",
    "fas fa-leaf",
    "fas fa-lemon",
    "fas fa-level-down-alt",
    "fas fa-level-up-alt",
    "fas fa-life-ring",
    "fas fa-lightbulb",
    "fas fa-link",
    "fas fa-lira-sign",
    "fas fa-list",
    "fas fa-list-alt",
    "fas fa-list-ol",
    "fas fa-list-ul",
    "fas fa-location-arrow",
    "fas fa-lock",
    "fas fa-lock-open",
    "fas fa-long-arrow-alt-down",
    "fas fa-long-arrow-alt-left",
    "fas fa-long-arrow-alt-right",
    "fas fa-long-arrow-alt-up",
    "fas fa-low-vision",
    "fas fa-magic",
    "fas fa-magnet",
    "fas fa-male",
    "fas fa-map",
    "fas fa-map-marker",
    "fas fa-map-marker-alt",
    "fas fa-map-pin",
    "fas fa-map-signs",
    "fas fa-mars",
    "fas fa-mars-double",
    "fas fa-mars-stroke",
    "fas fa-mars-stroke-h",
    "fas fa-mars-stroke-v",
    "fas fa-medkit",
    "fas fa-meh",
    "fas fa-mercury",
    "fas fa-microchip",
    "fas fa-microphone",
    "fas fa-microphone-slash",
    "fas fa-minus",
    "fas fa-minus-circle",
    "fas fa-minus-square",
    "fas fa-mobile",
    "fas fa-mobile-alt",
    "fas fa-money-bill-alt",
    "fas fa-moon",
    "fas fa-motorcycle",
    "fas fa-mouse-pointer",
    "fas fa-music",
    "fas fa-neuter",
    "fas fa-newspaper",
    "fas fa-notes-medical",
    "fas fa-object-group",
    "fas fa-object-ungroup",
    "fas fa-outdent",
    "fas fa-paint-brush",
    "fas fa-pallet",
    "fas fa-paper-plane",
    "fas fa-paperclip",
    "fas fa-parachute-box",
    "fas fa-paragraph",
    "fas fa-paste",
    "fas fa-pause",
    "fas fa-pause-circle",
    "fas fa-paw",
    "fas fa-pen-square",
    "fas fa-pencil-alt",
    "fas fa-people-carry",
    "fas fa-percent",
    "fas fa-phone",
    "fas fa-phone-slash",
    "fas fa-phone-square",
    "fas fa-phone-volume",
    "fas fa-piggy-bank",
    "fas fa-pills",
    "fas fa-plane",
    "fas fa-play",
    "fas fa-play-circle",
    "fas fa-plug",
    "fas fa-plus",
    "fas fa-plus-circle",
    "fas fa-plus-square",
    "fas fa-podcast",
    "fas fa-poo",
    "fas fa-pound-sign",
    "fas fa-power-off",
    "fas fa-prescription-bottle",
    "fas fa-prescription-bottle-alt",
    "fas fa-print",
    "fas fa-procedures",
    "fas fa-puzzle-piece",
    "fas fa-qrcode",
    "fas fa-question",
    "fas fa-question-circle",
    "fas fa-quidditch",
    "fas fa-quote-left",
    "fas fa-quote-right",
    "fas fa-random",
    "fas fa-recycle",
    "fas fa-redo",
    "fas fa-redo-alt",
    "fas fa-registered",
    "fas fa-reply",
    "fas fa-reply-all",
    "fas fa-retweet",
    "fas fa-ribbon",
    "fas fa-road",
    "fas fa-rocket",
    "fas fa-rss",
    "fas fa-rss-square",
    "fas fa-ruble-sign",
    "fas fa-rupee-sign",
    "fas fa-save",
    "fas fa-search",
    "fas fa-search-minus",
    "fas fa-search-plus",
    "fas fa-seedling",
    "fas fa-server",
    "fas fa-share",
    "fas fa-share-alt",
    "fas fa-share-alt-square",
    "fas fa-share-square",
    "fas fa-shekel-sign",
    "fas fa-shield-alt",
    "fas fa-ship",
    "fas fa-shipping-fast",
    "fas fa-shopping-bag",
    "fas fa-shopping-basket",
    "fas fa-shopping-cart",
    "fas fa-shower",
    "fas fa-sign",
    "fas fa-sign-in-alt",
    "fas fa-sign-language",
    "fas fa-sign-out-alt",
    "fas fa-signal",
    "fas fa-sitemap",
    "fas fa-sliders-h",
    "fas fa-smile",
    "fas fa-smoking",
    "fas fa-snowflake",
    "fas fa-sort",
    "fas fa-sort-alpha-down",
    "fas fa-sort-alpha-up",
    "fas fa-sort-amount-down",
    "fas fa-sort-amount-up",
    "fas fa-sort-down",
    "fas fa-sort-numeric-down",
    "fas fa-sort-numeric-up",
    "fas fa-sort-up",
    "fas fa-space-shuttle",
    "fas fa-spinner",
    "fas fa-square",
    "fas fa-square-full",
    "fas fa-star",
    "fas fa-star-half",
    "fas fa-step-backward",
    "fas fa-step-forward",
    "fas fa-stethoscope",
    "fas fa-sticky-note",
    "fas fa-stop",
    "fas fa-stop-circle",
    "fas fa-stopwatch",
    "fas fa-street-view",
    "fas fa-strikethrough",
    "fas fa-subscript",
    "fas fa-subway",
    "fas fa-suitcase",
    "fas fa-sun",
    "fas fa-superscript",
    "fas fa-sync",
    "fas fa-sync-alt",
    "fas fa-syringe",
    "fas fa-table",
    "fas fa-table-tennis",
    "fas fa-tablet",
    "fas fa-tablet-alt",
    "fas fa-tablets",
    "fas fa-tachometer-alt",
    "fas fa-tag",
    "fas fa-tags",
    "fas fa-tape",
    "fas fa-tasks",
    "fas fa-taxi",
    "fas fa-terminal",
    "fas fa-text-height",
    "fas fa-text-width",
    "fas fa-th",
    "fas fa-th-large",
    "fas fa-th-list",
    "fas fa-thermometer",
    "fas fa-thermometer-empty",
    "fas fa-thermometer-full",
    "fas fa-thermometer-half",
    "fas fa-thermometer-quarter",
    "fas fa-thermometer-three-quarters",
    "fas fa-thumbs-down",
    "fas fa-thumbs-up",
    "fas fa-thumbtack",
    "fas fa-ticket-alt",
    "fas fa-times",
    "fas fa-times-circle",
    "fas fa-tint",
    "fas fa-toggle-off",
    "fas fa-toggle-on",
    "fas fa-trademark",
    "fas fa-train",
    "fas fa-transgender",
    "fas fa-transgender-alt",
    "fas fa-trash",
    "fas fa-trash-alt",
    "fas fa-tree",
    "fas fa-trophy",
    "fas fa-truck",
    "fas fa-truck-loading",
    "fas fa-truck-moving",
    "fas fa-tty",
    "fas fa-tv",
    "fas fa-umbrella",
    "fas fa-underline",
    "fas fa-undo",
    "fas fa-undo-alt",
    "fas fa-universal-access",
    "fas fa-university",
    "fas fa-unlink",
    "fas fa-unlock",
    "fas fa-unlock-alt",
    "fas fa-upload",
    "fas fa-user",
    "fas fa-user-circle",
    "fas fa-user-md",
    "fas fa-user-plus",
    "fas fa-user-secret",
    "fas fa-user-times",
    "fas fa-users",
    "fas fa-utensil-spoon",
    "fas fa-utensils",
    "fas fa-venus",
    "fas fa-venus-double",
    "fas fa-venus-mars",
    "fas fa-vial",
    "fas fa-vials",
    "fas fa-video",
    "fas fa-video-slash",
    "fas fa-volleyball-ball",
    "fas fa-volume-down",
    "fas fa-volume-off",
    "fas fa-volume-up",
    "fas fa-warehouse",
    "fas fa-weight",
    "fas fa-wheelchair",
    "fas fa-wifi",
    "fas fa-window-close",
    "fas fa-window-maximize",
    "fas fa-window-minimize",
    "fas fa-window-restore",
    "fas fa-wine-glass",
    "fas fa-won-sign",
    "fas fa-wrench",
    "fas fa-x-ray",
    "fas fa-yen-sign",
    "far fa-address-book",
    "far fa-address-card",
    "far fa-arrow-alt-circle-down",
    "far fa-arrow-alt-circle-left",
    "far fa-arrow-alt-circle-right",
    "far fa-arrow-alt-circle-up",
    "far fa-bell",
    "far fa-bell-slash",
    "far fa-bookmark",
    "far fa-building",
    "far fa-calendar",
    "far fa-calendar-alt",
    "far fa-calendar-check",
    "far fa-calendar-minus",
    "far fa-calendar-plus",
    "far fa-calendar-times",
    "far fa-caret-square-down",
    "far fa-caret-square-left",
    "far fa-caret-square-right",
    "far fa-caret-square-up",
    "far fa-chart-bar",
    "far fa-check-circle",
    "far fa-check-square",
    "far fa-circle",
    "far fa-clipboard",
    "far fa-clock",
    "far fa-clone",
    "far fa-closed-captioning",
    "far fa-comment",
    "far fa-comment-alt",
    "far fa-comments",
    "far fa-compass",
    "far fa-copy",
    "far fa-copyright",
    "far fa-credit-card",
    "far fa-dot-circle",
    "far fa-edit",
    "far fa-envelope",
    "far fa-envelope-open",
    "far fa-eye-slash",
    "far fa-file",
    "far fa-file-alt",
    "far fa-file-archive",
    "far fa-file-audio",
    "far fa-file-code",
    "far fa-file-excel",
    "far fa-file-image",
    "far fa-file-pdf",
    "far fa-file-powerpoint",
    "far fa-file-video",
    "far fa-file-word",
    "far fa-flag",
    "far fa-folder",
    "far fa-folder-open",
    "far fa-frown",
    "far fa-futbol",
    "far fa-gem",
    "far fa-hand-lizard",
    "far fa-hand-paper",
    "far fa-hand-peace",
    "far fa-hand-point-down",
    "far fa-hand-point-left",
    "far fa-hand-point-right",
    "far fa-hand-point-up",
    "far fa-hand-pointer",
    "far fa-hand-rock",
    "far fa-hand-scissors",
    "far fa-hand-spock",
    "far fa-handshake",
    "far fa-hdd",
    "far fa-heart",
    "far fa-hospital",
    "far fa-hourglass",
    "far fa-id-badge",
    "far fa-id-card",
    "far fa-image",
    "far fa-images",
    "far fa-keyboard",
    "far fa-lemon",
    "far fa-life-ring",
    "far fa-lightbulb",
    "far fa-list-alt",
    "far fa-map",
    "far fa-meh",
    "far fa-minus-square",
    "far fa-money-bill-alt",
    "far fa-moon",
    "far fa-newspaper",
    "far fa-object-group",
    "far fa-object-ungroup",
    "far fa-paper-plane",
    "far fa-pause-circle",
    "far fa-play-circle",
    "far fa-plus-square",
    "far fa-question-circle",
    "far fa-registered",
    "far fa-save",
    "far fa-share-square",
    "far fa-smile",
    "far fa-snowflake",
    "far fa-square",
    "far fa-star",
    "far fa-star-half",
    "far fa-sticky-note",
    "far fa-stop-circle",
    "far fa-sun",
    "far fa-thumbs-down",
    "far fa-thumbs-up",
    "far fa-times-circle",
    "far fa-trash-alt",
    "far fa-user",
    "far fa-user-circle",
    "far fa-window-close",
    "far fa-window-maximize",
    "far fa-window-minimize",
    "far fa-window-restore",
    "fab fa-500px",
    "fab fa-accessible-icon",
    "fab fa-accusoft",
    "fab fa-adn",
    "fab fa-adversal",
    "fab fa-affiliatetheme",
    "fab fa-algolia",
    "fab fa-amazon",
    "fab fa-amazon-pay",
    "fab fa-amilia",
    "fab fa-android",
    "fab fa-angellist",
    "fab fa-angrycreative",
    "fab fa-angular",
    "fab fa-app-store",
    "fab fa-app-store-ios",
    "fab fa-apper",
    "fab fa-apple",
    "fab fa-apple-pay",
    "fab fa-asymmetrik",
    "fab fa-audible",
    "fab fa-autoprefixer",
    "fab fa-avianex",
    "fab fa-aviato",
    "fab fa-aws",
    "fab fa-bandcamp",
    "fab fa-behance",
    "fab fa-behance-square",
    "fab fa-bimobject",
    "fab fa-bitbucket",
    "fab fa-bitcoin",
    "fab fa-bity",
    "fab fa-black-tie",
    "fab fa-blackberry",
    "fab fa-blogger",
    "fab fa-blogger-b",
    "fab fa-bluetooth",
    "fab fa-bluetooth-b",
    "fab fa-btc",
    "fab fa-buromobelexperte",
    "fab fa-buysellads",
    "fab fa-cc-amazon-pay",
    "fab fa-cc-amex",
    "fab fa-cc-apple-pay",
    "fab fa-cc-diners-club",
    "fab fa-cc-discover",
    "fab fa-cc-jcb",
    "fab fa-cc-mastercard",
    "fab fa-cc-paypal",
    "fab fa-cc-stripe",
    "fab fa-cc-visa",
    "fab fa-centercode",
    "fab fa-chrome",
    "fab fa-cloudscale",
    "fab fa-cloudsmith",
    "fab fa-cloudversify",
    "fab fa-codepen",
    "fab fa-codiepie",
    "fab fa-connectdevelop",
    "fab fa-contao",
    "fab fa-cpanel",
    "fab fa-creative-commons",
    "fab fa-css3",
    "fab fa-css3-alt",
    "fab fa-cuttlefish",
    "fab fa-d-and-d",
    "fab fa-dashcube",
    "fab fa-delicious",
    "fab fa-deploydog",
    "fab fa-deskpro",
    "fab fa-deviantart",
    "fab fa-digg",
    "fab fa-digital-ocean",
    "fab fa-discord",
    "fab fa-discourse",
    "fab fa-dochub",
    "fab fa-docker",
    "fab fa-draft2digital",
    "fab fa-dribbble",
    "fab fa-dribbble-square",
    "fab fa-dropbox",
    "fab fa-drupal",
    "fab fa-dyalog",
    "fab fa-earlybirds",
    "fab fa-edge",
    "fab fa-elementor",
    "fab fa-ember",
    "fab fa-empire",
    "fab fa-envira",
    "fab fa-erlang",
    "fab fa-ethereum",
    "fab fa-etsy",
    "fab fa-expeditedssl",
    "fab fa-facebook",
    "fab fa-facebook-f",
    "fab fa-facebook-messenger",
    "fab fa-facebook-square",
    "fab fa-firefox",
    "fab fa-first-order",
    "fab fa-firstdraft",
    "fab fa-flickr",
    "fab fa-flipboard",
    "fab fa-fly",
    "fab fa-font-awesome",
    "fab fa-font-awesome-alt",
    "fab fa-font-awesome-flag",
    "fab fa-fonticons",
    "fab fa-fonticons-fi",
    "fab fa-fort-awesome",
    "fab fa-fort-awesome-alt",
    "fab fa-forumbee",
    "fab fa-foursquare",
    "fab fa-free-code-camp",
    "fab fa-freebsd",
    "fab fa-get-pocket",
    "fab fa-gg",
    "fab fa-gg-circle",
    "fab fa-git",
    "fab fa-git-square",
    "fab fa-github",
    "fab fa-github-alt",
    "fab fa-github-square",
    "fab fa-gitkraken",
    "fab fa-gitlab",
    "fab fa-gitter",
    "fab fa-glide",
    "fab fa-glide-g",
    "fab fa-gofore",
    "fab fa-goodreads",
    "fab fa-goodreads-g",
    "fab fa-google",
    "fab fa-google-drive",
    "fab fa-google-play",
    "fab fa-google-plus",
    "fab fa-google-plus-g",
    "fab fa-google-plus-square",
    "fab fa-google-wallet",
    "fab fa-gratipay",
    "fab fa-grav",
    "fab fa-gripfire",
    "fab fa-grunt",
    "fab fa-gulp",
    "fab fa-hacker-news",
    "fab fa-hacker-news-square",
    "fab fa-hips",
    "fab fa-hire-a-helper",
    "fab fa-hooli",
    "fab fa-hotjar",
    "fab fa-houzz",
    "fab fa-html5",
    "fab fa-hubspot",
    "fab fa-imdb",
    "fab fa-instagram",
    "fab fa-internet-explorer",
    "fab fa-ioxhost",
    "fab fa-itunes",
    "fab fa-itunes-note",
    "fab fa-jenkins",
    "fab fa-joget",
    "fab fa-joomla",
    "fab fa-js",
    "fab fa-js-square",
    "fab fa-jsfiddle",
    "fab fa-keycdn",
    "fab fa-kickstarter",
    "fab fa-kickstarter-k",
    "fab fa-korvue",
    "fab fa-laravel",
    "fab fa-lastfm",
    "fab fa-lastfm-square",
    "fab fa-leanpub",
    "fab fa-less",
    "fab fa-line",
    "fab fa-linkedin",
    "fab fa-linkedin-in",
    "fab fa-linode",
    "fab fa-linux",
    "fab fa-lyft",
    "fab fa-magento",
    "fab fa-maxcdn",
    "fab fa-medapps",
    "fab fa-medium",
    "fab fa-medium-m",
    "fab fa-medrt",
    "fab fa-meetup",
    "fab fa-microsoft",
    "fab fa-mix",
    "fab fa-mixcloud",
    "fab fa-mizuni",
    "fab fa-modx",
    "fab fa-monero",
    "fab fa-napster",
    "fab fa-nintendo-switch",
    "fab fa-node",
    "fab fa-node-js",
    "fab fa-npm",
    "fab fa-ns8",
    "fab fa-nutritionix",
    "fab fa-odnoklassniki",
    "fab fa-odnoklassniki-square",
    "fab fa-opencart",
    "fab fa-openid",
    "fab fa-opera",
    "fab fa-optin-monster",
    "fab fa-osi",
    "fab fa-page4",
    "fab fa-pagelines",
    "fab fa-palfed",
    "fab fa-patreon",
    "fab fa-paypal",
    "fab fa-periscope",
    "fab fa-phabricator",
    "fab fa-phoenix-framework",
    "fab fa-php",
    "fab fa-pied-piper",
    "fab fa-pied-piper-alt",
    "fab fa-pied-piper-pp",
    "fab fa-pinterest",
    "fab fa-pinterest-p",
    "fab fa-pinterest-square",
    "fab fa-playstation",
    "fab fa-product-hunt",
    "fab fa-pushed",
    "fab fa-python",
    "fab fa-qq",
    "fab fa-quinscape",
    "fab fa-quora",
    "fab fa-ravelry",
    "fab fa-react",
    "fab fa-readme",
    "fab fa-rebel",
    "fab fa-red-river",
    "fab fa-reddit",
    "fab fa-reddit-alien",
    "fab fa-reddit-square",
    "fab fa-rendact",
    "fab fa-renren",
    "fab fa-replyd",
    "fab fa-resolving",
    "fab fa-rocketchat",
    "fab fa-rockrms",
    "fab fa-safari",
    "fab fa-sass",
    "fab fa-schlix",
    "fab fa-scribd",
    "fab fa-searchengin",
    "fab fa-sellcast",
    "fab fa-sellsy",
    "fab fa-servicestack",
    "fab fa-shirtsinbulk",
    "fab fa-simplybuilt",
    "fab fa-sistrix",
    "fab fa-skyatlas",
    "fab fa-skype",
    "fab fa-slack",
    "fab fa-slack-hash",
    "fab fa-slideshare",
    "fab fa-snapchat",
    "fab fa-snapchat-ghost",
    "fab fa-snapchat-square",
    "fab fa-soundcloud",
    "fab fa-speakap",
    "fab fa-spotify",
    "fab fa-stack-exchange",
    "fab fa-stack-overflow",
    "fab fa-staylinked",
    "fab fa-steam",
    "fab fa-steam-square",
    "fab fa-steam-symbol",
    "fab fa-sticker-mule",
    "fab fa-strava",
    "fab fa-stripe",
    "fab fa-stripe-s",
    "fab fa-studiovinari",
    "fab fa-stumbleupon",
    "fab fa-stumbleupon-circle",
    "fab fa-superpowers",
    "fab fa-supple",
    "fab fa-telegram",
    "fab fa-telegram-plane",
    "fab fa-tencent-weibo",
    "fab fa-themeisle",
    "fab fa-trello",
    "fab fa-tripadvisor",
    "fab fa-tumblr",
    "fab fa-tumblr-square",
    "fab fa-twitch",
    "fab fa-twitter",
    "fab fa-twitter-square",
    "fab fa-typo3",
    "fab fa-uber",
    "fab fa-uikit",
    "fab fa-uniregistry",
    "fab fa-untappd",
    "fab fa-usb",
    "fab fa-ussunnah",
    "fab fa-vaadin",
    "fab fa-viacoin",
    "fab fa-viadeo",
    "fab fa-viadeo-square",
    "fab fa-viber",
    "fab fa-vimeo",
    "fab fa-vimeo-square",
    "fab fa-vimeo-v",
    "fab fa-vine",
    "fab fa-vk",
    "fab fa-vnv",
    "fab fa-vuejs",
    "fab fa-weibo",
    "fab fa-weixin",
    "fab fa-whatsapp",
    "fab fa-whatsapp-square",
    "fab fa-whmcs",
    "fab fa-wikipedia-w",
    "fab fa-windows",
    "fab fa-wordpress",
    "fab fa-wordpress-simple",
    "fab fa-wpbeginner",
    "fab fa-wpexplorer",
    "fab fa-wpforms",
    "fab fa-xbox",
    "fab fa-xing",
    "fab fa-xing-square",
    "fab fa-y-combinator",
    "fab fa-yahoo",
    "fab fa-yandex",
    "fab fa-yandex-international",
    "fab fa-yelp",
    "fab fa-yoast",
    "fab fa-youtube",
    "fab fa-youtube-square"
];


/***/ }),

/***/ "./src/app/theme/editor/editor.component.html":
/*!****************************************************!*\
  !*** ./src/app/theme/editor/editor.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated slideInUp\" id=\"editor\">\n  <img src=\"./assets/sti.png\" class=\"imgod\" alt=\"\">\n\n  <div class=\"row\" id=\"acur\">\n    <div class=\"col-md-6\">\n\n      <div class=\"container\">\n        <div class=\"card cxs\" style=\"border: 0px;\">\n\n          <ul class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\n            <li class=\"nav-item\" uk-tooltip=\"Blocks\">\n              <a class=\"nav-link active\" id=\"pills-home-tab\" data-toggle=\"pill\" href=\"#pills-home\" role=\"tab\" aria-controls=\"pills-home\"\n                aria-selected=\"true\"> <i class='fas fa-code'></i></a>\n            </li>\n            <li class=\"nav-item\" uk-tooltip=\"Links\">\n              <a class=\"nav-link\" id=\"pills-profile-tab\" data-toggle=\"pill\" href=\"#pills-profile\" role=\"tab\" aria-controls=\"pills-profile\"\n                aria-selected=\"false\"> <i class='fas fa-external-link-alt'></i> </a>\n            </li>\n            <li class=\"nav-item\" uk-tooltip=\"Images\">\n              <a class=\"nav-link\" id=\"pills-contact-tab\" data-toggle=\"pill\" href=\"#pills-contact\" role=\"tab\" aria-controls=\"pills-contact\"\n                aria-selected=\"false\"><i class='fas fa-image'></i> </a>\n            </li>\n            <li class=\"nav-item\" uk-tooltip=\"Markup code\">\n              <a class=\"nav-link\" id=\"pills-code-tab\" data-toggle=\"pill\" href=\"#pills-code\" role=\"tab\" aria-controls=\"pills-code\" aria-selected=\"false\"> <i class='far fa-file-code'></i> </a>\n            </li>\n            <li class=\"nav-item\" uk-tooltip=\"Icons\">\n              <a class=\"nav-link\" id=\"pills-icon-tab\" data-toggle=\"pill\" href=\"#pills-icon\" role=\"tab\" aria-controls=\"pills-icon\" aria-selected=\"false\"><i class='fas fa-font'></i> </a>\n            </li>\n            <li class=\"nav-item\" uk-tooltip=\"Style Script\">\n              <a class=\"nav-link\" id=\"pills-sty-tab\" data-toggle=\"pill\" href=\"#pills-sty\" role=\"tab\" aria-controls=\"pills-sty\" aria-selected=\"false\"><i class='fas fa-cogs'></i> </a>\n            </li>\n\n          </ul>\n          <div class=\"tab-content\" id=\"pills-tabContent\">\n            <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <label for=\"\">Enter text</label>\n                  <textarea class=\"form-control\" [(ngModel)]=\"texter\" placeholder=\"Content area\" name=\"\" id=\"\" rows=\"3\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Class (.)</label>\n                  <input type=\"text\" [(ngModel)]=\"classit\" class=\"form-control\" placeholder=\"Seperate class names by space\" name=\"asd\" id=\"\"\n                    aria-describedby=\"helpId\">\n                  <small id=\"helpId\" class=\"form-text text-muted\">Seperate by space</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Id (#)</label>\n                  <input type=\"text\" [(ngModel)]=\"idit\" class=\"form-control\" placeholder=\"Seperate class names by space\" name=\"asd\" id=\"\" aria-describedby=\"helpId\">\n                  <small id=\"helpId\" class=\"form-text text-muted\">Seperate by space</small>\n                </div>\n                <div class=\"row\">\n\n                  <div class=\"col-md-12\">\n                    <div class=\" roasw text-center\">\n                      <i *ngIf=\"speech\" uk-tooltip=\"Start speech\" (click)=\"startSpeech('texter')\" class=\"w20 vs fas fa-headphones-alt\"></i>\n                      <i *ngIf=\"!speech\" uk-tooltip=\"Stop speech\" (click)=\"ngOnDestroy()\" class=\"vs w20 text-dark fas fa-headphones-alt\"></i>\n                      <i class='fas w20 vs fa-play' uk-tooltip=\"Play\" (click)=\"speak(texter)\"></i>\n                      <i class='fas w20 vs fa-pause' uk-tooltip=\"Pause\" (click)=\"pause()\"></i>\n                      <i class='fas w20 vs fa-stop' uk-tooltip=\"Stop\" (click)=\"resume()\"></i>\n                      <i class='far w20 vs fa-play-circle' uk-tooltip=\"Cancel\" (click)=\"cancel()\"></i>\n                      <br>\n                      <span class=\"badge badge-dark w16\" uk-tooltip=\"Paragraph\" (click)=\"genP()\">P</span>\n                      <span class=\"badge badge-dark w16\" uk-tooltip=\"Divison\" (click)=\"genDiv()\">Div</span>\n                      <span class=\"badge badge-dark w16\" uk-tooltip=\"Span\" (click)=\"genSPAN()\">Span</span>\n                      <span class=\"badge badge-dark w16\" uk-tooltip=\"Container\" (click)=\"getCon()\">Container</span>\n                      <span class=\"badge badge-dark w16\" uk-tooltip=\"Bold\" (click)=\"genB()\">B</span>\n                      <span class=\"badge badge-dark w16\" uk-tooltip=\"Row\" (click)=\"classit ='row'\">Row</span>\n                      <br>\n                      <span class=\"badge badge-danger w16\" uk-tooltip=\"Unordered List\" (click)=\"getUl()\">UL</span>\n                      <span class=\"badge badge-danger  w16\" uk-tooltip=\"List item\" (click)=\"getLi()\">LI</span>\n                      <span class=\"badge badge-danger w16\" uk-tooltip=\"Space\" (click)=\"outer='&nbsp;'\">SPACE</span>\n                      <span class=\"badge badge-danger w16\" uk-tooltip=\"Tab\" (click)=\"outer='&nbsp;&nbsp;&nbsp;&nbsp;'\">TAB</span>\n                      <span class=\"badge badge-warning w16\" uk-tooltip=\"Break\" (click)=\"outer='&lt;br&gt;'\">BR</span>\n                      <span class=\"badge badge-warning w16\" uk-tooltip=\"Line\" (click)=\"outer='&lt;hr&gt;'\">HR</span>\n\n                      <br>\n                      <span class=\"badge badge-primary w16\" uk-tooltip=\"H1\" (click)=\"genH(1)\">H1</span>\n                      <span class=\"badge badge-primary w16\" uk-tooltip=\"H2\" (click)=\"genH(2)\">H2</span>\n                      <span class=\"badge badge-primary w16\" uk-tooltip=\"H3\" (click)=\"genH(3)\">H3</span>\n                      <span class=\"badge badge-primary w16\" uk-tooltip=\"H4\" (click)=\"genH(4)\">H4</span>\n                      <span class=\"badge badge-primary w16\" uk-tooltip=\"H5\" (click)=\"genH(5)\">H5</span>\n                      <span class=\"badge badge-primary w16\" uk-tooltip=\"H6\" (click)=\"genH(6)\">H6</span>\n                      <br>\n                      <span class=\"badge badge-dark  w16\" uk-tooltip=\"Alert dark\" (click)=\"classit = 'alert alert-dark'\"> <i class=\"fas fa-bell\"></i> </span>\n                      <span class=\"badge badge-danger w16\" uk-tooltip=\"Alert danger\" (click)=\"classit = 'alert alert-danger'\"> <i class=\"fas fa-bell\"></i> </span>\n                      <span class=\"badge badge-warning w16\" uk-tooltip=\"Alert warning\" (click)=\"classit = 'alert alert-warning'\"> <i class=\"fas fa-bell\"></i> </span>\n                      <span class=\"badge badge-primary w16\" uk-tooltip=\"Alert primary\" (click)=\"classit = 'alert alert-primary'\"> <i class=\"fas fa-bell\"></i> </span>\n                      <span class=\"badge badge-info w16\" uk-tooltip=\"Alert info\" (click)=\"classit = 'alert alert-info'\"> <i class=\"fas fa-bell\"></i> </span>\n                      <span class=\"badge badge-light w16\" uk-tooltip=\"Alert clear\" (click)=\"classit = ' '\"> <i class=\"fas fa-bell\"></i> </span>\n                      <br>\n                      <span class=\"badge badge-dark w16\" uk-tooltip=\"Badge dark\" (click)=\"classit = 'badge badge-dark'\"> <i class=\"fas fa-seedling\"></i> </span>\n                      <span class=\"badge badge-danger w16\" uk-tooltip=\"Badge danger\" (click)=\"classit = 'badge badge-danger'\"> <i class=\"fas fa-seedling\"></i> </span>\n                      <span class=\"badge badge-warning w16\" uk-tooltip=\"Badge warning\" (click)=\"classit = 'badge badge-warning'\"> <i class=\"fas fa-seedling\"></i> </span>\n                      <span class=\"badge badge-primary w16\" uk-tooltip=\"Badge primary\" (click)=\"classit = 'badge badge-primary'\"> <i class=\"fas fa-seedling\"></i> </span>\n                      <span class=\"badge badge-info w16\" uk-tooltip=\"Badge info\" (click)=\"classit = 'badge badge-info'\"> <i class=\"fas fa-seedling\"></i> </span>\n                      <span class=\"badge badge-light w16\" uk-tooltip=\"Badge clear\" (click)=\"classit = ' '\"> <i class=\"fas fa-bell\"></i> </span>\n                      <!---->\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <label for=\"\">Anchor src link</label>\n                  <input type=\"text\" [(ngModel)]=\"anc.link\" class=\"form-control\" name=\"sdd\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Anchor src link\">\n                  <small id=\"helpId\" class=\"form-text text-muted\">Use link without space</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Anchor class</label>\n                  <input type=\"text\" [(ngModel)]=\"anc.class\" class=\"form-control\" name=\"dfgfd\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Anchor class\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Anchor Id</label>\n                  <input type=\"text\" [(ngModel)]=\"anc.id\" class=\"form-control\" name=\"dfgdf\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Anchor Id\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Anchor text</label>\n                  <input type=\"text\" [(ngModel)]=\"anc.text\" class=\"form-control\" name=\"dfgdf\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Anchor text\">\n                </div>\n                <button type=\"button\" (click)=\"getAnc()\" class=\"btn btn-light\" style=\"float: right\"> Get Anchor</button>\n              </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"pills-contact\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <label for=\"\">Image src link</label>\n                  <input type=\"text\" [(ngModel)]=\"img.link\" class=\"form-control\" name=\"sdd\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Image src link\">\n                  <small id=\"helpId\" class=\"form-text text-muted\">Use link without space</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Image class</label>\n                  <input type=\"text\" [(ngModel)]=\"img.class\" class=\"form-control\" name=\"dfgfd\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Image class\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Image Id</label>\n                  <input type=\"text\" [(ngModel)]=\"img.id\" class=\"form-control\" name=\"dfgdf\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Image Id\">\n                </div>\n                <button type=\"button\" (click)=\"getImg()\" class=\"btn btn-light\" style=\"float: right\"> Get Image</button>\n              </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"pills-code\" role=\"tabpanel\" aria-labelledby=\"pills-code-tab\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <label for=\"\">Code</label>\n                  <textarea [(ngModel)]=\"code.text\" class=\"form-control\" rows='5' name=\"sdd\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Code canvas\"></textarea>\n                  <small id=\"helpId\" class=\"form-text text-muted\">Canvas</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Code class</label>\n                  <input type=\"text\" [(ngModel)]=\"code.class\" class=\"form-control\" name=\"dfgfd\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Code class\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Code Rows</label>\n                  <input type=\"number\" [(ngModel)]=\"code.id\" class=\"form-control\" name=\"dfgdf\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Code Rows\">\n                </div>\n                <button type=\"button\" (click)=\"getCode()\" class=\"btn btn-light\" style=\"float: right\"> Get code</button>\n              </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"pills-icon\" role=\"tabpanel\" aria-labelledby=\"pills-icon-tab\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <label for=\"\">Font Awesome icons</label>\n                  <select class=\"form-control\" name=\"texter\" [(ngModel)]=\"fonter\" id=\"\">\n                    <option *ngFor=\"let item of fonts; let i=index\" value=\"{{item}}\" >{{item}}\n                      <i class=\"{{item}}\" style=\"float: right\"></i>\n                  </option>\n            </select>\n                </div>\n                <br>\n                <div class=\"form-group\">\n                  <label for=\"\">Search icon</label>\n                  <input type=\"text\" [(ngModel)]=\"sea \" class=\"form-control\" name=\"sea\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\">\n                  <small id=\"helpId\" class=\"form-text text-muted\">Search by icon name</small>\n                </div>\n                <div class=\"card ico card-body\">\n                  <div class=\"\">\n                    <div class=\"row\">\n                      <div class=\"col-2 text-center iii\" *ngFor=\"let item of fonts | filterBy: sea ; let i=index\" (click)=\"fonter = item\" (click)=\"getIcon()\">\n                        <span class=\"\" (click)=\"fonter = item\" (click)=\"getIcon()\">   <i class=\"{{item}}\" (click)=\"fonter = item\" (click)=\"getIcon()\"></i> </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <br>\n                <button type=\"button\" (click)=\"getIcon()\" class=\"btn btn-light\" style=\"float: right\"> Get Icon</button></div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"pills-sty\" role=\"tabpanel\" aria-labelledby=\"pills-sty-tab\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <label for=\"\">Css/Scss/Less Script</label>\n                  <textarea class=\"form-control\" placeholder=\"Place your style script\" [(ngModel)]=\"styler\" name=\"dfg\" id=\"\" rows=\"3\"></textarea>\n                </div>\n\n                <button type=\"button\" (click)=\"getSty()\" class=\"btn btn-light\" style=\"float: right\"> Get Style Script</button>\n              </div>\n            </div>\n            <div class=\"tab-pane fade\" id=\"pills-user\" role=\"tabpanel\" aria-labelledby=\"pills-user-tab\">\n              <div class=\"\">\n                <div class=\"form-group\">\n                  <label for=\"\">User name</label>\n                  <input type=\"text\" [(ngModel)]=\"credit.username\" class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\">\n                  <small id=\"helpId\" class=\"form-text text-muted\">Pecuiliar username</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Full name</label>\n                  <input type=\"text\" [(ngModel)]=\"credit.fullname\" class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\">\n                  <small id=\"helpId\" class=\"form-text text-muted\">Full name</small>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"\">Date</label>\n                  <input type=\"date\" [(ngModel)]=\"credit.date\" class=\"form-control\" name=\"\" id=\"\" aria-describedby=\"helpId\" placeholder=\"\">\n                </div>\n                <!--<button type=\"button\" (click)=\"getUser()\" class=\"btn btn-light\" style=\"float: right\"> User Card</button>-->\n              </div>\n            </div>\n          </div>\n          <br>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <br>\n      <div class=\"container\" *ngIf=\"board\">\n        <div class=\"animated pulse\">\n          <div class=\"form-group\">\n            <label for=\"\">Output</label>\n            <textarea class=\"form-control\" [(ngModel)]=\"outer\" name=\"\" id=\"\" rows=\"3\"></textarea>\n          </div>\n        </div>\n        <div [innerHTML]=\"outer|sanitaizer\"></div>\n        <!--<button type=\"button\" (click)=\"base = true\" (click)=\"outHtml()\" class=\"btn btn-light\" style=\"float: right\"> Base</button>-->\n        <a href=\"#preview\">\n         <button  uk-tooltip=\"Jump to preview\" class=\"btn  btn-sm siv animated zoomInUp btn-info\" (click)=\"pred = !pred\" style=\"float: right;margin:2px;\">\n          <span *ngIf=\"!pred\">  <i class='fas fa-eye'></i> Preview</span>\n          <span *ngIf=\"pred\">  <i class='fas fa-eye'></i> Close Preview</span>\n          </button>\n      </a>\n        <button class=\"btn  siv btn-sm animated zoomInUp btn-warning\" style=\"float: right;margin:2px;\" uk-tooltip=\"Copy Tag\" ngxClipboard\n          [cbContent]=\"outer\"> <i class='fas fa-copy'></i> Copy element</button>\n        <button type=\"button\" (click)=\"addTag()\" class=\"btn siv animated zoomInUp btn-sm  btn-dark\" uk-tooltip=\"Add item\" style=\"float: right;margin:2px;\"><i class='fas fa-plus'></i> Add element</button>\n        <button type=\"button\" (click)=\"outer = ''\" class=\"btn siv animated zoomInUp btn-sm  btn-danger\" uk-tooltip=\"Remove Tag\" style=\"float: right;margin:2px;\"><i class='fas fa-eraser'></i> Remove element</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\"> <button type=\"button\" uk-tooltip=\"Clear Everything\" (click)=\"gas = []\" (click)=\"baseHtml = ''\" (click)=\"outer = ''\"\n          class=\"btn   siv btn-sm btn-block btn-danger\" style=\"float: right\"><i class='fas fa-trash'></i> Clear</button>\n      </div>\n      <div class=\"col-md-4\">\n        <button class=\"btn siv btn-sm btn-block btn-warning\" uk-tooltip=\"Copy HTML\" (click)=\"copyday('Code copied  &amp; Id generated')\"\n          (click)=\"lod()\" (click)=\"ide = true\" [ngxClipboard]=\"inputTarget\"> <i class='fas fa-copy'></i> Copy</button>\n      </div>\n      <div class=\"col-md-4\">\n        <button class=\"btn siv btn-sm btn-block btn-dark\" uk-tooltip=\"Transcript into HTML\" (click)=\"copyday('Code copied  &amp; Id generated')\"\n          (click)=\"lod()\" (click)=\"cardinfo.id =  makeid(6)\" (click)=\"ide = true\" [ngxClipboard]=\"inputTarget\"> <i class='fas fa-copy'></i>  Transcript </button>\n      </div>\n    </div>\n    <br>\n    <div class=\"\" *ngIf=\"ide\">\n      <div class=\"form-group\" (click)=\"copyday('Filename copied')\" [ngxClipboard]=\"inputTarget4\">\n        <label for=\"\">File name &nbsp;<i class='far fa-file-alt'></i> </label>\n        <input type=\"text\" #inputTarget4 [(ngModel)]=\"cardinfo.id\" class=\"form-control\" readonly name=\"dfg\" id=\"\" aria-describedby=\"helpId\"\n          placeholder=\"\">\n        <small id=\"helpId\" class=\"form-text text-muted\">Use this ID as filename as {{ids}}.txt</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Title&nbsp;<i class='fas fa-address-book'></i> </label>\n        <input type=\"text\" [(ngModel)]=\"cardinfo.title\" class=\"form-control\" name=\"\" id=\"sdsd\" aria-describedby=\"helpId\" placeholder=\"Title for the page\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Image&nbsp;<i class='fas fa-image'></i> </label>\n        <input type=\"text\" [(ngModel)]=\"cardinfo.image\" class=\"form-control\" name=\"\" id=\"ssdfasddsd\" aria-describedby=\"helpId\" placeholder=\"Link image the page\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Blog &nbsp;<i class='fab fa-blogger'></i> </label>\n        <input type=\"text\" [(ngModel)]=\"cardinfo.blog\" class=\"form-control\" name=\"\" id=\"sdsdsd\" aria-describedby=\"helpId\" placeholder=\"Blog link for the page\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Wordpress&nbsp; <i class='fas fa-file-word'></i></label>\n        <input type=\"text\" [(ngModel)]=\"cardinfo.word\" class=\"form-control\" name=\"\" id=\"sdasfafsd\" aria-describedby=\"helpId\" placeholder=\"Wordpress link\">\n      </div>\n\n      <button class=\"btn btn-sm btn-block btn-dark\" uk-tooltip=\"Copy JSON Script\" (click)=\"copyday('Copy Script for manipulating into Application')\"\n        *ngIf=\"ide\" [ngxClipboard]=\"inputTarget3\"> <i class=\"fas fa-copy\"></i> Copy script</button>\n      <div class=\"form-group\">\n        <label for=\"\">Script</label>\n        <textarea class=\"form-control\" #inputTarget3 name=\"\" id=\"\" rows=\"3\">\n            {{cardinfo|json}}\n          </textarea>\n      </div>\n    </div>\n\n    <!--<div class=\"alert as text-center alert-warning\" *ngIf=\"copy\">\n      <b>{{msg}}</b>\n    </div>-->\n    <!--<div class=\"\" *ngFor=\"let item of gas; let i=index\">\n    <div class=\"base\">\n      {{item}}</div> <br>\n  </div>-->\n  </div>\n\n  <div class=\"animated pulse\">\n    <div class=\"container\">\n      <div class=\"\" *ngFor=\"let item of gas; let i=index\">\n        <div class=\"\">\n          <span (click)=\"removeAt(i)\" class=\"badge exit badge-warning\">X</span>\n          <span class=\"badge exit badge-dark\">{{i}}</span>\n          <div [innerHTML]=\"item|sanitaizer\"> </div> <br>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"container \" [innerHTML]=\"renderer\"></div>\n</div>\n<!--<div id=\"snackbar\">{{msg}}</div>-->\n<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <H4 class=\" text-dark\">Base</H4>\n    </div>\n    <div class=\"card-body\" style=\"padding: 2px;\">\n      <div class=\"form-group\">\n        <textarea class=\"form-control\" placeholder=\"Actual code\" style=\"border: 0px;\" #inputTarget name=\"\" [(ngModel)]=\"baseHtml\"\n          id=\"\" rows=\"3\"></textarea>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card animated zoomInUp\" style=\"  box-shadow: 0px 5px 5px 5px gainsboro;\" id=\"preview\" *ngIf=\"pred\">\n    <div class=\"card-header\">\n\n      <H4 class=\" text-dark\"> Preview Screen <i (click)=\"pred = false\" class='fas fa-eye'></i></H4>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"container \" [innerHTML]=\"baseHtml\"></div>\n    </div>\n  </div>\n\n  <img *ngIf=\"loader\" style=\"width: 75px\" src=\"https://media1.giphy.com/media/rtRflhLVzbNWU/giphy.gif?cid=85b23e3f78cac52fedab6f25b1fe7e467e88ef275b322fa4&rid=giphy.gif\"\n    class=\"loader\" alt=\"\">\n</div>\n\n<!--<div class=\"row\" *ngFor=\"let item of list; let i=index\">\n  <img [src]=\"'./assets/page-0'+i+'.png'\" class=\"asd\" alt=\"\">\n</div>-->\n\n\n<hr class=\"uk-divider-icon\">\n<div class=\"container\">\n  <app-info id=\"ainfo\"></app-info>\n  <app-folders id=\"afol\"></app-folders>\n</div>\n\n<div class=\"anc\">\n  <a uk-tooltip=\"title:Editor;pos:left\" href=\"#acur\"><i class='fas fa-circle' ></i></a>\n  <a uk-tooltip=\"title:Read Me;pos:left\" href=\"#ainfo\"><i class='fas fa-circle' ></i></a>\n  <a uk-tooltip=\"title:Folders &amp; Files:Editor;pos:left\" href=\"#afol\"><i class='fas fa-circle' ></i></a>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/editor/editor.component.scss":
/*!****************************************************!*\
  !*** ./src/app/theme/editor/editor.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  border-radius: 0px; }\n\ntextarea {\n  border-radius: 0px; }\n\ninput:focus {\n  box-shadow: none;\n  outline: none; }\n\ntextarea:focus {\n  box-shadow: none;\n  outline: none; }\n\n::-webkit-input-placeholder {\n  color: #67a3fd;\n  font-size: 12px; }\n\n::-moz-selection {\n  color: lightcyan;\n  background-color: #0d47a1;\n  border-radius: 15px; }\n\n::selection {\n  color: lightcyan;\n  background-color: #0d47a1;\n  border-radius: 15px; }\n\n.card {\n  margin: 5px 0px 5px 0px; }\n\nbutton {\n  margin: 2px 0px 2px 0px; }\n\n.exit {\n  float: right;\n  margin: 5px;\n  cursor: pointer; }\n\n.cxs {\n  padding: 5px; }\n\n.base {\n  border-radius: 5px;\n  background-color: lightgray;\n  color: black;\n  padding: 5px;\n  margin: 3px; }\n\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  padding: 10px; }\n\n* {\n  word-wrap: break-word; }\n\nimg {\n  width: 50%; }\n\n.alert {\n  width: 100%; }\n\n.code {\n  background-color: lightgray;\n  padding: 5px;\n  border-radius: 5px;\n  color: white; }\n\n.nav-item .active {\n  background-color: white;\n  border-bottom: 1.5px solid #67a3fd;\n  border-radius: 0px;\n  color: #67a3fd;\n  -webkit-transition: border-bottom 2s ease-out;\n  transition: border-bottom 2s ease-out; }\n\n.as {\n  margin: 3px;\n  padding: 7px; }\n\n.nav-link {\n  color: black;\n  font-weight: bold; }\n\n.ico {\n  height: 200px;\n  overflow: auto;\n  width: 100%; }\n\n.iii {\n  font-size: 28px; }\n\n.iii:hover {\n  border: 1px dotted black;\n  border-radius: 3px;\n  font-size: 26px;\n  text-align: center;\n  cursor: pointer;\n  color: black; }\n\nlabel {\n  color: #00b0ff; }\n\ninput {\n  font-size: 12px; }\n\ninput:focus {\n  border: 1px solid black; }\n\ntextarea:focus {\n  border: 1px solid black; }\n\n.card-header {\n  background-color: white; }\n\n.siv {\n  background-color: #67a3fd;\n  color: white;\n  margin: auto;\n  border: none;\n  width: 100%;\n  margin-top: 3px;\n  margin-bottom: 3px; }\n\n.siv:hover {\n  background-color: white;\n  color: #67a3fd;\n  -webkit-transition: 0.5s color ease-in-out;\n  transition: 0.5s color ease-in-out; }\n\n.badge {\n  padding: 10px;\n  margin: 5px; }\n\n.vs {\n  color: white;\n  background-color: #0d47a1;\n  padding: 10px;\n  font-size: 15px; }\n\n.vs:hover {\n  color: #0d47a1;\n  background-color: white;\n  padding: 10px;\n  font-size: 15px; }\n\n.badge {\n  cursor: pointer; }\n\n.su {\n  color: #67a3fd;\n  text-align: right;\n  padding: -5px;\n  margin: -2px; }\n\n@media screen and (max-height: 768px) {\n  .wm {\n    display: none; }\n  .subs {\n    display: none; }\n  .roasw {\n    text-align: center; }\n  .w25 {\n    width: 21%; }\n  .w16 {\n    width: 13%; }\n  .w20 {\n    width: 17.9%; } }\n\n.nav-item {\n  width: 16.66%;\n  text-align: center; }\n\n.anc {\n  display: grid;\n  position: fixed;\n  right: 0;\n  top: 45%;\n  z-index: 1030; }\n\n.anc i {\n    margin: 5px; }\n\n.w25 {\n  width: 22%; }\n\n.w16 {\n  width: 14%; }\n\n.w20 {\n  width: 18.9%; }\n\n.table-mob {\n  width: 100%;\n  overflow: auto; }\n\n.imgod {\n  position: fixed;\n  right: 0;\n  top: 0;\n  opacity: 0.3;\n  width: 45%; }\n\n.asd {\n  width: 20%;\n  display: inline;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvZWRpdG9yL0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcYXNwaS1jc3Mvc3JjXFxhcHBcXHRoZW1lXFxlZGl0b3JcXGVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNFLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxpQkFBZ0I7RUFDaEIsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZUFBYztFQUNkLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsaUJBQWdCO0VBQ2hCLDBCQXRCaUI7RUF1QmpCLG9CQUFtQixFQUNwQjs7QUFKRDtFQUNFLGlCQUFnQjtFQUNoQiwwQkF0QmlCO0VBdUJqQixvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsYUFBWSxFQUViOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLDRCQUEyQjtFQUMzQixhQUFZO0VBQ1osYUFBWTtFQUNaLFlBQVcsRUFDWjs7QUFDRDtFQUNFLGVBQWM7RUFDZCxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSw0QkFBMkI7RUFDM0IsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixhQUFZLEVBQ2I7O0FBQ0Q7RUFFSSx3QkFBdUI7RUFDdkIsbUNBQWtDO0VBQ2xDLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsOENBQXFDO0VBQXJDLHNDQUFxQyxFQUV0Qzs7QUFFSDtFQUNFLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBYTtFQUNiLGVBQWM7RUFDZCxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLHlCQUF3QjtFQUN4QixtQkFBa0I7RUFFbEIsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxlQXBIa0IsRUFxSG5COztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSx3QkFBdUIsRUFDeEI7O0FBQ0Q7RUFDRSx3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLGFBQVk7RUFDWixhQUFZO0VBRVosWUFBVztFQUNYLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0Usd0JBQXVCO0VBQ3ZCLGVBQWM7RUFFZCwyQ0FBa0M7RUFBbEMsbUNBQWtDLEVBQ25DOztBQUNEO0VBQ0UsY0FBYTtFQUNiLFlBQVcsRUFDWjs7QUFDRDtFQUNFLGFBQVk7RUFDWiwwQkFuSmlCO0VBb0pqQixjQUFhO0VBQ2IsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxlQXhKaUI7RUF5SmpCLHdCQUF1QjtFQUN2QixjQUFhO0VBQ2IsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLGVBQWM7RUFFZCxrQkFBaUI7RUFDakIsY0FBYTtFQUNiLGFBQVksRUFDYjs7QUFDRDtFQUNFO0lBQ0UsY0FBYSxFQUNkO0VBQ0Q7SUFDRSxjQUFhLEVBQ2Q7RUFDRDtJQUNFLG1CQUFrQixFQUNuQjtFQUNEO0lBQ0UsV0FBVSxFQUNYO0VBQ0Q7SUFDRSxXQUFVLEVBQ1g7RUFDRDtJQUNFLGFBQVksRUFDYixFQUFBOztBQUVIO0VBQ0UsY0FBYTtFQUNiLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGNBQWE7RUFDYixnQkFBZTtFQUNmLFNBQVE7RUFDUixTQUFRO0VBQ1IsY0FBYSxFQUlkOztBQVREO0lBT0ksWUFBVyxFQUNaOztBQUdIO0VBQ0UsV0FBVSxFQUNYOztBQUNEO0VBQ0UsV0FBVSxFQUNYOztBQUNEO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBQ0UsWUFBVztFQUNYLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsU0FBUTtFQUNSLE9BQU07RUFDTixhQUFZO0VBQ1osV0FBVSxFQUNYOztBQUNEO0VBQ0UsV0FBVTtFQUNWLGdCQUFlO0VBQ2YsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhcy1iYXNlOiAjMDAwMDAwO1xyXG4kYXMtcHJpbWFyeTogIzAwYjBmZjtcclxuJGFzLWRhbmdlcjogI2Q1MDAwMDtcclxuJGFzLXN1Y2Nlc3M6ICNhZWVhMDA7XHJcbiRhcy1pbmZvOiAjYjNlNWZjO1xyXG4kYXMtd2FybmluZzogI2ZmYWIwMDtcclxuJGFzLWxpZ2h0OiAjZTBlMGUwO1xyXG4kYXMtZGFyazogIzc4OTA5YztcclxuJGFzLXdpbm5lcjogIzBkNDdhMTtcclxuJGFzLWhhcHB5OiAjZDgxYjYwO1xyXG5pbnB1dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbnRleHRhcmVhIHtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG50ZXh0YXJlYTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM2N2EzZmQ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbjo6c2VsZWN0aW9uIHtcclxuICBjb2xvcjogbGlnaHRjeWFuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcy13aW5uZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW46IDJweCAwcHggMnB4IDBweDtcclxufVxyXG4uZXhpdCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY3hzIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgLy8gICBtYXJnaW46IC01cHg7XHJcbn1cclxuLmJhc2Uge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDNweDtcclxufVxyXG4uY2VudGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbioge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29kZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5uYXYtaXRlbSB7XHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICM2N2EzZmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBjb2xvcjogIzY3YTNmZDtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMnMgZWFzZS1vdXQ7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwcHggNXB4IDNweCBnYWluc2Jvcm87XHJcbiAgfVxyXG59XHJcbi5hcyB7XHJcbiAgbWFyZ2luOiAzcHg7XHJcbiAgcGFkZGluZzogN3B4O1xyXG59XHJcbi5uYXYtbGluayB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5pY28ge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmlpaSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG4uaWlpOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC8vICAgcGFkZGluZzogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5sYWJlbCB7XHJcbiAgY29sb3I6ICRhcy1wcmltYXJ5O1xyXG59XHJcbmlucHV0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG50ZXh0YXJlYTpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3YTNmZDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICAvLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuLnNpdjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICM2N2EzZmQ7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzY3QTNGRDtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGNvbG9yIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5iYWRnZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4udnMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXMtd2lubmVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi52czpob3ZlciB7XHJcbiAgY29sb3I6ICRhcy13aW5uZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmJhZGdlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnN1IHtcclxuICBjb2xvcjogIzY3YTNmZDtcclxuICAvLyBkaXNwbGF5OiB0YWJsZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nOiAtNXB4O1xyXG4gIG1hcmdpbjogLTJweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcclxuICAud20ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnN1YnMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnJvYXN3IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLncyNSB7XHJcbiAgICB3aWR0aDogMjElO1xyXG4gIH1cclxuICAudzE2IHtcclxuICAgIHdpZHRoOiAxMyU7XHJcbiAgfVxyXG4gIC53MjAge1xyXG4gICAgd2lkdGg6IDE3LjklO1xyXG4gIH1cclxufVxyXG4ubmF2LWl0ZW0ge1xyXG4gIHdpZHRoOiAxNi42NiU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYW5jIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDQ1JTtcclxuICB6LWluZGV4OiAxMDMwO1xyXG4gIGkge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4udzI1IHtcclxuICB3aWR0aDogMjIlO1xyXG59XHJcbi53MTYge1xyXG4gIHdpZHRoOiAxNCU7XHJcbn1cclxuLncyMCB7XHJcbiAgd2lkdGg6IDE4LjklO1xyXG59XHJcbi50YWJsZS1tb2Ige1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5pbWdvZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBvcGFjaXR5OiAwLjM7XHJcbiAgd2lkdGg6IDQ1JTtcclxufVxyXG4uYXNkIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/theme/editor/editor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/theme/editor/editor.component.ts ***!
  \**************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var html_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-formatter */ "./node_modules/html-formatter/index.js");
/* harmony import */ var html_formatter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_formatter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_speech__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/speech */ "./src/app/services/speech.ts");
/* harmony import */ var src_app_theme_editor_FONT__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/editor/FONT */ "./src/app/theme/editor/FONT.ts");
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! speak-tts */ "./node_modules/speak-tts/lib/speak-tts.js");
/* harmony import */ var speak_tts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(speak_tts__WEBPACK_IMPORTED_MODULE_6__);






 // es6
var speech = new speak_tts__WEBPACK_IMPORTED_MODULE_6___default.a(); // will throw an exception if not browser supported
if (speech.hasBrowserSupport()) {
    // returns a boolean
    console.log("speech synthesis supported");
}
var EditorComponent = /** @class */ (function () {
    function EditorComponent(http, speechRecognitionService) {
        this.http = http;
        this.speechRecognitionService = speechRecognitionService;
        this.speech = true;
        this.list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.fonts = src_app_theme_editor_FONT__WEBPACK_IMPORTED_MODULE_5__["FONT"];
        this.msg = "Some msg";
        this.img = {
            link: "",
            class: "center",
            id: ""
        };
        this.anc = {
            link: "",
            class: "center",
            id: "",
            text: ""
        };
        this.credit = {
            username: "",
            fullname: "",
            date: ""
        };
        this.code = {
            text: "",
            class: "",
            id: " "
        };
        this.cardinfo = {
            id: "",
            title: "",
            word: "",
            blogger: "",
            version: "",
            image: ""
        };
        this.gas = [];
        this.texter = "";
        this.copy = false;
        this.pred = false;
        this.classit = "";
        this.idit = "";
        this.sea = "";
    }
    EditorComponent.prototype.ngOnDestroy = function () {
        this.speech = true;
        this.speechRecognitionService.DestroySpeechObject();
    };
    EditorComponent.prototype.startSpeech = function () {
        var _this = this;
        this.speech = false;
        this.speechRecognitionService.record().subscribe(function (value) {
            _this.texter = value;
            console.log(value);
            _this.snacks(value);
        }, function (err) {
            console.log(err);
            if (err.error === "no-speech") {
                _this.speech = true;
                console.log("--restatring service--");
            }
        }
        // ,
        // () => {
        //   this.speech = true;
        //   console.log("--complete--");
        //   // this.startSpeech();
        // }
        );
    };
    EditorComponent.prototype.ngOnInit = function () {
        this.baseHtml = JSON.parse(window.localStorage.getItem("power"));
        speech
            .init({
            volume: 1,
            lang: "en-GB",
            rate: 1,
            pitch: 1,
            voice: "Google UK English Male",
            splitSentences: true,
            listeners: {
                onvoiceschanged: function (voices) {
                    // console.log("Event voiceschanged", voices);
                }
            }
        })
            .then(function (data) {
            // The "data" object contains the list of available voices and the voice synthesis params
            console.log("Speech is ready, voices are available", data);
        })
            .catch(function (e) {
            console.error("An error occured while initializing : ", e);
        });
    };
    EditorComponent.prototype.speak = function (t) {
        speech
            .speak({
            text: t
        })
            .then(function () {
            console.log("Success !");
        })
            .catch(function (e) {
            console.error("An error occurred :", e);
        });
    };
    EditorComponent.prototype.pause = function () {
        speak_tts__WEBPACK_IMPORTED_MODULE_6___default.a.pause();
    };
    EditorComponent.prototype.cancel = function () {
        speak_tts__WEBPACK_IMPORTED_MODULE_6___default.a.cancel();
    };
    EditorComponent.prototype.resume = function () {
        speak_tts__WEBPACK_IMPORTED_MODULE_6___default.a.resume();
    };
    EditorComponent.prototype.copyday = function (msg) {
        var _this = this;
        this.copy = true;
        this.msg = msg;
        setTimeout(function () {
            _this.copy = false;
        }, 10000);
    };
    EditorComponent.prototype.addTag = function () {
        this.gas.push(this.outer);
        this.outHtml();
    };
    EditorComponent.prototype.removeAt = function (i) {
        console.log(i);
        this.gas.splice(i, 1);
        this.outHtml();
    };
    EditorComponent.prototype.getIcon = function () {
        this.board = true;
        this.outer = "<i class='" + this.fonter + "'></i>";
        this.outHtml();
    };
    EditorComponent.prototype.getSty = function () {
        this.board = true;
        this.outer = "<style>" + this.styler + "</style>";
        this.outHtml();
    };
    EditorComponent.prototype.getCode = function () {
        this.board = true;
        this.code.text = this.code.text.replace(/(^[ \t]*\n)/gm, "");
        this.code.text = html_formatter__WEBPACK_IMPORTED_MODULE_2___default.a.render(this.code.text);
        // this.code.text = this.code.text.replace([/</], "&lt;");
        // this.code.text = this.code.text.replace([/>/], "&gt;");
        this.outer =
            "<textarea class='code " +
                this.code.class +
                " form-control' rows='" +
                this.code.id +
                "' >" +
                this.code.text +
                "</textarea><br>";
        this.outHtml();
    };
    EditorComponent.prototype.getImg = function () {
        this.board = true;
        this.outer =
            "<img style='width:50%;margin:auto;display:block;padding:10px;' src='" +
                this.img.link +
                "' class='" +
                this.img.class +
                "' id='" +
                this.img.id +
                "' /><br>";
        this.outHtml();
        this.img.link = "";
    };
    EditorComponent.prototype.getAnc = function () {
        this.board = true;
        this.outer =
            "<a href='" +
                this.anc.link +
                "' class='" +
                this.anc.class +
                "' id='" +
                this.anc.id +
                "' >" +
                this.anc.text +
                "</a>";
        this.outHtml();
    };
    EditorComponent.prototype.getCon = function () {
        this.board = true;
        this.outer =
            "<div class='container " +
                this.classit +
                "' id='" +
                this.idit +
                "' >" +
                this.texter +
                "</div><br>";
        this.outHtml();
    };
    EditorComponent.prototype.getUl = function () {
        this.board = true;
        this.outer =
            "<ul class='list-group " +
                this.classit +
                "' id='" +
                this.idit +
                "' >" +
                this.texter +
                "</ul><br>";
        this.outHtml();
    };
    EditorComponent.prototype.getLi = function () {
        this.board = true;
        this.outer =
            "<li class='list-group-item " +
                this.classit +
                "' id='" +
                this.idit +
                "' >" +
                this.texter +
                "</li> ";
        this.outHtml();
    };
    EditorComponent.prototype.genP = function () {
        this.board = true;
        this.outer =
            "<p class='" +
                this.classit +
                "' id='" +
                this.idit +
                "' >" +
                this.texter +
                "</p><br>";
        this.outHtml();
    };
    EditorComponent.prototype.lod = function () {
        var _this = this;
        this.loader = true;
        setTimeout(function () {
            _this.loader = false;
        }, 2500);
    };
    EditorComponent.prototype.genB = function () {
        this.board = true;
        this.outer = "<b>" + this.texter + "</b>";
        this.outHtml();
    };
    EditorComponent.prototype.genSPAN = function () {
        this.board = true;
        this.outer =
            "<span class='" +
                this.classit +
                "' id='" +
                this.idit +
                "' >" +
                this.texter +
                "</span><br>";
        this.outHtml();
    };
    EditorComponent.prototype.genDiv = function () {
        this.board = true;
        this.outer =
            "<div class='" +
                this.classit +
                "' id='" +
                this.idit +
                "'>" +
                this.texter +
                "</div><br>";
        this.outHtml();
    };
    EditorComponent.prototype.genH = function (u) {
        this.board = true;
        this.outer =
            "<h" +
                u +
                " class='" +
                this.classit +
                "' id='" +
                this.idit +
                "' " +
                ">" +
                this.texter +
                "</h" +
                u +
                "><br>";
        this.outHtml();
    };
    EditorComponent.prototype.genA = function () {
        this.board = true;
        this.outer =
            "<a class='" +
                this.classit +
                "' id='" +
                this.idit +
                "' href='" +
                this.texter +
                "' >" +
                this.texter +
                "</a>";
        this.outHtml();
    };
    EditorComponent.prototype.outHtml = function () {
        this.base = true;
        // this.ide = true;
        // this.ids = this.makeid(6);
        this.texter = "";
        this.baseHtml = this.gas.join(" ");
        window.localStorage.setItem("power", JSON.stringify(this.baseHtml));
        this.baseHtml = html_formatter__WEBPACK_IMPORTED_MODULE_2___default.a.render(this.baseHtml);
    };
    EditorComponent.prototype.genBR = function () {
        this.board = true;
        this.outer = "<br>";
    };
    EditorComponent.prototype.makeid = function (length) {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    EditorComponent.prototype.snacks = function (msg) {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        this.msg = msg;
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 5000);
    };
    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-editor",
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/theme/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/theme/editor/editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_services_speech__WEBPACK_IMPORTED_MODULE_4__["SpeechRecognitionService"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/theme/sugar/sugar.component.html":
/*!**************************************************!*\
  !*** ./src/app/theme/sugar/sugar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"april \" id=\"sugar\" *ngIf=\"!loader\">\n  <div class=\"row\">\n    <div class=\"col-md-12\"> <br>\n\n      <div class=\"accordion  uk-ard-default uk-crd\" id=\"accordionExample\">\n        <!--<app-angular></app-angular>-->\n        <br>\n        <div class=\" \">\n          <div class=\"uk-cad uk-card- header\" id=\"headingOne\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control vcs\" [(ngModel)]=\"search\" name=\"sa4e\" id=\"\" aria-describedby=\"helpId\" placeholder=\"Search term\">\n              <br>\n              <div class=\"fixede\">\n                <div class=\"text-center\" *ngIf=\"search.length>0\">\n                  <button style=\"margin: 3px;\" type=\"button\" *ngFor=\"let item of lister | filter: search; let i=index\" (click)=\"getTitle(item.title)\"\n                    class=\"badge uk-animation-fade cd badge-primary\" (click)=\"search = ''\"> \n              <span  > {{item.title}} </span></button>\n                </div>\n              </div>\n            </div>\n            <span class=\" badge-pill uk-badge\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n              More topics &nbsp; <i class=\"fas fa-arrow-right\"></i>\n            </span>\n          </div>\n\n          <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n            <div class=\"ca  uk-cad-default ody\">\n              <div class=\"uk-child-width-1-4@m uk-grid-small uk-grid-match\" uk-grid>\n                <div class=\"  uk-animation-scale-up\" *ngFor=\"let item of lister; let i=index\">\n                  <div class=\"uk-card dd uk-card-hover\" (click)=\"getRender(i)\">\n                    <div class=\"uk-card-header\" style=\"height: 175px;\">\n                      <img [src]=\"item['image']\" class=\"vfg\" style=\"width: 75%;margin:auto;display: block\" alt=\"\">\n                    </div>\n                    <div class=\" uk-card-sec ndary \">\n                      <h5 class=\"text-center\">{{item.title}}</h5>\n                      <div class=\"row\">\n                        <div class=\"cde\" uk-tooltip=\"title:Github; pos: bottom\">\n                          <a target=\"blank\" [href]=\"'https://github.com/creativecoderone/poster/blob/master/'+itemid+'.txt'\">\n                          <i class='fab fa-github'></i> </a>\n                        </div>\n                        <div class=\"cde\" (click)=\"getRender(i)\" uk-tooltip=\"title:Book; pos: bottom\">\n                          <a href=\"#modal-full\" uk-toggle><i class=\"fas fa-book-open\"></i> </a>\n                        </div>\n                        <div class=\"cde\" uk-tooltip=\"title:Blog; pos: bottom\">\n                          <a target=\"blank\" href=\"{{item['blogger']}}\"><i class='fab fa-blogger-b'></i> </a>\n                        </div>\n                        <div class=\"cde\" uk-tooltip=\"title:Open; pos: bottom\">\n                          <a [href]=\"'#'+item['id']\"><i class='fas fa-hashtag'></i> </a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div id=\"toggle-animation-multiple\" id=\"paper\" class=\" uk-card-default \">\n        <div class=\"carder uk-card-body\" style=\"padding: 10px;\">\n          <!--*ngFor=\"let item of lister; let i=index\" id=\"{{item.id}}\"-->\n          <div class=\"animated fadeInLeft\">\n            <div class=\"uk-card  \">\n              <h3 style=\"padding-left: 8px;\" [id]=\"itemid\">\n                {{itemtitle}}\n              </h3>\n              <br>\n              <div class=\"base\" [innerHTML]=\"renderer|sanitaizer\">\n              </div>\n            </div>\n          </div>\n        </div> <br> </div>\n      <i *ngIf=\"speech\" (click)=\"startSpeech('lister')\" class=\"vs fas fa-headphones-alt\"></i>\n      <i *ngIf=\"!speech\" (click)=\"ngOnDestroy()\" class=\"vs text-dark fas fa-headphones-alt\"></i>\n    </div>\n  </div>\n</div>\n<div>\n  <img *ngIf=\"loader\" src=\"http://jobsinmp.mpmsme.gov.in/newportal/assets/img/soon.gif\" class=\"loader2\" alt=\"\">\n</div>\n<div>\n  <img *ngIf=\"loader\" src=\"http://jobsinmp.mpmsme.gov.in/newportal/assets/img/soon.gif\" class=\"loader2\" alt=\"\">\n</div>\n<div>\n  <img *ngIf=\"loader\" src=\"http://jobsinmp.mpmsme.gov.in/newportal/assets/img/soon.gif\" class=\"loader2\" alt=\"\">\n</div>\n<div>\n  <img *ngIf=\"loader\" src=\"http://jobsinmp.mpmsme.gov.in/newportal/assets/img/soon.gif\" class=\"loader2\" alt=\"\">\n</div>\n<div>\n  <img *ngIf=\"loader\" src=\"http://jobsinmp.mpmsme.gov.in/newportal/assets/img/soon.gif\" class=\"loader2\" alt=\"\">\n</div>\n<div id=\"snackbar\">{{msg}}</div>\n<!--<div class=\"identity fd\">\n  <a target=\"blank\" [href]=\"'https://github.com/creativecoderone/poster/blob/master/'+itemid+'.txt'\"><i class='fas fa-external-link-alt'></i> </a>\n</div>-->\n<!--<div class=\"row\" id=\"gal\">\n  <div class=\"col-md-4\" *ngFor=\"let item of imglist; let i=index\">\n    <div class=\"  animated slideInUp\">\n      <img [src]=\"item\" alt=\"\" class=\"vlist\">\n    </div>\n  </div>\n</div>-->\n\n<div id=\"modal-full\" class=\"uk-modal-full\" uk-modal>\n  <div class=\"uk-modal-dialog\">\n    <button class=\"uk-modal-close-full uk-close-large\" type=\"button\" style=\"box-shadow: none\" uk-close></button>\n    <div class=\"uk-grid-collapse uk-child-width-1-1@s uk-flex-middle\" uk-grid>\n      <!--<div class=\"uk-background-cover\" style=\"background-image: url('images/photo.jpg');\" uk-height-viewport></div>-->\n      <div class=\"uk-padding-small\">\n        <div class=\"uk-card  \">\n          <h3 style=\"padding-left: 8px;\" [id]=\"itemid\">\n            {{itemtitle}}\n          </h3>\n          <br>\n          <div class=\"base\" [innerHTML]=\"renderer|sanitaizer\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/theme/sugar/sugar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/theme/sugar/sugar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lister {\n  padding: 10px;\n  margin: 3px;\n  background-color: white;\n  border: 1px solid black;\n  cursor: pointer;\n  text-align: center; }\n  .lister a {\n    text-decoration: none;\n    color: white; }\n  .badge {\n  background-color: #67a3fd; }\n  .vcs {\n  border: none;\n  border-radius: 0px;\n  border-bottom: 2px solid #67a3fd;\n  width: 100%;\n  margin: auto;\n  -webkit-transition: width 1s ease-out;\n  transition: width 1s ease-out; }\n  .vcs:focus {\n  width: 80%;\n  outline: none;\n  box-shadow: none;\n  -webkit-transition: width 1s ease-in-out;\n  transition: width 1s ease-in-out; }\n  .lister:hover {\n  color: white;\n  border: 1px solid white;\n  background-color: black;\n  -webkit-transition: 1s border ease-in-out;\n  transition: 1s border ease-in-out; }\n  .lister:hover a {\n    text-decoration: none;\n    color: black; }\n  .carder {\n  height: 80vh;\n  overflow: auto;\n  word-break: break-all; }\n  .over {\n  overflow: auto; }\n  .base {\n  padding: 10px; }\n  .identity {\n  float: right;\n  margin: 10px 20px 10px 0px; }\n  div,\np,\nli,\nh5,\nh6 {\n  margin-bottom: 10px; }\n  .overlay {\n  height: 100%;\n  width: 0;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #67a3fd;\n  overflow-x: hidden;\n  -webkit-transition: 0.5s;\n  transition: 0.5s; }\n  .overlay-content {\n  position: absolute;\n  top: 120px;\n  text-align: center;\n  margin-top: 30px; }\n  .overlay a {\n  padding: 8px;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n  .overlay a:hover,\n.overlay a:focus {\n  color: #f1f1f1; }\n  .overlay .closebtn {\n  position: absolute;\n  top: 20px;\n  right: 45px;\n  font-size: 60px; }\n  .cdr {\n  margin: 3px;\n  border-radius: 0px;\n  width: 80%;\n  border: none;\n  border-bottom: 1px solid white;\n  margin: auto;\n  background-color: #67a3fd; }\n  .cdr:focus {\n  border: none;\n  outline: none;\n  box-shadow: none;\n  width: 90%;\n  border-bottom: 1px solid white;\n  -webkit-transition: 1s width ease-in-out;\n  transition: 1s width ease-in-out; }\n  @media screen and (max-height: 450px) {\n  .overlay a {\n    font-size: 20px; }\n  .overlay .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px; } }\n  .icc {\n  border: 0px;\n  background-color: #67a3fd;\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #67a3fd;\n  font-size: 20px;\n  margin: 10px;\n  z-index: 99; }\n  i {\n  border: 0px; }\n  .fd {\n  top: 0;\n  background-color: #67a3fd;\n  color: white;\n  border-radius: 5px;\n  padding: 3px;\n  left: 95px;\n  z-index: 99;\n  padding: 5px;\n  border: 1px solid #67a3fd; }\n  .fd a {\n    color: white;\n    font-size: 10px;\n    padding: 5px;\n    text-decoration: none; }\n  .rt {\n  top: 0;\n  right: 8px;\n  margin: 5px;\n  font-size: 20px;\n  color: #67a3fd; }\n  .lt {\n  top: 0;\n  font-size: 20px;\n  right: 40px;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  margin: 5px;\n  color: #67a3fd; }\n  .rt,\n.lt {\n  border-radius: 50%;\n  border: 2px solid white; }\n  .rt:hover,\n.lt:hover {\n  cursor: pointer;\n  -webkit-animation: transform 2s ease-in-out;\n          animation: transform 2s ease-in-out; }\n  .loader2 {\n  margin: auto;\n  display: block;\n  padding: 10px;\n  width: 75%; }\n  .vs {\n  border: 0px;\n  background-color: #67a3fd;\n  color: white;\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #67a3fd;\n  font-size: 20px;\n  margin: 10px;\n  z-index: 99; }\n  .vs:hover {\n  color: white;\n  background-color: #67a3fd; }\n  .cd {\n  box-shadow: none;\n  border: none;\n  padding: 3px;\n  font-family: \"Alef\", sans-serif;\n  font-size: 12px; }\n  .vs {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 10000;\n  margin: 15px;\n  padding: 5px; }\n  .list-group-item {\n  color: black; }\n  .accordion i {\n  color: lightgrey;\n  padding: 0px; }\n  .accordion i:hover {\n  color: crimson; }\n  i {\n  padding: 5px; }\n  .uk-card {\n  padding: 10px;\n  font-size: 17px; }\n  .card-header {\n  background-color: white;\n  border: 1px solid #67a3fd; }\n  .card-body {\n  border: 1px solid #67a3fd; }\n  .dd {\n  cursor: pointer; }\n  .cde {\n  width: 25%;\n  margin-top: 10px;\n  font-size: 30px;\n  padding: 0px;\n  text-align: center; }\n  .ody {\n  font-weight: bold; }\n  a i {\n  color: black;\n  font-size: 20px; }\n  .scss {\n  float: right;\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 10px; }\n  .vlist {\n  width: 50%;\n  margin: auto;\n  padding: 10px;\n  display: block;\n  -webkit-transition: -webkit-transform 1s ease-in;\n  transition: -webkit-transform 1s ease-in;\n  transition: transform 1s ease-in;\n  transition: transform 1s ease-in, -webkit-transform 1s ease-in; }\n  .vlist:hover {\n  -webkit-transform: scale(1.4);\n          transform: scale(1.4);\n  -webkit-transition: -webkit-transform 1s ease-in-out;\n  transition: -webkit-transform 1s ease-in-out;\n  transition: transform 1s ease-in-out;\n  transition: transform 1s ease-in-out, -webkit-transform 1s ease-in-out;\n  cursor: cell; }\n  img {\n  border-radius: 10px; }\n  .s-title {\n  font-size: 18px;\n  font-weight: 200;\n  word-break: break-all;\n  padding: 3px; }\n  .vfg {\n  -webkit-transition: -webkit-transform 1s ease-in-out;\n  transition: -webkit-transform 1s ease-in-out;\n  transition: transform 1s ease-in-out;\n  transition: transform 1s ease-in-out, -webkit-transform 1s ease-in-out; }\n  .dd:hover {\n  box-shadow: 0px 0px 5px 5px ghostwhite;\n  border-radius: 5px; }\n  .dd:hover .vfg {\n    -webkit-transition: -webkit-transform 1s ease-in;\n    transition: -webkit-transform 1s ease-in;\n    transition: transform 1s ease-in;\n    transition: transform 1s ease-in, -webkit-transform 1s ease-in; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc3VnYXIvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFxhc3BpLWNzcy9zcmNcXGFwcFxcdGhlbWVcXHN1Z2FyXFxzdWdhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYixZQUFXO0VBRVgsd0JBQXVCO0VBQ3ZCLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLG1CQUFrQixFQUtuQjtFQVpEO0lBU0ksc0JBQXFCO0lBQ3JCLGFBQVksRUFDYjtFQUVIO0VBQ0UsMEJBQXlCLEVBQzFCO0VBRUQ7RUFDRSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGlDQUFnQztFQUNoQyxZQUFXO0VBQ1gsYUFBWTtFQUNaLHNDQUE2QjtFQUE3Qiw4QkFBNkIsRUFDOUI7RUFDRDtFQUNFLFdBQVU7RUFDVixjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLHlDQUFnQztFQUFoQyxpQ0FBZ0MsRUFDakM7RUFDRDtFQUNFLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsd0JBQXVCO0VBQ3ZCLDBDQUFpQztFQUFqQyxrQ0FBaUMsRUFLbEM7RUFURDtJQU1JLHNCQUFxQjtJQUNyQixhQUFZLEVBQ2I7RUFHSDtFQUNFLGFBQVk7RUFDWixlQUFjO0VBQ2Qsc0JBQXFCLEVBQ3RCO0VBQ0Q7RUFDRSxlQUFjLEVBQ2Y7RUFFRDtFQUNFLGNBQWEsRUFDZDtFQUVEO0VBQ0UsYUFBWTtFQUNaLDJCQUEwQixFQUMzQjtFQUNEOzs7OztFQUtFLG9CQUFtQixFQUNwQjtFQUVEO0VBQ0UsYUFBWTtFQUNaLFNBQVE7RUFDUixtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLE9BQU07RUFDTixRQUFPO0VBQ1AsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQix5QkFBZ0I7RUFBaEIsaUJBQWdCLEVBQ2pCO0VBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsV0FBVTtFQUVWLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFDakI7RUFFRDtFQUNFLGFBQVk7RUFDWixzQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixlQUFjO0VBQ2QsZUFBYztFQUNkLHlCQUFnQjtFQUFoQixpQkFBZ0IsRUFDakI7RUFFRDs7RUFFRSxlQUFjLEVBQ2Y7RUFFRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsWUFBVztFQUNYLGdCQUFlLEVBQ2hCO0VBQ0Q7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixhQUFZO0VBQ1osK0JBQThCO0VBQzlCLGFBQVk7RUFDWiwwQkFBeUIsRUFDMUI7RUFDRDtFQUNFLGFBQVk7RUFDWixjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLFdBQVU7RUFDViwrQkFBOEI7RUFFOUIseUNBQWdDO0VBQWhDLGlDQUFnQyxFQUNqQztFQUVEO0VBQ0U7SUFDRSxnQkFBZSxFQUNoQjtFQUNEO0lBQ0UsZ0JBQWU7SUFDZixVQUFTO0lBQ1QsWUFBVyxFQUNaLEVBQUE7RUFFSDtFQUNFLFlBQVc7RUFDWCwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsMEJBQXlCO0VBRXpCLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLFlBQVcsRUFDWjtFQUNEO0VBQ0UsWUFBVyxFQUNaO0VBQ0Q7RUFFRSxPQUFNO0VBQ04sMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLFdBQVU7RUFDVixZQUFXO0VBQ1gsYUFBWTtFQUNaLDBCQUF5QixFQVMxQjtFQW5CRDtJQWNJLGFBQVk7SUFDWixnQkFBZTtJQUNmLGFBQVk7SUFDWixzQkFBcUIsRUFDdEI7RUFFSDtFQUVFLE9BQU07RUFDTixXQUFVO0VBQ1YsWUFBVztFQUNYLGdCQUFlO0VBQ2YsZUFBYyxFQUVmO0VBQ0Q7RUFFRSxPQUFNO0VBQ04sZ0JBQWU7RUFDZixZQUFXO0VBRVgsNEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQixZQUFXO0VBQ1gsZUFBYyxFQUNmO0VBQ0Q7O0VBRUUsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUV4QjtFQUNEOztFQUdFLGdCQUFlO0VBQ2YsNENBQW1DO1VBQW5DLG9DQUFtQyxFQUNwQztFQUNEO0VBQ0UsYUFBWTtFQUNaLGVBQWM7RUFDZCxjQUFhO0VBQ2IsV0FBVSxFQUNYO0VBQ0Q7RUFHRSxZQUFXO0VBQ1gsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLDBCQUF5QjtFQUV6QixnQkFBZTtFQUNmLGFBQVk7RUFDWixZQUFXLEVBQ1o7RUFFRDtFQUNFLGFBQVk7RUFDWiwwQkFBeUIsRUFDMUI7RUFDRDtFQUNFLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osYUFBWTtFQUNaLGdDQUErQjtFQUMvQixnQkFBZSxFQUNoQjtFQUNEO0VBQ0UsZ0JBQWU7RUFDZixVQUFTO0VBQ1QsUUFBTztFQUVQLGVBQWM7RUFFZCxhQUFZO0VBQ1osYUFBWSxFQUdiO0VBRUQ7RUFDRSxhQUFZLEVBQ2I7RUFDRDtFQUdJLGlCQUFnQjtFQUNoQixhQUFZLEVBQ2I7RUFMSDtFQU9JLGVBQWMsRUFDZjtFQUVIO0VBQ0UsYUFBWSxFQUNiO0VBQ0Q7RUFDRSxjQUFhO0VBQ2IsZ0JBQWUsRUFDaEI7RUFDRDtFQUNFLHdCQUF1QjtFQUN2QiwwQkFBeUIsRUFDMUI7RUFFRDtFQUNFLDBCQUF5QixFQUMxQjtFQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7RUFDRDtFQUNFLFdBQVU7RUFDVixpQkFBZ0I7RUFFaEIsZ0JBQWU7RUFDZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25CO0VBQ0Q7RUFDRSxrQkFBaUIsRUFDbEI7RUFDRDtFQUVJLGFBQVk7RUFFWixnQkFBZSxFQUNoQjtFQUVIO0VBQ0UsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsT0FBTTtFQUNOLGFBQVksRUFDYjtFQUNEO0VBQ0UsV0FBVTtFQUNWLGFBQVk7RUFDWixjQUFhO0VBQ2IsZUFBYztFQUNkLGlEQUFnQztFQUFoQyx5Q0FBZ0M7RUFBaEMsaUNBQWdDO0VBQWhDLCtEQUFnQyxFQUNqQztFQUNEO0VBQ0UsOEJBQXFCO1VBQXJCLHNCQUFxQjtFQUNyQixxREFBb0M7RUFBcEMsNkNBQW9DO0VBQXBDLHFDQUFvQztFQUFwQyx1RUFBb0M7RUFDcEMsYUFBWSxFQUNiO0VBQ0Q7RUFDRSxvQkFBbUIsRUFDcEI7RUFDRDtFQUNFLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLHNCQUFxQjtFQUNyQixhQUFZLEVBQ2I7RUFFRDtFQUNFLHFEQUFvQztFQUFwQyw2Q0FBb0M7RUFBcEMscUNBQW9DO0VBQXBDLHVFQUFvQyxFQUNyQztFQUNEO0VBQ0UsdUNBQXNDO0VBQ3RDLG1CQUFrQixFQUtuQjtFQVBEO0lBS0ksaURBQWdDO0lBQWhDLHlDQUFnQztJQUFoQyxpQ0FBZ0M7SUFBaEMsK0RBQWdDLEVBQ2pDIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvc3VnYXIvc3VnYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdGVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjsgLy8gaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuLmJhZGdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjdhM2ZkO1xyXG59XHJcblxyXG4udmNzIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjdhM2ZkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLW91dDtcclxufVxyXG4udmNzOmZvY3VzIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLWluLW91dDtcclxufVxyXG4ubGlzdGVyOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7IC8vIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAvLyBoZWlnaHQ6IDEwMHB4O1xyXG4gIHRyYW5zaXRpb246IDFzIGJvcmRlciBlYXNlLWluLW91dDtcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkZXIge1xyXG4gIGhlaWdodDogODB2aDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuLm92ZXIge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uYmFzZSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmlkZW50aXR5IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAwcHg7XHJcbn1cclxuZGl2LFxyXG5wLFxyXG5saSxcclxuaDUsXHJcbmg2IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2N2EzZmQ7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyMHB4O1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ub3ZlcmxheSBhIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBjb2xvcjogIzgxODE4MTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4ub3ZlcmxheSBhOmhvdmVyLFxyXG4ub3ZlcmxheSBhOmZvY3VzIHtcclxuICBjb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLm92ZXJsYXkgLmNsb3NlYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiA0NXB4O1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxufVxyXG4uY2RyIHtcclxuICBtYXJnaW46IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjdhM2ZkO1xyXG59XHJcbi5jZHI6Zm9jdXMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zaXRpb246IDFzIHdpZHRoIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAub3ZlcmxheSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgLm92ZXJsYXkgLmNsb3NlYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHJpZ2h0OiAzNXB4O1xyXG4gIH1cclxufVxyXG4uaWNjIHtcclxuICBib3JkZXI6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjdhM2ZkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2N2EzZmQ7XHJcbiAgLy8gYm94LXNoYWRvdzogM3B4IDNweCA1cHggZ2FpbnNib3JvO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgei1pbmRleDogOTk7XHJcbn1cclxuaSB7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbn1cclxuLmZkIHtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2N2EzZmQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbGVmdDogOTVweDtcclxuICB6LWluZGV4OiA5OTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY3YTNmZDtcclxuICAvLyBib3gtc2hhZG93OiAzcHggM3B4IDVweCBnYWluc2Jvcm87XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG4ucnQge1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDhweDtcclxuICBtYXJnaW46IDVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM2N2EzZmQ7XHJcbiAgLy8gYm94LXNoYWRvdzogM3B4IDNweCA1cHggZ2FpbnNib3JvO1xyXG59XHJcbi5sdCB7XHJcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcmlnaHQ6IDQwcHg7XHJcbiAgLy8gYm94LXNoYWRvdzogM3B4IDNweCA1cHggZ2FpbnNib3JvO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgY29sb3I6ICM2N2EzZmQ7XHJcbn1cclxuLnJ0LFxyXG4ubHQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAvLyBwYWRkaW5nOiAzcHg7XHJcbn1cclxuLnJ0OmhvdmVyLFxyXG4ubHQ6aG92ZXIge1xyXG4gIC8vIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYW5pbWF0aW9uOiB0cmFuc2Zvcm0gMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmxvYWRlcjIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuLnZzIHtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2N2EzZmQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY3YTNmZDtcclxuICAvLyBib3gtc2hhZG93OiAzcHggM3B4IDVweCBnYWluc2Jvcm87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuLnZzOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3YTNmZDtcclxufVxyXG4uY2Qge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBmb250LWZhbWlseTogXCJBbGVmXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi52cyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIC8vIHJpZ2h0OiAwJTtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjNjdhM2ZkO1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gIC8vIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDNweCAjNjdhM2ZkO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmFjY29yZGlvbiB7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzY3YTNmZDtcclxuICBpIHtcclxuICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgfVxyXG4gIGk6aG92ZXIge1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgfVxyXG59XHJcbmkge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4udWstY2FyZCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNjdhM2ZkO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNjdhM2ZkO1xyXG59XHJcbi5kZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jZGUge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5vZHkge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmEge1xyXG4gIGkge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuLnNjc3Mge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4udmxpc3Qge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW47XHJcbn1cclxuLnZsaXN0OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xyXG4gIGN1cnNvcjogY2VsbDtcclxufVxyXG5pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnMtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi52Zmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluLW91dDtcclxufVxyXG4uZGQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCBnaG9zdHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAudmZnIHtcclxuICAgIC8vIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLWluO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/theme/sugar/sugar.component.ts":
/*!************************************************!*\
  !*** ./src/app/theme/sugar/sugar.component.ts ***!
  \************************************************/
/*! exports provided: SugarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SugarComponent", function() { return SugarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_speech__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/speech */ "./src/app/services/speech.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// import { IMGLIST } from "src/app/sugar/menu";

var SugarComponent = /** @class */ (function () {
    function SugarComponent(http, speechRecognitionService, route) {
        this.http = http;
        this.speechRecognitionService = speechRecognitionService;
        this.route = route;
        this.speech = true;
        this.search = "";
        // imglist = IMGLIST;
        this.nav = false;
        this.box = [];
        this.loader = false;
    }
    SugarComponent.prototype.ngOnDestroy = function () {
        this.speech = true;
        this.speechRecognitionService.DestroySpeechObject();
    };
    SugarComponent.prototype.startSpeech = function () {
        var _this = this;
        this.speech = false;
        this.speechRecognitionService.record().subscribe(function (value) {
            // this.texter = value;
            console.log(value);
            _this.snacks(value);
            var res = _this.speechRecognitionService.findBestMatch(value, _this.box);
            _this.getRender(res["bestMatchIndex"]);
        }, function (err) {
            console.log(err);
            if (err.error === "no-speech") {
                _this.speech = true;
                console.log("--restatring service--");
            }
        }, function () {
            _this.speech = true;
            console.log("--complete--");
            // this.startSpeech();
        });
    };
    SugarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get("https://raw.githubusercontent.com/creativecoderone/poster/master/menu.json")
            .subscribe(function (data) {
            _this.lister = data;
            // console.log(data);
            _this.itemid = _this.lister[0]["id"];
            _this.itemtitle = _this.lister[0]["title"];
            for (var key in _this.lister) {
                if (_this.lister.hasOwnProperty(key)) {
                    var element = _this.lister[key];
                    _this.box.push(element["title"]);
                }
            }
            var href;
            var num = window.location.href.split("/").length - 1;
            href = window.location.href.split("/")[num];
            console.log(href);
            if (href.length > 4 && href !== "#sugar") {
                console.log(href, "---.--TRUE--.---");
                href = href.split("#")[1];
                for (var key in _this.lister) {
                    if (_this.lister.hasOwnProperty(key)) {
                        var element = _this.lister[key];
                        if (element["id"] == href) {
                            _this.itemtitle = element["title"];
                        }
                    }
                }
            }
            else {
                href = _this.lister[0]["id"];
                console.log(href, "---FALSE---");
            }
            _this.http
                .get("https://raw.githubusercontent.com/creativecoderone/poster/master/" +
                href +
                ".txt", { responseType: "text" })
                .subscribe(function (data2) {
                _this.loader = false;
                _this.renderer = data2;
            }, function (err) { });
        }, function (err) { });
        this.loader = true;
        this.iii = 0;
    };
    SugarComponent.prototype.getRender = function (index) {
        var _this = this;
        // this.loader = true;
        this.itemid = this.lister[index]["id"];
        this.itemtitle = this.lister[index]["title"];
        this.http
            .get("https://raw.githubusercontent.com/creativecoderone/poster/master/" +
            this.lister[index]["id"] +
            ".txt", { responseType: "text" })
            .subscribe(function (data2) {
            _this.iii = index;
            _this.loader = false;
            _this.renderer = data2;
        }, function (err) { });
        return index;
    };
    SugarComponent.prototype.getTitle = function (title) {
        console.log(title);
        var c = 0;
        for (var key in this.lister) {
            if (this.lister.hasOwnProperty(key)) {
                var element = this.lister[key];
                if (title === element["title"]) {
                    this.getRender(c);
                }
                c = c + 1;
            }
        }
    };
    SugarComponent.prototype.openNav = function () {
        this.nav = true;
        document.getElementById("myNav").style.width = "100%";
    };
    SugarComponent.prototype.closeNav = function () {
        this.nav = false;
        document.getElementById("myNav").style.width = "0%";
    };
    SugarComponent.prototype.ins = function () {
        var _this = this;
        // console.log("inc", this.iii);
        if (this.iii < this.lister.length - 1) {
            this.loader = true;
            this.iii = this.iii + 1;
            this.itemid = this.lister[this.iii]["id"];
            this.itemtitle = this.lister[this.iii]["title"];
            this.http
                .get("https://raw.githubusercontent.com/creativecoderone/poster/master/" +
                this.lister[this.iii]["id"] +
                ".txt", { responseType: "text" })
                .subscribe(function (data2) {
                _this.loader = false;
                _this.snacks(_this.itemtitle);
                _this.renderer = data2;
            }, function (err) { });
        }
    };
    SugarComponent.prototype.dis = function () {
        var _this = this;
        // console.log("dis", this.iii);
        if (this.iii > 0) {
            this.loader = true;
            this.iii = this.iii - 1;
            this.itemid = this.lister[this.iii]["id"];
            this.itemtitle = this.lister[this.iii]["title"];
            this.http
                .get("https://raw.githubusercontent.com/creativecoderone/poster/master/" +
                this.lister[this.iii]["id"] +
                ".txt", { responseType: "text" })
                .subscribe(function (data2) {
                _this.loader = false;
                _this.snacks(_this.itemtitle);
                _this.renderer = data2;
            }, function (err) { });
        }
    };
    SugarComponent.prototype.snacks = function (msg) {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        this.msg = msg;
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 5000);
    };
    SugarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sugar",
            template: __webpack_require__(/*! ./sugar.component.html */ "./src/app/theme/sugar/sugar.component.html"),
            styles: [__webpack_require__(/*! ./sugar.component.scss */ "./src/app/theme/sugar/sugar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_speech__WEBPACK_IMPORTED_MODULE_3__["SpeechRecognitionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SugarComponent);
    return SugarComponent;
}());



/***/ }),

/***/ "./src/app/theme/vilot/vilot.component.html":
/*!**************************************************!*\
  !*** ./src/app/theme/vilot/vilot.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"as-3 four\" [ngClass]=\"{'as-3-off': sidemenu}\">\n    <br> <br> <br>\n    <div class=\"link-container\">\n      <a href=\"#\" class=\"href-theme\"><i class=\"fas fa-apple-alt\"></i><span class=\"as-mob\">&nbsp;Home</span></a>\n      <a href=\"#\" class=\"href-theme\"><i class=\"fas fa-cloud-sun\"></i><span class=\"as-mob\">&nbsp;About </span></a>\n      <a href=\"#\" class=\"href-theme\"><i class=\"far fa-moon\"></i><span class=\"as-mob\">&nbsp;Gallery</span></a>\n      <a href=\"#\" class=\"href-theme\"><i class=\"fas fa-smile\"></i><span class=\"as-mob\">&nbsp;Contact</span></a>\n      <a href=\"#\" class=\"href-theme\"><i class=\"far fa-address-card\"></i><span class=\"as-mob\">&nbsp;Links</span></a>\n      <a href=\"#\" class=\"href-theme\"><i class=\"fas fa-comment-alt\"></i><span class=\"as-mob\">&nbsp;Images</span></a>\n      <a href=\"#\" class=\"href-theme\"><i class=\"fab fa-algolia\"></i><span class=\"as-mob\">&nbsp;Help us</span></a>\n    </div>\n  </div>\n  <div class=\"as-7 six\" [ngClass]=\"{'as-7-full': sidemenu}\">\n    <img src=\"https://image.flaticon.com/icons/png/512/2088/2088495.png\" class=\"as-mob\" [ngClass]=\"(sidemenu==true)?'a1':'a2'\"\n      (mouseover)=\"sidemenu = !sidemenu\" alt=\"\" class=\"imgoo as-mob\">\n    <!-------------------------------------------------------->\n    <div class=\"container-theme\">\n      <input type=\"text\" class=\"input-theme\" (change)=\"change($event)\" [(ngModel)]=\"dater\" placeholder=\"Enter text ...!\" name=\"fasdas\">\n      <br>\n      <div class=\"row\">\n        <div class=\"as-6\">\n          <div class=\"as-card as-align-center\">\n            <div class=\"row\">\n              <div class=\"as-6\">\n                <i class=\"fas fa-bell btnIcon\"></i>\n                <h3>Graph</h3>\n                <p>In mathematics, the graph of a function f is, formally, the set of all ordered pairs (x, f(x)), such that\n                  x is in the domain of the function f. In the common case where x and f(x) are real numbers, these pairs\n                  are Cartesian coordinates of points in the Euclidean plane and thus form a subset of this plane </p>\n\n              </div>\n              <div class=\"as-4\">\n                <img src=\"https://image.flaticon.com/icons/png/512/777/777450.png\" alt=\"\" class=\"imgfull\">\n              </div>\n            </div>\n          </div> <br>\n          <table class=\"as-table as-mob\">\n            <thead class=\"as-thead\">\n              <th class=\"as-th\"><i class='fas fa-address-book'></i></th>\n              <th class=\"as-th\"><i class='fas fa-align-justify'></i></th>\n              <th class=\"as-th\"><i class='fas fa-arrows-alt-v'></i></th>\n              <th class=\"as-th\"><i class='fas fa-calendar'></i></th>\n              <th class=\"as-th\"><i class='fas fa-building'></i></th>\n              <th class=\"as-th\"><i class='fas fa-braille'></i></th>\n              <th class=\"as-th\"><i class='fas fa-calendar-times'></i></th>\n              <th class=\"as-th\"><i class='fas fa-battery-empty'></i></th>\n              <th class=\"as-th\"><i class='fas fa-certificate'></i></th>\n            </thead>\n            <tbody class=\"as-tbody\">\n              <tr class=\"as-tr as-tr-hover\" *ngFor=\"let item of tableList; let i=index\">\n                <td class=\"as-td as-index \">#{{i}}</td>\n                <td class=\"as-td\">{{item[0]}}</td>\n                <td class=\"as-td\">{{item[1]}}</td>\n                <td class=\"as-td\">{{item[2]}}</td>\n                <td class=\"as-td\">{{item[3]}}</td>\n                <td class=\"as-td\">{{item[4]}}</td>\n                <td class=\"as-td\">{{item[5]}}</td>\n                <td class=\"as-td\">{{item[6]}}</td>\n                <td class=\"as-td\">{{item[7]}}</td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"as-card as-desk\">\n            <div class=\"as-card-body\">\n              <table>\n                <thead>\n                  <th>#</th>\n                  <th>Description</th>\n                </thead>\n                <tr>\n                  <td>\n                    <i class='fas fa-address-book'></i>\n                  </td>\n                  <td>\n                    {{cur[0]}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <i class='fas fa-align-justify'></i>\n                  </td>\n                  <td>\n                    {{cur[1]}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <i class='fas fa-arrows-alt-v'></i>\n                  </td>\n                  <td>\n                    {{cur[2]}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <i class='fas fa-calendar'></i>\n                  </td>\n                  <td>\n                    {{cur[3]}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <i class='fas fa-building'></i>\n                  </td>\n                  <td>\n                    {{cur[4]}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <i class='fas fa-calendar'></i>\n                  </td>\n                  <td>\n                    {{cur[5]}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <i class='fas fa-braille'></i>\n                  </td>\n                  <td>\n                    {{cur[6]}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <i class='fas fa-calendar-times'></i>\n                  </td>\n                  <td>\n                    {{cur[7]}}\n                  </td>\n                </tr>\n\n              </table>\n              <i (click)=\"dec()\" class=\"fas lf fa-angle-double-left\"></i>\n              <i (click)=\"inc()\" class=\"fas rt fa-angle-double-right\"></i>\n              <br>\n              <div class=\"texter\"> Showing {{index+1}} of {{len}} items.</div>\n\n            </div>\n          </div>\n\n        </div>\n        <div class=\"as-4\">\n          <div class=\"as-card as-card-next as-align-center\">\n            <div class=\"as-card-header\">\n              Order Graph\n            </div>\n            <div class=\"as-card-body\">\n              <img src=\"https://www.weareslightlymad.com/images/isometric/proficiencies.png\" alt=\"\" class=\"graph\">\n\n            </div>\n          </div>\n          <br>\n          <!--<img src=\"./assets/vilot.png\" alt=\"\" class=\"graph2\" style=\"border-radius: 10px;\">-->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<img src=\"https://image.flaticon.com/icons/png/512/752/752688.png\" alt=\"\" class=\"imglogo as-mob\">\n<img src=\"https://image.flaticon.com/icons/png/512/752/752688.png\" alt=\"\" class=\"as-img-logo as-desk\">\n\n<a href=\"#\" class=\"href-theme version\"> <i class=\"fas fa-american-sign-language-interpreting\"></i><span class=\"as-mob\">&nbsp;Vilot Theme</span> </a>\n"

/***/ }),

/***/ "./src/app/theme/vilot/vilot.component.scss":
/*!**************************************************!*\
  !*** ./src/app/theme/vilot/vilot.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-3 {\n  background-color: #1565c0;\n  position: fixed;\n  top: 0;\n  left: 0%;\n  bottom: 0;\n  width: 20%; }\n\n.as-7 {\n  background-color: white;\n  position: fixed;\n  border-radius: 50px 0px 0px 50px;\n  top: 0;\n  left: 15%;\n  bottom: 0;\n  width: 85%; }\n\n.imgoo {\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin: 15px;\n  width: 40px;\n  cursor: pointer;\n  z-index: 1; }\n\n.imgoo:hover {\n  opacity: 0.5; }\n\n.as-7-full {\n  background-color: white;\n  border-radius: 0px;\n  width: 100%;\n  position: absolute;\n  left: 0; }\n\n.as-3-off {\n  width: 0px;\n  position: absolute; }\n\n.a1 {\n  opacity: 0.2; }\n\n.a2 {\n  opacity: 0.8; }\n\n.href-theme {\n  display: block;\n  width: 67.5%;\n  text-align: left;\n  color: white;\n  text-decoration: none;\n  padding: 10px;\n  margin: 10px 5px;\n  border-radius: 10px;\n  -webkit-transition: box-shadow 0.5s ease-out;\n  transition: box-shadow 0.5s ease-out; }\n\n.href-theme:hover {\n  box-shadow: 0px 0px 3px 3px #1976d2;\n  -webkit-transition: box-shadow 0.5s ease;\n  transition: box-shadow 0.5s ease; }\n\n.imglogo {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 15px;\n  width: 50px; }\n\n.container-theme {\n  margin: 75px 5px 5px 5px;\n  height: 80vh;\n  overflow: auto; }\n\n.container-theme::-webkit-scrollbar {\n  background-color: #e3f2fd;\n  width: 3px; }\n\n.container-theme::-webkit-scrollbar-thumb {\n  background-color: #1565c0;\n  width: 3px; }\n\n.btnIcon {\n  float: right;\n  margin: 5px;\n  background-color: #1565c0;\n  border-radius: 5px;\n  padding: 5px;\n  color: white; }\n\n.input-theme {\n  width: 95%;\n  background-color: #ffecb3;\n  padding: 5px;\n  border-radius: 5px;\n  color: #1565c0;\n  border: 0px;\n  box-shadow: 0px 0px 3px 3px white;\n  margin: auto;\n  display: block; }\n\n::-webkit-input-placeholder {\n  color: #1565c0; }\n\n::-moz-placeholder {\n  color: #1565c0; }\n\n::-ms-input-placeholder {\n  color: #1565c0; }\n\n::placeholder {\n  color: #1565c0; }\n\n.input-theme:focus {\n  outline: none;\n  box-shadow: none; }\n\n.as-card {\n  border-radius: 10px;\n  box-shadow: 0px 0px 8px 8px white;\n  padding: 20px;\n  margin: auto;\n  display: block;\n  background-color: #e3f2fd; }\n\n.as-card-header {\n  font-weight: bold;\n  font-size: 20px;\n  color: #1565c0;\n  padding: 5px 0px 5px 0px;\n  border-bottom: 1px solid gainsboro; }\n\n.as-card-body {\n  padding: 5px 0px 5px 0px; }\n\n.as-card-footer {\n  font-weight: bold;\n  font-size: 16px;\n  padding: 5px 0px 5px 0px;\n  border-top: 1px solid gainsboro; }\n\n.as-align-center {\n  margin: auto;\n  display: block; }\n\n.as-card-footer > .as-card-right {\n  float: right;\n  text-align: right; }\n\n.graph {\n  width: 100%;\n  margin: auto;\n  display: block; }\n\n.graph2 {\n  width: 100%;\n  margin: auto;\n  display: block; }\n\n.as-card-next {\n  background-color: #f5f5f5; }\n\n.imgfull {\n  width: 85%;\n  margin: auto;\n  display: block; }\n\n.as-table {\n  width: 100%;\n  border-radius: 15px;\n  padding: 10px;\n  color: #1565c0; }\n\n.as-th {\n  font-weight: bold;\n  text-align: center;\n  padding: 10px; }\n\n.as-thead {\n  padding: 10px;\n  border-bottom: 1px solid #1565c0;\n  color: #ffc400; }\n\n.as-index {\n  color: #ffc400;\n  font-weight: bold; }\n\n.as-td {\n  padding: 10px; }\n\n.as-tr-bordered {\n  border: 1px solid #1565c0; }\n\n.as-tr-hover:hover {\n  cursor: pointer;\n  box-shadow: 0px 0px 4px 4px #e3f2fd;\n  -webkit-transition: box-shadow 1s ease-in-out;\n  transition: box-shadow 1s ease-in-out; }\n\n.as-tr-hover {\n  -webkit-transition: box-shadow 1s ease-in;\n  transition: box-shadow 1s ease-in; }\n\n.version {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 13%;\n  color: #ffc400; }\n\ni {\n  cursor: pointer; }\n\n@media (min-width: 1200px) {\n  .as-desk {\n    display: none; } }\n\n@media (max-width: 576px) {\n  .as-3-off {\n    width: 15%; }\n  .as-mob {\n    display: none; }\n  .as-7 {\n    border-radius: 0px; }\n  .href-theme:hover {\n    box-shadow: none; }\n  .as-img-logo {\n    display: block;\n    position: fixed;\n    top: 0;\n    right: 0;\n    margin: 15px;\n    width: 50px; } }\n\nth,\ntr,\ntd {\n  padding: 5px 10px; }\n\n.lf {\n  float: left;\n  margin: 10px; }\n\n.rt {\n  float: right;\n  margin: 10px; }\n\n.texter {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdmlsb3QvQzpcXFVzZXJzXFxtYW5vbXV0aFxcRGVza3RvcFxcV29ya0Zyb21IZXJlXFxTdGFydEhlcmVcXGFwcGxpY2F0aW9uLXdvcmtIZXJlXFxhc3BpLWNzcy9zcmNcXGFwcFxcdGhlbWVcXHZpbG90XFx2aWxvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLDBCQUplO0VBS2YsZ0JBQWU7RUFDZixPQUFNO0VBQ04sU0FBUTtFQUNSLFVBQVM7RUFDVCxXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSx3QkFBdUI7RUFDdkIsZ0JBQWU7RUFDZixpQ0FBZ0M7RUFDaEMsT0FBTTtFQUNOLFVBQVM7RUFDVCxVQUFTO0VBQ1QsV0FBVSxFQUNYOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixPQUFNO0VBQ04sU0FBUTtFQUNSLGFBQVk7RUFDWixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSx3QkFBdUI7RUFDdkIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsUUFBTyxFQUNSOztBQUVEO0VBQ0UsV0FBVTtFQUNWLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLGFBQVksRUFDYjs7QUFDRDtFQUNFLGFBQVksRUFDYjs7QUFHRDtFQUNFLGVBQWM7RUFDZCxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixzQkFBcUI7RUFDckIsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsNkNBQW9DO0VBQXBDLHFDQUFvQyxFQUNyQzs7QUFDRDtFQUNFLG9DQUFtQztFQUNuQyx5Q0FBZ0M7RUFBaEMsaUNBQWdDLEVBQ2pDOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixPQUFNO0VBQ04sUUFBTztFQUNQLGFBQVk7RUFDWixZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSx5QkFBd0I7RUFDeEIsYUFBWTtFQUNaLGVBQWMsRUFDZjs7QUFFRDtFQUNFLDBCQWxGZTtFQW1GZixXQUFVLEVBQ1g7O0FBRUQ7RUFDRSwwQkF0RmU7RUF1RmYsV0FBVSxFQUNYOztBQUNEO0VBQ0UsYUFBWTtFQUNaLFlBQVc7RUFDWCwwQkE1RmU7RUE2RmYsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1YsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsZUF0R2U7RUF1R2YsWUFBVztFQUNYLGtDQUFpQztFQUNqQyxhQUFZO0VBQ1osZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUE3R2UsRUE4R2hCOztBQUZEO0VBQ0UsZUE3R2UsRUE4R2hCOztBQUZEO0VBQ0UsZUE3R2UsRUE4R2hCOztBQUZEO0VBQ0UsZUE3R2UsRUE4R2hCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLG9CQUFtQjtFQUNuQixrQ0FBaUM7RUFDakMsY0FBYTtFQUNiLGFBQVk7RUFDWixlQUFjO0VBQ2QsMEJBM0hlLEVBNEhoQjs7QUFDRDtFQUNFLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGVBL0hlO0VBZ0lmLHlCQUF3QjtFQUN4QixtQ0FBa0MsRUFDbkM7O0FBQ0Q7RUFFRSx5QkFBd0IsRUFDekI7O0FBQ0Q7RUFDRSxrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZix5QkFBd0I7RUFDeEIsZ0NBQStCLEVBQ2hDOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGFBQVk7RUFDWixrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLGVBQWMsRUFDZjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osZUFBYyxFQUNmOztBQUNEO0VBQ0UsMEJBL0plLEVBZ0toQjs7QUFDRDtFQUNFLFdBQVU7RUFDVixhQUFZO0VBQ1osZUFBYyxFQUNmOztBQUNEO0VBRUUsWUFBVztFQUNYLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2IsZUE1S2UsRUE2S2hCOztBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsaUNBdkxlO0VBd0xmLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGVBQWM7RUFDZCxrQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSwwQkFsTWUsRUFtTWhCOztBQUNEO0VBRUUsZ0JBQWU7RUFDZixvQ0F4TWU7RUF5TWYsOENBQXFDO0VBQXJDLHNDQUFxQyxFQUN0Qzs7QUFFRDtFQUNFLDBDQUFpQztFQUFqQyxrQ0FBaUMsRUFDbEM7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLFVBQVM7RUFDVCxRQUFPO0VBQ1AsV0FBVTtFQUNWLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0U7SUFDRSxjQUFhLEVBQ2QsRUFBQTs7QUFFSDtFQUNFO0lBQ0UsV0FBVSxFQUNYO0VBQ0Q7SUFDRSxjQUFhLEVBQ2Q7RUFDRDtJQUNFLG1CQUFrQixFQUNuQjtFQUNEO0lBQ0UsaUJBQWdCLEVBQ2pCO0VBQ0Q7SUFDRSxlQUFjO0lBQ2QsZ0JBQWU7SUFDZixPQUFNO0lBQ04sU0FBUTtJQUNSLGFBQVk7SUFDWixZQUFXLEVBQ1osRUFBQTs7QUFHSDs7O0VBR0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRDtFQUNFLGFBQVk7RUFDWixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS92aWxvdC92aWxvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiZy1saXRlOiAjZTNmMmZkO1xyXG4kYmctZGFyazogIzE1NjVjMDtcclxuJGJnLXBpbms6ICNmNWY1ZjU7XHJcblxyXG4uYXMtMyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWRhcms7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwJTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG4uYXMtNyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggMHB4IDBweCA1MHB4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxNSU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiA4NSU7XHJcbn1cclxuLmltZ29vIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMTVweDtcclxuICB3aWR0aDogNDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uaW1nb286aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uYXMtNy1mdWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5hcy0zLW9mZiB7XHJcbiAgd2lkdGg6IDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmExIHtcclxuICBvcGFjaXR5OiAwLjI7XHJcbn1cclxuLmEyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi5ocmVmLXRoZW1lIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNjcuNSU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLW91dDtcclxufVxyXG4uaHJlZi10aGVtZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4ICMxOTc2ZDI7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzIGVhc2U7XHJcbn1cclxuLmltZ2xvZ28ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLmNvbnRhaW5lci10aGVtZSB7XHJcbiAgbWFyZ2luOiA3NXB4IDVweCA1cHggNXB4O1xyXG4gIGhlaWdodDogODB2aDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lci10aGVtZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1saXRlO1xyXG4gIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItdGhlbWU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctZGFyaztcclxuICB3aWR0aDogM3B4O1xyXG59XHJcbi5idG5JY29uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWRhcms7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmlucHV0LXRoZW1lIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVjYjM7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogJGJnLWRhcms7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4IHdoaXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGJnLWRhcms7XHJcbn1cclxuXHJcbi5pbnB1dC10aGVtZTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5hcy1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDhweCB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctbGl0ZTtcclxufVxyXG4uYXMtY2FyZC1oZWFkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogJGJnLWRhcms7XHJcbiAgcGFkZGluZzogNXB4IDBweCA1cHggMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnYWluc2Jvcm87XHJcbn1cclxuLmFzLWNhcmQtYm9keSB7XHJcbiAgLy8gICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogNXB4IDBweCA1cHggMHB4O1xyXG59XHJcbi5hcy1jYXJkLWZvb3RlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG59XHJcbi5hcy1hbGlnbi1jZW50ZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYXMtY2FyZC1mb290ZXIgPiAuYXMtY2FyZC1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5ncmFwaCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5ncmFwaDIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYXMtY2FyZC1uZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctcGluaztcclxufVxyXG4uaW1nZnVsbCB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmFzLXRhYmxlIHtcclxuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogJGJnLWRhcms7XHJcbn1cclxuXHJcbi5hcy10aCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5hcy10aGVhZCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJnLWRhcms7XHJcbiAgY29sb3I6ICNmZmM0MDA7XHJcbn1cclxuLmFzLWluZGV4IHtcclxuICBjb2xvcjogI2ZmYzQwMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYXMtdGQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmFzLXRyLWJvcmRlcmVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYmctZGFyaztcclxufVxyXG4uYXMtdHItaG92ZXI6aG92ZXIge1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWxpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDRweCAkYmctbGl0ZTtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYXMtdHItaG92ZXIge1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXMgZWFzZS1pbjtcclxufVxyXG4udmVyc2lvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMyU7XHJcbiAgY29sb3I6ICNmZmM0MDA7XHJcbn1cclxuaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAuYXMtZGVzayB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAuYXMtMy1vZmYge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICB9XHJcbiAgLmFzLW1vYiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuYXMtNyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG4gIC5ocmVmLXRoZW1lOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5hcy1pbWctbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG50aCxcclxudHIsXHJcbnRkIHtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuLmxmIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5ydCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4udGV4dGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/theme/vilot/vilot.component.ts":
/*!************************************************!*\
  !*** ./src/app/theme/vilot/vilot.component.ts ***!
  \************************************************/
/*! exports provided: VilotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VilotComponent", function() { return VilotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VilotComponent = /** @class */ (function () {
    function VilotComponent() {
        this.dater = "";
        this.index = 0;
        this.tableList = [
            [
                "triangle",
                "trapezoid",
                "star",
                "square",
                "rectangle",
                "octagon",
                "heart",
                "diamond"
            ],
            [
                "trapezoid",
                "triangle",
                "star",
                "square",
                "rectangle",
                "octagon",
                "heart",
                "diamond"
            ],
            [
                "star",
                "triangle",
                "trapezoid",
                "square",
                "rectangle",
                "octagon",
                "heart",
                "diamond"
            ],
            [
                "square",
                "triangle",
                "trapezoid",
                "star",
                "rectangle",
                "octagon",
                "heart",
                "diamond"
            ],
            [
                "rectangle",
                "triangle",
                "trapezoid",
                "star",
                "square",
                "octagon",
                "heart",
                "diamond"
            ],
            [
                "octagon",
                "triangle",
                "trapezoid",
                "star",
                "square",
                "rectangle",
                "heart",
                "diamond"
            ],
            [
                "triangle",
                "trapezoid",
                "star",
                "square",
                "rectangle",
                "octagon",
                "diamond",
                "star"
            ],
            [
                "heart",
                "triangle",
                "trapezoid",
                "star",
                "square",
                "rectangle",
                "octagon",
                "heart",
                "diamond"
            ],
            [
                "diamond",
                "triangle",
                "trapezoid",
                "star",
                "square",
                "rectangle",
                "octagon",
                "heart"
            ]
        ];
    }
    VilotComponent.prototype.ngOnInit = function () {
        this.cur = this.tableList[this.index];
        this.len = this.tableList.length;
    };
    VilotComponent.prototype.inc = function () {
        if (this.index === this.tableList.length - 1) {
            this.cur = this.tableList[this.tableList.length - 1];
        }
        else {
            this.cur = this.tableList[this.index + 1];
            this.index = this.index + 1;
        }
    };
    VilotComponent.prototype.dec = function () {
        if (this.index === 0) {
            this.cur = this.tableList[0];
        }
        else {
            this.cur = this.tableList[this.index - 1];
            this.index = this.index - 1;
        }
    };
    VilotComponent.prototype.change = function (e) {
        console.log(e.target.value);
    };
    VilotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-vilot",
            template: __webpack_require__(/*! ./vilot.component.html */ "./src/app/theme/vilot/vilot.component.html"),
            styles: [__webpack_require__(/*! ./vilot.component.scss */ "./src/app/theme/vilot/vilot.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VilotComponent);
    return VilotComponent;
}());



/***/ }),

/***/ "./src/app/theme/yellow/yellow.component.html":
/*!****************************************************!*\
  !*** ./src/app/theme/yellow/yellow.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"as-3 four\" [ngClass]=\"{'as-3-off': sidemenu}\">\n    <br> <br> <br>\n    <div class=\"link-container\">\n      <a href=\"#\" class=\"href-theme\"><span class=\"as-mob\">Home</span>&nbsp;<i class=\"fas fa-apple-alt\"></i></a>\n      <a href=\"#\" class=\"href-theme\"><span class=\"as-mob\">&nbsp;About </span>&nbsp;<i class=\"fas fa-cloud-sun\"></i></a>\n      <a href=\"#\" class=\"href-theme\"><span class=\"as-mob\">&nbsp;Gallery</span>&nbsp;<i class=\"far fa-moon\"></i></a>\n      <a href=\"#\" class=\"href-theme\"><span class=\"as-mob\">&nbsp;Contact</span>&nbsp;<i class=\"fas fa-smile\"></i></a>\n      <a href=\"#\" class=\"href-theme\"><span class=\"as-mob\">&nbsp;Links</span>&nbsp;<i class=\"far fa-address-card\"></i></a>\n      <a href=\"#\" class=\"href-theme\"><span class=\"as-mob\">&nbsp;Images</span>&nbsp;<i class=\"fas fa-comment-alt\"></i></a>\n      <a href=\"#\" class=\"href-theme\"><span class=\"as-mob\">&nbsp;Help us</span>&nbsp;<i class=\"fab fa-algolia\"></i></a>\n    </div>\n  </div>\n  <div class=\"as-7 six\" [ngClass]=\"{'as-7-full': sidemenu}\">\n    <img src=\"https://image.flaticon.com/icons/png/512/2088/2088495.png\" class=\"as-mob\" [ngClass]=\"(sidemenu==true)?'a1':'a2'\"\n      (mouseover)=\"sidemenu = !sidemenu\" alt=\"\" class=\"imgoo as-mob\">\n    <!-------------------------------------------------------->\n    <div class=\"container-theme\">\n      <input type=\"text\" class=\"input-theme\" (change)=\"change($event)\" [(ngModel)]=\"dater\" placeholder=\"Search dogs ...!\" name=\"fasdas\">\n      <br>\n      <div class=\"row\">\n        <div class=\"as-4\">\n          <div class=\"as-card as-card-next as-align-center\">\n            <div class=\"as-card-header\">\n              Dog foot\n            </div>\n            <div class=\"as-card-body\">\n              <img src=\"https://image.flaticon.com/icons/png/512/616/616408.png\" alt=\"\" style=\" cursor: url('https://image.flaticon.com/icons/png/512/2334/premium/2334384.png'),  auto;\"\n                class=\"graph\">\n            </div>\n            <div class=\"row\">\n              <div>\n                <i class=\"fas fa-bell btnIcon\"></i>\n                <h3>Dogs</h3>\n                <p>The domestic dog is a member of the genus Canis (canines), which forms part of the wolf-like canids, and\n                  is the most widely abundant terrestrial carnivore.</p>\n              </div>\n            </div>\n\n          </div>\n          <br>\n        </div>\n        <div class=\"as-6\">\n          <div class=\"as-card as-align-center\">\n            <div class=\"row\">\n              <div class=\"as-6\">\n                <i class=\"fas fa-bell btnIcon\"></i>\n                <h3>Breeds</h3>\n                <p>Dog breeds are usually categorized by the functional type from which the breed was developed. The basic types\n                  are companion dogs, guard dogs, hunting dogs, herding dogs and working dogs. </p>\n              </div>\n              <div class=\"as-4\">\n                <img src=\"https://image.flaticon.com/icons/png/512/884/884183.png\" alt=\"\" class=\"imgfull\">\n              </div>\n            </div>\n          </div> <br>\n          <table class=\"as-table as-mob\">\n            <thead class=\"as-thead\">\n              <th class=\"as-th\"><i class='fas fa-address-book'></i></th>\n              <th class=\"as-th\"><i class='fas fa-align-justify'></i></th>\n              <th class=\"as-th\"><i class='fas fa-arrows-alt-v'></i></th>\n              <th class=\"as-th\"><i class='fas fa-calendar'></i></th>\n              <th class=\"as-th\"><i class='fas fa-building'></i></th>\n              <th class=\"as-th\"><i class='fas fa-braille'></i></th>\n              <th class=\"as-th\"><i class='fas fa-calendar-times'></i></th>\n              <th class=\"as-th\"><i class='fas fa-battery-empty'></i></th>\n              <th class=\"as-th\"><i class='fas fa-certificate'></i></th>\n            </thead>\n            <tbody class=\"as-tbody\">\n              <tr class=\"as-tr as-tr-hover\" *ngFor=\"let item of tableList; let i=index\">\n                <td class=\"as-td as-index \">#{{i}}</td>\n                <td class=\"as-td\">{{item[0]}}</td>\n                <td class=\"as-td\">{{item[1]}}</td>\n                <td class=\"as-td\">{{item[2]}}</td>\n                <td class=\"as-td\">{{item[3]}}</td>\n                <td class=\"as-td\">{{item[4]}}</td>\n                <td class=\"as-td\">{{item[5]}}</td>\n                <td class=\"as-td\">{{item[6]}}</td>\n                <td class=\"as-td\">{{item[7]}}</td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"as-card as-desk\">\n            <div class=\"as-card-body\">\n              <table>\n                <thead>\n                  <th>#</th>\n                  <th>Description</th>\n                </thead>\n                <tr>\n                  <td>\n                    <i class='fas fa-address-book'></i>\n                  </td>\n                  <td>\n                    {{cur[0]}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <i class='fas fa-align-justify'></i>\n                  </td>\n                  <td>\n                    {{cur[1]}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <i class='fas fa-arrows-alt-v'></i>\n                  </td>\n                  <td>\n                    {{cur[2]}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <i class='fas fa-calendar'></i>\n                  </td>\n                  <td>\n                    {{cur[3]}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <i class='fas fa-building'></i>\n                  </td>\n                  <td>\n                    {{cur[4]}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <i class='fas fa-calendar'></i>\n                  </td>\n                  <td>\n                    {{cur[5]}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <i class='fas fa-braille'></i>\n                  </td>\n                  <td>\n                    {{cur[6]}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <i class='fas fa-calendar-times'></i>\n                  </td>\n                  <td>\n                    {{cur[7]}}\n                  </td>\n                </tr>\n\n              </table>\n              <i (click)=\"dec()\" class=\"fas lf fa-angle-double-left\"></i>\n              <i (click)=\"inc()\" class=\"fas rt fa-angle-double-right\"></i>\n              <br>\n              <div class=\"texter\"> Showing {{index+1}} of {{len}} items.</div>\n\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<img src=\"https://image.flaticon.com/icons/png/512/616/616408.png\" alt=\"\" class=\"imglogo as-mob\">\n<img src=\"https://image.flaticon.com/icons/png/512/616/616408.png\" alt=\"\" class=\"as-img-logo as-desk\">\n\n<a href=\"#\" class=\"href-theme version\"> <i class=\"fas fa-american-sign-language-interpreting\"></i><span class=\"as-mob\">&nbsp;Dog Theme</span> </a>\n"

/***/ }),

/***/ "./src/app/theme/yellow/yellow.component.scss":
/*!****************************************************!*\
  !*** ./src/app/theme/yellow/yellow.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".as-3 {\n  background-color: #ffab40;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 20%; }\n\n.as-7 {\n  background-color: white;\n  position: absolute;\n  border-radius: 0px 50px 50px 0px;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 85%;\n  z-index: 1; }\n\n.imgoo {\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin: 15px;\n  width: 40px;\n  cursor: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.png\"), auto;\n  z-index: 1; }\n\n.imgoo:hover {\n  opacity: 0.5;\n  cursor: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/heart.png\"), auto; }\n\n.as-7-full {\n  background-color: white;\n  border-radius: 0px;\n  width: 100%;\n  position: absolute;\n  left: 0; }\n\n.as-3-off {\n  display: none;\n  position: absolute; }\n\n.a1 {\n  opacity: 0.2; }\n\n.a2 {\n  opacity: 0.8; }\n\n.href-theme {\n  display: block;\n  width: 100%;\n  text-align: right;\n  color: white;\n  text-decoration: none;\n  padding: 10px 15px;\n  margin: 15px 5px;\n  -webkit-transition: box-shadow 0.5s ease-out;\n  transition: box-shadow 0.5s ease-out; }\n\n.href-theme:hover {\n  box-shadow: 0px 0px 3px 3px #fff3e0;\n  -webkit-transition: box-shadow 0.5s ease;\n  transition: box-shadow 0.5s ease; }\n\n.imglogo {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 15px;\n  width: 50px;\n  z-index: 1; }\n\n.container-theme {\n  margin: 75px 5px 5px 5px;\n  height: 80vh;\n  overflow: auto; }\n\n.container-theme::-webkit-scrollbar {\n  background-color: #fff3e0;\n  width: 3px; }\n\n.container-theme::-webkit-scrollbar-thumb {\n  background-color: #ffab40;\n  width: 3px; }\n\n.btnIcon {\n  float: right;\n  margin: 5px;\n  background-color: #ffab40;\n  border-radius: 5px;\n  padding: 5px;\n  color: white; }\n\n.input-theme {\n  width: 95%;\n  background-color: #ffecb3;\n  padding: 5px;\n  border-radius: 5px;\n  color: #ffab40;\n  border: 0px;\n  box-shadow: 0px 0px 3px 3px white;\n  margin: auto;\n  display: block; }\n\n::-webkit-input-placeholder {\n  color: #ffab40; }\n\n::-moz-placeholder {\n  color: #ffab40; }\n\n::-ms-input-placeholder {\n  color: #ffab40; }\n\n::placeholder {\n  color: #ffab40; }\n\n.input-theme:focus {\n  outline: none;\n  box-shadow: none; }\n\n.as-card {\n  border-radius: 10px;\n  box-shadow: 0px 0px 8px 8px white;\n  padding: 20px;\n  margin: auto;\n  display: block;\n  background-color: #fff3e0; }\n\n.as-card-header {\n  font-weight: bold;\n  font-size: 20px;\n  color: #ffab40;\n  padding: 5px 0px 5px 0px;\n  border-bottom: 1px solid gainsboro; }\n\n.as-card-body {\n  padding: 5px 0px 5px 0px; }\n\n.as-card-footer {\n  font-weight: bold;\n  font-size: 16px;\n  padding: 5px 0px 5px 0px;\n  border-top: 1px solid gainsboro; }\n\n.as-align-center {\n  margin: auto;\n  display: block; }\n\n.as-card-footer > .as-card-right {\n  float: right;\n  text-align: right; }\n\n.graph {\n  width: 100%;\n  margin: auto;\n  display: block; }\n\n.graph2 {\n  width: 100%;\n  margin: auto;\n  display: block; }\n\n.as-card-next {\n  background-color: #f9fbe7; }\n\n.imgfull {\n  width: 85%;\n  margin: auto;\n  display: block; }\n\n.as-table {\n  width: 100%;\n  border-radius: 15px;\n  padding: 10px;\n  color: #ffab40; }\n\n.as-th {\n  font-weight: bold;\n  text-align: center;\n  padding: 10px; }\n\n.as-thead {\n  padding: 10px;\n  border-bottom: 1px solid #ffab40;\n  color: #ffc400; }\n\n.as-index {\n  color: #ffc400;\n  font-weight: bold; }\n\n.as-td {\n  padding: 10px; }\n\n.as-tr-bordered {\n  border: 1px solid #ffab40; }\n\n.as-tr-hover:hover {\n  box-shadow: 0px 0px 4px 4px #fff3e0;\n  -webkit-transition: box-shadow 1s ease-in-out;\n  transition: box-shadow 1s ease-in-out; }\n\n.as-tr-hover {\n  -webkit-transition: box-shadow 1s ease-in;\n  transition: box-shadow 1s ease-in; }\n\n.version {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 13%;\n  color: #ffc400; }\n\ni {\n  cursor: pointer; }\n\n@media (min-width: 1200px) {\n  .as-desk {\n    display: none; } }\n\n@media (max-width: 576px) {\n  .as-3-off {\n    width: 15%; }\n  .as-mob {\n    display: none; }\n  .as-7 {\n    border-radius: 0px; }\n  .href-theme:hover {\n    box-shadow: none; }\n  .as-img-logo {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 10px;\n    width: 50px;\n    z-index: 1; } }\n\nth,\ntr,\ntd {\n  padding: 5px 10px; }\n\n.lf {\n  float: left;\n  margin: 10px; }\n\n.rt {\n  float: right;\n  margin: 10px; }\n\n.texter {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUveWVsbG93L0M6XFxVc2Vyc1xcbWFub211dGhcXERlc2t0b3BcXFdvcmtGcm9tSGVyZVxcU3RhcnRIZXJlXFxhcHBsaWNhdGlvbi13b3JrSGVyZVxcYXNwaS1jc3Mvc3JjXFxhcHBcXHRoZW1lXFx5ZWxsb3dcXHllbGxvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLDBCQUplO0VBS2YsZ0JBQWU7RUFDZixPQUFNO0VBQ04sU0FBUTtFQUNSLFVBQVM7RUFDVCxXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSx3QkFBdUI7RUFDdkIsbUJBQWtCO0VBQ2xCLGlDQUFnQztFQUNoQyxPQUFNO0VBQ04sUUFBTztFQUNQLFVBQVM7RUFDVCxXQUFVO0VBQ1YsV0FBVSxFQUNYOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixPQUFNO0VBQ04sU0FBUTtFQUNSLGFBQVk7RUFDWixZQUFXO0VBQ1gsaUZBQ007RUFDTixXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osaUZBQ00sRUFDUDs7QUFDRDtFQUNFLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixRQUFPLEVBQ1I7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsYUFBWSxFQUNiOztBQUNEO0VBQ0UsYUFBWSxFQUNiOztBQUdEO0VBQ0UsZUFBYztFQUNkLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsYUFBWTtFQUNaLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBRWhCLDZDQUFvQztFQUFwQyxxQ0FBb0MsRUFDckM7O0FBQ0Q7RUFDRSxvQ0FyRWU7RUFzRWYseUNBQWdDO0VBQWhDLGlDQUFnQyxFQUNqQzs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFFBQU87RUFDUCxhQUFZO0VBQ1osWUFBVztFQUNYLFdBQVUsRUFDWDs7QUFDRDtFQUNFLHlCQUF3QjtFQUN4QixhQUFZO0VBQ1osZUFBYyxFQUNmOztBQUVEO0VBQ0UsMEJBdkZlO0VBd0ZmLFdBQVUsRUFDWDs7QUFFRDtFQUNFLDBCQTNGZTtFQTRGZixXQUFVLEVBQ1g7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLDBCQWpHZTtFQWtHZixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGFBQVksRUFDYjs7QUFDRDtFQUNFLFdBQVU7RUFDViwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixlQTNHZTtFQTRHZixZQUFXO0VBQ1gsa0NBQWlDO0VBQ2pDLGFBQVk7RUFDWixlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxlQWxIZSxFQW1IaEI7O0FBRkQ7RUFDRSxlQWxIZSxFQW1IaEI7O0FBRkQ7RUFDRSxlQWxIZSxFQW1IaEI7O0FBRkQ7RUFDRSxlQWxIZSxFQW1IaEI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0Usb0JBQW1CO0VBQ25CLGtDQUFpQztFQUNqQyxjQUFhO0VBQ2IsYUFBWTtFQUNaLGVBQWM7RUFDZCwwQkFoSWUsRUFpSWhCOztBQUNEO0VBQ0Usa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsZUFwSWU7RUFxSWYseUJBQXdCO0VBQ3hCLG1DQUFrQyxFQUNuQzs7QUFDRDtFQUVFLHlCQUF3QixFQUN6Qjs7QUFDRDtFQUNFLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLHlCQUF3QjtFQUN4QixnQ0FBK0IsRUFDaEM7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osZUFBYyxFQUNmOztBQUNEO0VBQ0UsYUFBWTtFQUNaLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osZUFBYyxFQUNmOztBQUNEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixlQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSwwQkFwS2UsRUFxS2hCOztBQUNEO0VBQ0UsV0FBVTtFQUNWLGFBQVk7RUFDWixlQUFjLEVBQ2Y7O0FBQ0Q7RUFFRSxZQUFXO0VBQ1gsb0JBQW1CO0VBQ25CLGNBQWE7RUFDYixlQWpMZSxFQWtMaEI7O0FBRUQ7RUFDRSxrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLGNBQWEsRUFDZDs7QUFFRDtFQUNFLGNBQWE7RUFDYixpQ0E1TGU7RUE2TGYsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYztFQUNkLGtCQUFpQixFQUNsQjs7QUFDRDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLDBCQXZNZSxFQXdNaEI7O0FBQ0Q7RUFDRSxvQ0EzTWU7RUE0TWYsOENBQXFDO0VBQXJDLHNDQUFxQyxFQUN0Qzs7QUFFRDtFQUNFLDBDQUFpQztFQUFqQyxrQ0FBaUMsRUFDbEM7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLFVBQVM7RUFDVCxTQUFRO0VBQ1IsV0FBVTtFQUNWLGVBQWMsRUFDZjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0U7SUFDRSxjQUFhLEVBQ2QsRUFBQTs7QUFFSDtFQUNFO0lBQ0UsV0FBVSxFQUNYO0VBQ0Q7SUFDRSxjQUFhLEVBQ2Q7RUFDRDtJQUNFLG1CQUFrQixFQUNuQjtFQUNEO0lBQ0UsaUJBQWdCLEVBQ2pCO0VBQ0Q7SUFDRSxlQUFjO0lBQ2QsZ0JBQWU7SUFDZixPQUFNO0lBQ04sUUFBTztJQUNQLGFBQVk7SUFDWixZQUFXO0lBQ1gsV0FBVSxFQUNYLEVBQUE7O0FBR0g7OztFQUdFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osYUFBWSxFQUNiOztBQUNEO0VBQ0UsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUveWVsbG93L3llbGxvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiZy1saXRlOiAjZmZmM2UwO1xyXG4kYmctZGFyazogI2ZmYWI0MDtcclxuJGJnLXBpbms6ICNmOWZiZTc7XHJcblxyXG4uYXMtMyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWRhcms7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG4uYXMtNyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCA1MHB4IDUwcHggMHB4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogODUlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmltZ29vIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMTVweDtcclxuICB3aWR0aDogNDBweDtcclxuICBjdXJzb3I6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzk2MzIvaGVhcnQucG5nXCIpLFxyXG4gICAgYXV0bztcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5pbWdvbzpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vOTYzMi9oZWFydC5wbmdcIiksXHJcbiAgICBhdXRvO1xyXG59XHJcbi5hcy03LWZ1bGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmFzLTMtb2ZmIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uYTEge1xyXG4gIG9wYWNpdHk6IDAuMjtcclxufVxyXG4uYTIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLmhyZWYtdGhlbWUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIG1hcmdpbjogMTVweCA1cHg7XHJcbiAgLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLW91dDtcclxufVxyXG4uaHJlZi10aGVtZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4ICRiZy1saXRlO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlO1xyXG59XHJcbi5pbWdsb2dvIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmNvbnRhaW5lci10aGVtZSB7XHJcbiAgbWFyZ2luOiA3NXB4IDVweCA1cHggNXB4O1xyXG4gIGhlaWdodDogODB2aDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lci10aGVtZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZy1saXRlO1xyXG4gIHdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItdGhlbWU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctZGFyaztcclxuICB3aWR0aDogM3B4O1xyXG59XHJcbi5idG5JY29uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWRhcms7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmlucHV0LXRoZW1lIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVjYjM7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogJGJnLWRhcms7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4IHdoaXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJGJnLWRhcms7XHJcbn1cclxuXHJcbi5pbnB1dC10aGVtZTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5hcy1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDhweCB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctbGl0ZTtcclxufVxyXG4uYXMtY2FyZC1oZWFkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogJGJnLWRhcms7XHJcbiAgcGFkZGluZzogNXB4IDBweCA1cHggMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnYWluc2Jvcm87XHJcbn1cclxuLmFzLWNhcmQtYm9keSB7XHJcbiAgLy8gICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogNXB4IDBweCA1cHggMHB4O1xyXG59XHJcbi5hcy1jYXJkLWZvb3RlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgZ2FpbnNib3JvO1xyXG59XHJcbi5hcy1hbGlnbi1jZW50ZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYXMtY2FyZC1mb290ZXIgPiAuYXMtY2FyZC1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5ncmFwaCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5ncmFwaDIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uYXMtY2FyZC1uZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctcGluaztcclxufVxyXG4uaW1nZnVsbCB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmFzLXRhYmxlIHtcclxuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogJGJnLWRhcms7XHJcbn1cclxuXHJcbi5hcy10aCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5hcy10aGVhZCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJnLWRhcms7XHJcbiAgY29sb3I6ICNmZmM0MDA7XHJcbn1cclxuLmFzLWluZGV4IHtcclxuICBjb2xvcjogI2ZmYzQwMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYXMtdGQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmFzLXRyLWJvcmRlcmVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYmctZGFyaztcclxufVxyXG4uYXMtdHItaG92ZXI6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDRweCAkYmctbGl0ZTtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYXMtdHItaG92ZXIge1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMXMgZWFzZS1pbjtcclxufVxyXG4udmVyc2lvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTMlO1xyXG4gIGNvbG9yOiAjZmZjNDAwO1xyXG59XHJcbmkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmFzLWRlc2sge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmFzLTMtb2ZmIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgfVxyXG4gIC5hcy1tb2Ige1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmFzLTcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxuICAuaHJlZi10aGVtZTpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAuYXMtaW1nLWxvZ28ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxufVxyXG5cclxudGgsXHJcbnRyLFxyXG50ZCB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5sZiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ucnQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLnRleHRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/theme/yellow/yellow.component.ts":
/*!**************************************************!*\
  !*** ./src/app/theme/yellow/yellow.component.ts ***!
  \**************************************************/
/*! exports provided: YellowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YellowComponent", function() { return YellowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var YellowComponent = /** @class */ (function () {
    function YellowComponent() {
        this.dater = "";
        this.index = 0;
        this.tableList = [
            [
                "triangle",
                "trapezoid",
                "star",
                "square",
                "rectangle",
                "octagon",
                "heart",
                "diamond"
            ],
            [
                "trapezoid",
                "triangle",
                "star",
                "square",
                "rectangle",
                "octagon",
                "heart",
                "diamond"
            ],
            [
                "star",
                "triangle",
                "trapezoid",
                "square",
                "rectangle",
                "octagon",
                "heart",
                "diamond"
            ],
            [
                "octagon",
                "triangle",
                "trapezoid",
                "star",
                "square",
                "rectangle",
                "heart",
                "diamond"
            ],
            [
                "triangle",
                "trapezoid",
                "star",
                "square",
                "rectangle",
                "octagon",
                "diamond",
                "star"
            ],
            [
                "heart",
                "triangle",
                "trapezoid",
                "star",
                "square",
                "rectangle",
                "octagon",
                "heart",
                "diamond"
            ],
            [
                "diamond",
                "triangle",
                "trapezoid",
                "star",
                "square",
                "rectangle",
                "octagon",
                "heart"
            ]
        ];
    }
    YellowComponent.prototype.ngOnInit = function () {
        this.cur = this.tableList[this.index];
        this.len = this.tableList.length;
    };
    YellowComponent.prototype.inc = function () {
        if (this.index === this.tableList.length - 1) {
            this.cur = this.tableList[this.tableList.length - 1];
        }
        else {
            this.cur = this.tableList[this.index + 1];
            this.index = this.index + 1;
        }
    };
    YellowComponent.prototype.dec = function () {
        if (this.index === 0) {
            this.cur = this.tableList[0];
        }
        else {
            this.cur = this.tableList[this.index - 1];
            this.index = this.index - 1;
        }
    };
    YellowComponent.prototype.change = function (e) {
        console.log(e.target.value);
    };
    YellowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-yellow",
            template: __webpack_require__(/*! ./yellow.component.html */ "./src/app/theme/yellow/yellow.component.html"),
            styles: [__webpack_require__(/*! ./yellow.component.scss */ "./src/app/theme/yellow/yellow.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], YellowComponent);
    return YellowComponent;
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