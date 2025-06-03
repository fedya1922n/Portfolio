import React, { useState, ChangeEvent } from 'react';
import "./navbar.css";
import { aboutImg,  DBurgerImg, gitImg,  GraysonImg, VUEimg, WebShop, Films, Weather, foodShop } from '../../assets/image';

interface Work {
  id: number;
  title: string;
  desc: string;
  img: string;
  link: string;
}

const Navbar: React.FC = () => {
  const [search, setSearch] = useState<string>('');
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
        title: 'Vue-cinema',
        desc: 'Vue Cinema - Сайт для просмотра фильмов',
        img: VUEimg,
        link: 'https://fedya1922n.github.io/vue/',
      },
      {
         id: 6,
         title: 'КиноВселенная',
         desc: 'КиноВселенная - Сайт для просмотра фильмов использующий API TMDB',
         img: Films,
         link: 'https://fedya1922n.github.io/Films/',
       },
        {
             id: 7,
             title: 'Weather',
             desc: 'Сайт для просмотра погоды в разных городах',
             img:  Weather,
             link: 'https://fedya1922n.github.io/Weather/',
           },
           {
                    id: 8,
                 title: "Food-Shop",
                 desc: "Интернет продуктовый магазин с полной сменой языка и с учетом конверсии монет корзины и т.е.",
                 img: foodShop,
                 link: "https://fedya1922n.github.io/Food-Shop/",
               }
  ]);

  const filteredWorks = works.filter((elem) =>
    elem.title.toLowerCase().startsWith(search.toLowerCase())
  );

  const [delSearch] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="navbar">
      <div className="navbar__search">
        <h1 className="navbar__title">Мое Портфолио</h1>
        <form action="" className="navbar__form">
          {!delSearch && (
            <>
              <input
                type="text"
                className="navbar__input"
                placeholder="Мои проекты"
                value={search}
                onChange={handleInputChange}
              />
              {search && (
                <div className="content-search">
                  {filteredWorks.map((elem) => (
                    <div className="content__card" key={elem.id}>
                      <img src={elem.img} alt={elem.title} className="content__card-img" />
                      <h3 className="content__card-title">{elem.title}</h3>
                      <p className="content__card-desc">{elem.desc}</p>
                      <a href={elem.link} className="content__card-a" target="_blank" rel="noopener noreferrer">
                        Посмотреть проект
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </form>
      </div>
      <h2 className="navbar__about-me">Обо мне</h2>
      <div className="navbar__about">
        <img src={aboutImg} alt="about me" className="navbar__about-img" />
        <h3 className="navbar__about-title">
          Здравствуйте! Меня зовут Фирдавс, и я — начинающий фронтенд-разработчик, специализирующийся на создании интерактивных и визуально привлекательных сайтов. Я уже освоил основные технологии веб-разработки, такие как HTML, CSS, JavaScript, и продолжаю углублять знания в React.
          Мое внимание к деталям и стремление создавать удобные и эффективные интерфейсы позволяют мне создавать проекты, которые не только выглядят стильно, но и работают безупречно. Я всегда стараюсь решать задачи с функциональной точки зрения и уделяю особое внимание улучшению пользовательского опыта.
          Когда я не работаю над проектами, я активно развиваюсь в программировании, стараясь учиться у опытных специалистов и не бояться экспериментов.
          Моя цель — продолжать совершенствовать свои навыки, развиваться в сфере веб-разработки и искать интересные и инновационные решения для будущих проектов. Я всегда открыт для новых возможностей и готов к сотрудничеству.
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
