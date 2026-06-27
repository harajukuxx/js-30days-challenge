// Function Declaration (การประกาศฟังก์ชัน)
// 1. สร้างฟังก์ชันชื่อ greet รับ Parameter ชื่อ name
function greet(name) {
  return `สวัสดีครับ คุณ ${name}!`; // คืนค่ากลับออกไป
}

// 2. เรียกใช้งานฟังก์ชัน (Calling / Invoking)
let message = greet("สมชาย");
console.log(message); // ผลลัพธ์: สวัสดีครับ คุณ สมชาย!

// Function Expression (ฟังก์ชันแบบฟังก์ชันรับค่าตัวแปร)
const square = function (number) {
  return number * number;
};

console.log(square(5)); // ผลลัพธ์: 25

// Arrow Function
const getArea1 = function (width, height) {
  return width * height;
};

const getArea2 = (width, height) => {
  return width * height;
};

// จากเดิม
const double1 = (x) => {
  return x * 2;
};

// Implicit Return
const double2 = (x) => x * 2;

/*
ข้อควรระวังในการลดรูป: ถ้าต้องการ Return เป็น Object
เนื่องจากวงเล็บปีกกา {} ใน JavaScript ถูกจองไว้เป็นตัวเปิด-ปิดบล็อกฟังก์ชัน 
ถ้าเราเขียนลดรูปแล้วอยากให้รีเทิร์น Object ตรงๆ เราต้อง ครอบด้วยวงเล็บธรรมดา () อีกชั้นหนึ่ง ครับ เพื่อไม่ให้ระบบมันงง
*/

// แบบนี้ พัง! (JS นึกว่าปีกกาคือขอบเขตฟังก์ชัน ไม่ใช่ Object)
// const makeUser = name => { name: name };

// แบบที่ถูกต้อง (ครอบวงเล็บเบิ้ลไว้)
const makeUser = (name) => ({ name: name });

console.log(makeUser("Chai")); // ผลลัพธ์: { name: 'Chai' }

// this Keyword
const person = {
  name: "John",
  // ฟังก์ชันธรรมดา
  sayHello: function () {
    console.log(`ฉันชื่อ ${this.name}`);
  },
  // Arrow Function
  sayHi: () => {
    console.log(`ฉันชื่อ ${this.name}`);
  },
};

person.sayHello(); // ผลลัพธ์: "ฉันชื่อ John" (เพราะ person เป็นคนเรียก)
person.sayHi(); // ผลลัพธ์: "ฉันชื่อ undefined" (เพราะ Arrow function ไปดึง window/global scope มา)

// ตัวอย่างที่นิยมในงานจริง:
const user = {
  name: "John",

  greet() {
    setTimeout(() => {
      console.log(`Hello ${this.name}`);
    }, 1000);
  },
};

user.greet();
