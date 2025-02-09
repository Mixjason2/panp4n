
function handleSearch() {
    const searchQuery = document.querySelector('.search-bar input[name="search"]').value.trim();
    const url_format = "/ContentPage/Format_ContentPage.html";
    const topics = [
        { query: "วิธีการคำนวณภาษีเบื้องต้น", url:url_format ,section:"Finance",detail:"tax"},
        { query: "มือใหม่เริ่มลงทุน", url:url_format,section:"Finance",detail:"invest" },
        { query: "การปฐมพยาบาลเบื้องต้น", url:url_format,section:"Healthy",detail:"FirstAid" },
        { query: "วิธีการจัดการความเครียด", url:url_format,section:"Healthy",detail:"Stress" },
        { query: "อวัยวะเหล่านี้กลัวอะไร?", url:url_format,section:"Healthy",detail:"Organ" },
        { query: "สุขภาพผิวดี ทำได้ง่ายๆ", url:url_format,section:"Healthy",detail:"SkinHealth" },
        { query: "ทักษะในการเขียนอีเมลเบื้องต้นในภาษาอังกฤษ", url:url_format,section:"Communication",detail:"WriteEmail" },
        { query: "สำนวนภาษาอังกฤษน่ารู้", url:url_format,section:"Communication",detail:"Vocab" },
        { query: "เทคนิคการพูดจาโน้มน้าวใจ", url:url_format,section:"Communication",detail:"HowtoSpeak" },
        { query: "มารยาทตามหลักสากล", url:url_format,section:"Socializing",detail:"Courtesy" },
        { query: "วิธีสร้างความมั่นใจให้คนขี้อาย", url:url_format,section:"Socializing",detail:"Social" },
        { query: "เมนูมื้อเย็น ช่วงลดน้ำหนัก", url:url_format,section:"Food",detail:"Menu" },
        { query: "สารอาหารที่จำเป็นต่อร่างกาย", url:url_format,section:"Food",detail:"Nutrient" },
        { query: "กราฟคืออะไร", url:url_format,section:"Learning",detail:"GraphSum" },
        { query: "เรียนยังไง ให้ได้ 4.00", url:url_format,section:"Learning",detail:"Grade4" },
        { query: "เคล็ดลับการบริหารเวลา", url:url_format,section:"Manage",detail:"ManageTime"},
        { query: "แชร์วิธีทำแพลนเที่ยว", url:url_format,section:"Manage",detail:"Plan"},
        { query: "กฎหมายเบื้องต้น", url:url_format,section:"Other",detail:"Law"},
        { query: "วิธีเอาตัวรอดจากแผ่นดินไหว", url:url_format,section:"Other",detail:"Earthquake" },
        { query: "จัดกระเป๋าเดินทางไปต่างประเทศ", url:url_format,section:"Other",detail:"Prepare" }

    ];

    const topic = topics.find(topic => topic.query === searchQuery);
    if (topic) {
        localStorage.setItem('section', topic.section);
        localStorage.setItem('detail', topic.detail);
        window.location.href = topic.url;
        return false; // ป้องกันฟอร์มส่งค่าไปที่ URL ที่ระบุในแอททริบิวต์ action
    } else {
        alert("ขออภัย ไม่มีรายการที่ท่านต้องการค้นหา");
        return false; // ส่งค่าฟอร์มไปที่ URL ที่ระบุในแอททริบิวต์ action
    }
}
// เรียกใช้งานฟังก์ชัน showSearchSuggestions() เมื่อหน้าเว็บโหลด
document.addEventListener("DOMContentLoaded", showSearchSuggestions)


function showSearchSuggestions() {
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
    

};

