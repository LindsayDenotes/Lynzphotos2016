"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import Angular 2
var core_1 = require("angular2/core");
// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
var router_1 = require("angular2/router");
// app components
var home_1 = require("../pages/home/home");
// app services
//import {appServicesInjectables} from "core/services/services";
var App = (function () {
    function App() {
        console.log("Application bootstrapped!");
    }
    App = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: "core/app.template.html",
            directives: [router_1.RouterOutlet, router_1.RouterLink]
        }),
        router_1.RouteConfig([
            { path: "/", component: home_1.Home, as: "Home", data: undefined } // the as serves as alias for links, etc
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;

//# sourceMappingURL=app.js.map
