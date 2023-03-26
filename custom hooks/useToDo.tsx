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
    }

   

    return {
        onPressHandler, userInput, setUserInput, userToDo
    }
}


export default UseToDo