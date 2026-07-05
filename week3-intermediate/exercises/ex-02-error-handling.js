/*
สร้างฟังก์ชันชื่อ validatePassword(password)
ถ้าความยาวของรหัสผ่าน น้อยกว่า 6 ตัวอักษร ให้ throw new Error("รหัสผ่านสั้นเกินไป")
เขียน try...catch ครอบตอนเรียกใช้งานฟังก์ชันนี้ แล้วให้แสดงข้อความใน catch ออกมา
*/

function validatePassword(password) {
  const passwordStr = String(password);
  const passwordLength = passwordStr.length;

  // 2. ใช้ if-statement มาตรฐานในการเช็กเงื่อนไขและ throw
  if (passwordLength < 6) {
    throw new Error("รหัสผ่านสั้นเกินไป");
  }

  return "รหัสผ่านปลอดภัย นำไปใช้งานได้!";
}

try {
  const result = validatePassword("5555");
  console.log(result);
} catch (error) {
  console.error("❌ เกิดข้อผิดพลาด:", error.message);
}

/*
สร้างฟังก์ชันชื่อ calculateTotalInterest(jsonData) 
รับพารามิเตอร์เป็น JSON Stringในฟังก์ชันต้องแปลง JSON String ให้เป็น Object ก่อน
เงื่อนไขที่ 1: ถ้าโครงสร้างข้อมูลไม่มี principle (เงินต้น) หรือ rate (อัตราดอกเบี้ย) ให้ throw new Error("ข้อมูลไม่ครบถ้วน")
เงื่อนไขที่ 2: ทั้ง principle และ rate ต้องเป็นตัวเลขที่มีค่ามากกว่า 0 เท่านั้น ถ้าไม่ใช่ (เช่น เป็นตัวอักษร, เป็นค่าติดลบ, หรือเป็น 0) 
ให้ throw new Error("ข้อมูลเงินต้นหรืออัตราดอกเบี้ยไม่ถูกต้อง")ถ้าข้อมูลผ่านทุกเงื่อนไข ให้คำนวณและส่งค่ากลับคืนออกไป (สูตร: $principle \times (rate / 100)$)
*/

function calculateTotalInterest(jsonData) {
  let data;

  // ด่านที่ 1: ดักจับ JSON ที่รูปแบบพัง (เช่น เคสที่ 1)
  try {
    data = JSON.parse(jsonData);
  } catch (error) {
    // ถ้า JSON.parse พัง ให้เปลี่ยนระบบข้อความของ JavaScript ให้เป็นภาษาที่เข้าใจง่าย
    throw new Error("รูปแบบ JSON ไม่ถูกต้อง");
  }

  // ดึงค่าออกมาใช้งาน
  const { principle, rate } = data;

  // ด่านที่ 2: เช็กว่ามีข้อมูลครบถ้วนไหม (เช่น เคสที่ 2)
  if (principle === undefined || rate === undefined) {
    throw new Error("ข้อมูลไม่ครบถ้วน");
  }

  // ด่านที่ 3: เช็กประเภทข้อมูลและค่าต้องมากกว่า 0 (เช่น เคสที่ 3)
  // ใช้ typeof เพื่อเช็กว่าเป็น number ไหม และเช็กค่าห้ามต่ำกว่าหรือเท่ากับ 0
  if (
    typeof principle !== "number" ||
    principle <= 0 ||
    typeof rate !== "number" ||
    rate <= 0
  ) {
    throw new Error("ข้อมูลเงินต้นหรืออัตราดอกเบี้ยไม่ถูกต้อง");
  }

  // ด่านสุดท้าย: ผ่านทุกเงื่อนไข คำนวณดอกเบี้ยส่งกลับไป
  return principle * (rate / 100);
}

// ─── TEST CASES ───
function runTest(caseName, payload) {
  try {
    const result = calculateTotalInterest(payload);
    console.log(`✅ ${caseName} สำเร็จ: ยอดดอกเบี้ยคือ ${result} บาท`);
  } catch (error) {
    console.error(`❌ ${caseName} ล้มเหลว: ${error.message}`);
  }
}

// ─── รันเคสทดสอบ ───

const case1 = "{ principle: 100000, rate: 5 ";
runTest("เคสที่ 1 (JSON พัง)", case1);
// ผลลัพธ์: ❌ เคสที่ 1 (JSON พัง) ล้มเหลว: รูปแบบ JSON ไม่ถูกต้อง

const case2 = JSON.stringify({ principle: 50000 });
runTest("เคสที่ 2 (ขาดข้อมูล)", case2);
// ผลลัพธ์: ❌ เคสที่ 2 (ขาดข้อมูล) ล้มเหลว: ข้อมูลไม่ครบถ้วน

const case3 = JSON.stringify({ principle: "หนึ่งแสน", rate: 4.5 });
runTest("เคสที่ 3 (Type ผิด)", case3);
// ผลลัพธ์: ❌ เคสที่ 3 (Type ผิด) ล้มเหลว: ข้อมูลเงินต้นหรืออัตราดอกเบี้ยไม่ถูกต้อง

const case4 = JSON.stringify({ principle: 200000, rate: 3.5 });
runTest("เคสที่ 4 (ข้อมูลถูกต้อง)", case4);
// ผลลัพธ์: ✅ เคสที่ 4 (ข้อมูลถูกต้อง) สำเร็จ: ยอดดอกเบี้ยคือ 7000 บาท
