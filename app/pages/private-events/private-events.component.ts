"use strict";

// import Angular 2
import {Component} from "angular2/core";
//import {} from "../private-events/private-events"; not needed

@Component({
    selector: "page-private-events",
    templateUrl: "pages/private-events/private-events.template.html",
    directives: []
})
export class PrivateEventsComponent {
    private message: string = "PrivateEventsComponent private message string here";
    constructor() {
        console.log("Lindsay's PrivateEventsComponent loaded");
    }
}

