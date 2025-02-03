import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StudentList from "./pages/StudentList";
import StudentDetail from "./pages/StudentDetail";
import Attendance from "./pages/Attendance";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import StudentForm from "./pages/StudentForm";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-form/:id?" element={<StudentForm />} />
      </Routes>
    </Router>
  )
}