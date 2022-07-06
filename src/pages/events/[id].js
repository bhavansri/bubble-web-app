import { getDoc, doc } from 'firebase/firestore';
import { atcbAction } from 'add-to-calendar-button';
import moment from 'moment';
import { useState } from 'react';
import Image from 'next/image';
import { db } from '../../utils/firebase-config.ts';
import { Dropdown } from '../../dropdown/Dropdown.tsx';
import { GifImage } from '../../gifImage/GifImage.tsx';
import CalendarIcon from '../../../public/assets/images/calendar.svg';

const Event = ({ data }) => {
  const [displayCalendarButton, setDisplayCalendarButton] = useState(true);
  const { locationName, locationDetails, title, note, startDate } =
    JSON.parse(data);

  const handleRSVPChange = (index) => {
    if (index === 0 || index === 1) {
      setDisplayCalendarButton(true);
    } else {
      setDisplayCalendarButton(false);
    }
  };

  const handleAddToCalendarClick = () => {
    atcbAction({
      name: 'Some Event',
      startDate: '2022-10-14',
      endDate: '2022-10-18',
      options: ['Apple', 'Google'],
      location: `${locationName} + " " + ${locationDetails}`,
      timeZone: 'Europe/Berlin',
      trigger: 'click',
      iCalFileName: 'Reminder-Event',
    });
  };

  return (
    <div className="m-3">
      <h1 className="font-medium text-5xl mb-2">{title}</h1>
      <h5 className="font-medium text-xl mb-2">{locationName}</h5>
      <h5 className="font-medium text-xl mb-2">{locationDetails}</h5>
      <h5 className="font-medium text-xl mb-2">
        {moment(new Date(startDate.seconds * 1000)).format(
          'dddd, MMMM Do YYYY'
        )}
      </h5>
      <h6 className="font-medium text-base mb-2">{note}</h6>
      <Dropdown
        choices={['Going', 'Maybe', "Can't Attend"]}
        handleRSVPChange={handleRSVPChange}
      />
      {displayCalendarButton && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-5 py-2 px-4 rounded flex items-center gap-2"
          onClick={handleAddToCalendarClick}
        >
          <Image src={CalendarIcon} alt="Add To Calendar Icon" />
          <span>Add To Calendar</span>
        </button>
      )}
      <GifImage />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const eventRef = doc(db, 'events', id);
  const document = await getDoc(eventRef);
  const data = JSON.stringify(document.data());

  return { props: { data } };
}

export default Event;
