export interface EyebrowProps {
  /** accent = mauve on light; blush = on plum bands; rose = on ink bands */
  tone?: "accent" | "blush" | "rose";
  size?: "sm" | "md";
  children: React.ReactNode;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
