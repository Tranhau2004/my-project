import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<h2 style={{padding:40}}>Trang chủ</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;