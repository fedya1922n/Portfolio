import React, { useState } from 'react';
import './about.css';
import { AirpodsImg, FoodOrder, gitImg, GoTripImg, GraysonImg,  WebShop } from '../../assets/image';

const MyProjects = () => {
  const [works] = useState([
    {
      id: 1,
      title: 'Gotrip',
      desc: 'Сайт Gotrip посвящён продаже товаров для активного отдыха и туризма. В магазине представлены такие категории, как одежда, обувь, палатки и рюкзаки. Компания работает с 2003 года, обеспечивая туристов всем необходимым для безопасных поездок на природу и экспедиций. Основной акцент делается на безопасность и комфорт во время путешествий.',
      img: GoTripImg,
      link: 'https://fedya1922n.github.io/Gotrip/',
    },
    {
      id: 2,
      title: 'Boulevard',
      desc: 'Boulevard — это магазин, специализирующийся на продаже техники Apple. В ассортименте представлены самые популярные продукты компании: iPhone, iPad, MacBook, Apple Watch, Airpods и аксессуары. Boulevard предлагает покупателям оригинальные устройства с гарантией качества, а также сервисное обслуживание и консультации по выбору техники. Магазин ориентирован на тех, кто ценит инновации, качество и дизайн продукции Apple.',
      img: AirpodsImg,
      link: 'https://fedya1922n.github.io/Boulevard-market/',
    },
    {
      id: 3,
      title: 'Food-order',
      desc: 'Food-Order — это современный сайт для быстрого и удобного заказа бургеров с возможностью кастомизации и оформления онлайн. Удобный интерфейс и быстрый доступ к популярным блюдам делают процесс заказа максимально простым и приятным. Также доступны специальные предложения и персонализированные скидки для постоянных клиентов.',
      img: FoodOrder,
      link: 'https://fedya1922n.github.io/foo/',
    },
    {
      id: 4,
      title: 'Grayson',
      desc: 'Grayson — это магазин, специализирующийся на продаже модной одежды и аксессуаров, ориентированный на тех, кто ценит стиль, индивидуальность и современные тренды. Магазин предлагает широкий ассортимент товаров для мужчин и женщин, включая одежду, обувь, сумки и разнообразные аксессуары.',
      img: GraysonImg,
      link: 'https://fedya1922n.github.io/grayson-1500/',
    },
    {
      id: 5,
      title: 'Git',
      desc: 'Гитхаб проект для просмотра пользователей',
      img: gitImg,
      link: 'https://fedya1922n.github.io/git/dist/',
    },
    {
      id:5,
      title: "Web-Shop-Api-Project",
      desc: "Веб-интернет магазин сделанный на api для покупки вещей p.s Переходите на главную линку в наве",
      img: WebShop,
      link:"https://fedya1922n.github.io/web-shop/dist/"

    }
  ]);

  return (
    <div className="container">
      <h2>Мои работы</h2>
      <div className="content">
        {works.map((elem) => (
          <div className="card" key={elem.id}>
            <img src={elem.img} alt={elem.title} />
            <h3>{elem.title}</h3>
            <p className="card__desc">{elem.desc}</p>
            <a className="card__a" href={elem.link}>
              Посмотреть
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
