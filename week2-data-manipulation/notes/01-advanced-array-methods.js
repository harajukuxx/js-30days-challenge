const usersInDB = [
  { fname: "Nutthapong", salary: 40000 },
  { fname: "Atchara", salary: 60000 },
];

// แปลงร่างให้อยู่ในรูปที่ต้องการ
const updatedUsers = usersInDB.map((user) => {
  return {
    name: user.fname,
    income: user.salary,
    tax: user.salary * 0.05, // คำนวณภาษีเพิ่มเข้าไปด้วย
  };
});

/* ผลลัพธ์:
[
  { name: 'Nutthapong', income: 40000, tax: 2000 },
  { name: 'Atchara', income: 60000, tax: 3000 }
]
*/

const staff = [
  { name: "Tina", salary: 65000 },
  { name: "Alex", salary: 25000 },
  { name: "Somchai", salary: 18000 },
];

// คัดเฉพาะคนที่มีเงินเดือน > 50000
const highEarners = staff.filter((person) => person.salary > 50000);

// ผลลัพธ์: [ { name: 'Tina', salary: 65000 } ]

const expenses = [
  { title: "Server Cost", amount: 5000 },
  { title: "Internet", amount: 1200 },
  { title: "Software License", amount: 800 },
];

// สูตร: array.reduce((ค่าสะสม, ตัวปัจจุบัน) => { ... }, ค่าเริ่มต้น)
const totalCost = expenses.reduce((accumulator, current) => {
  return accumulator + current.amount;
}, 0); // เลข 0 ตัวสุดท้ายคือ "ค่าเริ่มต้น" ของ accumulator

// ผลลัพธ์: 7000

const shopOrders = [
  { item: "Robot Toy", price: 1200, category: "Toy" },
  { item: "Java Book", price: 450, category: "Book" },
  { item: "Lego Set", price: 3500, category: "Toy" },
];

const totalToySales = shopOrders
  .filter((order) => order.category === "Toy") // ขั้นที่ 1: ร่อนเอาเฉพาะ Toy ออกมาก่อน
  .map((order) => order.price) // ขั้นที่ 2: แปลงร่างเหลือแค่ Array ของตัวเลขราคา [1200, 3500]
  .reduce((sum, price) => sum + price, 0); // ขั้นที่ 3: รวบยอดเลขราคาเข้าด้วยกัน

// ผลลัพธ์: 4700
