import { observer } from "mobx-react-lite";
import HintListItem from "./HintsListItem";
import { IACController } from "../interface/IACController";
import { IHint } from "../interface/IHint";

const HintsList = ({
  store,
  onSelect,
}: {
  store: IACController;
  onSelect: (select: boolean) => void;
}) => {
  const { term, setTerm, isLoading, hints } = store;

  if (!term) {
    return null;
  }

  if (isLoading) {
    return <li>Загрузка...</li>;
  }

  if (term && hints.length === 0) {
    return <li>Не найдено</li>;
  }

  return hints.map((hint: IHint) => (
    <HintListItem
      key={hint.name}
      hint={hint}
      onChange={setTerm}
      onSelect={onSelect}
    />
  ));
};

export default observer(HintsList);
