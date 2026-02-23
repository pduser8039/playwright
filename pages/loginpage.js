const { expect } = require("@playwright/test")

exports.LoginPage = 

class LoginPage{

    constructor(page){
        this.page = page
        this.username = "//input[@name='email']"
        this.password = "//input[@name='pass']"
        this.login = "//span[text()='Log in']"
        this.errormsg = "//span[contains(text(),'The email address or mobile number')]"
    }

    async loginToApplication(uname, pswd){
        await this.page.locator(this.username).fill(uname)
        await this.page.locator(this.password).fill(pswd)
        await this.page.locator(this.login).click()
    }

    async verifyErrorMessage(){
        await this.page.waitForLoadState('networkidle')
        expect(await this.page.locator(this.errormsg)).toBeVisible()
    }

}