/**
 * @startingPoint section="Core" subtitle="Primary, deep, ghost and light actions" viewport="700x150"
 */
export interface ButtonProps {
  /** primary = mauve fill (default CTA); deep = plum fill; ghost = outlined; light = blush fill on dark panels */
  variant?: "primary" | "deep" | "ghost" | "light";
  size?: "lg" | "md" | "sm";
  /** full-width — the mobile default */
  block?: boolean;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
