import styles from "./FeatureSection.module.css";
import {FeatureSectionProps} from "../../types/types.ts";

function FeatureSection({ title, features, img }: FeatureSectionProps) {
  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <img className={styles.image} src={img} alt={title}/>
        <ul className={styles.features}>
          {
            features.map((feature, i) => (
              <li key={i}><Feature text={feature}/></li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}

function Feature({text}: { text: string }) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureMarker} aria-hidden></div>
      <p className={styles.featureText}>{text}</p>
    </div>
  );
}

export default FeatureSection;
