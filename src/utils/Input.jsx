import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

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
  name,
  inputError,
}) {
  return (
    <div className={className}>
      <label className={labelClass} htmlFor={id}>
        {label}
        {asterisk && <span className="text-red-500">*</span>}
      </label>
      <input
        className={inputClass}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={initialValue}
      />
      {value === inputError && (
        <div className="flex gap-1">
          <ExclamationCircleIcon className="h-6 w-6 text-red-500" />
          <p className="text-red-500 tracking-tighter text-base">
            please input your {name}
          </p>
        </div>
      )}
    </div>
  );
}
