import EventItem from "./event-item";

import classes from "./event-list.module.css";

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map(({ id, location, image, date, title }) => (
        <EventItem
          key={id}
          id={id}
          location={location}
          image={image}
          date={date}
          title={title}
        />
      ))}
    </ul>
  );
};

export default EventList;
