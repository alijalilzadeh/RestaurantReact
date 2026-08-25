import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomeInterier from './pages/HomeInterier';
import Menu from './pages/Menu';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomeInterier />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
  );
}

export default App;