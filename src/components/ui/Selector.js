import * as React from 'react';

const Selector = (props) => {
  const { options, defaultValue, onChange, label } = props;

  const renderOption = React.useCallback((option) => (
    <option key={`option-${option.value}`} value={option.value}>{option.label}</option>
  ));

  const onSelectChange = (event) => {
    const { value } = event.target;

    onChange(value);
  }

  return (
    <>
      {label && <label>{label}</label>}
      <select defaultValue={defaultValue} onChange={onSelectChange}>
        {
          options.map((option) => renderOption(option))
        }
      </select>
    </>
  );
};

export default Selector;
