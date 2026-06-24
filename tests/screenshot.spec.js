import {test, expect} from "@playwright/test"
//type 1 ---->visible part of the screen will be taken as a screen shot 
test("scrrenshoot 1", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.screenshot({path:"page1.png"});
})
// type 2 ---->visible part of the screen will be taken as a screen shot 
test("scrrenshoot 2", async ({ page }) => {
    

   await page.goto("https://demowebshop.tricentis.com/");
    await page.screenshot({fullPage:true,path:"page2.png"});


})

//type 3 ---->visible part of the screen will be taken as a screen shot 
test("scrrenshoot 3", async ({ page }) => {
    

   await page.goto("https://demowebshop.tricentis.com/");
  await page.locator('a[href="https://academy.tricentis.com"]').screenshot({path:"page4.png"});
  await page.waitForTimeout(5000);


})


