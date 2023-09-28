import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "kod yaz", completed: false },
    { id: 2, text: "kahve iç", completed: false },
    { id: 3, text: "kahvaltı yap", completed: true },
  ]);
  const [todo, setTodo] = useState("");

  const [comment, setComment] = useState([
    { to: 2, id: 1, text: "com1", completed: false },
    { to: 1, id: 2, text: "com2", completed: false },
    { to: 1, id: 3, text: "com3", completed: false },
    { to: 2, id: 4, text: "com1", completed: false },
  ]);
  const [commentInput, setCommentInput] = useState("");
  // const [commentInput, setCommentInput] = useState("");
  const [commentLis, setCommentList] = useState({ opened: false, toDoId: 0 });
  const addToDo = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: todo, completed: false },
    ]);
    setTodo("");
  };
  const deleteTodo = (id) => {
    const ubdateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(ubdateTodos);
  };

  const checkTodo = (id) => {
    //uzun yol
    //  const ubdateTodo=todos.map((todo)=>{
    //   if(todo.id===id)
    //   {
    //     return{...todo,completed:!todo.completed}
    //   }
    //   else return todo;
    //  })
    //   setTodos(ubdateTodo);

    //kısa yol
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteComment = (id) => {
    const ubdateComment = comment.filter((com) => com.id !== id);
    setComment(ubdateComment);
  };
  const checkComment = (id) => {
    setComment(
      comment.map((com) =>
        com.id === id ? { ...com, completed: !com.completed } : com
      )
    );
  };
  console.log(comment);
  return (
    <>
      <>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        ></input>
        <button onClick={addToDo}> Add Todo </button>
        <hr />
        Todo
        <ul>
          {todos.map(
            (todo, index) =>
              todo.completed === false && (
                <li key={index}>
                  <input
                    type="checkbox"
                    onChange={() => checkTodo(todo.id)}
                    checked={todo.completed}
                  />
                  {todo.text}
                  <button
                    onClick={() =>
                      setCommentList({
                        opened: !commentLis.opened,
                        toDoId: todo.id,
                      })
                    }
                  >
                    comment detail
                  </button>
                  <button onClick={() => deleteTodo(todo.id)}>sil</button>
                </li>
              )
          )}
        </ul>
        <hr />
        Completed
        <ul>
          {todos.map(
            (todo, index) =>
              todo.completed === true && (
                <li key={index}>
                  <input
                    type="checkbox"
                    onChange={() => checkTodo(todo.id)}
                    checked={todo.completed}
                  />
                  {todo.text}
                  <button onClick={() => deleteTodo(todo.id)}>sil</button>
                </li>
              )
          )}
        </ul>
      </>
      <div style={{ background: "pink", width: "100%" }}>
        {commentLis.opened && (
          <ul>
            <input
              onChange={(e) => setCommentInput(e.target.value)}
              type="text"
            ></input>
            <button
              onClick={() =>{setCommentInput("")
                setComment([
                  ...comment,
                  {
                    to: commentLis.toDoId,
                    id: comment.length + 1,
                    text: commentInput,
                    completed: false,
                  },
                ])}
              }
            >
              Add Comment
            </button>
            {todos.map(
              (todo, index) =>
                todo.id === commentLis.toDoId && (
                  <h2 key={index}>{todo.text}</h2>
                )
            )}

            {commentLis.opened &&
              comment.map((com, index) => {
                if (com.to === commentLis.toDoId && com.completed === false) {
                  return (
                    <li key={index}>
                      <input
                        onChange={() => checkComment(com.id)}
                        value={commentInput}
                        type="checkbox"
                      />
                    {com.text}
                      <button onClick={() => deleteComment(com.id)}>sil</button>
                    </li>
                  );
                }
                return null;
              })}
          </ul>
        )}
        <hr />
        {commentLis.opened && (
          <ul>
           
            {commentLis.opened &&
              comment.map((com, index) => {
                if (com.to === commentLis.toDoId && com.completed === true) {
                  return (
                    <li key={index}>
                      <input
                        onChange={() => checkComment(com.id)}
                        checked={com.completed}
                        type="checkbox"
                      />
                      {com.text}
                      <button onClick={() => deleteComment(com.id)}>sil</button>
                    </li>
                  );
                }
                return null;
              })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Todos;
