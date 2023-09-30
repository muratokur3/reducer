const initialState={
    todos:[
        {id:1,text:"todo1",completed:false},
        {id:2,text:"todo2",completed:true},
        {id:3,text:"todo3",completed:true}
         ],
    newTodo:"",
    details:[
        {id:1,todoId:1,text:"detail1",completed:false},
        {id:2,todoId:1,text:"detail2",completed:true},
        {id:3,todoId:2,text:"detail3",completed:true}
         ],
         newDetail:""
        };
export default initialState;