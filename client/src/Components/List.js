import React, { useEffect, useState } from "react";

function List({ onClick }) {
  const [todoList, setTodoList] = useState([]);

  const getList = async () => {
    try {
      const response = await fetch("http://localhost:7000/todo");
      const jsonData = await response.json();

      setTodoList(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:7000/todo/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      setTodoList(todoList.filter((val) => val.todo_id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  });

  return (
    <table className="tableList">
      <thead>
        <tr>
          <th>ToDo</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((val) => {
          return (
            <tr key={val.todo_id}>
              <td className="titleList">{val.description}</td>
              <td className="optionBtn">
                <button onClick={() => onClick(val)}>Edit</button>
                <button
                  onClick={() => {
                    deleteTodo(val.todo_id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default List;
