
import React, { useState, useEffect, useRef } from "react";
import "./about.css";
import { DBurgerImg, gitImg, GraysonImg, WebShop, Films, Weather, foodShop } from '../../assets/image';

interface Work {
  id: number;
  title: string;
  desc: string;
  img: string;
  link: string;
}

const MyProjects: React.FC = () => {
  const [works] = useState<Work[]>([
    {
      id: 1,
      title: "Grayson",
      desc: "Grayson — это магазин, специализирующийся на продаже модной одежды и аксессуаров, ориентированный на тех, кто ценит стиль, индивидуальность и современные тренды. Магазин предлагает широкий ассортимент товаров для мужчин и женщин, включая одежду, обувь, сумки и разнообразные аксессуары.",
      img: GraysonImg,
      link: "https://fedya1922n.github.io/grayson-1500/",
    },
    {
      id: 2,
      title: "Git",
      desc: "Гитхаб проект для просмотра пользователей",
      img: gitImg,
      link: "https://fedya1922n.github.io/git/dist/",
    },
    {
      id: 3,
      title: "Web-Shop-Api-Project",
      desc: "Веб-интернет магазин сделанный на API для покупки вещей. P.S. Переходите на главную через навигацию.",
      img: WebShop,
      link: "https://fedya1922n.github.io/web-shop/dist/",
    },
    {
      id: 4,
      title: "DBurger",
      desc: "Интернет-магазин для заказа бургеров с выдачей чека на сумму заказа.",
      img: DBurgerImg,
      link: "https://fedya1922n.github.io/dBurger/",
    },
    {
      id: 5,
      title: "КиноВселенная",
      desc: "КиноВселенная — сайт для просмотра фильмов, использующий API TMDB.",
      img: Films,
      link: "https://fedya1922n.github.io/Films/",
    },
    {
      id: 6,
      title: "Weather",
      desc: "Сайт для просмотра погоды в разных городах.",
      img: Weather,
      link: "https://fedya1922n.github.io/Weather/",
    },
    {
      id: 7,
      title: "Food-Shop",
      desc: "Интернет продуктовый магазин с полной сменой языка и с учетом конверсии монет корзины и т.е.",
      img: foodShop,
      link: "https://fedya1922n.github.io/Food-Shop/",
    }
  ]);

  const [visibleCards, setVisibleCards] = useState<boolean[]>(works.map(() => false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="container">
      <h2>Мои работы</h2>
      <div className="content">
        {works.map((work, index) => (
          <div
            className={`card ${visibleCards[index] ? "visible" : ""} card-animation-${index + 1}`}
            key={work.id}
            ref={(el) => { cardRefs.current[index] = el; }}
          >
            <img src={work.img} alt={work.title} />
            <h3>{work.title}</h3>
            <p className="card__desc">{work.desc}</p>
            <a
              className="card__a"
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Посмотреть
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;