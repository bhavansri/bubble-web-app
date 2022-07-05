import { collection, getDoc, doc } from 'firebase/firestore';
import { atcb_action } from 'add-to-calendar-button';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { db } from '../../utils/firebase-config.ts';
import { Dropdown } from '../../dropdown/Dropdown.tsx';
import { GifImage } from '../../gifImage/GifImage.tsx';
import CalendarIcon from '../../../public/assets/images/calendar.svg';

const Event = ({ data }) => {
  const [displayCalendarButton, setDisplayCalendarButton] = useState(true);
  const { location, title, note, startDate } = JSON.parse(data);

  const handleRSVPChange = (index) => {
    if (index === 0 || index === 1) {
      setDisplayCalendarButton(true);
    } else {
      setDisplayCalendarButton(false);
    }
  };

  const handleAddToCalendarClick = () => {
    atcb_action({
      name: 'Some Event',
      startDate: '2022-10-14',
      endDate: '2022-10-18',
      options: ['Apple', 'Google'],
      timeZone: 'Europe/Berlin',
      trigger: 'click',
      iCalFileName: 'Reminder-Event',
    });
  };

  return (
    <div className="m-3">
      <h1 className="font-medium text-5xl mb-2">{title}</h1>
      <h5 className="font-medium text-xl mb-2">{location}</h5>
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
  const eventRef = doc(db, 'events', '3bxTD0MdFoWHyQChdVPE');
  const document = await getDoc(eventRef);
  const data = JSON.stringify(document.data());

  return { props: { data } };
}

export default Event;
