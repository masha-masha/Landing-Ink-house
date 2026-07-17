import "./Header.css";
import star from "../../assets/Star 1.svg";
import cartIcon from "../../assets/images/shopping-cart.png";

const Header = () => {
 return (
  <header className="header">
   <div className="header__container container">
    <a href="/" className="header__logo logo">
     <img
      className="logo__icon"
      src={star}
      alt="Логотип Ink. House"
     />
     <span className="logo__text">Ink. House</span>
    </a>

    <nav className="header__nav nav">
     <ul className="nav__list">
      <li className="nav__item">
       <a href="#reproductions" className="nav__link">
        Репродукции
       </a>
      </li>
      <li className="nav__item">
       <a href="#new" className="nav__link">
        Новинки
       </a>
      </li>
      <li className="nav__item">
       <a href="#about" className="nav__link">
        О нас
       </a>
      </li>
     </ul>
    </nav>

    <button className="header__cart cart-button" aria-label="Корзина покупок">
     <img
      className="cart-button__icon"
      src={cartIcon}
      alt="Иконка корзины"
     />
    </button>
   </div>
  </header>
 );
};

export default Header;
