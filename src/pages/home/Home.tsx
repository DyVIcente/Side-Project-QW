import { useGames } from "../../hooks/fetchGames";
export default function Home() {
  const { data, error, isLoading } = useGames();

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div>
      <h1>Liste des Jeux</h1>
      <ul>
        {data.results.map((game: any) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}
