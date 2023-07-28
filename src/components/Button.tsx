export interface IButton {
  text: string;
  onClick(): void;
  enabled?: boolean;
}

const Button = ({ text, onClick, enabled = true }: IButton) => (
  <button onClick={onClick} disabled={!enabled}>
    {text}
  </button>
);

export default Button;
