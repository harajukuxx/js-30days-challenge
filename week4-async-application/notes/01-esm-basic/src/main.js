// src/main.js

// สังเกตการระบุพาธ: ต้องเริ่มจาก ./ และตามด้วยชื่อโฟลเดอร์ย่อยจนถึงชื่อไฟล์ + .js
import { version, add } from "./utils/math.js";
import getUserById from "./services/user.js";

// รันใช้งาน
console.log(`[System v${version}] เริ่มทำงาน...`);

const sum = add(40, 2);
console.log(`ผลลัพธ์คำนวณ: ${sum}`);

const user = getUserById(99);
console.log(`ดึงข้อมูลสำเร็จ:`, user);
