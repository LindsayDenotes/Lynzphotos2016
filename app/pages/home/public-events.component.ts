"use strict";

// import Angular 2
import {Component} from "angular2/core";

@Component({
    selector: "page-public-events",
    templateUrl: "pages/public-events/public-events.template.html",
    directives: []
})
export class PublicEventsComponent {
    private message: string = "PublicEventsComponent private message string here";
    constructor() {
        console.log("Lindsay's Home component loaded");
    }
}