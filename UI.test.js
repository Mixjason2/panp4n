const assert = require("assert");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { JSDOM } = require("jsdom");
const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
global.document = dom.window.document;

jest.setTimeout(30000); // เพิ่ม timeout ที่ 30 วินาที

//UI test Test search (content found)
describe("Search Functionality", function () {
  it("Test search (content found)", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get(
        "C:\\Users\\Deede\\panp4n\\ContentPage\\Invest_page.html"
      );
      await driver
        .findElement(By.css(".search-bar input[name='search']"))
        .sendKeys("มือใหม่หัดเริ่มลงทุน", Key.RETURN);
      await driver.wait(
        until.urlContains("/ContentPage/Invest_page.html"),
        10000
      );
      const currentURL = await driver.getCurrentUrl();
      expect(currentURL).toContain("/ContentPage/Invest_page.html");
    } finally {
      await driver.quit();
    }
  });

  //UI test Register successful
  describe("Perform Registration", function () {
    it("Register successful", async function () {
      let driver = await new Builder().forBrowser("chrome").build();
      try {
        await driver.get("file:///C:/Users/Deede/panp4n/register.html");
        await driver.findElement(By.id("username")).sendKeys("sc651010421");
        await driver.findElement(By.id("email")).sendKeys("sc651010421@g.swu.ac.th");
        await driver.findElement(By.id("password")).sendKeys("123456");
        await driver.findElement(By.id("password_confirm")).sendKeys("123456");
        await driver.findElement(By.id("submitbtt")).click();
        await driver.wait(until.alertIsPresent(), 10000);

        let alert = await driver.switchTo().alert();
        let alertText = await alert.getText();
        expect(alertText).toBe("Account created successfully");

        await alert.accept();
      } finally {
        await driver.quit();
      }
    });
  });


});

  //UI test Login -> HomePage
  describe("Perform Search", function () {
    it("Login -> HomePage", async function () {
      let driver = await new Builder().forBrowser("chrome").build();
      try {
        await driver.get("file:///C:/Users/Deede/panp4n/login.html");
        await driver.findElement(By.id("username")).sendKeys("sc651010203");
        await driver
          .findElement(By.id("password"))
          .sendKeys("45600", Key.RETURN);
        await driver.findElement(By.id("login-btn")).click();
        await driver.wait(
          until.elementLocated(By.className("cards-container")),
          10000
        );
        let pageTitle = await driver.getTitle();
        assert.strictEqual(pageTitle, "Homepage");
        let cardsContainer = await driver.findElement(
          By.className("cards-container")
        );
        assert(cardsContainer);
        console.log("Page Title:", pageTitle);
        console.log("Cards Container found:", !!cardsContainer);
      } finally {
        await driver.quit();
      }
    });
  });

 //HomePage -> CategoryPage
  describe("Perform Search", function () {
    it("HomePage -> CategoryPage", async function () {
      let driver = await new Builder().forBrowser("chrome").build();
      try {
        await driver.get("file:///C:/Users/Deede/panp4n/homepage.html");
        await driver.findElement(By.linkText("หมวดหมู่")).click();
        await driver.wait(until.titleIs("Category Page"), 10000);
        let pageTitle = await driver.getTitle();
        assert.strictEqual(pageTitle, "Category Page");
        console.log("Page Title:", pageTitle);
      } finally {
        await driver.quit();
      }
    });
  });