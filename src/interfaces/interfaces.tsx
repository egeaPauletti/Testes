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

export interface FloatingSquareProps {
  isLogin?: boolean;
}

export interface WaveTextProps {
  text: string;
}

export interface BtnProps {
  label: string;
  filled?: boolean;
}

// export type NavData = {
//   icon: React.ReactNode;
//   label: string;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   to?: string | any;

//   matchPath?: string[];
// };

export interface NavData {
  icon: React.ReactNode;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  to?: string | any;
  matchPaths?: string[];
}

export interface WorldsData {
  id: string;

  worldName: string;
}

export interface OptionProps {
  Icon: React.ReactNode;
  title: string;
  isCurrent?: boolean;
  open: boolean;
}
