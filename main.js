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

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiService = /** @class */ (function () {
    function ApiService() {
    }
    ApiService.prototype.getAllPessoas = function () {
        try {
            return JSON.parse(localStorage.getItem('pessoas')).map(function (pessoa) { return pessoa; });
        }
        catch (e) {
            return null;
        }
    };
    ApiService.prototype.createPessoa = function (pessoa) {
        var pessoas;
        try {
            pessoas = JSON.parse(localStorage.getItem('pessoas'));
        }
        catch (e) {
            pessoas = [];
        }
        // evita problema do json fazer o parse, mas ser null
        pessoas = pessoas ? pessoas : [];
        pessoa.id = pessoas.length + 1;
        pessoas.push(pessoa);
        localStorage.setItem('pessoas', JSON.stringify(pessoas));
    };
    ApiService.prototype.getPessoaById = function (pessoaId) {
        try {
            var pessoas = JSON.parse(localStorage.getItem('pessoas'));
            return pessoas.filter(function (p) { return (p.id === pessoaId); }).map(function (pessoa) { return pessoa; })[0];
        }
        catch (e) {
            return null;
        }
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ApiService);
    return ApiService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _criar_pessoa_criar_pessoa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./criar-pessoa/criar-pessoa.component */ "./src/app/criar-pessoa/criar-pessoa.component.ts");
/* harmony import */ var _pessoas_pessoas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pessoas/pessoas.component */ "./src/app/pessoas/pessoas.component.ts");
/* harmony import */ var _erro_erro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./erro/erro.component */ "./src/app/erro/erro.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'criar', component: _criar_pessoa_criar_pessoa_component__WEBPACK_IMPORTED_MODULE_2__["CriarPessoaComponent"] },
    { path: 'lista', children: [
            { path: '', component: _pessoas_pessoas_component__WEBPACK_IMPORTED_MODULE_3__["PessoasComponent"] },
            { path: ':id', component: _pessoas_pessoas_component__WEBPACK_IMPORTED_MODULE_3__["PessoasComponent"] }
        ]
    },
    { path: '',
        redirectTo: '/criar',
        pathMatch: 'full'
    },
    { path: 'erro', component: _erro_erro_component__WEBPACK_IMPORTED_MODULE_4__["ErroComponent"] },
    { path: '**', redirectTo: '/erro' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'projeto-cadastro-pessoa';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _pessoas_pessoas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pessoas/pessoas.component */ "./src/app/pessoas/pessoas.component.ts");
/* harmony import */ var _pessoas_lista_pessoas_lista_pessoas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pessoas/lista-pessoas/lista-pessoas.component */ "./src/app/pessoas/lista-pessoas/lista-pessoas.component.ts");
/* harmony import */ var _pessoas_pessoa_detalhes_pessoa_detalhes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pessoas/pessoa-detalhes/pessoa-detalhes.component */ "./src/app/pessoas/pessoa-detalhes/pessoa-detalhes.component.ts");
/* harmony import */ var _criar_pessoa_criar_pessoa_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./criar-pessoa/criar-pessoa.component */ "./src/app/criar-pessoa/criar-pessoa.component.ts");
/* harmony import */ var _erro_erro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./erro/erro.component */ "./src/app/erro/erro.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/data.service */ "./src/app/shared/data.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _pessoas_pessoas_component__WEBPACK_IMPORTED_MODULE_6__["PessoasComponent"],
                _pessoas_lista_pessoas_lista_pessoas_component__WEBPACK_IMPORTED_MODULE_7__["ListaPessoasComponent"],
                _pessoas_pessoa_detalhes_pessoa_detalhes_component__WEBPACK_IMPORTED_MODULE_8__["PessoaDetalhesComponent"],
                _criar_pessoa_criar_pessoa_component__WEBPACK_IMPORTED_MODULE_9__["CriarPessoaComponent"],
                _erro_erro_component__WEBPACK_IMPORTED_MODULE_10__["ErroComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], _shared_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/criar-pessoa/criar-pessoa.component.css":
/*!*********************************************************!*\
  !*** ./src/app/criar-pessoa/criar-pessoa.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group .required:after {\r\n  content:\"*\";color:red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JpYXItcGVzc29hL2NyaWFyLXBlc3NvYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxVQUFVO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY3JpYXItcGVzc29hL2NyaWFyLXBlc3NvYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAgLnJlcXVpcmVkOmFmdGVyIHtcclxuICBjb250ZW50OlwiKlwiO2NvbG9yOnJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/criar-pessoa/criar-pessoa.component.html":
/*!**********************************************************!*\
  !*** ./src/app/criar-pessoa/criar-pessoa.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <h3>Cadastrar pessoa</h3>\r\n    <p>Cadastre uma pessoa para ser listada na aba de \"Lista de pessoas\".</p>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"loginOuEmailExistente\">\r\n  <div class=\"col-md-7\">\r\n    <div class=\"alert alert-danger\">\r\n      <strong>Não foi possível registrar!</strong> Login ou email já foram cadastrados!\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <form [formGroup]=\"form\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5 form-group\">\r\n          <label for=\"nome\" class=\"required\">\r\n            Nome\r\n          </label>\r\n          <input type=\"text\" formControlName=\"nome\" name=\"nome\" id=\"nome\" class=\"form-control\" required placeholder=\"Fulano de Tal\" />\r\n          <div class=\"alert alert-danger\" *ngIf=\"!f.nome.valid\">\r\n            Preencha corretamente o nome (min.: 3 dígitos).\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-5 form-group\">\r\n          <label for=\"idade\" class=\"required\">\r\n            Idade\r\n          </label>\r\n          <input type=\"number\" formControlName=\"idade\" name=\"idade\" id=\"idade\" class=\"form-control\" required placeholder=\"23\" />\r\n          <div class=\"alert alert-danger\" *ngIf=\"!f.idade.valid\">\r\n            Preencha corretamente a idade (min.: 18, máx.: 100).\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-5 form-group\">\r\n          <label for=\"email\" class=\"required\">\r\n            Email\r\n          </label>\r\n          <input type=\"email\" formControlName=\"email\" name=\"email\" id=\"email\" class=\"form-control\" required placeholder=\"fulano@exemplo.com\" />\r\n          <div class=\"alert alert-danger\" *ngIf=\"!f.email.valid\">\r\n            Preencha corretamente o email.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5 form-group\">\r\n          <label for=\"login\" class=\"required\">\r\n            Login\r\n          </label>\r\n          <input type=\"text\" formControlName=\"login\" name=\"login\" id=\"login\" class=\"form-control\" required placeholder=\"fulano23\" />\r\n          <div class=\"alert alert-danger\" *ngIf=\"!f.login.valid\">\r\n            Preencha corretamente o login (min.: 3 dígitos, apenas letras, números e hífen e subtraço).\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-5 form-group\">\r\n          <label for=\"senha\" class=\"required\">\r\n            Senha\r\n          </label>\r\n          <input type=\"password\" formControlName=\"senha\" name=\"senha\" id=\"senha\" class=\"form-control\" required placeholder=\"senha\" />\r\n          <div class=\"alert alert-danger\" *ngIf=\"!f.senha.valid\">\r\n            Preencha corretamente a senha (min.: 6 dígitos).\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5 form-group\">\r\n          <label for=\"status\">\r\n            Status:\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5 form-group\">\r\n          <input type=\"checkbox\" formControlName=\"status\" class=\"form-check-input\" id=\"status\" name=\"status\">\r\n          <label class=\"form-check-label\" for=\"status\">&emsp;Ativo</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <button class=\"btn btn-success\" type=\"button\" (click)=\"onAdicionarPessoa()\" [disabled]=\"!form.valid\">Adicionar pessoa</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/criar-pessoa/criar-pessoa.component.ts":
/*!********************************************************!*\
  !*** ./src/app/criar-pessoa/criar-pessoa.component.ts ***!
  \********************************************************/
/*! exports provided: CriarPessoaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarPessoaComponent", function() { return CriarPessoaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CriarPessoaComponent = /** @class */ (function () {
    function CriarPessoaComponent(data, api, router, formBuilder) {
        this.data = data;
        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
        this.loginOuEmailExistente = false;
    }
    CriarPessoaComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            idade: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(18), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(100)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            /* consultado: https://stackoverflow.com/questions/1221985/how-to-validate-a-user-name-with-regex */
            login: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$')
                ]
            ],
            senha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            status: [false]
        });
    };
    Object.defineProperty(CriarPessoaComponent.prototype, "f", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    CriarPessoaComponent.prototype.onAdicionarPessoa = function () {
        var _this = this;
        var pessoasExistentes = this.api.getAllPessoas();
        if (pessoasExistentes) {
            this.loginOuEmailExistente = pessoasExistentes.some(function (pessoaExistente) {
                return pessoaExistente.login === _this.f.login.value ||
                    pessoaExistente.email === _this.f.email.value;
            });
        }
        if (!this.loginOuEmailExistente) {
            this.api.createPessoa(this.form.value);
            this.data.add = true;
            this.router.navigate(['/lista']);
        }
    };
    CriarPessoaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-criar-pessoa',
            template: __webpack_require__(/*! ./criar-pessoa.component.html */ "./src/app/criar-pessoa/criar-pessoa.component.html"),
            styles: [__webpack_require__(/*! ./criar-pessoa.component.css */ "./src/app/criar-pessoa/criar-pessoa.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CriarPessoaComponent);
    return CriarPessoaComponent;
}());



/***/ }),

/***/ "./src/app/erro/erro.component.css":
/*!*****************************************!*\
  !*** ./src/app/erro/erro.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm8vZXJyby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/erro/erro.component.html":
/*!******************************************!*\
  !*** ./src/app/erro/erro.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ erro }}</h1>\r\n"

/***/ }),

/***/ "./src/app/erro/erro.component.ts":
/*!****************************************!*\
  !*** ./src/app/erro/erro.component.ts ***!
  \****************************************/
/*! exports provided: ErroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErroComponent", function() { return ErroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErroComponent = /** @class */ (function () {
    function ErroComponent(data) {
        this.data = data;
        this.erro = 'Erro 404: Página não encontrada.';
    }
    ErroComponent.prototype.ngOnInit = function () {
        var erro = this.data.storage;
        if (erro) {
            this.erro = erro;
        }
    };
    ErroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-erro',
            template: __webpack_require__(/*! ./erro.component.html */ "./src/app/erro/erro.component.html"),
            styles: [__webpack_require__(/*! ./erro.component.css */ "./src/app/erro/erro.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ErroComponent);
    return ErroComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <a routerLink=\"\" routerLinkActive=\"active\">Cadastro de Pessoa</a>\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#header-app\">\r\n        <span class=\"sr-only\">Mostra/Esconde a navegação</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"header-app\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a routerLink=\"/criar\" routerLinkActive=\"active\">Criar pessoa</a></li>\r\n        <li><a routerLink=\"/lista\" routerLinkActive=\"active\">Lista de pessoas</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pessoas/lista-pessoas/lista-pessoas.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pessoas/lista-pessoas/lista-pessoas.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".link-sem-estilo {\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVzc29hcy9saXN0YS1wZXNzb2FzL2xpc3RhLXBlc3NvYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9wZXNzb2FzL2xpc3RhLXBlc3NvYXMvbGlzdGEtcGVzc29hcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmstc2VtLWVzdGlsbyB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pessoas/lista-pessoas/lista-pessoas.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pessoas/lista-pessoas/lista-pessoas.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <h3>Pessoas cadastradas</h3>\r\n  <div class=\"col-xs-12 form-group\">\r\n    <input type=\"text\"\r\n           (keyup)=\"filtrarPessoas()\"\r\n           [(ngModel)]=\"query\" class=\"form-control\"\r\n           placeholder=\"Filtrar pelo nome...\" />\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <a class=\"col-sm-6 link-sem-estilo\" routerLink=\"/lista/{{ pessoa.id }}\"\r\n       *ngFor=\"let pessoa of pessoasVisiveis\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          {{ pessoa.nome }}\r\n        </div>\r\n        <div class=\"panel-body\">\r\n           {{ pessoa.login }}\r\n        </div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pessoas/lista-pessoas/lista-pessoas.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pessoas/lista-pessoas/lista-pessoas.component.ts ***!
  \******************************************************************/
/*! exports provided: ListaPessoasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPessoasComponent", function() { return ListaPessoasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaPessoasComponent = /** @class */ (function () {
    function ListaPessoasComponent(api) {
        this.api = api;
        this.query = '';
        this.pessoas = [];
        this.pessoasVisiveis = [];
    }
    ListaPessoasComponent.prototype.ngOnInit = function () {
        this.getPessoas();
    };
    ListaPessoasComponent.prototype.getPessoas = function () {
        this.pessoas = this.api.getAllPessoas();
        this.pessoasVisiveis = this.pessoas;
    };
    ListaPessoasComponent.prototype.filtrarPessoas = function () {
        var _this = this;
        /* consultado: https://stackoverflow.com/questions/40678206/angular-2-filter-search-list */
        if (this.query === '') {
            this.pessoasVisiveis = this.pessoas;
        }
        else {
            this.pessoasVisiveis = Object.assign([], this.pessoas).filter(function (pessoa) { return pessoa.nome.toLowerCase().indexOf(_this.query.toLowerCase()) > -1; });
        }
    };
    ListaPessoasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista-pessoas',
            template: __webpack_require__(/*! ./lista-pessoas.component.html */ "./src/app/pessoas/lista-pessoas/lista-pessoas.component.html"),
            styles: [__webpack_require__(/*! ./lista-pessoas.component.css */ "./src/app/pessoas/lista-pessoas/lista-pessoas.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ListaPessoasComponent);
    return ListaPessoasComponent;
}());



/***/ }),

/***/ "./src/app/pessoas/pessoa-detalhes/pessoa-detalhes.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pessoas/pessoa-detalhes/pessoa-detalhes.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blc3NvYXMvcGVzc29hLWRldGFsaGVzL3Blc3NvYS1kZXRhbGhlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pessoas/pessoa-detalhes/pessoa-detalhes.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pessoas/pessoa-detalhes/pessoa-detalhes.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"list-group-item active\">Detalhes da pessoa</h4>\r\n<div *ngIf=\"pessoa==null; else mostrarDetalhes\">\r\n  <div class=\"list-group-item\">\r\n    <h4 class=\"list-group-item-heading\">\r\n      Nenhuma pessoa selecionada\r\n    </h4>\r\n    <p class=\"list-group-item-text\">\r\n      Por favor, clique em uma das pessoas cadastradas para mostrar seus detalhes.\r\n    </p>\r\n  </div>\r\n</div>\r\n<ng-template #mostrarDetalhes>\r\n  <div class=\"list-group-item\">\r\n    <h4 class=\"list-group-item-heading\">\r\n      ID\r\n    </h4>\r\n    <p class=\"list-group-item-text\">\r\n      {{pessoa.id}}\r\n    </p>\r\n  </div>\r\n  <div class=\"list-group-item\">\r\n    <h4 class=\"list-group-item-heading\">\r\n      Nome\r\n    </h4>\r\n    <p class=\"list-group-item-text\">\r\n      {{pessoa.nome}}\r\n    </p>\r\n  </div>\r\n  <div class=\"list-group-item\">\r\n    <h4 class=\"list-group-item-heading\">\r\n      Email\r\n    </h4>\r\n    <p class=\"list-group-item-text\">\r\n      {{pessoa.email}}\r\n    </p>\r\n  </div>\r\n  <div class=\"list-group-item\">\r\n    <h4 class=\"list-group-item-heading\">\r\n      Login\r\n    </h4>\r\n    <p class=\"list-group-item-text\">\r\n      {{pessoa.login}}\r\n    </p>\r\n  </div>\r\n  <div class=\"list-group-item\">\r\n    <h4 class=\"list-group-item-heading\">\r\n      Senha\r\n    </h4>\r\n    <p class=\"list-group-item-text\" *ngIf=\"senhaInvisivel; else mostrarSenha\">\r\n      <button class=\"btn btn-danger\" type=\"button\" (click)=\"senhaInvisivel = false\">\r\n        Mostrar senha\r\n      </button>\r\n    </p>\r\n    <ng-template #mostrarSenha>\r\n      <div class=\"list-group-item-text\">\r\n        <p>\r\n          <button class=\"btn btn-warning\" type=\"button\" (click)=\"senhaInvisivel = true\">\r\n            Esconder senha\r\n          </button>\r\n        </p>\r\n        <p>\r\n          {{pessoa.senha}}\r\n        </p>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"list-group-item\">\r\n    <h4 class=\"list-group-item-heading\">\r\n      Status\r\n    </h4>\r\n    <p class=\"list-group-item-text alert\" [ngClass]=\"{'alert-success':pessoa.status, 'alert-danger': !pessoa.status}\">\r\n      {{pessoa.status ? \"Ativo\" : \"Inativo\"}}\r\n    </p>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/pessoas/pessoa-detalhes/pessoa-detalhes.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pessoas/pessoa-detalhes/pessoa-detalhes.component.ts ***!
  \**********************************************************************/
/*! exports provided: PessoaDetalhesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoaDetalhesComponent", function() { return PessoaDetalhesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data.service */ "./src/app/shared/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PessoaDetalhesComponent = /** @class */ (function () {
    function PessoaDetalhesComponent(data, api, route, router) {
        this.data = data;
        this.api = api;
        this.route = route;
        this.router = router;
        this.pessoa = null;
        this.senhaInvisivel = true;
    }
    PessoaDetalhesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (params) {
            if (params[0]) {
                var id = parseInt(params[0].path, 10);
                if (!isNaN(id)) {
                    _this.getPessoaDetalhes(id);
                }
                else {
                    _this.data.storage = 'Erro: ID não é um número.';
                    _this.router.navigate(['/erro']);
                }
            }
        });
    };
    PessoaDetalhesComponent.prototype.getPessoaDetalhes = function (id) {
        var data = this.api.getPessoaById(id);
        if (data) {
            this.pessoa = data;
        }
        else {
            this.data.storage = 'Erro: ID não existe no banco de dados.';
            this.router.navigate(['/erro']);
        }
    };
    PessoaDetalhesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pessoa-detalhes',
            template: __webpack_require__(/*! ./pessoa-detalhes.component.html */ "./src/app/pessoas/pessoa-detalhes/pessoa-detalhes.component.html"),
            styles: [__webpack_require__(/*! ./pessoa-detalhes.component.css */ "./src/app/pessoas/pessoa-detalhes/pessoa-detalhes.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PessoaDetalhesComponent);
    return PessoaDetalhesComponent;
}());



/***/ }),

/***/ "./src/app/pessoas/pessoas.component.css":
/*!***********************************************!*\
  !*** ./src/app/pessoas/pessoas.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blc3NvYXMvcGVzc29hcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pessoas/pessoas.component.html":
/*!************************************************!*\
  !*** ./src/app/pessoas/pessoas.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"pessoaCadastrada\">\r\n  <div class=\"col-md-5\">\r\n    <div class=\"alert alert-success fade in\">\r\n      <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a>\r\n      <strong>Sucesso!</strong> A pessoa foi cadastrada!\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <app-lista-pessoas></app-lista-pessoas>\r\n  </div>\r\n  <div class=\"col-md-7\">\r\n    <app-pessoa-detalhes></app-pessoa-detalhes>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pessoas/pessoas.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pessoas/pessoas.component.ts ***!
  \**********************************************/
/*! exports provided: PessoasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoasComponent", function() { return PessoasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PessoasComponent = /** @class */ (function () {
    function PessoasComponent(data, route) {
        this.data = data;
        this.route = route;
        this.pessoaCadastrada = false;
    }
    PessoasComponent.prototype.ngOnInit = function () {
        this.pessoaCadastrada = this.data.add;
    };
    PessoasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pessoas',
            template: __webpack_require__(/*! ./pessoas.component.html */ "./src/app/pessoas/pessoas.component.html"),
            styles: [__webpack_require__(/*! ./pessoas.component.css */ "./src/app/pessoas/pessoas.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PessoasComponent);
    return PessoasComponent;
}());



/***/ }),

/***/ "./src/app/shared/data.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* consultado: https://www.thepolyglotdeveloper.com/2016/10/passing-complex-data-angular-2-router-nativescript/ */

var DataService = /** @class */ (function () {
    function DataService() {
        this.add = false;
    }
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
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

module.exports = __webpack_require__(/*! C:\Users\Giordanna\desktop\projeto-cadastro-pessoa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map