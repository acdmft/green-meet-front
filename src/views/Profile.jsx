import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ActionCard from "../components/ActionCard";

function Profile() {
  const [user, setUser] = useState(null);
  const [actions, setActions] = useState(null);
  const [organiseActions, setOrganiseActions] = useState([]);
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
        if (res.data) {
          setActions([res.data]);
          console.log(res.data);
          fetch(`/actions/organiser/${res.data[0].user_id}`)
            .then((res) => res.json())
            .then((res) => {
              // console.log("DATA", res.data);
              setOrganiseActions([res.data]);
            });
        }
      });
  }, [toggle]);

  const RenderNoActions = () => {
    return <p>Vous n'êtes inscrit à aucune action</p>;
  };

  const RenderUser = () => {
    return (
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
    );
  };

  const RenderActions = () => {
    return (
      <div>
        <div className="flex flex-col justify-center mx-auto items-center m-11">
          <h2 className="text-3xl">Actions auxquelles je participe : </h2>
        </div>
        <div className="mx-11 flex flex-col">
          {actions.length !== 0 &&
            actions[0].map((action, index) => {
              return (
                <ActionCard
                  id={action.action_id}
                  key={index}
                  title={action.title}
                  description={action.description}
                />
              );
            })}
        </div>
      </div>
    );
  };

  const RenderOrganiser = () => {
    return (
      <div>
        <div className="flex flex-col justify-center mx-auto items-center m-11">
          <h2 className="text-3xl">Les actions que j'organise : </h2>
        </div>
        <div className="mx-11 flex flex-col">
          {organiseActions &&
            organiseActions.map((action, index) => {
              return (
                <ActionCard
                  id={action.action_id}
                  key={index}
                  title={action.title}
                  description={action.description}
                />
              );
            })}
        </div>
      </div>
    );
  };

  return (
    <div>
      {user && RenderUser()}
      {actions ? RenderActions() : RenderNoActions()}
      {organiseActions && RenderOrganiser()}
    </div>
  );
}

export default Profile;
