import { IHint } from "./IHint";

export interface IACController {
  term: string;
  setTerm: (term: string) => void;
  hints: IHint[];
  maxHints: number;
  isLoading: boolean;
  getHints: (country: string) => void;
}
