import { useState } from "react";

const calculateColor = length => {
    if (length < 9) {
        return "red"; // if less than 9 then red
    }

    if (length < 16) {
        return "orange"; // if less than 16 then orange
    }

    return "green"; // otherwise green
};

const calculateStyle = length => {
    // no styling (empty object) if empty
    // otherwise work out colour with length
    return length === 0 ? {} : {
        background: calculateColor(length)
    };
};

const PasswordStrength = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => setValue(e.currentTarget.value);

    return (
        <div className="form-group mt-4">
            <input
                style={ calculateStyle(value.length) }
                className="form-control"
                onChange={ handleChange }
                value={ value }
            />
        </div>
    );
}

export default PasswordStrength;