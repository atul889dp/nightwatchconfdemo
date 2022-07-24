const loginCommands = {
    signin: function () {
        return this
            .waitForElementVisible('@usernameTxt', 30000)
            .setValue('@usernameTxt', this.api.globals.username)
            .waitForElementVisible('@passwordTxt', 30000)
            .setValue('@passwordTxt', this.api.globals.password)
            .waitForElementVisible('@submitBtn', 30000)
            .click('@submitBtn')
            .waitForElementVisible()
    }
};
module.exports = {
    commands: [loginCommands],
    url: function () {
        return this.api.launchUrl;
    },
    elements: {
        usernameTxt: 'input#mat-input-0',
        passwordTxt: 'input#mat-input-1',
        submitBtn: 'button.btn-signin'
    }
};