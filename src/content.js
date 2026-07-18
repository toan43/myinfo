// ============================================================================
//  NỘI DUNG WEBSITE  —  SỬA TẤT CẢ THÔNG TIN Ở FILE NÀY
// ----------------------------------------------------------------------------
//  Chỉ cần sửa phần chữ trong dấu ngoặc kép "..." là nội dung trên web đổi theo.
//  Không cần đụng vào các file khác.
// ============================================================================

// --- Ảnh nhân vật + icon dùng chung (giữ nguyên nếu không đổi ảnh) ----------
import char1 from "./assets/char1.png";
import char2 from "./assets/char2.png";
import char3 from "./assets/char3.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import portraitM from "./assets/mainm.jpeg";
import portraitM2 from "./assets/mainm2.jpeg";
import portraitF from "./assets/mainf.jpeg";

// Ảnh 3 nhân vật (dùng ở trang ABOUT ME và SOCIALS)
export const CHARS = [char1, char2, char3];


// ============================================================================
//  1) MENU CHÍNH  (màn hình đầu tiên)
// ============================================================================
export const MENU = {
  // Tên hiển thị góc trên bên trái (2 dòng)
  nameTag: ["Toan's", "persona"],

  // Các mục trong menu.
  //  - Sửa "label" để đổi chữ hiển thị.
  //  - "page"  = mở trang trong web (about / resume / socials).
  //  - "url"   = mở link bên ngoài trong tab mới (dùng cho Github).
  //  - fontSize/offsetX/offsetY/skew/skewY chỉ chỉnh kiểu chữ nghiêng, không cần đổi.
  items: [
    { id: "about",    label: "ABOUT ME",      page: "about",   fontSize: 80, offsetX: 0,  offsetY: 0, skew: -6,  skewY: 10 },
    { id: "resume",   label: "RESUME",        page: "resume",  fontSize: 66, offsetX: 20, offsetY: 8, skew: -11, skewY: -10 },
    { id: "github",   label: "GITHUB LINK",   url:  "https://github.com/toan43", fontSize: 68, offsetX: 8, offsetY: 6, skew: 0, skewY: -4 },
    { id: "socials",  label: "SOCIALS",       page: "socials", fontSize: 74, offsetX: 16, offsetY: 8, skew: -3,  skewY: 5 },
  ],
};


// ============================================================================
//  2) TRANG "ABOUT ME"
// ============================================================================
export const ABOUT = {
  // 3 thanh bên trái: "label" là chữ trên thanh, "role" là chữ nghiêng bên trái thanh.
  bars: [
    { label: "ABOUT ME",           role: "LEADER" },
    { label: "SKILLS & EXPERTISE",  role: "PARTY" },
    { label: "GOALS", role: "PARTY" },
  ],

  // Ảnh chân dung hiện ra khi bấm vào từng thanh (theo thứ tự trên)
  portraits: [portraitM, portraitM2, portraitF],

  // Nội dung hiện ra khi bấm vào từng thanh (theo thứ tự trên).
  //  - "upper": các dòng chữ trong khung đen phía trên.
  //  - "lower": dòng chữ trong khung đen phía dưới.
  reveal: [
    {
      upper: ["name Toan", "age:20","major: Thermal Engineering"],
      lower: "ABOUT ME",
    },
    {
      upper: [
        "Domain Knowledge: Solid foundation in Thermal Engineering,",
        "HVAC systems, and thermodynamics.",
        "Programming & Tools: Hands-on experience with C#, .NET, ",
        "Revit API development, and BIM/MEP workflow automation.",
      ],
      lower: "SKILLS & EXPERTISE",
    },
    {
      upper: [
        "Have a Zero-One Driver",
      ],
      lower: "GOALS",
    },
  ],
};


// ============================================================================
//  3) TRANG "RESUME"
// ============================================================================
export const RESUME = {
  // 4 thẻ bên trái
  items: [
    { id: "i",   badge: "I",   title: "EDUCATION",  subtitle: "University / Coursework", rank: 3 },
    { id: "ii",  badge: "II",  title: "SKILLS",     subtitle: "Frontend / Design / UI",  rank: 4 },
    { id: "iii", badge: "III", title: "PROJECTS",   subtitle: "Featured Work",           rank: 5 },
    { id: "iv",  badge: "IV",  title: "EXPERIENCE", subtitle: "Internships / Roles",     rank: 2 },
  ],

  // Bảng chi tiết bên phải (hiện khi chọn thẻ EDUCATION)
  detailTop: { index: "01", title: "EDUCATION INFO", progress: "" },
  educationRows: [
    { index: "01", title: "General Education",     status: "Complete" },
    { index: "02", title: "Thermal Engineering Core", status: "In Progress" },
    { index: "03", title: "Elective Track",        status: "Queued" },
    { index: "04", title: "Capstone Prep",         status: "Complete" },
  ],
  detailBullets: [
    "- Maintain progress across required classes and supporting work.",
    "- Track portfolio-ready projects tied to coursework and labs.",
    "- Keep materials prepared for internships, research, and review.",
  ],
};


// ============================================================================
//  4) TRANG "SOCIALS"
// ============================================================================
//  Mỗi mạng xã hội:
//   - label   : tên hiển thị          - handle : @tên tài khoản
//   - href    : link tới trang chính  - icon   : emoji hiển thị
//   - role    : chữ nghiêng bên trái  - barIcon: ảnh icon nhỏ trong các thanh link
//   - links   : danh sách link video/bài đăng (bấm để mở)
//   - counts  : lượt xem tương ứng từng link ở trên
//   - newBars : vị trí thanh gắn nhãn "NEW" (bắt đầu đếm từ 0)
//   - stats   : 2 ô chỉ số ở bên phải (tag / value / màu)
export const SOCIALS = {
  items: [
    {
      id: "facebook", label: "FACEBOOK", role: "LEADER", handle: "@yourname",
      href: "", icon: "🙌", barIcon: icon1,
      newBars: [0], counts: ["56"],
      links: [],
      stats: [
        { tag: "FOL", value: "6.7K", color: "#9147ff" },
        { tag: "VWR", value: "67",  color: "#bf94ff" },
      ],
    },
    {
      id: "instagram", label: "INSTAGRAM", role: "PARTY", handle: "@yourhandle",
      href: "https://www.instagram.com/43toan_/", icon: "📷", barIcon: icon2,
      newBars: [0, 1], counts: ["3.6M", "3.6M", "3.6M", "3.6M", "3.6M"],
      links: [
        "instagram.com/reels/DWdFbl5EeNc",
        "instagram.com/reels/DMC4JZ1R6UI",
        "instagram.com/reels/DaQqYaeGHQt",
        "instagram.com/reels/DM3hKQKTImd",
        "instagram.com/reels/DYkoQwkTakQ",
      ],
      stats: [
        { tag: "FOL", value: "6.7K", color: "#e1306c" },
        { tag: "PST", value: "67",  color: "#f77737" },
      ],
    },
    {
      id: "github", label: "GITHUB", role: "PARTY", handle: "@yourhandle",
      href: "https://github.com/toan43", icon: "💻", barIcon: icon3,
      newBars: [0, 3, 5, 6], counts: ["3.6M", "3.6M", "3.6M", "3.6M", "3.6M", "3.6M", "3.6M"],
      links: [
      ],
      stats: [
        { tag: "FOL", value: "6.7K", color: "#00f2ea" },
        { tag: "LKS", value: "67K",  color: "#ff0050" },
      ],
    },
  ],
};
