module.exports = {
    username: 'automationuser@rccl.com',
    password: 'password1',

    gmailUser: 'Globantautomation@gmail.com',
    gmailPass: 'Globant@1234',

    // this controls whether to abort the test execution when an assertion failed and skip the rest
    // it's being used in waitFor commands and expect assertions
    abortOnAssertionFailure: false,

    // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
    // expect assertions
    waitForConditionTimeout: 30000,

    //define in milliseconds to automatically retry failed assertions until a given timeout is reached 
    retryAssertionTimeout: 2000, 
    //You can define the polling interval in milliseconds
    waitForConditionPollInterval: 10
}