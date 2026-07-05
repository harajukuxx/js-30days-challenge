/*
ข้อที่ 1: กันพังด้วย Default (ระดับ: ง่าย)
โจทย์: จงเขียนฟังก์ชันชื่อ calculatePrice เพื่อคำนวณราคาสินค้ารวมภาษีมูลค่าเพิ่ม (VAT)

รับพารามิเตอร์ 2 ตัวคือ amount (ราคาสินค้าก่อน VAT) และ vatRate (เปอร์เซ็นต์ VAT)

เงื่อนไข: ถ้าคนเรียกฟังก์ชันไม่ได้ส่งค่า vatRate มา ให้กำหนดค่าเริ่มต้นเป็น 7 (เปอร์เซ็นต์) เสมอ

ตัวอย่างผลลัพธ์ที่ต้องได้:

JavaScript
console.log(calculatePrice(100, 10)); // ผลลัพธ์ควรได้: 110 (100 + VAT 10%)
console.log(calculatePrice(200));     // ผลลัพธ์ควรได้: 214 (200 + VAT 7% อัตโนมัติ)
*/

function calculatePrice(amount, vatRate = 7) {
  return amount + (amount * vatRate) / 100;
}
console.log(calculatePrice(100, 10));
console.log(calculatePrice(200));

/*
ข้อที่ 2: รวบตึงด้วย Rest (ระดับ: ปานกลาง)
โจทย์: จงเขียนฟังก์ชันชื่อ buildSentence สำหรับต่อประโยค

รับพารามิเตอร์ตัวแรกเป็น separator (ตัวคั่นข้อความ เช่น ช่องว่าง, ขีดขีด)
พารามิเตอร์ที่เหลือทั้งหมดจะเป็นคำศัพท์กี่คำก็ได้ (ใช้ Rest Parameter)
ให้ฟังก์ชันนำคำศัพท์เหล่านั้นมารวมกันเป็นประโยคเดียว โดยคั่นด้วย separator ที่ส่งมา (คำใบ้: ลองใช้คำสั่ง .join() ของ Array ดูครับ)

ตัวอย่างผลลัพธ์ที่ต้องได้:
JavaScript
console.log(buildSentence(" ", "JavaScript", "is", "fun")); 
// ผลลัพธ์ควรได้: "JavaScript is fun"
console.log(buildSentence(" - ", "Apple", "Banana", "Orange")); 
// ผลลัพธ์ควรได้: "Apple - Banana - Orange"
*/

function buildSentence(separator, ...etc) {
  return etc.join(separator);
}
console.log(buildSentence(" ", "JavaScript", "is", "fun"));
console.log(buildSentence(" - ", "Apple", "Banana", "Orange"));

/*
ข้อที่ 3: จัดการ Object แฟนพันธุ์แท้ (ระดับ: ประยุกต์ใช้งานจริง)
โจทย์: ในโลกการทำงานจริง เรานิยมใช้ Default Parameter ร่วมกับ Object Destructuring (การแกะของออกจากตู้คอนเทนเนอร์) จงเขียนฟังก์ชันชื่อ createUserProfile เพื่อสร้าง Object ข้อมูลผู้ใช้

รับพารามิเตอร์เป็น Object 1 ก้อน ด้านในอาจจะมี username, role, และ status
เงื่อนไข:
ถ้าไม่มีการส่ง Object ใด ๆ เข้ามาเลย ให้ตั้งค่าเริ่มต้นเป็น Object ว่าง {} ก่อนกันพัง
ถ้าข้างในไม่มี role ให้ตั้งเป็น "guest"
ถ้าข้างในไม่มี status ให้ตั้งเป็น "active"

ตัวอย่างผลลัพธ์ที่ต้องได้:
console.log(createUserProfile({ username: "mario", role: "admin" }));
// ผลลัพธ์ควรได้: { username: "mario", role: "admin", status: "active" }

console.log(createUserProfile({ username: "luigi" }));
// ผลลัพธ์ควรได้: { username: "luigi", role: "guest", status: "active" }

console.log(createUserProfile()); 
// ผลลัพธ์ควรได้: { username: undefined, role: "guest", status: "active" } (ไม่พังเพราะมีเดฟอลต์ดัก)
*/

// แกะเอา username, role, status ออกมาจาก Object ที่ส่งมาตรง ๆ
// และถ้าแกะแล้วตัวไหนไม่มีค่าค่อยใส่ Default ให้มันข้างในนี้เลย
function createUserProfile({
  username,
  role = "guest",
  status = "active",
} = {}) {
  return { username, role, status };
}

// console.log(createUserProfile({ username: "mario", role: "admin" }));
// console.log(createUserProfile({ username: "luigi" }));
// console.log(createUserProfile());

/*
🏋️‍♂️ โจทย์ข้อ 3.5: ระบบตั้งค่า Server (ระดับ: Advance ประยุกต์ขั้นสุด)
บริบท: คุณกำลังเขียนฟังก์ชันชื่อ initializeServer เพื่อเปิดใช้งาน Server โดยฟังก์ชันนี้จะรับ Object ตั้งค่าเข้ามา 1 ก้อนใหญ่ ๆ

เงื่อนไขและสิ่งที่ต้องทำ:

ฟังก์ชันนี้รับพารามิเตอร์เป็น Object 1 ก้อน (ถ้าผู้ใช้ไม่ได้ส่ง Object ใด ๆ มาเลย ต้องไม่พัง และให้ใช้ค่าเริ่มต้นทั้งหมด)
ให้แกะตัวแปรและตั้งค่าเริ่มต้นภายในพารามิเตอร์ ด้วยเงื่อนไขดังนี้:
protocol: ค่าเริ่มต้นคือ "https"
port: ค่าเริ่มต้นคือ 8080
dbConfig: ตัวนี้เป็น Object ซ้อนอยู่ข้างใน ต้องแกะไส้ในของมันออกมาอีกที โดยมีเงื่อนไขว่า:

ถ้าไม่มีการส่ง dbConfig มาเลย หรือส่งมาแต่ข้างในไม่มีค่า ให้ตั้งค่าเริ่มต้นของ host เป็น "localhost" และ user เป็น "root"
ตัวแปรเก็บตก: ค่าอื่น ๆ ทั้งหมดที่นอกเหนือจาก 3 ตัวด้านบน (เช่นพวก timeout, maxConnections หรืออะไรก็ตามที่ผู้ใช้แถมมา) 
ให้ใช้ Rest Parameter รวบรวมพวกมันไปเก็บไว้ใน Object ตัวใหม่ที่ชื่อว่า extraOptions
ให้ฟังก์ชันทำการ return ผลลัพธ์กลับออกมาเป็น Object หน้าตาแบบนี้:

JavaScript
return {
  url: `${protocol}://localhost:${port}`,
  database: { host, user },
  additional: extraOptions
};
*/

function initializeServer({
  protocol = "https",
  port = 8080,
  dbConfig: { host = "localhost", user = "root" } = {},
  ...extraOptions
} = {}) {
  return {
    url: `${protocol}://localhost:${port}`,
    database: { host, user },
    additional: extraOptions,
  };
}

console.log(
  initializeServer({
    protocol: "http",
    port: 3000,
    dbConfig: { host: "192.168.1.1", user: "admin" },
    timeout: 5000,
    retries: 3,
  }),
);

console.log(
  initializeServer({
    port: 9000,
    debugMode: true,
  }),
);

console.log(initializeServer());
