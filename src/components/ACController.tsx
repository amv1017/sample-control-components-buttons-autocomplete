import { useState } from "react";
import { observer } from "mobx-react";
import HintsList from "./HintsList";
import { IACController } from "../interface/IACController";

const ACController = ({ props }: { props: IACController }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const { term, setTerm, getHints } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setTerm(v);
    getHints(v);
  };

  const onSelect = (select: boolean) => {
    setSelected(select);
  };

  return (
    <div className="acc">
      <input
        type="text"
        value={term}
        onSelect={() => setSelected(true)}
        onChange={onChange}
      />
      {selected && (
        <ul className={`${term === "" ? "display-none" : ""}`}>
          <HintsList store={props} onSelect={onSelect} />
        </ul>
      )}
    </div>
  );
};

export default observer(ACController);
