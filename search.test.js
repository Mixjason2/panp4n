const assert = require("assert");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;


jest.setTimeout(20000);

describe("Search Functionality", function () {
  it("should redirect to the correct URL if search query is found", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("C:\\Users\\Deede\\panp4n\\ContentPage\\Invest_page.html");
      await driver.findElement(By.css(".search-bar input[name='search']")).sendKeys("มือใหม่หัดเริ่มลงทุน", Key.RETURN);
      await driver.wait(until.urlContains("/ContentPage/Invest_page.html"), 10000);
      const currentURL = await driver.getCurrentUrl();
      expect(currentURL).toContain("/ContentPage/Invest_page.html");
    } finally {
      await driver.quit();
    }
  });

const showSearchSuggestions = () => {
  const topics = [
    "วิธีการคำนวณภาษีเบื้องต้น",
    "มือใหม่เริ่มลงทุน",
    "การปฐมพยาบาลเบื้องต้น",
    "วิธีการจัดการความเครียด",
    "อวัยวะเหล่านี้กลัวอะไร?",
    "สุขภาพผิวดี ทำได้ง่ายๆ",
    "ทักษะในการเขียนอีเมลเบื้องต้นในภาษาอังกฤษ",
    "สำนวนภาษาอังกฤษน่ารู้",
    "เทคนิคการพูดจาโน้มน้าวใจ",
    "มารยาทตามหลักสากล",
    "วิธีสร้างความมั่นใจให้คนขี้อาย",
    "เมนูมื้อเย็น ช่วงลดน้ำหนัก",
    "สารอาหารที่จำเป็นต่อร่างกาย",
    "กราฟคืออะไร",
    "เรียนยังไง ให้ได้ 4.00",
    "เคล็ดลับการบริหารเวลา",
    "แชร์วิธีทำแพลนเที่ยว",
    "กฎหมายเบื้องต้น",
    "วิธีเอาตัวรอดจากแผ่นดินไหว",
    "จัดกระเป๋าเดินทางไปต่างประเทศ"
  ];
  const datalist = document.getElementById("search-suggestions");
  datalist.innerHTML = ""; // เคลียร์ค่าที่อยู่ใน datalist ก่อนที่จะเพิ่มใหม่
  topics.forEach(topic => {
      const option = document.createElement("option");
      option.value = topic;
      datalist.appendChild(option);
  });
}

describe('showSearchSuggestions', () => {
  test('Search suggestions are displayed', () => {
      // Arrange
      const testInput = document.createElement('input');
      testInput.id = 'search-bar';

      document.body.appendChild(testInput);
      const testDatalist = document.createElement('datalist');
      testDatalist.id = 'search-suggestions';
      document.body.appendChild(testDatalist);

      const testTopics = [
        "วิธีการคำนวณภาษีเบื้องต้น",
        "มือใหม่เริ่มลงทุน",
        "การปฐมพยาบาลเบื้องต้น",
        "วิธีการจัดการความเครียด",
        "อวัยวะเหล่านี้กลัวอะไร?",
        "สุขภาพผิวดี ทำได้ง่ายๆ",
        "ทักษะในการเขียนอีเมลเบื้องต้นในภาษาอังกฤษ", 
        "สำนวนภาษาอังกฤษน่ารู้",
        "เทคนิคการพูดจาโน้มน้าวใจ",
        "มารยาทตามหลักสากล",
        "วิธีสร้างความมั่นใจให้คนขี้อาย",
        "เมนูมื้อเย็น ช่วงลดน้ำหนัก",
        "สารอาหารที่จำเป็นต่อร่างกาย",
        "กราฟคืออะไร",
        "เรียนยังไง ให้ได้ 4.00",
        "เคล็ดลับการบริหารเวลา",
        "แชร์วิธีทำแพลนเที่ยว",
        "กฎหมายเบื้องต้น",
        "วิธีเอาตัวรอดจากแผ่นดินไหว",
        "จัดกระเป๋าเดินทางไปต่างประเทศ"

      ];
      // Act
      showSearchSuggestions();
      // Assert
      const suggestions = document.getElementById('search-suggestions').children;
      expect(suggestions.length).toBe(testTopics.length);
      for (let i = 0; i < testTopics.length; i++) {
          expect(suggestions[i].value).toBe(testTopics[i]);
      }
      // Clean up
      document.body.removeChild(testInput);
      document.body.removeChild(testDatalist);
  });
});



});
