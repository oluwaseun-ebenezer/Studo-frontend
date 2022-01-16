const TextArea = ({ name, rows, style, value, onChangeAction }) => {
  return (
    <textarea
      name={name}
      rows={rows}
      className={style}
      value={value}
      onChange={(e) => onChangeAction(e.target.value)}
    />
  );
};

export default TextArea;
