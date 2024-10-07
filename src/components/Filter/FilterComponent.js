import React, { useState } from 'react';
import "./FilterComponent.scss";
import filterIcon from "../../assests/filters-icon.png";
import { Dropdown, Checkbox, Collapse } from "antd";

const { Panel } = Collapse;

const FilterComponent = () => {
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);

  const filters = {
    Department: ["All", "Finance", "Engineer", "Art"],
    Status: ["All", "Active", "Inactive", "Blocked", "Suspended"],
  };

  // department filter
  const handleDepartmentChange = (checkedValues) => {
    setSelectedDepartment(checkedValues);
    console.log(checkedValues); 
  };

  // status filter
  const handleStatusChange = (checkedValues) => {
    setSelectedStatus(checkedValues);
    console.log(checkedValues); 
  };

  const renderFilterCheckboxes = (
    filterItems,
    selectedValues,
    handleChange
  ) => (
    <Checkbox.Group value={selectedValues} onChange={handleChange}>
      {filterItems.map((item) => (
        <div key={item}>
          <Checkbox value={item} checked={selectedValues.includes(item)}>
            {item}
          </Checkbox>
        </div>
      ))}
    </Checkbox.Group>
  );

  // Filter dropdown menu>>>>>>>>>>>>>
  const menu = (
    <div className="dropdown-content">
      <Collapse bordered={false} defaultActiveKey={["1"]}>
        {/* Department */}
        <Panel header="Department" key="1">
          {renderFilterCheckboxes(
            filters.Department,
            selectedDepartment,
            handleDepartmentChange
          )}
        </Panel>

        {/* Status */}
        <Panel header="Status" key="2">
          {renderFilterCheckboxes(
            filters.Status,
            selectedStatus,
            handleStatusChange
          )}
        </Panel>
      </Collapse>
    </div>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <img src={filterIcon} alt="filter_icon" className="filter_icon" />
    </Dropdown>
  );
}

export default FilterComponent;
