require('assert')

module.exports = {
    '@tags': ['login'],
    '@disabled': false,
    before: function (browser) {
      console.log('Before Starting all tests...');
    },
  
    beforeEach: function (browser) {
      console.log('Executed Before Each Method');
      const login = browser.page.login();
      login.navigate().signin();
      
    },
  
    afterEach: function (browser) {
      console.log('Executed After Each Method');
      browser.end();
    },
  
    after: function () {
      console.log('After End of all tests...');
    },

    'Login and Verify RC Dashboard': function (browser) {
      const dashboard = browser.page.dashboard();
      dashboard.waitforDashbord().isHeaderVisible().verifyHeaderVisible().isHeaderPresentExpect();
    }
  };  