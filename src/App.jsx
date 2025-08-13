import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;