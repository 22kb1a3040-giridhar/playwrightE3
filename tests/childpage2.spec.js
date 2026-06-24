import {test , expect} from "@playwright/test"
test("child page" , async ({browser})=>{
const context = await browser.newContext();

const page = await context.newPage();

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

const promise = context.waitForEvent("page");

await page.locator('a[href="http://www.orangehrm.com"]').click();

const childpage = await promise;

await childpage.locator('button[class="footer-btn"]').click();

await childpage.waitForTimeout(5000);




})