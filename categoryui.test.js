const assert = require("assert");
const { Builder, By, Key, until } = require("selenium-webdriver");

jest.setTimeout(30000);

describe("Perform Search", function () {
    it("HomePage -> CategoryPage", async function () {
        let driver = await new Builder().forBrowser("chrome").build();
        try {
            await driver.get("file:///D:/home/sirio/panp4n/categorypage.html");

            // ใช้ CSS selector เพื่อค้นหา element ที่มี attribute href เป็น "/SubCategory/SubCategorySection.html"
            await driver.findElement(By.css('a.product')).click();

            // รอให้หน้าเว็บโหลดเสร็จสมบูรณ์
            await driver.wait(until.titleIs("Sub Category Page"), 10000);

            let pageTitle = await driver.getTitle();
            assert.strictEqual(pageTitle, "Sub Category Page");
            console.log("Page Title:", pageTitle);
        } finally {
            // รอให้ WebDriver ปิดหน้าต่างของเบราว์เซอร์ให้เสร็จสมบูรณ์
            await driver.quit();
        }
    });
});
