
var cards = [
    {
        id:1, /*Learning*/
        type:"Learning",
        id_sec:"GraphSum",
        image: "/images/graph.jpg",
        title: "กราฟคืออะไร ?",
        content: "มารู้จักกับกราฟกัน! กราฟคืออะไร และมันมีประโยชน์อย่างไรกันนะ ?",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:2, /*Finance*/ 
        type:"Finance",
        id_sec:"tax",
        image: "/images/tax.jpg",
        title: "การคำนวณภาษีเบื้องต้น",
        content: "การคำนวนภาษีไม่ยากอย่างที่คิด! มาดูวิธีคำนวนกันเถอะ",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:3, /*Healthy*/
        type:"Healthy",
        id_sec:"FirstAid",
        image: "/images/FirstAid.jpg",
        title: "การปฐมพยาบาลเบื้องต้น",
        content: "ข้อเท้าพลิกควรทำยังไงดีนะ วันนี้เรามีคำตอบค่าาา",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:4, /*Other*/
        type:"Other",
        id_sec:"Earthquake",
        image: "/images/Earthquake.jpg",
        title: "วิธีเอาตัวรอดจากแผ่นดินไหว",
        content: "แผ่นดินไหวอาจเป็นเรื่องไกลตัวสำหรับหลายคน แต่รู้ไว้ไม่เสียหายแถมยังสามารถช่วยเอาตัวรอดได้อีกด้วย!",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:5, /*Finance*/ 
        type:"Finance",
        id_sec:"invest",
        image: "/images/inves.jpg",
        title: "มือใหม่เริ่มลงทุน",
        content: "อ่าน Fund Fact Sheet ก่อนเริ่มลงทุน เรื่องง่ายๆ ที่มือใหม่ก็ทำได้",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:6, /*Healthy*/
        type:"Healthy",
        id_sec:"Stress",
        image: "/images/Stress.jpg",
        title: "วิธีจัดการความเครียด",
        content: "มัดรวม! 5 วิธีเด็ดจัดการความเครียดให้อยู่หมัด ตามแบบฉบับนักจิตวิทยา",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:7, /*Healthy*/
        type:"Healthy",
        id_sec:"Organ",
        image: "/images/Organ.jpg",
        title: "8 อวัยวะเหล่านี้ กลัวอะไร?",
        content: "อวัยวะในร่างกายของเราก็มีสิ่งที่กลัวเหมือนกันนะ แต่ว่าจะมีอะไรบ้างล่ะ? แล้วรีบดูแลให้ดีเลย",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:8, /*Healthy*/
        type:"Healthy",
        id_sec:"SkinHealth",
        image: "/images/SkinHealth.jpg",
        title: "สุขภาพผิวดี ทำง๊ายง่าย ด้วยตัวเอง!",
        content: "สาว ๆ หนุ่ม ๆ มาดูแลสุขภาพผิวกันเถอะ! เพื่อผิวสุขภาพดีและเปล่งปลั่ง ",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {   
        id:9, /* Commucation*/
        type:"Communication",
        id_sec:"WriteEmail",
        image: "/images/WriteEmail.jpg",
        title: "ทักษะในการเขียนอีเมลเบื้องต้นในภาษาอังกฤษ",
        content: "มัดรวม ประโยคภาษาอังกฤษปัง ๆ สำหรับการเขียนอีเมลภาษาอังกฤษอย่างมืออาชีพ",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:10, /* Communication*/
        type:"Communication",
        id_sec:"Vocab",
        image: "/images/Vocab.jpg",
        title: "สำนวนภาษาอังกฤษน่ารู้ได้ใช้บ่อยแน่นอน!",
        content: "จดเลย! 8 สำนวนภาษาอังกฤษที่ใช้ในชีวิตประจำวัน สำนวนดี ความหมายโดน พร้อมคำแปล ใช้ได้ทั้งเรียนและทำงาน",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:11,/* Communication*/
        type:"Communication",
        id_sec:"HowtoSpeak",
        image: "/images/HowtoSpeak.jpg",
        title: "เทคนิคการพูดจาโน้มน้าวใจ",
        content: "รู้หรือไม่! การพูดจาโน้มน้าวเป็นจิตวิทยาในการทำให้ผู้ฟังรู้สึกคล้อยตามเรา จะมีอะไรบ้างนะ!?",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:12,/*Socializing*/ 
        type:"Socializing",
        id_sec:"Courtesy",
        image: "/images/Courtesy.jpg",
        title: "มารยาทตามหลักสากล",
        content: "รีบดูเลย ! 13 มารยาทในสังคมพื้นฐาน ที่เราควรมี จะมีอะไรบ้างน๊า? แล้วเรามีครบทุกข้อหรือเปล่า??",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:13, /*Socializing*/ 
        type:"Socializing",
        id_sec:"Social",
        image: "/images/Social.jpg",
        title: "วิธีสร้างความมั่นใจ ให้คนขี้อายกล้าเข้าสังคม",
        content: "ชาว introvert มาทางนี้เล๊ย วิธีเข้าสังคมฉบับ 'คนโลกส่วนตัวสูงชอบอยู่คนเดียว !'",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:14, /*Food*/ 
        type:"Food",
        id_sec:"Menu",
        image: "/images/Menu.jpg",
        title: "7 เมนูมื้อเย็น ช่วงลดน้ำหนัก",
        content: "แนะนำอาหารเย็นไม่อ้วน 7 เมนูไขมันต่ำ ช่วยควบคุมน้ำหนัก ลดพุงได้ 7 วัน 7 เมนูมื้อเย็น",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:15, /*Food*/ 
        type:"Food",
        id_sec:"Nutrient",
        image: "/images/Nutrient.jpg",
        title: "สารอาหารที่จำเป็นต่อร่างกาย",
        content: "สารอาหาร 9 ชนิด ที่ร่างกายควรได้รับต่อวัน มีอะไรบ้าง",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:16, /*Learning*/
        type:"Learning",
        id_sec:"Grade4",
        image: "/images/Grade4.jpg",
        title: "เรียนอย่างไรให้ได้เกรด 4.00",
        content: "เทคนิคลับที่อาจารย์ไม่รู้! เรียนอย่างไรให้ได้เกรด 4.00 ฉบับเด็กขี้เกียจ มาดูกัน !!",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:17, /*Manage*/
        type:"Manage",
        id_sec:"ManageTime",
        image: "/images/ManageTime.jpg",
        title: "เคล็ดลับการบริหารเวลา",
        content: "How to จัดการชีวิตให้ง่ายขึ้นด้วยวิธีบริหารเวลาอย่างมีประสิทธิภาพ !!",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:18, /*Manage*/
        type:"Manage",
        id_sec:"Plan",
        image: "/images/Plan.jpg",
        title: "เทคนิควางแผนการเที่ยว",
        content: "แชร์เทคนิควางแผนเที่ยวให้สนุก ไม่วุ่นวาย เดินทางอย่างไรไม่มีสะดุดแน่นอน!!",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:19, /*Other*/
        type:"Other",
        id_sec:"Law",
        image: "/images/Law.jpg",
        title: "กฎหมายเบื้องต้น",
        content: "กฎหมายที่ควรรู้ในชีวิตประจำวัน รู้ไว้จะได้ไม่โดนเอาเปรียบ!",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:20, /*Other*/
        type:"Other",
        id_sec:"Prepare",
        image: "/images/Prepare.jpg",
        title: "จัดกระเป๋าเดินทางไปต่างประเทศอย่างไรดีนะ?",
        content: "เทคนิคการจัดกระเป่าไปต่างประเทศฉบับคนไม่เคยไป ฉบับมือโปร ",
        link: "../ContentPage/Format_ContentPage.html",
    },

];

let allSection = [
    {
        section:"Socializing",
        head:"การเข้าสังคม",
        allcontent:["Courtesy","Social"]
    },
    {
        section:"Finance",
        head:"การเงินเเละการลงทุน",
        allcontent:["tax","invest"]
    },
    {
        section:"Learning",
        head:"การเรียน",
        allcontent:["GraphSum","Grade4"]
    },
    {
        section:"Manage",
        head:"การวางแผนและการจัดการเวลา",
        allcontent:["ManageTime","Plan"]
    },
    {
        section:"Communication",
        head:"การสื่อสาร",
        allcontent:["WriteEmail","Vocab","HowtoSpeak"]
    },
    {
        section:"Healthy",
        head:"สุขภาพ",
        allcontent:["FirstAid","Stress","Organ","SkinHealth"]
    },
    {
        section:"Food",
        head:"อาหาร",
        allcontent:["Menu","Nutrient"]
        
    },
    {
        section:"Other",
        head:"อื่นๆ",
        allcontent:["Law","Earthquake","Prepare"]
    },
]


// Function to shuffle the array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

// Shuffle the cards array
var shuffledCards= shuffleArray(cards).slice(0,4);


window.onload = function() {
    const section = localStorage.getItem('section');
    show(section, () => {
        const links_content = document.querySelectorAll('.btn');
        links_content.forEach(link => {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                console.log("Selected Section ID:", this.id);
                localStorage.setItem('detail', this.id);
                window.location.href = this.href;
            });
        });
    });
};



function show(section,callback) {
    let showCard = document.getElementById("cards");
    showCard.innerHTML = ""; // เคลียร์เนื้อหาเก่า
    
    const allCards = [];
    cards.forEach(card => {
        allCards.push(card);
    });
    
    // สุ่มการ์ดทุกรอบ
    const shuffledCards = shuffleArray(allCards);
    // เลือกแค่ 4 ใบ
    const selectedCards = shuffledCards.slice(0, 4);
    selectedCards.forEach(card => {
            showCard.innerHTML += 
            `<div class="cards">
                <img src="${card.image}">
                <div class="cards-content">
                    <h3>${card.title}</h3>
                    <p>${card.content}</p>
                    <a href="${card.link}" class="btn" id="${card.id_sec}">อ่านเพิ่มเติม</a>
                </div>
            </div>`;
        
       
    });

    if (callback) callback();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[j], array[i]] = [array[i], array[j]];
    }
    return array;
}


module.exports = {
    cards: cards,
    shuffleArray: shuffleArray
};
