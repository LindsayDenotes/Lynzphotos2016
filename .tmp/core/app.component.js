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
// this root component bootstrapping file should conventionally be named app.component.ts. this file hosts the client user experience.
// angular apps are modular. Angular itself is modular. It is a collection of library modules each made up of several, related features. When we need something from a module, we import it.
// not sure why/where we'd need this since we're importing the carousel component below. angular.module('app', ['angular-carousel']);
// order of imports matters
// import Angular 2. For boilerplate component bootstrapping, see my plunk app.component.ts on http://plnkr.co/edit/8nrEuG?p=info
var core_1 = require("angular2/core"); //import statement (min of 1) is essential unit of every component in Ang2
var carousel_component_1 = require("../modules/carousel/carousel.component");
// import Angular 2 Component Router. reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
var router_1 = require("angular2/router"); //S's original
// import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router'; //from John Pappa's Heroes tutorial
// app components. Remember, skip the file extensions
var home_component_1 = require("../pages/home/home.component"); // pages are a type of component in this Ang2 project
var public_events_component_1 = require("../pages/public-events/public-events.component");
var private_events_component_1 = require("../pages/private-events/private-events.component");
var about_component_1 = require("../pages/about/about.component");
var pricing_component_1 = require("../pages/pricing/pricing.component");
// app services - optional
//import {appServicesInjectables} from "core/services/services";
// @Component decorator is essential for component in Ang2. It is a decorator function that takes a metadata object. The metadata's 3 fields below tell Angular how to create this component and what template to use
var AppComponent = (function () {
    function AppComponent() {
        console.log("Application bootstrapped!");
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "app",
            templateUrl: "core/app.template.html",
            //directives: [ROUTER_DIRECTIVES],//~where are my data (my pictures) being stored without this? Dan Paz rec's S3 aws's simple storage service. would be folder on internet, get URL
            directives: [router_1.RouterOutlet, router_1.RouterLink, carousel_component_1.CSSCarouselComponent],
        }),
        router_1.RouteConfig([
            //{ path: "/", component: HomeComponent, as: "HomeComponent", data: undefined } // the "as" serves as alias for links, etc. this was how S set up route config, but I'm mimicking John Pappa's Heroes tutorial below.
            {
                path: "/home",
                name: "Home",
                component: home_component_1.HomeComponent /*the component that the router should create when navigating to this route*/
            },
            {
                path: "/public-events",
                name: "PublicEvents",
                component: public_events_component_1.PublicEventsComponent /*the component that the router should create when navigating to this route*/
            },
            {
                path: "/private-events",
                name: "PrivateEvents",
                component: private_events_component_1.PrivateEventsComponent /*the component that the router should create when navigating to this route*/
            },
            {
                path: "/about",
                name: "About",
                component: about_component_1.AboutComponent /*the component that the router should create when navigating to this route*/
            },
            {
                path: "/pricing",
                name: "Pricing",
                component: pricing_component_1.PricingComponent /*the component that the router should create when navigating to this route*/
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent; // to build a substantive application, we can expand this class with properties and application logic

//# sourceMappingURL=app.component.js.map
