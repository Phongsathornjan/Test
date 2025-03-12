## คำอธิบายโปรเจกต์

โปรเจกต์นี้เป็นระบบตะกร้าสินค้าที่ประกอบด้วยสองส่วนหลัก:

- **Frontend**: สร้างด้วย React.js เพื่อให้ผู้ใช้สามารถเลือกสินค้า เพิ่ม/ลดจำนวนสินค้าในตะกร้า และตรวจสอบราคารวม
- **Backend**: สร้างด้วย Express.js เพื่อจัดการคำขอจากผู้ใช้ คำนวณราคารวม และจัดการข้อมูลที่เกี่ยวข้อง

## เทคโนโลยีที่ใช้

- **Frontend**:
  - React.js
  - Tailwind CSS สำหรับการออกแบบ
- **Backend**:
  - Node.js
  - Express.js

## การติดตั้งและการรันโปรเจกต์

### Step 1: โคลนโปรเจกต์

``` bash
git init
git clone https://github.com/Phongsathornjan/YOLOv9-Read_THAI_License_Plate.git
```

### Step 2: ติดตั้ง Dependencies
##### สำหรับ backend
1. ไปที่โฟลเดอร์ backend
``` bash
cd backend
```
2. ติดตั้ง dependencies
``` bash
npm install
```
##### สำหรับ frontend
1. กลับไปที่โฟลเดอร์หลัก
``` bash
cd ..
```
2. ไปที่โฟลเดอร์ frontend
``` bash
cd fronted
```
3. ติดตั้ง dependencies
``` bash
npm install
```
### Step 3: รันโปรเจกต์
##### รัน backend
1. ไปที่โฟลเดอร์ backend
``` bash
cd backend
```
2. รันเซิร์ฟเวอร์
``` bash
npm start
```
เซิร์ฟเวอร์จะรันที่ http://localhost:4001
##### รัน frontend 
1. ไปที่โฟลเดอร์ front
``` bash
cd ../frontend
```
2. รันแอปพลิเคชั่น
``` bash
npm start
```
แอปพลิเคชันจะรันที่ http://localhost:3000
