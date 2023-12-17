import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const Hours = [{ time: 2 }, { time: 3 }, { time: 4 }, { time: 5 }];

export default function Selector({ selected, setSelected, selectedDay }) {
  const [alert, setAlert] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 5000);

    return clearTimeout(handleButtonClick);
  };

  return (
    <>
      <Listbox
        onClick={setSelected && handleButtonClick}
        value={selected}
        onChange={selectedDay && setSelected}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-sm bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {!selected ? "Please select" : selected + " Hours"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {Hours.map(({ time }, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-lime-200" : "text-gray-900"
                    }`
                  }
                  value={time}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {time} Hours
                      </span>
                      {selected ? (
                        selectedDay ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-lime-500">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : (
                          ""
                        )
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      {alert && (
        <p className="absolute top-0 left-0 mx-5 my-3 px-5 flex gap-2 py-2 font-medium text-red-500 shadow-xl bg-neutral-100 before:absolute before:h-full before:top-0 before:left-0 before:w-1 before:bg-red-500">
          Please select day service to book the appointment.
        </p>
      )}
    </>
  );
}
