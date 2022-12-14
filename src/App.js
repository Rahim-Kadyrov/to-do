import { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm';
function App() {
  const [todos, seTodos] = useState([]) 
  
  const addTask = function(userInput){
    if (userInput) {
      const newItem={
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      seTodos([...todos, newItem])
    }

  }

  const removeTask = (id) => {
    seTodos([...todos.filter((todo) => todo.id !== id)])

  }

  const handlerToggle = (id) => {
    seTodos([
      ...todos.map((todo) =>
      todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
      )
    ])

  }
  return(
    <div className="App">
      <header>
        <h1>Количество задач № {todos.length}</h1>
      </header>
      <ToDoForm 
      addTask={addTask}
      />
      {todos.map(todo =>{
        return(
          <ToDo
                key={todo.id}
                todo={todo} 
                removeTask={removeTask}
                handlerToggle={handlerToggle}
            />)
      })}
    </div>
  )
}

export default App;
