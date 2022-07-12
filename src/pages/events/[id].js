import { getDoc, doc } from 'firebase/firestore';
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
      className="bg-bubblered text-white font-md mt-16 mb-5 py-2 rounded inline-flex justify-center gap-2 w-3/4"
      onClick={handleAddToCalendarClick}
    >
      <Image src={CalendarIcon} alt="Add To Calendar Icon" />
      <span>Add To Calendar</span>
    </button>
  );
};

const Event = ({
  title,
  startDate,
  locationName,
  locationDetails,
  note,
  gif,
}) => {
  const [sentResponse, setSentResponse] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [rsvpIndex, setRsvpIndex] = useState(0);

  const handleSubmit = async () => {
    setSentResponse(true);
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
        <meta property="og:url" content={`https://www.bubblecalendar.app/`} />
        <meta property="og:site_name" content={'Bubble Cal'} />
        <meta
          property="og:description"
          content={'Social events organized in seconds.'}
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
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-60 p-2.5"
            placeholder="John"
            value={firstName}
            onChange={(event) => {
              event.preventDefault();
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
            <>
              <div className="flex gap-2 mb-2">
                <Image src={CheckIcon} alt="Checkmark Icon" />
                <p>Response Submitted.</p>
              </div>
              <AddToCalendarButton />
            </>
          ) : (
            <button
              className={`bg-bubbleblue text-white font-md mt-24 mb-5 py-2 rounded inline-flex justify-center gap-2 w-3/4`}
              onClick={handleSubmit}
            >
              <Image src={SendIcon} alt="Send Icon" />
              <span>Send Response</span>
            </button>
          )}
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

  const { title, locationName, locationDetails, note } = data;
  const startDate = data.startDate.seconds;

  return {
    props: {
      id,
      title,
      startDate,
      locationName,
      locationDetails,
      note,
      gif,
    },
  };
}

export default Event;
