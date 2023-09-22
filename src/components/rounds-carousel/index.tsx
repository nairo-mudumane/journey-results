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

    for (const round of allRounds) {
      const games: Array<Game> = [];

      while (games.length < round.limit) {
        const team1Index = Math.floor(Math.random() * allTeams.length);
        let team2Index;

        do {
          team2Index = Math.floor(Math.random() * allTeams.length);
        } while (team2Index === team1Index);

        const teams: Array<Team> = [allTeams[team1Index], allTeams[team2Index]];

        games.push({
          teams,
          date: round.date,
          time: round.time,
          name: `Round ${filteredRounds.length + 1}`,
        });
      }

      filteredRounds.push({
        games,
        name: `Round ${filteredRounds.length + 1}`,
      });
    }

    setRounds(filteredRounds);
  }, []);

  React.useEffect(() => {
    if (rounds.length > 0) {
      const noEmptyGames = rounds.filter((round) => round.games.length > 0);
      setRounds(noEmptyGames);
    }
  }, [rounds]);

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
