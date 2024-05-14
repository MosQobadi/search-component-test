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
    <div className="frame-189">
      <div className="drop-down-chip">
        <div className="frame-191">
          <button className="button-toggle" onClick={toggleDropdown}>
            <ArrowDownIcon />
            <span className="drop-down-text">پایه تحصیلی</span>
          </button>
        </div>
      </div>
      <div className="">
        {isOpen && (
          <ul className="drop-down-list mt-3">
            {options.map((option) => (
              <li className="dropdown-option-item" key={option.id}>
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownOptions;
