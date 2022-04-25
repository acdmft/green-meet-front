import React from "react";
import ContributorsCard from "../components/ContributorsCard";

function Contributors() {
  return (
    <>
      <h1 className="text-gmgreen-medium text-lg md:text-xl lg:text-3xl flex justify-center font-bold pt-14">Les Contributeurs</h1>
      <div className="flex flex-col w-2/3 mx-auto justify-center mt-6 lg:grid lg:grid-cols-2 xl:w-1/2">
        <ContributorsCard name="Jean-Léonard Moerdijk" linkGithub="https://github.com/jlmoer" linkLinkedin="https://www.linkedin.com/in/jean-l%C3%A9onard-moerdijk/" />
        <ContributorsCard name="Caroline Lamy" linkGithub="https://github.com/Charotti" linkLinkedin="https://www.linkedin.com/in/caroline-lamy-webdev/" />
        <ContributorsCard name="Andrei Zheksimbaev" linkGithub="https://github.com/acdmft" linkLinkedin="https://www.linkedin.com/in/andrei-zheksim/" />
        <ContributorsCard name="Adrien Gogois" linkGithub="https://github.com/Adrien-GOGOIS" linkLinkedin="https://www.linkedin.com/in/adrien-gogois-940501212/" />
      </div>
    </>
  )
};

export default Contributors;
