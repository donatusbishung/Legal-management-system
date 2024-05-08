import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Dashboard from "./pages/DashboardPage/Dashboard";
import AddCase from "./pages/Cases/AddCase";
import AllCase from "./pages/Cases/AllCase";
import PendingCases from "./pages/Cases/PendingCases";
import AllCaseHistory from "./pages/Cases/AllCaseHistory";
import MyCasesHistory from "./pages/Cases/MyCasesHistory";
import MyPendingCases from "./pages/Cases/MyPendingCases";
import MyOpenCases from "./pages/Cases/MyOpenCases";

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
          <Route path="/allCaseHistory" element={<AllCaseHistory />} />
          <Route path="/myCasesHistory" element={<MyCasesHistory />} />
          <Route path="/myOpenCases" element={<MyOpenCases />} />
          <Route path="/myPendingCases" element={<MyPendingCases />} />
          <Route path="/pendingCases" element={<PendingCases />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
