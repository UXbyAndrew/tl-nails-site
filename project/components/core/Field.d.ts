export interface FieldProps {
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare function Field(props: FieldProps): JSX.Element;
