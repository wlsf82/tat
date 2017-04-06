"use strict";

module.exports.config = {
    directConnect: true,
    baseUrl: "http://talkingabouttesting.com/",
    specs: ["spec.js"],
    capabilities: {
        "browserName": "chrome",
        "chromeOptions": {
            "args": ["--disable-infobars"]
        }
    },
    onPrepare() {
        browser.ignoreSynchronization = true;
    }
};
