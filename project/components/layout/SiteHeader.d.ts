/**
 * @startingPoint section="Layout" subtitle="Wordmark, nav, phone and Book now" viewport="700x120"
 */
export interface SiteHeaderProps {
  active?: "Home" | "About" | "Menu" | "Locations";
  phone?: string;
  /** mobile bar: wordmark + hamburger */
  compact?: boolean;
}
export declare function SiteHeader(props: SiteHeaderProps): JSX.Element;
export interface WordmarkProps { size?: number; color?: string }
export declare function Wordmark(props: WordmarkProps): JSX.Element;
