import { GameProps } from "./@types";

export default function Game({ game }: GameProps) {
  const { date, teams, time, name } = game;

  return (
    <div className="shadow shadow-shadowDark my-4 mx-2 rounded-xl py-2 px-4">
      {teams.map((team) => (
        <h4 className="font-semibold mb-2 flex gap-1 justify-between">
          <span>{team.name}</span>
          <span className="bg-primary text-white rounded-sm py-1 px-2">
            {team.points}
          </span>
        </h4>
      ))}

      <footer>
        <div className="text-shadowLight text-sm flex gap-1 justify-between">
          <p>
            <span>{date}</span> - <span>{time}</span>
          </p>
          <p>{name}</p>
        </div>
      </footer>
    </div>
  );
}
