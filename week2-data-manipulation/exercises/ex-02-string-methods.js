/*โจทย์ข้อที่ 1: ระบบ Clean Data สลิปโอนเงิน (ระดับ: ง่าย 🟢)
สถานการณ์: มีบอทส่งข้อความสลิปมาให้หลังบ้าน แต่ใน String มีช่องว่างเกินมา และพิมพ์รหัสอ้างอิงเป็นตัวพิมพ์เล็ก-ใหญ่ผสมกัน มั่วไปหมด

โจทย์: จงตัดช่องว่างหน้า-หลังออกให้หมด และแปลงรหัส refCode ให้เป็น ตัวพิมพ์ใหญ่ทั้งหมด เพื่อความง่ายในการบันทึกลงคลังข้อมูล
*/
const rawRefCode = "   Txn-99824-ApI   ";

const cleanRefCode = rawRefCode.toUpperCase().trim();

console.log(cleanRefCode); // ผลลัพธ์ที่ควรได้: "TXN-99824-API"*/

/*
โจทย์ข้อที่ 2: ดึงข้อมูลจาก URL Path (ระดับ: ปานกลาง 🟡)
สถานการณ์: มี Request ยิงเข้ามาที่ API เส้นหนึ่ง มี URL Path เป็น /v1/users/USR-779/profile

โจทย์: จงใช้เครื่องมือตัดหรือแบ่ง String เพื่อดึงเอาเฉพาะ User ID (USR-779) ออกมาเก็บไว้ในตัวแปรเพื่อนำไป Query ค้นหาในฐานข้อมูลต่อไป
*/

const requestPath = "/v1/users/USR-779/profile";

// 📝 เขียนโค้ดของคุณตรงนี้ (ใบ้ให้ว่าใช้ split() หรือ slice() ก็ได้ ลองเลือกวิธีที่ชอบครับ)
const userId = requestPath.split("/");
const [path, ver, role, id, sub] = userId;

// const [ , , , id] = requestPath.split("/");
console.log(id); // ผลลัพธ์ที่ควรได้: "USR-779"*/

/*
โจทย์ข้อที่ 5: ระบบกรองคำหยาบและปรับฟอร์แมตข้อมูล (Content Moderation System)
สถานการณ์: คุณกำลังทำระบบหลังบ้านให้กับแพลตฟอร์มโซเชียลมีเดีย โดยแอดมินส่ง List ของคำหยาบ (Banned Words) มาให้ในรูปแบบ String ยาว ๆ ที่คั่นด้วยเครื่องหมายคอมม่า ,
นอกจากนี้ คุณได้รับข้อความคอมเมนต์จากผู้ใช้งาน (userComment) ที่พิมพ์เข้ามา โดยผู้ใช้งานตั้งใจพิมพ์เว้นวรรคสะเปะสะปะ และใช้ตัวพิมพ์เล็ก-ใหญ่ผสมกันเพื่อเลี่ยงการตรวจจับ

เงื่อนไขระบบหลังบ้าน:

แปลง String คำหยาบ (bannedWordsRaw) ให้กลายเป็น Array ของคำหยาบที่เป็นตัวพิมพ์เล็กทั้งหมด และ ไม่มีช่องว่างเหลืออยู่
นำคอมเมนต์ของผู้ใช้ (userComment) มาทำการ trim() ตัดช่องว่างหน้าหลัง และแปลงเป็น ตัวพิมพ์เล็กทั้งหมด เพื่อให้พร้อมสำหรับตรวจสอบ
ตรวจสอบว่าในคอมเมนต์นั้น มีคำหยาบคำใดคำหนึ่งใน Array แฝงอยู่หรือไม่ (ใช้ Array Method ร่วมกับ String Method)
ผลลัพธ์ (Output): * ถ้าตรวจเจอคำหยาบ ให้เปลี่ยนค่าในตัวแปร isClean เป็น false และสั่ง console.log("🚨 คอมเมนต์นี้ไม่ผ่านการตรวจสอบ: ตรวจพบคำหยาบ!")
ถ้าตรวจแล้วปลอดภัย ให้ isClean เป็น true และสั่ง console.log("✅ คอมเมนต์ปลอดภัย อนุญาตให้โพสต์ได้")

💡 คำใบ้พิเศษ: สำหรับขั้นตอนที่ 3 ลองคิดถึง Array Method ที่เราเพิ่งเรียนไปในรอบแรก (เช่น some หรือ every) นำมาประยุกต์ใช้ร่วมกับ String Method อย่าง includes ดูครับ
// ตรวจสอบผลลัพธ์
// ผลลัพธ์ที่ควรได้ใน console: "🚨 คอมเมนต์นี้ไม่ผ่านการตรวจสอบ: ตรวจพบคำหยาบ!"
*/

// 1. ข้อมูลคำหยาบจากแอดมิน (มีช่องว่างปนมา และพิมพ์ใหญ่พิมพ์เล็กปนกัน)
const bannedWordsRaw = "  ScAm  ,  gAmBlE , hAcK  ";
const splitWordsRaw = bannedWordsRaw.split(",");

const cleanBannedWords = [];

splitWordsRaw.forEach((element) => {
  cleanBannedWords.push(element.toLowerCase().trim());
});
console.log(cleanBannedWords);
// const cleanBannedWords = bannedWordsRaw.split(",").map((word) => word.toLowerCase().trim());

// 2. คอมเมนต์ที่ผู้ใช้ส่งเข้ามา
const userComment = "   This website is a sCaM and dangerous!   ";
const cleanComment = userComment.toLowerCase().trim();
console.log("🚀 ~ cleanComment:", cleanComment);

let isClean = true;

// เปลี่ยนจากเช็คตรงๆ มาใช้ .some() ของ Array ช่วยวนเช็คทีละคำ
const hasBannedWord = cleanBannedWords.some((word) =>
  cleanComment.includes(word),
);

// ถ้า hasBannedWord เป็น true แปลว่าเจอคำหยาบ -> isClean ต้องกลายเป็น false
if (hasBannedWord) {
  isClean = false;
  console.log("🚨 คอมเมนต์นี้ไม่ผ่านการตรวจสอบ: ตรวจพบคำหยาบ!");
} else {
  isClean = true;
  console.log("✅ คอมเมนต์ปลอดภัย อนุญาตให้โพสต์ได้");
}
