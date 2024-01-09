import React, { useState, useEffect } from "react";

const TeamCard: React.FC<{ pokemon: any }> = ({ pokemon }) => {
  console.log(pokemon);
  console.log(pokemon.url);
  const [isLoading, setIsLoading] = useState(true);

  const [pokemonData, setPokemonData] = useState([] as any);

  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemonData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
function handleCardClick(){
  console.log(pokemonData)
  return <TeamDetail pokemon={pokemonData} />
}

  const typeNames = pokemonData.types.map((type: any) => type.type.name);

  return (
    <div className='team-card-div' onClick={()=> handleCardClick()} style={{ display:'flex', flexDirection: "row", alignItems: 'normal' }}>
      <img
        className="team-card-img"
        src={pokemonData.sprites.front_default}
        alt={pokemonData.name}
      />
      <div className="team-card-stats">
        <h2 className="team-card-name">{pokemonData.name}</h2>
        <h3 className="team-card-type">{typeNames.join(", ")}</h3>
      </div>
    </div>
  );
};

const TeamDetail: React.FC<{ pokemon: any }> = ({ pokemon }) => {
  return (
    <div>
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>{pokemon.type}</p>
    </div>
  );
}


export { TeamCard, TeamDetail };
