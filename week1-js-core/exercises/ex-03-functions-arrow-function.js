/*
โจทย์ข้อที่ 1: แปลงร่างฟังก์ชัน (Arrow Function)
จงแปลงฟังก์ชันตรวจสอบเลขคู่ (isEven) ด้านล่างนี้ ให้กลายเป็น Arrow Function บรรทัดเดียวจบ (Implicit Return) ให้สั้นและกระชับที่สุด:

JavaScript
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
// ใบ้ให้: ใช้ Operators เปรียบเทียบที่เคยเรียนไปสัปดาห์ก่อนมาช่วยเขียนในบรรทัดเดียวได้เลยครับ
*/
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const isEven2 = (number) => number % 2 === 0;
console.log("🚀 ~ isEven2 ~ isEven2:", isEven2(10));

/*
โจทย์ข้อที่ 2: ระบบคำนวณราคาสินค้า (ผสมผสานทุกอย่าง)
จงเขียนฟังก์ชันชื่อ calculateFinalPrice แบบ Arrow Function โดยรับ Parameter 2 ตัวคือ:

price (ราคาสินค้า)

discount (เปอร์เซ็นต์ส่วนลด เช่น สองสิบเปอร์เซ็นต์ ใส่เลข 20)

สิ่งที่ต้องทำภายในฟังก์ชัน:

คำนวณหาส่วนลดเป็นจำนวนเงิน

คำนวณราคาเน็ตหลังจากหักส่วนลดแล้ว

ให้ส่งค่ากลับ (Return) ออกมาเป็น Template Literals ข้อความว่า "ราคาสุทธิคือ [ราคาเน็ต] บาท"

ทดลองเรียกใช้งานฟังก์ชันและ console.log ดูผลลัพธ์

*/

const calculateFinalPrice = (price, discount) => {
  let finalPrice = price * ((100 - discount) / 100);
  return `ราคาสุทธิคือ ${finalPrice} บาท"`;
};
console.log(
  "🚀 ~ calculateFinalPrice ~ calculateFinalPrice:",
  calculateFinalPrice(1000, 20),
);

// ยากกว่าเดิม
/*
🔥 ข้อที่ 1: ระบบคำนวณขั้นบันได (Tiered Calculation)โจทย์:ในงานธนาคารหรือระบบการเงิน เรามักเจอการคิดคำนวณแบบขั้นบันได (เช่น ดอกเบี้ย หรือ ค่าธรรมเนียม)
จงเขียน Arrow Function ชื่อ calculateLoanFee เพื่อคำนวณค่าธรรมเนียมการกู้ยืมเงิน 
โดยรับ Parameter 1 ตัวคือ loanAmount (วงเงินกู้)เงื่อนไขการคิดค่าธรรมเนียม:
วงเงินกู้ไม่เกิน 500,000 บาท ฟรีค่าธรรมเนียม (ค่าธรรมเนียม = 0)
วงเงินกู้ส่วนที่เกิน 500,000 บาท แต่ไม่เกิน 2,000,000 บาท คิดค่าธรรมเนียม 0.5% ของเงินส่วนที่เกินนั้น
วงเงินกู้ส่วนที่เกิน 2,000,000 บาทขึ้นไป คิดค่าธรรมเนียม 1.0% ของเงินส่วนที่เกินนั้น
(Return):ให้คืนค่ากลับมาเป็น Number (ผลรวมค่าธรรมเนียมทั้งหมด)
ข้อ 1: ลองใส่ calculateLoanFee(2500000) ต้องได้ผลลัพธ์ออกมาเป็น 12500
*/

const calculateLoanFee = (loanAmount) => {
  let fee = 0;
  let totalFee = 0;
  if (loanAmount > 500000) {
    fee = 0.5 / 100;
    totalFee +=
      loanAmount <= 2000000 ? (loanAmount - 500000) * fee : 1500000 * fee;
  }
  if (loanAmount > 2000000) {
    fee = 1 / 100;
    totalFee += (loanAmount - 2000000) * fee;
  }
  return totalFee;
};
console.log(
  "🚀 ~ calculateLoanFee ~ calculateLoanFee:",
  calculateLoanFee(1000000),
);

/*
🚀 ข้อที่ 2: ฟังก์ชันอัปเดตสถานะ Portfolio (เน้น Reference Type)
โจทย์:
คุณมีวัตถุ (Object) ที่เก็บข้อมูลพอร์ตการลงทุนเริ่มต้นดังนี้:

JavaScript
const myPortfolio = {
    holder: "Tina",
    assetType: "Mutual Fund",
    balance: 500000,
    status: "Active"
};

จงเขียน Arrow Function ชื่อ updatePortfolio โดยรับ Parameter 2 ตัวคือ:
portfolioObj (วัตถุพอร์ตที่ต้องการอัปเดต)
withdrawAmount (จำนวนเงินที่ต้องการถอนออก)
เงื่อนไขการทำงานภายในฟังก์ชัน:
ให้ทำการตรวจสอบก่อนว่า เงินในพอร์ต (balance) มีพอให้ถอนหรือไม่?
ถ้าเงินพอ: ให้หักเงินออกจากพอร์ต และหากเงินคงเหลือในพอร์ตกลายเป็น 0 พอดี ให้เปลี่ยนค่า status เป็น "Closed"
ถ้าเงินไม่พอ: ไม่ต้องหักเงิน แต่ให้เปลี่ยนค่า status เป็น "Suspended" (ระงับชั่วคราว)
ข้อบังคับสำคัญ: ห้ามแก้ไขหรือกระทบค่าใน Object myPortfolio ตัวต้นฉบับเด็ดขาด! ให้ฟังก์ชันนี้สร้างและส่งกลับ (Return) เป็น Object อันใหม่ ที่อัปเดตค่าเรียบร้อยแล้วออกมาเท่านั้น
เทสเคสสำหรับลองรันดูผลลัพธ์:
ข้อ 2: ลองสั่ง const newPort = updatePortfolio(myPortfolio, 500000) 
แล้วเช็คดูว่า newPort.status ต้องเป็น "Closed" แต่ myPortfolio.balance ตัวเก่าต้องยังเป็น 500000 เหมือนเดิม
*/

const myPortfolio = {
  holder: "Tina",
  assetType: "Mutual Fund",
  balance: 500000,
  status: "Active",
};

const updatePortfolio = (portfolioObj, withdrawAmount) => {
  const newPort = { ...portfolioObj };
  if (newPort.balance >= withdrawAmount) {
    newPort.balance -= withdrawAmount;
    if (newPort.balance === 0) {
      newPort.status = "Closed";
    }
  } else {
    newPort.status = "Suspended";
  }
  return newPort;
};
console.log(
  "🚀 ~ updatePortfolio ~ updatePortfolio:",
  updatePortfolio(myPortfolio, 500000),
);
