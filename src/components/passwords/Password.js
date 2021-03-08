const Password = ({ label, handleChange, color}) => {

    return (
        <>
            <label>{label}</label>
            <br></br>
            <input onChange={handleChange} style={{
                borderColor: color
            }}></input>
        </>
    )

}

export default Password;