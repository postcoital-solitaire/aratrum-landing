import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import burgerMenuIcon from "../../assets/icons/burgerMenu.svg"
import closeMenuIcon from "../../assets/icons/closeMenu.svg"
import {Link} from "react-router-dom";
import {useIsMobile} from "../../hooks/hooks.ts";
import {useCallback, useState} from "react";

function Header() {
  const isMobile = useIsMobile();
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setIsOpened(prev => !prev);
  }, [
    isMobile
  ])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <img src={logo} alt="Логотип открытых идей"/>
        </Link>

        {
          !isMobile && (
            <nav>
              <ul className={styles.links}>
                <li className={styles.link}><a href="#features-anchor">Преимущества</a></li>
                <li className={styles.link}><a href="#possibility-anchor">Возможности</a></li>
                <li className={styles.link}><a href="#form-anchor">Оставить заявку</a></li>
              </ul>
            </nav>
          )
        }

        {
          isMobile && (
            <button onClick={handleOpenMenu}>
              {
                !isOpened
                  ?
                  <img src={burgerMenuIcon} alt="Открыть меню"/>
                  :
                  <img src={closeMenuIcon} alt="Зыкрыть меню"/>
              }
            </button>
          )
        }

        {
          (isMobile && isOpened) && (
            <nav className={styles.openedMenu}>
              <ul className={styles.openedLinks}>
                <li className={styles.link}><a href="#features-anchor">Преимущества</a></li>
                <li className={styles.link}><a href="#possibility-anchor">Возможности</a></li>
                <li className={styles.link}><a href="#form-anchor">Оставить заявку</a></li>
              </ul>
            </nav>
          )
        }
      </div>
    </header>
  );
}

export default Header;
