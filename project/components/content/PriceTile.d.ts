/**
 * @startingPoint section="Content" subtitle="Plum feature panel for the hero service" viewport="700x380"
 */
export interface PriceTileProps {
  eyebrow?: string;
  title: string;
  description: string;
  price: string;
  action?: string;
  href?: string;
}
export declare function PriceTile(props: PriceTileProps): JSX.Element;
