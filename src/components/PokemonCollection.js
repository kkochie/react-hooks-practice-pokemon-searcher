import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  const cards = pokemon.map((card) => {
    return <PokemonCard key={card.id} pokemon={card} />;
  });

  return (
    <div>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>{cards}</Card.Group>
    </div>
  );
}

export default PokemonCollection;
