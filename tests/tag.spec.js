import {test , expect} from "@playwright/test"
test("double click @reg", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByRole("button",{name:"Copy Text"}).dblclick();
    await page.waitForTimeout(5000)
})
test("scrrenshoot 1 @san", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.screenshot({path:"page1.png"})
})
test("drag and drop @reg", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.dragAndDrop("#draggable","#droppable")
    await page.waitForTimeout(4000);
})
test("multipleselections @smoke", async ({ page }) => {
     await page.goto("https://testautomationpractice.blogspot.com/");
     await page.selectOption('#colors',['Red','Green','White']);
     await page.waitForTimeout(5000);

})
test("simple alert @fun", async ({ page }) => {
await page.goto("https://gotranscript.com/text-compare");
await page.getByPlaceholder("Paste one version of the text here.").fill("hi! This is playwright automation");
await page.keyboard.press("Control+A");
await page.keyboard.press("Control+c");
await page.keyboard.press("Tab");
await page.keyboard.press("Control+v");
await page.waitForTimeout(5000)
})
