export interface FramedImageProps {
  /** real photograph; omit to render the brand's hatch placeholder */
  src?: string;
  /** placeholder caption, e.g. "hero · hands 3:4" — only shown when src is absent */
  caption?: string;
  height?: number | string;
  /** placeholder gradient under the hatch */
  gradient?: string;
  /** parallax travel in px against the scroll (16–22 in the source) */
  drift?: number;
  /** 9px white bezel + heavy shadow, for maps and overlapping imagery */
  bezel?: boolean;
}
export declare function FramedImage(props: FramedImageProps): JSX.Element;
