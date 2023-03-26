import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import UseCounter from "../custom hooks/useCounter"


const CounterApp = () => {

    const {setUserInput, userInput, incr, count, decr} = UseCounter()

    return (
        <View style={{alignItems:"center"}}>
                <TextInput value={userInput} onChangeText={setUserInput}/> 
             <Text>
             {count}    
              </Text>   

              <Button title="Increment" onPress={incr} />
        <Button title="Decrement" onPress={decr} />
       
               
        </View>
    )
}


const styles = StyleSheet.create ({
    button: {
        borderRadius:20
    }
})


export default CounterApp