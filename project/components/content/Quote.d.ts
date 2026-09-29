export interface QuoteProps {
  children: React.ReactNode;
  /** e.g. "Lynn M. · Kennedy Blvd" */
  attribution?: string;
  stars?: boolean;
  /** plum = filled gradient tile (hero mosaic); plain = type only, for pulled quotes */
  tone?: "plum" | "plain";
}
export declare function Quote(props: QuoteProps): JSX.Element;
