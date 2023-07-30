export interface IHint {
  name: string;
  fullName: string;
  flag: string;
}

export interface IHintListItem {
  hint: IHint;
  onChange: (value: string) => void;
  onSelect: (value: boolean) => void;
}
