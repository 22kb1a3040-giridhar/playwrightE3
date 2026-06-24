import{test , expect} from "@playwright/test";
test("rahul shetty", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill("giriabc@gmail.com");
    await page.getByPlaceholder('enter your passsword').fill("abc@123G");
    await page.getByRole("button",{name:"Login"}).click();
   
    let welcome = await page.locator(".blinkingText");
     expect(welcome).toHaveText("Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire");
     await page.locator('button[class="btn w-10 rounded"]').nth(0).click();
     await page.waitForTimeout(5000); 


})