var webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const { By, until } = webdriver;

describe("webdriver", () => {
  let driver;

  beforeEach(async () => {
    var chromeOptions = new chrome.Options();

    driver = new webdriver.Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();
    await driver.get("D:\\home\\sirio\\panp4n\\categorypage.html");
    
  }, 30000);
  afterEach(async () => {
    await driver.close();
  }, 40000);

  // test case
  test("Click Menu การเข้าสังคม", async () => {

    await driver.findElement(webdriver.By.xpath("/html/body/div/div[1]/div[1]/a/div")).click();
    expect(true);
  });

  test("Click Menu การลงทุน", async () => {

    await driver.findElement(webdriver.By.xpath("/html/body/div/div[1]/div[2]/a/div")).click();
    expect(true);
  });

  test("Click Menu การเรียน", async () => {

    await driver.findElement(webdriver.By.xpath("/html/body/div/div[1]/div[3]/a/div")).click();
    expect(true);
  });

  test("Click Menu การวางแผนและการจัดการเวลา", async () => {

    await driver.findElement(webdriver.By.xpath("/html/body/div/div[1]/div[4]/a/div")).click();
    expect(true);
  });

  test("Click Menu การสื่อสาร", async () => {

    await driver.findElement(webdriver.By.xpath("/html/body/div/div[2]/div[1]/a/div")).click();
    expect(true);
  });

  test("Click Menu สุขภาพ", async () => {

    await driver.findElement(webdriver.By.xpath("/html/body/div/div[2]/div[2]/a/div")).click();
    expect(true);
  });

  test("Click Menu อาหาร", async () => {

    await driver.findElement(webdriver.By.xpath("/html/body/div/div[2]/div[3]/a/div")).click();
    expect(true);
  });

  test("Click Menu อื่นๆ", async () => {

    await driver.findElement(webdriver.By.xpath("/html/body/div/div[2]/div[4]/a/div")).click();
    expect(true);
  });
});