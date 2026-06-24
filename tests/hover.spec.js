import {test, expect} from "@playwright/test"
test("double click", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator(".dropbtn").hover();
    let message=await page.getByRole("link",{name:"Mobiles"});
    expect(message).toHaveText("Mobiles");
    await page.waitForTimeout(5000)







})