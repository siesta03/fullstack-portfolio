import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundMesh from "./components/layout/BackgroundMesh";
import Navbar from './components/layout/Navbar';
import Home from './pages/home';
import ITWork from './pages/ITWork';
import Photography from './pages/Photography';

export default function App() {
  return (
    <Router>
      <BackgroundMesh />
      <div className="relative min-h-screen text-slate-900 font-sans selection:bg-blue-200">
        <Navbar />

        <main className="max-w-6xl mx-auto px-6 py-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/it-work" element={<ITWork />} /> 
           <Route path="/photography" element={<Photography />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}
