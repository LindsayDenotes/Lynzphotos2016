"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import Angular 2
var core_1 = require("angular2/core");
//import {} from "../public-events/public-events"; not needed
var carousel_component_1 = require("modules/carousel/carousel.component");
var PublicEventsComponent = (function () {
    function PublicEventsComponent() {
        this.message = "PublicEventsComponent private message string here";
        //heroes: Hero[] = [];
        this.images = [];
        console.log("Lindsay's PublicEventsComponent loaded");
    }
    PublicEventsComponent = __decorate([
        core_1.Component({
            selector: "page-public-events",
            templateUrl: "pages/public-events/public-events.template.html",
            directives: [carousel_component_1.CSSCarouselComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], PublicEventsComponent);
    return PublicEventsComponent;
}());
exports.PublicEventsComponent = PublicEventsComponent;

//# sourceMappingURL=public-events.component.js.map
