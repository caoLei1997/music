import styled from "styled-components";
import global from "@/assets/style/global-style";

export const SongListStyle = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;

  > li {
    font-size: ${global["font-size-s"]};
    color: grey;
  }
`;
