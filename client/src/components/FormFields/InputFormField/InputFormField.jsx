// styling applied in the component it will be imported into

export function InputFormField({ className, type, value, placeholder, onChange }) {
    return (
        <input
        className={className}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange} />
    );
};