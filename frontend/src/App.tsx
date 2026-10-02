import { HashRouter as Router, Routes, Route } from "react-router-dom";
import BackgroundMesh from "./components/layout/BackgroundMesh";
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/home';
import ITWork from './pages/ITWork';
import Photography from './pages/Photography';

export default function App() {
  return (
    <Router>
      <BackgroundMesh />
      <div className="relative min-h-screen text-slate-900 font-sans selection:bg-blue-200 flex flex-col">
        <Navbar />

        <main className="w-full flex-grow pt-0 pb-0 flex flex-col items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/it-work" element={<ITWork />} /> 
           <Route path="/photography" element={<Photography />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
