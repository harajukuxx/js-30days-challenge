/*
โจทย์ข้อที่ 1: ระบบจัดการบัญชีธนาคาร (ฝึกพื้นฐาน Class & Method)
โจทย์: ให้สร้าง Class ชื่อ BankAccount สำหรับจำลองบัญชีธนาคาร

Property: * owner (ชื่อเจ้าของบัญชี)
balance (ยอดเงินคงเหลือ เริ่มต้นที่ 0)

Methods:
deposit(amount): รับเงินฝากเพิ่มเข้าไปในยอดเงินคงเหลือ และแสดงข้อความบอกยอดเงินปัจจุบัน
withdraw(amount): ถอนเงินออกจากบัญชี (ต้องหักเงินออก) แต่มีเงื่อนไขว่า ถ้ายอดเงินไม่พอถอน ให้แสดงข้อความเตือนว่า "เงินในบัญชีไม่พอ" และไม่หักเงิน
เป้าหมาย: สั่ง new BankAccount("ชื่อคุณ") ลองฝากเงิน ลองถอนเงินแบบผ่าน และถอนเงินแบบให้เงินไม่พอ
*/

class BankAccount {
  constructor(name, amount = 0) {
    this.name = name;
    this.balance = amount;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`ฝากเงิน ${amount} บาท ยอดเงินปัจจุบัน ${this.balance} บาท`);
  }
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`ถอนเงิน ${amount} บาท ยอดเงินปัจจุบัน ${this.balance} บาท`);
    } else {
      console.log(`เงินในบัญชีไม่พอ`);
    }
  }
}

const user1 = new BankAccount("Tina");
user1.deposit(1000);
user1.withdraw(500);

/*
โจทย์ข้อที่ 2: ระบบสมาชิกและรหัสผ่าน (ฝึกใช้ Getter & Setter)
โจทย์: ให้สร้าง Class ชื่อ Account สำหรับดูแลเรื่องการเปลี่ยนรหัสผ่านให้ปลอดภัย

Property:
username (ชื่อผู้ใช้)
_password (รหัสผ่าน - เก็บเป็นความลับภายใน)

Getter & Setter:

สร้าง Getter ชื่อ password เพื่อเวลาคนอื่นมาแอบดูรหัสผ่าน (account.password) 
ให้มันส่งค่ากลับไปเป็นเครื่องหมายดอกจันทั้งหมดขนาดยาว 6 ตัวเสมอ (เช่น "******") เพื่อความปลอดภัย

สร้าง Setter ชื่อ password เพื่อเวลาจะเปลี่ยนรหัสผ่านใหม่ (account.password = "123456") 
มีเงื่อนไขว่า รหัสผ่านใหม่ต้องมีความยาวตั้งแต่ 6 ตัวอักษรขึ้นไป ถ้าสั้นกว่านั้นให้ขึ้นเตือนว่า "รหัสผ่านสั้นเกินไป เปลี่ยนไม่สำเร็จ"

เป้าหมาย: ลองสร้าง account, ลองสั่งดูรหัสผ่าน, และลองเปลี่ยนรหัสผ่านทั้งแบบสั้นเกินไปและแบบยาวผ่านเกณฑ์
*/

class Account {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }

  get password() {
    return `******`;
  }

  set password(newPassword) {
    if (newPassword.toString().length >= 6) {
      this._password = newPassword;
      return console.log(`เปลี่ยนรหัสเรียบร้อย`);
    } else {
      return console.log(`รหัสสั้นไปนะ`);
    }
  }
}

const user2 = new Account("Yelly", 123456);
console.log(user2.password);
user2.password = 125;

/*
โจทย์ข้อที่ 3: ระบบจัดการรถยนต์และรถไฟฟ้า (ฝึกใช้ Static & Inheritance)
โจทย์: ให้สร้างระบบคำนวณและจำลองประเภทยานพาหนะ

Class แม่ (Car):

มี Property: brand (ยี่ห้อ), speed (ความเร็วปัจจุบัน เริ่มที่ 0)

มี Method: accelerate() ให้เพิ่มความเร็วขึ้นทีละ 10 และแสดงข้อความบอกความเร็วใหม่

มี Static Method: ชื่อ compareSpeed(carA, carB) เอาไว้รับ Object รถ 2 คันเข้ามาเปรียบเทียบกัน แล้วแสดงผลว่ารถคันไหนวิ่งเร็วกว่ากัน

Class ลูก (EVCar สืบทอดมาจาก Car):

มี Property เพิ่มเติม: battery (เปอร์เซ็นต์แบตเตอรี่ เริ่มต้น 100)

ให้แก้ไข (Override) Method accelerate() ใหม่: ทุกครั้งที่เร่งความเร็ว ให้ความเร็วเพิ่มทีละ 20 (แรงกว่ารถทั่วไป) และให้ลด battery ลงทีละ 5 %

เป้าหมาย: สร้างรถยนต์ธรรมดา 1 คัน, รถ EV 1 คัน, สั่งเร่งความเร็วทั้งคู่ แล้วใช้ฟังก์ชันส่วนกลาง Car.compareSpeed(รถคันที่1, รถคันที่2) เพื่อดูว่าใครเร็วกว่ากัน
*/
class Car {
  constructor(brand, speed = 0) {
    this.brand = brand;
    this.speed = speed;
  }

  // รถทั่วไป เร่งความเร็วทีละ 10
  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} เร่งความเร็ว! ความเร็วปัจจุบัน: ${this.speed}`);
  }

  // ฟังก์ชันส่วนกลาง เปรียบเทียบรถ 2 คันได้ทุกประเภท
  static compareSpeed(carA, carB) {
    if (carA.speed === carB.speed) {
      return `ทั้งสองคันมีความเร็วเท่ากันที่ ${carA.speed}`;
    }
    return carA.speed > carB.speed
      ? `${carA.brand} เร็วกว่า!`
      : `${carB.brand} เร็วกว่า!`;
  }
}

// Class ลูก สืบทอดมาจาก Car
class EVcar extends Car {
  constructor(brand, speed) {
    super(brand, speed); // ส่งต่อไปให้ Car จัดการ
    this.battery = 100; // ค่าเริ่มต้นของรถ EV
  }

  // เขียนทับ (Override) เพื่อกำหนดพฤติกรรมเฉพาะของรถ EV
  accelerate() {
    this.speed += 20;
    this.battery -= 5;
    console.log(
      `${this.brand} (EV) เร่งแรงสะใจ! ความเร็ว: ${this.speed} | แบตเตอรี่เหลือ: ${this.battery}%`,
    );
  }
}

// --- ทดสอบการใช้งาน ---
const car1 = new Car("Toyota"); // เริ่มที่ speed = 0
const car2 = new EVcar("BMW", 50); // เริ่มที่ speed = 50

car1.accelerate(); // Toyota เร่งความเร็ว! ความเร็วปัจจุบัน: 10
car2.accelerate(); // BMW (EV) เร่งแรงสะใจ! ความเร็ว: 70 | แบตเตอรี่เหลือ: 95%

// ใช้ Static Method เรียกเปรียบเทียบความเร็วจากส่วนกลาง
const result = Car.compareSpeed(car1, car2);
console.log(result); // ออกหน้าจอ: BMW เร็วกว่า!
