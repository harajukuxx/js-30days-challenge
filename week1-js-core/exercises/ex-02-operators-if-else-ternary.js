/*
โจทย์ข้อที่ 1: ระบบคำนวณค่าจัดส่ง (ใช้ Operators และ If/Else)
จงเขียนโปรแกรมคำนวณราคาสุทธิที่ลูกค้าต้องจ่าย โดยรับตัวแปรมา 2 ตัวคือ:
cartTotal (ยอดรวมสินค้าในตะกร้า)
isPremiumMember (เป็นสมาชิกพรีเมียมหรือไม่ เป็น Boolean)
เงื่อนไข:
ถ้ามียอดสินค้า (cartTotal) ตั้งแต่ 1,500 บาทขึ้นไป หรือ เป็นสมาชิกพรีเมียม (isPremiumMember เป็น true) จะได้ ส่งฟรี (ค่าส่ง = 0)
นอกเหนือจากนั้น จะต้องคิดค่าจัดส่ง 80 บาท
ให้คำนวณราคาสุทธิที่ลูกค้าต้องจ่าย (ยอดสินค้า + ค่าส่ง) แล้วพิมพ์สรุปออกมาโดยใช้ Template Literals
*/
let shipFee;
let cartTotal = 500;
let isPremiumMember = true;
let finalPrice;

if (cartTotal >= 1500 || isPremiumMember) {
  shipFee = 0;
} else {
  shipFee = 80;
}
finalPrice = cartTotal + shipFee;
console.log(`ยอดสินค้ารวมค่าส่ง คือ ${finalPrice} บาท`);

/*
โจทย์ข้อที่ 2: แปลงร่างสคริปต์ตรวจสอบเวลา (ใช้ Ternary Operator)
จงแปลงโค้ด if/else ด้านล่างนี้ ให้กลายเป็น Ternary Operator บรรทัดเดียว ให้ถูกต้อง:

JavaScript
let currentHour = 14; // เวลาบ่ายสอง
let greeting;

if (currentHour < 12) {
    greeting = "Good Morning";
} else {
    greeting = "Good Afternoon";
}
console.log(greeting);
*/

let currentHour = 14; // เวลาบ่ายสอง
let greeting;
greeting = currentHour < 12 ? "Good Morning" : "Good Afternoon";
console.log("🚀 ~ greeting:", greeting);
