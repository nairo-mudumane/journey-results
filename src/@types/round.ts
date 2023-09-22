import { Game } from "./game";

export interface Round {
  name: string;
  games: Array<Game>;
}
