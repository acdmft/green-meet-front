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
    fetch("/account/actions")
      .then((res) => res.json())
      .then((res) => {
        setActions([res.data]);
      });
  }, [toggle]);

  return (
    <div>
      {user.length !== 0 && (
        <div>
          <h2>
            {user[0].last_name} {user[0].first_name}
          </h2>
          <p>Ville : {user[0].city}</p>
          <p>Email : {user[0].email}</p>
        </div>
      )}
      <div className="mx-auto">
        {actions.length !== 0 &&
          actions.map((action, index) => {
            console.log("TITLE", action[0].title);
            return (
              <ActionCard
                id={action[0].action_id}
                key={index}
                title={action[0].title}
                description={action[0].description}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Profile;
