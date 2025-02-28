import { useQuery, UseQueryResult } from "@tanstack/react-query";

const fetchGameById = async (id: number) => {
  const response = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération du jeu");
  }
  return response.json();
};

export const useGameQuery = (gameId: number) => {
  return useQuery({
    queryKey: ["game", gameId],
    queryFn: () => fetchGameById(gameId),
    enabled: !!gameId,
  });
};
