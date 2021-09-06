import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {


    // States
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])

    useEffect(() => {
        filterHandler()
    }, [todos,status])
    // Functions
    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(
                    todos.filter((todo) => todo.completed === true)
                )
                break
            case 'uncompleted':
                setFilteredTodos(
                    todos.filter((todo) => todo.completed === false)
                )
                break
            default:
                setFilteredTodos(todos)
                break
        }
    }


  



    return (
        <div className="App">
            <header>Todo Application</header>
            <div className="wrapper">
                <Form
                    inputText={inputText}
                    setInputText={setInputText}
                    todos={todos}
                    setTodos={setTodos}
                    setStatus={setStatus}
                />
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    filteredTodos={filteredTodos}
                />
            </div>
        </div>
    )
}

export default App
