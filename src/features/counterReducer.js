import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("inc", (state, action) => {
      if (state.number === 6) {
        return alert("Пожалуй, на этом остановимся");
      }
      state.number += 1;
    })
    .addCase("dec", (state, action) => {
      if (state.number == 0) {
        return alert("А что минусовать то?");
      }
      state.number -= 1;
    })
    .addCase("def", (state, action) => {
      if (state.number === 0) {
        return alert("Нечего сбрасывать");
      }
      state.number = 0
    });
});
