interface Props {
  onClick: () => void;
  text: string;
  disabled: boolean;
}

const Button = ({ onClick, text, disabled }: Props) => {
  return (
    <button
      className="btn btn-active btn-primary p-4 m-2"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
