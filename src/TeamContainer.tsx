import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import TeamDetail from "./TeamCard";


const TeamContainer: React.FC<{ pokedex: any }> = ({ pokedex }) => {
    const [team, setTeam] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const selectRandomPokemon = () => {
        if (team.length === 0) {
            const randomIndexes = new Set<number>();
            while (randomIndexes.size < 6) {
                const randomIndex = Math.floor(Math.random() * 1024);
                randomIndexes.add(randomIndex);
            }
            const selectedPokemon = Array.from(randomIndexes).map(
                (index) => pokedex[index]
            );
            setTeam(selectedPokemon);
        }
    };

    useEffect(() => {
        selectRandomPokemon();
    }, [pokedex]);

    

    return (
        <div className="team-container-page" style={{ width: '100vw', height: '100vh' }}>
            <h1 className="team-container-roster-name" >Pokemon Team</h1>
            <div className='team-container-roster' style={{display:'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                {team.map((pokemon: any, index: number) => (
                    <TeamCard key={index} pokemon={pokemon} onClick={() => handleTeamCardClick(pokemon)} />
                ))}
            </div>
            <div className='team-container-detail' style={{display:'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                {selectedPokemon && <TeamDetail pokemon={selectedPokemon} />}
            
        </div>
        </div>
    );
};

export default TeamContainer;


