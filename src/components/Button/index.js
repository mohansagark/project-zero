import "./styles.scss";

const Button = (props) => {
  const { title, clickMethod, disabled } = props;

  return (
    <div
      className={disabled ? "buttonContainer disabled" : "buttonContainer"}
      onClick={clickMethod}
    >
      <span>{title}</span>
    </div>
  );
};

Button.defaultProps = {
  title: "Button",
  clickMethod: () => {},
  disabled: false,
};

export default Button;
