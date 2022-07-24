const dashboardCommand = {
    waitforDashbord: function (browser) {
        return this
            .waitForElementVisible('@nameHeader', 30000)
            .assert.visible('@nameHeader')
            //this.elements.nameHeader
            //this.commands.waitforDashbord
            //this.sections.xyz
    },

    isHeaderVisible: function (browser) {
        return this.assert.visible('@nameHeader')
    },
    verifyHeaderVisible: function (browser) {
      return this.verify.visible('@nameHeader')
    }, isHeaderPresentExpect: function (browser) {
        return this.expect.element('@nameHeader').to.be.present;
    },
};
module.exports = {
    commands: [dashboardCommand],
    elements: {
        nameHeader: 'h2.hero-header__user-name',
    }
};