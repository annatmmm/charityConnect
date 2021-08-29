import { useState, useEffect } from "react";
import './dropdown.css';


const data = [{id: 0, label: "Addiction Treatment"}, {id: 1, label: "Job Search"}, 
{id: 2, label: "Justice"},
{id: 3, label: "Shelter Services"},
{id: 4, label: "Food Hamper"},
{id: 5, label: "Domestic Violence"},
{id: 6, label: "Physical Disability Assistance"},
{id: 7, label: "Senior Support"}, ];

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }
  
  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).label : "Services Dropdown"}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map(item => (
          <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
            <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown;