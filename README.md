# Matseed - An ejected material seed project with configured testing that uses headless chrome, code coverage and standard format test output files for Azure CI/CT/CD

This project was originally generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0. 
It was then ejected to enable more advanced webpack features.  
It has a number of configurations set up to make setting this up easier in a continuous deployment and testing environment like visual studio online/azure


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
Add the --dry-run flag to make sure it is going where you are expecting!

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `build:prod` for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).  The tests will reload as you make changes and save them.

## Running unit tests (Continuous Testing - only run once)

Run `npm run-script ct` to execute the unit tests via [Karma](https://karma-runner.github.io). This also generates coverage files in Cobertura xml format (`**/cobertura-coverage.xml` in the report directory `**/coverage/`). There are settings in the Karma.conf file for minimum percentage coverage (currently 80%).
This option only runs the tests once and does not carry on watching for changes

## Running end-to-end tests

Run `npm e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).  This produces files in `**/e2e-results-junit.xml` that can be published by the Visual Studio online CI process.  

## Azure CI/CT comments

Use the NPM custom task with `run-script` e.g. `run-script e2e` to run the end to end tests.  You will need to use `install --force` as the first npm task in order to address the security issue that seems to occur when the build process tries to re-run subsequent times

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
