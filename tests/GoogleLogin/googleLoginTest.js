module.exports = {
    '@tags': ['login'], // Defininig tags for categoising tests
    '@disabled': true, // This will prevent the test module from running. if True
    before: function (browser) {
      console.log('Before Starting all tests...');
    },
    after: function () {
      console.log('After End of all tests...');
    },

    'Google Search': function (browser) {
      const google = browser.page.GoogleSearch();
      google.navigate().search();

    },

    'Google Login': function (browser) {
      const google = browser.page.GoogleSearch();
      google.navigate().signin();

    }
  };