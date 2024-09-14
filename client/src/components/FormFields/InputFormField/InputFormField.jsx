import "./InputFormField.scss";

export function InputFormField({ className, type, placeholder, onChange }) {
    return (
        <input
        className={className}
        type={type}
        placeholder={placeholder} />
    )
};