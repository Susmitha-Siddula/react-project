import { RES_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={RES_LOGO} alt="restaurant logo" />
      </div>
      <div className="nav-section">
        <ul className="navigation">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
