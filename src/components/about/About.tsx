import { useEffect, useState } from "react";
import "./about.css";

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "React", level: 60 },
  { name: "JavaScript", level: 50 },
  { name: "CSS", level: 80 },
  { name: "HTML", level: 85 },
];

const About: React.FC = () => {
  const [progressLevels, setProgressLevels] = useState<number[]>(
    skills.map(() => 0)
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgressLevels(skills.map((skill) => skill.level));
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="about">
      <p className="about__section-title">Мои знания</p>
      {skills.map((skill, index) => (
        <div className="about__skills" key={skill.name}>
          <h1 className="about__skills-title">{skill.name}</h1>
          <div className="about__progress">
            <div
              className="about__progress-bar"
              style={{
                width: `${progressLevels[index]}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
      <div className="about__desc">
        <p className="about__desc-title">
          Не смотря на маленький опыт работы и такое количество знаний, я стараюсь всегда, чтобы клиент был доволен своим заказом и оставлял хороший отзыв. Важно не только выполнить задачу, но и сделать процесс удобным и приятным для заказчика. Я всегда прислушиваюсь к обратной связи, чтобы улучшать свои навыки и не останавливаться на достигнутом. Вдохновляюсь на новые проекты и стремлюсь привнести креативный подход в каждую задачу, создавая не просто решения, а что-то уникальное и эффективное.
        </p>
      </div>
    </div>
  );
};

export default About;
