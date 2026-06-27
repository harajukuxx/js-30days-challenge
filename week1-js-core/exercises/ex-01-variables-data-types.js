/*
โจทย์:ให้สร้างตัวแปรเก็บข้อมูลสินค้าในร้านค้าออนไลน์ 
โดยมีข้อมูลดังนี้:ชื่อสินค้า (เช่น "คีย์บอร์ดกลไก")ราคาต่อชิ้น (เช่น 2500)จำนวนที่ลูกค้าซื้อ (เช่น 3)
สิ่งที่ต้องทำ:เลือกใช้ let หรือ const ให้เหมาะสมกับตัวแปรแต่ละตัวคำนวณราคารวมทั้งหมด (ราคาต่อชิ้น $\times$ จำนวนที่ซื้อ)
ใช้ Template Literals แสดงผลออกมาในรูปแบบนี้บน Console:"คุณซื้อ [ชื่อสินค้า] จำนวน [จำนวน] ชิ้น ราคารวมทั้งสิ้น [ราคารวม] บาท"
*/

const product = "Keyboard";
let price = 2500;
let quanlity = 3;
let finalPrice = price * quanlity;
console.log(
  `คุณซื้อ ${product} ราคา ${price} จำนวน ${quanlity} ชิ้น ราคารวมทั้งสิ้น ${finalPrice} บาท`,
);

/*
โจทย์:
มีเพื่อนส่งตัวแปรที่เก็บข้อมูลแปลกๆ มาให้คุณ 2 ตัวแปร:
JavaScript
let scoreA = "85";
let scoreB = 90;
สิ่งที่ต้องทำ:
ตรวจสอบว่า scoreA และ scoreB มี Data Type เป็นอะไร โดยใช้คำสั่ง typeof แล้วพิมพ์ออกมาดู
ลองเอาคะแนนทั้งสองมาบวกกันตรงๆ แล้วเก็บในตัวแปร total1 (ดูว่าเกิดอะไรขึ้น)
แปลกใช่ไหมล่ะ? ให้ทำการ แปลงประเภทข้อมูล (Type Conversion) ของ scoreA ให้กลายเป็นตัวเลขที่ถูกต้องก่อน แล้วค่อยนำมารวมกับ scoreB อีกครั้งเก็บไว้ในตัวแปร total2
ใช้ Template Literals พิมพ์ผลลัพธ์ของ total2 ออกมาให้สวยงาม
*/

let scoreA = "85";
let scoreB = 90;

console.log(typeof scoreA);
console.log(typeof scoreB);
let total2 = parseInt(scoreA) + scoreB;
console.log(`ผมรวม ${scoreA} + ${scoreB} เท่ากับ ${total2}`);

/*
โจทย์:
คุณกำลังทำระบบจัดการคลังข้อมูลหนังสือ และมีวัตถุ (Object) เริ่มต้นดังนี้:
JavaScript
const book = {
    title: "JS for Beginners",
    author: "Anonymus",
    price: 350
};
สิ่งที่ต้องทำ:
ค้นพบว่าชื่อคนแต่งสะกดผิด! ให้เปลี่ยนค่า author ใน Object book ให้กลายเป็น "John Doe" (ใบ้ให้: คิดดีๆ ว่าทำไมใช้ const แล้วยังเปลี่ยนค่าข้างใน Object ได้?)
ให้สร้างตัวแปรใหม่ชื่อ discountedBook โดยทำการก๊อปปี้ข้อมูลจาก book มา 
แต่มีข้อแม้ว่า เมื่อลดราคา price ของ discountedBook เหลือ 200 บาทแล้ว ราคาของ book ตัวเดิมต้องไม่ลดตาม (ห้ามเกิดปัญหา Reference ชี้ที่เดียวกัน!)
ใช้ Template Literals แบบขึ้นบรรทัดใหม่ได้ (Multi-line) เพื่อพิมพ์ใบเสร็จสรุปข้อมูลของ book ตัวแรก ออกมาในรูปแบบนี้:
=== รายละเอียดหนังสือ ===
ชื่อเรื่อง: JS for Beginners
ผู้แต่ง: John Doe
ราคา: 350 บาท
======================
*/

const book = {
  title: "JS for Beginners",
  author: "Anonymus",
  price: 350,
};

book.author = "John Doe";
const discountedBook = { ...book };
discountedBook.price = 200;
console.log(`=== รายละเอียดหนังสือ ===
ชื่อเรื่อง: ${book.title}
ผู้แต่ง: ${book.author}
ราคา: ${book.price}
======================`);
