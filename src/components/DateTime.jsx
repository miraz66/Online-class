import { useState } from "react";
import DateSection from "./DateSection";
import TimeSelector from "./TimeSelector";
import Selector from "./Selector";
import { Data } from "@/assets/TimeSlotData";
import ClassTimeCard from "./ClassTimeCard";

export default function DateTime({ setActive }) {
  let [selectedDay, setSelectedDay] = useState(null);
  const [selected, setSelected] = useState(null);
  const [classTimeSelect, setClassTimeSelect] = useState(null);

  return (
    <div className="">
      <h5 className="font-semibold text-2xl relative after:absolute after:bg-secondary after:h-[2px] after:w-40 after:-bottom-[6px] after:left-0">
        Date & Time
      </h5>
      <div className="mt-10 h-[35rem] gap-6 grid grid-cols-2">
        <DateSection
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />

        {!selected ? (
          <div className="border rounded-lg">
            <TimeSelector
              selected={selected}
              setSelected={setSelected}
              selectedDay={selectedDay}
            />
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 h-14 items-center justify-center border rounded-md">
              <Selector
                selected={selected}
                setSelected={setSelected}
                selectedDay={selectedDay}
              />
              <div className="bg-neutral-100 h-full flex items-center justify-center">
                <p className="">Price: $70.00</p>
              </div>
            </div>
            <div className="p-4 h-[468px] pb-20 overflow-y-scroll side-scroll mt-[52px] border rounded-md">
              <h6 className="font-semibold text-xl text-neutral-800 border-b-2 border-lime-300">
                Time slot
              </h6>
              {Data.map((data, index) => (
                <div key={index}>
                  {data.time === selected && (
                    <>
                      {data.Morning && (
                        <div>
                          <p className="font-semibold text-lg text-neutral-800 mb-3 pt-5">
                            Morning
                          </p>
                          <div className="grid grid-cols-2 auto-rows-auto gap-4">
                            {data.Morning.map((data) => (
                              <ClassTimeCard
                                key={index}
                                time={data}
                                classTimeSelect={classTimeSelect}
                                setClassTimeSelect={setClassTimeSelect}
                                setActive={setActive}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      {data.Afternoon && (
                        <>
                          <p className="font-semibold text-lg text-neutral-800 mb-3 pt-5">
                            Afternoon
                          </p>
                          <div className="grid grid-cols-2 auto-rows-auto gap-4">
                            {data.Afternoon.map((data) => (
                              <ClassTimeCard
                                key={index}
                                time={data}
                                classTimeSelect={classTimeSelect}
                                setClassTimeSelect={setClassTimeSelect}
                                setActive={setActive}
                              />
                            ))}
                          </div>
                        </>
                      )}
                      {data.Evening && (
                        <>
                          <p className="font-semibold text-lg text-neutral-800 mb-3 pt-5">
                            Evening
                          </p>
                          <div className="grid grid-cols-2 auto-rows-auto gap-4">
                            {data.Evening.map((data) => (
                              <ClassTimeCard
                                key={index}
                                time={data}
                                classTimeSelect={classTimeSelect}
                                setClassTimeSelect={setClassTimeSelect}
                                setActive={setActive}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              ))}

              <div className=""></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
