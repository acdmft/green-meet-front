import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import ActionCard from "../components/ActionCard";

import "../App.css";

function Profile(props) {
  const [user, setUser] = useState(null);
  const [actions, setActions] = useState([]);
  const [organiseActions, setOrganiseActions] = useState([]);
  const [toggle, setToggle] = useState(false);

  // Voir promiseAll dans weather App Github Julie
  useEffect(() => {
    fetch("/account")
      .then((res) => res.json())
      .then((res) => {
        setUser(res.data);
        fetch("/account/actions")
          .then((res) => res.json())
          .then((res) => {
            if (res.data) {
              setActions(res.data);
              fetch(`/actions/organiser/${res.data[0].user_id}`)
                .then((res) => res.json())
                .then((res) => {
                  if (res.data) {
                    console.log("DATA", res.data);

                    setOrganiseActions(res.data);
                  }
                });
            }
            // console.log(res.data);
          });
      });
  }, []);

  const deleteAction = (action_id) => {
    fetch(`/actions/${action_id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Vous avez supprimé cette action !");
        } else {
          toast.error("vous avez déjà supprimée cette action !");
        }
      })
      .catch((err) => {
        toast.error("Quelque chose s'est mal passé, réessayez plus tard !");
        console.log(err);
      });
  };

  const modifyAction = (action_id) => {
    console.log(action_id);
  };

  const RenderNoActions = () => {
    return (
      <div className="flex flex-col items-center text-bold">
        <h2 className="text-xl">Vous n'êtes inscrit à aucune action</h2>
        <Link to="/actions">
          <span className="text-gmvert-dark">Cliquez pour participer !</span>
        </Link>
      </div>
    );
  };

  const RenderNoOrganiseAction = () => {
    return (
      <div className="flex flex-col items-center mt-11 text-bold">
        <h2 className="text-xl">Vous n'avez créé aucune action</h2>
        <Link to="/addAction">
          <span className="text-gmvert-dark">
            Cliquez pour proposer une action !
          </span>
        </Link>
      </div>
    );
  };
  // let city =
  //         user[0].city.charAt(0).toUpperCase() + user[0].city.slice(1);
  //       user[0].city = city.replace(/(-)/gi, " ");

  const RenderUser = () => {
    // console.log("user", user);
    if (!user) {
      return (
        <div className="ml-96 mt-52 loader flex flex-col items-center">
          <div className="loader2">
            <div className="round1"></div>
            <div className="round2"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col justify-center mx-auto items-center m-11">
          <h2 className="text-3xl">
            {user.last_name} {user.first_name}
          </h2>
          <p>
            <span className="">Ville : </span>
            {user.city.replace(/(-)/gi, " ").charAt(0).toUpperCase() +
              user.city.slice(1)}
          </p>
          <p>Email : {user.email}</p>
        </div>
      );
    }
  };

  const RenderActions = () => {
    // console.log("ACTIONS", actions);

    if (!actions) {
      return (
        <div className="ml-96 mt-52 loader flex flex-col items-center">
          <div className="loader2">
            <div className="round1"></div>
            <div className="round2"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="flex flex-col justify-center mx-auto items-center m-11">
            <h2 className="text-lg md:text-3xl">
              Actions auxquelles je participe :{" "}
            </h2>
          </div>
          <div className="mx-11 flex flex-col">
            {actions.length !== 0 &&
              actions
                .filter((action) => {
                  return action.status === 0;
                })
                .map((action, index) => {
                  return (
                    <div className="lg:w-2/3 mx-auto">
                      <ActionCard
                        id={action.action_id}
                        key={index}
                        title={action.title}
                        description={action.description}
                      />
                    </div>
                  );
                })}
          </div>
        </div>
      );
    }
  };

  const RenderOrganiser = () => {
    console.log("organiseActions", organiseActions);

    if (!organiseActions) {
      return (
        <div className="ml-96 mt-52 loader flex flex-col items-center">
          <div className="loader2">
            <div className="round1"></div>
            <div className="round2"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="flex flex-col justify-center mx-auto items-center m-11">
            <h2 className=" text-lg md:text-3xl">
              Les actions que j'organise :{" "}
            </h2>
          </div>
          <div className="mx-11 flex flex-col">
            {organiseActions &&
              organiseActions
                .filter((action) => {
                  return action.status === 0;
                })
                .map((action, index) => {
                  return (
                    <div className="flex flex-col relative lg:w-2/3 mx-auto">
                      <ActionCard
                        id={action.action_id}
                        key={index}
                        title={action.title}
                        description={action.description}
                      />
                      <button
                        className="text-center bg-red-600 w-28 h-8 rounded absolute font-bold right-10 top-1 border hover:opacity-90 hover:border-black transform duration-500 border-white"
                        onClick={() => deleteAction(action.action_id)}
                      >
                        Annuler
                      </button>
                      <button
                        className="text-center bg-yellow-500 w-28 h-8 rounded absolute font-bold right-44 top-1 border hover:opacity-90 hover:border-black transform duration-500 border-white"
                        onClick={() => modifyAction(action.action_id)}
                      >
                        Modifier
                      </button>
                    </div>
                  );
                })}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {RenderUser()}
      {actions.filter((action) => {
        return action.status === 0;
      }).length !== 0
        ? RenderActions()
        : RenderNoActions()}
      {organiseActions.filter((action) => {
        return action.status === 0;
      }).length !== 0
        ? RenderOrganiser()
        : RenderNoOrganiseAction()}
    </div>
  );
}

export default Profile;
