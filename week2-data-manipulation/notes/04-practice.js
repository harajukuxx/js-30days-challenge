const user = { id: 1, name: "Tina", role: "Developer" };

// Bad Practice ❌
const id = user.id;
const name = user.name;

// Best Practice  (Destructuring)
const { id, name, role } = user;

// ใช้ Spread Operator (...) เพื่อ Copy หรือ Merge ข้อมูล
const defaultSettings = { theme: "dark", notifications: true };
const userSettings = { notifications: false };

// รวม Object โดยที่ตัวแปรเดิมไม่เสียหาย
const finalSettings = { ...defaultSettings, ...userSettings };
// ผลลัพธ์: { theme: 'dark', notifications: false }

// Asynchronous Operations (การจัดการเวลาทำงานของโค้ดแบบ Async)
// ใช้ async/await ร่วมกับ try/catch เสมอ หลีกเลี่ยงการใช้ Callback Hell
// Best Practice  อ่านง่ายเหมือนโค้ดทำงานจากบนลงล่าง
async function getUserData(userId) {
  try {
    const user = await db.users.findById(userId); // รอผลลัพธ์จาก DB
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error("Database error:", error.message);
    // ทำการจัดการ Error หรือส่งต่อ (throw) ให้ Global Error Handler
    throw error;
  }
}

// อย่าลืมใช้ Promise.all() เมื่อทำระบบขนาน (Parallel)
// Bad Practice ❌ (ช้าเพราะต้องรออันแรกเสร็จก่อนถึงจะทำอันที่สอง)
const profile = await fetchProfile();
const posts = await fetchPosts();

// Best Practice  (รันคู่กัน ประหยัดเวลาไปได้ครึ่งหนึ่ง)
const [profile, posts] = await Promise.all([fetchProfile(), fetchPosts()]);

// Array Higher-Order Functions (เลิกใช้ for-loop แบบเก่า)
const transactions = [
  { amount: 100, type: "income" },
  { amount: 50, type: "expense" },
  { amount: 200, type: "income" },
];

// โจทย์: หาผลรวมของเฉพาะรายได้ (income)
const totalIncome = transactions
  .filter((t) => t.type === "income") // 1. กรองเหลือเฉพาะ income
  .map((t) => t.amount) // 2. แปลงให้เหลือแค่ตัวเลข [100, 200]
  .reduce((sum, amt) => sum + amt, 0); // 3. บวกทบกัน เริ่มจาก 0

console.log(totalIncome); // 300

// Defensive Coding & Security (เขียนโค้ดให้ปลอดภัยและรัดกุม)
const response = {
  data: {
    profile: null,
  },
};

// Bad Practice ❌ (ถ้า profile เป็น null โค้ดบรรทัดนี้จะ Error ทันที)
const avatar = response.data.profile.avatarUrl;

// Best Practice  (ถ้าตัวไหนพัง มันจะหยุดและคืนค่า undefined ให้ทันที ไม่ล่ม)
const avatarUrl = response.data?.profile?.avatarUrl ?? "default-avatar.png";
// ใช้ ?? เพื่อบอกว่าถ้าข้างหน้าเป็น null/undefined ให้ใช้ "default-avatar.png" แทน
