import React, { useState } from "react";
import './app.css'
const Todos = () => {
  const [todos, setTodos] = useState([]);
  
  const [todo, setTodo] = useState("");

  const [comment, setComment] = useState([]);

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
    <div className="container">
      <>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        ></input>
        <button className="addButton" onClick={addToDo}> Add Todo </button>
        <hr />
        Todo
        <ul className="todo">
          {todos.map(
            (todo, index) =>
              todo.completed === false && (
                <div  key={index}>
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
                 
                  <button onClick={() => deleteTodo(todo.id)}>
                    Delete Todo
                  </button>
                </div>
              )
          )}
        </ul>
        
        Completed
        {todos.map(
            (todo, index) =>
   
        
              todo.completed === true && (
                <ul className="todo">
                <div  key={index}>
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
                 
                  <button onClick={() => deleteTodo(todo.id)}>
                    Delete Todo
                  </button>
                </div>
                </ul>
              )
        
       
          )}
      </>
      <hr/>
      < >
        {commentLis.opened && (
          <ul className="comment-detailist">
            {todos.map(
              (todo, index) =>
                todo.id === commentLis.toDoId && (
                  <h2 key={index}>{todo.text}</h2>
                )
            )}
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
                    id: Math.random(),
                    text: commentInput,
                    completed: false,
                  },
                ]);
                setCommentInput("");
              }}
            >
              Add Comment
            </button>
            

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
      
        {commentLis.opened && (
          <ul className="comment-detailist">
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
      </>
    </div>
  );
};

export default Todos;
