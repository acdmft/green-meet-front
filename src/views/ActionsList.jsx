import React, { useEffect, useState } from "react";
import ActionCard from "../components/ActionCard";

function ActionsList() {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        setActions(res);
      });
  }, []);
  return (
    <div className="flex justify-center">
      <div className="grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {actions.slice(0, 12).map((action) => {
          return (
            <ActionCard
              key={action.name}
              title={action.name.common}
              description={action.altSpellings}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ActionsList;
