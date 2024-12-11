import "./App.css";
import { Footers } from "./components/Footers";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Dashboard from "./pages/Dashboard";
import AddPlace from "./pages/AddPlace";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Setting />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/add" element={<AddPlace />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Footers /> */}
    </>
  );
}

export default App;
