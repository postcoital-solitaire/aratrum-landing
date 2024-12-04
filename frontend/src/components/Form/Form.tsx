import styles from "./Form.module.css";
import image from "../../assets/images/form.png";

function Form() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div id="form-anchor" className={styles.description}>
          <h2 className={styles.title}>Настроим онлайн-платформу Открытые идеи под ваши задачи</h2>
          <p className={styles.text}>Ответим на вопросы, внедрим платформу, импортируем данные, научим решать любые задачи в одном
            окне браузера и получать аналитику с помощью отчетов</p>
          <form className={styles.form}>
            <input className={styles.input} type="text" placeholder="Ваше имя"/>
            <input className={styles.input} type="email" placeholder="Почта"/>
            <input className={styles.input} type="text" placeholder="Компания (или ИНН)"/>
            <textarea className={styles.input} placeholder="Сообщение"></textarea>
            <div>
              <button className={styles.button} type="submit">Отправить</button>
              <p>Отправляя форму заявки, вы соглашаетесь на обработку персональных данных</p>
            </div>
          </form>
        </div>
        <img className={styles.image} src={image} alt=""/>
      </div>
    </section>
  );
}

export default Form;
