/*
📝 ข้อที่ 1: คำนวณยอดรวมและภาษีของตะกร้าสินค้า (Cart Total & Tax)
สถานการณ์: คุณกำลังเขียนระบบหลังบ้านให้กับเว็บ E-Commerce และต้องทำฟังก์ชันคำนวณราคาสินค้าทั้งหมดในตะกร้า (productCart) เพื่อส่งยอดรวมไปเก็บเงินลูกค้า

JavaScript
const productCart = [
  { name: "Gaming Monitor", price: 8900, qty: 1 },
  { name: "Wireless Mouse", price: 1500, qty: 2 },
  { name: "Mechanical Keyboard", price: 3200, qty: 1 }
];
โจทย์:
จงใช้ forEach ในการวนลูปคำนวณหา ราคารวมทั้งหมด (Total Price) ของสินค้าในตะกร้า (ราคาสินค้าแต่ละรายการคิดจาก price * qty)
คำนวณ ภาษีมูลค่าเพิ่ม 7% (VAT) จากยอดรวมนั้น
คำนวณ ยอดสุทธิที่ลูกค้าต้องจ่าย (Net Price) (ยอดรวม + VAT)
แสดงผลลัพธ์ทั้ง 3 ค่าออกทาง console.log (พิมพ์เป็นตัวเลขธรรมดาได้เลยครับ)
*/
const productCart = [
  { name: "Gaming Monitor", price: 8900, qty: 1 },
  { name: "Wireless Mouse", price: 1500, qty: 2 },
  { name: "Mechanical Keyboard", price: 3200, qty: 1 },
];

let totalPrice = 0;

productCart.forEach((element) => {
  totalPrice += element.price * element.qty;
});

let vatPrice = (totalPrice * 7) / 100;
let netPrice = totalPrice + vatPrice;
console.log("🚀 ~ totalPrice:", totalPrice.toFixed(2));
console.log("🚀 ~ vatPrice:", vatPrice.toFixed(2));
console.log("🚀 ~ netPrice:", netPrice.toFixed(2));

/*
📝 ข้อที่ 2: ระบบคัดกรองสิทธิ์และตัดจบการทำงาน (User Permission & Early Break)
สถานการณ์: คุณได้รับ Array ของ Object ข้อมูลผู้ใช้ที่กำลังต่อคิวเพื่อเข้าใช้งานระบบ Server ตัวหลัก แต่เนื่องจาก Server มีโควตาจำกัด 
ระบบจะอนุญาตให้เฉพาะผู้ใช้ที่มีสถานะเป็นกลุ่มปลอดภัยอัปเดตเข้าใช้งานได้ และหากเจอผู้ใช้ที่มีสิทธิ์เป็น "banned" ระบบจะต้องหยุดทำงานทันทีเพื่อความปลอดภัย

JavaScript
const userQueue = [
  { username: "alex_99", role: "member", status: "active" },
  { username: "tina_dev", role: "admin", status: "active" },
  { username: "dark_hacker", role: "member", status: "banned" }, // 🚨 เจอคนนี้ต้องเลิกทำงานทันที!
  { username: "somchai_pro", role: "member", status: "active" }  // คนนี้จะไม่ถูกตรวจสอบเพราะระบบหยุดไปก่อน
];
โจทย์:

จงเลือกใช้ Loop ที่เหมาะสม (for แบบคลาสสิก หรือ for...of) เพื่อไล่ตรวจสอบผู้ใช้ทีละคนใน userQueue
ในขณะที่วนลูป:
ถ้าเจอคนที่มี status: "active" ให้ console.log ว่า "Allow access for: [username]"
ถ้าเจอคนที่มี status: "banned" ให้ console.log ว่า "🚨 Threat detected! Stopping system for: [username]" และสั่งหยุดลูป (Exit Loop) ทันที
*/
const userQueue = [
  { username: "alex_99", role: "member", status: "active" },
  { username: "tina_dev", role: "admin", status: "active" },
  { username: "dark_hacker", role: "member", status: "banned" }, // 🚨 เจอคนนี้ต้องเลิกทำงานทันที!
  { username: "somchai_pro", role: "member", status: "active" }, // คนนี้จะไม่ถูกตรวจสอบเพราะระบบหยุดไปก่อน
];

for (const user of userQueue) {
  if (user.status !== "banned") {
    console.log(`Allow access for: ${user.username}`);
  } else {
    console.log(`🚨 Threat detected! Stopping system for: ${user.username}`);
    break;
  }
}
