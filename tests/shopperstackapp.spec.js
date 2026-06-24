import { test, expect } from '@playwright/test';
test('endtoendtest', async ({ page }) => {
    await page.goto("https://www.shoppersstack.com/admin-signup");
   await page.locator("#loginBtn").click();
   await page.locator("#vertical-tab-2").click();
   await page.locator(".MuiButton-label").last().click();
   await page.getByLabel("First Name").fill("giri");
   await page.getByLabel("Last Name").fill("Naidu");
   await page.locator("#Male").click();
   await page.getByLabel("Phone Number").fill("9784563798");
   await page.getByLabel("Email Address").fill("giri985@gmail.com");
   await page.locator("#Password").fill("Giri@123$");
   await page.locator('input[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense"]').last().fill("Giri@123$");
   await page.locator("#Country").first().selectOption("India");
   await page.locator("#State").selectOption("Andhra Pradesh");
   await page.locator("#City").selectOption("Kadapa");
   await page.getByRole("button",{name:"Register"}).click();
   await page.waitForTimeout(5000);
})