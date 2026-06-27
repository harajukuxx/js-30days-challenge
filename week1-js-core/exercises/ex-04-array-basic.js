/*
โจทย์ข้อที่ 1: จัดการรายชื่อคิวลูกค้า (Queue System)
สมมติว่าคุณกำลังทำระบบคิวร้านอาหาร โดยเริ่มต้นมีคิวลูกค้าดังนี้:

JavaScript
let customerQueue = ["Anakin", "Luke", "Leia"];

จงเขียนคำสั่งต่อยอดตามลำดับดังนี้:
มีลูกค้าใหม่ชื่อ "Han" เดินมาต่อคิวเพิ่ม (ให้เขียนโค้ดเพิ่มชื่อ Han เข้าไปที่ ท้ายคิว)
ลูกค้าคิวแรกสุดกินเสร็จแล้ว (ให้เขียนโค้ด ลบคิวแรกสุด ออกจาก Array)
ให้ใช้คำสั่งดึงชื่อ ลูกค้าที่อยู่คิวแรกสุด ณ ปัจจุบัน ออกมา console.log ดูว่าคือใคร
ให้พิมพ์ความยาวของคิวที่เหลืออยู่ปัจจุบันออกมาทาง Console
*/

let customerQueue = ["Anakin", "Luke", "Leia"];
customerQueue.push("Han");
customerQueue.shift();
console.log(customerQueue);
console.log(customerQueue.length);

/*
โจทย์ข้อที่ 2: ฟังก์ชันตรวจจับคนแปลกหน้า (Security Check)
จงเขียน Arrow Function ชื่อ checkAccess โดยรับ Parameter 2 ตัวคือ:

allowedUsers (Array ที่เก็บรายชื่อผู้มีสิทธิ์เข้าตึก)
guestName (String ชื่อของคนที่กำลังจะเดินเข้าตึก)

เงื่อนไขภายในฟังก์ชัน:
ให้ตรวจสอบว่า guestName มีชื่ออยู่ใน Array allowedUsers หรือไม่?
ถ้ามีชื่ออยู่: ให้แสดงข้อความว่า "ยินดีต้อนรับคุณ [ชื่อ guest] เข้าสู่ระบบ"
ถ้าไม่มีชื่ออยู่: ให้แสดงข้อความว่า "ปฏิเสธการเข้าถึง! ไม่พบชื่อคุณ [ชื่อ guest]"
*/
const checkAccess = (allowedUsers, guestName) => {
  const isUsers = allowedUsers.includes(guestName);
  if (isUsers) {
    return `ยินดีต้อนรับคุณ ${guestName} เข้าสู่ระบบ`;
  } else {
    return `ปฏิเสธการเข้าถึง! ไม่พบชื่อคุณ ${guestName}`;
  }
};
console.log(
  "🚀 ~ checkAccess ~ checkAccess:",
  checkAccess(["Tina", "Yelly"], "Tina"),
);

// ยากกว่าเดิม
/*
🔥 โจทย์ข้อที่ 1: ฟังก์ชันสลับตำแหน่งผู้ชนะ (Array Mutation & Swap)
โจทย์:
ในระบบบอร์ดเกมหรือการแข่งขัน บางครั้งเราต้องมีการอัปเดตอันดับผู้เล่นใน Array ตามสถานการณ์จริง
จงเขียน Arrow Function ชื่อ swapRank โดยรับ Parameter 3 ตัวคือ:
ranks (Array ของรายชื่อผู้เล่น เรียงตามอันดับจากอันดับ 1 ไปเรื่อยๆ)
player1 (ชื่อผู้เล่นคนที่ 1)
player2 (ชื่อผู้เล่นคนที่ 2)

เงื่อนไขภายในฟังก์ชัน:
ให้ค้นหาตำแหน่ง (Index) ของ player1 และ player2 ใน Array ว่าอยู่ที่ตำแหน่งไหน
ถ้าเจอทั้งคู่: ให้ทำการ สลับตำแหน่ง ของผู้เล่นสองคนนี้ใน Array ตัวเดิม แล้วรีเทิร์น Array ที่สลับตำแหน่งแล้วกลับออกมา
ถ้าหาใครไม่เจอคนใดคนหนึ่ง (หรือทั้งคู่): ไม่ต้องสลับอะไรเลย และให้รีเทิร์น String ข้อความว่า "ไม่สามารถสลับอันดับได้เนื่องจากข้อมูลไม่ถูกต้อง"

const leaderBoard = ["Alice", "Bob", "Charlie", "David"];
console.log(swapRank(leaderBoard, "Bob", "David")); 
// ผลลัพธ์ที่ต้องได้: ["Alice", "David", "Charlie", "Bob"] (Bob กับ David สลับที่กัน)
*/

const leaderBoard = ["Alice", "Bob", "Charlie", "David"];
const swapRank = (leaderBoard, player1, player2) => {
  const newleaderBoard = [...leaderBoard];
  const checkPlayer =
    leaderBoard.includes(player1) && leaderBoard.includes(player2);

  if (checkPlayer) {
    newleaderBoard[leaderBoard.indexOf(player1)] = player2;
    newleaderBoard[leaderBoard.indexOf(player2)] = player1;
    return newleaderBoard;
  } else {
    return "ไม่สามารถสลับอันดับได้เนื่องจากข้อมูลไม่ถูกต้อง";
  }
};
console.log(swapRank(leaderBoard, "Bob", "David"));

/*
🚀 โจทย์ข้อที่ 2: ฟังก์ชันตัดเกรดเฉลี่ยขั้นสูง (Array Data Processing)
โจทย์:
เรามี Array ที่เก็บคะแนนดิบของนักเรียนในห้องอยู่แบบนี้:

JavaScript
const scoreList = [45, 72, 85, 30, 90, 62];

จงเขียน Arrow Function ชื่อ analyzeScores โดยรับ Parameter 1 ตัวคือ scores (Array ของตัวเลขคะแนน)

เงื่อนไขการทำงานภายในฟังก์ชัน:
สร้าง Array เปล่าขึ้นมา 2 ตัวข้างในฟังก์ชัน ตัวแรกชื่อ passed (สำหรับคนผ่าน) ตัวที่สองชื่อ failed (สำหรับคนตก)
ให้ใช้ Loop (จะใช้ for, for...of หรือ .forEach() ก็ได้ตามที่ถนัด) เพื่อวิ่งไล่เช็คคะแนนทีละตัวใน Array scores

เกณฑ์การผ่านคือ คะแนนต้องตั้งแต่ 60 คะแนนขึ้นไป
ถ้าคะแนนผ่าน ให้ใช้ .push() เอาคะแนนนั้นไปใส่ใน Array passed
ถ้าคะแนนไม่ผ่าน ให้เอาคะแนนนั้นไปใส่ใน Array failed
เมื่อเช็คครบทุกคนแล้ว ให้ฟังก์ชันนี้ส่งกลับ (Return) ออกมาเป็น Object หน้าตาแบบนี้:

JavaScript
{
    passedCount: [จำนวนคนที่ผ่าน],
    failedCount: [จำนวนคนที่ตก]
}
(ใบ้ให้: สามารถใช้ .length ของ Array passed และ failed ที่เราแยกไว้มาใส่เป็นค่าใน Object ได้เลยครับ)

เทสเคสสำหรับลองรัน:

JavaScript
console.log(analyzeScores(scoreList));
// ผลลัพธ์ที่ต้องได้: { passedCount: 4, failedCount: 2 }
*/

const scoreList = [45, 72, 85, 30, 90, 62];
const analyzeScores = (srores) => {
  const passed = [];
  const failed = [];

  srores.forEach((score) => {
    score >= 60 ? passed.push(score) : failed.push(score);
  });

  // console.log("🚀 ~ analyzeScores ~ passed:", passed.length);
  // console.log("🚀 ~ analyzeScores ~ failed:", failed.length);

  return {
    passedCount: passed.length,
    failedCount: failed.length,
  };
};

console.log(analyzeScores(scoreList));
