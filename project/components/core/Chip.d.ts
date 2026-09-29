export interface ChipProps {
  selected?: boolean;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
export declare function Chip(props: ChipProps): JSX.Element;
