import { useEffect, useState } from 'react';

const About = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/about`)
      .then(r => r.json())
      .then(setInfo);
  }, []);

  if (!info) return <p>Đang tải...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Thông tin sinh viên</h1>
      <p><b>Họ tên:</b> {info.hoTen}</p>
      <p><b>MSSV:</b> {info.maSoSinhVien}</p>
      <p><b>Lớp:</b> {info.lop}</p>
    </div>
  );
};

export default About;