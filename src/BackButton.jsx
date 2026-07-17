import { useNavigate } from "react-router-dom";

// Nút quay lại dùng chung cho các trang con (bấm bằng chuột).
// Truyền onClick riêng nếu muốn hành vi khác (vd: đóng lớp reveal trước).
export default function BackButton({ onClick }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="back-btn"
      onClick={onClick ?? (() => navigate("/"))}
      aria-label="Back"
    >
      <span className="back-btn-arrow">◄</span> BACK
    </button>
  );
}
