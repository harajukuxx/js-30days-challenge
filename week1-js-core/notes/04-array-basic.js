const fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits[0]); // ผลลัพธ์: "Apple" (ช่องแรก)
console.log(fruits[2]); // ผลลัพธ์: "Orange" (ช่องที่สาม)

// ถ้าเรียกตำแหน่งที่ไม่มีอยู่จริง?
console.log(fruits[99]); // ผลลัพธ์: undefined (หาไม่เจอ)

fruits[1] = "Watermelon"; // เปลี่ยน Banana (Index 1) ให้เป็น Watermelon
console.log(fruits); // ผลลัพธ์: ["Apple", "Watermelon", "Orange", "Mango"]

const animals = ["Cat", "Dog", "Bird"];
console.log(animals.length); // ผลลัพธ์: 3

let colors = ["Red", "Green"];

// 1. เพิ่มเข้าท้าย
colors.push("Blue"); // ["Red", "Green", "Blue"]

// 2. เอาตัวท้ายออก
colors.pop(); // ["Red", "Green"] (Blue หายไปแล้ว)

let jobs = ["Teacher", "Doctor"];

// 3. แทรกเข้าหน้าสุด
jobs.unshift("Developer"); // ["Developer", "Teacher", "Doctor"]

// 4. เอาตัวหน้าสุดออก
jobs.shift(); // ["Teacher", "Doctor"]

// การหาตำแหน่งและการเช็คว่ามีของไหม (indexOf / includes)
const tools = ["Hammer", "Screwdriver", "Wrench"];

console.log(tools.indexOf("Screwdriver")); // ได้ผลลัพธ์: 1
console.log(tools.indexOf("Pen")); // ได้ผลลัพธ์: -1 (เพราะไม่มีใน Array)

console.log(tools.includes("Hammer")); // ได้ผลลัพธ์: true
console.log(tools.includes("Pen")); // ได้ผลลัพธ์: false
