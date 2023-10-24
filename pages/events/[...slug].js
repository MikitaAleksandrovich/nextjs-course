import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/utils";
import { useRouter } from "next/router";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <div>Loading...</div>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
