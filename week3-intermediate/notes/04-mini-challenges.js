/*
Challenge 1: Data Filter & Transformer (ระบบคัดกรองข้อมูล)
โจทย์: มีข้อมูลธุรกรรมของลูกค้าเข้ามาเป็น Array ของ Object ให้คุณเขียนฟังก์ชันคัดกรองเฉพาะรายการที่เป็นประเภท "income" (รายรับ) 
และมียอดเงินตั้งแต่ 500 ขึ้นไป จากนั้นให้แปลงผลลัพธ์ให้อยู่ในตระกูลเงินบาท (THB) โดยเพิ่มข้อความ " THB" ต่อท้ายยอดเงิน

ข้อมูลตั้งต้น:
JavaScript
*/
const transactions = [
  { id: 1, type: "income", amount: 1200 },
  { id: 2, type: "expense", amount: 150 },
  { id: 3, type: "income", amount: 300 },
  { id: 4, type: "income", amount: 550 },
  { id: 5, type: "expense", amount: 2000 },
];
/*
ผลลัพธ์ที่ต้องได้ (Expected Output):
JavaScript
// [
//   { id: 1, type: 'income', amount: '1200 THB' },
//   { id: 4, type: 'income', amount: '550 THB' }
// ]
💡 คำใบ้: ใช้ .filter() ร่วมกับ .map() และ Template Literals ในการต่อสตริง
*/
const newTrc = transactions
  .filter((item) => item.amount >= 500 && item.type === "income")
  .map((item) => {
    return {
      id: item.id,
      type: item.type,
      amount: `${item.amount} THB`,
    };
  });
console.log("🚀 ~ newTrc:", newTrc);

/*
const newTrc = transactions
  .filter((item) => item.amount >= 500 && item.type === "income")
  .map((item) => ({ ...item, amount: `${item.amount} THB` })); // คลีนและสั้นลงมาก
*/

/*
Challenge 2: User Profile Completeness (Short-circuit & Destructuring)
โจทย์: เขียนฟังก์ชันชื่อ getProfileSummary รับ Object ข้อมูลผู้ใช้เข้ามา ทำการ Destructuring ดึงค่าออกมา 
ถ้าผู้ใช้ไม่มีรูปโปรไฟล์ (avatar) ให้ใช้รูปภาพ Default คือ "default-avatar.png" เป็นค่าสำรอง 
และถ้าไม่มีการระบุอาชีพ (job) ให้ใส่ค่าเริ่มต้นเป็น "Unemployed" โดยส่งผลลัพธ์กลับไปเป็น Object ใหม่

ข้อมูลตั้งต้น:
JavaScript
*/
const user1 = { name: "Anan", avatar: "profile.jpg", job: "Developer" };
const user2 = { name: "Siri", avatar: null }; // ไม่มี job และ avatar เป็น null
/*
ผลลัพธ์ที่ต้องได้ (Expected Output):

JavaScript
console.log(getProfileSummary(user1));
// { name: 'Anan', avatar: 'profile.jpg', job: 'Developer' }

console.log(getProfileSummary(user2));
// { name: 'Siri', avatar: 'default-avatar.png', job: 'Unemployed' }
💡 คำใบ้: ใช้ Destructuring คู่กับ Default Values หรือใช้เครื่องหมาย || (Short-circuit) มาช่วยจัดการค่าที่เป็น null หรือ undefined
*/

function getProfileSummary(obj) {
  const { name, avatar = "default-avatar.png", job = "Unemployed" } = obj;
  return {
    name: name,
    avatar: avatar ?? "default-avatar.png",
    job: job ?? "Unemployed",
  };
}

/* Clean Code
function getProfileSummary(obj) {
  const { name, avatar, job } = obj;
  return {
    name,
    avatar: avatar ?? "default-avatar.png",
    job: job ?? "Unemployed", 
  };
}
*/

console.log(getProfileSummary(user1));
console.log(getProfileSummary(user2));
/*
Challenge 3: Financial Summary Calculator (The .reduce() Master)
โจทย์: มีข้อมูลพอร์ตการลงทุนในแต่ละสินทรัพย์ ให้คำนวณหา "มูลค่ารวมรวมของพอร์ต" (Total Value) และแยกหา "จำนวนประเภทสินทรัพย์ทั้งหมด" (Count) โดยใช้ .reduce() เพื่อจบงานในรอบเดียว

ข้อมูลตั้งต้น:

JavaScript
*/
const portfolio = [
  { asset: "Global Stock", value: 50000 },
  { asset: "Gold fund", value: 30000 },
  { asset: "US Tech ETF", value: 45000 },
];
/*
ผลลัพธ์ที่ต้องได้ (Expected Output):
JavaScript
// { totalValue: 125000, totalAssets: 3 }
💡 คำใบ้: กำหนดค่าเริ่มต้น (Initial Value) ของ .reduce() ให้เป็น Object { totalValue: 0, totalAssets: 0 } แล้วค่อยๆ บวกสะสมเข้าไปในแต่ละรอบ
*/
/* ผิด
const totalValue = portfolio.reduce((acc, cur, index) => {
  return {
    totalValue: acc + cur.value,
    totalIndex: index + 1,
  };
}, 0);
*/

const totalValue = portfolio.reduce(
  (acc, cur) => {
    return {
      totalValue: acc.totalValue + cur.value, // ดึงค่าจากรอบก่อนมาบวกเพิ่ม
      totalAssets: acc.totalAssets + 1, // นับจำนวนคีย์เพิ่มทีละ 1
    };
  },
  { totalValue: 0, totalAssets: 0 },
);

console.log(totalValue);
// ผลลัพธ์: { totalValue: 125000, totalAssets: 3 }
/*
ได้เลยครับ! จัดไปอีก 3 ข้อเพื่อความเข้มข้น พาร์ทนี้ผมดีไซน์มาให้คุณได้ประยุกต์ใช้ Spread Operator, Destructuring, Property Shorthand 
และแก้ไขจุดซ้อมในข้อ .reduce() จากรอบที่แล้วให้แม่นยำยิ่งขึ้นครับ 🚀

Challenge 4: Clean API Payload (Property Shorthand & Destructuring)
โจทย์: สมมติว่าคุณต้องการดึงข้อมูลจากแบบฟอร์มเพื่อส่งค่าไปให้ API หลังบ้าน แต่ข้อมูลที่ได้มามีคีย์ที่ไม่จำเป็นติดมาด้วย (เช่น isAgreed) 
ให้คุณเขียนฟังก์ชันชื่อ cleanPayload เพื่อดึงเอาเฉพาะ userId, amount, และ status ออกมา จากนั้นให้ส่งคืน (Return) เป็น Object ใหม่ที่มีโครงสร้างตามที่กำหนด

เงื่อนไขพิเศษ: ให้เขียนคีย์ status ใน Object ใหม่ให้อยู่ในชื่อ transferStatus และใช้ Property Shorthand เท่าที่เป็นไปได้

ข้อมูลตั้งต้น:
JavaScript
*/
const formData = {
  userId: "BKK_9942",
  amount: 25000,
  status: "completed",
  isAgreed: true,
  ipAddress: "192.168.1.1",
};
/*
ผลลัพธ์ที่ต้องได้ (Expected Output):

JavaScript
// { userId: 'BKK_9942', amount: 25000, transferStatus: 'completed' }
💡 คำใบ้: ใช้ Destructuring เพื่อดึงและเปลี่ยนชื่อคีย์ (Renaming) ไปพร้อมกัน จากนั้นจัดรูป Object ส่งออกด้วย Property Shorthand
*/

function cleanPayload(params) {
  const { userId, amount, status: transferStatus } = params;

  return { userId, amount, transferStatus };
}

const result = cleanPayload(formData);
console.log("🚀 ~ Result:", result);
/*
Challenge 5: Interest Rate Modifier (Spread & Map)
โจทย์: ธนาคารต้องการปรับอัตราดอกเบี้ยเพิ่มขึ้นอีก 0.25% สำหรับผลิตภัณฑ์เงินฝากทุกประเภท 
ให้คุณเขียนโค้ดเพื่อสร้าง Array ใหม่ โดยอัปเดตค่าดอกเบี้ย (rate) ของทุก Object เพิ่มขึ้นข้อละ 0.25
เงื่อนไขพิเศษ: ห้ามพิมพ์ชื่อคีย์เดิม (id, name) ซ้ำ ให้ใช้ Spread Operator ในการสำเนาข้อมูลเดิมมาทั้งหมดแล้วเขียนทับแค่คีย์ที่ต้องการ

ข้อมูลตั้งต้น:
JavaScript
*/
const savingProducts = [
  { id: "A1", name: "Easy Savings", rate: 1.5 },
  { id: "A2", name: "Fixed Deposit", rate: 2.1 },
  { id: "A3", name: "Super Growth", rate: 1.75 },
];
/*
ผลลัพธ์ที่ต้องได้ (Expected Output):
JavaScript
// [
//   { id: 'A1', name: 'Easy Savings', rate: 1.75 },
//   { id: 'A2', name: 'Fixed Deposit', rate: 2.35 },
//   { id: 'A3', name: 'Super Growth', rate: 2.0 }
// ]
💡 คำใบ้: ใช้ .map() ร่วมกับ Arrow Function แบบบรรทัดเดียว (Implicit Return) และกระจาย Object ด้วย ...
*/
const newRate = savingProducts.map((item) => {
  return {
    ...item,
    rate: item.rate + 0.25,
  };
});
console.log("🚀 ~ newRate:", newRate);

/*
Challenge 6: Fund Classification (The Ultimate .reduce())
โจทย์: มีข้อมูลกองทุนรวมรวมในพอร์ตของคุณ ให้คุณใช้ .reduce() เพื่อจัดหมวดหมู่กองทุนแยกตามประเภท (type) โดยให้ผลลัพธ์ออกมาเป็น Object ตัวเดียวที่เก็บข้อมูลแยกเป็นกลุ่ม

ข้อมูลตั้งต้น:

JavaScript
*/
const funds = [
  { name: "KT-PRECIOUS", type: "Gold" },
  { name: "KT-GOLDUH", type: "Gold" },
  { name: "KT-KOREA", type: "Stock" },
  { name: "SCB-TECH", type: "Stock" },
];
/*
ผลลัพธ์ที่ต้องได้ (Expected Output):

JavaScript
// {
//   Gold: [ "KT-PRECIOUS", "KT-GOLDUH" ],
//   Stock: [ "KT-KOREA", "SCB-TECH" ]
// }
💡 คำใบ้: กำหนด Initial Value ของ .reduce() เป็น Object เปล่า {} แล้วในแต่ละรอบให้ตรวจสอบว่ามีคีย์ประเภทนั้นหรือยัง 
ถ้ายังไม่มีให้สร้าง Array มารองรับ เช่น acc[cur.type] = [] ก่อนจะสั่ง .push() ชื่อกองทุนเข้าไป

*/
const newType = funds.reduce((acc, cur) => {
  if (!acc[cur.type]) {
    acc[cur.type] = [];
  }
  acc[cur.type].push(cur.name);
  return acc;
}, {});
console.log("🚀 ~ newType:", newType);
