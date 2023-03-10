import { Button, Text, TextInput, View } from "react-native"
import UseCounter from "../custom hooks/useCounter"


const CounterApp = () => {

    const {setUserInput, userInput} = UseCounter()

    return (
        <View>
                <TextInput value={userInput} onChangeText={setUserInput}/> 
             <Text>
             {userInput}     </Text>   
               
        </View>
    )
}

export default CounterApp