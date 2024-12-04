import Layout from "../components/Layout/Layout.tsx";
import Welcome from "../components/Welcome/Welcome.tsx";
import IdeasDescription from "../components/IdeasDescription/IdeasDescription.tsx";
import Features from "../components/Features/Features.tsx";
import Guide from "../components/Guide/Guide.tsx";
import {FeatureSectionProps} from "../types/types.ts";
import FeatureSection from "../components/FeatureSection/FeatureSection.tsx";
import sectionFeature1 from "../assets/images/sec_feat1.png";
import sectionFeature2 from "../assets/images/sec_feat2.png";
import sectionFeature3 from "../assets/images/sec_feat3.png";
import sectionFeature4 from "../assets/images/sec_feat4.png";
import TelegramAd from "../components/TelegramAd/TelegramAd.tsx";
import WhyUs from "../components/WhyUs/WhyUs.tsx";
import Form from "../components/Form/Form.tsx";
import StartWorking from "../components/StartWorking/StartWorking.tsx";

const featuresSections: FeatureSectionProps[] = [
  {
    title: "Создаём пространство для идей",
    img: sectionFeature1,
    features: [
      "Наша платформа объединяет сотрудников всех филиалов и отделов, предоставляя единое место для сбора и управления инициативами.",
      "Прозрачный процесс подачи и рассмотрения предложений способствует появлению новых идей, которые помогают улучшить работу компании.",
      "Добивайтесь новых высот в эффективности!"
    ]
  },
  {
    title: "Легкость подачи инициатив",
    img: sectionFeature2,
    features: [
      "Система сбора инициатив помогает выявлять проблемы и улучшать бизнес-процессы.",
      "Удобный интерфейс позволяет сотрудникам легко вносить предложения, а компании — быстро реагировать и внедрять лучшие идеи."
    ]
  },
  {
    title: "Аналитика",
    img: sectionFeature3,
    features: [
      "Получайте детализированные отчёты и визуализированные данные для анализа инициатив.",
      "Платформа помогает оценить эффективность идей, распределение по категориям и вовлечённость сотрудников."
    ]
  },
  {
    title: "Рейтинговая система",
    img: sectionFeature4,
    features: [
      "Сотрудники мотивированы вкладывать усилия, зная, что их вклад будет признан.",
      "Возможность увидеть своё имя на условной доске почёта — отличный стимул, особенно если за этим следует денежное вознаграждение."
    ]
  },
];

function RootPage() {
  return (
    <Layout>
      <Welcome />
      <IdeasDescription />
      <Features />
      <Guide />
      <div id="possibility-anchor">
        {
          featuresSections.map((section, i) => (
            <FeatureSection key={i} features={section.features} img={section.img} title={section.title} />
          ))
        }
      </div>
      <TelegramAd />
      <WhyUs />
      <Form />
      <StartWorking />
    </Layout>
  );
}

export default RootPage;
