//this is my main test file
import {test , expect } from "@playwright/test"

import { login } from "./login"
import { cart } from "./addtocart";
 
test("pom test framework",async({page})=>{
    //login
    const newlogin =new login(page);
    await newlogin.gotopage();
    await newlogin.loginpage("giridhargiri464@gmail.com","giridhar@123G");
    await page.waitForTimeout(5000);

    //add health book to cart
    const newcart = new cart(page);
    await newcart.cartpage();




})




