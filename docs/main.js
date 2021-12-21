(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular-website-example\src\main.ts */"zUnb");


/***/ }),

/***/ "0btM":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _raw_loader_content_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./content.component.html */ "3kzm");
/* harmony import */ var _content_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.component.css */ "9tVA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _questions_modal_questions_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../questions-modal/questions-modal.component */ "xe/e");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _mood_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mood-api.service */ "zPz5");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ContentComponent = /** @class */ (function () {
    function ContentComponent(_MoodApiService, http, dialog) {
        this._MoodApiService = _MoodApiService;
        this.http = http;
        this.dialog = dialog;
        this.options = {};
        this.pageTitle = 'Deal Share by Contact';
        this.chartData = [];
        this.mode = 'Indeterminate';
        this.value = 50;
        this.data = null;
        this.value1 = 0;
        this.value2 = 0;
        this.value3 = 0;
        this.value4 = 0;
        this.value5 = 0;
        this.model = {};
        this.displayedColumns = ['Angry', 'Happy', 'Sad', 'Surprise', 'Fear'];
        this.dataSource = this.data;
        this.ELEMENT_DATA = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ContentComponent.prototype.getTooltipFormatter = function () {
        return function (params) {
            return '<div style="width:300px; height: 400px">working</div>';
        };
    };
    ContentComponent.prototype.delete = function () {
        this.matTable.dataSource = this.ELEMENT_DATA;
        this.matTable.renderRows();
        this.IsWait = false;
    };
    ContentComponent.prototype.ngOnInit = function () {
        var echarts = 0;
        this.options = {
            backgroundColor: echarts.bg,
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: this.ELEMENT_DATA,
                textStyle: {
                    color: echarts.textColor,
                },
            },
            series: [
                {
                    name: 'Moods',
                    type: 'pie',
                    radius: '80%',
                    center: ['50%', '50%'],
                    data: [
                        { value: this.value1, name: 'Angry' },
                        { value: this.value2, name: 'Happy' },
                        { value: this.value3, name: 'Sad' },
                        { value: this.value4, name: 'Surprise' },
                        { value: this.value5, name: 'Fear' },
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: echarts.itemHoverShadowColor,
                        },
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                    },
                },
            ],
        };
    };
    ContentComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_questions_modal_questions_modal_component__WEBPACK_IMPORTED_MODULE_5__["QuestionsModalComponent"], {
            height: '60%',
            width: '50%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result.data);
            _this.ans = result.data;
            if (_this.ans) {
                _this.registerUser();
            }
        });
    };
    ContentComponent.prototype.registerUser = function () {
        var _this = this;
        var name = "message";
        this.IsWait = true;
        debugger;
        if (this.ans) {
            this._MoodApiService.addCampaign(this.ans).subscribe(function (x) {
                _this.data = x;
                _this.value1 = _this.data.Angry;
                _this.value2 = _this.data.Happy;
                _this.value3 = _this.data.Sad;
                _this.value4 = _this.data.Surprise;
                _this.value5 = _this.data.Fear;
                _this.ELEMENT_DATA.push(_this.data);
                _this.delete();
                _this.ngOnInit();
            });
        }
        else {
            alert("API Error 404");
        }
    };
    ContentComponent.ctorParameters = function () { return [
        { type: _mood_api_service__WEBPACK_IMPORTED_MODULE_7__["MoodApiService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
    ]; };
    ContentComponent.propDecorators = {
        matTable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"],] }]
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-content",
            template: _raw_loader_content_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_content_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_mood_api_service__WEBPACK_IMPORTED_MODULE_7__["MoodApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "1XXE":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-social app-social {\r\n  float: right;\r\n  right: 10px;\r\n  margin-right: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1zb2NpYWwgYXBwLXNvY2lhbCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "3kzm":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Content Section-->\r\n\r\n<div id=\"services\" class=\"scrollto clearfix\">\r\n  <div class=\"row no-padding-bottom clearfix\">\r\n    <!--Content Left Side-->\r\n    <!--End Content Left Side-->\r\n    <!--Content of the Right Side-->    \r\n    <div class=\"col-3\">\r\n        <mat-card class=\"grey\">\r\n            <form #signupForm=\"ngForm\">\r\n                <div class=\"form-element\">\r\n                    <!-- <button type=\"submit\" class=\"button\" >Submit Form</button> -->\r\n                    <button class=\"button\"(click)=\"openDialog()\" >Take the Quiz</button>\r\n                  </div>\r\n              </form>\r\n        </mat-card>\r\n        <table mat-table matTable [dataSource]=\"dataSource\">\r\n          \r\n <!--- Note that these columns can be defined in any order.\r\n        The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"Angry\">\r\n      <th mat-header-cell *matHeaderCellDef> Angry</th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Angry}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"Fear\">\r\n      <th mat-header-cell *matHeaderCellDef> Fear </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Fear}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"Happy\">\r\n      <th mat-header-cell *matHeaderCellDef> Happy </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Happy}} </td>\r\n    </ng-container>\r\n  \r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"Sad\">\r\n      <th mat-header-cell *matHeaderCellDef> Sad </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.Sad}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"Surprise\">\r\n        <th mat-header-cell *matHeaderCellDef> Surprise </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.Surprise}} </td>\r\n      </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n      </div>\r\n    <!--End Content Right Side-->\r\n    <div class=\"col-3\">\r\n        <div style=\"z-index:1000; margin-right:5%; width: 150%\" echarts [options]=\"options\" class=\"echart\"></div>\r\n      </div>\r\n    <div class=\"col-3\">\r\n      <img class=\"imagee\" src=\"../assets/images/dancer.jpg\" alt=\"Dancer\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--End of Content Section-->\r\n<div class=\"loader\">\r\n    <mat-spinner *ngIf='IsWait'></mat-spinner>\r\n</div>\r\n");

/***/ }),

/***/ "9lXE":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _raw_loader_pricing_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./pricing.component.html */ "U2kE");
/* harmony import */ var _pricing_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing.component.css */ "NiUD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent.ctorParameters = function () { return []; };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-pricing',
            template: _raw_loader_pricing_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_pricing_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "9tVA":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tp-section {\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    height: 60px;\r\n }\r\n .tp-margin {\r\n    margin: 0 10px;\r\n }\r\n .example-full-width{\r\nwidth: 100%\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7Q0FDZjtDQUNBO0lBQ0csY0FBYztDQUNqQjtDQUNEO0FBQ0E7Q0FDQyIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHAtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNjBweDtcclxuIH1cclxuIC50cC1tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiB9XHJcbi5leGFtcGxlLWZ1bGwtd2lkdGh7XHJcbndpZHRoOiAxMDAlXHJcbiB9Il19 */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "A4SG":
/*!***********************************************!*\
  !*** ./src/app/clients/clients.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "AytR":
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

/***/ "BLGF":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Gallery-->\r\n<aside\r\n  id=\"gallery\"\r\n  class=\"row text-center scrollto clearfix\"\r\n  data-featherlight-gallery\r\n  data-featherlight-filter=\"a\"\r\n>\r\n  <a\r\n    href=\"../assets/images/gallery-images/gallery-image-1.jpg\"\r\n    data-featherlight=\"image\"\r\n    class=\"col-3 wow fadeIn\"\r\n    data-wow-delay=\"0.1s\"\r\n    ><img\r\n      src=\"../assets/images/gallery-images/gallery-image-1.jpg\"\r\n      alt=\"Landing Page\"\r\n  /></a>\r\n  <a\r\n    href=\"../assets/images/gallery-images/gallery-image-2.jpg\"\r\n    data-featherlight=\"image\"\r\n    class=\"col-3 wow fadeIn\"\r\n    data-wow-delay=\"0.3s\"\r\n    ><img\r\n      src=\"../assets/images/gallery-images/gallery-image-2.jpg\"\r\n      alt=\"Landing Page\"\r\n  /></a>\r\n  <a\r\n    href=\"../assets/images/gallery-images/gallery-image-3.jpg\"\r\n    data-featherlight=\"image\"\r\n    class=\"col-3 wow fadeIn\"\r\n    data-wow-delay=\"0.5s\"\r\n    ><img\r\n      src=\"../assets/images/gallery-images/gallery-image-3.jpg\"\r\n      alt=\"Landing Page\"\r\n  /></a>\r\n  <a\r\n    href=\"../assets/images/gallery-images/gallery-image-4.jpg\"\r\n    data-featherlight=\"image\"\r\n    class=\"col-3 wow fadeIn\"\r\n    data-wow-delay=\"1.1s\"\r\n    ><img\r\n      src=\"../assets/images/gallery-images/gallery-image-4.jpg\"\r\n      alt=\"Landing Page\"\r\n  /></a>\r\n  <a\r\n    href=\"../assets/images/gallery-images/gallery-image-5.jpg\"\r\n    data-featherlight=\"image\"\r\n    class=\"col-3 wow fadeIn\"\r\n    data-wow-delay=\"0.9s\"\r\n    ><img\r\n      src=\"../assets/images/gallery-images/gallery-image-5.jpg\"\r\n      alt=\"Landing Page\"\r\n  /></a>\r\n  <a\r\n    href=\"../assets/images/gallery-images/gallery-image-6.jpg\"\r\n    data-featherlight=\"image\"\r\n    class=\"col-3 wow fadeIn\"\r\n    data-wow-delay=\"0.7s\"\r\n    ><img\r\n      src=\"../assets/images/gallery-images/gallery-image-6.jpg\"\r\n      alt=\"Landing Page\"\r\n  /></a>\r\n</aside>\r\n<!--End of Gallery-->\r\n");

/***/ }),

/***/ "BlCi":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxsZXJ5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Cko8":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Introduction-->\r\n<section id=\"about\" class=\"introduction scrollto\">\r\n  <div class=\"row clearfix\">\r\n    <div class=\"col-3\">\r\n      <div class=\"section-heading\">\r\n        <h3>SUCCESS</h3>\r\n        <h2 class=\"section-title\">How We Help You To Sell Your Product</h2>\r\n        <p class=\"section-subtitle\">\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\r\n          minim veniam!\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-2-3\">\r\n      <!--Icon Block-->\r\n      <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.1s\">\r\n        <!--Icon-->\r\n        <div class=\"icon\">\r\n          <i class=\"fa fa-html5 fa-2x\"></i>\r\n        </div>\r\n        <!--Icon Block Description-->\r\n        <div class=\"icon-block-description\">\r\n          <h4>HTML5 &amp; CSS3</h4>\r\n          <p>\r\n            Has ne tritani atomorum conclusionemque, in dolorum volumus\r\n            cotidieque eum. At vis choro neglegentur iudico\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!--End of Icon Block-->\r\n\r\n      <!--Icon Block-->\r\n      <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.3s\">\r\n        <!--Icon-->\r\n        <div class=\"icon\">\r\n          <i class=\"fa fa-bolt fa-2x\"></i>\r\n        </div>\r\n        <!--Icon Block Description-->\r\n        <div class=\"icon-block-description\">\r\n          <h4>Easy to Use</h4>\r\n          <p>\r\n            Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis\r\n            repudiandae, sit detracto mediocrem disputationi\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!--End of Icon Block-->\r\n\r\n      <!--Icon Block-->\r\n      <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.5s\">\r\n        <!--Icon-->\r\n        <div class=\"icon\">\r\n          <i class=\"fa fa-tablet fa-2x\"></i>\r\n        </div>\r\n        <!--Icon Block Description-->\r\n        <div class=\"icon-block-description\">\r\n          <h4>Fully Responsive</h4>\r\n          <p>\r\n            Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit\r\n            debet ea sit, an pro nemore vivendum\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!--End of Icon Block-->\r\n\r\n      <!--Icon Block-->\r\n      <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.5s\">\r\n        <!--Icon-->\r\n        <div class=\"icon\">\r\n          <i class=\"fa fa-rocket fa-2x\"></i>\r\n        </div>\r\n        <!--Icon Block Description-->\r\n        <div class=\"icon-block-description\">\r\n          <h4>Parallax Effect</h4>\r\n          <p>\r\n            Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit\r\n            debet ea sit, an pro nemore vivendum\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <!--End of Icon Block-->\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--End of Introduction-->\r\n");

/***/ }),

/***/ "DN7M":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "DeXN":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _raw_loader_social_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./social.component.html */ "j0V1");
/* harmony import */ var _social_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social.component.css */ "cLbj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent.ctorParameters = function () { return []; };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-social',
            template: _raw_loader_social_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_social_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "HhuZ":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Footer-->\r\n<footer id=\"landing-footer\" class=\"clearfix\">\r\n  <div class=\"row clearfix\">\r\n    <p id=\"copyright\" class=\"col-2\">\r\n      Made with love by <a href=\"https://www.shapingrain.com\">ShapingRain</a>\r\n    </p>\r\n\r\n    <!--Social Icons in Footer-->\r\n    <div class=\"col-2 social-icons\" id=\"footer-social app-social\">\r\n      <app-social></app-social>\r\n    </div>\r\n    <!--End of Social Icons in Footer-->\r\n  </div>\r\n</footer>\r\n<!--End of Footer-->\r\n");

/***/ }),

/***/ "HkMC":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Ij5Q":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _raw_loader_gallery_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./gallery.component.html */ "BLGF");
/* harmony import */ var _gallery_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.component.css */ "BlCi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () { };
    GalleryComponent.ctorParameters = function () { return []; };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-gallery",
            template: _raw_loader_gallery_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_gallery_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "K/lK":
/*!*********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0aW1vbmlhbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "L30g":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testimonials/testimonials.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Testimonials-->\r\n<aside id=\"testimonials\" class=\"scrollto text-center\" data-enllax-ratio=\".2\">\r\n\r\n  <div class=\"row clearfix\">\r\n\r\n    <div class=\"section-heading\">\r\n      <h3>FEEDBACK</h3>\r\n      <h2 class=\"section-title\">What our customers are saying</h2>\r\n    </div>\r\n\r\n    <!--User Testimonial-->\r\n    <blockquote class=\"col-3 testimonial classic\">\r\n      <img src=\"../assets/images/user-images/user-1.jpg\" alt=\"User\" />\r\n      <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n        labore\r\n        et dolore magna aliqua</q>\r\n      <footer>John Doe - Happy Customer</footer>\r\n    </blockquote>\r\n    <!-- End of Testimonial-->\r\n\r\n    <!--User Testimonial-->\r\n    <blockquote class=\"col-3 testimonial classic\">\r\n      <img src=\"../assets/images/user-images/user-2.jpg\" alt=\"User\" />\r\n      <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n        labore\r\n        et dolore magna aliqua</q>\r\n      <footer>Roslyn Doe - Happy Customer</footer>\r\n    </blockquote>\r\n    <!-- End of Testimonial-->\r\n\r\n    <!--User Testimonial-->\r\n    <blockquote class=\"col-3 testimonial classic\">\r\n      <img src=\"../assets/images/user-images/user-3.jpg\" alt=\"User\" />\r\n      <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n        labore\r\n        et dolore magna aliqua</q>\r\n      <footer>Thomas Doe - Happy Customer</footer>\r\n    </blockquote>\r\n    <!-- End of Testimonial-->\r\n  </div>\r\n\r\n</aside>\r\n<!--End of Testimonials-->");

/***/ }),

/***/ "NiUD":
/*!***********************************************!*\
  !*** ./src/app/pricing/pricing.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "SlET":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Beginning of header-->\r\n<div id=\"header\" class=\"nav-collapse nav-solid\">\r\n  <div class=\"row clearfix\">\r\n    <div class=\"col-1\">\r\n      <!--Logo-->\r\n      <div id=\"logo\">\r\n        <!--Logo that is shown on the banner-->\r\n        <img src=\"assets/images/logo.png\" id=\"banner-logo\" alt=\"Landing Page\" />\r\n        <!--End of Banner Logo-->\r\n\r\n        <!--The Logo that is shown on the sticky Navigation Bar-->\r\n        <img\r\n          src=\"assets/images/MoodLifter.gif\"\r\n          id=\"navigation-logo\"\r\n          alt=\"Landing Page\"\r\n        />\r\n        <!--End of Navigation Logo-->\r\n      </div>\r\n      <!--End of Logo-->\r\n      <aside>\r\n        <app-social></app-social>\r\n      </aside>\r\n\r\n      <!--Main Navigation-->\r\n      <nav id=\"nav-main\">\r\n        <ul>\r\n          <li>\r\n            <a\r\n              routerLink=\"/Home\"\r\n              (click)=\"getActiveTab('home')\"\r\n              [class.active]=\"activetab === 'home'\"\r\n              >Home</a\r\n            >\r\n          </li>\r\n          <li>\r\n            <a\r\n              routerLink=\"/About\"\r\n              (click)=\"getActiveTab('about')\"\r\n              [class.active]=\"activetab === 'about'\"\r\n              >Sentiment Analysis</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </nav>\r\n      <!--End of Main Navigation-->\r\n      <div id=\"nav-trigger\"><span></span></div>\r\n      <nav id=\"nav-mobile\"></nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--End of Header-->\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'websitePractise';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "U2kE":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pricing/pricing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Pricing Tables-->\r\n<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix\">\r\n  <div class=\"row clearfix\">\r\n    <div class=\"section-heading\">\r\n      <h3>YOUR CHOICE</h3>\r\n      <h2 class=\"section-title\">We have the right package for you</h2>\r\n    </div>\r\n\r\n    <!--Pricing Block-->\r\n    <div class=\"pricing-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\r\n      <div class=\"pricing-block-content\">\r\n        <h3>Personal</h3>\r\n        <p class=\"pricing-sub\">The standard version</p>\r\n        <div class=\"pricing\">\r\n          <div class=\"price\"><span>$</span>19</div>\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\r\n        </div>\r\n        <ul>\r\n          <li>5 Downloads</li>\r\n          <li>2 Extensions</li>\r\n          <li>Tutorials</li>\r\n          <li>Forum Support</li>\r\n          <li>1 year free updates</li>\r\n        </ul>\r\n        <a href=\"#\" class=\"button\">BUY TODAY</a>\r\n      </div>\r\n    </div>\r\n    <!--End Pricing Block-->\r\n\r\n    <!--Pricing Block-->\r\n    <div\r\n      class=\"pricing-block featured col-3 wow fadeInUp\"\r\n      data-wow-delay=\"0.6s\"\r\n    >\r\n      <div class=\"pricing-block-content\">\r\n        <h3>Student</h3>\r\n        <p class=\"pricing-sub\">Most popular choice</p>\r\n        <div class=\"pricing\">\r\n          <div class=\"price\"><span>$</span>29</div>\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\r\n        </div>\r\n        <ul>\r\n          <li>15 Downloads</li>\r\n          <li>5 Extensions</li>\r\n          <li>Tutorials with Files</li>\r\n          <li>Forum Support</li>\r\n          <li>2 years free updates</li>\r\n        </ul>\r\n        <a href=\"#\" class=\"button\">BUY TODAY</a>\r\n      </div>\r\n    </div>\r\n    <!--End Pricing Block-->\r\n\r\n    <!--Pricing Block-->\r\n    <div class=\"pricing-block col-3 wow fadeInUp\" data-wow-delay=\"0.8s\">\r\n      <div class=\"pricing-block-content\">\r\n        <h3>Business</h3>\r\n        <p class=\"pricing-sub\">For the whole team</p>\r\n        <div class=\"pricing\">\r\n          <div class=\"price\"><span>$</span>49</div>\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>\r\n        </div>\r\n        <ul>\r\n          <li>Unlimited Downloads</li>\r\n          <li>Unlimited Extensions</li>\r\n          <li>HD Video Tutorials</li>\r\n          <li>Chat Support</li>\r\n          <li>Lifetime free updates</li>\r\n        </ul>\r\n        <a href=\"#\" class=\"button\">BUY TODAY</a>\r\n      </div>\r\n    </div>\r\n    <!--End Pricing Block-->\r\n  </div>\r\n</section>\r\n<!--End of Pricing Tables-->\r\n");

/***/ }),

/***/ "VcWf":
/*!**********************************!*\
  !*** ./src/app/configuration.ts ***!
  \**********************************/
/*! exports provided: configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configuration", function() { return configuration; });
var configuration = {
    header: {
        heading: 'Lift My Mood',
        headingtext: 'This tool will anaylyse your mood according to text provided',
        buttontext: 'Mood Lifter',
        buttonlink: '\Services'
    }
};


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-border\" data-wow-duration=\"0.7s\" data-wow-delay=\"0.2s\">\r\n  \r\n  <div\r\n    class=\"top-border wow fadeInDown animated\"\r\n    style=\"visibility: visible; animation-name: fadeInDown\"\r\n  ></div>\r\n  <div\r\n    class=\"right-border wow fadeInRight animated\"\r\n    style=\"visibility: visible; animation-name: fadeInRight\"\r\n  ></div>\r\n  <div\r\n    class=\"bottom-border wow fadeInUp animated\"\r\n    style=\"visibility: visible; animation-name: fadeInUp\"\r\n  ></div>\r\n  <div\r\n    class=\"left-border wow fadeInLeft animated\"\r\n    style=\"visibility: visible; animation-name: fadeInLeft\"\r\n  ></div>\r\n</div>\r\n<!--Main Content Area-->\r\n<main id=\"content\">\r\n  <app-navigation></app-navigation>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n<!--End Main Content Area-->\r\n");

/***/ }),

/***/ "XpQY":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/clients.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Clients-->\r\n<section id=\"clients\" class=\"scrollto clearfix\">\r\n  <div class=\"row clearfix\">\r\n\r\n    <div class=\"col-3\">\r\n\r\n      <div class=\"section-heading\">\r\n        <h3>TRUST</h3>\r\n        <h2 class=\"section-title\">Companies who use our services</h2>\r\n        <p class=\"section-subtitle\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n          eiusmod\r\n          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-2-3\">\r\n\r\n      <a href=\"#\" class=\"col-3\">\r\n        <img src=\"../assets/images/company-images/company-logo1.png\" alt=\"Company\" />\r\n        <div class=\"client-overlay\"><span>Tree</span></div>\r\n      </a>\r\n      <a href=\"#\" class=\"col-3\">\r\n        <img src=\"../assets/images/company-images/company-logo2.png\" alt=\"Company\" />\r\n        <div class=\"client-overlay\"><span>Fingerprint</span></div>\r\n      </a>\r\n      <a href=\"#\" class=\"col-3\">\r\n        <img src=\"../assets/images/company-images/company-logo3.png\" alt=\"Company\" />\r\n        <div class=\"client-overlay\"><span>The Man</span></div>\r\n      </a>\r\n      <a href=\"#\" class=\"col-3\">\r\n        <img src=\"../assets/images/company-images/company-logo4.png\" alt=\"Company\" />\r\n        <div class=\"client-overlay\"><span>Mustache</span></div>\r\n      </a>\r\n      <a href=\"#\" class=\"col-3\">\r\n        <img src=\"../assets/images/company-images/company-logo5.png\" alt=\"Company\" />\r\n        <div class=\"client-overlay\"><span>Goat</span></div>\r\n      </a>\r\n      <a href=\"#\" class=\"col-3\">\r\n        <img src=\"../assets/images/company-images/company-logo6.png\" alt=\"Company\" />\r\n        <div class=\"client-overlay\"><span>Justice</span></div>\r\n      </a>\r\n      <a href=\"#\" class=\"col-3\">\r\n        <img src=\"../assets/images/company-images/company-logo7.png\" alt=\"Company\" />\r\n        <div class=\"client-overlay\"><span>Ball</span></div>\r\n      </a>\r\n      <a href=\"#\" class=\"col-3\">\r\n        <img src=\"../assets/images/company-images/company-logo8.png\" alt=\"Company\" />\r\n        <div class=\"client-overlay\"><span>Cold</span></div>\r\n      </a>\r\n\r\n      <a href=\"#\" class=\"col-3\">\r\n        <img src=\"../assets/images/company-images/company-logo9.png\" alt=\"Company\" />\r\n        <div class=\"client-overlay\"><span>Cold</span></div>\r\n      </a>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n<!--End of Clients-->");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "drGS");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "0btM");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "czZ8");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clients/clients.component */ "aCJP");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pricing/pricing.component */ "9lXE");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./social/social.component */ "DeXN");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config.service */ "wxHw");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-echarts */ "DKVz");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _questions_modal_questions_modal_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./questions-modal/questions-modal.component */ "xe/e");
/* harmony import */ var _questions_modal_questions__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./questions-modal/questions */ "iiD/");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
                _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_6__["TestimonialsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__["PricingComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _social_social_component__WEBPACK_IMPORTED_MODULE_11__["SocialComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_12__["NavigationComponent"],
                _questions_modal_questions_modal_component__WEBPACK_IMPORTED_MODULE_53__["QuestionsModalComponent"],
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_49__["BrowserAnimationsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_50__["FormsModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_18__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_52__["HttpClientModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_51__["NgxEchartsModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_31__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_35__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_38__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_34__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_39__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_40__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_41__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_43__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_44__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_45__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_46__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_47__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_48__["MatTreeModule"],],
            providers: [_config_service__WEBPACK_IMPORTED_MODULE_14__["ConfigService"], _questions_modal_questions__WEBPACK_IMPORTED_MODULE_54__["Questions"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "aCJP":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _raw_loader_clients_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./clients.component.html */ "XpQY");
/* harmony import */ var _clients_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients.component.css */ "A4SG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientsComponent = /** @class */ (function () {
    function ClientsComponent() {
    }
    ClientsComponent.prototype.ngOnInit = function () {
    };
    ClientsComponent.ctorParameters = function () { return []; };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-clients',
            template: _raw_loader_clients_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_clients_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "cLbj":
/*!*********************************************!*\
  !*** ./src/app/social/social.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "czZ8":
/*!********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.ts ***!
  \********************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _raw_loader_testimonials_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./testimonials.component.html */ "L30g");
/* harmony import */ var _testimonials_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testimonials.component.css */ "K/lK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent.ctorParameters = function () { return []; };
    TestimonialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-testimonials',
            template: _raw_loader_testimonials_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_testimonials_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "dE0m":
/*!***************************************************************!*\
  !*** ./src/app/questions-modal/questions-modal.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWVzdGlvbnMtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "drGS":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _raw_loader_intro_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./intro.component.html */ "Cko8");
/* harmony import */ var _intro_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.component.css */ "qERE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () { };
    IntroComponent.ctorParameters = function () { return []; };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-intro",
            template: _raw_loader_intro_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_intro_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.css */ "DN7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ "wxHw");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(config) {
        this.config = config;
        this.header = {};
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.header = this.getHeader();
    };
    HeaderComponent.prototype.getHeader = function () {
        return this.config.getConfig().header;
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "HhuZ");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ "1XXE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-footer",
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "iiD/":
/*!**********************************************!*\
  !*** ./src/app/questions-modal/questions.ts ***!
  \**********************************************/
/*! exports provided: Questions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Questions", function() { return Questions; });
var Questions = /** @class */ (function () {
    function Questions() {
        this.questions = {
            1: "What has been your greatest accomplishment?",
            2: "What has been your greatest failure?",
            3: "What is your biggest fear?",
            4: "What is your favorite hobby?",
            5: "What would you change about yourself if you could?",
            6: "What really makes you angry?",
        };
        this.cur = 0;
    }
    Questions.prototype.next = function (cur) {
        this.check = this.questions[this.cur + 1];
        if (this.check) {
            this.cur = this.cur + 1;
            var value = this.questions[this.cur];
            return value;
        }
        else {
            return 'Submit for the result';
        }
    };
    Questions.prototype.previous = function (cur) {
        this.check = this.questions[this.cur - 1];
        if (this.check) {
            this.cur = this.cur - 1;
            var value = this.questions[this.cur];
            return value;
        }
        else {
            alert("No Previous Question");
            return 'Click Next To Start';
        }
    };
    Questions.prototype.getAll = function () {
        for (var _i = 0, _a = Object.keys(this.questions); _i < _a.length; _i++) {
            var key = _a[_i];
            var value = this.questions[key];
            return value;
        }
    };
    return Questions;
}());



/***/ }),

/***/ "j0V1":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social/social.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aside>\r\n  <!--Social Icons in Header-->\r\n  <ul class=\"social-icons\">\r\n    <li>\r\n      <a target=\"_blank\" title=\"Facebook\" href=\"https://www.facebook.com/username\">\r\n        <i class=\"fa fa-facebook fa-1x\"></i><span>Facebook</span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a target=\"_blank\" title=\"Google+\" href=\"http://google.com/+username\">\r\n        <i class=\"fa fa-google-plus fa-1x\"></i><span>Google+</span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a target=\"_blank\" title=\"Twitter\" href=\"http://www.twitter.com/username\">\r\n        <i class=\"fa fa-twitter fa-1x\"></i><span>Twitter</span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a target=\"_blank\" title=\"Instagram\" href=\"http://www.instagram.com/username\">\r\n        <i class=\"fa fa-instagram fa-1x\"></i><span>Instagram</span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a target=\"_blank\" title=\"behance\" href=\"http://www.behance.net\">\r\n        <i class=\"fa fa-behance fa-1x\"></i><span>Behance</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <!--End of Social Icons in Header-->\r\n</aside>");

/***/ }),

/***/ "k5x5":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navigation.component.html */ "SlET");
/* harmony import */ var _navigation_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.component.css */ "HkMC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.activetab = "home";
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent.prototype.getActiveTab = function (tabname) {
        this.activetab = tabname;
    };
    NavigationComponent.ctorParameters = function () { return []; };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-navigation",
            template: _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navigation_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"banner\" class=\"scrollto clearfix\" data-enllax-ratio=\".5\">\r\n  <!--Banner Content-->\r\n  <div id=\"banner-content\" class=\"row clearfix\">\r\n\r\n    <div class=\"col-38\">\r\n\r\n      <div class=\"section-heading\">\r\n        <h1>{{ header.heading }}</h1>\r\n        <h2>{{ header.headingtext }}</h2>\r\n      </div>\r\n\r\n      <!--Call to Action-->\r\n      <a href=\"{{ header.buttonlink }}\" class=\"button\">{{ header.buttontext }}</a>\r\n      <!--End Call to Action-->\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <!--End of Row-->\r\n</header>\r\n");

/***/ }),

/***/ "oy8I":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questions-modal/questions-modal.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Questions</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>{{que}}</h3>\n    <mat-form-field *ngIf=\"!end\" style=\"width: 100%\" appearance=\"outline\">\n        <mat-label>Answer</mat-label>\n        <input matInput  #message name='message' [(ngModel)]=\"value\" minlength=\"10\" maxlength=\"256\" placeholder=\"Ex. I'm feeling down...\">\n      </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n<button *ngIf=\"!end\" style=\"width: 20%;\"mat-button (click)=\"next()\" class=\"button\">Next</button>\n<!-- <button *ngIf=\"!end\" style=\"width: 15%;\"mat-button (click)=\"prev()\" class=\"button\">Back</button> -->\n<button *ngIf=\"end\" mat-dialog-close style=\"width: 30%;\"mat-button (click)=\"done()\" class=\"button\">Submit</button>\n<button mat-button class=\"button\"(click)=\"closeDialog()\">Cancel</button>\n  \n</mat-dialog-actions>\n\n\n<!-- Copyright 2021 Google LLC. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at https://angular.io/license -->");

/***/ }),

/***/ "qERE":
/*!*******************************************!*\
  !*** ./src/app/intro/intro.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRyby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "drGS");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "0btM");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "czZ8");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clients/clients.component */ "aCJP");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing/pricing.component */ "9lXE");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"] },
    { path: 'About', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"] },
    { path: 'Services', component: _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"] },
    { path: 'Testimonials', component: _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_6__["TestimonialsComponent"] },
    { path: 'Gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"] },
    { path: 'Clients', component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_7__["ClientsComponent"] },
    { path: 'Pricing', component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "wxHw":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration */ "VcWf");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.config = _configuration__WEBPACK_IMPORTED_MODULE_1__["configuration"];
    }
    ConfigService.prototype.getConfig = function () {
        return this.config;
    };
    ConfigService.ctorParameters = function () { return []; };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "xe/e":
/*!**************************************************************!*\
  !*** ./src/app/questions-modal/questions-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: QuestionsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsModalComponent", function() { return QuestionsModalComponent; });
/* harmony import */ var _raw_loader_questions_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./questions-modal.component.html */ "oy8I");
/* harmony import */ var _questions_modal_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions-modal.component.css */ "dE0m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _questions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions */ "iiD/");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionsModalComponent = /** @class */ (function () {
    function QuestionsModalComponent(_questions, dialogRef, data) {
        this._questions = _questions;
        this.dialogRef = dialogRef;
        this.data = data;
        this.answers = [];
        this.cur = null;
        this.end = false;
        this.local_data = __assign({}, data);
        this.action = this.local_data.action;
    }
    QuestionsModalComponent.prototype.ngOnInit = function () {
        this.value = null;
        this.que = null;
        this.answers = [];
        this.cur = 0;
        this.local_data = null;
        this.getVal();
    };
    QuestionsModalComponent.prototype.doAction = function () {
        this.dialogRef.close({ event: this.action, data: this.local_data });
    };
    QuestionsModalComponent.prototype.closeDialog = function () {
        this.dialogRef.close({ event: 'Cancel' });
    };
    QuestionsModalComponent.prototype.getVal = function () {
        this.que = this._questions.next();
    };
    QuestionsModalComponent.prototype.next = function () {
        if (!this.value) {
            alert("Please Answer");
        }
        if (this.value) {
            this.que = this._questions.next(this.cur);
            this.answers.push(this.value);
            this.value = null;
        }
        if (this.que == 'Submit for the result') {
            this.end = true;
        }
    };
    QuestionsModalComponent.prototype.prev = function () {
        this.que = this._questions.previous(this.cur);
        this.end = false;
    };
    QuestionsModalComponent.prototype.done = function () {
        if (this.answers) {
            this.local_data = this.answers.join();
            this.doAction();
        }
        else {
            alert("Please fill the questions again");
            this.closeDialog();
        }
    };
    QuestionsModalComponent.ctorParameters = function () { return [
        { type: _questions__WEBPACK_IMPORTED_MODULE_3__["Questions"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
    ]; };
    QuestionsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-questions-modal',
            template: _raw_loader_questions_modal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_questions_modal_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_questions__WEBPACK_IMPORTED_MODULE_3__["Questions"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], QuestionsModalComponent);
    return QuestionsModalComponent;
}());



/***/ }),

/***/ "zPz5":
/*!*************************************!*\
  !*** ./src/app/mood-api.service.ts ***!
  \*************************************/
/*! exports provided: MoodApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodApiService", function() { return MoodApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoodApiService = /** @class */ (function () {
    function MoodApiService(http) {
        this.http = http;
        this.Url = "https://api.promptapi.com/text_to_emotion";
        this.allAnswers = null;
    }
    MoodApiService.prototype.addCampaign = function (value) {
        var headerDict = {
            'apikey': 'e2ZnOVS1SR9UI9qcPRvudgC8GhjeFYeN',
        };
        var requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerDict),
        };
        return this.http.post(this.Url, value, requestOptions);
    };
    MoodApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    MoodApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MoodApiService);
    return MoodApiService;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map