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
// import Angular 2 ~order of imports matters
var core_1 = require("angular2/core");
//import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "angular2/router"; //S's original //works wo either of these
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';//from Heroes tutorial
var HomeComponent = (function () {
    function HomeComponent() {
        this.message = "Home.component.ts private message";
        console.log("Lindsay's Home component loaded");
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: "page-home",
            templateUrl: "pages/home/home.template.html",
            //styleUrls: ['app/dashboard.component.css'],
            directives: []
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=home.component.js.map
