import React from 'react';

interface FilterButtonProps {
  name: string;
  setFilter: (v: string) => void;
  isPressed: boolean;
};

const FilterButton: React.FC<FilterButtonProps> = ({name, setFilter, isPressed}) => {
  
  return (
    <button
      type='button'
      className='filter-button'
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
    <span>{name} tasks</span>
    </button>
  )
};

export default FilterButton;
