import styles from "./StartWorking.module.css";
import installationIcon from "../../assets/icons/installation.svg";
import exploitationIcon from "../../assets/icons/exploitation.svg";
import {Link} from "react-router-dom";

function StartWorking() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Начало работы</h2>
      <div className={styles.cards}>
        <Card
          inverted={true}
          link=""
          title="Установка программного обеспечения"
          text="Пошаговая инструкция для установки программного обеспечения. Узнайте, как быстро настроить систему и начать её использование без лишних сложностей."
          img={installationIcon}
        />
        <Card
          link=""
          title="Эксплуатация программного обеспечения"
          text="Руководство пользователя с описанием основных функций и возможностей системы. Максимизируйте производительность с помощью полезных советов."
          img={exploitationIcon}
        />
      </div>
    </section>
  );
}

interface CardProps {
  link: string;
  title: string;
  text: string;
  img: string;
  inverted?: boolean;
}

function Card({ link, title, text, img, inverted = false }: CardProps) {
  let cardStyles = styles.card;

  if (inverted) cardStyles += ` ${styles.inverted}`

  return (
    <Link to={link} className={cardStyles}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{text}</p>
      <p className={styles.cardLink}>Перейти к инструкции →</p>
      <img className={styles.cardImage} src={img} alt=""/>
    </Link>
  );
}

export default StartWorking;
