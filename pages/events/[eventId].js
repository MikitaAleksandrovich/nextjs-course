import Comments from "@/components/input/comments";
import { getFeaturedEvents, getEventById } from "@/helpers/api-utils";
import Head from "next/head";

const EventDetailsPage = ({ event }) => {
  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <div>
        <h1>{event.id}</h1>
        <h1>{event.title}</h1>
      </div>
      <Comments eventId={event.id} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const allEvents = await getFeaturedEvents();

  const paths = allEvents.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export default EventDetailsPage;
