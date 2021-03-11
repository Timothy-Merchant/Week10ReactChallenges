import { useReducer } from "react"
import reducer from "./reducer"

const initialState = {
    fahrenheit: 0,
    celsius: 0
}

const TempConverter2 = () => {

    const [{ fahrenheit, celsius }, dispatch] = useReducer(reducer, initialState)

    let handleCelsius = (e) => {
        dispatch({ type: "C_CHANGED", celsius: e.currentTarget.value })
    }

    let handleFahrenheit = (e) => {
        dispatch({ type: "F_CHANGED", fahrenheit: e.currentTarget.value })
    }

    return (
        <>
            <h3>Temp Converter 2</h3>
            <p>°C</p>
            <input type="number" value={celsius} onChange={handleCelsius}></input>
            <p>°F</p>
            <input type="number" value={fahrenheit} onChange={handleFahrenheit}></input>
        </>
    );

}

export default TempConverter2