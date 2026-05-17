# คู่มือใช้งาน Portfolio Website

เว็บไซต์ Portfolio ส่วนตัวแนว Professional Engineering & AI Systems

---

## สารบัญ

1. [สิ่งที่ต้องติดตั้งก่อนเริ่ม](#1-สิ่งที่ต้องติดตั้งก่อนเริ่ม)
2. [วิธีติดตั้งโปรเจกต์](#2-วิธีติดตั้งโปรเจกต์)
3. [วิธีรันโปรเจกต์](#3-วิธีรันโปรเจกต์)
4. [โครงสร้างไฟล์](#4-โครงสร้างไฟล์)
5. [วิธีแก้ไขข้อมูลใน data.json](#5-วิธีแก้ไขข้อมูลใน-datajson)
6. [วิธีเพิ่ม/ลดโครงการ](#6-วิธีเพิ่มลดโครงการ)
7. [วิธีใส่รูปภาพ](#7-วิธีใส่รูปภาพ)
8. [วิธีแก้ไขข้อความหน้าเว็บ](#8-วิธีแก้ไขข้อความหน้าเว็บ)
9. [วิธี Build / Export](#9-วิธี-build--export)
10. [วิธี Deploy ขึ้น GitHub Pages](#10-วิธีdeploy-ขึ้น-github-pages)
11. [วิธี Deploy ขึ้น Vercel](#11-วิธีdeploy-ขึ้น-vercel)
12. [แก้ปัญหาที่พบบ่อย](#12-แก้ปัญหาที่พบบ่อย)

---

## 1. สิ่งที่ต้องติดตั้งก่อนเริ่ม

### 1.1 ติดตั้ง Node.js

Node.js คือโปรแกรมที่ใช้รัน JavaScript บนเครื่องของเรา

1. ไปที่ https://nodejs.org
2. ดาวน์โหลดเวอร์ชัน **LTS** (แนะนำ)
3. เปิดไฟล์ที่ดาวน์โหลดมา แล้วกด Next > Next > Install จนเสร็จ
4. ตรวจสอบว่าติดตั้งสำเร็จ โดยเปิด **Command Prompt** หรือ **PowerShell** แล้วพิมพ์:

```bash
node --version
```

ถ้าแสดงตัวเลข เช่น `v20.x.x` แปลว่าติดตั้งสำเร็จ

### 1.2 ติดตั้ง Git (ถ้ายังไม่มี)

1. ไปที่ https://git-scm.com
2. ดาวน์โหลดแล้วติดตั้ง (กด Next จนเสร็จ)
3. ตรวจสอบ:

```bash
git --version
```

---

## 2. วิธีติดตั้งโปรเจกต์

### กรณีดาวน์โหลดไฟล์มา (ZIP)

1. แตกไฟล์ ZIP ออกมา
2. เปิด **Terminal** หรือ **PowerShell** แล้วเข้าไปในโฟลเดอร์โปรเจกต์:

```bash
cd "C:\path\to\โปรเจกต์"
```

3. ติดตั้ง dependencies (ไฟล์ที่โปรเจกต์ต้องใช้):

```bash
npm install
```

รอจนเสร็จ (อาจใช้เวลา 1-3 นาที)

### กรณี Clone จาก GitHub

```bash
git clone https://github.com/titiwatpure/theone.github.io.git
cd theone.github.io
npm install
```

---

## 3. วิธีรันโปรเจกต์

### รันแบบ Development (ดูสดๆ แก้ไขแล้วเห็นทันที)

```bash
npm run dev
```

แล้วเปิดเบราว์เซอร์ไปที่: **http://localhost:3000**

> ทุกครั้งที่แก้ไขไฟล์ เว็บจะรีเฟรชอัตโนมัติ

### หยุดการทำงาน

กด `Ctrl + C` ใน Terminal

---

## 4. โครงสร้างไฟล์

```
โปรเจกต์/
├── data.json              ← ข้อมูลทั้งหมดของเว็บ (แก้ที่นี่)
├── public/
│   └── images/            ← ใส่รูปภาพทั้งหมดที่นี่
│       ├── avatar.jpg     ← รูปโปรไฟล์
│       ├── project-1.jpg  ← รูปโครงการ 1
│       └── ...
├── src/
│   ├── app/
│   │   ├── page.tsx       ← หน้า Home
│   │   ├── about/page.tsx ← หน้า About
│   │   ├── skills/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── tools/page.tsx
│   │   ├── articles/page.tsx
│   │   └── contact/page.tsx
│   └── components/        ← ส่วนประกอบ UI
└── package.json
```

**สิ่งที่ต้องแก้หลักๆ มี 2 อย่าง:**
1. `data.json` — ข้อมูลข้อความทั้งหมด
2. `public/images/` — รูปภาพทั้งหมด

---

## 5. วิธีแก้ไขข้อมูลใน data.json

เปิดไฟล์ `data.json` ด้วยโปรแกรมแก้ไขรหัส (เช่น VS Code, Notepad++)

### 5.1 ข้อมูลส่วนตัว

```json
{
  "personal": {
    "name": "ชื่อภาษาไทย",
    "nameEn": "Name English",
    "title": "ตำแหน่งหรือคำโปรย",
    "role": "บทบาท",
    "bio": "คำอธิบายตัวเองสั้นๆ",
    "avatar": "/images/avatar.jpg",
    "stats": {
      "years": "5+",
      "projects": 24,
      "clients": 12
    }
  }
}
```

**วิธีแก้:**
- เปลี่ยน `"name"` เป็นชื่อของคุณ
- เปลี่ยน `"title"` เป็นคำโปรยที่ต้องการ
- เปลี่ยน `"bio"` เป็นคำอธิบายตัวเอง
- เปลี่ยนตัวเลขใน `"stats"` เป็นของจริง

### 5.2 ข้อมูลติดต่อ

```json
{
  "contact": {
    "email": "your@email.com",
    "line": "@yourline",
    "facebook": "https://facebook.com/yourprofile",
    "phone": "0xx-xxx-xxxx",
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username"
  }
}
```

**วิธีแก้:** เปลี่ยนข้อมูลในเครื่องหมาย `" "` ให้เป็นของจริง

### 5.3 ทักษะ (Skills)

```json
{
  "skills": {
    "electrical": {
      "title": "Electrical Engineering",
      "icon": "zap",
      "items": [
        "ทักษะ 1",
        "ทักษะ 2",
        "ทักษะ 3"
      ]
    }
  }
}
```

**วิธีเพิ่มทักษะ:** เพิ่มข้อความใหม่ใน `items` array

```json
"items": [
  "ทักษะเดิม 1",
  "ทักษะเดิม 2",
  "ทักษะใหม่ที่ต้องการเพิ่ม"
]
```

**วิธีลบทักษะ:** ลบบรรทัดที่ไม่ต้องการออก (อย่าลืมลบ `,` ให้ถูก)

---

## 6. วิธีเพิ่ม/ลดโครงการ

### 6.1 เพิ่มโครงการใหม่

เปิด `data.json` หาส่วน `"projects"` แล้วเพิ่มโครงการต่อท้าย:

```json
{
  "projects": [
    {
      "name": "โครงการเดิม 1",
      "desc": "...",
      ...
    },
    {
      "name": "โครงการเดิม 2",
      "desc": "...",
      ...
    },
    {
      "name": "โครงการใหม่ของคุณ",
      "desc": "คำอธิบายโครงการ",
      "problem": "ปัญหาที่พบ",
      "solution": "วิธีแก้ปัญหา",
      "tools": ["Python", "React", "PostgreSQL"],
      "tags": ["AI", "Dashboard"],
      "image": "/images/project-new.jpg",
      "year": "2024"
    }
  ]
}
```

**แต่ละฟิลด์หมายถึง:**

| ฟิลด์ | คำอธิบาย | ตัวอย่าง |
|-------|---------|---------|
| `name` | ชื่อโครงการ | `"Document Audit AI"` |
| `desc` | คำอธิบายสั้นๆ | `"ระบบตรวจสอบเอกสารด้วย AI"` |
| `problem` | ปัญหาที่พบ | `"การตรวจสอบเอกสารใช้เวลานาน"` |
| `solution` | วิธีแก้ | `"พัฒนาระบบ AI ตรวจสอบอัตโนมัติ"` |
| `tools` | เครื่องมือที่ใช้ | `["Python", "FastAPI"]` |
| `tags` | หมวดหมู่ | `["AI", "Automation"]` |
| `image` | รูปภาพ | `"/images/project-1.jpg"` |
| `year` | ปีที่ทำ | `"2024"` |

> **สำคัญ:** ทุกโครงการต้องมี `,` คั่นระหว่างกัน ยกเว้นโครงการสุดท้ายไม่ต้องมี

### 6.2 ลบโครงการ

ลบบล็อก `{ ... }` ของโครงการที่ไม่ต้องการออก

**ตัวอย่าง:**
```json
// ก่อนลบ (มี 3 โครงการ)
"projects": [
  { "name": "A", ... },
  { "name": "B", ... },    ← ต้องการลบ
  { "name": "C", ... }
]

// หลังลบ (เหลือ 2 โครงการ)
"projects": [
  { "name": "A", ... },
  { "name": "C", ... }
]
```

> **ระวัง:** ตรวจสอบว่ามี `,` ถูกต้อง ไม่งั้นเว็บจะพัง

---

## 7. วิธีใส่รูปภาพ

### 7.1 ขั้นตอนการใส่รูป

1. เตรียมรูปภาพ (แนะนำ: JPG, PNG, WebP)
2. **ตั้งชื่อไฟล์** เป็นภาษาอังกฤษ ห้ามมีช่องว่าง เช่น:
   - `avatar.jpg` ✅
   - `project-audit.jpg` ✅
   - `รูป โครงการ 1.jpg` ❌ (ห้ามมีช่องว่างและภาษาไทย)
3. **วางไฟล์** ในโฟลเดอร์ `public/images/`
4. **อ้างอิง** ใน `data.json` โดยใช้ path เริ่มจาก `/images/`

### 7.2 ตัวอย่างการอ้างอิงรูป

```
public/images/avatar.jpg       → ใน data.json เขียน "/images/avatar.jpg"
public/images/project-1.jpg    → ใน data.json เขียน "/images/project-1.jpg"
public/images/project-qa.jpg   → ใน data.json เขียน "/images/project-qa.jpg"
```

### 7.3 รูปโปรไฟล์

วางไฟล์ `avatar.jpg` ใน `public/images/` แล้วใน `data.json`:

```json
{
  "personal": {
    "avatar": "/images/avatar.jpg"
  }
}
```

### 7.4 รูปโครงการ

วางไฟล์รูปโครงการใน `public/images/` แล้วใน `data.json`:

```json
{
  "projects": [
    {
      "name": "Project Name",
      "image": "/images/project-1.jpg"
    }
  ]
}
```

### 7.5 ขนาดรูปที่แนะนำ

| ประเภท | ขนาด (pixels) | รูปแบบ |
|--------|---------------|--------|
| รูปโปรไฟล์ | 400 x 400 | JPG, PNG |
| รูปโครงการ | 800 x 600 | JPG, WebP |

> **เคล็ดลับ:** บีบอัดรูปก่อนใช้ ที่ https://tinypng.com เพื่อให้เว็บโหลดเร็ว

---

## 8. วิธีแก้ไขข้อความหน้าเว็บ

### ข้อความทั้งหมดอยู่ใน `data.json`

ไม่ต้องแก้โค้ด! แค่แก้ข้อความใน `data.json` แล้วเว็บจะอัปเดตอัตโนมัติ

| หน้าเว็บ | ข้อมูลใน data.json |
|---------|-------------------|
| หน้า Home | `personal.name`, `personal.title`, `personal.bio` |
| หน้า About | `about.philosophy`, `about.highlights`, `about.experience` |
| หน้า Skills | `skills` (แต่ละหมวด) |
| หน้า Projects | `projects` (แต่ละโครงการ) |
| หน้า AI Tools | `aiTools` (แต่ละเครื่องมือ) |
| หน้า Articles | `articles` (แต่ละบทความ) |
| หน้า Contact | `contact` (ข้อมูลติดต่อ) |

### ตัวอย่าง: เปลี่ยนคำโปรยหน้าแรก

เปิด `data.json` แล้วแก้:

```json
{
  "personal": {
    "title": "คำโปรยใหม่ของคุณ"
  }
}
```

### ตัวอย่าง: เปลี่ยนปรัชญาการทำงาน

```json
{
  "about": {
    "philosophy": "ปรัชญาใหม่ของคุณ"
  }
}
```

---

## 9. วิธี Build / Export

### Build สำหรับ Deploy

```bash
npm run build
```

จะสร้างโฟลเดอร์ `out/` ที่มีไฟล์ HTML, CSS, JS พร้อม upload

### ตรวจสอบ Build

```bash
npx serve out
```

แล้วเปิด http://localhost:3000 เพื่อดูเวอร์ชัน build

---

## 10. วิธีDeploy ขึ้น GitHub Pages

### ขั้นตอนที่ 1: สร้าง GitHub Repository

1. ไปที่ https://github.com/new
2. ตั้งชื่อ repo: `theone.github.io` (ต้องตรงกับชื่อ GitHub username + .github.io)
3. เลือก **Public**
4. กด **Create repository**

### ขั้นตอนที่ 2: Push โค้ดขึ้น GitHub

เปิด Terminal ในโฟลเดอร์โปรเจกต์:

```bash
git init
git add .
git commit -m "First commit"
git branch -M main
git remote add origin https://github.com/your-username/theone.github.io.git
git push -u origin main
```

### ขั้นตอนที่ 3: ตั้งค่า GitHub Pages

1. ไปที่ repo บน GitHub
2. กด **Settings** > **Pages**
3. ที่ **Source** เลือก **Deploy from a branch**
4. เลือก branch `main` และ folder `/ (root)`
5. กด **Save**

### ขั้นตอนที่ 4: สร้าง GitHub Actions (Build อัตโนมัติ)

สร้างไฟล์ `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
```

5. กลับไป **Settings** > **Pages**
6. เปลี่ยน **Source** เป็น **GitHub Actions**
7. Push โค้ดขึ้น GitHub อีกครั้ง:

```bash
git add .
git commit -m "Add deploy workflow"
git push
```

8. ไปที่ tab **Actions** เพื่อดูสถานะ build
9. เมื่อเสร็จ เว็บจะอยู่ที่ `https://your-username.github.io`

---

## 11. วิธีDeploy ขึ้น Vercel

Vercel เป็นวิธีที่ง่ายที่สุด ฟรี และเหมาะกับ Next.js

### ขั้นตอนที่ 1: สมัคร Vercel

1. ไปที่ https://vercel.com
2. กด **Sign Up** แล้วเลือก **Continue with GitHub**

### ขั้นตอนที่ 2: Import Project

1. กด **Add New** > **Project**
2. เลือก repo `theone.github.io`
3. กด **Deploy**

### ขั้นตอนที่ 3: เสร็จ!

Vercel จะ build และ deploy ให้อัตโนมัติ
ทุกครั้งที่ push โค้ด Vercel จะ build ใหม่ให้เอง

เว็บจะอยู่ที่: `https://theone.vercel.app` (หรือชื่อที่ตั้งเอง)

---

## 12. แก้ปัญหาที่พบบ่อย

### `npm install` ไม่สำเร็จ

```bash
# ลบ node_modules แล้วติดตั้งใหม่
rm -rf node_modules
npm install
```

### แก้ data.json แล้วเว็บไม่เปลี่ยน

1. ตรวจสอบว่า JSON ถูกต้อง (ไม่มี comma เกิน/ขาด)
2. หยุด dev server (Ctrl+C) แล้วรันใหม่:

```bash
npm run dev
```

### รูปไม่แสดง

1. ตรวจสอบว่าไฟล์อยู่ใน `public/images/`
2. ตรวจสอบว่าชื่อไฟล์ถูกต้อง (ตรงกับใน data.json)
3. ตรวจสอบว่าไม่มีช่องว่างในชื่อไฟล์

### Build ไม่สำเร็จ

```bash
# ดู error message
npm run build

# ถ้าเป็น error เกี่ยวกับ TypeScript
# ตรวจสอบว่า data.json มี structure ถูกต้อง
```

### JSON Syntax Error

ถ้าไม่แน่ใจว่า JSON ถูกต้อง ให้:
1. คัดลอกเนื้อหา data.json ไปที่ https://jsonlint.com
2. กด **Validate JSON**
3. แก้ไขตามที่แจ้ง

---

## สรุปขั้นตอนการอัปเดตเว็บ

```
1. แก้ data.json      → เปลี่ยนข้อความ/ข้อมูล
2. ใส่รูปใน public/images/  → เพิ่มรูปภาพ
3. npm run dev        → ดูตัวอย่าง
4. npm run build      → Build สำหรับ deploy
5. git push           → อัปขึ้น GitHub/Vercel
```

---

## เทคโนโลยีที่ใช้

- **Next.js 16** — React Framework
- **Tailwind CSS 4** — CSS Framework
- **Framer Motion** — Animation
- **TypeScript** — Type-safe JavaScript
- **Sarabun + Space Mono** — Fonts
