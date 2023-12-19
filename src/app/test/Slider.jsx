import clsx from "clsx";
import { useEffect, useState } from "react";

const Data = [
  {
    name: "Wedding Loan",
    image:
      "bg-[url(https://images.unsplash.com/photo-1682687981907-170c006e3744?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]",
  },
  {
    name: "Lifestyle lone",
    image:
      "bg-[url(https://images.unsplash.com/photo-1702893575487-90a6423e67a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]",
  },
  {
    name: "Medical lone",
    image:
      "bg-[url(https://images.unsplash.com/photo-1682685797303-0ad51eb23e13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]",
  },
  {
    name: "Vehicle lone",
    image:
      "bg-[url(https://images.unsplash.com/photo-1702350310746-c318426d9ee2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]",
  },
];

function Slider() {
  const [people] = useState(Data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <div className={`relative flex overflow-hidden min-h-screen`}>
        {people.map(({ name, image }, personIndex) => {
          let position = " translate-x-full";
          if (personIndex === index) {
            position = " opacity-95 translate-x-0";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = " -translate-x-full";
          }
          return (
            <article
              key={personIndex}
              className={`absolute opacity-0 ease-linear duration-500 ${position}`}
            >
              <div className={clsx("min-h-screen w-screen", image)}>
                <div className="text-white text-7xl font-bold min-h-screen flex justify-center items-center">
                  {name}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default Slider;
