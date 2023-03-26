import { useState } from "react"
import { View } from "react-native/types"


const UseCounter = () => {

    const [userInput, setUserInput] = useState("")
    const [count, setCount] = useState(0)

    const incr = () =>setCount( count+1)
    const decr = () => setCount(count-1)
    
    


    return {
                setUserInput, userInput, incr, count,decr
    }
}

export default UseCounter