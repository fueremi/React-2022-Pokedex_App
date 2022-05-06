import axios from "axios";
import { useEffect, useState } from "react";
import { HeaderComponent, HeaderSearchComponent } from "./components/header";
import {
  InitialMainComponent,
  MainComponent,
  NotFoundMainComponent,
} from "./components/main";

export interface IPokemon {
  id: number;
  name: string;
  image_front?: string;
}
export interface INotFound {
  check: boolean;
  message: string;
}

const App = () => {
  //? States
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [notFound, setNotFound] = useState<INotFound>();
  //? Functions
  // const fecthPokemons = async (): Promise<void> => {
  //   try {
  //     const res = await axios.get(
  //       "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  //     );
  //     let result: any[] = [];
  //     res.data.results.map(async (item: IPokemon) => {
  //       try {
  //         const { data } = await axios.get(item.url);

  //         const pokemon: IPokemon = {
  //           id: data.id,
  //           name: item.name,
  //           image_front: data.sprites.front_default,
  //         };
  //         result = [...result, pokemon];
  //         result.sort(function (a, b) {
  //           return a.id - b.id || a.name.localeCompare(b.name);
  //         });

  //         setPokemons(result);
  //       } catch (err) {}
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const fetchPokemonByIdOrName = async (
    payload: string
  ): Promise<IPokemon | undefined> => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${payload}`
      );
      return {
        id: res.data.id,
        name: res.data.name,
        image_front: res.data.sprites.front_default,
      };
    } catch (err) {
      setNotFound({ check: true, message: "Pokémon Not Found!" });
    }
  };
  const handlingSearch = async (
    e: React.FormEvent<HTMLFormElement>,
    payload: string
  ) => {
    e.preventDefault();
    setNotFound({
      check: false,
      message: "",
    });
    const response = await fetchPokemonByIdOrName(payload);
    if (response !== undefined) {
      setPokemon(response);
    }
  };

  return (
    <div className="bg-[#F5FBFB] px-4 py-10 min-h-screen font-poppins flex flex-col">
      <HeaderComponent />
      <HeaderSearchComponent handleSubmit={handlingSearch} />
      {notFound?.check ? (
        <NotFoundMainComponent message={notFound.message} />
      ) : (
        <>
          {pokemon ? (
            <MainComponent pokemon={pokemon} />
          ) : (
            <InitialMainComponent />
          )}
        </>
      )}
    </div>
  );
};

export default App;
