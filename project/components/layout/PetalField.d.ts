export interface PetalFieldProps {
  /** light surfaces take the pink tile; plum and ink bands take the blush one */
  on?: "light" | "dark";
  width?: "desktop" | "mobile";
  /** the section's own background (gradient or colour) — painted UNDER the petals */
  under?: string;
  /** vertical offset in px so the trail lines up with the page above (e.g. 86 under the desktop header) */
  offset?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function PetalField(props: PetalFieldProps): JSX.Element;
