const Input = ({ label, type = "text", placeholder, value, onChange }) => {
  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
