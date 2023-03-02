import React from "react";
import { SongListStyle } from "./style";

interface SongListProps {
  dataSource: any[];
}
const SongList = (props: SongListProps) => {
  const { dataSource } = props;
  return (
    <SongListStyle>
      {dataSource.map((song, index) => (
        <li key={index}>
          {index + 1}. {song.first} - {song.second}
        </li>
      ))}
    </SongListStyle>
  );
};

export default SongList;
