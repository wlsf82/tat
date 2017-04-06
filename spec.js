"use strict";

describe("Talking About Testing", () => {
    it("should show logo", () => {
        browser.get("sobre");
        expect(element(by.css(".custom-logo")).isDisplayed()).toBe(true);
    });
});
