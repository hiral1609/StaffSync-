import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManagerDashboard = () => {
  return (
    <Container className="mt-4">
      <h2>Manager Dashboard</h2>
      <ul>
        <li><Link to="/manager/leaves">Team Leave Applications</Link></li>
        <li><Link to="/manager/training">Training Management</Link></li>
      </ul>
    </Container>
  );
};
export default ManagerDashboard;
