import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">PricingApp</Link>
        <div>
          <Link className="nav-link d-inline mx-2" to="/">Home</Link>
          <Link className="nav-link d-inline mx-2" to="/table">Table</Link>
          <Link className="nav-link d-inline mx-2" to="/footer">Footer</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
