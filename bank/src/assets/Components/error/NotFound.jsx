import { Link } from 'react-router-dom';
import React from 'react';

const NotFound = () => (
  <div className="text-center my-5">
    <h1 className="display-4 text-danger">404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to="/" className="btn btn-primary mt-3">Go to Home</Link>
  </div>
);

export default NotFound;
