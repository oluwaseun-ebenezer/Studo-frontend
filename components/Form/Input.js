const Input = ({ type, name, style, placeholder, value, onChangeAction }) => {
  return (
    <input
      name={name}
      type={type}
      className={style}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChangeAction(e.target.value)}
    />
  );
};

export default Input;
