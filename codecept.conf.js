/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      device: 'emulator-5554',
      desiredCapabilities: {
        automationName: 'UiAutomator2',
        appPackage: 'com.starkixltd',  // Package name of your app
        appActivity: 'com.starkixltd.MainActivity', // App activity of the app
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'startKix-front'
}