import { getDoc, doc, updateDoc } from 'firebase/firestore';
// eslint-disable-next-line camelcase
import { atcb_action } from 'add-to-calendar-button';
import moment from 'moment';
import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { db } from '../../utils/firebase-config.ts';
import { Dropdown } from '../../dropdown/Dropdown.tsx';
import { GifImage } from '../../gifImage/GifImage.tsx';
import CalendarIcon from '../../../public/assets/images/calendar.svg';
import SendIcon from '../../../public/assets/images/send.svg';
import CheckIcon from '../../../public/assets/images/check.svg';

const rsvpChoices = ['ATTENDING', 'MAYBE', 'DECLINED'];

const AddToCalendarButton = () => {
  const handleAddToCalendarClick = () => {
    atcb_action({
      name: 'Some Event',
      startDate: '2022-10-14',
      endDate: '2022-10-18',
      options: ['Apple', 'Google'],
      location: `Markham Main Street`,
      timeZone: 'Europe/Berlin',
      trigger: 'click',
      iCalFileName: 'Reminder-Event',
    });
  };

  return (
    <button
      className="bg-bubblered text-white font-md py-2 rounded inline-flex justify-center gap-2 w-3/4"
      onClick={handleAddToCalendarClick}
    >
      <Image src={CalendarIcon} alt="Add To Calendar Icon" />
      <span>Add To Calendar</span>
    </button>
  );
};

const SubmitButton = ({ loading }) => (
  <button
    type="submit"
    className={`bg-bubbleblue text-white font-md mt-24 mb-5 py-2 rounded inline-flex justify-center gap-2 w-3/4 ${
      loading ? 'disabled' : null
    }`}
  >
    {loading ? (
      <div className="text-left">
        <svg
          role="status"
          className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    ) : (
      <Image src={SendIcon} alt="Send Icon" />
    )}
    <span>{loading ? 'Sending...' : `Send Response`}</span>
  </button>
);

const Event = ({
  id,
  title,
  startDate,
  locationName,
  locationDetails,
  note,
  attendees,
  gif,
}) => {
  const [sentResponse, setSentResponse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [rsvpIndex, setRsvpIndex] = useState(0);
  const firebaseRef = doc(db, 'events', String(id));

  const handleSubmit = async () => {
    setLoading(true);

    const attendingList = new Map(Object.entries(attendees));
    attendingList.set(firstName.trim().toLowerCase(), rsvpChoices[rsvpIndex]);

    try {
      await updateDoc(firebaseRef, {
        attendees: Object.fromEntries(attendingList),
      });

      setSentResponse(true);
      setLoading(false);
    } catch (error) {
      console.log(`Firebase error: ${error}`);
      setLoading(false);
    }
  };

  const handleRSVPChange = async (index) => {
    setRsvpIndex(index);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={gif.url} />
        <meta name="twitter:image" content={gif.url} />
        <meta
          property="og:url"
          content={`https://bubble-web-app.vercel.app/`}
        />
        <meta property="og:site_name" content={'Bubble Cal'} />
        <meta
          property="og:description"
          content={'Manage your personal schedule'}
        />

        <title>{title}</title>
      </Head>
      <body className="bg-cream">
        <div className="p-3 flex flex-col items-center">
          <h1 className="font-bold text-xl mb-2 text-bubbleblue uppercase self-stretch">
            {title}
          </h1>
          <div className="flex flex-col py-0.5 my-2 self-stretch">
            <span className="bg-red-100 text-red-800 text-sm font-semibold inline-flex items-center gap-2 mr-2 px-2.5 pb-2 rounded-t dark:bg-red-200 dark:text-red-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              {locationName} | {locationDetails}
            </span>
            <span className="bg-red-100 text-red-800 text-sm font-semibold inline-flex items-center gap-2 mr-2 px-2.5 rounded-b dark:bg-red-200 dark:text-red-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              {moment(new Date(startDate * 1000)).format('dddd, MMMM Do YYYY')}
            </span>
          </div>
          <span className="block bg-slate-100 text-slate-800 text-md font-medium px-2.5 py-0.5 rounded dark:bg-slate-200 dark:text-slate-900 break-all mr-2 self-stretch">
            {note}
          </span>
          <GifImage gif={gif} />
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center"
          >
            <label className="block mb-2 text-sm font-medium">First name</label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-60 p-2.5"
              placeholder="John"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              required
            />
            <Dropdown
              choices={rsvpChoices}
              handleRSVPChange={handleRSVPChange}
              selectedIndex={rsvpIndex}
            />
            {sentResponse ? (
              <div className="flex gap-2 mb-2">
                <Image src={CheckIcon} alt="Checkmark Icon" />
                <p>Response Submitted.</p>
              </div>
            ) : (
              <SubmitButton loading={loading} />
            )}
          </form>

          <AddToCalendarButton />
        </div>
      </body>
    </>
  );
};

const handleRandomGifGeneration = async () => {
  const giphyFetch = new GiphyFetch('6sPohQWdItR2MgaWgyRNN1MZQhMWuPyI');
  const { data } = await giphyFetch.random({
    tag: 'excited',
    type: 'gifs',
  });

  return data;
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const eventRef = doc(db, 'events', id);
  const document = await getDoc(eventRef);
  const data = document.data();
  const gif = await handleRandomGifGeneration();

  const { title, locationName, locationDetails, note, attendees } = data;
  const startDate = data.startDate.seconds;

  return {
    props: {
      id,
      title,
      startDate,
      locationName,
      locationDetails,
      note,
      attendees,
      gif,
    },
  };
}

export default Event;
