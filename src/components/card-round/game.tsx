import { v4 } from "uuid";
import { GameProps } from "./@types";

export default function Game({ game }: GameProps) {
  return (
    <div className="shadow shadow-shadowDark my-4 mx-2 rounded-xl py-2 px-4">
      {game.teams.map((team) => (
        <h4
          key={`${team.name}-${v4()}`}
          className="text-primary font-semibold mb-2 flex gap-1 justify-between"
        >
          <span>{team.name}</span>
          <span className="bg-primary text-white rounded-sm py-1 px-2">
            {team.points}
          </span>
        </h4>
      ))}

      <footer>
        <div className="text-shadowLight text-sm flex gap-1 justify-between">
          <div>
            <span>{game.date}</span> - <span>{game.time}</span>
          </div>
          <div>{game.name}</div>
        </div>
      </footer>
    </div>
  );
}
