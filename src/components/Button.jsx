import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-gmlime-light hover:bg-gmgreen-dark text-gmgreen-dark hover:text-gmlime-light font-bold py-2 px-4 rounded inline-flex items-center"
    >
      <span>{props.children}</span>
    </button>
  );
}

export default Button;
