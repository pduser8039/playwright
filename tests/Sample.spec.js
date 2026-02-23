import{test, method, expect} from '@playwright/test'
const data = JSON.parse(JSON.stringify(require("../Data.json")))
import { LoginPage } from '../pages/loginpage'
const data1 = JSON.parse(JSON.stringify(require('../Data.json')))

test.skip('Practice', async function({page}){

    await page.goto('https://freelance-learn-automation.vercel.app/signup')
    //const text = await page.locator('#month').textContent()

    const ele =  await page.locator('#hobbies')
    //const elements = await ele.$$('option')

    await ele.selectOption(['Playing' ,'Reading'])
    
})

test('Login Page Test', async ({page}) => {

    await page.goto('https://www.facebook.com/')

    const lp = new LoginPage(page)

    await lp.loginToApplication(data1.username, data1.password)

    await lp.verifyErrorMessage()
    
    
})


            
