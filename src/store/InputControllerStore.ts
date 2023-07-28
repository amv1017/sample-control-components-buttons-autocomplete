import { makeAutoObservable } from "mobx";
import { IButton } from "../components/Button";
import { IInputController } from "../components/InputController";

class InputControllerStore implements IInputController {
  value: string = "";
  left: IButton[] = [];
  right: IButton[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setData = ({ value, left, right }: IInputController) => {
    this.value = value;
    this.left = left;
    this.right = right;
  };

  setValue = (value: string) => {
    this.value = value;
  };
}

export default InputControllerStore;
