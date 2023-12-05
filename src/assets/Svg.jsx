import clsx from "clsx";

export const SubjectsIcon = ({ className, fill }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{
        width: "2.5rem",
        height: "2.5rem",
        padding: "6px",
        borderRadius: "6px",
      }}
    >
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path
        fill={fill}
        d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
      ></path>
    </svg>
  );
};

export const TeachersIcon = ({ className, fill }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      width: "2.5rem",
      height: "2.5rem",
      padding: "6px",
      borderRadius: "6px",
    }}
  >
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path
      fill={fill}
      d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z"
    ></path>
  </svg>
);

export const DateIcon = ({ className, fill }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      width: "2.5rem",
      height: "2.5rem",
      padding: "6px",
      borderRadius: "6px",
    }}
  >
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path
      fill={fill}
      d="M19 4h-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v10zM7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"
    ></path>
  </svg>
);

export const CardIcon = ({ className, fill }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      width: "2.5rem",
      height: "2.5rem",
      padding: "6px",
      borderRadius: "6px",
    }}
  >
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path
      fill={fill}
      d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
    ></path>
  </svg>
);

export const StudentIcon = ({ className, fill }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    viewBox="0 0 24 24"
    style={{
      width: "2.5rem",
      height: "2.5rem",
      padding: "6px",
      borderRadius: "6px",
    }}
  >
    <g>
      <rect fill="none" height="24" width="24"></rect>
      <path
        fill={fill}
        d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M13,17H8c-0.55,0-1-0.45-1-1 c0-0.55,0.45-1,1-1h5c0.55,0,1,0.45,1,1C14,16.55,13.55,17,13,17z M16,13H8c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1h8 c0.55,0,1,0.45,1,1C17,12.55,16.55,13,16,13z M16,9H8C7.45,9,7,8.55,7,8c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1 C17,8.55,16.55,9,16,9z"
      ></path>
    </g>
  </svg>
);

export const SummaryIcon = ({ className, fill }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      width: "2.5rem",
      height: "2.5rem",
      padding: "6px",
      borderRadius: "6px",
    }}
  >
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path
      fill={fill}
      d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9.29 16.29L6.7 13.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l5.88-5.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-6.59 6.59c-.38.39-1.02.39-1.41 0z"
    ></path>
  </svg>
);

export const CheckMark = ({ className, fill }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path
      fill={fill}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29 5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"
    ></path>
  </svg>
);

export const SubHeroIcon = ({ className, fill }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0V0z" fill="none"></path>{" "}
    <path
      fill={fill}
      d="M13.2 7.07L10.25 11l2.25 3c.33.44.24 1.07-.2 1.4-.44.33-1.07.25-1.4-.2-1.05-1.4-2.31-3.07-3.1-4.14-.4-.53-1.2-.53-1.6 0l-4 5.33c-.49.67-.02 1.61.8 1.61h18c.82 0 1.29-.94.8-1.6l-7-9.33c-.4-.54-1.2-.54-1.6 0z"
    ></path>
  </svg>
);

export const ExclamationMark = ({ className, fill }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-3h-2v-2h2v2z"
    ></path>
  </svg>
);
