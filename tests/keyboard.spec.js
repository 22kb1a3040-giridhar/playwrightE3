import {test, expect} from "@playwright/test"
test("simple alert", async ({ page }) => {
await page.goto("https://gotranscript.com/text-compare");
await page.getByPlaceholder("Paste one version of the text here.").fill("hi! This is playwright automation");
await page.keyboard.press("Control+A");
await page.keyboard.press("Control+c");
await page.keyboard.press("Tab");
await page.keyboard.press("Control+v");
await page.waitForTimeout(5000);



})