/*
🏋️ Mini Exercise ลองทดสอบความเข้าใจ
ลองประยุกต์ใช้ความรู้จากบทเรียนนี้แก้โจทย์นี้ดูครับ:

JavaScript
const userProfile = { name: "Tina", age: 37 };
const userPermissions = { canEdit: true, canDelete: false };
โจทย์:

จงรวม Object userProfile และ userPermissions เข้าด้วยกันเป็น Object ใหม่ชื่อ fullUser โดยใช้ Spread Operator

จากนั้นใช้ Destructuring + Rest Parameter ดึงเอา canDelete แยกออกไป และมัดรวมข้อมูลที่เหลือทั้งหมดไว้ในตัวแปรชื่อ outputData
*/
const userProfile = { name: "Tina", age: 37 };
const userPermissions = { canEdit: true, canDelete: false };

const fullUser = { ...userProfile, ...userPermissions };
const { canDelete, ...outputData } = fullUser;

// #################################################################################################

const order = {
  id: "ORD001",
  products: ["Laptop", "Mouse"], // <-- มี Array อยู่ข้างใน (Nested)
  status: "pending",
};

// ใช้ Spread Operator คัดลอก order ออกมาเป็นก้อนใหม่
const updatedOrder = { ...order, status: "completed" };

// 🚨 ลองแอบไปแก้ไขข้อมูลใน Array ของ updatedOrder
updatedOrder.products.push("Keyboard");

console.log(order.products);
// คำถาม: คุณคิดว่า order (ตัวต้นฉบับ) ตัวแปร products จะเปลี่ยนตามไปด้วยไหม?
// และเพราะอะไร?

/*
🔍 เจาะลึกกลไก: ทำไมตัวต้นฉบับถึงโดนหางเลขไปด้วย?
เมื่อเราใช้ Spread Operator { ...order } ตัว JavaScript จะก๊อปปี้ข้อมูลให้แค่ ชั้นแรก (Top-level) เท่านั้นครับ
ข้อมูลประเภท Primitive เช่น id: "ORD001" และ status: "pending" จะถูกก๊อปปี้แยกขาดจากกันจริง ๆ (เปลี่ยนของใหม่ ของเก่าไม่พัง)
แต่ products มันเป็น Array (ซึ่งเป็นประเภท Object) สิ่งที่ Spread Operator ก๊อปปี้ไป ไม่ใช่ตัวข้อมูลใน Array... แต่เป็น "ที่อยู่บนหน่วยความจำ (Reference/Pointer)" ที่ชี้ไปยัง Array ก้อนเดียวกัน!
ดังนั้น ทั้ง order.products และ updatedOrder.products จึงแชร์กระเป๋าใบเดียวกันอยู่ พอคุณใช้ .push() สั่งเพิ่มของลงกระเป๋า มันเลยสะเทือนถึงกันทั้งคู่ครับ
*/

// structuredClone()
/*
สมมติว่าคุณกำลังทำระบบ "คัดลอกคอร์สเรียนเก่า เพื่อสร้างเป็นคอร์สเรียนใหม่ (Duplicate Course)" 
ซึ่งข้อมูลใน Database จะมี Object ซ้อนกันหลายชั้นมาก (มีทั้งข้อมูลทั่วไป, รายชื่อบทเรียนที่เป็น Array ของ Object, และสิทธิ์การเข้าถึง)
*/

// 1. ข้อมูลคอร์สเรียนต้นฉบับใน Database (ซับซ้อน ซ้อนกัน 3 ชั้น)
const originalCourse = {
  id: "JS-101",
  title: "JavaScript Backend Basics",
  tags: ["javascript", "node"],
  details: {
    instructor: "Tina",
    lessons: [
      { chapter: 1, title: "Variables" },
      { chapter: 2, title: "Objects" },
    ],
  },
};

// 2. ใช้ structuredClone() เพื่อโคลนแยกขาดจากกันทุกชั้น (Deep Copy)
const newCourse = structuredClone(originalCourse);

// 3. ปรับแต่งข้อมูลในคอร์สใหม่ โดยไม่ต้องกลัวว่าจะไปกระทบของเก่า
newCourse.id = "JS-202";
newCourse.title = "Advanced JavaScript for Pro";
newCourse.tags.push("typescript"); // ลองแก้ไข Array ชั้นที่ 2
newCourse.details.lessons[0].title = "Advanced Variables"; // ลองแก้ไข Object ใน Array ชั้นที่ 3

// --- มาตรวจผลลัพธ์กัน ---

console.log("🟢 Original Course (หลังจากโคลน):");
console.log(JSON.stringify(originalCourse, null, 2));

console.log("\n🚀 New Course (ตัวที่แก้ไขใหม่):");
console.log(JSON.stringify(newCourse, null, 2));

//

const originalData = {
  id: 1,
  nestedArray: ["A", "B"],
};

// 🌟 โคลนทั้งก้อนแบบ Deep Copy แล้วแกะตัวแปรออกมาในบรรทัดเดียว!
const { id, nestedArray: copiedArray } = structuredClone(originalData);

// ทดสอบความปลอดภัย
copiedArray.push("C");

console.log(originalData.nestedArray); // ["A", "B"] (ตัวจริงปลอดภัย ไม่เปลี่ยนตาม)
console.log(copiedArray); // ["A", "B", "C"] (ตัวโคลนเปลี่ยนอย่างอิสระ)
