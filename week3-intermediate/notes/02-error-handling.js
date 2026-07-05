// try...catch...finally

try {
  // 1. โค้ดที่เสี่ยงจะพัง ใส่ไว้ในนี้
  let user = JSON.parse("{ ข้อมูลที่ format พัง }");
  console.log(user.name);
} catch (error) {
  // 2. ถ้าใน try พัง โค้ดจะกระโดดมาทำงานที่นี่ทันที
  // ตัวแปร error คือ Object ที่ระบบสร้างขึ้นมาบอกเราว่าพังเพราะอะไร
  console.error("โอ๊ะ! แปลงข้อมูลไม่สำเร็จ:", error.message);
  // console.log(error.message); // 👉 รู้ว่าพังเพราะอะไร
  // console.log(error.stack);   // 👉 รู้ว่าพังที่บรรทัดไหน (ใช้ตอน Debug)
} finally {
  // 3. บล็อกนี้จะทำงาน "เสมอ" ไม่ว่าจะพังหรือไม่พังก็ตาม
  // ในงาน Backend มักใช้เคลียร์ทรัพยากร เช่น ปิด Loading state หรือล้าง Memory
  console.log("เคลียร์สถานะระบบเรียบร้อย");
}

// throw new Error()
function checkAge(age) {
  if (age < 18) {
    // โยน Error ออกไป และสร้างข้อความกำกับไว้
    throw new Error("อายุต้องไม่ต่ำกว่า 18 ปีบริบูรณ์");
  }
  return "ผ่านเกณฑ์! ยินดีต้อนรับ";
}

try {
  const result = checkAge(15); // อายุ 15 ผิดเงื่อนไข
  console.log(result); // บรรทัดนี้จะไม่ถูกรัน เพราะโดนดีดไป catch ทันที
} catch (err) {
  console.error("ปฏิเสธการเข้าใช้งาน:", err.message); // 👉 ปฏิเสธการเข้าใช้งาน: อายุต้องไม่ต่ำกว่า 18 ปีบริบูรณ์
}

// try...catch แบบปกติ ไม่สามารถดักจับ Async Code ได้!
/*
try {
  setTimeout(() => {
    throw new Error("พังในอนาคต"); // ❌ catch ด้านล่างจะจับตัวนี้ไม่ได้! เพราะ try รันเสร็จไปก่อนที่ฟังก์ชันนี้จะทำงาน
  }, 1000);
} catch (e) {
  console.log("ดักจับได้แล้ว"); // บรรทัดนี้จะไม่ทำงาน และโปรแกรมจะแครช
}
*/
