"use strict"; // this file should conventionally be named main.ts, according to https://angular.io/docs/ts/latest/quickstart.html#!#component
// this file tells Angular to load the root component, ie, app.ts, which should conventionally be named app.component.ts
// import the application. for boilerplate component bootstrapping, see my plunk main.ts on http://plnkr.co/edit/8nrEuG?p=info
var app_component_1 = require("./app.component"); //needed to launch the app. ESSENTIAL.
// import Angular 2
var bootstrap_1 = require("angular2/bootstrap"); //needed to launch the app. ESSENTIAL.
//Import Angular core according to https://github.com/christiannwamba/angular2-carousel-component/blob/master/app/boot.ts
//import {bootstrap} from 'angular2/platform/browser'
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
var common_dom_1 = require("angular2/platform/common_dom");
// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
var router_1 = require("angular2/router");
// enable production mode of Angular
// enableProdMode(); // enable for production (also uncomment the import above!)
// bootstrap our app
console.log("Bootstrapping the App");
// Then we call bootstrap with App. ESSENTIAL.
bootstrap_1.bootstrap(app_component_1.AppComponent, [
    //appServicesInjectables, // alternative way of filling the injector with all the classes we want to be able to inject
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    common_dom_1.ELEMENT_PROBE_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.PathLocationStrategy }) // can be switched to HashLocationStrategy if you cannot configure your server appropriately for URL rewriting
]).then(function (success) { return console.log("Bootstrap successful"); }, function (error) { return console.error(error); });

//# sourceMappingURL=boot.js.map
