import{test, expect} from "@playwright/test";
test("iframes",async({page})=>{
    await page.goto("https://ui.vision/demo/iframes");

    const innerframe = await page.frame({url:"https://docs.google.com/forms/d/e/1FAIpQLScP-K8zi-9ar0MCq93D3VIFhegSNPveBfdLqiMfTYR9Q1iSKQ/viewform?embedded=true"});

    await innerframe.locator(".Id5V1").nth(1).click();

    await innerframe.locator(".eBFwI").nth(1).click();

     await innerframe.locator('span[class="vRMGwf oJeWuf"]').nth(1).getByText("Yes");
     
     await innerframe.waitForTimeout(5000);

     await innerframe.getByText('Next', { exact: true }).click();

     await innerframe.waitForTimeout(5000);

     await innerframe.locator('input[class="whsOnd zHQkBf"]').fill("Hi");

     await innerframe.locator('.tL9Q4c').fill("Hello");


     await innerframe.locator('span[class="NPEfkd RveJvd snByac"]').nth(1).click();

     await innerframe.waitForTimeout(5000);







})