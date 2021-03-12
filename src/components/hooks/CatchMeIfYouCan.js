import { useState } from "react"


const CatchMeIfYouCan = ({ jump }) => {

    const [top, setTop] = useState(0);

    const handleClick = () => setTop(top + jump);

    return (
        <>
            <h3>CatchMeIfYouCan</h3>
            <button style={{ position: "relative", top: top }} onClick={handleClick}>Click Me</button>
        </>
    );
}

export default CatchMeIfYouCan