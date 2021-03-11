import { useState } from 'react'

const List = () => {

    let [list, setList] = useState([]);
    let [item, setItem] = useState("");

    let handleInput = (e) => {
        setItem(e.currentTarget.value);
    }

    let handleClick = (e) => {
        if (item !== "") {
            list.push(item);
            setList(list);
            setItem("");
        }
    }

    return (
        <>
            <ul>
                {list.length > 0 ? list.map((value, index) => {
                    return <li key={index}>{value}</li>
                }) : null}
            </ul>
            <input onChange={handleInput} value={item}></input>
            <button onClick={handleClick}>Add</button>
        </>
    )

}

export default List