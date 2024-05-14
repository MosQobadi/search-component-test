"use client";

import React, { useState } from "react";
import "../globals.css";
import ButtonPrimary from "./utilities/ButtonPrimary";
import Logo from "./utilities/Logo";
import ButtonSecondary from "./utilities/ButtonSecondary";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import SearchIcon from "./icons/SearchIcon";
import SearchTag from "./SearchTag";
import DropdownOptions from "../components/DropdownOptions";

export default function MainSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const doropDownOptions = [
    { id: 1, name: "اول دبیرستان" },
    { id: 2, name: "دوم دبیرستان" },
    { id: 3, name: "سوم دبیرستان" },
  ];

  const lessons = [
    {
      id: 1,
      name: "همه",
    },
    {
      id: 2,
      name: "ادبیات",
    },
    {
      id: 3,
      name: "زبان",
    },
    {
      id: 4,
      name: "شیمی",
    },
    {
      id: 5,
      name: "نجوم",
    },
    {
      id: 6,
      name: "هوش",
    },
    {
      id: 7,
      name: "فیزیک",
    },
  ];

  const [searchedLessons, setSearchedLessons] = useState<
    { id: number; name: string }[]
  >([]);

  const addLessonToSearch = (lessonToAdd: { id: number; name: string }) => {
    setSearchedLessons([lessonToAdd]);
  };

  const removeLessonFromSearch = (lessonId: number) => {
    setSearchedLessons((prevLessons) =>
      prevLessons.filter((lesson) => lesson.id !== lessonId)
    );
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="frame-57">
      <Logo />
      <div className="frame-32">
        <div className="text-area">
          <div className="text-area-2">
            <div className="text-area-contents">
              <div>
                <ButtonSecondary />
              </div>
              <div className="search-area">
                <input
                  className="search-placeholder"
                  placeholder="... جست و جو بین امتحان ها و درس ها و"
                />
                <div>
                  {searchedLessons.length > 0 &&
                    searchedLessons.map((searchedLesson) => (
                      <SearchTag
                        key={searchedLesson.id}
                        lesson={searchedLesson}
                        onRemoveLesson={removeLessonFromSearch}
                      />
                    ))}
                </div>
              </div>
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="frame-31">
          <div className="frame-333">
            {lessons.map((lesson) => (
              <ButtonPrimary
                key={lesson.id}
                text={lesson.name}
                isAddedToSearch={searchedLessons.some(
                  (searchedLesson) => searchedLesson.id === lesson.id
                )}
                onAddLesson={() => addLessonToSearch(lesson)}
              />
            ))}
          </div>
          <div className="drop-down">
            <DropdownOptions
              options={doropDownOptions}
              isOpen={isOpen}
              toggleDropdown={toggleDropdown}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
