import { getEventById } from "@/utils";
import { useRouter } from "next/router";

const EventDetailsPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <div>
      <h1>{event.id}</h1>
      <h1>{event.title}</h1>
    </div>
  );
};

export default EventDetailsPage;
