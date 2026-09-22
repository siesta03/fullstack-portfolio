// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
// We will uncomment these as we build them
import Engineering from './pages/Engineering';
// import Media from './pages/Media';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-gray-100 font-sans selection:bg-red-500/30">
        {/* Navbar component can be slotted in here later */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engineering" element={<Engineering />} />
          {/* <Route path="/media" element={<Media />} /> */}
        </Routes>
      </div>
    </Router>
  );
}