import styles from "./IdeasDescription.module.css";
import image from "../../assets/images/IdeasDescription.png";

function IdeasDescription() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>ИДЕИ, КОТОРЫЕ МЕНЯЮТ ВСЁ</h2>
          <p className={styles.text}>Платформа «Открытые идеи» помогает собирать предложения, оптимизировать процессы и улучшать качество
            продукции. Повышает вовлечённость сотрудников через прозрачность и обратную связь, снижая текучесть кадров.
            Реализация идей и снижение затрат увеличивают прибыль и конкурентоспособность компании.</p>
        </div>
        <img className={styles.image} src={image} alt="ИДЕИ, КОТОРЫЕ МЕНЯЮТ ВСЁ"/>
      </div>
    </section>
  );
}

export default IdeasDescription;
