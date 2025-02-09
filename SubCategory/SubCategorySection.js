
var cards = [
    {
        id:1, /*Learning*/
        type:"Learning",
        id_sec:"GraphSum",
        image: "/images/graph.jpg",
        title: "กราฟคืออะไร ?",
        contents: "มารู้จักกับกราฟกัน! กราฟคืออะไร และมันมีประโยชน์อย่างไรกันนะ ?",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:2, /*Finance*/ 
        type:"Finance",
        id_sec:"tax",
        image: "/images/tax.jpg",
        title: "การคำนวณภาษีเบื้องต้น",
        contents: "การคำนวนภาษีไม่ยากอย่างที่คิด! มาดูวิธีคำนวนกันเถอะ",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:3, /*Healthy*/
        type:"Healthy",
        id_sec:"FirstAid",
        image: "/images/FirstAid.jpg",
        title: "การปฐมพยาบาลเบื้องต้น",
        contents: "ข้อเท้าพลิกควรทำยังไงดีนะ วันนี้เรามีคำตอบค่าาา",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:4, /*Other*/
        type:"Other",
        id_sec:"Earthquake",
        image: "/images/Earthquake.jpg",
        title: "วิธีเอาตัวรอดจากแผ่นดินไหว",
        contents: "แผ่นดินไหวอาจเป็นเรื่องไกลตัวสำหรับหลายคน แต่รู้ไว้ไม่เสียหายแถมยังสามารถช่วยเอาตัวรอดได้อีกด้วย!",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:5, /*Finance*/ 
        type:"Finance",
        id_sec:"invest",
        image: "/images/inves.jpg",
        title: "มือใหม่เริ่มลงทุน",
        contents: "อ่าน Fund Fact Sheet ก่อนเริ่มลงทุน เรื่องง่ายๆ ที่มือใหม่ก็ทำได้",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:6, /*Healthy*/
        type:"Healthy",
        id_sec:"Stress",
        image: "/images/Stress.jpg",
        title: "วิธีจัดการความเครียด",
        contents: "มัดรวม! 5 วิธีเด็ดจัดการความเครียดให้อยู่หมัด ตามแบบฉบับนักจิตวิทยา",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:7, /*Healthy*/
        type:"Healthy",
        id_sec:"Organ",
        image: "/images/Organ.jpg",
        title: "8 อวัยวะเหล่านี้ กลัวอะไร?",
        contents: "อวัยวะในร่างกายของเราก็มีสิ่งที่กลัวเหมือนกันนะ แต่ว่าจะมีอะไรบ้างล่ะ? แล้วรีบดูแลให้ดีเลย",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:8, /*Healthy*/
        type:"Healthy",
        id_sec:"SkinHealth",
        image: "/images/SkinHealth.jpg",
        title: "สุขภาพผิวดี ทำง๊ายง่าย ด้วยตัวเอง!",
        contents: "สาว ๆ หนุ่ม ๆ มาดูแลสุขภาพผิวกันเถอะ! เพื่อผิวสุขภาพดีและเปล่งปลั่ง ",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {   
        id:9, /* Commucation*/
        type:"Communication",
        id_sec:"WriteEmail",
        image: "/images/WriteEmail.jpg",
        title: "ทักษะในการเขียนอีเมลเบื้องต้นในภาษาอังกฤษ",
        contents: "มัดรวม ประโยคภาษาอังกฤษปัง ๆ สำหรับการเขียนอีเมลภาษาอังกฤษอย่างมืออาชีพ",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:10, /* Communication*/
        type:"Communication",
        id_sec:"Vocab",
        image: "/images/Vocab.jpg",
        title: "สำนวนภาษาอังกฤษน่ารู้ได้ใช้บ่อยแน่นอน!",
        contents: "จดเลย! 8 สำนวนภาษาอังกฤษที่ใช้ในชีวิตประจำวัน สำนวนดี ความหมายโดน พร้อมคำแปล ใช้ได้ทั้งเรียนและทำงาน",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:11,/* Communication*/
        type:"Communication",
        id_sec:"HowtoSpeak",
        image: "/images/HowtoSpeak.jpg",
        title: "เทคนิคการพูดจาโน้มน้าวใจ",
        contents: "รู้หรือไม่! การพูดจาโน้มน้าวเป็นจิตวิทยาในการทำให้ผู้ฟังรู้สึกคล้อยตามเรา จะมีอะไรบ้างนะ!?",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:12,/*Socializing*/ 
        type:"Socializing",
        id_sec:"Courtesy",
        image: "/images/Courtesy.jpg",
        title: "มารยาทตามหลักสากล",
        contents: "รีบดูเลย ! 13 มารยาทในสังคมพื้นฐาน ที่เราควรมี จะมีอะไรบ้างน๊า? แล้วเรามีครบทุกข้อหรือเปล่า??",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:13, /*Socializing*/ 
        type:"Socializing",
        id_sec:"Social",
        image: "/images/Social.jpg",
        title: "วิธีสร้างความมั่นใจ ให้คนขี้อายกล้าเข้าสังคม",
        contents: "ชาว introvert มาทางนี้เล๊ย วิธีเข้าสังคมฉบับ 'คนโลกส่วนตัวสูงชอบอยู่คนเดียว !'",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:14, /*Food*/ 
        type:"Food",
        id_sec:"Menu",
        image: "/images/Menu.jpg",
        title: "7 เมนูมื้อเย็น ช่วงลดน้ำหนัก",
        contents: "แนะนำอาหารเย็นไม่อ้วน 7 เมนูไขมันต่ำ ช่วยควบคุมน้ำหนัก ลดพุงได้ 7 วัน 7 เมนูมื้อเย็น",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:15, /*Food*/ 
        type:"Food",
        id_sec:"Nutrient",
        image: "/images/Nutrient.jpg",
        title: "สารอาหารที่จำเป็นต่อร่างกาย",
        contents: "สารอาหาร 9 ชนิด ที่ร่างกายควรได้รับต่อวัน มีอะไรบ้าง",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:16, /*Learning*/
        type:"Learning",
        id_sec:"Grade4",
        image: "/images/Grade4.jpg",
        title: "เรียนอย่างไรให้ได้เกรด 4.00",
        contents: "เทคนิคลับที่อาจารย์ไม่รู้! เรียนอย่างไรให้ได้เกรด 4.00 ฉบับเด็กขี้เกียจ มาดูกัน !!",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:17, /*Manage*/
        type:"Manage",
        id_sec:"ManageTime",
        image: "/images/ManageTime.jpg",
        title: "เคล็ดลับการบริหารเวลา",
        contents: "How to จัดการชีวิตให้ง่ายขึ้นด้วยวิธีบริหารเวลาอย่างมีประสิทธิภาพ !!",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:18, /*Manage*/
        type:"Manage",
        id_sec:"Plan",
        image: "/images/Plan.jpg",
        title: "เทคนิควางแผนการเที่ยว",
        contents: "แชร์เทคนิควางแผนเที่ยวให้สนุก ไม่วุ่นวาย เดินทางอย่างไรไม่มีสะดุดแน่นอน!!",
        link: "../ContentPage/Format_ContentPage.html",
    },
    {
        id:19, /*Other*/
        type:"Other",
        id_sec:"Law",
        image: "/images/Law.jpg",
        title: "กฎหมายเบื้องต้น",
        contents: "กฎหมายที่ควรรู้ในชีวิตประจำวัน รู้ไว้จะได้ไม่โดนเอาเปรียบ!",
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



window.onload = function(){
    const section = localStorage.getItem('section');
    show(section, () =>{
        const links_content = document.querySelectorAll('.btn')
         
        for (let i = 0; i < allSection.length; i++) {
            const contents = allSection[i];
            if(section === contents.section){
                for (let j = 0; j < contents.allcontent.length; j++) {
                    const detail = contents.allcontent[j];
                    const linkCon = links_content[j];
                    console.log(detail)
                    console.log(linkCon)
                    linkCon.addEventListener("click",function(){
                        localStorage.setItem('detail',detail)
                });
                    
                }
            }
        
        }

        });
};



function show(section, callback) {
    let showCard = document.getElementById("card-for-section");
    const sectionHead = getSectionHead(section);
    let headerSection = `<div class="reccom">
    <h2>${sectionHead}</h2>
  </div>`
    showCard.innerHTML = ""+headerSection; // เคลียร์เนื้อหาเก่า
    cards.forEach(card => {
        if (card.type === section) {
           
            showCard.innerHTML += 
          `<div class="card-container">
                <div class="card">
                    <img src="${card.image}">
                    <div class="card-content">
                        <h3>${card.title}</h3>
                        <p>${card.contents}</p>
                        <a href="${card.link}" class="btn" id="${card.id_sec}">อ่านเพิ่มเติม</a>
                    </div>
                </div>
            </div>`;
        }
    });

    if (callback) callback();
}

function getSectionHead(section) {
    const sectionInfo = allSection.find(item => item.section === section);
    return sectionInfo ? sectionInfo.head : '';
}



