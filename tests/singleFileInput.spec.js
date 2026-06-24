import { test, expect } from '@playwright/test';
test('singleFileInput', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#singleFileInput").setInputFiles("Giridhar_resume4.pdf")
    await page.waitForTimeout(5000);

    
})