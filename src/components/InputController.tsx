import { observer } from "mobx-react";
import Button from "./Button";
import { IButton } from "../interface/IButton";
import { IInputController } from "../interface/IInputController";

const InputController = ({ props }: { props: IInputController }) => {
  const { value, setValue, left, right } = props;

  return (
    <div className="ic">
      {left.map((btn: IButton) => (
        <Button key={btn.text} {...btn} />
      ))}
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue && setValue(e.target.value || "");
        }}
      />
      {right.map((btn: IButton) => (
        <Button key={btn.text} {...btn} />
      ))}
    </div>
  );
};

export default observer(InputController);
