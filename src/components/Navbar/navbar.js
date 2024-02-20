import './navbar.css'; // Importing CSS file for Navbar styling
import logo from '../../assets/Logo.png'; // Importing Logo image
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom
import contactImg from '../../assets/contact.png'; // Importing Contact image
import Upload from '../Upload/upload'; // Importing Upload component

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">

      <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo" className='logo' />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/">HOME</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/upload">Upload</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/RecipeSearch">Recipes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/contact">Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
