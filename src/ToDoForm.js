import { useState } from 'react'

function ToDoForm({addTask}) {
    const [userInput, setUserInput] = useState('')

   const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
   } 

    const handleSumbit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    const handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            handleSumbit()
        }
    }

      return  (  
      <form onSubmit={handleSumbit}>
      <input 
        value={userInput} 
        type = 'text'
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder='Введитк значение...'
        />
        <button>+</button>

        </form>
      )
      }


export default ToDoForm