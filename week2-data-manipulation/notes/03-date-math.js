const now = new Date();
console.log("🚀 ~ now:", now);
const fixDate = new Date("2026-06-30");

const d = new Date("2026-06-30T22:05:14");

console.log(d.getFullYear()); // 2026 (ปี ค.ศ.)
console.log(d.getMonth()); // 5 (เดือน มิถุนายน เพราะเริ่มนับจาก 0) +1 เข้าไป
console.log(d.getDate()); // 30 (วันที่)
console.log(d.getDay()); // 2 (วันในสัปดาห์ 0 = วันอาทิตย์, 2 = วันอังคาร)
console.log(d.getHours()); // 22 (ชั่วโมง)
console.log(d.getMinutes()); // 5 (นาที)
console.log(d.getTime()); // 1782837914000 (Timestamp เป็นมิลลิวินาที)

// กลุ่ม Set (แก้ไขค่าวันที่)
const event = new Date();
event.setFullYear(2027);
event.setMonth(11); // เปลี่ยนเป็นเดือนธันวาคม 0-11
event.setDate(25); // เปลี่ยนเป็นวันที่ 25

// กลุ่ม Format (แปลงเป็น String)
console.log(d.toISOString()); // "2026-06-30T15:03:24.000Z" (นิยมใช้เก็บใน Database)
console.log(d.toDateString()); // "Tue Jun 30 2026" (อ่านง่าย เฉพาะวันที่)
console.log(d.toLocaleDateString("th-TH")); // "30/6/2026" (ฟอร์แมตตามโลคอลไทย)

// การคำนวณหาความต่างของวัน (Date Difference)
const date1 = new Date("2026-06-01");
const date2 = new Date("2026-06-30");

const diffTime = Math.abs(date2 - date1); // ได้ความต่างเป็นมิลลิวินาที
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

console.log(diffDays + " วัน"); // 29 วัน

// ############################################################################

Math.round(4.5); // 5 ปัดเศษตามหลักคณิตศาสตร์ (.5 ขึ้นไปปัดขึ้น)
Math.ceil(4.1); // 5 ปัดขึ้นเสมอเป็นจำนวนเต็มที่ใกล้ที่สุด
Math.floor(4.9); // 4 ปัดลงเสมอเป็นจำนวนเต็มที่ใกล้ที่สุด
Math.trunc(-4.9); // -4 ตัดเศษทิ้ง เอาเฉพาะส่วนจำนวนเต็ม (มีประโยชน์กับเลขติดลบ)

// console.log(Math.max(10, 20, 30, 5)); // 30
// console.log(Math.min(10, 20, 30, 5)); // 5

// Math.random() 0-1
// 💡 สูตรการสุ่มเลขจำนวนเต็มระหว่าง Min (รวม) ถึง Max (รวม)ที่ใช้บ่อยที่สุด:
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10)); // สุ่มเลข 1 ถึง 10

// console.log(Math.abs(-525)); // 525
// console.log(Math.sqrt(16));  // 4
