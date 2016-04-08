"use strict";// this file should conventionally be named main.ts, according to https://angular.io/docs/ts/latest/quickstart.html#!#component
// this file tells Angular to load the root component, ie, app.ts, which should conventionally be named app.component.ts

// import the application. for boilerplate component bootstrapping, see my plunk main.ts on http://plnkr.co/edit/8nrEuG?p=info
import {AppComponent} from "./app.component";//needed to launch the app. ESSENTIAL.

// import Angular 2
import {bootstrap} from "angular2/bootstrap";//needed to launch the app. ESSENTIAL.
//Import Angular core according to https://github.com/christiannwamba/angular2-carousel-component/blob/master/app/boot.ts
//import {bootstrap} from 'angular2/platform/browser'
import {provide, enableProdMode} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {ELEMENT_PROBE_PROVIDERS} from "angular2/platform/common_dom";

// import Angular 2 Component Router
// reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {LocationStrategy, PathLocationStrategy, HashLocationStrategy, ROUTER_PROVIDERS} from "angular2/router";

// enable production mode of Angular
// enableProdMode(); // enable for production (also uncomment the import above!)

// bootstrap our app
console.log("Bootstrapping the App");

// Then we call bootstrap with App. ESSENTIAL.
bootstrap(AppComponent, [ // in [] is the list of injector bindings. Those bindings are used when an injector is created. Passing these here make the bindings available application-wide
	//appServicesInjectables, // alternative way of filling the injector with all the classes we want to be able to inject
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	ELEMENT_PROBE_PROVIDERS, // remove in production
	provide(LocationStrategy, { useClass: PathLocationStrategy }) // can be switched to HashLocationStrategy if you cannot configure your server appropriately for URL rewriting

]).then(
	(success: any) => console.log("Bootstrap successful"),
	(error: any) => console.error(error)
	);