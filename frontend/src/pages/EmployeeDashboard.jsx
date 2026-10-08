import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EmployeeDashboard = () => {
  return (
    <Container className="mt-4">
      <h2>Employee Dashboard</h2>
      <ul>
        <li><Link to="/employee/announcements">Announcements</Link></li>
        <li><Link to="/employee/attendance">Attendance</Link></li>
        <li><Link to="/employee/leave-apply">Apply for Leave</Link></li>
        <li><Link to="/employee/leave-list">My Leaves</Link></li>
      </ul>
    </Container>
  );
};
export default EmployeeDashboard;
