require("chromedriver");

// import this classes from selenium
const path = require('path');
const { Builder, By, Key, until } = require("selenium-webdriver");
var assert = require("assert");

jest.setTimeout(50000); 

describe("Perform Search", function () {
  it("Check if you can login to the home page", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("file:///C:/Users/Deede/panp4n/login.html");

      await driver.findElement(By.id("username")).sendKeys("sc651010203");
      await driver.findElement(By.id("password")).sendKeys("45600", Key.RETURN);
      await driver.findElement(By.id("login-btn")).click();

      // รอให้หน้าเว็บโหลดเสร็จสมบูรณ์
      await driver.wait(until.elementLocated(By.className("cards-container")), 10000);

      // ตรวจสอบหัวข้อหน้าเว็บ
      let pageTitle = await driver.getTitle();
      assert.strictEqual(pageTitle, "Homepage");

      // ตรวจสอบคลาส "cards-container" ที่มีอยู่ในหน้า homepage
      let cardsContainer = await driver.findElement(By.className("cards-container"));
      assert(cardsContainer);

      console.log("Page Title:", pageTitle);
      console.log("Cards Container found:", !!cardsContainer);
    } finally {
      await driver.quit();
    }
  });
});


