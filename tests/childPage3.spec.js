import {test , expect} from "@playwright/test"

test("child page" , async ({browser})=>{

    const context = await browser.newContext(); 
    const page = await context.newPage() ; 

    await page.goto("https://testautomationpractice.blogspot.com/"); 

    const pagePromise = context.waitForEvent("page")

    await page.getByRole("button", {name :"New Tab"}).click() ;
    
    const childpage = await pagePromise; 

    await childpage.locator() 



    



})
