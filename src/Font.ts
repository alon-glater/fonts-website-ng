import type { Fontlike } from "./types";

export class Font implements Fontlike {
  name: string;
  displayName: string;
  url: string;
  format: string;

  constructor(name: string, displayName: string, url: string, format: string) {
    this.name = name;
    this.displayName = displayName;
    this.url = url;
    this.format = format;
  }
}
