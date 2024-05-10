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
    // Call the onRemoveLesson function and pass the lesson id
    onRemoveLesson(lesson.id);
  };

  return (
    <div className="search-tag">
      <div className="search-tag-text">{lesson.name}</div>
      <button onClick={handleRemoveClick}>
        <RemoveIcon />
      </button>
    </div>
  );
};

export default SearchTag;
