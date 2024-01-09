import React from 'react';

interface TeamDetailProps {
    pokemon: any;
}

const TeamDetail: React.FC<TeamDetailProps> = ({ pokemon}) => {
    return (
        <div>
            <img src={image} alt={name} />
            <h2>{pokemon.name}</h2>
            <p>{type}</p>
        </div>
    );
};

export default TeamDetail;
