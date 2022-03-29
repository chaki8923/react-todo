import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { CompleteTodo } from "./components/completeTodo";
import { InCompleteTodo } from "./components/inCompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [limit_flg, setLimiFlg] = useState(false);

  //Todo追加処理
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const addTodoText = () => {
    if (todoText === "") return;

    setTodoText("");
    const newTodos = [...incompleteTodos, todoText];
    if (newTodos.length > 5) {
      setLimiFlg(true);
      return;
    } else {
      setLimiFlg(false);
    }
    setIncompleteTodos(newTodos);
  };

  //削除処理
  const onClickDelete = (index, todo) => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    if (newTodos.length < 6) {
      setLimiFlg(false);
    }

    if (todo === incompleteTodos) {
      setIncompleteTodos(newTodos);
    } else {
      setCompleteTodos(newTodos);
    }
  };
  //完了処理
  const onClickComplete = (index) => {
    const newTodos = [...completeTodos, incompleteTodos[index]];

    setCompleteTodos(newTodos);
    onClickDelete(index, incompleteTodos);
  };

  //戻す処理
  const onClickReturn = (index) => {
    const newTodos = [...incompleteTodos, completeTodos[index]];
    if (newTodos.length > 5) {
      setLimiFlg(true);
      return;
    }
    setIncompleteTodos(newTodos);
    onClickDelete(index, completeTodos);
  };

  return (
    <>
      <InputTodo
        addTodoText={addTodoText}
        onChangeTodoText={onChangeTodoText}
        todoText={todoText}
        limit_flg={limit_flg}
      />
      <InCompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
};
