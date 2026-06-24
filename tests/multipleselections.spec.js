import {test, expect} from "@playwright/test"
test("multipleselections", async ({ page }) => {
     await page.goto("https://testautomationpractice.blogspot.com/");
     await page.selectOption('#colors',['Red','Green','White']);
     await page.waitForTimeout(5000);

})