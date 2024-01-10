import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/helpers/api-utils.js";
import Head from "next/head";

const FilteredEventsPage = (props) => {
  const pageHeadData = (
    <Head>
      <title>Filtered events</title>
      <meta
        name="description"
        content={`All events for ${props.month}/${props.year}`}
      />
    </Head>
  );

  if (props.hasError) {
    return (
      <>
        {pageHeadData}
        <div>Invalid filter, please, adjust your filters.</div>
      </>
    );
  }

  if (!props.events || props.events.length === 0) {
    return (
      <>
        {pageHeadData}
        <div>No events found. Try to apply another filters</div>
      </>
    );
  }

  return (
    <>
      {pageHeadData}
      <div>
        <EventList items={props.events} />
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const filteredData = params.slug;

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  )
    return {
      props: {
        hasError: true,
      },
    };

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      year: numYear,
      month: numMonth,
    },
  };
};

export default FilteredEventsPage;
