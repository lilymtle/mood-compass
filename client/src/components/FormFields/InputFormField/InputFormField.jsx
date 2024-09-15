import "./InputFormField.scss";

export function InputFormField({ className, type, value, placeholder, onChange }) {
    return (
        <input
        className={className}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange} />
    )
};