
"use strict";

module.exports.config = {
    directConnect: true,
    baseUrl: "http://talkingabouttesting.com/",
    specs: ["spec.js"],
    capabilities: {
        "browserName": "chrome",
        "goog:chromeOptions": {
            "excludeSwitches": [ "enable-automation" ],
            "useAutomationExtension": false
         }
    },
    onPrepare() {
        browser.waitForAngularEnabled(false);
    }
};
