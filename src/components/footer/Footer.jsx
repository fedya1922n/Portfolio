import React from 'react'
import "./footer.css"
import { gitHubImg, InstImg, TgImg } from '../../assets/image'
const Footer = () => {
  return (
   <div className="footer">
    <div className="footer__menu">
    <a href="https://www.instagram.com/fedya1922n/">
    <img src={InstImg} alt="" className="footer__img" />
    </a>
    <a href="https://t.me/fedya1922n">
    <img src={TgImg} alt="" className="footer__img" />
    </a>
    <a href="https://github.com/fedya1922n">
    <img src={gitHubImg}  alt="" className="footer__img-git" />
    </a>
    </div>
   </div>
  )
}

export default Footer