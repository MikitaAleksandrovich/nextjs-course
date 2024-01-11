// import EventList from "@/components/events/event-list";
// import { getFeaturedEvents } from "@/helpers/api-utils";
// import Head from "next/head";

// const HomePage = (props) => {
//   return (
//     <div>
//       <Head>
//         <title>Next js events</title>
//         <meta
//           name="description"
//           content="Find a lot of great events that allowed you to evolve."
//         />
//       </Head>

//       <EventList items={props.events} />
//     </div>
//   );
// };

// export const getStaticProps = async () => {
//   const featuredEvents = await getFeaturedEvents();

//   return {
//     props: {
//       events: featuredEvents,
//     },
//     revalidate: 10,
//   };
// };

// export default HomePage;

import { useRef } from "react";

const HomePage = () => {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((reposponse) => reposponse.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>Home page</h1>
      <form>
        <div>
          <label htmlFor="email">You Email adrress</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">You Email adrress</label>
          <textarea rows="5" id="feedback" ref={feedbackInputRef} />
        </div>
        <button onClick={submitFormHandler}>Send feedback</button>
      </form>
    </div>
  );
};

export default HomePage;
