import { useState } from "react"

const ToggleText = ({ initial, alternate }) => {

    let [text, setText] = useState(initial);

    let onClick = () => setText(text === initial ? alternate : initial)

    return (
        <>
            <h3>ToggleText</h3>
            <p>{text}</p>
            <button onClick={onClick} >Toggle</button>
        </>
    );

}

export default ToggleText