import { Link } from "react-router-dom";
import "./style.scss";
import "../../_mixin.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a href="" className="header__logo">
            <img src="/assets/logo.svg" alt="" />
          </a>
          <div className="button-mobile">
            <button>=</button>
          </div>
          <nav className="main-menu">
            <ul className="main-menu__list">
              <li className="main-menu__item">
                <Link to="/" className="main-menu__link">
                  Home
                </Link>
              </li>
              <li className="main-menu__item">
                <Link to="/shop" className="main-menu__link">
                  Shop
                </Link>
              </li>
              <li className="main-menu__item">
                <Link to="/about" className="main-menu__link">
                  About
                </Link>
              </li>
              <li className="main-menu__item">
                <Link to="/contact" className="main-menu__link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-items">
            <div className="header-item-user">
              <span>
                <Link to={`/login`}>
                  <img src="./assets/icons/1.svg" />
                </Link>
              </span>
            </div>
            <div className="header-item-user">
              <span>
                <img src="./assets/icons/2.svg" />
              </span>
            </div>
            <div className="header-item-user">
              <span>
                <img src="./assets/icons/3.svg" />
              </span>
            </div>
            <div className="header-item-user">
              <Link to="/cart">
                <img src="./assets/icons/4.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
