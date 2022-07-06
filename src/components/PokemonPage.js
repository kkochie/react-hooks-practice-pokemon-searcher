import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [cardArrayFromFetch, setCardArrayFromFetch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => res.json())
      .then((data) => {
        setCardArrayFromFetch(data);
      });
  }, []);

  function getNewCardFromForm(newCard) {
    setCardArrayFromFetch((cardArrayFromFetch) => [
      ...cardArrayFromFetch,
      newCard,
    ]);
  }

  const cardsToDisplay = cardArrayFromFetch.filter((card) => {
    return card.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewCard={getNewCardFromForm} />
      <br />
      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <br />
      <PokemonCollection pokemon={cardsToDisplay} />
    </Container>
  );
}

export default PokemonPage;
