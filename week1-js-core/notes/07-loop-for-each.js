const maxRetries = 3;

for (let i = 1; i <= maxRetries; i++) {
  console.log(`⏳ กำลังพยายามเชื่อมต่อฐานข้อมูลครั้งที่ ${i}...`);

  // สมมติว่าในชีวิตจริงตรงนี้จะมีโค้ดเช็ค ถ้าเชื่อมต่อสำเร็จก็จะสั่ง break ออกไป
}

const users = ["Tina", "Nutthapong", "Atchara"];

users.forEach((name, index) => {
  console.log(`[Queue #${index + 1}] ✉️ ส่งอีเมลต้อนรับถึงคุณ: ${name}`);
});

/*
เป็นลูปสำหรับ Array เช่นกัน แต่ทรงพลังกว่าตรงที่คุณสามารถสั่ง break (หยุดลูปทันทีเมื่อเจอของที่ต้องการ) 
หรือใช้คู่กับ async/await เวลาดึงข้อมูลจาก Database ทีละตัวได้ ซึ่ง forEach ทำไม่ได้ครับ
*/
const products = [
  { id: "P1", name: "Mouse", inStock: true },
  { id: "P2", name: "Keyboard", inStock: false }, // <-- เจอบั๊กหรือสินค้าหมด
  { id: "P3", name: "Monitor", inStock: true },
];

// 💻 ยอดฮิต: วนลูปเช็คข้อมูล ถ้าเจอสินค้าหมดให้หยุดทำงานทันที
for (const item of products) {
  if (!item.inStock) {
    console.log(`🚨 ระบบหยุดตรวจ: สินค้า ${item.name} หมดสต็อก!`);
    break; // ตัดจบการทำงานลูปทันที ไม่ไปตรวจ Monitor ต่อให้เสียเวลา
  }
  console.log(`✅ ตรวจสอบผ่าน: ${item.name} มีของพร้อมส่ง`);
}
