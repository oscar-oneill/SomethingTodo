import React, { useState, useEffect } from 'react'
import Todos from './Todos'
import { API, graphqlOperation } from 'aws-amplify'
import { listTodos, todosByStatus, todosByDueDate, todosByName } from '../graphql/queries'
import { todoList, sort } from '../Styles/styles'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        try {
            const todoData = await API.graphql(graphqlOperation(listTodos))
            const todos = todoData.data.listTodos.items
            setTodos(todos)
        } catch (err) { console.log('error fetching todos') }
    }

    const sortName = async () => {
        try {
            const todoData = await API.graphql(graphqlOperation(todosByName, { nameType: "Todo", sortDirection: "ASC" }));
            const todos = todoData.data.todosByName.items
            console.log(todos)
            setTodos(todos)
        } catch (err) {
            console.log('error sorting by name:', err)
        }
    }

    const sortDate = async () => {
        try {
            const todoData = await API.graphql(graphqlOperation(todosByDueDate, { dateType: "Date", sortDirection: "ASC" }));
            const todos = todoData.data.todosByDueDate.items
            console.log(todos)
            setTodos(todos)
        } catch (err) {
            console.log('error sorting by date:', err)
        }
    }

    const sortStatus = async () => {
        try {
            const todoData = await API.graphql(graphqlOperation(todosByStatus, { itemType: "Task", sortDirection: "ASC" }));
            const todos = todoData.data.todosByStatus.items
            console.log(todos)
        setTodos(todos)
        } catch (err) {
            console.log('error sorting by status:', err)
        }
    }

    return (
        <div style={todoList.container}>
            <h1>A List of ThingsTodo</h1>
            
            <div>
                <ul style={sort.ul}>
                    <li style={sort.li} onClick={sortName}>Sort by Name</li>
                    <li style={sort.li} onClick={sortDate}>Sort by Due Date</li>
                    <li style={sort.li} onClick={sortStatus}>Sort by Status</li>
                </ul>
            </div>

            <div style={todoList.list}>
                {todos.map((todo, index) => (
                    <Todos
                        key={todo.id ? todo.id : index}
                        id={todo.id}
                        name={todo.name}
                        status={todo.status}
                        date={todo.dueDate}
                        description={todo.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList
