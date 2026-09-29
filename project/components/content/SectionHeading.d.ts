/**
 * @startingPoint section="Content" subtitle="Eyebrow + serif headline, with optional right-aligned link" viewport="700x180"
 */
export interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  align?: "left" | "center";
  /** display size in px — 54 desktop, 30–34 mobile */
  size?: number;
  /** optional right-aligned uppercase link, e.g. "View full menu" */
  action?: string;
  actionHref?: string;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
