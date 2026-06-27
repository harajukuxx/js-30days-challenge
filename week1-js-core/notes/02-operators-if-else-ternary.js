let x = 10;

x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2

console.log(5 == "5"); // true (เพราะมันแอบแปลง string "5" เป็นตัวเลขให้)
console.log(5 === "5"); // false (เพราะตัวหนึ่งเป็น Number อีกตัวเป็น String)

// Truthy vs Falsy
/*
ค่าที่เป็น Falsy มีอยู่แค่นี้ (จำง่ายๆ):
false
0, -0 (เลขศูนย์)
"" (String ว่างเปล่า)
null, undefined
NaN

ค่าอื่นๆ ที่เหลือนอกเหนือจากนี้ เช่น "Hello", 123, [] (อาเรย์ว่าง), {} (วัตถุว่าง) ถูกมองว่าเป็น Truthy (เป็นจริง) ทั้งหมด!
*/

let username = ""; // String ว่างเปล่า (เป็น Falsy)

if (username) {
  console.log("มีชื่อผู้ใช้");
} else {
  console.log("กรุณากรอกชื่อผู้ใช้"); // โค้ดจะวิ่งมาทำงานตรงนี้!
}

// Ternary Operator
// เงื่อนไข ? ทำถ้าเป็นจริง : ทำถ้าเป็นเท็จ

let age = 20;
let canVote;

if (age >= 18) {
  canVote = "เลือกตั้งได้";
} else {
  canVote = "ยังเลือกตั้งไม่ได้";
}

canVote = age >= 18 ? "เลือกตั้งได้" : "ยังเลือกตั้งไม่ได้";

// Ternary Operator (Nested Ternary)
let score = 85;
let grade = score >= 80 ? "A" : score >= 70 ? "B" : "F";
console.log(grade); // ผลลัพธ์: A
