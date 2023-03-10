import { useState } from "react"
import { View } from "react-native/types"


const UseCounter = () => {

    const [userInput, setUserInput] = useState("")


    return {
                setUserInput, userInput
    }
}

export default UseCounter