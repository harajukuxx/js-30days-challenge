/*
🎯 ข้อที่ 1: ระบบตรวจสอบยอดเงินในบัญชีก่อนถอน (Check Balance)
สถานการณ์: จำลองระบบตู้ ATM ที่ต้องวิ่งไปเช็คยอดเงินในบัญชีก่อน ถ้าเงินพอให้ถอนได้ ถ้าเงินไม่พอให้ปฏิเสธ

สิ่งที่ต้องทำ:

สร้างฟังก์ชันชื่อ checkAccountBalance(amountRequest) ที่ส่งคืนค่าเป็น Promise
ใช้ setTimeout จำลองการหน่วงเวลา 1.5 วินาที (1500 มิลลิวินาที) ในการเชื่อมต่อระบบธนาคาร

สมมติว่าผู้ใช้งานมีเงินในบัญชีอยู่ 20,000 บาท
ถ้า amountRequest น้อยกว่าหรือเท่ากับ 20,000 ➡️ ให้เรียก resolve() พร้อมส่งข้อความกลับไปว่า "ถอนเงินสำเร็จจำนวน X บาท"
ถ้า amountRequest มากกว่า 20,000 ➡️ ให้เรียก reject() พร้อมส่งข้อความกลับไปว่า "ยอดเงินในบัญชีไม่เพียงพอ"
เรียกใช้งานฟังก์ชันนี้ในไฟล์หลัก โดยใช้ Async / Await และครอบด้วย try...catch เพื่อทดสอบทั้งกรณีที่ถอนผ่าน (เช่น ถอน 5,000) และถอนไม่ผ่าน (เช่น ถอน 50,000)
*/
let balance = 20000;

function checkAccountBalance(amountRequest) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (balance >= amountRequest) {
        resolve(`ถอนเงินสำเร็จจำนวน ${amountRequest} บาท`);
      } else {
        reject("ยอดเงินในบัญชีไม่เพียงพอ");
      }
    }, 1500);
  });
}

async function runTest(amount) {
  try {
    const result = await checkAccountBalance(amount);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

runTest(5000);

/*
🎯 ข้อที่ 2: ระบบยิงออเดอร์ร้านอาหาร (Food Ordering System)
สถานการณ์: จำลองกระบวนการสั่งอาหารออนไลน์ที่จะทำงานทีละสเต็ปตามเวลาที่กำหนด

สิ่งที่ต้องทำ:

สร้างฟังก์ชันขึ้นมา 3 ตัว (ให้ทุกตัวส่งคืนค่าเป็น Promise และใช้ setTimeout ตามเวลาที่กำหนด):

placeOrder(menu) ➡️ ใช้เวลา 1 วินาที สั่งเสร็จแล้วให้ resolve("รับออเดอร์ [ชื่อเมนู] เรียบร้อย")

cookFood() ➡️ ใช้เวลา 2 วินาที ทำอาหารเสร็จแล้วให้ resolve("อาหารปรุงเสร็จแล้วพร้อมเสิร์ฟ")

deliverFood() ➡️ ใช้เวลา 1.5 วินาที ส่งของเสร็จแล้วให้ resolve("ไรเดอร์ส่งอาหารคิวนี้ถึงมือคุณแล้ว")

สร้างฟังก์ชันหลักชื่อ startFoodProcess() โดยด้านในให้เรียกใช้ 3 ฟังก์ชันด้านบนตามลำดับด้วย Async / Await

เมื่อรันคำสั่ง โค้ดจะต้องพ่นข้อความอัปเดตสถานะออกมาใน Terminal ทีละสเต็ปตามเวลาจริงที่หน่วงไว้จนจบกระบวนการ
*/

function placeOrder(menu) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`รับออเดอร์ ${menu} เรียบร้อย`);
    }, 1000);
  });
}

function cookFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`อาหารปรุงเสร็จแล้วพร้อมเสิร์ฟ`);
    }, 2000);
  });
}

function deliverFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`ไรเดอร์ส่งอาหารคิวนี้ถึงมือคุณแล้ว`);
    }, 1500);
  });
}

async function startFoodProcess(menu) {
  try {
    console.log("กำลังเริ่มกระบวนการสั่งอาหาร...");

    const orderResult = await placeOrder(menu);
    console.log(orderResult);

    const cookResult = await cookFood();
    console.log(cookResult);

    const deliverResult = await deliverFood();
    console.log(deliverResult);

    console.log("กระบวนการสั่งอาหารเสร็จสมบูรณ์");
  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error);
  }
}

startFoodProcess("Moo Kra ta");
