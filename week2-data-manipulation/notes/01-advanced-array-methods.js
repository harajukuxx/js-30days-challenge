const usersInDB = [
  { fname: "Nutthapong", salary: 40000 },
  { fname: "Atchara", salary: 60000 },
];

// แปลงร่างให้อยู่ในรูปที่ต้องการ
const updatedUsers = usersInDB.map((user) => {
  return {
    name: user.fname,
    income: user.salary,
    tax: user.salary * 0.05, // คำนวณภาษีเพิ่มเข้าไปด้วย
  };
});

/* ผลลัพธ์:
[
  { name: 'Nutthapong', income: 40000, tax: 2000 },
  { name: 'Atchara', income: 60000, tax: 3000 }
]
*/

const staff = [
  { name: "Tina", salary: 65000 },
  { name: "Alex", salary: 25000 },
  { name: "Somchai", salary: 18000 },
];

// คัดเฉพาะคนที่มีเงินเดือน > 50000
const highEarners = staff.filter((person) => person.salary > 50000);

// ผลลัพธ์: [ { name: 'Tina', salary: 65000 } ]

const expenses = [
  { title: "Server Cost", amount: 5000 },
  { title: "Internet", amount: 1200 },
  { title: "Software License", amount: 800 },
];

// สูตร: array.reduce((ค่าสะสม, ตัวปัจจุบัน) => { ... }, ค่าเริ่มต้น)
const totalCost = expenses.reduce((accumulator, current) => {
  return accumulator + current.amount;
}, 0); // เลข 0 ตัวสุดท้ายคือ "ค่าเริ่มต้น" ของ accumulator

// ผลลัพธ์: 7000

const shopOrders = [
  { item: "Robot Toy", price: 1200, category: "Toy" },
  { item: "Java Book", price: 450, category: "Book" },
  { item: "Lego Set", price: 3500, category: "Toy" },
];

const totalToySales = shopOrders
  .filter((order) => order.category === "Toy") // ขั้นที่ 1: ร่อนเอาเฉพาะ Toy ออกมาก่อน
  .map((order) => order.price) // ขั้นที่ 2: แปลงร่างเหลือแค่ Array ของตัวเลขราคา [1200, 3500]
  .reduce((sum, price) => sum + price, 0); // ขั้นที่ 3: รวบยอดเลขราคาเข้าด้วยกัน

// ผลลัพธ์: 4700

// ###########################################################################################

// some
const transactions = [1200, 4500, 150000, 300]; // มี 150,000 หลุดมาตัวนึง

const hasHighRisk = transactions.some((amount) => amount > 100000);

console.log(hasHighRisk); // ผลลัพธ์: true

// every
const systems = [
  { name: "Database", status: "online" },
  { name: "Auth Service", status: "online" },
  { name: "Storage", status: "offline" }, // 🚨 มีตัวนึงล่มอยู่
];

const isSystemReady = systems.every((sys) => sys.status === "online");

console.log(isSystemReady); // ผลลัพธ์: false (เพราะมี Storage ตัวนึงที่เป็น offline)

// find()
/*
find() คือการ "ส่งสายสืบไปควานหาของชิ้นแรกที่ตรงเงื่อนไข" * มันจะวิ่งไล่เช็คสมาชิกใน Array ทีละตัวจากซ้ายไปขวา
พอเจอตัวแรกที่ใช่ปุ๊บ! มันจะหยิบ Object ตัวนั้นขึ้นมา แล้วหยุดทำงานทันที (ไม่วิ่งดูตัวที่เหลือต่อให้เสียเวลา)
ผลลัพธ์ที่ได้กลับมาจะเป็น Object ตัวนั้นตรงๆ (ไม่ใช่ Array ซ้อนอ็อบเจกต์เหมือน filter)
ถ้าหาจนจบแล้วไม่เจอใครเลย จะส่งค่ากลับมาเป็น undefined
*/

// 1. ระบบค้นหาข้อมูลผู้ใช้ด้วย ID (Find User by ID)
const usersDatabase = [
  { id: "U101", name: "Alex", role: "member" },
  { id: "U102", name: "Tina", role: "admin" }, // <-- สมมติว่าต้องการคนนี้
  { id: "U103", name: "Somchai", role: "member" },
];

const targetId = "U102";

// 🔍 ค้นหาคนที่มี id ตรงกับที่ส่งมา
const userProfile = usersDatabase.find((user) => user.id === targetId);

// ผลลัพธ์: { id: 'U102', name: 'Tina', role: 'admin' } <-- ได้ Object ไปใช้งานต่อได้ทันที

// 2. ระบบตรวจสอบสิทธิ์ความปลอดภัยก่อนทำงาน (Authentication / Authorization)
const activeSessions = [
  { token: "abc123token", username: "alex_dev" },
  { token: "xyz789token", username: "tina_pro" },
];

// ดักเช็ค Token ที่ Client ส่งมาใน Header
const clientToken = "xyz789token";
const isValidSession = activeSessions.find(
  (session) => session.token === clientToken,
);

if (isValidSession) {
  console.log(`🔑 อนุญาตให้คุณ ${isValidSession.username} เข้าสู่ระบบหลังบ้าน`);
} else {
  console.log("❌ Token ไม่ถูกต้อง สั่ง Block!");
}

// 3. การดัก Error เมื่อไม่พบข้อมูลในระบบ (Data Validation & Error Handling)
// เนื่องจาก find() จะให้ค่าเป็น undefined หากไม่เจอของ เราจึงมักใช้มันเป็นตัวดักจับ เพื่อโยน Error กลับไปบอกหน้าบ้านว่า "ไม่พบข้อมูลที่คุณค้นหา" (เช่น ยิงรหัสสินค้ามาผิด)
const productsInStock = [
  { sku: "PROD-01", name: "Gaming Mouse" },
  { sku: "PROD-02", name: "Mechanical Keyboard" },
];

const searchSku = "PROD-999"; // รหัสไม่มีอยู่จริง
const product = productsInStock.find((item) => item.sku === searchSku);

if (!product) {
  // 🚨 ดัก Error ส่งกลับไปหา Client
  console.log(`🛑 HTTP Status 404: ไม่พบสินค้ารหัส ${searchSku} ในระบบ`);
} else {
  console.log(`📦 เจอสินค้า: ${product.name}`);
}

// findIndex()
// 💻 Use Case บน Backend: การเข้าไปอัปเดตหรือลบข้อมูลใน Array
// ต้องการหาว่าผู้ใช้ที่ชื่อ "Somchai" อยู่ที่ตำแหน่งดัชนีเท่าไหร่ เพื่อจะได้เปลี่ยนข้อมูลหรือใช้ splice() ลบออกได้ถูกจุด

// ตะกร้าสินค้าในระบบ Memory หลังบ้าน
const productCart = [
  { sku: "PROD-MONITOR", name: "Gaming Monitor", qty: 1 },
  { sku: "PROD-MOUSE", name: "Wireless Mouse", qty: 2 },
  { sku: "PROD-KEYBOARD", name: "Mechanical Keyboard", qty: 1 }, // <-- เป้าหมายที่เราจะลบ
];

const targetSku = "PROD-KEYBOARD"; // รหัสสินค้าที่ลูกค้าต้องการลบ

// ขั้นตอนที่ 1: ใช้ findIndex ค้นหาตำแหน่งที่นั่งของสินค้าชิ้นนี้
const targetIndex = productCart.findIndex((item) => item.sku === targetSku);

console.log("📍 ตำแหน่ง Index ที่เจอ:", targetIndex);
// ผลลัพธ์: 2 (เพราะ Keyboard อยู่ในลำดับดัชนีที่ 2)

// ขั้นตอนที่ 2: ดักจับความปลอดภัย (ถ้าเจอดัชนีที่ไม่ใช่ -1 แปลว่ามีของจริง)
if (targetIndex !== -1) {
  // สั่งคว้านเนื้อร้าย: เริ่มลบที่ดัชนี targetIndex (เลข 2) และลบออกไป "1 ชิ้น"
  productCart.splice(targetIndex, 1);
  console.log("✅ ลบสินค้าออกจากตะกร้าเรียบร้อย!");
} else {
  console.log("❌ ไม่พบสินค้าชิ้นนี้ในตะกร้า");
}

// ตรวจสอบผลลัพธ์ของตะกร้าสินค้าหลังจากโดน splice
console.log(productCart);
/* ผลลัพธ์: เหลือสินค้าแค่ 2 ชิ้นแล้ว Keyboard หายไปอย่างสมบูรณ์!
[
  { sku: "PROD-MONITOR", name: "Gaming Monitor", qty: 1 },
  { sku: "PROD-MOUSE", name: "Wireless Mouse", qty: 2 }
]
*/

// sort()
const products = [
  { name: "Mouse", price: 1500 },
  { name: "Monitor", price: 8900 },
  { name: "Keyboard", price: 3200 },
];

// ⬆️ เรียงจาก น้อย ไป มาก (ใช้ a.price - b.price)
const lowToHigh = [...products].sort((a, b) => a.price - b.price);
// ใช้ [...products] เพื่อก๊อปปี้ข้อมูลออกมาก่อน ไม่ให้กระทบตัวแปรต้นฉบับ
/* ผลลัพธ์: Mouse (1500) -> Keyboard (3200) -> Monitor (8900) */
