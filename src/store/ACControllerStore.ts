import { makeAutoObservable } from "mobx";
import { IACController } from "../interface/IACController";
import { getCountryByName } from "../api/apiService";
import { IHint } from "../interface/IHint";

class ACControllerStore implements IACController {
  term = "";
  hints: IHint[] = [];
  maxHints: number;
  isLoading = false;

  constructor(maxHints = 3) {
    makeAutoObservable(this);
    this.maxHints = maxHints;
  }

  getHints = async (country: string) => {
    this.isLoading = true;

    const req = await getCountryByName(country);
    this.hints = req
      .reduce((l: IHint[], c) => {
        if (!l.find((f) => f.name === c.name)) {
          l.push(c as IHint);
        }

        return l;
      }, [])
      .slice(0, this.maxHints);

    this.isLoading = false;
  };

  setTerm = (term: string) => {
    this.term = term;
  };
}

export default ACControllerStore;
