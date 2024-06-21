import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      settodos(todos)
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleEdit = (e, id) => {
    let t = todos.filter((i) => i.id === id);
    settodo(t[0].todo);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newTodos);
    saveToLS();
  };

  const handleDelete = (e, id) => {
    console.log(id);
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newTodos);
    saveToLS();
  };

  const handleAdd = () => {
    todo.length != 0 &&
      settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
    saveToLS();
  }; 

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container m-5 w-[95%] rounded-xl p-5 bg-orange-300">
        <div className="addTodo my-5 mx-16 mb-10 border-b pb-10 border-black">
          <h1 className="text-2xl font-bold mb-2">Add a Todo</h1>
          <input
            onChange={handleChange}
            type="text"
            name=""
            value={todo}
            className="w-80 rounded-sm p-1"
          />
          <button
            onClick={handleAdd}
            className="bg-orange-600 p-2 py-1 font-bold text-white rounded-md mx-5"
          >
            Save
          </button>
        </div>
        <div className="todos my-5 mx-16">
          <h1 className="font-bold text-2xl underline">Your Todo</h1>
          {todos.length == 0 && <div className="m-3">No todo to display</div>}
          {todos.map((todo) => {
            return (
              <div
                className="todo flex w-1/4 my-3 justify-between"
                key={todo.id}
              >
                <div className={todo.isCompleted ? "line-through" : ""}>
                  {todo.todo}
                </div>
                <div className="buttons flex h-full">
                  <button
                    onClick={(e) => handleEdit(e, todo.id)}
                    className="bg-orange-600 p-2 py-1 font-bold text-white rounded-md  mx-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, todo.id)}
                    className="bg-orange-600 p-2 py-1 font-bold text-white rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
