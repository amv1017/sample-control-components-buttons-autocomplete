import { IButton } from "../interface/IButton";

const Button = ({ text, onClick, enabled = true }: IButton) => (
  <button onClick={onClick} disabled={!enabled}>
    {text}
  </button>
);

export default Button;
