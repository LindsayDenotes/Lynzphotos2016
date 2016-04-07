"use strict";

// import Angular 2
import {Component} from "angular2/core";
//import {} from "../public-events/public-events"; not needed
import {CSSCarouselPubComponent} from "./carousel/carousel-pub.component";

@Component({
    selector: "page-public-events",
    templateUrl: "pages/public-events/public-events.template.html",
    directives: [CSSCarouselPubComponent],
})
export class PublicEventsComponent {
    private message: string = "PublicEventsComponent private message string here";
    images: Images[] = [];//ImagesPubEv
    constructor() {
        console.log("Lindsay's PublicEventsComponent loaded");
    }
}

