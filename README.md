# 🗂️ Portfolio Website

เว็บไซต์ Portfolio ส่วนตัว พัฒนาด้วย HTML/CSS/JS แบบ Static Site
แก้ไขข้อมูลได้ง่ายผ่านไฟล์ `data.json` เพียงไฟล์เดียว

---

## 📁 โครงสร้างไฟล์

```
yourname.github.io/
├── index.html        ← โครงสร้างหน้าเว็บ
├── style.css         ← ดีไซน์และสีสัน
├── script.js         ← โหลดข้อมูลและ Interactive
├── data.json         ← ✅ แก้ไขข้อมูลที่นี่เพียงที่เดียว
├── README.md         ← คู่มือนี้
└── images/           ← โฟลเดอร์เก็บภาพ
    ├── avatar.jpg    ← รูปโปรไฟล์
    ├── project1.jpg  ← ภาพโปรเจกต์ที่ 1
    ├── project2.jpg  ← ภาพโปรเจกต์ที่ 2
    └── ...
```

---

## ✏️ วิธีแก้ไขข้อมูล

เปิดไฟล์ `data.json` แก้ไขข้อมูลส่วนต่างๆ:

### ข้อมูลพื้นฐาน
```json
{
  "name": "ชื่อ นามสกุล",
  "title": "ตำแหน่งงาน",
  "bio": "คำอธิบายตัวเอง",
  "avatar": "images/avatar.jpg"
}
```

### เพิ่มประสบการณ์ทำงาน
```json
"experience": [
  {
    "role": "ชื่อตำแหน่ง",
    "company": "ชื่อบริษัท",
    "type": "Full-time",
    "period": "2023–ปัจจุบัน",
    "desc": "รายละเอียดงาน"
  }
]
```

### เพิ่มโปรเจกต์พร้อมภาพ
```json
"projects": [
  {
    "name": "ชื่อโปรเจกต์",
    "desc": "รายละเอียด",
    "tags": ["React", "Node.js"],
    "image": "images/project1.jpg",
    "link": "https://ลิงก์เว็บ (ถ้ามี)",
    "year": "2024"
  }
]
```

---

## 🖼️ การเพิ่มภาพ

1. อัปโหลดภาพไว้ในโฟลเดอร์ `images/`
2. ระบุชื่อไฟล์ใน `data.json` เช่น `"image": "images/project1.jpg"`
3. **ขนาดภาพที่แนะนำ:** 800×600px หรือ 1:1 สำหรับ Gallery, JPEG คุณภาพ 80%

---

## 🚀 Deploy บน GitHub Pages (ฟรี)

### ครั้งแรก
1. สร้าง Repository ชื่อ `yourname.github.io` (แทน yourname ด้วย GitHub username จริง)
2. อัปโหลดไฟล์ทั้งหมดขึ้น Repository
3. ไปที่ **Settings → Pages → Source: Deploy from a branch → main**
4. รอ 2-3 นาที → เว็บขึ้นที่ `https://yourname.github.io`

### อัปเดตข้อมูล
1. แก้ไข `data.json` บน GitHub (คลิก Edit ✏️ ได้เลย)
2. Commit changes
3. รอ ~1 นาที → เว็บอัปเดตอัตโนมัติ ✅

### อัปเดตภาพ
1. ลากไฟล์ภาพไปวางในโฟลเดอร์ `images/` บน GitHub
2. Commit
3. อัปเดตชื่อไฟล์ใน `data.json`

---

## 🎨 ปรับแต่งสี

เปิด `style.css` แก้ตรงส่วน `:root` บนสุด:

```css
:root {
  --gold: #c8a97e;    /* สีหลัก (ทอง) — เปลี่ยนเป็นสีที่ชอบ */
  --bg: #09090e;      /* สีพื้นหลัง */
  --text: #e8e4d9;    /* สีตัวอักษร */
}
```

---

## 📱 Features

- ✅ Responsive (มือถือ/แท็บเล็ต/Desktop)
- ✅ Gallery Grid แสดงภาพผลงาน
- ✅ Lightbox คลิกดูรายละเอียดภาพขยาย
- ✅ Scroll Animation
- ✅ Mobile Menu
- ✅ ไม่ต้องใช้ Backend หรือ Database
- ✅ โหลดเร็ว ไม่มี Framework หนักๆ
