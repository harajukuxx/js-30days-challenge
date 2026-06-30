/*โจทย์: Expense Tracker CLI (ระบบบันทึกรายรับ-รายจ่าย)ให้จำลองระบบจัดการเงินส่วนบุคคลผ่าน Terminal 
 โดยมีชุดข้อมูลเริ่มต้นเป็น Array ของ Object และให้เขียนฟังก์ชันรองรับฟีเจอร์ต่างๆ ดังนี้
 1. ข้อมูลเริ่มต้น (Initial Data)ให้สร้าง Array ชื่อ expenses เพื่อเก็บประวัติธุรกรรม โดยแต่ละธุรกรรมมีโครงสร้างดังนี้:
 JavaScript*/
const expenses = [
  {
    id: 1,
    description: "ซื้อข้าวเที่ยง",
    amount: 60,
    type: "expense",
    date: new Date("2026-05-28"),
  },
  {
    id: 2,
    description: "เงินเดือนออก",
    amount: 30000,
    type: "income",
    date: new Date("2026-06-30"),
  },
  {
    id: 3,
    description: "คาเฟ่กาแฟ",
    amount: 120,
    type: "expense",
    date: new Date("2026-06-30"),
  },
];
/*
2. ฟังก์ชันที่ต้องพัฒนา (Requirements)
🔹 ฟังก์ชันที่ 1: addTransaction(description, amount, type)
หน้าที่: เพิ่มข้อมูลรายรับหรือรายจ่ายใหม่เข้าไปใน Array
สิ่งที่ต้องทำภายใน: * สร้าง Object ใหม่โดยให้ id รันต่อจากตัวล่าสุดอัตโนมัติ
กำหนดค่า date ให้เป็นวันที่ปัจจุบัน ณ ตอนที่กดเพิ่ม (new Date())
นำ Object ใหม่นี้เข้าไปต่อท้ายใน expenses (แนะนำให้ใช้ Spread Operator หรือ .push())
*/
function addTransaction(description, amount, type) {
  const maxId =
    expenses.length > 0 ? Math.max(...expenses.map((item) => item.id)) : 0;
  const newTransaction = {
    id: maxId + 1,
    description: description,
    amount: amount,
    type: type,
    date: new Date(),
  };
  expenses.push(newTransaction);
  console.log("เพิ่มข้อมูลเรียบร้อย");
}

addTransaction("ค่าไฟ", 555, "expense");

/*
🔹 ฟังก์ชันที่ 2: viewExpenses()
หน้าที่: แสดงรายการธุรกรรมทั้งหมดออกมาทาง Console ให้สวยงามและอ่านง่าย
สิ่งที่ต้องทำภายใน:
ใช้ Array Method ในการวนลูปแสดงผล
จุดฝึก Date: แปลงวันที่ของแต่ละรายการให้เป็นฟอร์แมตภาษาไทยที่อ่านง่าย เช่น 30/6/2026 หรือ 30 มิ.ย. 2569 โดยใช้ .toLocaleDateString('th-TH')
*/

function viewExpenses() {
  console.log("===แสดงรายการธุรกรรม===");
  expenses.forEach((element) => {
    console.log(
      `รายการที่ ${element.id} วันที่ ${element.date.toLocaleDateString("th-TH")} รายการ ${element.description} จำนวนเงิน ${element.amount.toFixed(2)} ประเภท ${element.type}`,
    );
  });
}
viewExpenses();

/*
🔹 ฟังก์ชันที่ 3: getBalance()หน้าที่: คำนวณหา "เงินคงเหลือปัจจุบัน" และ "สรุปยอดรวม"สิ่งที่ต้องทำภายใน:จุดฝึก Higher-Order 
Functions: ใช้ .filter() และ .reduce() เพื่อหา:ยอดรวมรายรับทั้งหมด (Total Income)ยอดรวมรายจ่ายทั้งหมด (Total Expense)เงินคงเหลือสุทธิ (Balance) $\rightarrow$ เอา รายรับ - รายจ่าย
*/
function getBalance() {
  const totalIncome = expenses
    .filter((item) => item.type === "income")
    .map((item) => item.amount)
    .reduce((acc, cur) => (acc += cur), 0);
  const totalExpense = expenses
    .filter((item) => item.type === "expense")
    .map((item) => item.amount)
    .reduce((acc, cur) => (acc += cur), 0);
  console.log(
    `ยอดรวมรายรับทั้งหมด ${totalIncome} ยอดรวมรายจ่ายทั้งหมด ${totalExpense} เงินคงเหลือสุทธิ ${totalIncome - totalExpense}`,
  );
}
getBalance();
/*
🔹 ฟังก์ชันที่ 4: filterByMonthYear(monthIndex,yearIndex)
หน้าที่: กรองดูเฉพาะธุรกรรมของเดือนที่ระบุ (เช่น ใส่เลข 5 หมายถึงเดือนมิถุนายน)
สิ่งที่ต้องทำภายใน:
ใช้ .filter() ร่วมกับ .getMonth() ของ Date Object เพื่อคัดเลือกเฉพาะรายการที่เดือนตรงกับเงื่อนไข แล้วแสดงผลออกมา
*/

function filterByMonthYear(monthIndex, yearIndex) {
  const trc = expenses.filter(
    (item) =>
      item.date.getFullYear() === yearIndex &&
      item.date.getMonth() === monthIndex,
  );
  console.log("🚀 ~ filterByMonthYear ~ trc:", trc);
}
filterByMonthYear(5, 2026);
/*
🚀 Challenge พิเศษ (Option สำหรับอัปเกรดฝีมือ)
deleteTransaction(id): ใช้ .filter() เพื่อลบรายการที่ไม่ต้องการออกโดยอ้างอิงจาก id
getAverageExpense(): ใช้ Math มาร่วมคำนวณหา "ค่าเฉลี่ยรายจ่ายต่อรายการ" ว่าเราใช้จ่ายเฉลี่ยครั้งละกี่บาท (คำนวณเสร็จแล้วใช้ Math.round() หรือ Math.floor() ปัดเศษให้เป็นจำนวนเต็มด้วย)
*/

function deleteTransaction(id) {
  const newTrc = expenses.filter((item) => item.id !== id);
  console.log("🚀 ~ deleteTransaction ~ newTrc:", newTrc);
}

function deleteTransactionFindindex(id) {
  const findIndex = expenses.findIndex((item) => item.id === id);
  if (findIndex !== -1) {
    expenses.splice(findIndex, 1);
    console.log("ลบเรียบร้อย");
  } else {
    console.log("ลบไม่ได้ ไม่มีข้อมูล");
  }
}

deleteTransaction(1);

function getAverageExpense() {
  const filterExpense = expenses.filter((item) => item.type === "expense");
  if (filterExpense.length === 0) {
    console.log("ค่าเฉลี่ยรายจ่าย: 0 บาท");
    return;
  }
  const totalExpense = filterExpense
    .map((item) => item.amount)
    .reduce((acc, cur) => acc + cur, 0);
  const avgExpense = totalExpense / filterExpense.length;
  console.log("🚀 ~ getAverageExpense ~ avgExpense:", avgExpense);
}

getAverageExpense();
