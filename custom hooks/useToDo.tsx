import { useEffect, useState } from "react"
import ToDoType from "../types/toDoType"
import firestore from '@react-native-firebase/firestore';



const UseToDo = () => {



    const [userInput, setUserInput] = useState("")
    const [userToDo, setUserToDo] = useState<ToDoType[]>([])


    const addedToDo: ToDoType = {
        toDoItem: userInput
    }

    const getTodos = async () => {
        try {
            const toDoFirebase = await firestore().collection('todos').get();
            console.log(toDoFirebase.docs);
            
            
            
        } catch (error) {
            console.log(error);
            
            
        }
    }

    useEffect(()=>{getTodos()},[])

    const onPressHandler = () => {
        
        try {

            firestore()
                .collection('todos')
                .add({
                    toDoItem: userInput,
                    
                })
                .then((docref) => {
                    console.log('User added!');
                    console.log(docref.id);
                    
                });




        } catch (error) {
            console.log(error);


        }
    }



    const onDelHandler = (index: number) => {
        const filtered = userToDo.filter((val, ind) => index != ind)
        setUserToDo(filtered)
    }




    return {
        onPressHandler, userInput, setUserInput, userToDo, onDelHandler
    }
}


export default UseToDo