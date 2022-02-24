import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar />}> */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user" element={<User />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
