import{test, expect} from "@playwright/test";
let users=[['hsbharat123@gmail.com','Bharat@1234'],
['bansari13@gmail.com','Bansari@1234'],
['sdetanil3@gmail.com','Test@123$']]


for(let [email, password] of users){
test(`dd2 ${email} and ${password}`, async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator('a[class="ico-login"]').click();
    await page.locator('#Email').fill(email);
    await page.locator('#Password').fill(password);
    await page.locator('input[class="button-1 login-button"]').click();
    await page.waitForTimeout(5000);
    

})
}