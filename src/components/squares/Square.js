const Square = ({ selected, color, handleClick }) => {

    const defaultStyle = "green";
    const selectedStyle = color;

    return (
        <div
            onClick={handleClick}
            style={{
                height: "200px",
                width: "200px",
                backgroundColor: selected ? defaultStyle : selectedStyle
            }}>
        </div>
    );

}

export default Square;