// The file is exporting a CSSCarouselComponent class (ln 95) 
// which has a public property of an array of images (ln 97) implementing image interface. 
// The class also has an @Component decorator (ln 15) which is specifying the meta-properties of this class.
// The selector (ln 17) is the name we want the tag to have and the template (ln 19) is
// the HTML for the component and styles, which is the CSS trick we played to get our carousel working.
//  https://scotch.io/tutorials/responsive-carousel-component-with-angular-2

// Import Component form the angular core package
import {Component} from "angular2/core";

// Import the Image interface
import {Image} from "./image.interface";


// Component Decorator SHOULD SELECTOR BE css-carousel-pri?
@Component({
    //Name of our tag
    selector: "css-carousel",
    //Template for the tag. 
    template: `
 <div class="carousel">

  <ul class="slides">

    <li *ngFor="#image of images">
      <h2>{{image.title}}</h2>
      <img src="{{image.url}}" alt="can't find image URL">
    </li>

  </ul>

</div>
  `,
    //Styles for the tag. Component-inline styling. External styling can be achieved by just replacing the component-inline styles with: [styleUrls: "style.css"]
    styles: [`
.carousel{
    overflow:hidden;
    width:100%;
}
.slides{
    list-style:none;
    position:relative;
    width:500%; /* Number of panes * 100% */
    overflow:hidden; /* Clear floats */
        /* Slide effect Animations*/
    -moz-animation:carousel 30s infinite;
    -webkit-animation:carousel 30s infinite;
    animation:carousel 30s infinite;
}
.slides > li{
    position:relative;
    float:left;
    width: 20%; /* 100 / number of panes */
}
.carousel img{
    display:block;
    width:100%;
    max-width:100%;
}
.carousel h2{
    margin-bottom: 0;
    font-size:1em;
    padding:1.5em 0.5em 1.5em 0.5em;
    position:absolute;
    right:0px;
    bottom:0px;
    left:0px;
    text-align:center;
    color:#fff;
    background-color:rgba(0,0,0,0.75);
    text-transform: uppercase;
}

@keyframes carousel{
    0%    { left:-5%; }
    11%   { left:-5%; }
    12.5% { left:-105%; }
    23.5% { left:-105%; }
    25%   { left:-205%; }
    36%   { left:-205%; }
    37.5% { left:-305%; }
    48.5% { left:-305%; }
    50%   { left:-405%; }
    61%   { left:-405%; }
    62.5% { left:-305%; }
    73.5% { left:-305%; }
    75%   { left:-205%; }
    86%   { left:-205%; }
    87.5% { left:-105%; }
    98.5% { left:-105%; }
    100%  { left:-5%; }
}
  `], //@keyframes powers the slideshow. All we do is animate .panels from right to left then back again. The problem is that you have to know how many full moves and pauses are needed for a full iteration of the carousel (before it starts on its infinite loop), and then how to evenly space these numbers between 0 and 100%. My animations last for 1.5% and pause for 11%, these numbers are perfect for adding up to 100%.
}) //the total time between start of one animation and the next is 100 / 2(n-1) (where n is the number of panes). http://csswizardry.com/2011/10/fully-fluid-responsive-css-carousel/#comment-95396
// Carousel Component itself
export class CSSCarouselPriComponent {
    //images data to be bound to the template
    public images = IMAGES;
}

// IMAGES array implementing Image interface;
var IMAGES: ImagesPri[] = [
    { "title": "TurMaidGrmnRed", "url": "images/TurMaidGrmnRed.jpg" },
    { "title": "TurRngbrFlwgrls", "url": "images/TurRngbrFlwgrls.jpg" },
    { "title": "TurGuest", "url": "images/TurGuest.jpg" },
    { "title": "BrooksGuest", "url": "images/BrooksGuest.jpg" },
    { "title": "AikStpnMaids", "url": "images/AikStpnMaids.jpg" },  
];

//https://lh3.googleusercontent.com/7twVRB4W2qM_an1-5-KP3RNHWkWYIoq7JxAxbo3LoXtv7nvi24KHi4cm7_88-9dwUQFcDxfnnaWvZtgDlqCCXhkHYZN55e8UOk_gArGFlSyyhbhh8oqn0GbOjU3f8gC9gQ36lwrJ6hobK0s2g5N8YRvxeYgHoSzBgAHrYuyMomSotkfzEX6e5NqwSXImNokL5T0NxEXm-Ag_gcPPJa0YMPnicJyOuMCvs_zHb3pB1gaOWIWjDiszbZaFAHzqdFGfBMuNbGdbJmztu22SmvQty_EfasEu6tUz4TwCJj_pYpOaPgU4dYW9gDrZd4PSornPnqsd8pM5JVBVcRdZQb-BA1bD8qGrEsxLPWaAs71HVcAsRdlH98AIZsMEd2VCBdxuNzdQbnuB8sCS2L9YIHJzqQufHOajQOULWw8UFkpIpeHgdFvVhVbpD2ajbcYRrq3nuIk99G6O39Yc41Cs0hNJQWn4nX-CKaaMlaFQSNB69NCQHBRCW7lGffyRWjmvO--sQc9pKjVpO7G0l8ycStipmOoetM3aSGyV5TGzP-W3-rmFUkKQFft1Oer3xQjfOFU8Pcl0=w675-h450-no

