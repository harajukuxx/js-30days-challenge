const rawData = [
  { name: "Alex", score: 45, role: "student" },
  { name: "Tina", score: 85, role: "student" },
  { name: "Staff_A", score: 100, role: "teacher" },
  { name: "Somchai", score: 72, role: "student" },
];

/*
โจทย์: จากข้อมูล rawData จงเขียนโค้ดต่อสาย (Chaining) เพื่อทำภารกิจต่อไปนี้:
filter คัดเอาเฉพาะคนที่มี role: "student" และมีคะแนน (score) มากกว่าหรือเท่ากับ 50 คะแนนขึ้นไป (สอบผ่าน)
map แปลงผลลัพธ์ที่ได้ให้เหลือแค่ Array ของตัวหนังสือที่เป็นชื่อคนเท่านั้น (เช่น ["Name1", "Name2"])
*/

const studentNames = rawData
  .filter((item) => item.role === "student" && item.score >= 50)
  .map((item) => item.name);

console.log(studentNames);

/*
📝 โจทย์ข้อที่ 2: ระบบสรุปยอดบัญชี (Account Balance Summary)
สถานการณ์: คุณดึงประวัติการเงินของลูกค้ามาเป็น Array ของ Object ซึ่งมีทั้งรายการที่เป็นเงินเข้า ("income") และเงินออก ("expense")

JavaScript
const walletHistory = [
  { type: "income", amount: 5000 },
  { type: "expense", amount: 1200 },
  { type: "income", amount: 2500 },
  { type: "expense", amount: 450 }
];
ภารกิจของคุณ:
จงใช้ reduce() เพื่อคำนวณหา ยอดเงินคงเหลือสุทธิ (Net Balance) ในกระเป๋าตังค์นี้ โดยมีเงื่อนไขว่า:
ถ้า type เป็น "income" ให้เอา amount ไป บวกเพิ่ม ในยอดสะสม
ถ้า type เป็น "expense" ให้เอา amount ไป ลบออก จากยอดสะสม
(อย่าลืมกำหนดค่าเริ่มต้นของยอดสะสมให้เป็น 0 นะครับ)
*/

const walletHistory = [
  { type: "income", amount: 5000 },
  { type: "expense", amount: 1200 },
  { type: "income", amount: 2500 },
  { type: "expense", amount: 450 },
];

const netBalance = walletHistory.reduce(
  (acc, cur) =>
    acc + ((cur.amount === cur.type) === "income" ? cur.amount : -cur.amount),
  0,
);
console.log("🚀 ~ netBalance:", netBalance);

/*
📝 โจทย์ข้อที่ 3: ระบบคำนวณโบนัสพิเศษและยอดจ่ายรวม (Bonus & Payroll Automation)
สถานการณ์: คุณเป็นวิศวกรหลังบ้านที่ต้องคำนวณเงินเดือนสุทธิรวมโบนัสเพื่อส่งยอดให้ธนาคารโอนจ่ายพนักงานช่วงสิ้นเดือน โดยบริษัทมีเงื่อนไขการจ่ายโบนัสพิเศษดังนี้:

บริษัทจะจ่ายโบนัสให้กับ "พนักงานที่อยู่แผนก IT เท่านั้น" (department: "IT")
พนักงาน IT คนไหนที่ "ประเมินผลงานได้ A" (performance: "A") จะได้รับเงินพิเศษเพิ่ม 10,000 บาท
พนักงาน IT คนไหนที่ "ประเมินผลงานได้ B" (performance: "B") จะได้รับเงินพิเศษเพิ่ม 5,000 บาท
แผนกอื่น หรือพนักงานที่ได้เกรดอื่น จะไม่ถูกคิดเงินในรอบนี้ (คัดทิ้งเลย)

JavaScript
const companyPayroll = [
  { name: "Alex", salary: 30000, department: "IT", performance: "A" },    // IT และ ได้ A -> ได้บวก 10,000
  { name: "Tina", salary: 65000, department: "Bank", performance: "A" },  // ❌ ไม่ใช่ IT -> คัดทิ้ง
  { name: "Somchai", salary: 25000, department: "IT", performance: "B" }, // IT และ ได้ B -> ได้บวก 5,000
  { name: "Nantaporn", salary: 40000, department: "HR", performance: "B" } // ❌ ไม่ใช่ IT -> คัดทิ้ง
];

ภารกิจของคุณ:
จงเขียนโค้ดต่อสายแบบ Chaining รวดเดียว 3 ตัว เพื่อหา "ยอดรวมเงินทั้งหมดที่บริษัทต้องจ่ายให้กับพนักงาน IT กลุ่มนี้ (เงินเดือน + เงินพิเศษ)"
filter: คัดกรองเอาเฉพาะพนักงานที่อยู่แผนก "IT" เท่านั้น
map: แปลงร่าง Object พนักงานแต่ละคน ให้กลายเป็น "ตัวเลขเงินรวมสุทธิของคนนั้น" (เงินเดือน + เงินพิเศษตามเกรด A หรือ B)
reduce: รวบรวม Array ตัวเลขเงินสุทธิเหล่านั้นมา บวกสะสมรวมกันให้เหลือยอดสุทธิรวมยอดเดียว

💡 คำใบ้ประกอบการเขียนโค้ด:
ในขั้น .map() คุณสามารถใช้ Ternary Operator ซ้อนกัน หรือเขียน if-else เช็คเกรดเพื่อหาเงินพิเศษ แล้วค่อยบวกคืนคู่กับ item.salary ออกไปได้ครับ
*/

const companyPayroll = [
  { name: "Alex", salary: 30000, department: "IT", performance: "A" }, // IT และ ได้ A -> ได้บวก 10,000
  { name: "Tina", salary: 65000, department: "Bank", performance: "A" }, // ❌ ไม่ใช่ IT -> คัดทิ้ง
  { name: "Somchai", salary: 25000, department: "IT", performance: "B" }, // IT และ ได้ B -> ได้บวก 5,000
  { name: "Nantaporn", salary: 40000, department: "HR", performance: "B" }, // ❌ ไม่ใช่ IT -> คัดทิ้ง
];

const newPayroll = companyPayroll
  .filter((item) => item.department === "IT")
  .map((item) =>
    item.performance === "A" ? item.salary + 10000 : item.salary + 5000,
  )
  .reduce((acc, cur) => acc + cur, 0);
console.log("🚀 ~ newPayroll:", newPayroll);

/*📝 โจทย์ข้อที่ 4: ระบบวิเคราะห์ยอดขายและสถิติทั่วโลก (Global Sales Analytics)

สถานการณ์: คุณดึงข้อมูล Log การสั่งซื้อสินค้าจากลูกค้าทั่วโลกมา หน้าบ้านต้องการให้คุณสรุปยอดออกมาเป็นรายงานอ็อบเจกต์เพื่อเอาไปพลอตกราฟ โดยมีเงื่อนไขดังนี้:
filter: ให้คัดเอาเฉพาะรายการที่ชำระเงินสำเร็จแล้วเท่านั้น (status: "completed")
map: แปลงข้อมูลให้เหลือเฉพาะฟิลด์ที่จำเป็นต่อการคำนวณ คือ region (ทวีป) และ amount (ยอดเงิน)
reduce: ยุบรวมข้อมูลทั้งหมดให้ออกมาเป็น Object สรุปยอดรวมแยกตามทวีป หน้าตาแบบนี้:

JavaScript
{ Asia: ยอดรวมของเอเชีย, Europe: ยอดรวมของยุโรป }
JavaScript
*/

const globalOrders = [
  { orderId: "1", region: "Asia", amount: 5000, status: "completed" },
  { orderId: "2", region: "Europe", amount: 1200, status: "completed" },
  { orderId: "3", region: "Asia", amount: 2500, status: "pending" }, // ❌ คัดทิ้งเพราะ pending
  { orderId: "4", region: "Europe", amount: 4800, status: "completed" },
  { orderId: "5", region: "Asia", amount: 3100, status: "completed" },
];

/*
💡 คำใบ้ระดับเซียน (คีย์สำคัญในด่าน reduce):
ในด่าน reduce ค่าเริ่มต้น (Initial Value) ของเราจะไม่ใช่เลข 0 แล้ว แต่จะเป็นอ็อบเจกต์เปล่า {}
วิธีการเขียนใน reduce:

JavaScript
.reduce((acc, cur) => {
  // cur จะเหลือแค่ { region: "...", amount: ... } จากการ map มาแล้ว
  // ตรวจสอบว่าใน acc มีทวีปนี้หรือยัง? ถ้ายังไม่มีให้ตั้งต้นเป็น 0 
  if (!acc[cur.region]) {
    acc[cur.region] = 0;
  }
  // บวกยอดเงินเข้าไปในทวีปนั้นๆ
  acc[cur.region] += cur.amount;

  return acc; // สำคัญที่สุด: ต้อง return ตัว acc ออกไปในทุกรอบลูป!
}, {});
*/

const regionSales = globalOrders
  .filter((item) => item.status === "completed")
  .map((item) => item)
  .reduce((acc, cur) => {
    if (!acc[cur.region]) {
      acc[cur.region] = 0;
    }
    acc[cur.region] += cur.amount;

    return acc;
  }, {});

console.log("🚀 ~ regionSales:", regionSales);

// ###########################################################################################
/*
ข้อที่ 1: ตรวจสอบความพร้อมของระบบ (ระดับ: ง่าย 🟢)
เครื่องมือที่ใช้: every หรือ some
สถานการณ์: ระบบต้องการตรวจสอบว่าเครื่องเซิร์ฟเวอร์ในคลาสเตอร์ (Cluster) พร้อมให้บริการหรือไม่ 
โดยระบบจะถือว่าพร้อมทำงานก็ต่อเมื่อ เซิร์ฟเวอร์ทุกเครื่องมีสถานะเป็น "active" และมี CPU Usage ต่ำกว่า 90%

JavaScript
const servers = [
  { id: "SVR-01", status: "active", cpuUsage: 45 },
  { id: "SVR-02", status: "active", cpuUsage: 88 },
  { id: "SVR-03", status: "active", cpuUsage: 12 },
  { id: "SVR-04", status: "maintenance", cpuUsage: 0 } // <-- มีเครื่องนึงปิดซ่อมบำรุง
];

// 📝 จงเขียนโค้ดเพื่อตรวจสอบว่าระบบ "พร้อมให้บริการทั้งหมด" หรือไม่
const isClusterReady = // ... เขียนโค้ดของคุณตรงนี้

console.log(isClusterReady); // ผลลัพธ์ที่ควรได้: false
*/
const servers = [
  { id: "SVR-01", status: "active", cpuUsage: 45 },
  { id: "SVR-02", status: "active", cpuUsage: 88 },
  { id: "SVR-03", status: "active", cpuUsage: 12 },
  { id: "SVR-04", status: "maintenance", cpuUsage: 0 }, // <-- มีเครื่องนึงปิดซ่อมบำรุง
];

const isClusterReady = servers.every(
  (item) => item.status === "active" && item.cpuUsage < 90,
);
console.log("🚀 ~ isClusterReady:", isClusterReady);

/*
ข้อที่ 2: ค้นหารายการธุรกรรมทางการเงิน (ระดับ: ปานกลาง 🟡)
เครื่องมือที่ใช้: find
สถานการณ์: คุณกำลังทำระบบ API เพื่อตรวจสอบประวัติการโอนเงิน (Transaction Audit) 
โดยต้องการหา "ธุรกรรมแรก" ที่มียอดโอน (amount) ตั้งแต่ 50,000 บาทขึ้นไป และมีสถานะเป็น "pending" เพื่อส่งไปให้ทีมตรวจสอบการฟอกเงิน

JavaScript
const transactions = [
  { txnId: "TXN-001", amount: 2500, status: "completed" },
  { txnId: "TXN-002", amount: 120000, status: "completed" }, // ยอดถึง แต่ตรวจสอบผ่านไปแล้ว
  { txnId: "TXN-003", amount: 75000, status: "pending" },    // <-- ควรเจอตัวนี้ (ตัวแรกที่เข้าเงื่อนไขครบ)
  { txnId: "TXN-004", amount: 200000, status: "pending" }
];

// 📝 จงค้นหาธุรกรรมที่เข้าเงื่อนไขดังกล่าวข้างต้น
const highRiskPendingTxn = // ... เขียนโค้ดของคุณตรงนี้

console.log(highRiskPendingTxn); 
// ผลลัพธ์ที่ควรได้: { txnId: "TXN-003", amount: 75000, status: "pending" }
*/
const transactions = [
  { txnId: "TXN-001", amount: 2500, status: "completed" },
  { txnId: "TXN-002", amount: 120000, status: "completed" }, // ยอดถึง แต่ตรวจสอบผ่านไปแล้ว
  { txnId: "TXN-003", amount: 75000, status: "pending" }, // <-- ควรเจอตัวนี้ (ตัวแรกที่เข้าเงื่อนไขครบ)
  { txnId: "TXN-004", amount: 200000, status: "pending" },
];

const highRiskPendingTxn = transactions.find(
  (item) => item.status === "pending" && item.amount >= 50000,
);
console.log("🚀 ~ highRiskPendingTxn:", highRiskPendingTxn);

/*
ข้อที่ 3: อัปเดตสิทธิ์ผู้ใช้งานในระบบ Memory (ระดับ: ท้าทาย 🟠)
เครื่องมือที่ใช้: findIndex
สถานการณ์: แอดมินยิง API มาเพื่อต้องการแบนผู้ใช้งานที่มีไอดี "USR-779" โดยการเปลี่ยน role ของเขาให้กลายเป็น "banned"
เงื่อนไข: ต้องหาตำแหน่ง Index ของผู้ใช้คนนี้ให้เจอก่อน ถ้าเจอให้ทำการเปลี่ยนค่า role ใน Array ต้นฉบับ แต่ถ้าไม่เจอ (เป็น -1) ให้สั่ง console.log("User not found")

JavaScript
const users = [
  { userId: "USR-102", name: "Alice", role: "member" },
  { userId: "USR-779", name: "Bob", role: "moderator" }, // <-- เป้าหมายที่ต้องถูกเปลี่ยนสิทธิ์
  { userId: "USR-441", name: "Charlie", role: "member" }
];

const targetUserId = "USR-779";

// 📝 จงหา Index และอัปเดตสิทธิ์ของ Bob ให้กลายเป็น "banned"
// ... เขียนโค้ดของคุณตรงนี้

console.log(users);
/* ผลลัพธ์ที่ควรได้ใน users:
[
  { userId: "USR-102", name: "Alice", role: "member" },
  { userId: "USR-779", name: "Bob", role: "banned" }, // <-- เปลี่ยนแล้ว
  { userId: "USR-441", name: "Charlie", role: "member" }
]
*/
const users = [
  { userId: "USR-102", name: "Alice", role: "member" },
  { userId: "USR-779", name: "Bob", role: "moderator" }, // <-- เป้าหมายที่ต้องถูกเปลี่ยนสิทธิ์
  { userId: "USR-441", name: "Charlie", role: "member" },
];

const targetUserId = "USR-779";
const findUserid = users.findIndex((item) => item.userId === targetUserId);
console.log("🚀 ~ findUserid:", findUserid);
if (findUserid !== -1) {
  users[findUserid].role = "banned";
  console.log("🚀 ~ users:", users);
  console.log("Update เรียบร้อยแล้ว");
} else {
  console.log("User not found");
}

/*
ข้อที่ 4: จัดอันดับบทความยอดนิยมบน Dashboard (ระดับ: ปราบเซียน 🔴)
เครื่องมือที่ใช้: sort (ร่วมกับการเข้าถึง Object Property และการป้องกัน Data Mutation)
สถานการณ์: คุณต้องส่งข้อมูลไปแสดงผลบน Dashboard หน้าบ้าน โดยต้องการเรียงลำดับบทความ (Articles) 
จาก บทความที่มียอดคนดู (views) สูงที่สุด ลงไปหาน้อยที่สุด เงื่อนไขพิเศษ: ห้ามแก้ไขหรือกระทบกระเทือนลำดับของ Array articles ต้นฉบับเด็ดขาด (ห้ามเกิด Mutation)

JavaScript
const articles = [
  { title: "Node.js Performance Tips", views: 2450 },
  { title: "Understanding Event Loop", views: 4800 }, // <-- ควรขึ้นอันดับ 1
  { title: "Express.js vs NestJS", views: 1200 },
  { title: "Mastering TypeScript", views: 3100 }
];

// 📝 จงสร้าง Array ใหม่ที่เรียงลำดับบทความจาก views มาก -> น้อย โดยไม่กระทบตัวแปร articles
const topArticles = // ... เขียนโค้ดของคุณตรงนี้

console.log("--- Top Articles ---");
console.log(topArticles); 
/* ผลลัพธ์ที่ควรได้: Event Loop (4800) -> TypeScript (3100) -> Node.js (2450) -> Express (1200) 

console.log("--- Original Articles (Must not change) ---");
console.log(articles[0].title); // ต้องยังคงเป็น "Node.js Performance Tips" เหมือนเดิม
*/

const articles = [
  { title: "Node.js Performance Tips", views: 2450 },
  { title: "Understanding Event Loop", views: 4800 }, // <-- ควรขึ้นอันดับ 1
  { title: "Express.js vs NestJS", views: 1200 },
  { title: "Mastering TypeScript", views: 3100 },
];

const topArticles = [...articles].toSorted((a, b) => b.views - a.views);
console.log("--- Top Articles ---");
console.log(topArticles);
console.log("--- Original Articles (Must not change) ---");
console.log(articles[0].title); // ต้องยังคงเป็น "Node.js Performance Tips" เหมือนเดิม
