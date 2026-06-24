import {test, expect} from "@playwright/test"
test("modernlocator", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.getByRole("link",{name:"Log in"}).click();
    await page.getByLabel("Email:").fill("giridhargiri464@gmail.com");
    await page.getByLabel("Password:").fill("giridhar@123G");
    await page.getByRole("button",{name:"Log in"}).click();
    let loggedin =await page.locator(".ico-logout");
    expect(loggedin).toHaveText("Log out");
    await page.locator("#small-searchterms").fill("gift card");
    await page.getByRole("button",{name:"Search"}).click();
    let giftcard=await page.getByRole("link",{name:"$100 Physical Gift Card"}).last();
    expect(giftcard).toHaveText("$100 Physical Gift Card");

    await page.waitForTimeout(5000);


})