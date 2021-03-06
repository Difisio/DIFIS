// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appid: '5b6a8688905612106e976a69',
//  EX_GATEWAY: 'https://test.blockchaingate.com/v2/payment/gateway',
//  EX_WEBSITE: 'http://localhost:4200/',
  endpoints: {
    blockchaingate: 'https://test.blockchaingate.com/v2/', 
    website: 'http://localhost:4200/',
  }
   
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
