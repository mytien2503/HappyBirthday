# 🎂 Happy Birthday Website

Trang web chúc mừng sinh nhật với giao diện đỏ-hồng, slider trái tim, và nhiều hiệu ứng đẹp!

## 📁 Cấu trúc thư mục

```
HappyBirthday/
├── index.html      ← Trang chính
├── style.css       ← Giao diện đỏ hồng
├── script.js       ← Logic & cấu hình
├── images/         ← Đặt ảnh vào đây
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
└── music/          ← Đặt nhạc vào đây
    └── birthday.mp3
```

## ⚙️ Cách tuỳ chỉnh (trong `script.js`)

Mở file [`script.js`](script.js) và chỉnh phần `CONFIG`:

```js
const CONFIG = {
  name: "Tên bạn bè",          // Tên người nhận
  wish: "Lời chúc của bạn...", // Lời chúc sinh nhật

  // Danh sách ảnh (đặt trong thư mục images/)
  images: [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
  ],

  autoSlideInterval: 3500,     // Tốc độ chuyển slide (ms)
  musicFile: "music/birthday.mp3",
};
```

## 🖼️ Thêm ảnh vào slider

1. Copy ảnh vào thư mục `images/`
2. Mở `script.js`
3. Thêm tên file vào mảng `images`:
   ```js
   images: ["anh1.jpg", "anh2.png", "anh3.jpeg"],
   ```

## 🎵 Thêm nhạc nền

1. Copy file nhạc MP3 vào thư mục `music/`
2. Đặt tên là `birthday.mp3` (hoặc đổi tên trong `CONFIG.musicFile`)
3. Nhạc sẽ tự phát khi người dùng click lần đầu

## ✨ Tính năng

| Tính năng | Mô tả |
|-----------|-------|
| 🍅 Biểu tượng cà chua | Nảy lên xuống trên đầu trang |
| 🎂 Bánh sinh nhật SVG | Có ngọn nến nhấp nháy, click để thổi nến! |
| 💝 Slider trái tim | Ảnh tự động chuyển theo hình trái tim |
| 🎵 Trình phát nhạc | Góc phải dưới, có nút play/mute |
| 💌 Lời chúc | Hiệu ứng đánh máy chữ |
| 🌸 Hoa rơi | Hoa và icon rơi liên tục |
| 🎉 Confetti | Bắn khi load trang và thổi nến |
| ⌨️ Điều hướng | Phím ← → để chuyển ảnh |
| 📱 Responsive | Hiển thị đẹp trên điện thoại |

## 🚀 Mở trang web

Mở file `index.html` trực tiếp trong trình duyệt, hoặc dùng Live Server (VS Code).
