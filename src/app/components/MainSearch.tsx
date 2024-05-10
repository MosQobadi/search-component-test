// MainSearch.tsx
"use client";

import React, { useState } from "react";
import "../globals.css";
import ButtonPrimary from "./utilities/ButtonPrimary";
import Logo from "./utilities/Logo";
import ButtonSecondary from "./utilities/ButtonSecondary";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import SearchIcon from "./icons/SearchIcon";
import SearchTag from "./SearchTag";

export default function MainSearch() {
  const [lessons, setLessons] = useState([
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
  ]);

  const [searchedLessons, setSearchedLessons] = useState<
    { id: number; name: string }[]
  >([]);

  const addLessonToSearch = (lessonToAdd: { id: number; name: string }) => {
    if (lessonToAdd.name === "همه") {
      setSearchedLessons([lessonToAdd]);
    } else {
      const lessonExists = searchedLessons.find(
        (lesson) => lesson.id === lessonToAdd.id
      );
      if (lessonExists) {
        return;
      }
      setSearchedLessons((prevLessons) => [
        ...prevLessons.filter((lesson) => lesson.name !== "همه"),
        lessonToAdd,
      ]);
    }
  };

  const removeLessonFromSearch = (lessonId: number) => {
    setSearchedLessons((prevLessons) =>
      prevLessons.filter((lesson) => lesson.id !== lessonId)
    );
  };

  return (
    <div className="frame-57">
      <div>
        <Logo />
      </div>
      <div className="frame-32">
        <div className="text-area">
          <div className="text-area-2">
            <div className="text-area-contents">
              <div className="auto-added-frame">
                <ButtonSecondary />
              </div>
              <div className="texts">
                <div className="frame-327">
                  <div className="frame-328">
                    <input
                      className="text-placeholder"
                      placeholder="... جست و جو بین امتحان ها و درس ها و"
                    />
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
              </div>
              <div className="text-contents-search-icon">
                <SearchIcon />
              </div>
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
            <div className="frame-189">
              <div className="drop-down-chip">
                <div className="frame-191">
                  <ArrowDownIcon />
                  <div className="drop-down-text">پایه تحصیلی</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
