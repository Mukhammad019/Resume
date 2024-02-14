import React from "react";
import s from "./About.module.scss";
import { Routes, Route, Link } from "react-router-dom";
import "animate.css";

const Home = () => {
  return (
    <div className={s.content}>
      <div className="animate__animated animate__fadeInLeft">
        <div className={s.img}>
          <img src="../src/img/me.jpg" alt="me" />
        </div>
      </div>
      <div className="animate__animated animate__fadeInRight">
        <div className={s.text}>
          <span className={s.name}>Косумов Мухаммад-Араф.</span> 20 лет.{" "}
          <span className={s.front}>Frontend</span>-разработчик. Занимаюсь
          разработкой на базе фреймворка{" "}
          <a
            className={s.react}
            target="_blank"
            href="https://ru.legacy.reactjs.org/docs/getting-started.html"
          >
            ⚛ React
          </a>
          , в связке с разными библиотеками. Опыт работы:{" "}
          <span className={s.exp}>3 года 3 месяца.</span>
          <p className={s.sozd}>
            | Создание React приложений, разработка функциональных компонентов;
            <p>| Работа с Git/GitHub;</p>
            <p>| Работа с Redux/Redux-Toolkit;</p>
            <p>| Работа с препроцессором Sass;</p>
            <p>| Работа с адаптивной версткой;</p>
            <p>| Разработка функционала на JavaScript;</p>
          </p>
          <p className={s.stek}>
            Мой стек:{" "}
            <p>
              <a
                target="_blank"
                className={s.js}
                href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
              >
                JavaScript
              </a>
              ,{" "}
              <a
                target="_blank"
                className={s.html}
                href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics"
              >
                HTML
              </a>
              ,
              <a
                target="_blank"
                className={s.css}
                href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics"
              >
                {" "}
                CSS
              </a>
              ,{" "}
              <a target="_blank" className={s.rct} href="https://react.dev/">
                React
              </a>
              ,{" "}
              <a
                target="_blank"
                className={s.rrd}
                href="https://reactrouter.com/en/main"
              >
                React-router-dom
              </a>
              ,{" "}
              <a target="_blank" className={s.red} href="https://redux.js.org/">
                Redux
              </a>
              ,
              <a
                target="_blank"
                className={s.rt}
                href="https://redux-toolkit.js.org/"
              >
                {" "}
                Redux-Toolkit
              </a>{" "}
              <Link className={s.co} to="/counter">
                (стандартный счетчик на тулките)
              </Link>
              ,
              <a target="_blank" className={s.git} href="https://git-scm.com/">
                {" "}
                Git
              </a>
              ,{" "}
              <a target="_blank" className={s.nd} href="https://nodejs.org/ru">
                Node JS
              </a>
              ,{" "}
              <a
                target="_blank"
                className={s.boot}
                href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
              >
                Bootstrap
              </a>
              ,{" "}
              <a target="_blank" className={s.sc} href="https://sass-scss.ru/">
                SCSS
              </a>
              ,{" "}
              <a
                target="_blank"
                className={s.tail}
                href="https://tailwindcss.com/"
              >
                Tailwind CSS
              </a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
