// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  kitchenSink: false, // true to show Kitchen Sink link in side menu
  mockApiData: true, // true to use static mock data for all API services
  mockApiSimulatedDelayDuration: 1000, // duration in milliseconds
  mockAutoLogin: true, // true to simulate that user is always logged in
  mockStaffLogin: true, // true to simulate that user is staff; use together with mockAutoLogin
  mockAutoUserAccounts: true, // true to simulate that there are already multiple user accounts on the device
  mockUserAccountsMultiple: false, // true to simulate multiple user accounts in the static mock data
  mockStaffUserAccount: true, // true to simulate that there is a staff user account on the device
  mockBiometrics: true, // true to simulate biometrics for testing with localhost in browsers
  mockHasNoBiometrics: false, // true to simulate that device has no biometrics
  mockUserIdleTime: 60 * 20, // 60 seconds * 20 minutes
  mockSessionExpired: true, // true to simulate Session Expired scenario when logging in
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
