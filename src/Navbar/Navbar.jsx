import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "../pages/About/About";
import Counter from "../pages/Counter/Counter";
import Contact from "../pages/Contact/Contact";
import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={s.body}>
      <div className={s.db}>
        <div className={s.a}>
          <Link className={s.ab} to="/">Обо мне</Link>
          <Link className={s.con} to="/contact">Мои контакты</Link>
        </div>
        <Routes>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default Navbar;
