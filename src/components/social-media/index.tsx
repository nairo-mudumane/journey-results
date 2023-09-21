import clsx from "clsx";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { SocialMediaProps } from "./@types";

export function SocialMedia({ orientation = "horizontal" }: SocialMediaProps) {
  return (
    <ul
      className={clsx(
        "text-white my-6 flex gap-2",
        orientation === "vertical" && "flex-col !mx-6"
      )}
    >
      <a target="_blank" href="https://github.com/nairo-mudumane/">
        <li>
          <IconButton color="inherit" size="medium">
            <GitHub fontSize="large" />
          </IconButton>
        </li>
      </a>

      <a target="_blank" href="https://www.linkedin.com/in/nairo-mudumane/">
        <li>
          <IconButton color="inherit" size="medium">
            <LinkedIn fontSize="large" />
          </IconButton>
        </li>
      </a>

      <a target="_blank" href="https://www.instagram.com/nairo_mudumane/">
        <li>
          <IconButton color="inherit" size="medium">
            <Instagram fontSize="large" />
          </IconButton>
        </li>
      </a>
    </ul>
  );
}
