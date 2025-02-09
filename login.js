// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbcR41UI-QErBv12eaS3nMYEuWs_EHGAc",
    authDomain: "learnhuff-login.firebaseapp.com",
    databaseURL: "https://learnhuff-login-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "learnhuff-login",
    storageBucket: "learnhuff-login.firebasestorage.app",
    messagingSenderId: "896357215534",
    appId: "1:896357215534:web:3ad0bcaf014f45fd959ebf",
    measurementId: "G-FJPW01WFES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function submitForm(event) {
    event.preventDefault();  // ป้องกันไม่ให้ฟอร์มทำการส่งข้อมูลแล้วรีเฟรชหน้า

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    checkCredentials2(username, password);
}

function checkCredentials2(username, password) {
    const dbRef = ref(database, 'Databaselogin');
    get(dbRef).then((snapshot) => {
        console.log("Firebase connected successfully");
        let isAuthenticated = false;
        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            console.log("Checking user:", data.username);  // ตรวจสอบชื่อผู้ใช้ที่ได้จาก Firebase
            if (data.username === username && data.password === password) {
                isAuthenticated = true;
            }
        });

        if (isAuthenticated) {
            console.log("Login successful");
            window.location.href = "homepage.html";  // ไปที่หน้าหลัก
        } else {
            alert("Incorrect username or password");  // แจ้งเตือนถ้าเข้าสู่ระบบไม่สำเร็จ
        }
    }).catch((error) => {
        console.error("Error checking credentials: ", error);
    });
}



const getElementVal = (id) => {
    return document.getElementById(id).value;
}
