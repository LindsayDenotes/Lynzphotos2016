"use strict";

// import Angular 2
import {Component} from "angular2/core";
//import {} from "../pricing/pricing"; not needed

@Component({
    selector: "page-pricing",
    templateUrl: "pages/pricing/pricing.template.html",
    directives: []
})
export class PricingComponent {
    private message: string = "PricingComponent private message string here";
    constructor() {
        console.log("Lindsay's PricingComponent loaded");
    }
}