import{test,expect} from "@playwright/test"
test("simple alert", async ({ browser }) => {
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder("Username").fill("Admin");
await page.getByPlaceholder("Password").fill("admin123");

await page.locator('a[href="http://www.orangehrm.com"]').click();

await page.waitfortimeout(5000);



})
