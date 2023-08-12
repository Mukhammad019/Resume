import React from "react";
import s from "./Contact.module.scss";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";

const About = () => {
  return (
    <div className={s.content}>
      <div className={s.left}>
        <div className={s.mail}>
          <GoMail />
          2016kosumov@mail.ru
        </div>
        <div className={s.phone}>
          <BsTelephone />
          +7 989 904 93 24
        </div>
        <div className={s.inst}>
          <BsInstagram />
          kkkkkkkkkkkkkkkkkkk019
        </div>
      </div>
      <div className={s.right}>
        <div className="animate__animated animate__slideInDown">
          <a target="_blank" className={s.tg} href="https://t.me/kkk019">
            <BsTelegram />
          </a>
        </div>
        <div className="animate__animated animate__slideInUp"><div className={s.vk}><a
          target="_blank"
          href="https://vk.com/kkk019"
        >
          VK
        </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
