const SelectInput = ({ style, options }) => {
  return (
    <select className={style}>
      {options.map((option, key) => (
        <option key={key} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};
export default SelectInput;
