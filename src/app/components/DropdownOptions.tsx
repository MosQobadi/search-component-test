import React from "react";
import ArrowDownIcon from "./icons/ArrowDownIcon";

// Define an interface for the option object
interface Option {
  id: number;
  name: string;
}

interface DropdownProps {
  options: Option[];
  isOpen: boolean; // Receive isOpen state as prop
  toggleDropdown: () => void; // Receive toggleDropdown function as prop
}

const DropdownOptions: React.FC<DropdownProps> = ({
  options,
  isOpen,
  toggleDropdown,
}) => {
  return (
    <>
      <button className="button-toggle" onClick={toggleDropdown}>
        <div className="frame-189">
          <span className="dropdown-icon">
            <ArrowDownIcon />
          </span>
          <div className="drop-down-text">پایه تحصیلی</div>
        </div>
      </button>
      {isOpen && (
        <ul className="drop-down-list mt-3">
          {options.map((option) => (
            <li className="dropdown-option-item" key={option.id}>
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DropdownOptions;
