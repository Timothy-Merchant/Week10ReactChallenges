import { useState } from "react"

const TempConverter = () => {

    let [celsius, setCelsius] = useState(0);
    let [fahrenheit, setFahrenheit] = useState(0);

    let handleCelsius = (e) => {
        let value = +e.currentTarget.value;
        setCelsius(`${value}`);
        setFahrenheit((value * (9 / 5) + 32).toFixed(2));
    }

    let handleFahrenheit = (e) => {
        let value = +e.currentTarget.value;
        setFahrenheit(`${value}`);
        setCelsius((value * (9 / 5) - 32).toFixed(2));
    }

    return (
        <>
            <h3>Temp Converter</h3>
            <p>°C</p>
            <input type="number" value={celsius} onChange={handleCelsius}></input>
            <p>°F</p>
            <input type="number" value={fahrenheit} onChange={handleFahrenheit}></input>
        </>
    );

}

export default TempConverter