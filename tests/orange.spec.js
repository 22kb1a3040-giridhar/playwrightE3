import {test, expect} from "@playwright/test"
//syntax 2
//const {test,expect}=require("@playwright/test");
test("handling child page", async ({ browser }) => {
   const context  = await browser.newContext();
   const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByRole('textbox', { name: 'Username' }).fill("Admin");
    await page.getByRole('textbox', { name: 'Password' }).fill("Admin@123");
    await page.screenshot({path:"org1.png"});
    await page.getByRole('link', { name: 'OrangeHRM, Inc' }).click();
    await page.waitForTimeout(5000);





})