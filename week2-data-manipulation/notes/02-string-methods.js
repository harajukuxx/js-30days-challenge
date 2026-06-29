// 1. กลุ่มค้นหาและดักจับข้อมูล (Search & Validation)

// includes(searchString)
const email = "developer_tina@gmail.com";

// ตรวจสอบว่าเป็น Gmail ไหม
const isGmail = email.includes("@gmail.com");
console.log(isGmail); // true

// startsWith() และ endsWith()
const webUrl = "https://my-api.com/v1/users";
const filename = "avatar_user_102.png";

console.log(webUrl.startsWith("https://")); // true (ปลอดภัย)
console.log(filename.endsWith(".png")); // true (เป็นไฟล์รูปภาพ)

// 2. กลุ่มตัดแต่งและแบ่งข้อความ (Extraction & Splitting)

// slice(start, end)
const phoneNumber = "0812345678";

// ตัดเอาเฉพาะ 3 ตัวแรก และ 2 ตัวสุดท้าย
const prefix = phoneNumber.slice(0, 3);
const suffix = phoneNumber.slice(8); // ถ้าไม่ใส่ end จะตัดยาวไปจนจบ

const maskedPhone = `${prefix}XXXX${suffix}`;
console.log(maskedPhone); // "081XXXXX78"

// split(separator)
const csvRow = "PROD-101,Gaming Mouse,1500,20";

// แยกข้อมูลด้วยเครื่องหมาย comma (,)
const productData = csvRow.split(",");
console.log(productData);
// ผลลัพธ์: [ 'PROD-101', 'Gaming Mouse', '1500', '20' ] (ดึงไปใช้ต่อในรูปแบบ Array ได้เลย)

const [sku, name, price, stock] = productData; // ทำ Destructuring ต่อได้สบายๆ

// 3. กลุ่มปรับแต่งฟอร์แมต (Transformation)

// trim(), trimStart(), trimEnd()
const userInput = "   my_username_admin   ";

const cleanInput = userInput.trim();
console.log(cleanInput); // "my_username_admin" (ไม่มีช่องว่างมากวนใจเวลาเช็ค Password)

// toLowerCase() และ toUpperCase()
const searchKeyword = "TypeScript";
const dbUsername = "typescript"; // ข้อมูลใน DB เป็นพิมพ์เล็กทั้งหมด

// แปลงให้เป็นพิมพ์เล็กเหมือนกันก่อนเทียบค่า
if (searchKeyword.toLowerCase() === dbUsername.toLowerCase()) {
  console.log("🔍 ค้นพบข้อมูลที่ตรงกัน");
}

// 4. กลุ่มแทนที่คำ (Replacement)
const emailTemplate =
  "สวัสดีคุณ [NAME], ขอบคุณที่สมัครสมาชิก! ยินดีต้อนรับคุณ [NAME] เข้าสู่ระบบ";

// replaceAll จะเปลี่ยนคำว่า [NAME] ทุกจุดให้เป็นชื่อลูกค้าจริง
const personalizedEmail = emailTemplate.replaceAll("[NAME]", "Tina");

console.log(personalizedEmail);
// "สวัสดีคุณ Tina, ขอบคุณที่สมัครสมาชิก! ยินดีต้อนรับคุณ Tina เข้าสู่ระบบ"
