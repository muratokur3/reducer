import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "daha çok kod yaz", completed: false },
    { id: 2, text: "kod yaz", completed: false },
    { id: 3, text: "kahve iç", completed: false },
    { id: 4, text: "kahvaltı yap", completed: false },
  ]);

  const [todo, setTodo] = useState("");

  const [comment, setComment] = useState([
    { to: 1, id: 1, text: "ara vermeden devamke", completed: false },
    { to: 2, id: 2, text: "hemen klavyeye sarıl durmadan kodla", completed: false },
    { to: 2, id: 3, text: "vs code aç", completed: false },
    { to: 3, id: 4, text: "Güzel demlemen yeterli", completed: false },
    { to: 4, id: 5, text: "Afiyet olsun", completed: false },
    { to: 4, id: 6, text: "Kahvaltıyı masaya diz", completed: false },
    { to: 4, id: 7, text: "Çay demle", completed: false },
  ]);
  const [commentInput, setCommentInput] = useState("");
  // const [commentInput, setCommentInput] = useState("");
  const [commentLis, setCommentList] = useState({ opened: false, toDoId: 0 });
  const addToDo = () => {
    setTodos([
      ...todos,
      { id: Math.random(), text: todo, completed: false },
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
                <div key={index}>
                  <li>
                    <input
                      type="checkbox"
                      onChange={() => checkTodo(todo.id)}
                      checked={todo.completed}
                    />
                   {todo.text}
                  </li>
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
                  <button>Edit Todo</button>
                  <button onClick={() => deleteTodo(todo.id)}>
                    Delete Todo
                  </button>
                </div>
              )
          )}
        </ul>
        <hr />
        Completed
        <ul>
          {todos.map(
            (todo, index) =>
              todo.completed === true && (
                <div key={index}>
                  <li>
                    <input
                      type="checkbox"
                      onChange={() => checkTodo(todo.id)}
                      checked={todo.completed}
                    />
                    {todo.text}
                  </li>
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
                  <button>Edit Todo</button>
                  <button onClick={() => deleteTodo(todo.id)}>
                    Delete Todo
                  </button>
                </div>
              )
          )}
        </ul>
      </>
      <div>
        {commentLis.opened && (
          <ul>
            <input
              onChange={(e) => setCommentInput(e.target.value)}
              type="text"
            ></input>
            <button
              onClick={() => {
                
                setComment([
                  ...comment,
                  {
                    to: commentLis.toDoId,
                    id: comment.length + 1,
                    text: commentInput,
                    completed: false,
                  },
                ]);
                setCommentInput("");
              }}
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
                    <div>
                      <li key={index}>
                        <input
                          onChange={() => checkComment(com.id)}
                          checked={com.completed}
                          type="checkbox"
                        />
                        {com.text}
                      </li>
                      <button>Edit Comment</button>
                      <button onClick={() => deleteComment(com.id)}>
                        Delete Comment
                      </button>
                    </div>
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
                    <div>
                      <li key={index}>
                        <input
                          onChange={() => checkComment(com.id)}
                          checked={com.completed}
                          type="checkbox"
                        />
                        {com.text}
                      </li>
                      <button>Edit Comment</button>
                      <button onClick={() => deleteComment(com.id)}>
                        Delete Comment
                      </button>
                    </div>
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
