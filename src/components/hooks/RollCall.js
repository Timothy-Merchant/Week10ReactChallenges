import { useState } from "react"

const RollCall = ({ names }) => {

    let [name, setName] = useState(0)

    let nextName = () => setName(name < names.length - 1 ? name + 1 : 0)

    return (
        <>
            <h3>Roll call</h3>
            <p>{names[name]}</p>
            <button onClick={nextName}>Next Name</button>
        </>
    );

}

export default RollCall