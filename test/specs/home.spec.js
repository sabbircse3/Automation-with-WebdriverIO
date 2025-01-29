const homeActions = require("../pages/home/homeActions");
describe("Demo Evershop site search", () => {
    it("Search with valid product", async () => {
        await homeActions.clickOnSearchIcon();
        await homeActions.enterSearchedProduct();
        await browser.keys("Enter");
    });
});