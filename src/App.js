import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Components/Navigation'
import Amplify from 'aws-amplify'
import awsExports from "./aws-exports";
import { withAuthenticator } from '@aws-amplify/ui-react'
import CreateTodo from './Components/CreateTodo';
import TodoList from './Components/TodoList';
import EditTodo from './Components/EditTodo';
Amplify.configure(awsExports);

const App = () => {
  return (
    <>
      <Navigation/>
      <Router>
        <Route exact path="/" component={CreateTodo}/>
        <Route path="/items" component={TodoList}/>
        <Route path="/item-edit/:id" component={EditTodo}/>
      </Router>
    </>
  )
}

export default withAuthenticator(App)
