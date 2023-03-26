import { Button, ScrollView, Text, TextInput, View } from "react-native"
import UseToDo from "../custom hooks/useToDo"

const ToDoApp = () => {

    const {onPressHandler, userInput, setUserInput, userToDo} = UseToDo()

   
        
    

    return (
        <View>
           
                <TextInput style={{borderColor:"black", borderWidth:2 }} placeholder="write here" defaultValue={userInput}
                onChangeText={text=>setUserInput(text)}/>
                <Button onPress={onPressHandler} title="add"/> 

             {userToDo.map((item)=>{
                return (
                    <Text>  {item.toDoItem} </Text>
                )
               })} 
             

        </View>
        

    )
}

export default ToDoApp