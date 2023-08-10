import React, { useState } from "react";
import s from "./Counter.module.scss";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const inc = () => {
    dispatch({ type: "inc" });
  };
  const dec = () => {
    dispatch({ type: "dec" });
  };
  const def = () => {
    dispatch({ type: "def" });
  };
  const number = useSelector((state) => state.number);

  return (
    <div className={s.content}>
      <div className={s.count}>Вы нажали {number} раз</div>
      <div className={s.btns}>
        <button onClick={inc}>+</button>
        <button onClick={def}>Сбросить</button>
        <button onClick={dec}>-</button>
        
      </div>
    </div>
  );
};

export default Counter;
