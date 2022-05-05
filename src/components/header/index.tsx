import { HSCProp } from "./interfaces";

export const HeaderComponent = () => {
  return (
    <div className="w-full mb-4">
      <h1 className="text-4xl font-bold text-[#2D3055] mb-4">Pokédex</h1>
      <p className="font-light text-justify">
        Search for a Pokémon by name or using its National Pokédex Number.{" "}
      </p>
    </div>
  );
};

export const HeaderSearchComponent = ({ handleChange }: HSCProp) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="relative flex-1 text-[#2D3055] group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute left-2 top-1/2 -translate-y-1/2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Name or Number"
          className="p-3 pl-12 bg-[#EAF3F5] w-full rounded-lg group-focus:outline-1 outline-[#2D3055]"
        />
      </div>
      <span
        className="bg-[#2D3055] p-2 rounded-lg text-[#EAF3F5]"
        onClick={handleChange}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 rotate-90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </span>
    </div>
  );
};
