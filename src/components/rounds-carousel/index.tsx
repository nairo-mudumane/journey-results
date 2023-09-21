import { CardRound } from "..";
import rounds from "../../database/rounds.json";

export function RoundsCarousel() {
  return (
    <ul className="flex flex-col gap-4">
      {rounds.map((round) => (
        <li key={round.id}>
          <CardRound />
        </li>
      ))}
    </ul>
  );
}
