// The file is exporting a CSSCarouselComponent class (ln 96) 
// which has a public property of an array of images (ln 102) implementing image interface. 
// The class also has an @Component decorator (ln 16) which is specifying the meta-properties of this class.
// The selector (ln 17) is the name we want the tag to have and the template (ln 19) is
// the HTML for the component and styles, which is the CSS trick we played to get our carousel working.
//  https://scotch.io/tutorials/responsive-carousel-component-with-angular-2
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
//Import Component form the angular core package
var core_1 = require("angular2/core");
//Component Decorator
var CSSCarouselComponent = (function () {
    function CSSCarouselComponent() {
        //images data to be bound to the template
        this.images = IMAGES;
    }
    CSSCarouselComponent = __decorate([
        core_1.Component({
            selector: "css-carousel",
            //Template for the tag
            template: "\n <div class=\"carousel\">\n\n  <ul class=\"slides\">\n\n    <li *ngFor=\"#image of images\">\n      <h2>{{image.title}}</h2>\n      <img src=\"{{image.url}}\" alt=\"can't find picture\">\n    </li>\n\n  </ul>\n\n</div>\n  ",
            //Styles for the tag
            styles: ["\n.carousel{\n    overflow:hidden;\n    width:100%;\n}\n.slides{\n    list-style:none;\n    position:relative;\n    width:500%; /* Number of panes * 100% */\n    overflow:hidden; /* Clear floats */\n        /* Slide effect Animations*/\n    -moz-animation:carousel 30s infinite;\n    -webkit-animation:carousel 30s infinite;\n    animation:carousel 30s infinite;\n}\n.slides > li{\n    position:relative;\n    float:left;\n    width: 20%; /* 100 / number of panes */\n}\n.carousel img{\n    display:block;\n    width:100%;\n    max-width:100%;\n}\n.carousel h2{\n    margin-bottom: 0;\n    font-size:1em;\n    padding:1.5em 0.5em 1.5em 0.5em;\n    position:absolute;\n    right:0px;\n    bottom:0px;\n    left:0px;\n    text-align:center;\n    color:#fff;\n    background-color:rgba(0,0,0,0.75);\n    text-transform: uppercase;\n}\n\n@keyframes carousel{\n    0%    { left:-5%; }\n    11%   { left:-5%; }\n    12.5% { left:-105%; }\n    23.5% { left:-105%; }\n    25%   { left:-205%; }\n    36%   { left:-205%; }\n    37.5% { left:-305%; }\n    48.5% { left:-305%; }\n    50%   { left:-405%; }\n    61%   { left:-405%; }\n    62.5% { left:-305%; }\n    73.5% { left:-305%; }\n    75%   { left:-205%; }\n    86%   { left:-205%; }\n    87.5% { left:-105%; }\n    98.5% { left:-105%; }\n    100%  { left:-5%; }\n}\n  "],
        }), 
        __metadata('design:paramtypes', [])
    ], CSSCarouselComponent);
    return CSSCarouselComponent;
}());
exports.CSSCarouselComponent = CSSCarouselComponent;
//IMAGES array implementing Image interface
var IMAGES = [
    { "title": "BCpostWGroup", "url": "images/BCpostWGroup.jpg" },
    { "title": "BCcoonsWiWifeBW", "url": "images/BCcoonsWiWifeBW.jpg" },
    { "title": "BCdots", "url": "images/BCdots.jpg" },
    { "title": "BCcheer", "url": "images/BCcheer.jpg" },
    { "title": "BClaughBW", "url": "images/BClaughBW.jpg" }
];
//https://lh3.googleusercontent.com/7twVRB4W2qM_an1-5-KP3RNHWkWYIoq7JxAxbo3LoXtv7nvi24KHi4cm7_88-9dwUQFcDxfnnaWvZtgDlqCCXhkHYZN55e8UOk_gArGFlSyyhbhh8oqn0GbOjU3f8gC9gQ36lwrJ6hobK0s2g5N8YRvxeYgHoSzBgAHrYuyMomSotkfzEX6e5NqwSXImNokL5T0NxEXm-Ag_gcPPJa0YMPnicJyOuMCvs_zHb3pB1gaOWIWjDiszbZaFAHzqdFGfBMuNbGdbJmztu22SmvQty_EfasEu6tUz4TwCJj_pYpOaPgU4dYW9gDrZd4PSornPnqsd8pM5JVBVcRdZQb-BA1bD8qGrEsxLPWaAs71HVcAsRdlH98AIZsMEd2VCBdxuNzdQbnuB8sCS2L9YIHJzqQufHOajQOULWw8UFkpIpeHgdFvVhVbpD2ajbcYRrq3nuIk99G6O39Yc41Cs0hNJQWn4nX-CKaaMlaFQSNB69NCQHBRCW7lGffyRWjmvO--sQc9pKjVpO7G0l8ycStipmOoetM3aSGyV5TGzP-W3-rmFUkKQFft1Oer3xQjfOFU8Pcl0=w675-h450-no 

//# sourceMappingURL=carousel.component.js.map
