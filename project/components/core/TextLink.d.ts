export interface TextLinkProps {
  href?: string;
  /** rule = 1px rose underline (default); accent = mauve text; quiet = 55% ink until hover; underline = plain underline, used on dark bands */
  tone?: "rule" | "accent" | "quiet" | "underline";
  /** font size in px — 10, 11 or 12 in practice */
  size?: number;
  children: React.ReactNode;
}
export declare function TextLink(props: TextLinkProps): JSX.Element;
