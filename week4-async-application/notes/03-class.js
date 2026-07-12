// Factory Function ระบบเล็ก
function createHero(name, skill) {
  return {
    name: name,
    skill: skill,
    introduce() {
      console.log(`ฉันคือ ${this.name} ความสามารถคือ ${this.skill}`);
    },
  };
}

// สร้าง Object หลาย ๆ ตัวได้ง่าย ๆ
const hero1 = createHero("Ironman", "ชุดเกราะไฮเทค");
const hero2 = createHero("Thor", "สายฟ้า");

hero1.introduce(); // ออกหน้าจอ: ฉันคือ Ironman ความสามารถคือ ชุดเกราะไฮเทค
hero2.introduce(); // ออกหน้าจอ: ฉันคือ Thor ความสามารถคือ สายฟ้า

// Class ระบบใหญ่
class Character {
  // 1. ตัวกำหนดค่าเริ่มต้น
  // constructor(): ฟังก์ชันพิเศษที่จะทำงานทันทีที่เราสั่งสร้าง Object ใหม่ เอาไว้สำหรับกำหนดค่าเริ่มต้นให้กับ Property
  constructor(name, job, hp) {
    this.name = name; // 'this' หมายถึงตัว Object ที่ถูกสร้างขึ้นมา
    this.job = job;
    this.hp = hp;
  }

  // 2. Method (ความสามารถของ Object)
  attack(target) {
    console.log(`${this.name} โจมตี ${target}!`);
  }

  takeDamage(amount) {
    this.hp -= amount;
    console.log(`${this.name} โดนดาเมจ ${amount} (HP คงเหลือ: ${this.hp})`);
  }
}

// --- วิธีนำไปใช้งาน (สร้าง Object) ---
const player1 = new Character("สมชาย", "นักรบ", 100);
const player2 = new Character("สมหญิง", "จอมเวทย์", 60);

player1.attack("มอนสเตอร์"); // ออกหน้าจอ: สมชาย โจมตี มอนสเตอร์!
player2.takeDamage(20); // ออกหน้าจอ: สมหญิง โโดนดาเมจ 20 (HP คงเหลือ: 40)

// 🚀 ฟีเจอร์ระดับสูงที่ทำให้ Class มีประโยชน์
/*
1. การสืบทอดคุณสมบัติ (Inheritance)
เราสามารถสร้าง Class ลูกที่ดึงความสามารถมาจาก Class แม่ได้ โดยใช้คำว่า extends 
และถ้าต้องการเรียกใช้งาน constructor ของแม่ ให้ใช้คำว่า super()
*/
// Class ลูกที่สืบทอดมาจาก Character ข้างบน
class Mage extends Character {
  constructor(name, hp, mp) {
    // ส่ง name, job, hp ไปให้ Class แม่จัดการ
    super(name, "จอมเวทย์", hp); // constructor ของแม่ ให้ใช้คำว่า super()
    this.mp = mp; // เพิ่มคุณสมบัติเฉพาะของ Mage
  }

  castSpell() {
    this.mp -= 10;
    console.log(`${this.name} ร่ายมนตร์คาถา! (MP คงเหลือ: ${this.mp})`);
  }
}

const myMage = new Mage("กานดา", 50, 100);
myMage.attack("บอส"); // ใช้ Method ของ Class แม่ได้เลย
myMage.castSpell(); // ใช้ Method เฉพาะของตัวเอง

/*
2. Getter และ Setter (ควบคุมการเข้าถึงข้อมูล)
เอาไว้ดักจับเวลาที่มีคนมาดึงข้อมูล (get) หรือแก้ไขข้อมูล (set) เพื่อความปลอดภัยหรือจัดฟอร์แมตข้อมูลก่อน
*/
class User {
  constructor(name) {
    this._name = name; // นิยมใส่ _ ข้างหน้าเพื่อบอกว่าเป็นค่าภายใน (Private-like)
  }

  // เวลาเรียกใช้: user.name
  get name() {
    return this._name.toUpperCase(); // แปลงเป็นตัวพิมพ์ใหญ่ก่อนส่งออกไป
  }

  // เวลาแก้ไข: user.name = "ใหม่"
  set name(newName) {
    if (newName.length < 3) {
      console.log("ชื่อสั้นเกินไปนะ!");
      return;
    }
    this._name = newName;
  }
}

// 1. สร้าง Object
const user = new User("mario");

// 2. เรียกใช้ get
console.log(user.name); // MARIO

// 3. เรียกใช้ set (แบบปกติ)
user.name = "luigi";
console.log(user.name); // LUIGI

// 4. เรียกใช้ set (แบบติดเงื่อนไข)
user.name = "ed"; // ชื่อสั้นเกินไปนะ!
console.log(user.name); // LUIGI (ค่ายังเป็นของเดิม)

/*
3. Static Methods (เรียกใช้ได้เลยไม่ต้องง้อ new)
เป็นฟังก์ชันประจำ Class ที่เรียกใช้จากชื่อ Class ได้โดยตรง โดยไม่จำเป็นต้องสร้าง Object ขึ้นมาใหม่ก่อน เหมาะกับงานที่เป็นฟังก์ชันตัวช่วย (Utility)
*/

class Calculator {
  static add(a, b) {
    return a + b;
  }
}
// เรียกใช้ได้ทันที ไม่ต้องมีคำว่า new Calculator()
console.log(Calculator.add(5, 10)); // 15

// ถ้าเป็นฟังก์ชันลอย ๆ ชื่ออาจจะตีกัน หรือจำยาก
function encryptPassword() {}
function encryptCreditCard() {}

// แต่พอใช้ Class มันจะถูกจัดหมวดหมู่ชัดเจน อ่านปุ๊บรู้ปั๊บว่ากลุ่มนี้ทำอะไร
class CryptoUtils {
  static encryptPassword() {}
  static encryptCreditCard() {}
}

class MathUtils {
  static add() {}
  static subtract() {}
}

class User2 {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  sayHi() {
    console.log(`สวัสดีฉันชื่อ ${this.name}`);
  }

  // ฟังก์ชัน Static (เป็นของส่วนกลาง เอาไว้ตรวจสอบเฉลี่ยรวม ไม่เกี่ยวกับข้อมูลคนใดคนหนึ่ง)
  // Class (ส่วนกลาง) ไม่เกี่ยวกับใคร
  static isAdult(age) {
    return age >= 18;
  }
}

const user5 = new User2("สมชาย", "Admin");
user5.sayHi(); // ต้องใช้ Object เรียก

// ส่วนตรวจสอบอายุ ไม่ต้องสร้างตัวละครใหม่ขึ้นมาให้เปลืองแรม เรียกจากส่วนกลางได้เลย
User2.isAdult(20); // true
