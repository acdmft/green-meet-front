import React from 'react';


function ContributorsCard(props) {
    return (

        <div className="hover:bg-gmvert-dark ease-in-out transform translate hover:-translate-y-1 hover:scale-105 hover:transition-all duration-500 p-6 h-64 rounded-lg border bg-gray-800 opacity-80 border-gray-700 m-5 flex flex-col relative md:w-1/3 flex flex-col items-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{props.name}</h5>
        </div>

    )
}

export default ContributorsCard;