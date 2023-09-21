import { DefaultData } from "./default";
import { Team } from "./team";

export interface Game extends DefaultData {
  date: string;
  time: string;
  teams: Array<Team>;
}
