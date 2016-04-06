# Lynzphotos2016

## About

##SUMMARY OF THE BUILD AND LEARNING RESOURCES FOR THE TOOLS IT CONTAINS
This is my event photography website built using Angular 2 (TypeScript). It consists of two carousels, an input form, and five aggregate component; i.e., pages. The task runner is Gulp, which uses Node.js. I learned how to use Gulp on `http://www.sitepoint.com/introduction-gulp-js/` and `http://tagtree.tv/gulp`. 

I learned how to build an Angular 2 single page application on `https://angular.io/docs/ts/latest/tutorial/` and `https://toddmotto.com/bootstrap-angular-2-hello-world`. I learned about TypeScript on `https://www.typescriptlang.org/`. 

This project was scaffolded using the [ModernWebDev Yeoman Generator](https://github.com/dsebastien/modernWebDevGenerator) by [dSebastien](https://twitter.com/dSebastien). I followed Sébastien's video guide on `https://youtu.be/Wc5iTInYOBw` to help me get the ModernWebDev build up and running. 

##ABOUT THE NAMING CONVENTION
If you use the ModernWebDev generator, I (Lindsay Brown) would recommend that before you create any new component files, follow the naming conventions outlined by John Papa in the Tour of Heroes tutorial found on `https://angular.io/docs/ts/latest/tutorial/`. 

So before proceeding creating new files in your new ModernWebDev project, rename `app.ts` to `app.component.ts`, and `home.ts` to `home.component.ts`. Then update boot.ts's import statements and bootstrap function with those new names. Always remember to update the name of the component in the component decorator in whichever component files you renamed. By component files, I mean typescript files which contain a component decorator and exportClass. Those are the files that should contain `.component.` in their name. 

Further, according to the Tour of Heroes, `boot.ts` should really be named `main.ts`, but it was taking me too much time to correct all the trouble caused when I tried to rename boot.ts, so I left it as is.

I condone naming files in a way that identifies the contents and/or functionality of the code contained in them. (I also happen to believe in descriptive and consistent variable naming that indicate the variable's purpose.) By following the Angular 2 naming convention, other Angular 2 developers will be able to make better sense of your project. 

You can trust and should follow the naming convention instructions found in your newly scaffolded project's app > modules > README.md. It states, basically, that if a typescript file contains code for a service, `.service.` should be in the filename. If it contains code for a template, `.template.` should be in the name, a controller, `.controller.`, a directive, `.directive.` et cetera. If you choose a two word name, use a hypen between the two words: `for-example.component.ts.` Do not capitalize file names. 


##ABOUT THE STYLING
For styling, the build contains PostCSS and Sass. I learned how to write .scss files from a live human, although I almost abandoned it for PostCSS after reading `https://benfrain.com/breaking-up-with-sass-postcss/`. Further, the README.md in app > styles provides URLs for reading up on Atomic Design, BEM and Suit CSS. Sébastien included a README.md in each of the project's directories that explain what you should save to that particular folder. Very helpful. 

Many of my learning sources are people who sat with me at my Mac at various coding meetups in Washington, DC. I highly recommend sitting with experienced professionals to learn how they identify, refer to, and approach solving a problem. I plan on paying that action forward whenever I can.