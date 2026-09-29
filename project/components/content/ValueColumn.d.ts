export interface ValueColumnProps {
  /** file stem in assets/icons — "detail" | "people" | "swatches" | "sparkle" */
  icon: "detail" | "people" | "swatches" | "sparkle";
  title: string;
  children: React.ReactNode;
  /** hairline on the right — false for the last column */
  divider?: boolean;
}
export declare function ValueColumn(props: ValueColumnProps): JSX.Element;
