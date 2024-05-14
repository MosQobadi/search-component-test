import React from "react";
import "../globals.css";
import RemoveIcon from "./icons/RemoveIcon";

interface Lesson {
  id: number;
  name: string;
}

interface SearchTagProps {
  lesson: Lesson;
  onRemoveLesson: (lessonId: number) => void;
}

const SearchTag: React.FC<SearchTagProps> = ({ lesson, onRemoveLesson }) => {
  const handleRemoveClick = () => {
    onRemoveLesson(lesson.id);
  };

  return (
    <div className="search-tag">
      <p>{lesson.name}</p>
      <button onClick={handleRemoveClick}>
        <RemoveIcon />
      </button>
    </div>
  );
};

export default SearchTag;
