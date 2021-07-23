import React from 'react';

const Todos = ({todos, deleteToDo}) => {
    var todoList
    if(todos.length <1){
        todoList =  <p className="center ">You have nothing to do!!!!</p>
    }
    else{
        todoList = todos.map(todo => {
            return (
            <div className="center collection-item black" key={todo.id}>
                {todo.content}
                <span onClick={() => {deleteToDo(todo.id)}}><i className="material-icons cyan-text right">delete</i></span>
            </div>
            )
        })
    }
return (
    <div className="todos collection">
    {todoList}
    </div>
)
}

export default Todos;