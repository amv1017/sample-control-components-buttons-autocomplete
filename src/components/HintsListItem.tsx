import { IHintListItem } from "../interface/IHint";

const HintListItem = ({ hint, onChange, onSelect }: IHintListItem) => {
  const { name, fullName, flag } = hint;

  const setValueHandler = (pickedValue: string) => {
    onChange(pickedValue);
    onSelect(false);
  };

  return (
    <li onClick={() => setValueHandler(name)}>
      <img src={flag} alt={name} />
      <span>{name}</span>
      <span>{fullName}</span>
    </li>
  );
};

export default HintListItem;
