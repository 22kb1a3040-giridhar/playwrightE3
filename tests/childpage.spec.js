//syntax 1
import {test, expect} from "@playwright/test"
//syntax 2
//const {test,expect}=require("@playwright/test");
test("handling child page", async ({browser}) => {
    
const context=await browser.newContext()
const page=await context.newPage() ; 

await page.goto("https://testautomationpractice.blogspot.com/");

const pagepromise = context.waitForEvent("page"); 

await page.locator('button[onclick="myFunction()"]').click();

const childpage= await pagepromise;
await childpage.locator('input[class="gsc-input"]').fill("giri");

await childpage.waitForTimeout(5000);


})