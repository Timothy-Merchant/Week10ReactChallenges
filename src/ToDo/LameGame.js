import { useState, useReducer } from "react";
import { CardColumns } from "react-bootstrap";
import reducer from "./reducer";

const initialState = {
    nowButtonVisible: false,
};

// component
const LameGame = ({ aim }) => {

    const [value, dispatch] = useReducer(reducer, initialState);

    const [input, setInput] = useState("");

    const handleClick = (e) => {

    }

    return (
        <div className="card" style={
            {
                width: 300 + "px",
                height: 300 + "px",                                
            }
        }>
            <h1>Lame Game</h1>
            <button className="btn btn-lg btn-primary" onClick={() => handleClick()}>Start</button>
        </div>
    );
};

export default LameGame;