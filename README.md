# 🚀 JavaScript Challenge (Backend Foundation)

ยินดีต้อนรับสู่ Repository สำหรับเก็บโปรเจกต์และแบบฝึกหัดในโปรแกรมพัฒนาทักษะภาษา JavaScript (ES6+) อย่างเข้มข้น ซึ่งเป็นไปตามแนวทางและโครงสร้างรายละเอียดที่ระบุไว้ในเอกสาร **"JS 30 DAY FINAL.docx"**

Repository นี้จัดทำขึ้นเพื่อปูพื้นฐานภาษา JavaScript มุ่งเน้นการฝึกทักษะ Logic, การจัดการข้อมูล (Data Manipulation) และ Asynchronous Programming เพื่อเตรียมความพร้อมและสร้างฐานที่มั่นคงก่อนก้าวไปสู่การพัฒนาซอฟต์แวร์ฝั่ง Backend ต่อไป

---

## 🎯 Objectives

- **Solid Core Foundations:** ทำความเข้าใจไวยากรณ์พื้นฐานและกลไกการทำงานของ JavaScript อย่างลึกซึ้ง
- **Data Manipulation Skills:** ฝึกฝนการจัดการและประมวลผลข้อมูล ซึ่งเป็นหัวใจสำคัญของงานระบบหลังบ้าน
- **Asynchronous Mastery:** เข้าใจการทำงานของ Promise และ Async/Await เพื่อจัดการงานประเภท Non-blocking และการเชื่อมต่อ API
- **Practical CLI Projects:** ลงมือสร้างแอปพลิเคชันประเภท Command Line Interface (CLI Tools) ที่สามารถใช้งานได้จริง

---

## 📅 Challenge Roadmap & Syllabus (From "JS 30 DAY FINAL.docx")

### 📂 Week 1: JavaScript Core

เน้นการเรียนรู้ไวยากรณ์พื้นฐาน โครงสร้างหลักของภาษา ฟังก์ชัน อาร์เรย์ ออบเจกต์พื้นฐาน และการกระจายข้อมูล (Spread/Rest)

- **Core Concepts:** Variables, Data Types, Template Literals, Operators, Conditionals (If/Else, Ternary)
- **Data Structures & Functions:** Functions & Arrow Functions, Array Basics, Objects, Destructuring, Spread & Rest Operators, Loops, and forEach

### 📂 Week 2: Data Manipulation

การเจาะลึกเครื่องมือในการจัดการและประมวลผลข้อมูลรูปแบบต่างๆ ที่ซับซ้อนขึ้น พร้อมกับการสร้างโปรเจกต์ระบบหลังบ้านชิ้นแรก

- **Advanced Methods:** Array Methods (map, filter, find, sort, reduce), String Methods, Date & Math Objects
- **🚀 Project 1 — Expense Tracker CLI:** ระบบบันทึกและจัดการรายรับ-รายจ่ายผ่าน Terminal

### 📂 Week 3: Intermediate

เจาะลึกกลไกการทำงานภายใน ขอบเขตของตัวแปร การควบคุม Logic และการรับมือข้อผิดพลาดของระบบ

- **Deep Dive Logic:** Scope, Hoisting, Rest & Default Parameters, Error Handling, Advanced Short-circuit
- **🚀 Project 2 — Student Management CLI:** ระบบบริการจัดการข้อมูลนักเรียน

### 📂 Week 4: Async + Application

การจัดการทำงานแบบ Asynchronous การแบ่งสัดส่วนโค้ดเป็นโมดูล และการเชื่อมต่อดึงข้อมูลจากภายนอกผ่าน Real API

- **Modern JS Features:** Modules (ESM), JSON Data, Promises, Fetch API, Async/Await, Error Handling, and CLI Tools development
- **🚀 Project 3 — Advanced Task Manager CLI:** ระบบจัดการงานและสถานะกิจกรรมขั้นสูง
- **🚀 Project 4 — Weather CLI:** แอปพลิเคชันเช็กสภาพอากาศผ่านบรรทัดคำสั่งโดยเชื่อมต่อกับ Real API

---

## 🏗️ Folder Structure

โครงสร้างของคลังเก็บโค้ดนี้ถูกออกแบบและจัดสรรพื้นที่ออกเป็นส่วนของสรุปเนื้อหา (Notes), โจทย์แบบฝึกหัด (Exercises) และตัวโปรเจกต์ (Projects) ไว้อย่างเป็นระบบระเบียบ:

```text
js-30days-challenge/
├── .gitignore                    # ระบุไฟล์ที่ไม่เอาขึ้น GitHub (เช่น node_modules, .env)
├── README.md                     # บันทึกสรุปสิ่งที่เรียนรู้ในแต่ละสัปดาห์
│
├── week1-js-core/                # 📂 สัปดาห์ที่ 1: พื้นฐาน Syntax
│   ├── notes/                    # โฟลเดอร์เก็บโค้ดทฤษฎีตามบทเรียน
│   └── exercises/                # 🏋️ ไฟล์แบบฝึกหัดประจำหัวข้อ (ลุยโจทย์เอง)
│
├── week2-data-manipulation/      # 📂 สัปดาห์ที่ 2: การจัดการข้อมูล
│   ├── notes/                    # สรุปโค้ดทฤษฎี (Array Methods, String, Date)
│   └── exercises/                # 🏋️ คลังแบบฝึกหัด Data Manipulation (จุดนี้ต้องซ้อมเยอะ)
│
├── project1-expense-tracker/     # 🚀 โปรเจกต์ 1: Expense Tracker CLI
│   ├── index.js
│   └── data.json
│
├── week3-intermediate/           # 📂 สัปดาห์ที่ 3: ความรู้ระดับกลาง
│   ├── notes/                    # สรุปโค้ดทฤษฎี (Scope, Hoisting, Error Handling, Short-circuit)
│   └── exercises/                # 🏋️ แบบฝึกหัด Logic และ Error Handling (รวม Mini-challenges)
│
├── project2-student-management/  # 🚀 โปรเจกต์ 2: Student Management CLI
│   └── index.js
│
├── week4-async-application/      # 📂 สัปดาห์ที่ 4: Async & Web API
│   ├── notes/                    # สรุปโค้ดทฤษฎี (Modules, Promise, Async/Await)
│   └── exercises/                # 🏋️ แบบฝึกหัดต่อ API และ Async/Await
│
├── project3-task-manager/        # 🚀 โปรเจกต์ 3: Advanced Task Manager CLI
│   ├── index.js
│   └── tasks.json
│
└── project4-weather-cli/         # 🚀 โปรเจกต์ 4: Weather CLI (ใช้ Real API)
    ├── index.js
    ├── package.json
    └── .env                      # เก็บ API Key (ไฟล์นี้จะถูก .gitignore สั่งห้ามอัปโหลด)
```
