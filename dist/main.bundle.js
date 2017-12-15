webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/guards/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start_start_component__ = __webpack_require__("../../../../../src/app/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups_groups_component__ = __webpack_require__("../../../../../src/app/groups/groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_4__users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'groups', component: __WEBPACK_IMPORTED_MODULE_3__groups_groups_component__["a" /* GroupsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'start', component: __WEBPACK_IMPORTED_MODULE_2__start_start_component__["a" /* StartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard_service__["a" /* AuthGuard */]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar is-primary\" role=\"navigation\" aria-label=\"main navigation\">\r\n  <div class=\"navbar-menu\">\r\n    <div class=\"navbar-start\">\r\n      <a class=\"navbar-item\" routerLink=\"/\" routerLinkActive=\"is-active\" [routerLinkActiveOptions]=\"{exact: true}\">Landing</a>\r\n      <a class=\"navbar-item\" *ngIf=\"authService.isAuthenticated()\" routerLink=\"/start\" routerLinkActive=\"is-active\">Start</a>\r\n      <a *ngIf=\"authService.isAuthenticated()\" class=\"navbar-item\" routerLink=\"/users\" routerLinkActive=\"is-active\">Users</a>\r\n      <a *ngIf=\"authService.isAuthenticated()\" class=\"navbar-item\" routerLink=\"/groups\" routerLinkActive=\"is-active\">Groups</a>\r\n    </div>\r\n    <div class=\"navbar-end\" [ngSwitch]=\"authService.isAuthenticated()\">\r\n      <div class=\"navbar-item\" *ngSwitchCase=\"true\">Hi {{ globalDataService.userName }}</div>\r\n      <a class=\"navbar-item\" routerLink=\"/login\" *ngSwitchCase=\"false\">Log in</a>\r\n      <a class=\"navbar-item\" (click)=\"authService.logout()\" *ngSwitchCase=\"true\">Log out</a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globalData_global_data_service__ = __webpack_require__("../../../../../src/app/globalData/global-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, globalDataService) {
        this.authService = authService;
        this.globalDataService = globalDataService;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__globalData_global_data_service__["a" /* GlobalDataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('app.config');
var appConfig = {
    apiEndpoint: 'https://mateji.betelgeuse.uberspace.de/node/rest-api'
};


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interceptors_apiUrl_interceptor__ = __webpack_require__("../../../../../src/app/interceptors/apiUrl.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_token_interceptor__ = __webpack_require__("../../../../../src/app/interceptors/token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_users_service__ = __webpack_require__("../../../../../src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__groups_groups_component__ = __webpack_require__("../../../../../src/app/groups/groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__interceptors_logging_interceptor__ = __webpack_require__("../../../../../src/app/interceptors/logging.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__start_start_component__ = __webpack_require__("../../../../../src/app/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/guards/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__groups_groups_service__ = __webpack_require__("../../../../../src/app/groups/groups.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__globalData_global_data_service__ = __webpack_require__("../../../../../src/app/globalData/global-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_12__groups_groups_component__["a" /* GroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__start_start_component__["a" /* StartComponent */],
                __WEBPACK_IMPORTED_MODULE_17__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__signup_signup_component__["a" /* SignupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__users_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_18__groups_groups_service__["a" /* GroupsService */],
                __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_20__globalData_global_data_service__["a" /* GlobalDataService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_3__interceptors_token_interceptor__["a" /* TokenInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* APP_CONFIG */],
                    useValue: __WEBPACK_IMPORTED_MODULE_8__app_config__["b" /* appConfig */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_0__interceptors_apiUrl_interceptor__["a" /* ApiUrlInterceptor */],
                    multi: true,
                    deps: [__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* APP_CONFIG */]]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_14__interceptors_logging_interceptor__["a" /* LoggingInterceptor */],
                    multi: true
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globalData_global_data_service__ = __webpack_require__("../../../../../src/app/globalData/global-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AuthService = /** @class */ (function () {
    function AuthService(http, config, globalDataService) {
        this.http = http;
        this.config = config;
        this.globalDataService = globalDataService;
        this.authUrl = this.config.apiEndpoint + '/authenticate';
    }
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = this.getToken();
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])(null, token);
    };
    AuthService.prototype.isGroup = function (group) {
        return this.globalDataService.userGroup === group;
    };
    AuthService.prototype.login = function (name, password) {
        var _this = this;
        return this.http.post(this.authUrl, { name: name, password: password })
            .map(function (data) {
            if (data['success']) {
                console.log(data);
                var token = data['token'];
                if (token) {
                    localStorage.setItem('token', token);
                    _this.globalDataService.userGroup = data['group'];
                    _this.globalDataService.userName = data['name'];
                    return true;
                }
            }
            return false;
        });
    };
    AuthService.prototype.logout = function () {
        this.globalDataService.clearDataService();
        localStorage.removeItem('token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], Object, __WEBPACK_IMPORTED_MODULE_5__globalData_global_data_service__["a" /* GlobalDataService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/globalData/global-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalDataService = /** @class */ (function () {
    function GlobalDataService() {
    }
    GlobalDataService.prototype.clearDataService = function () {
        this.userName = '';
        this.userGroup = '';
    };
    GlobalDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GlobalDataService);
    return GlobalDataService;
}());



/***/ }),

/***/ "../../../../../src/app/groups/groups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/groups/groups.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-small is-info is-bold\">\r\n  <div class=\"hero-body\">\r\n    <div class=\"container\">\r\n      <h1 class=\"title\">\r\n        Groups Page\r\n      </h1>\r\n      <h2 class=\"subtitle\">\r\n        Visible to logged in users\r\n      </h2>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"section\">\r\n  <div class=\"container\">\r\n    <div class=\"tile is-ancestor\">\r\n      <div class=\"tile is-parent is-3\" *ngFor=\"let group of groups\">\r\n        <div class=\"tile is-child box\">\r\n          <p class=\"title\">{{group.name}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/groups/groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__groups_service__ = __webpack_require__("../../../../../src/app/groups/groups.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(groupsService) {
        this.groupsService = groupsService;
    }
    GroupsComponent.prototype.ngOnInit = function () {
        this.getGroups();
    };
    GroupsComponent.prototype.getGroups = function () {
        var _this = this;
        this.groupsService.getGroups()
            .subscribe(function (groups) { return _this.groups = groups; });
    };
    GroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__("../../../../../src/app/groups/groups.component.html"),
            styles: [__webpack_require__("../../../../../src/app/groups/groups.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__groups_service__["a" /* GroupsService */]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/groups/groups.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var GroupsService = /** @class */ (function () {
    function GroupsService(http, config) {
        this.http = http;
        this.config = config;
        this.groupsURL = this.config.apiEndpoint + '/groups';
    }
    GroupsService.prototype.getGroups = function () {
        return this.http.get(this.groupsURL)
            .map(function (data) {
            console.log('Service:', data);
            return data;
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getGroups', [])));
    };
    GroupsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    GroupsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], Object])
    ], GroupsService);
    return GroupsService;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('AuthGuard:', this.auth.isAuthenticated());
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/interceptors/apiUrl.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrlInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ApiUrlInterceptor = /** @class */ (function () {
    function ApiUrlInterceptor(config) {
        this.config = config;
    }
    ApiUrlInterceptor.prototype.intercept = function (req, next) {
        req = req.clone({ url: this.prepareUrl(req.url) });
        return next.handle(req);
    };
    ApiUrlInterceptor.prototype.isAbsoluteUrl = function (url) {
        var absolutePattern = /^https?:\/\//i;
        return absolutePattern.test(url);
    };
    ApiUrlInterceptor.prototype.prepareUrl = function (url) {
        url = this.isAbsoluteUrl(url) ? url : this.config.apiEndpoint + '/' + url;
        return url.replace(/([^:]\/)\/+/g, '$1');
    };
    ApiUrlInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [Object])
    ], ApiUrlInterceptor);
    return ApiUrlInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/interceptors/logging.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggingInterceptor = /** @class */ (function () {
    function LoggingInterceptor() {
    }
    LoggingInterceptor.prototype.intercept = function (request, next) {
        request = request.clone();
        console.log('Request:', request);
        return next.handle(request);
    };
    LoggingInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoggingInterceptor);
    return LoggingInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/interceptors/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(injector) {
        this.injector = injector;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var auth = this.injector.get(__WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */]);
        if (auth.getToken()) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + auth.getToken()
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-small is-info is-bold\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">\n        Landing Page\n      </h1>\n      <h2 class=\"subtitle\">\n        Visible to everyone\n      </h2>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading-wrapper {\r\n  background: rgba(255,132,32,0.8);\r\n  position: fixed;\r\n  top: 52px;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n\r\n.sk-cube-grid {\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: 100px auto;\r\n}\r\n\r\n.sk-cube-grid .sk-cube {\r\n  width: 33%;\r\n  height: 33%;\r\n  background-color: #333;\r\n  float: left;\r\n  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\r\n          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; \r\n}\r\n.sk-cube-grid .sk-cube1 {\r\n  -webkit-animation-delay: 0.2s;\r\n          animation-delay: 0.2s; }\r\n.sk-cube-grid .sk-cube2 {\r\n  -webkit-animation-delay: 0.3s;\r\n          animation-delay: 0.3s; }\r\n.sk-cube-grid .sk-cube3 {\r\n  -webkit-animation-delay: 0.4s;\r\n          animation-delay: 0.4s; }\r\n.sk-cube-grid .sk-cube4 {\r\n  -webkit-animation-delay: 0.1s;\r\n          animation-delay: 0.1s; }\r\n.sk-cube-grid .sk-cube5 {\r\n  -webkit-animation-delay: 0.2s;\r\n          animation-delay: 0.2s; }\r\n.sk-cube-grid .sk-cube6 {\r\n  -webkit-animation-delay: 0.3s;\r\n          animation-delay: 0.3s; }\r\n.sk-cube-grid .sk-cube7 {\r\n  -webkit-animation-delay: 0s;\r\n          animation-delay: 0s; }\r\n.sk-cube-grid .sk-cube8 {\r\n  -webkit-animation-delay: 0.1s;\r\n          animation-delay: 0.1s; }\r\n.sk-cube-grid .sk-cube9 {\r\n  -webkit-animation-delay: 0.2s;\r\n          animation-delay: 0.2s; }\r\n\r\n@-webkit-keyframes sk-cubeGridScaleDelay {\r\n  0%, 70%, 100% {\r\n    -webkit-transform: scale3D(1, 1, 1);\r\n            transform: scale3D(1, 1, 1);\r\n  } 35% {\r\n    -webkit-transform: scale3D(0, 0, 1);\r\n            transform: scale3D(0, 0, 1); \r\n  }\r\n}\r\n\r\n@keyframes sk-cubeGridScaleDelay {\r\n  0%, 70%, 100% {\r\n    -webkit-transform: scale3D(1, 1, 1);\r\n            transform: scale3D(1, 1, 1);\r\n  } 35% {\r\n    -webkit-transform: scale3D(0, 0, 1);\r\n            transform: scale3D(0, 0, 1);\r\n  } \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\r\n  <div class=\"container\">\r\n    <div class=\"columns\">\r\n      <div class=\"column is-three-fifths is-offset-one-fifth box\">\r\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"field\">\r\n            <label for=\"name\">Name</label>\r\n            <div class=\"control\">\r\n              <input type=\"text\" class=\"input\" placeholder=\"Name\" id=\"name\" required [(ngModel)]=\"model.name\" name=\"name\" [class.is-danger]=\"error\">\r\n            </div>\r\n          </div>\r\n          <div class=\"field\">\r\n            <label for=\"password\">Password</label>\r\n            <div class=\"control\">\r\n              <input type=\"password\" class=\"input\" placeholder=\"Password\" id=\"password\" required [(ngModel)]=\"model.password\" name=\"password\"\r\n                [class.is-danger]=\"error\">\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"error\" class=\"notification is-danger\">{{error}}</div>\r\n\r\n          <div class=\"field is-grouped\">\r\n            <div class=\"control\">\r\n              <button [disabled]=\"loading\" type=\"submit\" class=\"button is-link\">Submit</button>\r\n            </div>\r\n            <div class=\"control\">\r\n              <button class=\"button is-text\" type=\"reset\">Cancel</button>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"loading\" class=\"loading-wrapper\">\r\n            <div class=\"sk-cube-grid\">\r\n              <div class=\"sk-cube sk-cube1\"></div>\r\n              <div class=\"sk-cube sk-cube2\"></div>\r\n              <div class=\"sk-cube sk-cube3\"></div>\r\n              <div class=\"sk-cube sk-cube4\"></div>\r\n              <div class=\"sk-cube sk-cube5\"></div>\r\n              <div class=\"sk-cube sk-cube6\"></div>\r\n              <div class=\"sk-cube sk-cube7\"></div>\r\n              <div class=\"sk-cube sk-cube8\"></div>\r\n              <div class=\"sk-cube sk-cube9\"></div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globalData_global_data_service__ = __webpack_require__("../../../../../src/app/globalData/global-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginUser__ = __webpack_require__("../../../../../src/app/login/loginUser.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, globalDataService) {
        this.auth = auth;
        this.router = router;
        this.globalDataService = globalDataService;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__loginUser__["a" /* LoginUser */]();
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        this.auth.login(this.model.name, this.model.password)
            .subscribe(function (result) {
            console.log(result);
            if (result === true) {
                _this.router.navigate(['/start']);
            }
            else {
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0__globalData_global_data_service__["a" /* GlobalDataService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/loginUser.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUser; });
var LoginUser = /** @class */ (function () {
    function LoginUser() {
    }
    return LoginUser;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-small is-info is-bold\">\n    <div class=\"hero-body\">\n      <div class=\"container\">\n        <h1 class=\"title\">\n          Signup Page\n        </h1>\n        <h2 class=\"subtitle\">\n          Visible to everyone\n        </h2>\n      </div>\n    </div>\n  </section>\n<section class=\"section\">\n  <div class=\"container\">\n    <p>\n      TODO: remove this: {{model.name}}//{{model.password}}\n    </p>\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"field\">\n        <label for=\"name\">Name</label>\n        <div class=\"control\">\n          <input type=\"text\" class=\"input\" placeholder=\"Name\" id=\"name\" required [(ngModel)]=\"model.name\" name=\"name\">\n        </div>\n      </div>\n      <div class=\"field\">\n          <label for=\"email\">E-Mail</label>\n          <div class=\"control\">\n            <input type=\"text\" class=\"input\" placeholder=\"E-Mail\" id=\"email\" required [(ngModel)]=\"model.email\" name=\"email\">\n          </div>\n        </div>\n      <div class=\"field\">\n        <label for=\"password\">Password</label>\n        <div class=\"control\">\n          <input type=\"text\" class=\"input\" placeholder=\"Password\" id=\"password\" required [(ngModel)]=\"model.password\" name=\"password\">\n        </div>\n      </div>\n\n      <div *ngIf=\"error\" class=\"notification is-danger\">{{error}}</div>\n\n      <div class=\"field is-grouped\">\n        <div class=\"control\">\n          <button [disabled]=\"loading\" class=\"button is-link\">Submit</button>\n        </div>\n        <div class=\"control\">\n          <button class=\"button is-text\">Cancel</button>\n        </div>\n      </div>\n      <div *ngIf=\"loading\" class=\"loading-spinner\"></div>\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/start/start.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/start/start.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-small is-info is-bold\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">\n        Start Page\n      </h1>\n      <h2 class=\"subtitle\">\n        Visible to logged in users\n      </h2>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/start/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartComponent = /** @class */ (function () {
    function StartComponent() {
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-start',
            template: __webpack_require__("../../../../../src/app/start/start.component.html"),
            styles: [__webpack_require__("../../../../../src/app/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-small is-info is-bold\">\r\n  <div class=\"hero-body\">\r\n    <div class=\"container\">\r\n      <h1 class=\"title\">\r\n        Users Page\r\n      </h1>\r\n      <h2 class=\"subtitle\">\r\n        Visible to logged in users\r\n      </h2>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"section\">\r\n  <div class=\"container\">\r\n    <div class=\"tile is-ancestor\">\r\n      <div class=\"tile is-parent is-3\" *ngFor=\"let user of users\">\r\n        <div class=\"tile is-child box\">\r\n          <p class=\"title\">{{user.name}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_service__ = __webpack_require__("../../../../../src/app/users/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService) {
        this.usersService = usersService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.usersService.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__users_service__["a" /* UsersService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UsersService = /** @class */ (function () {
    function UsersService(http, config) {
        this.http = http;
        this.config = config;
        this.userUrl = this.config.apiEndpoint + '/users';
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.userUrl)
            .map(function (data) {
            console.log("Service:", data);
            return data;
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getUsers', [])));
    };
    UsersService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__app_config__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], Object])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map