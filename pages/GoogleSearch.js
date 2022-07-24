const googleCommands = {
    search: function () {
        return this
            .waitForElementVisible('@searchTxt')
            .setValue('@searchTxt', "Nightwatch js")
            .waitForElementVisible('@submitBtn')
            .click('@submitBtn')
    },
    signin: function () {
        return this
            .waitForElementVisible('@siginBtn')
            .click('@siginBtn')
            .waitForElementVisible('@emailText')
            .setValue('@emailText', this.api.globals.gmailUser)
            .click('@emailNextBtn')
            .waitForElementVisible('@passwordTxt')
            .setValue('@passwordTxt', this.api.globals.gmailPass)
            .click('passNextBtn')
    },
    enterusername: function () {
        return this           
            .waitForElementVisible('@emailText')
            .setValue('@emailText', this.api.globals.gmailUser)
            .click('@emailNextBtn')
   },
   enterpassword: function () {
    return this           
            .waitForElementVisible('@passwordTxt')
            .setValue('@passwordTxt', this.api.globals.gmailPass)
            .click('passNextBtn')
}
};
module.exports = {
    commands: [googleCommands],
    url: function () {
        return "https://www.google.co.in";
    },
    elements: {
        searchTxt: 'input.gLFyf.gsfi',
        siginBtn: 'a#gb_70',
        emailText: 'input#identifierId',
        passwordTxt: {selector: 'input[name="password"]',locateStrategy: 'xpath'},
        emailNextBtn: {selector: '//*[@id="identifierNext"]/span/span',locateStrategy: 'xpath'},
        passNextBtn: {selector: '//*[@id="passwordNext"]/span/span',locateStrategy: 'xpath'},
        submitBtn: 'input.gNO89b'
    }
};