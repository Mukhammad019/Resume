import React, { useState } from "react";
import s from "./Contact.module.scss";
import { BsInstagram } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <div className={s.content}>
      <div className={s.left}>
        <div className={s.mail}>
          <GoMail />
          2016kosumov@mail.ru
        </div>
        <div className={s.phone}>
          <FaWhatsapp />
          +7 989 904 93 24
        </div>
        <div className={s.inst}>
          <BsInstagram />
          kkkkkkkkkkkkkkkkkkk019
        </div>
      </div>
      <div className={s.right}>
        <div className="animate__animated animate__slideInDown">
          <a target="_blank" href="https://t.me/kkk019">
            <img className={s.tg} src="./src/img/tg.png" alt="" />
          </a>
        </div>
        <div className="animate__animated animate__slideInUp">
          <div className={s.vk}>
            <a target="_blank" href="https://vk.com/kkk019">
              <img className={s.iconvk} src="./src/img/vk1.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
