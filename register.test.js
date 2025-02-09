const assert = require("assert");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { JSDOM } = require("jsdom");
const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
global.document = dom.window.document;

jest.setTimeout(30000); // เพิ่ม timeout ที่ 30 วินาที

describe("Perform Registration", function () {
  it("Check if you can register the account", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    try {

      await driver.get("C:\\Users\\Deede\\panp4n\\register.html");
      // ทดสอบกรณีที่การสมัครสำเร็จ
      await driver.findElement(By.id("username")).sendKeys("test01");
      await driver.findElement(By.id("email")).sendKeys("test01@g.swu.ac.th");
      await driver.findElement(By.id("password")).sendKeys("111111");
      await driver.findElement(By.id("password_confirm")).sendKeys("111111");
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

describe("checkPasswordMatch function", function () {
  it("should show error message if passwords do not match", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("C:\\Users\\Deede\\panp4n\\register.html");

      // รอให้ element ที่มี id เป็น "password" โหลดเสร็จสมบูรณ์
      await driver.wait(until.elementLocated(By.id("password")), 5000);

      // เตรียมข้อมูลสำหรับทดสอบ
      await driver.findElement(By.id("username")).sendKeys("test01");
      await driver.findElement(By.id("email")).sendKeys("test01@g.swu.ac.th");
      await driver.findElement(By.id("password")).sendKeys("123456");
      await driver.findElement(By.id("password_confirm")).sendKeys("111111");
      await driver.findElement(By.id("submitbtt")).click();
      // รอให้ Element ที่แสดงข้อความผิดพลาดโหลดเสร็จสมบูรณ์
      await driver.wait(until.elementLocated(By.className("form-control error")), 5000);

      // ตรวจสอบข้อความผิดพลาดที่แสดงบนหน้าเว็บ
      let errorMessageElement = await driver.findElement(By.className("form-control error"));
      let errorMessage = await errorMessageElement.getText();
      expect(errorMessage).toContain("Passwords do not match");
      console.log(errorMessage);
    } finally {
      await driver.quit();
    }
  });
});

describe("checkLength min version function", function () {
  it("should show error message if length of passwords lower than 6", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("C:\\Users\\Deede\\panp4n\\register.html");

      // รอให้ element ที่มี id เป็น "password" โหลดเสร็จสมบูรณ์
      await driver.wait(until.elementLocated(By.id("password")), 5000);

      // เตรียมข้อมูลสำหรับทดสอบ
      await driver.findElement(By.id("username")).sendKeys("test01");
      await driver.findElement(By.id("email")).sendKeys("test01@g.swu.ac.th");
      await driver.findElement(By.id("password")).sendKeys("123");
      await driver.findElement(By.id("password_confirm")).sendKeys("123");
      await driver.findElement(By.id("submitbtt")).click();
      // รอให้ Element ที่แสดงข้อความผิดพลาดโหลดเสร็จสมบูรณ์
      await driver.wait(until.elementLocated(By.className("form-control error")), 5000);

      // ตรวจสอบข้อความผิดพลาดที่แสดงบนหน้าเว็บ
      let errorMessageElement = await driver.findElement(By.className("form-control error"));
      let errorMessage = await errorMessageElement.getText();
      expect(errorMessage).toContain("Password must be at least 6 characters");
      console.log(errorMessage);
    } finally {
      await driver.quit();
    }
  });
});

describe("checkLength max version function", function () {
  it("should show error message if length of passwords higher than 16", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("C:\\Users\\Deede\\panp4n\\register.html");

      // รอให้ element ที่มี id เป็น "password" โหลดเสร็จสมบูรณ์
      await driver.wait(until.elementLocated(By.id("password")), 5000);

      // เตรียมข้อมูลสำหรับทดสอบ
      await driver.findElement(By.id("username")).sendKeys("test01");
      await driver.findElement(By.id("email")).sendKeys("test01@g.swu.ac.th");
      await driver.findElement(By.id("password")).sendKeys("12345678910111213");
      await driver.findElement(By.id("password_confirm")).sendKeys("12345678910111213");
      await driver.findElement(By.id("submitbtt")).click();
      // รอให้ Element ที่แสดงข้อความผิดพลาดโหลดเสร็จสมบูรณ์
      await driver.wait(until.elementLocated(By.className("form-control error")), 5000);

      // ตรวจสอบข้อความผิดพลาดที่แสดงบนหน้าเว็บ
      let errorMessageElement = await driver.findElement(By.className("form-control error"));
      let errorMessage = await errorMessageElement.getText();
      expect(errorMessage).toContain("Password must be less than 16 characters");
      console.log(errorMessage);
    } finally {
      await driver.quit();
    }
  });
});


