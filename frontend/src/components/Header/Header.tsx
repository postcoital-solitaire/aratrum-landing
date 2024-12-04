import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <img src={logo} alt="Логотип открытых идей"/>
        </Link>
        
        <nav>
          <ul className={styles.links}>
            <li className={styles.link}><a href="#features-anchor">Преимущества</a></li>
            <li className={styles.link}><a href="#possibility-anchor">Возможности</a></li>
            <li className={styles.link}><a href="#form-anchor">Оставить заявку</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
