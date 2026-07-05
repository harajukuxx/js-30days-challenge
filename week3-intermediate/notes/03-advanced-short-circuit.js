/*
ท่าที่ 1: ?. ควบคู่กับ ?? (คู่หูดึงข้อมูลอย่างปลอดภัย)
นี่คือ ท่าที่นิยมที่สุดในปัจจุบัน ใช้เวลาที่เราต้องการเจาะเข้าไปดึงข้อมูลจาก Object ลึก ๆ โดยไม่ให้แอปแครช 
และถ้าไม่มีข้อมูลนั้นจริง ๆ ก็ให้ใส่ ค่าเริ่มต้น (Default Value) สำรองไว้ทันที

?. (Optional Chaining): ทำหน้าที่บอกว่า "ถ้าชั้นนี้ไม่มีข้อมูล ให้หยุดเจาะแล้วคืนค่า undefined ออกมา (แอปไม่พัง)"
?? (Nullish Coalescing): ทำหน้าที่บอกว่า "ถ้าค่าข้างหน้ามันพังหรือหาไม่เจอ (null/undefined) ให้เอาค่าสำรองด้านหลังนี้ไปใช้แทน"
*/

// สมมติข้อมูลที่ส่งมาจากหน้าบ้าน (บางคนส่งมาครบ บางคนส่งมาขาด)
const reqUser = {
  name: "Tina",
  account: {
    bonusPoints: 0, // เป็นเลข 0
  },
  // ไม่มีข้อมูล address
};

// ❌ ท่าอันตรายแบบโบราณ: แอปพังทันทีถ้าไม่มี address
// const zip = reqUser.address.zipcode;

// ✅ ท่ามาตรฐานที่นิยมที่สุดในปัจจุบัน:
const zipCode = reqUser?.address?.zipcode ?? "10100";
const points = reqUser?.account?.bonusPoints ?? 100;

console.log(zipCode); // 👉 "10100" (ดึงไม่ได้เพราะไม่มี address เลยใช้ค่าสำรอง)
console.log(points); // 👉 0 (ดึงได้เลข 0 ซึ่ง ?? ฉลาดพอที่จะไม่กลบเลข 0 ให้กลายเป็น 100)

/*
ท่าที่ 2: && สำหรับสวิตช์สั่งรันฟังก์ชัน (Short-circuit Execution)
ในฝั่ง Backend เรามักจะใช้ && ในการตรวจสอบเงื่อนไขสั้น ๆ ก่อนที่จะสั่งให้ฟังก์ชันถัดไปทำงาน แทนการเขียน if ครอบให้รกโค้ด

หลักการคือ: "ถ้าฝั่งซ้ายเป็นจริง (True) ให้ข้ามไปรันคำสั่งฝั่งขวาต่อทันที"
*/
const user = { isAdmin: true, name: "Tina" };

// 🦖 ท่าทั่วไปที่เขียนยาว:
if (user.isAdmin) {
  sendAdminNotification();
}

// 🚀 ท่า Short-circuit ที่นิยมเขียนกันในฟังก์ชันสั้น ๆ:
user.isAdmin && sendAdminNotification();
// ความหมายเหมือนกันเป๊ะ: ถ้าเป็น Admin จริง ขวาทำงานทันที ถ้าไม่ใช้ ขวาจะถูกข้าม

function getUserStatus(response) {
  // ✅ ใช้ ?. เจาะเข้าไปอย่างปลอดภัย และใช้ ?? เพื่อใส่ค่าเริ่มต้น
  return response?.data?.status ?? "pending";
}

console.log(getUserStatus(null));
// 👉 "pending" (เพราะ response พังตั้งแต่แรก)

console.log(getUserStatus({}));
// 👉 "pending" (เพราะไม่มี data ด้านใน)

console.log(getUserStatus({ data: { status: "active" } }));
// 👉 "active" (เพราะข้อมูลมาครบสมบูรณ์)

console.log(getUserStatus({ data: { status: "" } }));
// 👉 "" (ถ้าค่าสเตตัสเป็นสตริงว่างเปล่า ตัว ?? จะยังคงยอมรับค่านี้ ไม่กลบเป็น pending)
