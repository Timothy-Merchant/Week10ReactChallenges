import { useState } from "react"

const PasswordStrength = () => {


    let [color, setColor] = useState(null);

    const validatePassword = (e) => setColor(
        e.currentTarget.value.length === 0 ? null :
            e.currentTarget.value.length < 9 ? "red" :
                e.currentTarget.value.length < 16 ? "orange" : "green"
    );



    return (
        <>
            <h3>Password Strength</h3>
            <input onChange={validatePassword} type="password" style={{
                backgroundColor: color
            }}></input>
        </>
    )

}

export default PasswordStrength