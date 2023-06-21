import Select, { ActionMeta, GroupBase, OptionsOrGroups } from 'react-select';
import '../styles/FilterCategory.scss';

type SelectOptionProps = {
  placeholder: string;
  options: any;
  value: string;
  onClick: ((newValue: any, actionMeta: ActionMeta<any>) => void) | undefined;
};

export default function SelectOption({
  options,
  value,
  onClick,
  placeholder,
}: SelectOptionProps) {
  return (
    <section className="options-container">
      <Select
        options={options}
        value={value}
        onChange={onClick}
        placeholder={!value ? placeholder : value}
      />
    </section>
  );
}
