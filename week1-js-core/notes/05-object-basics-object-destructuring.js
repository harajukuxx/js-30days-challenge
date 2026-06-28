// ข้อมูล User ในระบบ Backend
const user = {
  id: 101,
  username: "tina_dev",
  role: "admin",
  isActive: true,
};

// การแก้ไขค่า
user.role = "super_admin";

// การเพิ่ม Key ใหม่เข้าไป
user.createdAt = "2026-06-28";

// Bracket Notation ([...])
const keyToFind = "role";
// console.log(user[keyToFind]); // ผลลัพธ์: "super_admin" (ดึงค่าจากตัวแปรได้)

// ใช้เมื่อ Key มีเครื่องหมายแปลกๆ
const bankAccount = {
  "account-number": "123-456-789",
};
// console.log(bankAccount.account-number); // แบบนี้พัง! (มองเป็นลบเลข)
// console.log(bankAccount["account-number"]); // แบบนี้ผ่าน!

//################################################################################################

// Object Destructuring
const product = {
  prodName: "Gaming Monitor",
  price: 8900,
  stock: 15,
};

// ❌ แบบเดิม: รก ต้องพิมพ์คำว่า product ซ้ำๆ
// const name = product.prodName;
// const price = product.price;

//  แบบ Destructuring: แกะตัวแปรออกมารวดเดียว
// const { prodName, price, stock } = product;

// console.log(prodName); // "Gaming Monitor"
// console.log(price); // 8900

const { prodName: name, discount = 0 } = product;

// console.log(name); // "Gaming Monitor" (เปลี่ยนชื่อจาก prodName -> name)
// console.log(discount); // 0 (ใช้ค่า Default เพราะใน product ไม่มี Key นี้)

/*
Use Case 1: แกะข้อมูลจาก Request Body (API Controller)
เวลา Client ส่งข้อมูลสมัครสมาชิกเข้ามาในระบบ เราจะใช้ Destructuring แกะข้อมูลออกมาเช็คและบันทึกลง Database ทันที
*/

// สมมติอันนี้คือ Object ที่ได้มาจาก req.body ของ Express
const reqBody = {
  email: "nutthapong@email.com",
  password: "hashed_password_123",
  phoneNumber: "099-xxx-xxxx",
};

// มืออาชีพจะแกะข้อมูลแบบนี้ในฟังก์ชัน Controller
function registerUser(reqBody) {
  const { email, password, role = "user" } = reqBody;

  // นำไปใช้งานต่อได้เลย โค้ดสะอาดมาก
  console.log(`Registering ${email} with role ${role}`);
}

registerUser(reqBody);

/*
Use Case 2: การจัดการ Dynamic Key (Bracket Notation)
สมมติทำระบบ Update ข้อมูลส่วนตัว ที่ User สามารถเลือกเปลี่ยนเฉพาะฟิลด์ที่ต้องการได้
*/
const userProfile = { name: "Nutthapong", age: 37, location: "Thailand" };

function updateField(field, newValue) {
  // ใช้ Bracket Notation เพราะไม่รู้ว่า field ที่ส่งมาจะเป็น name, age หรือ location
  userProfile[field] = newValue;
}

updateField("location", "Yasothon");
console.log(userProfile.location); // ผลลัพธ์: "Yasothon"
