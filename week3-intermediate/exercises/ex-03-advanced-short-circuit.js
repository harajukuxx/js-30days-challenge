/*
📝 โจทย์ข้อที่ 1: ระบบดึงข้อมูลโปรไฟล์ร้านค้า (Shop Profile)
สมมติว่าคุณกำลังดึงข้อมูลร้านค้าจาก Database เพื่อส่งกลับไปให้หน้าบ้าน แต่ร้านค้าบางร้านยังตั้งค่าโปรไฟล์ไม่ครบ (ข้อมูลบางส่วนจึงเป็น null หรือ undefined)

กติกา:
สร้างฟังก์ชันชื่อ getShopDisplay(shopData)

ให้ดึงข้อมูล ชื่อร้าน (shopName) ออกมา ถ้าไม่มีให้ใช้คำว่า "ร้านค้าสมาชิก"
ให้ดึงข้อมูล คะแนนรีวิว (rating) ออกมา ถ้าไม่มีให้ใช้ค่าเริ่มต้นเป็น 5 (แต่ถ้าร้านโดนรีวิวแย่จนได้คะแนน 0 ก็ต้องแสดง 0 นะครับ ห้ามบั๊กกลายเป็น 5!)
ให้ดึงข้อมูล ชื่อเมือง ที่อยู่ในโครงสร้าง shopData.location.address.city ออกมาอย่างปลอดภัย ถ้าหาไม่เจอให้ใช้คำว่า "ไม่ระบุ"

*/
function getShopDisplay(shopData) {
  const shopName = shopData.shopName ?? "ร้านค้าสมาชิก";
  const rating = shopData.rating ?? 5;
  const city = shopData.location?.address?.city ?? "ไม่ระบุ";

  return {
    shopName,
    rating,
    city,
  };
}

// เคสทดสอบที่ 1: ข้อมูลมาไม่ครบเลย (location เป็น null)
const shop1 = {
  shopName: "Tina Coffee",
  rating: 0,
  location: null,
};

// เคสทดสอบที่ 2: ข้อมูลโล่ง ๆ มาเลย
const shop2 = {};

// ลองเขียนฟังก์ชันและทดสอบดึงค่าดูครับ
console.log(getShopDisplay(shop1));
console.log(getShopDisplay(shop2));

/*

📝 โจทย์ข้อที่ 2: ระบบคำนวณราคาสินค้ารถเข็น (Shopping Cart Parser)
เวลาหน้าบ้านส่งข้อมูลราคาสินค้าและส่วนลดมาให้เราคำนวณหลังบ้าน บางครั้งลูกค้าก็ไม่ได้กรอกรหัสส่วนลด หรือราคาสินค้าบางตัวอาจจะเป็นของแจกฟรี (ราคา 0 บาท)

กติกา:
สร้างฟังก์ชันชื่อ parseCartItem(itemData)
ให้ดึง ราคาสินค้า (price) ออกมา ถ้าไม่มีราคาแฝงมาเลยให้ตั้งค่าเริ่มต้นเป็น 100 (แต่ถ้าสินค้านั้นราคา 0 บาทจริง ๆ เช่น ของแถม ก็ต้องได้ 0 ห้ามกลายเป็น 100)
ให้ดึง เปอร์เซ็นต์ส่วนลด ที่อยู่ในออบเจกต์ซ้อนลึกลงไปคือ itemData.campaign.discount.percentage ออกมาอย่างปลอดภัย ถ้าไม่มีแคมเปญลดราคาใด ๆ เลย ให้ใส่ค่าเริ่มต้นเป็น 0

*/
function parseCartItem(itemData) {
  // ✅ จุดที่ 1: ดึงราคาอย่างปลอดภัย ถ้าเป็น 0 ก็ได้ 0 ถ้าไม่มีเลยจะได้ 100 (ยุบ if-else ทิ้งได้เลย)
  const price = itemData?.price ?? 100;

  // ✅ จุดที่ 2: ดึงส่วนลดลึก ๆ อย่างปลอดภัย (เขียนดีอยู่แล้วครับ)
  const discount = itemData?.campaign?.discount?.percentage ?? 0;

  // คำนวณราคาจ่ายจริง
  const finalPrice = price - (price * discount) / 100;

  // ปรับการส่งกลับให้ยืดหยุ่น: ถ้าคำนวณแล้วได้ 0 ก็ให้บอกว่าเป็นสินค้าฟรีไปเลย
  if (finalPrice === 0) {
    return `สินค้าแจกฟรี ไม่มีแคมเปญลดราคา (ราคาจ่ายจริง: ${finalPrice})`;
  }

  return finalPrice;
}

// ─── ลองรันเคสทดสอบ ───
const item1 = { price: 0, campaign: undefined };
const item2 = { price: 500, campaign: { discount: { percentage: 10 } } };
const item3 = {}; // เคสพิเศษ: ส่งมาโล่ง ๆ

console.log(parseCartItem(item1)); // 👉 "สินค้าแจกฟรี ไม่มีแคมเปญลดราคา (ราคาจ่ายจริง: 0)"
console.log(parseCartItem(item2)); // 👉 450
console.log(parseCartItem(item3)); // 👉 100 (เพราะเข้าเงื่อนไขค่าเริ่มต้น 100 และลด 0%)
