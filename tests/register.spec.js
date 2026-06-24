import { test, expect} from "@playwright/test";

test("register @ demo webshop", async({page})=>{
    //navigate to url
    await page.goto("https://demowebshop.tricentis.com/");
    //click on register
    await page.locator(".ico-register").click();
    //click on gender
    await page.locator("#gender-male").check();
    //click on firstname
    await page.locator("#FirstName").fill("giri");
    //click on last name 
    await page.locator("#LastName").type("G N");
    //click on email
    await page.locator("#Email").fill("abc@gmail.com")
    //click on password
    await page.locator("#Password").fill("abc@123");
    //click on confirmpassword
    await page.locator("#ConfirmPassword").fill("abc@123")
    await page.waitForTimeout(5000);
    //click on register button
    await page.locator("#register-button").click();





}
)