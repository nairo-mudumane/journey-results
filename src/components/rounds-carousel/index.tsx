import { v4 as uiv4 } from "uuid";
import { CardRound } from "..";
import allRounds from "../../database/rounds.json";

export function RoundsCarousel() {
  return (
    <div className="max-h-full overflow-y-auto">
      <ul className="flex flex-col gap-4 items-center justify-center">
        {allRounds.map((round, index) => (
          <li key={`${uiv4()}-${index}`}>
            <CardRound round={round} />
          </li>
        ))}
      </ul>
    </div>
  );
}
