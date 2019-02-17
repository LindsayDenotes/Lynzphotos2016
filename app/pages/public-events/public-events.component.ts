"use strict";

// import Angular 2
import {Component} from "angular2/core";
//import {} from "../public-events/public-events"; not needed
import {CSSCarouselComponent} from "modules/carousel/carousel.component";

@Component({
    selector: "page-public-events",
    templateUrl: "pages/public-events/public-events.template.html",
    directives: [CSSCarouselComponent],//tell angular we are using the css-carousel tag in this component]
})
export class PublicEventsComponent {
    public message: string = "PublicEventsComponent public message string here";
    //heroes: Hero[] = [];
    images: Images[] = [];
    constructor() {
        console.log("Lindsay's PublicEventsComponent loaded");
    }
}

