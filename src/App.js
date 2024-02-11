import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MyComponent from "./components/MyComponent";

import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChangePassword from "./components/ChangePassword";
import EditProfile from "./components/EditProfile";
import SavedArticals from "./components/SavedArticals";
import Pathway from "./components/Pathway";
import ReqToDelete from "./components/ReqToDelete";
import InviteSection from "./components/InviteSection";
import Articals from "./components/Articals";

function App() {
  return (
    <div>
      
      
        <Routes>
        <Route path="/" element={<Sidebar/>}/>
          <Route path="/ChangePassword" element={<ChangePassword/>}/>
          <Route path="/edit-profile" element={<EditProfile/>}/>
          <Route path="/saved-articles" element={<SavedArticals/>}/>
          <Route path="/pathway" element={<Pathway/>}/>
          <Route path="/req-to-delete" element={<ReqToDelete/>} />
          <Route path="/invite" element={<InviteSection/>} />
          <Route path="/articles" element={<Articals/>} />
        </Routes>
      
      
    </div>
  );
}

export default App;
