import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
} from "@mui/material";
import { v4 } from "uuid";
import { KeyboardArrowDown } from "@mui/icons-material";
import { CardRoundProps } from "./@types";
import Game from "./game";

export function CardRound({ round }: CardRoundProps) {
  return (
    <article className="max-w-full md:max-w-[26rem]">
      <Paper variant="elevation">
        <Accordion sx={{ background: "transparent" }}>
          <AccordionSummary
            expandIcon={<KeyboardArrowDown />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="">
              <h3>{round.name}</h3>
            </div>
          </AccordionSummary>

          <AccordionDetails>
            <ul className="w-full max-h-[16rem] overflow-y-auto">
              {round.games.map((game) => (
                <li key={`${game.name}-${v4()}`}>
                  <Game game={game} />
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </article>
  );
}
