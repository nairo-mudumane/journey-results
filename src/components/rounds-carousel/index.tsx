import { v4 as uiv4 } from "uuid";
import { CardRound } from "..";
import allRounds from "../../database/rounds.json";

export function RoundsCarousel() {
  return (
    <ul className="flex flex-col gap-4">
      {allRounds.map((round, index) => (
        <li key={`${uiv4()}-${index}`}>
          <CardRound round={round} />
        </li>
      ))}
    </ul>
  );
}
