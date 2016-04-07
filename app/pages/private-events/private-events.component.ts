"use strict";

// import Angular 2
import {Component} from "angular2/core";
//import {} from "../private-events/private-events"; not needed
import {CSSCarouselPriComponent} from "./carousel/carousel-pri.component";
import {ImagesPri} from "./carousel/carousel-pri.component";

@Component({
    selector: "page-private-events",
    templateUrl: "pages/private-events/private-events.template.html",
    directives: [CSSCarouselPriComponent],
})
export class PrivateEventsComponent {
    private message: string = "PrivateEventsComponent private message string here";
    images: ImagesPri[] = [];//ImagesPri[]
    constructor() {
        console.log("Lindsay's PrivateEventsComponent loaded");
    }
}
