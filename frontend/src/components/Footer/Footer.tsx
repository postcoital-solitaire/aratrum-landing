import styles from "./Footer.module.css";
import logo from "../../assets/logoDark.svg";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={`${styles.column} ${styles.logo}`}>
          <a href="#"><img src={logo} alt=""/></a>
          <p>© 2024 Открытые идеи</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>КОНТАКТЫ</h3>
          <a href="mailto:inbox@aratrum.ru">inbox@aratrum.ru</a>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>АДРЕС</h3>
          <p>г. Екатеринбург, ул. Конструкторов, д. 5</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>ИСТОЧНИКИ</h3>
          <p>Изображения: Flaticon</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
