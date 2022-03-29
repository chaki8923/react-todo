import React from "react";

export const InCompleteTodo = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <>
      <div className="incomplete-area">
        <p>未完了</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={index} className="list-row">
                <span className="list-show">{todo}</span>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index, incompleteTodos)}>
                  削除
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
