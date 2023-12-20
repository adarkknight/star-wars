interface Props {
  onClick: () => void;
  text: string;
}

const Button = ({ onClick, text }: Props) => {
  return (
    <button className="btn btn-active btn-primary p-4 m-2" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
