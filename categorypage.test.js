// categorypage.test.js

// นำเข้าโมดูลที่จำเป็น่ำหะ 
const { fireEvent, getByText } = require('@testing-library/dom');
const { JSDOM } = require('jsdom');

// เรียกใช้ JSDOM เพื่อสร้าง DOM สำหรับการทดสอบ
const dom = new JSDOM('<!DOCTYPE html>');

// นำเข้าโค้ดที่จะทดสอบ
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './categorypage.html'), 'utf8');

// นำเข้า JavaScript ที่ต้องการทดสอบ
const categoryPageScript = fs.readFileSync(path.resolve(__dirname, './categorypage.js'), 'utf8');

// สร้าง DOM ใหม่
const { window } = dom;
const { document } = window;

// เพิ่มคำสั่งในโค้ด JavaScript
const scriptElement = document.createElement('script');
scriptElement.textContent = categoryPageScript;
document.head.appendChild(scriptElement);

// ทดสอบการคลิกที่ลิงก์แต่ละตัว
test('clicking product link should set section in localStorage', () => {
  const links = document.querySelectorAll('.product');

  // ลูปผ่านลิงก์แต่ละตัวและทำการคลิก
  links.forEach(link => {
    // สร้างอีเวนต์ click
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });

    // ทำการ dispatch อีเวนต์ click ไปยังลิงก์
    link.dispatchEvent(clickEvent);
    
    // ตรวจสอบว่า section ถูกเซ็ตใน localStorage หรือไม่
    expect(localStorage.getItem('section')).toBeTruthy();
  });
});