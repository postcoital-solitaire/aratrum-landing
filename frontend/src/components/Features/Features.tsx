import styles from "./Features.module.css";
import image from "../../assets/images/features.png";
import featureIcon from "../../assets/icons/feature.svg";

const features = {
  "Централизация и порядок": "Все предложения собираются в одном месте, что упрощает доступ, предотвращает их утрату и позволяет структурировать по категориям для анализа и реализации.",
  "Прозрачность и контроль": "Система отображает статус каждого предложения, позволяет ставить лайки и получать уведомления, улучшая взаимодействие между сотрудниками и руководством.",
  "Объективность и приоритеты": "Оценка идей по заданным критериям помогает выбирать лучшие предложения для реализации, повышая эффективность процесса.",
  "Аналитика и отчётность": "Инструменты аналитики позволяют отслеживать активность сотрудников, эффективность предложений и успех внедрённых идей.",
  "Экономия времени": "Автоматизация процесса подачи, оценки и реализации идей сокращает время на обработку предложений.",
  "Мотивация сотрудников": "Прозрачный процесс и возможность видеть результаты своих идей повышают вовлечённость и мотивацию сотрудников к участию."
};

function Features() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={image} alt="Преимущества управления предложениями через информационную систему"/>
        </div>

        <h2 id="features-anchor" className={styles.title}>Преимущества управления предложениями через информационную систему</h2>

        <div className={styles.grid}>
          {
            Object.entries(features).map(([title, text], i) => <Feature key={i} title={title} text={text} />)
          }
        </div>
      </div>
    </section>
  );
}

interface FeatureProps {
  title: string;
  text: string;
}

function Feature({ title, text }: FeatureProps) {
  return (
    <div className={styles.feature}>
      <img src={featureIcon} alt="Преимущество"/>
      <div>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Features;
