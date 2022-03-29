import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { CompleteTodo } from "./components/completeTodo";
import { InCompleteTodo } from "./components/inCompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  //Todo追加処理
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const addTodoText = () => {
    if (todoText === "") return;

    setTodoText("");
    setIncompleteTodos([...incompleteTodos, todoText]);
  };

  //削除処理
  const onClickDelete = (index, todo) => {
    const newTodos = [...todo];
    newTodos.splice(index, 1);

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
    setIncompleteTodos(newTodos);
    onClickDelete(index, completeTodos);
  };

  return (
    <>
      <InputTodo
        addTodoText={addTodoText}
        onChangeTodoText={onChangeTodoText}
        todoText={todoText}
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
