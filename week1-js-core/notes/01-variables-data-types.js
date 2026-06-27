const firstName = "Nutthapong";
const age = 37;

let price = 100;
let tax = 0.07;
let finalPrice = price * (1 + tax);
console.log(finalPrice);

let isLoggedIn = true;

let x; // ผลลัพธ์จะเป็น undefined

let currentTarget = null; // ตั้งใจให้ว่าง

// Backtick (`)
let emailTemplate = `
  เรียน คุณ ${firstName},
  ทางเราได้รับข้อมูลของคุณแล้ว
  ขอบคุณครับ
`;
console.log(emailTemplate);
