import React from 'react';
import "./navbar.css";
import { aboutImg } from '../../assets/image';


const Navbar: React.FC = () => {

  return (
    <div className="navbar">
      <div className="navbar__search">
        <h1 className="navbar__title">Мое Портфолио</h1>
      </div>
      <h2 className="navbar__about-me">Обо мне</h2>
      <div className="navbar__about">
        <img src={aboutImg} alt="about me" className="navbar__about-img" />
        <h3 className="navbar__about-title">
   Здравствуйте. Меня зовут Фирдавс, я  фронтенд-разработчик. Работаю с HTML, CSS, JavaScript и TypeScript, React.
Мне важно, чтобы интерфейсы были не только аккуратными внешне, но и логично устроенными внутри. Я стараюсь создавать понятные, удобные и стабильные решения, уделяя внимание деталям и пользовательскому опыту.
Постоянно учусь — изучаю современные подходы, читаю код опытных разработчиков, не боюсь пробовать новое. Стремлюсь развиваться как специалист и работать над интересными проектами, которые приносят реальную пользу.
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
