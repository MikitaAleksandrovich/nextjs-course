import { useRef } from "react";
import Button from "../ui/button";

const EventSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submit = (event) => {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };
  return (
    <form onSubmit={submit}>
      <div>
        <div>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="4">April</option>
            <option value="5">May</option>
          </select>
        </div>
        <Button onCLick={() => console.log("clicked")}>Find Events</Button>
      </div>
    </form>
  );
};

export default EventSearch;
