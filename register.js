// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";  // นำเข้าฟังก์ชันสำหรับ Realtime Database

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
// ตั้งค่า Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// เข้าถึง Firebase Realtime Database
const database = getDatabase(app);
const DatabaseloginDB = ref(database, 'Databaselogin');


// Select form and inputs
var form = document.getElementById('register-form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password_confirm = document.getElementById('password_confirm');

// Form validation logic
document.getElementById('register-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var isSuccess = true;

    // ตรวจสอบฟิลด์ที่จำเป็น
    checkRequired([username, email, password, password_confirm]);

    // ตรวจสอบอีเมล
    checkEmail(email);

    // ตรวจสอบความยาวรหัสผ่าน
    checkLength(password, 6, 16);
    checkLength(password_confirm, 6, 16);

    // ตรวจสอบว่ารหัสผ่านตรงกันหรือไม่
    checkPasswordMatch(password, password_confirm);

    // หากมีข้อผิดพลาดในการตรวจสอบ ไม่ให้ส่งฟอร์ม
    if (document.querySelectorAll('.error').length > 0) {
        isSuccess = false;
    }

    // หากผ่านการตรวจสอบทั้งหมด ให้บันทึกข้อมูลไปยัง Firebase
    if (isSuccess) {
        saveMessages(username.value, email.value, password.value);
    }
}


function saveMessages(username, email, password) {
    const newDatalogin = ref(DatabaseloginDB);  // สร้างการอ้างอิงตำแหน่งที่ข้อมูลจะถูกบันทึก
    set(newDatalogin, {
        username: username,
        email: email,
        password: password
    })
        .then(() => {
            alert("Account created successfully");
            window.location.href = "login.html"; // เปลี่ยนหน้าไปที่หน้า login
        })
        .catch((error) => {
            console.error("Error saving data:", error);
        });
}
x

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    if (small) {
        small.innerText = message;
    }
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    if (small) {
        small.innerText = '';
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
