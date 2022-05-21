import Head from 'next/head';

import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/EventList';
import NewsletterRegistration from '../components/input/NewsletterRegistration';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Next JS events app</title>
        <meta name='description' content='Find a lot of great IT events' />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
