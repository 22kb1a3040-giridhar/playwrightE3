import { test, expect } from '@playwright/test';
test('singleFileInput', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#multipleFilesInput").setInputFiles(["Giridhar_resume4.pdf","acer_laptop_warranty.pdf"])
    await page.waitForTimeout(5000);

    
})