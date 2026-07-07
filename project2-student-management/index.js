/*
📋 โจทย์: ระบบบริหารจัดการข้อมูลนักเรียน (Student Management CLI)
ให้เขียนโปรแกรมแบบ Command Line Interface (CLI) จำลอง เพื่อจัดการระบบข้อมูลนักเรียนในโรงเรียน 
โดยตัวโปรแกรมจะต้องทำงานผ่านฟังก์ชันต่าง ๆ และมีระบบจัดการข้อผิดพลาด (Error Handling) ที่ดี

🛠️ ความต้องการของระบบ (Features)
ฐานข้อมูลจำลอง (State)

เก็บข้อมูลนักเรียนในรูปแบบ Array ของ Objects
โครงสร้างข้อมูลนักเรียนแต่ละคน: id (string/number), name (string), grades (array of numbers), และ status (string: 'active' หรือ 'suspended' โดยมีค่าเริ่มต้นเป็น 'active')

ฟังก์ชันที่ต้องพัฒนา
addStudent(name, initialGrades = []): เพิ่มนักเรียนใหม่ (สร้าง id แบบรันอัตโนมัติ)

getStudentById(id): ค้นหานักเรียนจาก ID หากไม่พบต้องโยน Error (throw new Error) และใช้ try...catch ในการดักจับตอนเรียกใช้งาน

updateGrades(id, newGrades): อัปเดตเกรดของนักเรียน โดยใช้ Spread Operator ในการเพิ่มเกรดใหม่เข้าไปรวมกับเกรดเดิม

calculateAverage(id): คำนวณเกรดเฉลี่ยของนักเรียนเฉพาะคน โดยใช้ reduce

getPassingStudents(cutoff = 50): คืนค่ารายชื่อนักเรียนทั้งหมดที่มีเกรดเฉลี่ยผ่านเกณฑ์ที่กำหนด โดยใช้ filter และ map (ดึงเฉพาะข้อมูลสรุปสั้น ๆ เช่น ชื่อและเกรดเฉลี่ย)

changeStatus(id, newStatus): เปลี่ยนสถานะนักเรียน โดยใช้ Short-circuit evaluation หรือ Ternary ตรวจสอบความถูกต้องของค่าที่ส่งมา
*/ // 1. ฐานข้อมูลจำลอง
let students = [
  { id: 1, name: "Alice", grades: [85, 90, 78], status: "active" },
  { id: 2, name: "Bob", grades: [45, 55, 60], status: "active" },
];

let nextId = 3;

// 2. ฟังก์ชันจัดการข้อมูล
function addStudent(name, initialGrades = []) {
  const newObj = {
    id: nextId,
    name: name,
    grades: initialGrades,
    status: "active",
  };
  students.push(newObj);
  nextId++;
}

function getStudentById(id) {
  const data = students.find((item) => item.id === id);
  if (!data) {
    throw new Error(`ไม่พบข้อมูลนักเรียนรหัส ${id}`);
  }
  return data;
}

function updateGrades(id, newGrades) {
  const findIndex = students.findIndex((item) => item.id === id);
  if (findIndex !== -1) {
    // ใช้ Spread operator กระจายเกรดใหม่ลงในอาเรย์เดิม
    students[findIndex].grades.push(...newGrades);
    console.log(`นักเรียน id ${id} เพิ่มเกรดเรียบร้อย`);
  } else {
    console.log("ไม่พบข้อมูล");
  }
}

function calculateAverage(id) {
  const student = students.find((item) => item.id === id);
  if (student && student.grades.length > 0) {
    const avgGrade =
      student.grades.reduce((acc, cur) => acc + cur, 0) / student.grades.length;
    return Number(avgGrade.toFixed(2)); // ปัดทศนิยม 2 ตำแหน่งให้สวยงาม
  }
  return 0;
}

function getPassingStudents(cutoff = 50) {
  return students
    .filter((student) => calculateAverage(student.id) >= cutoff)
    .map((student) => ({
      name: student.name,
      average: calculateAverage(student.id),
    }));
}

function changeStatus(id, newStatus) {
  const student = students.find((item) => item.id === id);
  if (student) {
    student.status =
      newStatus === "active" || newStatus === "suspended"
        ? newStatus
        : student.status;
    console.log(`เปลี่ยนสถานะนักเรียน id ${id} เป็น ${student.status}`);
  } else {
    console.log(`ไม่พบข้อมูลนักเรียนรหัส ${id}`);
  }
}

// ==========================================
// 3. ส่วนทดสอบการทำงาน (Test Cases)
// ==========================================
console.log("--- เริ่มรันระบบทดสอบ ---");

// 1. ทดสอบเพิ่มนักเรียน
addStudent("Tina", [33, 44, 66]); // เฉลี่ย 47.67 (ตก)
addStudent("Yelly", [99, 88, 77]); // เฉลี่ย 88.00 (ผ่าน)

// 2. ทดสอบอัปเดตเกรด (แก้ไข: ส่งเข้าไปเป็น Array)
updateGrades(3, [55]); // เพิ่มคะแนนให้ Tina

// 3. ทดสอบเปลี่ยนสถานะ
changeStatus(2, "suspended");

// 4. ทดสอบดูรายชื่อคนสอบผ่าน
console.log("\n--- สรุปนักเรียนที่สอบผ่าน (เกณฑ์ 50) ---");
const passingList = getPassingStudents(50);
console.log(passingList);

// 5. ทดสอบระบบ Error Handling
console.log("\n--- ทดสอบระบบค้นหาด้วย ID ---");
try {
  const student = getStudentById(99); // ค้นหา id ไม่มีจริง เพื่อให้เกิด Error
  console.log(student);
} catch (error) {
  console.error(`💥 ตรวจจับข้อผิดพลาด: ${error.message}`);
}
