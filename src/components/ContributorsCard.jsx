import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function ContributorsCard(props) {
    return (

        <div className="hover:bg-gmvert-dark ease-in-out transform translate hover:-translate-y-1 hover:scale-105 hover:transition-all duration-500 p-6 h-64 rounded-lg border bg-gray-800 opacity-80 border-gray-700 m-5 flex flex-col items-center text-gmlime-light gap-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{props.name}</h5>
            <a className="text-2xl" target="_blank" href={`${props.linkGithub}`}><FaGithub /></a>
            <a className="text-2xl" target="_blank" href={`${props.linkLinkedin}`}><FaLinkedin /></a>
        </div>

    )
}

export default ContributorsCard;