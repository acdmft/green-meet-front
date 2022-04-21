import { React } from "react";
import ArrowButton from "./ArrowButton";
import { useNavigate } from "react-router-dom";

function ActionCard(props) {
  let navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/actions/${id}`);
  };
  return (
    <div className="">
      <div className="hover:bg-gmvert-dark ease-in-out transform translate hover:-translate-y-1 hover:scale-105 hover:transition-all duration-500 p-6 h-64 rounded-lg border bg-gray-800 opacity-80 border-gray-700 m-5 flex flex-col relative">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {props.title}
          </h5>
        </a>
        <p className="text-white description">{props.description}</p>
        {/* <a
        href="#"
        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Voir plus
        <svg
          class="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a> */}
        <div className="sm:w-1/2 absolute bottom-3 left-6">
          <ArrowButton onClick={() => handleClick(props.id)}>
            Voir plus
          </ArrowButton>
        </div>
      </div>
    </div>
  );
}

export default ActionCard;
