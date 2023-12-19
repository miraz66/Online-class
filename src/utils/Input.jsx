export default function Input({
  type,
  placeholder,
  initialValue, // Add a prop for the initial value
  id,
  label,
  className,
  labelClass,
  inputClass,
  value,
  asterisk,
}) {
  return (
    <div className={className}>
      <label className={labelClass} htmlFor={id}>
        {label}
        {asterisk && <span className="text-red-500">*</span>}
      </label>
      <input
        className={inputClass}
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={(e) => initialValue(e.target.value)}
      />
      {!value && "hello"}
      {!value && "hello"}
      {!value && "hello"}
      {!value && "hello"}
      {!value && "hello"}
      {!value && "hello"}
      {!value && "hello"}
      {!value && "hello"}
      {!value && "hello"}
      {!value && "hello"}
      {!value && "hello"}
      {!value && "hello"}
      {!value && "hello"}
      {!value && "hello"}
    </div>
  );
}
