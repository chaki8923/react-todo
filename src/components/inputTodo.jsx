import React from "react";

export const InputTodo = (props) => {
  const { onChangeTodoText, todoText, addTodoText } = props;
  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          onChange={onChangeTodoText}
          value={todoText}
        />
        <button onClick={addTodoText}>追加</button>
      </div>
    </>
  );
};
