import {test,expect} from "@playwright/test";

test("positive login test", async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.getByLabel("")

    





    await page.waitForTimeout(5000);
})
test("negative username test", async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");




await page.waitForTimeout(5000);
})

test("negative password test", async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");








await page.waitForTimeout(5000);
})
