import React, { useState } from "react";
import "../styles.css";

const TodoCpomponent = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isEdit, setIsEdit] = useState(null);

  const onChangeText = (e) => {
    const { value } = e.target;
    setInputText(value);
  };

  const addTask = () => {
    const task = {
      title: inputText,
      isCommplete: false,
    };
    setTodoList([...todoList, task]);
    setInputText("");
  };

  const makeAsComplete = (index) => {
    const temp = todoList;
    temp[index].isCommplete = !temp[index].isCommplete;
    setTodoList([...temp]);
  };

  const editTask = (e, index) => {
    const { value } = e.target;
    console.log(value);
    const temp = todoList;
    temp[index].title = value;
    setTodoList([...temp]);
  };

  const updateTask = () => {
    setIsEdit(null);
  };

  return (
    <div>
      <div className="header">ToDo App</div>
      <div className="addContainer">
        <input
          type="text"
          value={inputText}
          onChange={(e) => onChangeText(e)}
          className="input"
        />
        <button className="addButton" onClick={() => addTask()}>
          Add Task
        </button>
      </div>
      <div className="listContiner">
        {todoList.map((task, index) => {
          return (
            <div className="list">
              <div
                style={{
                  height: "15px",
                  width: "15px",
                  border: "1px green solid",
                  margin: "5px",
                  borderRadius: "50%",
                  background: task.isCommplete ? "green" : "white",
                }}
                onClick={() => makeAsComplete(index)}
              ></div>
              {isEdit === index ? (
                <input
                  value={task.title}
                  onChange={(e) => editTask(e, index)}
                  onBlur={() => updateTask()}
                />
              ) : (
                <div
                  style={{
                    margin: "5px",
                    textDecoration: task.isCommplete && "line-through",
                  }}
                  onDoubleClick={() => setIsEdit(index)}
                >
                  {task.title}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoCpomponent;


// //css 
// .App {
//   font-family: sans-serif;
//   text-align: center;
//   display: flex;
//   flex: 1;
//   justify-content: center;
// }

// .header {
//   font-size: 19px;
//   font-weight: 700;
//   padding: 20px;
// }

// .addContainer {
//   display: flex;
//   width: 300px;
//   align-self: center;
//   padding: 10px;
//   justify-content: space-between;
// }

// .input {
//   height: 24px;
//   width: 170px;
// }

// .list {
//   display: flex;
//   flex: 1;
//   margin-left: 10px;
//   justify-content: ;
//   flex-direction: row;
// }
