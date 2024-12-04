import styles from "./TelegramAd.module.css";
import phoneImage from "../../assets/images/telegram_ad.png";
import telegramIcon from "../../assets/icons/telegram.svg";

function TelegramAd() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.description}>
          <h2 className={styles.title}>Мобильность</h2>
          <p className={styles.text}>Легкая подача инициатив через смартфон, без установки дополнительных приложений. Работайте с идеями в любое
            удобное время и из любого места с помощью телеграм-бота.</p>
          <a className={styles.button} href="">Открыть Telegram-бот</a>
        </div>
        <div className={styles.imageContainer}>
          <img src={phoneImage} alt=""/>
          <img className={styles.icon} src={telegramIcon} alt=""/>
        </div>
      </div>
    </section>
  );
}

export default TelegramAd;
