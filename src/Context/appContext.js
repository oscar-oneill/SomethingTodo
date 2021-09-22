import { useState, createContext } from 'react'

export const AppContext = createContext({});

export const AppContextProvider = props => {
    const initialState = { name: '', description: '',  status: '', dueDate: '', itemType: 'Task', dateType: 'Date', nameType: 'Todo' }

    const [formState, setFormState] = useState(initialState)
    const [todos, setTodos] = useState([])

    return (
        <AppContext.Provider value={{todos, setTodos, formState, setFormState, initialState}}>
            {props.children}
        </AppContext.Provider>
    )
}
