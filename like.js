function handleWindowLoad() {
  // ตรวจสอบว่ามีจำนวน like ที่บันทึกไว้ใน Local Storage หรือไม่
  if (localStorage.getItem("likes")) {
    // ถ้ามี ก็นำค่ามาแสดงผลใน HTML
    document.getElementById("counter").textContent =
      localStorage.getItem("likes");
  }
}

// เรียกใช้งานฟังก์ชันเมื่อโหลดหน้าเว็บ
if (typeof window !== "undefined") {
  if (window.addEventListener) {
    window.addEventListener("load", handleWindowLoad);
  } else if (window.attachEvent) {
    window.attachEvent("onload", handleWindowLoad);
  } else {
    window.onload = handleWindowLoad;
  }
}

function like() {
  // เพิ่มจำนวนไลค์
  let currentLikes = parseInt(localStorage.getItem("likes")) || 0;
  currentLikes++;
  document.getElementById("counter").textContent = currentLikes;
  document.getElementById("currentLikes").textContent = currentLikes;

  // บันทึกจำนวนไลค์ลงใน Local Storage
  localStorage.setItem("likes", currentLikes.toString());
}

module.exports = { like, handleWindowLoad };
