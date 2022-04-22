import React from "react";
import ContributorsCard from "../components/ContributorsCard";

function Contributors() {
  return (
    <>
      <h1 className="text-gmgreen-medium text-lg md:text-xl lg:text-3xl flex justify-center font-bold pt-14">Les Contributeurs</h1>
      <div className="flex flex-wrap md:w-1/2 mx-auto justify-center mt-6">
        <ContributorsCard name="Jean-Léonard Moerdijk" />
        <ContributorsCard name="Caroline Lamy" />
        <ContributorsCard name="Andrei Zheksimbaev" />
        <ContributorsCard name="Adrien Gogois" />
      </div>
    </>
  )
};

export default Contributors;
