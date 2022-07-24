const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const geckodriver = require("geckodriver");

module.exports  = {
    "src_folders": ["tests"],
    "output_folder": "reports",
    "custom_commands_path": "",
    "custom_assertions_path": "",
    "page_objects_path": "pages",
    "globals_path": "globals.js",
    "test_workers": {
        "enabled": true,
        "workers": "auto"
      },
    "selenium": {
      "start_process": false,
      "server_path": seleniumServer.path,
      "start_session": true,
      "log_path": "log/",
      "host": "hub-cloud.browserstack.com",
      "port": 80,
      "username": "maheshshirsath1",
      "access_key":"SU9y6NeCnqjcHEC8Ryah",
      "cli_args": {
          "webdriver.chrome.driver": chromedriver.path,
          "webdriver.gecko.driver" : geckodriver.path,
          "webdriver.edge.driver": ""
      },
      globals: {
        "waitForConditionTimeout": 10000    // wait for content on the page before continuing
      }
    },
  
    test_settings: {
      default: {
        launch_url: 'https://www.stage2.royalcaribbean.com/account/signin',
        desiredCapabilities: {
        //selenium_port: 80,
        //selenium_host: "hub-cloud.browserstack.com",
        //'browserstack.user' : 'maheshshirsath1',
        //'browserstack.key' :'SU9y6NeCnqjcHEC8Ryah',
        browserName: "chrome",
        //name: 'Bstack-Nightwatch Sample Test',
        chromeOptions: {
            w3c: false
          }
        }
      },
      chromewindows:{
        desiredCapabilities: {
        browserName: "chrome",
        platform: "Windows",
        version: "72",
        chromeOptions: {
          w3c: false
        }
        }
      },
      chromemac:{
        desiredCapabilities: {
        browserName: "chrome",
        platform: "MAC",
        version: "72",
        chromeOptions: {
          w3c: false
        }
        }
      },
      firefoxwindows : {
        desiredCapabilities: {
          platform: "XP",
          browserName: "firefox",
          version: "33"
        }
      }, 
      safari : {
        desiredCapabilities: {
          platform: "MAC",
          browserName: "safari"
        }
      }
    }
  }