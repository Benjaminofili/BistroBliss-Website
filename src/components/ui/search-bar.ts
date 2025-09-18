export interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (newVal: string) => void;
  onSubmit?: () => void;
  icon?: React.ReactNode; // search icon
}