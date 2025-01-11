import styles from "./Form.module.css";
import image from "../../assets/images/form.png";
import {ChangeEvent, FormEvent, useState} from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [status, setStatus] = useState("idle");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!/\S+@\S+\.\S+/.test(email) || !email) newErrors["email"] = "Введите корректный email.";
    if (name.length < 3 || !name) newErrors["name"] = "Введите корректное имя.";
    if (company.length < 3 || !company) newErrors["company"] = "Введите корректное название компании.";
    if (message.length < 10 || !message) newErrors["message"] = "Сообщение слишком короткое.";

    return newErrors;
  }

  async function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      const response = await fetch("/new-reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, company, email, message
        }),
      })

      if (!response.ok) {
        setStatus("error");
      } else {
        setStatus("success");
      }

      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div id="form-anchor" className={styles.description}>
          <h2 className={styles.title}>Настроим онлайн-платформу Открытые идеи под ваши задачи</h2>
          <p className={styles.text}>Ответим на вопросы, внедрим платформу, импортируем данные, научим решать любые
            задачи в одном
            окне браузера и получать аналитику с помощью отчетов</p>
          <form className={styles.form} onSubmit={handleSubmitForm}>
            <InputWithError
              errors={errors}
              placeholder="Ваше имя"
              type="text"
              onChange={e => setName(e.target.value)}
              errorName="name"
            />
            <InputWithError
              errors={errors}
              placeholder="Почта"
              type="email"
              onChange={e => setEmail(e.target.value)}
              errorName="email"
            />
            <InputWithError
              errors={errors}
              placeholder="Компания (или ИНН)"
              type="text"
              onChange={e => setCompany(e.target.value)}
              errorName="company"
            />
            <div>
              <textarea
                className={styles.input} placeholder="Сообщение"
                onChange={e => setMessage(e.target.value)}>
              </textarea>
              {
                errors["message"]
                  ?
                  <div className={styles.inputError}>
                    {errors["message"]}
                  </div>
                  :
                  null
              }
            </div>
            <div>
              <button className={styles.button} type="submit">Отправить</button>
              {
                status === "success"
                  ?
                  <div className={`${styles.status} ${styles.success}`}>Форма успешно отправлена!</div>
                  :
                  (
                    status === "error"
                      ?
                      <div className={`${styles.status} ${styles.fail}`}>Ошибка при отправке формы, повторите попытку</div>
                      :
                      null
                  )
              }
              <p>Отправляя форму заявки, вы соглашаетесь на обработку персональных данных</p>
            </div>
          </form>
        </div>
        <img className={styles.image} src={image} alt=""/>
      </div>
    </section>
  );
}

interface InputProps {
  errors: { [key: string]: string };
  errorName: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputWithError({errors, errorName, type, onChange, placeholder}: InputProps) {
  return (
    <div>
      <input className={styles.input} type={type} placeholder={placeholder} onChange={onChange}/>
      {
        errors[errorName]
          ?
          <div className={styles.inputError}>
            {errors[errorName]}
          </div>
          :
          null
      }
    </div>
  );
}

export default Form;
