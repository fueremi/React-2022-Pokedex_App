import axios from "axios";
import { useEffect, useState } from "react";
import { HeaderComponent, HeaderSearchComponent } from "./components/header";
import { InitialMainComponent, NotFoundMainComponent } from "./components/main";

export interface IPokemon {
  id: number;
  name: string;
  url: string;
  image_front?: string;
}
export interface INotFound {
  check: boolean;
  message: string;
}

const App = () => {
  //? States
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [notFound, setNotFound] = useState<INotFound>();
  //? Functions
  const fecthPokemons = async (): Promise<void> => {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
      );
      let result: any[] = [];
      res.data.results.map(async (item: IPokemon) => {
        try {
          const { data } = await axios.get(item.url);

          const pokemon: IPokemon = {
            id: data.id,
            name: item.name,
            url: item.url,
            image_front: data.sprites.front_default,
          };
          result = [...result, pokemon];
          result.sort(function (a, b) {
            return a.id - b.id || a.name.localeCompare(b.name);
          });

          setPokemons(result);
        } catch (err) {}
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handlingSearch = () => {
    setNotFound({
      check: true,
      message: "pokémon not found, please search again",
    });
  };
  //? Hooks
  useEffect(() => {
    fecthPokemons();
  }, []);

  return (
    <div className="bg-[#F5FBFB] px-4 py-10 min-h-screen font-poppins flex flex-col">
      <HeaderComponent />
      <HeaderSearchComponent handleChange={handlingSearch} />
      {notFound?.check ? (
        <NotFoundMainComponent message={notFound.message} />
      ) : (
        <InitialMainComponent />
      )}
    </div>
  );
};

export default App;
