import { Dispatch, FunctionComponent, SetStateAction } from 'react';

interface CheckboxGroupProps {
  options: {key: string, doc_count
  : number,
  selected: boolean}[];
  selectedOptions: string[];
  setSelectedOptions: Dispatch<SetStateAction<string[]>>
}
const CheckboxGroup: FunctionComponent<CheckboxGroupProps> = ({options, selectedOptions, setSelectedOptions}) => {
  // Initialize state as an empty array

  // Options for the checkboxes

  // Handle change event for checkboxes
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      // Add value to selectedOptions if it is checked
      setSelectedOptions([...selectedOptions, value]);
    } else {
      // Remove value from selectedOptions if it is unchecked
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    }
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option.key}>
          <label className="text-sm">
            <input
              type="checkbox"
              value={option.key}
              onChange={handleCheckboxChange}
              checked={option.selected}
              className="mr-2"
            />
            {option.key} ({option.doc_count})
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
