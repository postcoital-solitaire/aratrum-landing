import styles from "./WhyUs.module.css";
import React from "react";
import featureIcon1 from "../../assets/icons/development.svg";
import featureIcon2 from "../../assets/icons/functionality.svg";
import featureIcon3 from "../../assets/icons/support.svg";
import featureIcon4 from "../../assets/icons/individual.svg";

const features: FeatureProps[] = [
  {
    img: featureIcon1,
    title: "Развиваем инновации",
    text: <>
      Мы помогаем внедрять передовые технологии и улучшать процессы в вашей компании.
    </>
  },
  {
    img: featureIcon2,
    title: "Широкий функционал",
    text: <>
      Платформа включает систему сбора и управления инициативами сотрудников, BI-аналитики и базу знаний
    </>
  },
  {
    img: featureIcon3,
    title: "Надёжная поддержка",
    text: <>
      Наша команда доступна 24/7 для решения любых технических вопросов. Напишите нам на: <a href="mailto:help@aratrum.ru">help@aratrum.ru</a>.
    </>
  },
  {
    img: featureIcon4,
    title: "Индивидуальный подход к стоимости",
    text: <>
      Мы подбираем оптимальное решение под ваши задачи. Оставьте заявку или свяжитесь с нами: <a href="mailto:inbox@aratrum.ru">inbox@aratrum.ru</a>.
    </>
  },
];

function WhyUs() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Почему выбирают нас?</h2>
        <div className={styles.grid}>
          {
            features.map((feature, i) => (
              <Feature key={i} img={feature.img} title={feature.title} text={feature.text} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

interface FeatureProps {
  img: string;
  title: string;
  text: React.ReactNode;
}

function Feature({ img, title, text }: FeatureProps) {
  return (
    <div className={styles.feature}>
      <img className={styles.featureImage} src={img} alt={title}/>
      <div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureText}>{text}</p>
      </div>
    </div>
  );
}

export default WhyUs;
