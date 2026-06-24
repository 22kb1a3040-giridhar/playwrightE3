import {test, expect} from "@playwright/test";
//gift card , book , computer , smartphone
let items=['shoes','shirt','pant','mobile']


for(let x of items){
test(`dd1${x}`,async({page})=>{
        await page.goto('https://www.flipkart.com/');
        await page.locator('input[class="nw1UBF v1zwn25"]').nth(1).fill(x).click();

        // await page.waitForTimeout(5000);
        // await page.locator('').click()
        // await page.waitForTimeout(5000);
    })
}