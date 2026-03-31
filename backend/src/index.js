require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// About - thông tin sinh viên
app.get('/api/about', (req, res) => {
  res.json({
    hoTen: 'Trần Bá Hậu',      
    maSoSinhVien: '2251220104', 
    lop: '22CT3',              
  });
});

// GET danh sách items
app.get('/api/items', (req, res) => {
  res.json([{ id: 1, name: 'Item 1' }]);
});

// POST thêm item
app.post('/api/items', (req, res) => {
  const { name } = req.body;
  res.json({ id: Date.now(), name });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});