import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { updateSelectedOption } from '../features/SelectedOptionSlice';
import '../styles/SelectCategory.scss';
import { ReactElement } from 'react';

type SelectCategoryProps = {
  option: any;
  key: string;
};

/**
 * Function to display a multiple select
 * @param {any} option - The select options
 * @param {string} key - The key options
 * @returns {SelectCategoryProps}
 */

export default function SelectCategory({ option, key }: SelectCategoryProps) {
  const dispatch = useDispatch();
  const { Option } = Select;

  const childrenSelect: Array<ReactElement> = [];
  childrenSelect.push(<Option key={key}>{option}</Option>);

  function handleChange(value: any) {
    dispatch(updateSelectedOption(value));
  }

  return (
    <div>
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Filter"
        onChange={handleChange}
        options={option}
      />
    </div>
  );
}
