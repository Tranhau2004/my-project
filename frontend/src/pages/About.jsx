import { useEffect, useState } from 'react';

const About = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/about`)
      .then(r => r.json())
      .then(setInfo);
  }, []);

  if (!info) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎓 Thông tin sinh viên</h1>

        <div style={styles.row}>
          <span style={styles.label}>Họ tên</span>
          <span style={styles.value}>{info.hoTen}</span>
        </div>

        <div style={styles.row}>
          <span style={styles.label}>MSSV</span>
          <span style={styles.value}>{info.maSoSinhVien}</span>
        </div>

        <div style={styles.row}>
          <span style={styles.label}>Lớp</span>
          <span style={styles.value}>{info.lop}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
  },
  card: {
    background: '#fff',
    padding: '30px 40px',
    borderRadius: '16px',
    width: '350px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    animation: 'fadeIn 0.5s ease-in-out',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #eee',
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
  },
  value: {
    color: '#222',
  },
  loadingContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #ccc',
    borderTop: '4px solid #667eea',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};

export default About;