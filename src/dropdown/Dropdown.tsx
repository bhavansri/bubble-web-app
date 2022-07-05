import React, { useEffect, useRef, useState } from 'react';

type IDropdownProps = {
  choices: string[];
  handleRSVPChange: (index: number) => {};
};

const useOutsideClick = (callback) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return ref;
};

const Dropdown = (props: IDropdownProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClickOutside = () => {
    setShowOptions(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  return (
    <div className="relative text-left w-1/6">
      <div>
        <button
          ref={ref}
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          {props.choices[selectedIndex]}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {showOptions && (
        <div
          className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {props.choices.map((choice, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-sky-200"
                  role="menuitem"
                  tabIndex={-1}
                  onClick={() => {
                    setSelectedIndex(index);
                    setShowOptions(false);
                    props.handleRSVPChange(index);
                  }}
                  id="menu-item-0"
                >
                  {choice}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export { Dropdown };
