export interface PlayerProps {
  song?: any;
  fullScreen?:boolean,
  percent?:number,
  playing?:boolean,
  clickPlaying?: (e: React.MouseEvent, state: boolean) => void;
}