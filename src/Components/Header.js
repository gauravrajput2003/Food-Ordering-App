import { LOGO_URL } from "../Utils/EssenstialLink";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-cont">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;