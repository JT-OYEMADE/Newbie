
import Home from "./pages";
import Login from "./pages/Login/login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mentor from "./pages/waitlist/mentor";
import Mentee from "./pages/waitlist/mentee";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/waitlist" element={<Mentor/>} />
        <Route path="/waitlist/mentee" element={<Mentee/>} />
        <Route path="*" element={<h2>NOT FOUND</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
