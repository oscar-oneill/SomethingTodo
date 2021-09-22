import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify'
import { getTodo } from '../graphql/queries'
import { updateTodo, deleteTodo } from '../graphql/mutations'
import { styles, create, banner, empty } from '../Styles/styles'

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const EditTodo = () => {
    const { id } = useParams()
    let history = useHistory();
    
    useEffect(() => {
        if (id) {
            singleTodo(id)
        }
    }, [id])

    const [todo, setTodo] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [task, setTask] = useState('')
    const [error, setError] = useState('')
    const [value, setValue] = useState('')

    const singleTodo = async (id) => {
        try {
            if (id) {
                const input = id
                const todoData = await API.graphql(graphqlOperation(getTodo, {id: input}))
                const todo = todoData.data.getTodo
                setTodo(todo)
                setName(todoData.data.getTodo.name)
                setDescription(todoData.data.getTodo.description)
                setStatus(todoData.data.getTodo.status)
                setValue(todoData.data.getTodo.dueDate)
            }
        } catch (err) { console.log('error fetching todo') }
    }

    const editTodo = async () => {
        const todoUpdate = { 
            id: id,
            name: name, 
            description: description,
            status: status,
            dueDate: value,
            itemType: 'Task',
            dateType: 'Date',
            nameType: 'Todo' 
        }

        try {
            const result = await API.graphql(graphqlOperation(updateTodo, {input: todoUpdate}));
            const updatedTodo = result.data.updateTodo;
            setTask(updatedTodo.name)
        } catch (err) { 
            console.log('action could not be completed:', err)
            setError(err)
        }
    }

    const removeTodo = async (id) => {
        try {
            const input = { id }
            const result = await API.graphql(graphqlOperation(deleteTodo, {input: input}));
            console.log(result)
            history.push("/items")
        } catch (err) { 
            console.log('action could not be completed:', err)
        }
    }

        return (
            <div style={create.container}>
                <div style={styles.container}>
                    <span style={{fontSize: "30px", marginBottom: "20px"}}>Update SomethingTodo</span>
                    <input
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value.toLowerCase())}
                        style={styles.name}
                        placeholder="Name"
                        type="text"
                        required
                    />

                    <input
                        defaultValue={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={styles.input}
                        placeholder="Description"
                        type="text"
                        required
                    />

                    <label>Status:</label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        style={styles.input}
                        required
                    >
                        <option disabled value="">Select Task Status</option>
                        <option value="Queued">Queued</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Complete">Complete</option>
                    </select>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Due Date"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue)
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <br/>
                    <button style={styles.button} onClick={(e) => editTodo(e)}>Update Todo</button>
                    <button style={styles.delete} onClick={(e) => removeTodo(id)}>Delete</button>
                </div>

                <div style={(task || error) ? banner : empty}>
                    {task ? "This todo has been updated!" :  error ? "Error updating todo" : ""}
                </div>
            </div>
        )
    

}

export default EditTodo
