
import './burgerMenu.scss';
import classNames from "classnames";

const BurgerMenu = ({ onClick, isMenuOpen }) => {
   return (
      <div className={classNames('header__menu-btn', { 'header__menu-btn--active': isMenuOpen })}
         onClick={onClick}>
         <span></span>
      </div>
   )
}

export default BurgerMenu