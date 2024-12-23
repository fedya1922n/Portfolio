import React, { useState } from 'react';
import "./navbar.css";
import { aboutImg, AirpodsImg, gitImg, GoTripImg, GraysonImg, SilverHouse, WebShop } from '../../assets/image';

const Navbar = () => {
    const [search, setSearch] = useState('');
    const [works] = useState([
      {
        id: 1,
        title: 'Gotrip',
        desc: 'Сайт Gotrip посвящён продаже товаров для активного отдыха и туризма...',
        img: GoTripImg,
        link: 'https://fedya1922n.github.io/Gotrip/',
      },
      {
        id: 2,
        title: 'Boulevard',
        desc: 'Boulevard — это магазин, специализирующийся на продаже техники Apple...',
        img: AirpodsImg,
        link: 'https://fedya1922n.github.io/Boulevard-market/',
      },
      {
        id: 3,
        title: 'SilverHouse',
        desc: 'SilverHouse — это компания, специализирующаяся на продаже новостроек...',
        img: SilverHouse,
        link: 'https://fedya1922n.github.io/Silver-House/',
      },
      {
        id: 4,
        title: 'Grayson',
        desc: 'Grayson — это магазин, специализирующийся на продаже модной одежды...',
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
        id: 6,
        title: "Web-Shop-Api-Project",
        desc: "Веб-интернет магазин сделанный на api для покупки вещей...",
        img: WebShop,
        link: "https://fedya1922n.github.io/web-shop/dist/"
      }
    ]);

    const filteredWorks = works.filter((elem) =>
      elem.title.toLowerCase().startsWith(search.toLowerCase())
    );

    const [delSearch, setDelSearch] = useState(false);


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
                                onChange={(e) => setSearch(e.target.value)}
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
                    Здравствуйте! Меня зовут Федя, и я — начинающий фронтенд-разработчик, специализирующийся на создании интерактивных и визуально привлекательных сайтов. Я уже освоил основные технологии веб-разработки, такие как HTML, CSS, JavaScript, и продолжаю углублять знания в React.
                    Мое внимание к деталям и стремление создавать удобные и эффективные интерфейсы позволяют мне создавать проекты, которые не только выглядят стильно, но и работают безупречно. Я всегда стараюсь решать задачи с функциональной точки зрения и уделяю особое внимание улучшению пользовательского опыта.
                    Когда я не работаю над проектами, я активно развиваюсь в программировании, стараясь учиться у опытных специалистов и не бояться экспериментов.
                    Моя цель — продолжать совершенствовать свои навыки, развиваться в сфере веб-разработки и искать интересные и инновационные решения для будущих проектов. Я всегда открыт для новых возможностей и готов к сотрудничеству.
                </h3>
            </div>
        </div>
    );
};

export default Navbar;
