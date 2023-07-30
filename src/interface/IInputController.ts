import { IButton } from "./IButton";

export interface IInputController {
  value: string;
  setValue?: (value: string) => void;
  left: IButton[];
  right: IButton[];
}
