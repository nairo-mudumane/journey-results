import { Team } from "./team";

export interface Game {
  name: string;
  date: string;
  time: string;
  teams: Array<Team>;
}
