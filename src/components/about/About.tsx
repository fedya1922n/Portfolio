import React from "react";
import { useEffect, useState, useRef } from "react";
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
  { name: "TypeScript", level: 40 },
];

const About: React.FC = () => {
  const [progressLevels, setProgressLevels] = useState<number[]>(
    skills.map(() => 0)
  );
  const [isTextVisible, setIsTextVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setProgressLevels(skills.map((skill) => skill.level));
          setIsTextVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about" ref={sectionRef}>
      <p className="about__section-title">Мои знания</p>
      {skills.map((skill, index) => (
        <div className="about__skills" key={skill.name}>
          <h1 className="about__skills-title">{skill.name}</h1>
          <div className="about__progress">
            <div
              className="about__progress-bar"
              style={{
                width: `${progressLevels[index]}%`,
                transition: "width 1s ease-in-out",
              }}
            ></div>
          </div>
        </div>
      ))}
      <div className={`about__desc ${isTextVisible ? "visible" : ""}`}>
        <p className="about__desc-title">
          Не смотря на маленький опыт работы и такое количество знаний, я стараюсь всегда, чтобы клиент был доволен своим заказом и оставлял хороший отзыв. Важно не только выполнить задачу, но и сделать процесс удобным и приятным для заказчика. Я всегда прислушиваюсь к обратной связи, чтобы улучшать свои навыки и не останавливаться на достигнутом. Вдохновляюсь на новые проекты и стремлюсь привнести креативный подход в каждую задачу, создавая не просто решения, а что-то уникальное и эффективное.
        </p>
      </div>
    </div>
  );
};

export default About;
