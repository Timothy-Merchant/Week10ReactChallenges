const Input = ({ title, text }) => (
    <div className="list-group-item">
        <h4 className="list-group-item-header">{ title }</h4>
        <p className="list-group-item-text">{ text }</p>
    </div>
);

export default Input;