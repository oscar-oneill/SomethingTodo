import React from 'react'
import { Link } from 'react-router-dom';
import { todo } from '../Styles/styles'

const Todos = ({name, status, date, description, id}) => {

    const themeSetter = () => {
        if (status === 'Complete') {
            return '#D2FFD2'
        }

        if (status === 'Queued') {
            return '#DED9FB'
        }

        if (status === 'In Progress') {
            return '#74C9FF'
        }
    }

    return (
        <div style={{            
            margin: 15,
            padding: 10,
            borderRadius: 5,
            height: 180,
            width: 350,
            background: themeSetter()
        }}>
          <p style={todo.name}>{name}</p>
          <div>
            <span style={todo.status}>{status}</span>
            <span>Due Date: {new Date(date).toLocaleDateString()}</span>
          </div>
          <p style={todo.description}>{description}</p>
          <Link to={`/item-edit/${id}`}>
              <span style={todo.updateButton}>Update</span>
          </Link>
        </div>
    )
}

export default Todos
