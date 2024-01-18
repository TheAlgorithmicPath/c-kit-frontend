import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/SignUp/SignUp";
// import Header from "./components/Header";
//import Footer from "./components/Footer";
import Profile from "./pages/Profile/Profile";
import ProfileV2 from "./pages/Profile-V2/Profile-V2";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ProfileV2" element={<ProfileV2 />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>

    
  );
}

export default App;
