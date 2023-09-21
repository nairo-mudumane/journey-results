import { DefaultData } from "./default";
import { Game } from "./game";

export interface Round extends DefaultData {
  name: string;
  games: Array<Game>;
}
