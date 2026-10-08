import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './App.css';

// Auth
import Login from './auth/Login';
import Register from './auth/Register';

// Pages
import EmployeeDashboard from './pages/EmployeeDashboard';
import HrDashboard from './pages/HrDashboard';
import ManagerDashboard from './pages/ManagerDashboard';

// Employee
import EmployeeAnnouncements from './employee/Announcements';
import EmployeeAttendance from './employee/Attendance';
import EmployeeLeaveApply from './employee/LeaveApply';
import EmployeeLeaveList from './employee/LeaveList';

// HR
import HrAnnouncementsManager from './hr/AnnouncementsManager';
import HrAttendanceSummary from './hr/AttendanceSummary';
import HrEmployeeCRUD from './hr/EmployeeCRUD';
import HrLeaveApplications from './hr/LeaveApplications';

// Manager
import ManagerLeaveApplications from './manager/LeaveApplications';
import ManagerTrainingManagement from './manager/TrainingManagement';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">StaffSync</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/employee-dashboard">Employee</Nav.Link>
              <Nav.Link as={Link} to="/hr-dashboard">HR</Nav.Link>
              <Nav.Link as={Link} to="/manager-dashboard">Manager</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<h2>Welcome to StaffSync</h2>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/employee/announcements" element={<EmployeeAnnouncements />} />
          <Route path="/employee/attendance" element={<EmployeeAttendance />} />
          <Route path="/employee/leave-apply" element={<EmployeeLeaveApply />} />
          <Route path="/employee/leave-list" element={<EmployeeLeaveList />} />

          <Route path="/hr-dashboard" element={<HrDashboard />} />
          <Route path="/hr/announcements" element={<HrAnnouncementsManager />} />
          <Route path="/hr/attendance-summary" element={<HrAttendanceSummary />} />
          <Route path="/hr/employees" element={<HrEmployeeCRUD />} />
          <Route path="/hr/leaves" element={<HrLeaveApplications />} />

          <Route path="/manager-dashboard" element={<ManagerDashboard />} />
          <Route path="/manager/leaves" element={<ManagerLeaveApplications />} />
          <Route path="/manager/training" element={<ManagerTrainingManagement />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
