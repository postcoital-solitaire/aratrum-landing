import styles from "./Guide.module.css";
import guide1 from "../../assets/icons/guide1.svg";
import guide2 from "../../assets/icons/guide2.svg";
import guide3 from "../../assets/icons/guide3.svg";
import guide4 from "../../assets/icons/guide4.svg";

const cards = [
  {id: 1, img: guide1, title: "ПОДАЧА ПРЕДЛОЖЕНИЯ", text: "Сотрудник заполняет форму с описанием своей идеи через веб-интерфейс или мобильное приложение."},
  {id: 2, img: guide2, title: "РАССМОТРЕНИЕ И ОЦЕНКА", text: "Эксперты и руководители оценивают предложение по установленным критериям."},
  {id: 3, img: guide3, title: "РЕАЛИЗАЦИЯ", text: "Одобренные предложения внедряются в рабочие процессы компании."},
  {id: 4, img: guide4, title: "ОБРАТНАЯ СВЯЗЬ", text: "Сотрудник получает уведомление о статусе своего предложения и результатах его реализации."},
];

function Guide() {
  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.title}>Как это работает?</h2>
        <div className={styles.cards}>
          {
            cards.map(({ id, img, title, text }) => (
                <Card key={id} id={id} img={img} title={title} text={text} />
              )
            )
          }
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  id: number;
  img: string;
  title: string;
  text: string;
}

function Card({ id, img, title, text }: CardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={img} alt={title}/>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p>{text}</p>
      <div className={styles.cardId} aria-hidden>{id}</div>
    </div>
  );
}

export default Guide;
