const checkSalaryBonus = new Promise((resolve, reject) => {
  // จำลองว่าระบบใช้เวลาเช็คข้อมูล 2 วินาที
  setTimeout(() => {
    const isBankProfitable = false; // สมมติว่าปีนี้ธนาคารกำไรดี

    if (isBankProfitable) {
      resolve("เย้! ได้โบนัส 3 เดือน"); // ถ้าสำเร็จ ส่งข้อความนี้ออกไป
    } else {
      reject("ปีนี้งดโบนัสเนื่องจากเศรษฐกิจซบเซา"); // ถ้าพัง ส่งเหตุผลนี้ออกไป
    }
  }, 2000);
});

checkSalaryBonus
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("END");
  });

function getEmployeeId(name) {
  return new Promise((resolve) => resolve({ id: 101, name: name }));
}

function getSalary(employee) {
  return new Promise((resolve) => resolve(employee.id === 101 ? 30000 : 0));
}

// ใช้งานแบบ Chaining
getEmployeeId("สมชาย")
  .then((employee) => {
    console.log(`เจอพนักงาน: ${employee.name}`);
    return getSalary(employee); // ส่ง Promise ตัวถัดไปออกไป
  })
  .then((salary) => {
    console.log(`เงินเดือนพนักงานคนนี้คือ: ${salary} บาท`);
  })
  .catch((err) => console.log("เกิดข้อผิดพลาดในขั้นตอนใดขั้นตอนหนึ่ง:", err));

// ยุคปัจจุบัน: ปรับเป็น Async / Await เพื่อให้อ่านง่ายขึ้น ***
async function runSalaryProcess() {
  try {
    const employee = await getEmployeeId("สมชาย");
    console.log(`เจอพนักงาน: ${employee.name}`);

    const salary = await getSalary(employee);
    console.log(`เงินเดือนพนักงานคนนี้คือ: ${salary} บาท`);
  } catch (error) {
    console.error("เกิดข้อผิดพลาดระบบพัง:", error);
  }
}

runSalaryProcess();
