"use strict";

// import Angular 2
import {Component} from "angular2/core";
//import {} from "../about/about"; not needed

@Component({
    selector: "page-about",
    templateUrl: "pages/about/about.template.html",
    directives: []
})
export class AboutComponent {
    private message: string = "AboutComponent private message string here";
    constructor() {
        console.log("Lindsay's AboutComponent loaded");
    }
}
