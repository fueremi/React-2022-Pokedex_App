import { InitialAsset, NotFoundAsset } from "../../assets";
import { MCProp, NFMCProp } from "./interfaces";

export const InitialMainComponent = () => {
  return (
    <div className="flex-1 flex flex-col text-[#2D3055] justify-center items-center">
      <img
        src={InitialAsset}
        alt="Initial"
        className="w-1/2 h-1/2 opacity-75"
      />
      <h1 className="text-lg w-3/4 text-center capitalize">
        please search for the pokémon.
      </h1>
    </div>
  );
};

export const NotFoundMainComponent = ({ message }: NFMCProp) => {
  return (
    <div className="flex-1 flex flex-col text-[#2D3055] justify-center items-center">
      <img
        src={NotFoundAsset}
        alt="Not Found"
        className="w-1/2 h-1/2 opacity-75"
      />
      <h1 className="text-lg w-3/4 text-center capitalize">{message}</h1>
    </div>
  );
};

export const MainComponent = ({ pokemon }: MCProp) => {
  return (
    <div className="flex-1 flex flex-col text-[#2D3055] justify-center items-center">
      <img
        src={pokemon.image_front}
        alt="Not Found"
        className="w-1/2 h-1/2 opacity-75"
      />
      <h1 className="text-lg w-3/4 text-center capitalize">
        {pokemon.id} - {pokemon.name}
      </h1>
    </div>
  );
};
