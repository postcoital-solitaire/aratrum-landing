import styles from "./Welcome.module.css";
import welcome from "../../assets/images/welcome.png";
import openIdeasText from "../../assets/open_ideas.svg";

function Welcome() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.description}>
          <h1><img src={openIdeasText} alt="Открытые идеи"/></h1>
          <p className={styles.text}>Информационная система «Открытые идеи» разработана для сбора, оценки и управления предложениями сотрудников
            по оптимизации различных процессов в компании</p>
          <a className={styles.link} href="#">Оставить заявку</a>
        </div>

        <img src={welcome} alt="Открытые идеи"/>
      </div>
    </section>
  );
}

export default Welcome;
