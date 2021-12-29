"using strict";

const pokeNameEl = document.querySelector(".pokeName");
const pokeModelEl = document.querySelector(".pokeModel");
const pokeIdEl = document.querySelector(".pokeId");
const pokeHeightEl = document.querySelector(".pokeHeight");
const pokeWeightEl = document.querySelector(".pokeWeight");
const pokeAbilityEl = document.querySelector(".pokeAbility");
const pokeTypeEl = document.querySelector(".pokeType");
const pokeFormEl = document.querySelector(".pokeForm");

const getRandomNumber = () => {
  let randomNumber = Math.trunc(Math.random() * 150 + 1);
  console.log(randomNumber);
};

const fetchPokemon = (pokeName) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      pokeNameEl.textContent = data.name.toUpperCase();
    });
};

// fetchPokemon("shellder");

const randomPokemon = (pokeId) => {
  const pokeContainer = document.getElementById("poke-container");
  const pokeCard = document.createElement("div");
  const pokeName = document.createElement("h4");
  const pokeType = document.createElement("p");
  const pokeImage = document.createElement("img");
  const pokeTypes = document.createElement("div");
  pokeCard.append(pokeName, pokeType, pokeImage, pokeTypes);
  pokeContainer.append(pokeCard);
  pokeCard.className = "pokeCard";
  pokeTypes.className = "pokeType";

  const createTypes = (types, ul) => {
    types.forEach(function (type) {
      const typeLi = document.createElement("p");
      typeLi.innerText = type["type"]["name"];
      ul.append(typeLi);
    });
  };

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      pokeName.textContent = data.name.toUpperCase();
      pokeType.textContent = data.id;
      pokeImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeId}.png`;
      createTypes(data.types, pokeTypes);
    });
};

getRandomNumber();

randomPokemon(2);
randomPokemon(44);
randomPokemon(14);
randomPokemon(24);
randomPokemon(21);
randomPokemon(19);
randomPokemon(29);
randomPokemon(36);
randomPokemon(74);
randomPokemon(72);
randomPokemon(69);
randomPokemon(64);
randomPokemon(86);
randomPokemon(92);
randomPokemon(80);
randomPokemon(104);
randomPokemon(124);
randomPokemon(102);
randomPokemon(120);
randomPokemon(111);
randomPokemon(143);
randomPokemon(126);
randomPokemon(5);
