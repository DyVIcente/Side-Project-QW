import { useGames } from "../../hooks/fetchGames";
import { Card, CardFooter, Image, Button } from "@heroui/react";
import clsx from "clsx";

export default function Home() {
  const { data, error, isLoading } = useGames();

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  console.log(data, "data");

  return (
    <div className="pt-20">
      <h1>Liste des Jeux</h1>
      <div
        className={clsx(
          "m-auto mb-10 grid  justify-items-center gap-x-10 gap-y-4",
          "md:gap-y-6",
          "dark:grayscale-[0.2]",
          "grid-responsive-home"
        )}
      >
        {data.results.map((game: any) => (
          <Card isFooterBlurred className="border-none rounded-2xl">
            <Image
              alt="Woman listing to music"
              className="object-cover"
              height={200}
              src={game.background_image}
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-2xl bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-center text-white/80">{game.name}</p>
              <p className="text-tiny text-center text-white/80">
                {game.rating}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
