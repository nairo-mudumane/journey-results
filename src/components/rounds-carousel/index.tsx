import { CardRound } from "..";

export function RoundsCarousel() {
  return (
    <ul className="flex flex-col gap-4">
      <li className="">
        <CardRound />
      </li>
      <li className="">
        <CardRound />
      </li>
      <li className="">
        <CardRound />
      </li>
    </ul>
  );
}
