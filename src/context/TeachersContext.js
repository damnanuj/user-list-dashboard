import React, { createContext, useState, useEffect } from "react";
import { teachersData } from "../data/teachersData";
import myDebounce from "../hooks/useDebounce";

// Create Context
export const TeachersContext = createContext();
export const TeachersProvider = ({ children }) => {
  const [teachers, setTeachers] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedDepartment, setSelectedDepartment] = useState([]); //Department
  const [selectedStatus, setSelectedStatus] = useState([]); // Status

  // initially mounting render
  useEffect(() => {
    setTeachers(teachersData);
  }, []);

   //=======>> Debounced search update
   const debouncedSearch = myDebounce((value) => {
    console.log(value);  //====>>debounce working change the ms to see
    setSearchString(value);
  }, 500);  

  // Filter teachers based on requirment
  useEffect(() => {
    let filtered = teachers;

    //========= Filter by search String=====>
    if (searchString) {
      filtered = filtered.filter((teacher) =>
        teacher.teacher.name.toLowerCase().includes(searchString.toLowerCase())
      );
    }

   
    //========>> Filter by department
    if (selectedDepartment.length > 0 && !selectedDepartment.includes("All")) {
      filtered = filtered.filter((teacher) =>
        selectedDepartment.includes(teacher.teacher.department)
      );
    }
    //========>> Filter by status
    if (selectedStatus.length > 0 && !selectedStatus.includes("All")) {
      filtered = filtered.filter((teacher) =>
        selectedStatus.includes(teacher.status)
      );
    }

    setFilteredTeachers(filtered);
  }, [teachers, searchString, selectedDepartment, selectedStatus]);

  // Calculate paginated teachers
  const paginatedTeachers = filteredTeachers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <TeachersContext.Provider
      value={{
        teachers,
        debouncedSearch,
        searchString,
        setSearchString,
        filteredTeachers,
        paginatedTeachers,
        currentPage,
        setCurrentPage,
        pageSize,
        setPageSize,
        totalTeachers: filteredTeachers.length,
        selectedDepartment,
        setSelectedDepartment,
        selectedStatus,
        setSelectedStatus,
      }}
    >
      {children}
    </TeachersContext.Provider>
  );
};
