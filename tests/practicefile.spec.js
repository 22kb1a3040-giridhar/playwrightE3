import {test, expect} from "@playwright/test"
test("simple alert", async ({ browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.screenshot({path:"page5.png"});
    const promises = context.waitForEvent('page');
    await page.locator('a[href="http://www.orangehrm.com"]').click();
    const newpage = await promises;
    await newpage.screenshot({fullPage:true,path:"page6.png"});
    await newpage.waitForTimeout(5000);





   







})