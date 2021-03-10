import { useState } from "react"


const CatchMeIfYouCan = ({ jump }) => {

    let [top, setTop] = useState(0);

    let handleClick = () => setTop(top + jump);

    return (
        <>
            <button style={{ position: "absolute", top: top }} onClick={handleClick}>Click Me</button>
        </>
    );
}

export default CatchMeIfYouCan