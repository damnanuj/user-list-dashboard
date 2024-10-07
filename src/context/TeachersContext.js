import React, { createContext, useState, useEffect } from "react";
import { teachersData } from "../data/teachersData";

// Create Context
export const TeachersContext = createContext();
export const TeachersProvider = ({ children }) => {
  const [teachers, setTeachers] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState([]); 

  // initially mounting render
  useEffect(() => {
    setTeachers(teachersData);
  }, []);

  // Filter teachers based on search string
  useEffect(() => {
    const filtered = teachers.filter((teacher) =>
      teacher.teacher.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredTeachers(filtered);
  }, [teachers, searchString]);

  return (
    <TeachersContext.Provider
      value={{
        teachers,
        searchString,
        setSearchString,
        filteredTeachers,
      }}
    >
      {children}
    </TeachersContext.Provider>
  );
};
