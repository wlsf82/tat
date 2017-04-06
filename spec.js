"use strict";

describe("Talking About Testing", () => {
    it("should show logo", () => {
        browser.get("sobre");
        // The below sleep is here just to make the test run slower and allow me to take a screenshot during its execution
        browser.sleep(15000);

        expect(element(by.css(".custom-logo")).isDisplayed()).toBe(true);
    });
});
