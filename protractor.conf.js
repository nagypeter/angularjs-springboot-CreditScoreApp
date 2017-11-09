exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['angular_test1.js'],
  capabilities: {
    browserName: 'chrome',

    chromeOptions: {
      args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    }
  }
};