import React from "react";
import s from "./Contact.module.scss";
import { BsInstagram } from 'react-icons/bs'
import { BsTelegram } from 'react-icons/bs'
import { SlSocialVkontakte } from 'react-icons/sl'

const About = () => {
  return (
    <div className={s.content}>
      <a target="_blank" className="animate__animated animate__slideInLeft" href="https://instagram.com/kkkkkkkkkkkkkkkkkkk019?igshid=MzRlODBiNWFlZA=="><BsInstagram/><span>Instagram</span></a>
      <div className="animate__animated animate__slideInDown"><a target="_blank" className={s.tg} href="https://t.me/kkk019"><BsTelegram/><span>Telegram</span></a></div>
      <a target="_blank" className="animate__animated animate__slideInRight"  href="https://vk.com/kkk019"><SlSocialVkontakte/><span>VK</span></a>
    </div>
  );
};

export default About;
