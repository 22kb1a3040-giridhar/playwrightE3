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
    
    await page.context().storageState({path:"auth.json"});
    




})