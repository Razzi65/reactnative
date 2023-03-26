import { View, Text } from "react-native"
import CounterApp from "./components/counterApp"
// import { store } from './store/store'
import { Provider } from 'react-redux'
import ToDoApp from "./components/toDoApp"

const app = () => {

  return (
    <View>

      <ToDoApp/>


    </View>
 )
}

export default app