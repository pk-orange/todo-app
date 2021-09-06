import React from 'react'
// import components
import Todo from './Todo'

const TodoList = ({ filteredTodos, setTodos, todos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo, index) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        setTodos={setTodos}
                        todos={todos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
