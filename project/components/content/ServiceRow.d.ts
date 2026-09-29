export interface ServiceRowProps {
  name: string;
  /** "from $25" on category rows, "$55" on a specific service */
  price: string;
  description?: string;
  /** e.g. "50 minutes" */
  duration?: string;
  href?: string;
}
export declare function ServiceRow(props: ServiceRowProps): JSX.Element;
