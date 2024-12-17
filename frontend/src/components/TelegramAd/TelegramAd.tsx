import styles from "./TelegramAd.module.css";
import phoneImage from "../../assets/images/telegram_ad.png";
import telegramIcon from "../../assets/icons/telegram.svg";

function TelegramAd() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.description}>
          <h2 className={styles.title}>Оставайтесь в курсе</h2>
          <p className={styles.text}>Будьте в курсе последних новостей и обновлений. Делитесь идеями и получайте
            полезную информацию в любое время и из любого места с помощью нашего Telegram-канала.</p>
          <a className={styles.button} href="">Перейти в Telegram</a>
        </div>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={phoneImage} alt=""/>
          <img className={styles.icon} src={telegramIcon} alt=""/>
        </div>
        <img className={styles.iconAdaptive} src={telegramIcon} alt=""/>
      </div>
    </section>
  );
}

export default TelegramAd;
