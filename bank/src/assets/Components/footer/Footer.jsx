import React from 'react';

export default function Footer() {
  return (
    <div className='container text-center'>
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Features</h5>
            <ul className="list-unstyled">
              <li>Cool stuff</li>
              <li>Random feature</li>
              <li>Team feature</li>
              <li>Stuff for developers</li>
              <li>Another one</li>
              <li>Last time</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>Resource</li>
              <li>Resource name</li>
              <li>Another resource</li>
              <li>Final resource</li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>Team</li>
              <li>Locations</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>&copy; 2017–2025</p>
        </div>
      </div>
    </footer>
    </div>
  );
}



