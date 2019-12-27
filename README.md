# FirebaseMicrosoftAuth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

### Required dependencies
  (Already Added in the project)
 ```
-> @microsoft/microsoft-graph-client
-> firebase
-> isomorphic-fetch
```

### Need to Update for your project

your firebase configuration
```
export const environment = {
  production: false,
  firebase: {
    apiKey: 'your firebase configuration',
    authDomain: 'your firebase configuration',
    databaseURL: 'your firebase configuration',
    projectId: 'your firebase configuration',
    storageBucket: 'your firebase configuration',
    messagingSenderId: 'your firebase configuration',
    appId: 'your firebase configuration'
  }
};
```
your microsoft configuration
```
prompt: 'select_account',
tenant: 'your microsoft tenant id',
client_id: 'your microsoft client id',
response_type: 'code id_token',
redirect_uri: 'firebase redirecting uri'
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
