import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClickReturn } = props;
  return (
    <>
      <div className="complete-area">
        <p>完了</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={index} className="list-row">
                <span className="list-show">{todo}</span>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
