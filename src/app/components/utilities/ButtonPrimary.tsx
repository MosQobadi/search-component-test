// ButtonPrimary.tsx
import React from "react";
import "../../globals.css";

interface ButtonPrimaryProps {
  text: string;
  isAddedToSearch: boolean;
  onAddLesson: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  text,
  isAddedToSearch,
  onAddLesson,
}) => {
  const buttonClass = isAddedToSearch
    ? "assistive-chip added-to-search"
    : "assistive-chip";

  return (
    <button className={buttonClass} onClick={onAddLesson}>
      {text}
    </button>
  );
};

export default ButtonPrimary;
