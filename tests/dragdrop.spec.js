//1st method
import {test, expect} from "@playwright/test"
test("drag and drop", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.dragAndDrop("#draggable","#droppable")
    await page.waitForTimeout(4000);
})

//2nd method
import {test, expect} from "@playwright/test"
test("double click", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const item=await page.locator("#draggable");
    const target=await page.locator("#droppable");
    await item.dragTo(target);
    await page.waitForTimeout(4000);
})
//3rd method
import {test, expect} from "@playwright/test"
test("double click", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const item=await page.locator("#draggable");
    const target=await page.locator("#droppable");
    await item.hover();
    await page.mouse.down();
     await target.hover();
    await page.mouse.up();

})
