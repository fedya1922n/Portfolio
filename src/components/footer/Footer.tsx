import React from 'react';
import "./footer.css";
import { gitHubImg, InstImg, TgImg } from '../../assets/image';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__menu">
        <a href="https://www.instagram.com/fedya1922n/" target="_blank" rel="noopener noreferrer">
          <img src={InstImg} alt="Instagram" className="footer__img" />
        </a>
        <a href="https://t.me/fedya1922n" target="_blank" rel="noopener noreferrer">
          <img src={TgImg} alt="Telegram" className="footer__img" />
        </a>
        <a href="https://github.com/fedya1922n" target="_blank" rel="noopener noreferrer">
          <img src={gitHubImg} alt="GitHub" className="footer__img-git" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
