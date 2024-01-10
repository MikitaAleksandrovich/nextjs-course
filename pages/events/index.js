import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
import { getAllEvents } from "@/helpers/api-utils";
import { useRouter } from "next/router";
import Head from "next/head";

const EventsPage = ({ events }) => {
  const router = useRouter();

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <Head>
        <title>All events</title>
        <meta
          name="description"
          content="Find a lot of great events allow you to evolve..."
        />
      </Head>
      <div>
        <EventSearch onSearch={findEventHandler} />
        <EventList items={events} />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};

export default EventsPage;
