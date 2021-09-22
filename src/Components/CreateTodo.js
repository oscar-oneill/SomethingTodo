import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from '../graphql/mutations'
import { styles, create, banner, empty } from '../Styles/styles'

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const CreateTodo = () => {
    const initialState = { name: '', description: '',  status: '', dueDate: '', itemType: 'Task', dateType: 'Date', nameType: 'Todo' }

    const [formState, setFormState] = useState(initialState)
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')
    const [error, setError] = useState('')
    const [value, setValue] = useState(null);

    const setInput = (key, value) => {
        setFormState({ ...formState, [key]: value })
    }

    const addTodo = async () => {
        try {
            if (!formState.name || !formState.description) return
                const todo = { ...formState }
                setTodos([...todos, todo])
                setFormState(initialState)
                setValue(null)
                const data = await API.graphql(graphqlOperation(createTodo, {input: todo}))
                setTask(data.data.createTodo.name)
            } catch (err) {
                console.log('error creating todo:', err)
                setError(err)
        }
    }

    return (
        <div style={create.container}>
            <div style={styles.container}>
                <span style={{fontSize: "30px", marginBottom: "20px"}}>Create SomethingTodo</span>
                <input
                    onChange={e => setInput('name', e.target.value.toLowerCase())}
                    style={styles.name}
                    value={formState.name}
                    placeholder="Name"
                    required
                />

                <input
                    onChange={e => setInput('description', e.target.value)}
                    style={styles.input}
                    value={formState.description}
                    placeholder="Description"
                    required
                />

                <label>Status:</label>
                <select
                    value={formState.status}
                    onChange={e => setInput('status', e.target.value)}
                    style={styles.input}
                    required
                >
                    <option disabled defaultValue value="">Select Task Status</option>
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
                            setInput('dueDate', newValue); 
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                <br/>
                <button style={styles.button} onClick={addTodo}>Create Todo</button>
            </div>

            <div style={(task || error) ? banner : empty}>
                {task ? "You now have AnotherThingTodo!" :  error ? "Error creating todo" : ""}
            </div>
        </div>
    )
}

export default CreateTodo
