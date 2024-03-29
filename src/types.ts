export interface Link {
  text: string;
  reference: string;
  action?: (argument: any) => void;
}

export interface Fontlike {
  name: string;
  displayName: string;
  format: string;
  url: string;
}
