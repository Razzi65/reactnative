import { Button, ScrollView, Text, TextInput, View } from "react-native"
import UseToDo from "../custom hooks/useToDo"

const ToDoApp = () => {

    const {onPressHandler, userInput, setUserInput, userToDo, onDelHandler} = UseToDo()

    return (
        <View>
            <TextInput style={{borderColor:"black", borderWidth:2 }} placeholder="write here" defaultValue={userInput}
                onChangeText={text=>setUserInput(text)} />
            <Button onPress={onPressHandler} title="add" />

            {userToDo.map((item, index)=>{
                return (
                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 4 }}>
                        <Text style={{ fontSize: 18 }}>{item.toDoItem}</Text>
                        <Button onPress={()=>onDelHandler(index)} title="Del" color="red" />
                    </View>
                )
            })}
        </View>
    )
}

export default ToDoApp
