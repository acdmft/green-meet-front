import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ActionCard from "../components/ActionCard";

function Profile() {
  const [user, setUser] = useState([]);
  const [actions, setActions] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch("/account")
      .then((res) => res.json())
      .then((res) => {
        setUser([res.data]);
        setToggle(!toggle);
      });
  }, []);

  useEffect(() => {
    console.log("OK");
    fetch("/account/actions")
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setActions([res.data]);
        }
      });
  }, [toggle]);

  const RenderNoActions = () => {
    return <p>Vous n'êtes inscrit à aucune action</p>;
  };
  console.log(actions.length);
  return (
    <div>
      {user.length !== 0 && (
        <div className="flex flex-col justify-center mx-auto items-center m-11">
          <h2 className="text-3xl">
            {user[0].last_name} {user[0].first_name}
          </h2>
          <p>
            <span className="">Ville : </span>
            {user[0].city.replace("-", " ")}
          </p>
          <p>Email : {user[0].email}</p>
        </div>
      )}
      <div className="mx-auto">
        {console.log("ACTION", actions)}

        {actions.length !== 0 &&
          actions.map((action, index) => {
            return (
              <div className="mx-11 flex flex-col">
                <ActionCard
                  id={action[0].action_id}
                  key={index}
                  title={action[0].title}
                  description={action[0].description}
                />
              </div>
            );
          })}
      </div>
      <div className="flex flex-col justify-center mx-auto items-center m-11">
        <h2 className="text-3xl">Vos actions</h2>
      </div>
    </div>
  );
}

export default Profile;
