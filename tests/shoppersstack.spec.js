import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.shoppersstack.com/');
  await page.locator("#loginBtn").click();
  await page.locator('#Email').fill('giridhargiri464@gmail.com');
  await page.locator('#Password').fill('giridhar@123G');
  await page.locator('#Login').click();
  await page.locator('a[id="men"]').click();
  await page.locator('img[src="https://m.media-amazon.com/images/I/71uXQOHweEL._AC_UL400_.jpg"]').click();
  await page.locator('.ProductDisplay_buyNow__4fwjt').click();
  await page.waitForTimeout(5000);


})