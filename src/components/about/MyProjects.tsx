import React, { useState } from 'react';
import './about.css';
import { AirpodsImg, DBurgerImg, FoodOrder, gitImg, GoTripImg, GraysonImg, ParallaxImg, VUEimg, WebShop, Films, Weather } from '../../assets/image';
type Work = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link: string;
};

const MyProjects: React.FC = () => {
  const [works] = useState<Work[]>([
    {
      id: 1,
      title: 'Grayson',
      desc: 'Grayson — это магазин, специализирующийся на продаже модной одежды и аксессуаров, ориентированный на тех, кто ценит стиль, индивидуальность и современные тренды. Магазин предлагает широкий ассортимент товаров для мужчин и женщин, включая одежду, обувь, сумки и разнообразные аксессуары.',
      img: GraysonImg,
      link: 'https://fedya1922n.github.io/grayson-1500/',
    },
    {
      id: 2,
      title: 'Git',
      desc: 'Гитхаб проект для просмотра пользователей',
      img: gitImg,
      link: 'https://fedya1922n.github.io/git/dist/',
    },
    {
      id: 3,
      title: 'Web-Shop-Api-Project',
      desc: 'Веб-интернет магазин сделанный на api для покупки вещей p.s Переходите на главную линку в наве',
      img: WebShop,
      link: 'https://fedya1922n.github.io/web-shop/dist/',
    },
    {
      id: 4,
      title: 'DBurger',
      desc: 'Очередной интернет шоп для заказа бургеров с выдачей чека на сумму которую заказали',
      img: DBurgerImg,
      link: 'https://fedya1922n.github.io/dBurger/',
    },
    {
      id: 5,
      title: 'КиноВселенная',
      desc: 'КиноВселенная - Сайт для просмотра фильмов использующий API TMDB',
      img: Films,
      link: 'https://fedya1922n.github.io/Films/',
    },
    {
      id: 6,
      title: 'Weather',
      desc: 'Сайт для просмотра погоды в разных городах',
      img:  Weather,
      link: 'https://fedya1922n.github.io/Weather/',
    },
  ]);

  return (
    <div className="container">
      <h2>Мои работы</h2>
      <div className="content">
        {works.map((work) => (
          <div className="card" key={work.id}>
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
