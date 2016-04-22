"use strict";

// import Angular 2 ~order of imports matters
import {Component} from "angular2/core";
//import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "angular2/router"; //S's original //works wo either of these
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';//from Heroes tutorial
@Component({
	selector: "page-home",
	templateUrl: "pages/home/home.template.html",
	//styleUrls: ['app/dashboard.component.css'],
	directives: []
})
export class HomeComponent { /*i renamed to HomeComponent, was Home. Had to update templateURL above*/
	private message: string = "Home.component.ts private message";
    constructor() {
		console.log("Lindsay's Home component loaded");
	}
}