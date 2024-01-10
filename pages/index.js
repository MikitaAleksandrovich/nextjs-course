import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helpers/api-utils";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>Next js events</title>
        <meta
          name="description"
          content="Find a lot of great events that allowed you to evolve."
        />
      </Head>

      <EventList items={props.events} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 10,
  };
};

export default HomePage;
