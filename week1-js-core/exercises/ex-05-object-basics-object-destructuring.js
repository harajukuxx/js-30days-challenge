/*
สร้าง Object ชื่อ config ที่เก็บค่า port: 5000 และ dbUrl: "mongodb://..." 
จากนั้นลองใช้ Destructuring แบบเปลี่ยนชื่อตัวแปร แกะ port ออกมาเป็นตัวแปรชื่อ serverPort ดูครับ
*/

const config = {
  port: 5000,
  dbUrl: "mongodb://...",
};

const { port: serverPort } = config;
console.log("🚀 ~ serverPost:", serverPort);

/*
🚀 ยกระดับไปอีกขั้น: ลุยโจทย์ท้าทายเพิ่มความคล่อง
ลองขยับมาทำโจทย์สถานการณ์จริง (Real-world Challenge) ที่ลึกขึ้นอีกนิดครับ สมมติว่าได้รับข้อมูล Response มาจาก Database API หน้าตาแบบนี้:

โจทย์: ลองใช้ Destructuring บรรทัดเดียว เพื่อแกะค่าออกมาเป็น 2 ตัวแปรนี้:
แกะ status ออกมาตรงๆ
แกะ firstName ออกมาแล้วเปลี่ยนชื่อตัวแปรใหม่เป็น developerName
(ใบ้ให้: สามารถทำ Destructuring ซ้อนกันเข้าไปใน Object ชั้นในได้ เรียกว่า Nested Destructuring)
*/

const apiResponse = {
  status: "success",
  data: {
    userId: 999,
    profile: {
      firstName: "Nutthapong",
      lastName: "Saengchan",
    },
  },
};

const {
  status,
  data: {
    profile: { firstName: developerName },
  },
} = apiResponse;

// ยากกว่าเดิม
/*
🥊 ข้อที่ 1: Dynamic Field Extraction + Rest Parameter (การแยกข้อมูลอ่อนไหว)
สถานการณ์: เวลา User อัปเดตโปรไฟล์เข้ามาผ่าน API (req.body) บางครั้งเขาอาจจะแอบส่งฟิลด์แปลกๆ หรือฟิลด์ที่เราไม่อนุญาตให้อัปเดตตรงๆ (เช่น role หรือ password) เข้ามาด้วย

JavaScript
const incomingRequest = {
  username: "tina_dev",
  email: "tina@example.com",
  bio: "Full-stack developer",
  role: "super_admin", // ❌ ฟิลด์อันตราย ห้ามอัปเดตตรงๆ!
  isAdmin: true        // ❌ ฟิลด์อันตราย ห้ามอัปเดตตรงๆ!
};
โจทย์:

ลองใช้ Destructuring แยก role และ isAdmin ออกมาต่างหาก

ใช้ Rest Parameter (...) มัดรวมฟิลด์ที่เหลือทั้งหมด (username, email, bio) ไปไว้ในตัวแปรใหม่ชื่อ safeData (เพื่อเอาไปอัปเดตลง DB อย่างปลอดภัย)

เงื่อนไขพิเศษ: ถ้าใน incomingRequest ไม่มี role ส่งมา ให้ตัวแปร role มีค่าเริ่มต้น (Default Value) เป็น "user"
*/
const incomingRequest = {
  username: "tina_dev",
  email: "tina@example.com",
  bio: "Full-stack developer",
  role: "super_admin", // ❌ ฟิลด์อันตราย ห้ามอัปเดตตรงๆ!
  isAdmin: true, // ❌ ฟิลด์อันตราย ห้ามอัปเดตตรงๆ!
};

// const { username, email, bio, ...other } = incomingRequest;
// const safeData = { username, email, bio, role: "user" };

// ดึงฟิลด์อันตรายออกมากักไว้ ส่วนฟิลด์ที่เหลือทั้งหมดจะถูกมัดรวมเข้า safeData อัตโนมัติ!
const { role = "user", isAdmin, ...safeData } = incomingRequest;

/*
ทำไมวิธีนี้ถึงดีกว่า?
Scalable: อนาคตถ้าหน้าบ้านส่งข้อมูลเพิ่มมาอีก 10 ฟิลด์ (เช่น gender, website, github) ตัวแปร safeData ก็จะดูดกลืนฟิลด์เหล่านั้นมาให้โดยอัตโนมัติ โดยที่เราไม่ต้องแก้โค้ดบรรทัดนี้เลย
โค้ดสั้นลง: ไม่ต้องสร้างตัวแปรพัก username, email, bio ให้รก Memory บรรทัดเดียวแยกขยะออกจากของดีได้ทันที
*/

/*
🥊 ข้อที่ 2: Extreme Nested Destructuring with Renaming + Array Mix (แกะข้อมูลสถิติ API)
สถานการณ์: คุณไปดึงข้อมูลรายงานการใช้งาน API มาจาก Microservice อื่น แล้วได้ JSON หน้าตาซับซ้อนที่มีทั้ง Object ซ้อน Object และมี Array ซ้อนอยู่ข้างในด้วย ดังนี้:

JavaScript
const monitorReport = {
  serviceName: "auth-service",
  metadata: {
    environment: "production",
    metrics: {
      latency: {
        p95: 120,
        p99: 450
      },
      activeConnections: [150, 180, 210] // [Min, Avg, Max]
    }
  }
};

โจทย์: ลองใช้ Destructuring บรรทัดเดียว เพื่อแกะและสร้างตัวแปร 3 ตัวนี้:

แกะค่า p99 ออกมาแล้วเปลี่ยนชื่อตัวแปรเป็น maxLatency

แกะค่า ตัวเลขตัวที่ 2 (ค่า Avg ซึ่งก็คือ 180) จาก Array activeConnections ออกมาเป็นตัวแปรชื่อ averageConnections 
(ใบ้ให้: Destructuring สามารถใช้กับ Array [ , avg] เพื่อข้ามตำแหน่งได้)

ตั้งค่า Default Value ให้กับ environment เป็น "development" (เผื่อระบบลืมส่งมา)
*/

const monitorReport = {
  serviceName: "auth-service",
  metadata: {
    environment: "production",
    metrics: {
      latency: {
        p95: 120,
        p99: 450,
      },
      activeConnections: [150, 180, 210], // [Min, Avg, Max]
    },
  },
};

const {
  metadata: {
    environment = "development",
    metrics: {
      latency: { p99: maxLatency },
      activeConnections: [, avg],
    },
  },
} = monitorReport;
