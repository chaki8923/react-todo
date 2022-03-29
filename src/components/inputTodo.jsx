import React from "react";

export const InputTodo = (props) => {
  const { onChangeTodoText, todoText, addTodoText, limit_flg } = props;

  const style = {
    background: "orchid",
    padding: "24px",
    marginBottom: "16px"
  };
  return (
    <>
      <div style={style}>
        <input
          type="text"
          placeholder="TODOを入力"
          onChange={onChangeTodoText}
          value={todoText}
          disabled={limit_flg}
        />
        <button disabled={limit_flg} onClick={addTodoText}>
          追加
        </button>
        <p className="error">{limit_flg && "上限オーバーです"}</p>
      </div>
    </>
  );
};
