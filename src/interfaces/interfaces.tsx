export interface IconsProps {
  size: number;
}

export interface SquareData {
  x: number;
  y: number;
  width: number;
  height: number;
  icon?: React.ReactNode;
  className?: string; // <- nova propriedade
}

export interface WaveTextProps {
  text: string;
}

export interface BtnProps{
    label: string,
    filled?: boolean
}