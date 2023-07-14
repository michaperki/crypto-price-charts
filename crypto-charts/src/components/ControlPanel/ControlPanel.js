import React from 'react';
import { ControlPanelWrapper, FilterInput } from './ControlPanelStyles';

const ControlPanel = ({ handleFilterChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    handleFilterChange(value);
  };

  return (
    <ControlPanelWrapper>
      <FilterInput type="text" placeholder="Filter (example: 'Bitcoin')" onChange={handleChange} />
    </ControlPanelWrapper>
  );
};

export default ControlPanel;
