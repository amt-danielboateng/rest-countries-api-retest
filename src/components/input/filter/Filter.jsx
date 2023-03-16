import {useState, useEffect} from 'react';

// Redux
import { useDispatch } from 'react-redux';
import {reset, setRegion} from '../../../features/countries/countriesSlice';
import "./filter.css";

const Filter = () => {
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const [filter, setFilter] = useState("");
const [displayDropDown, setDisplayDropDown] = useState(false);
const dispatch = useDispatch();

const handleDropdown = () => {
  setDisplayDropDown(!displayDropDown);
}

useEffect(() => {
  if(filter !== ""){
dispatch(setRegion(filter));
  }

}, [dispatch, filter])

  return (
    <section className="filter-container">
      <div className="filter" onClick={handleDropdown}>
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />

        <i className="fas fa-angle-down"></i>
      </div>
      {displayDropDown ? (
      <div className="dropDown">
      {regions.map((item, index) => {
        return (
          <div key={index} className="dropdown-item" onClick={() => {
            setFilter(item)
            handleDropdown()
          }}>
          {item}
          </div>
        )
      })}
      </div>
      ): null}
    </section>
  );
};

export default Filter;