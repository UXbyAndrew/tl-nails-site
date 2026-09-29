export interface PlumBandProps {
  /** plum = mauve→plum gradient (booking); ink = flat #3A2A2E (contact) */
  tone?: "plum" | "ink";
  width?: "desktop" | "mobile";
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function PlumBand(props: PlumBandProps): JSX.Element;
