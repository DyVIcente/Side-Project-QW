import { useQuery, UseQueryResult } from "@tanstack/react-query";

const fetchGames = async () => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`
  );
  if (!res.ok) throw new Error("Erreur de récupération des jeux");
  return res.json();
};

export const useGames = (): UseQueryResult<any> => {
  return useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });
};
