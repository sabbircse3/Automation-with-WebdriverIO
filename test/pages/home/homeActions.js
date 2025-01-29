const homeObjects = require("./homeObjects");
class HomeActions {
    async clickOnSearchIcon(){
        await homeObjects.searchIcon.click();
    }
    async enterSearchedProduct(){
        await homeObjects.searchInputField.setValue("Nike react");
    }
}
module.exports = new HomeActions();