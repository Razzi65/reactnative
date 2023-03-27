import { useState } from "react"
import ToDoType from "../types/toDoType"


const UseToDo = () => {

    const [userInput, setUserInput] = useState("")
    const [userToDo, setUserToDo] = useState<ToDoType[]>([])


    const addedToDo:ToDoType = {
        toDoItem:userInput
    }


    const onPressHandler = () => {
        setUserToDo([...userToDo, addedToDo])
        setUserInput("")
    }

    const onDelHandler = (index) => {
          const filtered = userToDo.filter((val, ind)=>index!=ind)  
          setUserToDo(filtered)
    }

    
   

    return {
        onPressHandler, userInput, setUserInput, userToDo, onDelHandler
    }
}


export default UseToDo