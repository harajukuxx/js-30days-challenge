// Spread Operator
const fruits = ["🍎", "🍌"];
const newFruits = [...fruits, "🍉", "🍇"];

// console.log(newFruits); // [ '🍎', '🍌', '🍉', '🍇' ]

const defaultSettings = { theme: "dark", port: 3000 };
const customSettings = { ...defaultSettings, port: 5000 }; // ทับค่า port เดิม

// console.log(customSettings); // { theme: 'dark', port: 5000 }

const user = { id: 1, name: "Tina", role: "admin", status: "active" };
const { id, ...cleanData } = user;

// console.log(cleanData); // { name: 'Tina', role: 'admin', status: 'active' }
// แยก id ออกไป แล้วมัดที่เหลือเก็บไว้ใน cleanData

// Rest Parameter
function sum(...numbers) {
  // numbers จะกลายเป็น Array [1, 2, 3, 4] อัตโนมัติ
  return numbers.reduce((total, num) => total + num, 0);
}

// console.log(sum(1, 2, 3, 4)); // 10

/*
Spread (...) อยู่ทาง ขวา ของเครื่องหมายเท่ากับ (หรืออยู่ในที่ที่ต้องการส่งค่า) = เอาของข้างในออกมากระจาย
Rest (...) อยู่ทาง ซ้าย ของเครื่องหมายเท่ากับ (หรืออยู่ใน Parameter ฟังก์ชัน) = เอาของที่เหลือมารวมกัน
*/

const dbUsers = [
  { id: 1, name: "Tina" },
  { id: 2, name: "Nutthapong" },
];

function formatResponse(data, page, total) {
  return {
    success: true,
    metadata: { page, total },
    result: [...data], // กระจาย array ข้อมูล เพื่อไม่ให้กระทบกับ array ดั้งเดิมใน DB
  };
}

console.log(formatResponse(dbUsers, 1, 100));

function appLogger(level, message, ...metaData) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    level: level.toUpperCase(),
    message,
    details: metaData, // มัดรวมข้อมูลจิปาถะอื่นๆ ที่ส่งเข้ามาเก็บเป็น Array
  };

  console.log(JSON.stringify(logEntry));
}

// ใช้งานได้ยืดหยุ่นมาก จะส่งข้อมูลกี่ตัวตามท้ายมาก็ได้
appLogger(
  "error",
  "Database connection failed",
  { host: "localhost" },
  "Timeout after 5s",
);
