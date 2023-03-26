import { Button, TextInput, View } from "react-native"

const ToDoApp = () => {

    const onPressHandler = () => {
        console.log("hi");
        
    }

    return (
        <View>
                <TextInput style={{borderColor:"black", borderWidth:2 }} placeholder="write here"/>
                <Button onPress={onPressHandler} title="add"/>

        </View>

    )
}

export default ToDoApp