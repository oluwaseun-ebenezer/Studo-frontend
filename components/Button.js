const Button = ({ title, style, action }) => {
  return (
    <button className={style} onClick={action}>
      {title}
    </button>
  );
};

export default Button;
