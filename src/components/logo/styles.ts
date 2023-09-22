import styled from "styled-components";
import { THEME } from "../../global";

export const StyledLogo = styled.div`
  & > .title {
    background-image: ${THEME.colors.primaryGradient};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    padding: 1rem 0;
  }
`;
