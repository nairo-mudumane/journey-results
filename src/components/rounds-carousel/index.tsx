import React from "react";
import { v4 as uiv4 } from "uuid";
import { CardRound } from "..";
import allRounds from "../../database/rounds.json";
import allTeams from "../../database/teams.json";
import { Game, Round, Team } from "../../@types";

export function RoundsCarousel() {
  const [rounds, setRounds] = React.useState<Array<Round>>([]);

  React.useEffect(() => {
    const filteredRounds: Array<Round> = [];

    for (const roundIndex in allRounds) {
      const games: Array<Game> = [];

      const team1Index = Math.floor(Math.random() * allTeams.length);
      const team2Index = Math.floor(Math.random() * allTeams.length);

      const teams: Array<Team> = [allTeams[team1Index], allTeams[team2Index]];

      const limitIndex = Math.floor(Math.random() * allTeams.length);
      // eslint-disable-next-line no-empty-pattern
      for (const {} of allTeams.slice(0, limitIndex))
        games.push({
          teams,
          date: allRounds[roundIndex].date,
          time: allRounds[roundIndex].time,
          name: `Round ${roundIndex + 1} of ${allRounds.length}`,
        });

      filteredRounds.push({
        games,
        name: `Round ${roundIndex + 1}`,
      });
    }

    setRounds(filteredRounds);
  }, []);

  return (
    <ul className="flex flex-col gap-4">
      {rounds.map((round, index) => (
        <li key={`${uiv4()}-${index}`}>
          <CardRound round={round} />
        </li>
      ))}
    </ul>
  );
}
