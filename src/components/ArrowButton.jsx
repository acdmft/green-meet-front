import React from "react";

function ArrowButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-gmlime-light hover:bg-gmgreen-dark text-black hover:text-gmlime-light font-bold py-2 px-4 rounded inline-flex items-center "
    >
      <span>{props.children}</span>
      <svg
        className="ml-2 -mr-1 w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
}

export default ArrowButton;
