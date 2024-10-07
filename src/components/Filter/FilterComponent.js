import React, { useContext } from "react";
import "./FilterComponent.scss";
import filterIcon from "../../assests/filters-icon.png";
import { Dropdown, Checkbox, Collapse } from "antd";
import { TeachersContext } from "../../context/TeachersContext";

const { Panel } = Collapse;

const FilterComponent = () => {

  //needed functions from context
  const {
    selectedDepartment,
    setSelectedDepartment,
    selectedStatus,
    setSelectedStatus,
  } = useContext(TeachersContext);

  const filters = {
    Department: ["All", "Finance", "Engineer", "Arts"],
    Status: ["All", "Active", "Inactive", "Blocked", "Suspended"],
  };

  // department filter
  const handleDepartmentChange = (checkedValues) => {
    setSelectedDepartment(checkedValues); // Update context
  };

  // status filter
  const handleStatusChange = (checkedValues) => {
    setSelectedStatus(checkedValues); // Update context
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

  // Filter dropdown menu
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
};

export default FilterComponent;
