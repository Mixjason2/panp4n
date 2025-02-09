const links = document.querySelectorAll(".product");

let allSection = [
    {
        section:"Socializing",
        head:"การเข้าสังคม"
    },
    {
        section:"Finance",
        head:"การเงินเเละการลงทุน"
    },
    {
        section:"Learning",
        head:"การเรียน"
    },
    {
        section:"Manage",
        head:"การวางแผนและการจัดการเวลา"
    },
    {
        section:"Communication",
        head:"การสื่อสาร"
    },
    {
        section:"Healthy",
        head:"สุขภาพ"
    },
    {
        section:"Food",
        head:"อาหาร"
    },
    {
        section:"Other",
        head:"อื่นๆ"
    },
]


for (let i = 0; i < allSection.length; i++) {
    const section = allSection[i];
    const link = links[i];
    link.addEventListener("click",function(){
        localStorage.setItem('section',section.section)
    });
}
