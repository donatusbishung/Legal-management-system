import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Dashboard from "./pages/DashboardPage/Dashboard";
import AddCase from "./pages/Cases/AddCase";
import AllCase from "./pages/Cases/AllCase";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addCase" element={<AddCase />} />
          <Route path="/allCase" element={<AllCase />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
