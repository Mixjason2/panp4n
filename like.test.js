const { JSDOM } = require('jsdom');
const { localStorageMock } = require('mock-local-storage');
const { like } = require('./like');
const { handleWindowLoad } = require('./like');


// Mock localStorage
global.localStorage = localStorageMock;

describe('Like Functionality', () => {
  // Mock HTML และกำหนดค่าเริ่มต้นของไลค์ใน localStorage
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
    <body>
      <span id="counter">0</span>
      <span id="currentLikes">0</span>
    </body>
    </html>
  `);
  global.document = dom.window.document;

  beforeEach(() => {
    localStorage.clear(); // ล้างข้อมูลใน localStorage ก่อนทุกครั้งที่รัน test
  });

  test('Clicking like button increases like count', () => {
    like();
    const counterElement = document.getElementById('counter');
    const currentLikesElement = document.getElementById('currentLikes');
    expect(counterElement.textContent).toEqual('1');
    expect(currentLikesElement.textContent).toEqual('1');
  });

  test('Clicking like button multiple times increases like count accordingly', () => {

    like();
    like();
    like();

    const counterElement = document.getElementById('counter');
    const currentLikesElement = document.getElementById('currentLikes');
    expect(counterElement.textContent).toEqual('3');
    expect(currentLikesElement.textContent).toEqual('3');
  });


});
