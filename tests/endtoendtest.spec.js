import { test, expect } from '@playwright/test';

test('endtoendtest', async ({ page }) => {
    //go to url
    await page.goto('https://demowebshop.tricentis.com/');
    //click the login 
    await page.locator('.ico-login').click();
    //go to email
    await page.locator('#Email').fill('hsbharat123@gmail.com');
    //go to password
    await page.locator('#Password').fill('Bharat@1234');
    //click login button
    await page.locator('.login-button').click();

    await page.locator('a[href="/books"]').first().click();

    await page.locator('#products-orderby').selectOption('Price: High to Low');

    await page.locator('#products-pagesize').selectOption("12");

     await page.locator('#products-viewmode').selectOption('Grid');

     await page.locator('h2 a[href="/health"]').click();

     await page.locator('#add-to-cart-button-22').click();
     await page.locator('.cart-label').filter({hasText:"Shopping cart"});

     await page.waitForTimeout(10000);
})


    