import {
  space,
  layout,
  color,
  border,
  position,
  flexbox,
  grid,
} from "styled-system";
import styled from "styled-components";

export const Box = styled("div")`
  ${space};
  ${layout};
  ${color};
  ${border};
  ${position}
  ${flexbox}
  ${grid}
`;
