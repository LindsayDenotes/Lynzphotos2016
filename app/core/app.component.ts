"use strict";
// This is the application's root component; i.e., the bootstrapping file. It should conventionally be named app.component.ts. This file hosts the client user experience.
// angular apps are modular. Angular itself is modular. It is a collection of library modules each made up of several, related features. When we need something from a module, we import it.
    // not sure why/where we'd need the following since we're importing the two carousel components below: angular.module('app', ['angular-carousel']);
// order of imports matters
// import Angular 2. For boilerplate component bootstrapping, see my plunk app.component.ts on http://plnkr.co/edit/8nrEuG?p=info
import {Component} from "angular2/core";//import statement (min of 1) is essential unit of every component in Ang2
import {CSSCarouselPubComponent} from "../pages/public-events/carousel/carousel-pub.component"; 
import {CSSCarouselPriComponent} from "../pages/private-events/carousel/carousel-pri.component";
// import Angular 2 Component Router. reference: http://blog.thoughtram.io/angular/2015/06/16/routing-in-angular-2.html
import {RouteConfig, Route, RouterOutlet, RouterLink, Router} from "angular2/router"; //from S's original
// import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router'; //from John Pappa's Heroes tutorial
// app page components are just below. Remember, skip the file extensions
import {HomeComponent} from "../pages/home/home.component";// pages are a type of component in this Ang2 project
import {PublicEventsComponent} from "../pages/public-events/public-events.component";
import {PrivateEventsComponent} from "../pages/private-events/private-events.component";
import {AboutComponent} from "../pages/about/about.component";
import {PricingComponent} from "../pages/pricing/pricing.component";
// app services - optional
//import {appServicesInjectables} from "core/services/services";

// @Component decorator is essential for components in Ang2. It is a decorator function that takes a metadata object. The metadata's fields below tell Angular how to create this component and what template to use
@Component({ //a component controls a portion of the screen — a view — through its associated template.
	selector: "app", //The CSS selector, ie, HTML element that represents this component is "app", which is not a unique name on the tag, but a type selector.
	templateUrl: "core/app.template.html", //The template specifies the component's companion template, written in an enhanced form of HTML that tells Angular how to render this component's view. //this template file originally contained just "<router-outlet></router-outlet>".
    //directives: [ROUTER_DIRECTIVES],//~where are my data (my pictures) being stored without this? Dan Paz rec's S3 aws's simple storage service. would be folder on internet, get URL
	directives: [RouterOutlet, RouterLink, CSSCarouselPubComponent, CSSCarouselPriComponent]//CSSCarouselComponent - tell angular we are using the css-carousel tag in this component
})

@RouteConfig([/*assign a router to the component and configure that router with routes. Routes tell the router which views to display when a user clicks a link or pastes a URL into the browser address bar*/
	//{ path: "/", component: HomeComponent, as: "HomeComponent", data: undefined } // the "as" serves as alias for links, etc. this was how S set up route config, but I'm mimicking John Pappa's Heroes tutorial below.
	{
		path: "/home",/*the router matches this route's path to the URL in the browser address bar */
		name: "Home",/*the official name of the route; it must begin with a capital letter to avoid confusion with the path*/
		component: HomeComponent/*the component that the router should create when navigating to this route*/
	},
	{
		path: "/public-events",/*the router matches this route's path to the URL in the browser address bar */
		name: "PublicEvents",/*the official name of the route; it must begin with a capital letter to avoid confusion with the path*/
		component: PublicEventsComponent/*the component that the router should create when navigating to this route*/
	},
	{
		path: "/private-events",/*the router matches this route's path to the URL in the browser address bar */
		name: "PrivateEvents",/*the official name of the route; it must begin with a capital letter to avoid confusion with the path*/
		component: PrivateEventsComponent/*the component that the router should create when navigating to this route*/
	},
	{
		path: "/about",/*the router matches this route"s path to the URL in the browser address bar */
		name: "About",/*the official name of the route; it must begin with a capital letter to avoid confusion with the path*/
		component: AboutComponent/*the component that the router should create when navigating to this route*/
	},
	{
		path: "/pricing",/*the router matches this route"s path to the URL in the browser address bar */
		name: "Pricing",/*the official name of the route; it must begin with a capital letter to avoid confusion with the path*/
		component: PricingComponent/*the component that the router should create when navigating to this route*/
	}
])
export class AppComponent { //a component class is essential to each component in Ang2. controls the appearance and behavior of a view through its template.
	constructor() {
		console.log("Application bootstrapped!");
	}
}// to build a substantive application, we can expand this class with properties and application logic


