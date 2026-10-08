import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HrDashboard = () => {
  return (
    <Container className="mt-4">
      <h2>HR Dashboard</h2>
      <ul>
        <li><Link to="/hr/employees">Employee Management</Link></li>
        <li><Link to="/hr/attendance-summary">Attendance Summary</Link></li>
        <li><Link to="/hr/leaves">Leave Applications</Link></li>
        <li><Link to="/hr/announcements">Manage Announcements</Link></li>
      </ul>
    </Container>
  );
};
export default HrDashboard;
