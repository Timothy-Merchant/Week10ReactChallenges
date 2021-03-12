const Input = ({ label, value, onChange }) => (
    <div className="form-group">
        <label>{ label }</label>
        <input className="form-control" value={ value } onChange={ onChange } />
    </div>
);

export default Input;